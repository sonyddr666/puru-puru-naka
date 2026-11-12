import { execFileSync, spawn } from 'node:child_process';
import fs from 'node:fs';
import fsp from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { DatabaseSync } from 'node:sqlite';
import { readGrokWav } from './grok.mjs';
import { cleanReply } from './psyche.mjs';

const GOOGLE_AI_URL = 'https://www.google.com/ai';
const GROK_URL = 'https://grok.com/';
const GROK_TTS_ORIGIN = 'https://grok.com/rest/app-chat/tts-voices';
const GOOGLE_AUTH_COOKIES = new Set(['SID', '__Secure-1PSID', '__Secure-3PSID', 'SAPISID']);
const GROK_AUTH_COOKIES = new Set(['sso', 'sso-rw']);
const WEBKIT_EPOCH_OFFSET_S = 11_644_473_600;
const browserInstructions = 'Retorne um único objeto JSON em um bloco de código, para preservar as tags de voz.';

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export function googleConversationUrl(value) {
  try {
    const url = new URL(value);
    if (url.protocol === 'https:' && !url.username && !url.password && url.pathname === '/search' &&
        (url.hostname === 'google.com' || url.hostname.endsWith('.google.com'))) return url.href;
  } catch { /* A fresh turn can start without a conversation URL. */ }
  return '';
}

function findChrome() {
  const candidates = [
    process.env.CHROME_PATH,
    'C:/Program Files/Google/Chrome/Application/chrome.exe',
    'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe',
    process.env.LOCALAPPDATA && path.join(process.env.LOCALAPPDATA, 'Google/Chrome/Application/chrome.exe'),
  ].filter(Boolean);
  for (const candidate of candidates) {
    if (fs.existsSync(candidate)) return candidate;
  }
  throw new Error('Google Chrome não encontrado no Windows.');
}

function markCleanExit(profileDir) {
  const prefsPath = path.join(profileDir, 'Default', 'Preferences');
  try {
    const prefs = JSON.parse(fs.readFileSync(prefsPath, 'utf8'));
    prefs.profile ??= {};
    prefs.profile.exit_type = 'Normal';
    prefs.profile.exited_cleanly = true;
    fs.writeFileSync(prefsPath, JSON.stringify(prefs), 'utf8');
  } catch { /* Profile is new or not yet initialized. */ }
}

function checkSqliteCookies(profileDir, fallback = { google: 'disconnected', grok: 'disconnected' }) {
  const locations = [
    path.join(profileDir, 'Default', 'Network', 'Cookies'),
    path.join(profileDir, 'Default', 'Cookies'),
  ];
  const cookieFile = locations.find(candidate => fs.existsSync(candidate));
  if (!cookieFile) {
    return { google: 'disconnected', grok: 'disconnected', browserOpen: false };
  }
  const nowWebkit = Math.floor((Date.now() / 1000 + WEBKIT_EPOCH_OFFSET_S) * 1_000_000);
  const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'pururu-cookies-'));
  const copyPath = path.join(tmpDir, 'Cookies');
  try {
    fs.copyFileSync(cookieFile, copyPath);
    const db = new DatabaseSync(copyPath, { open: true, readOnly: true });
    try {
      const hasCookie = (domainSuffix, names) => {
        const placeholders = [...names].map(() => '?').join(',');
        const row = db.prepare(
          `SELECT 1 FROM cookies WHERE host_key LIKE ? AND name IN (${placeholders}) AND (expires_utc = 0 OR expires_utc > ?) LIMIT 1`
        ).get(`%${domainSuffix}`, ...names, nowWebkit);
        return Boolean(row);
      };
      return {
        google: hasCookie('google.com', GOOGLE_AUTH_COOKIES) ? 'connected' : 'disconnected',
        grok: hasCookie('grok.com', GROK_AUTH_COOKIES) ? 'connected' : 'disconnected',
        browserOpen: false,
      };
    } finally {
      db.close();
    }
  } catch (error) {
    const locked = error?.code === 'EBUSY' || error?.code === 'EPERM';
    return {
      google: fallback.google || 'disconnected',
      grok: fallback.grok || 'disconnected',
      browserOpen: locked,
    };
  } finally {
    fs.rmSync(tmpDir, { recursive: true, force: true });
  }
}

class CdpConnection {
  constructor(ws) {
    this.ws = ws;
    this.nextId = 1;
    this.pending = new Map();
    this.listeners = new Set();
    ws.addEventListener('message', event => {
      let msg;
      try { msg = JSON.parse(String(event.data)); }
      catch { return; }
      if (msg.id) {
        const entry = this.pending.get(msg.id);
        if (entry) {
          this.pending.delete(msg.id);
          if (msg.error) entry.reject(new Error(msg.error.message || 'Erro CDP'));
          else entry.resolve(msg.result);
        }
      } else if (msg.method) {
        for (const listener of this.listeners) listener(msg);
      }
    });
    const closed = () => {
      for (const [, entry] of this.pending) {
        entry.reject(new Error('O navegador foi fechado.'));
      }
      this.pending.clear();
    };
    ws.addEventListener('close', closed);
    ws.addEventListener('error', closed);
  }

  send(method, params = {}, sessionId = undefined, timeoutMs = 30_000) {
    if (this.ws.readyState !== WebSocket.OPEN) {
      return Promise.reject(new Error('Conexão com o navegador encerrada.'));
    }
    const id = this.nextId++;
    const payload = { id, method, params };
    if (sessionId) payload.sessionId = sessionId;
    return new Promise((resolve, reject) => {
      const timer = setTimeout(() => {
        this.pending.delete(id);
        reject(new Error(`Tempo esgotado em ${method}`));
      }, timeoutMs);
      this.pending.set(id, {
        resolve(val) { clearTimeout(timer); resolve(val); },
        reject(err) { clearTimeout(timer); reject(err); },
      });
      this.ws.send(JSON.stringify(payload));
    });
  }

  close() {
    try { this.ws.close(); } catch { /* ignore */ }
  }
}

const READ_GOOGLE_STATE_JS = `(() => {
  const body = (document.body?.innerText || '');
  const compact = body.toLowerCase().replace(/\\s+/g, ' ');
  const blocked = [
    'nossos sistemas detectaram tráfego incomum',
    'unusual traffic from your computer network',
    'detected unusual traffic',
  ].some(m => compact.includes(m));
  const replies = document.querySelectorAll('[data-subtree="aimc"] [data-container-id="main-col"]');
  const root = replies[replies.length - 1];
  let answer = '';
  if (root) {
    const parts = [];
    const walk = el => {
      for (const node of el.childNodes) {
        if (node.nodeType === 3) {
          const t = (node.textContent || '').trim();
          if (t) parts.push(t);
        } else if (node.nodeType === 1) {
          const tag = node.tagName.toLowerCase();
          if (['script', 'style', 'button'].includes(tag) || node.getAttribute('aria-hidden') === 'true') continue;
          const style = getComputedStyle(node);
          if (style.display === 'none' || style.visibility === 'hidden') continue;
          if (tag === 'a' || (node.getAttribute('role') === 'button' && el.tagName.toLowerCase() !== 'u')) continue;
          walk(node);
        }
      }
    };
    walk(root);
    answer = parts.join(' ').replace(/\\s+([,.;:!?])/g, '$1').trim();
  }
  if (!answer) {
    const marker = 'O Modo IA respondeu:';
    const idx = body.lastIndexOf(marker);
    if (idx >= 0) {
      answer = body.slice(idx + marker.length).split(/A IA pode cometer erros|Boa resposta|Compartilhar/)[0].trim();
    }
  }
  answer = answer.replace(/\\s*(?:As respostas da IA podem conter erros\\.?|A IA pode cometer erros\\.?(?: Por isso,? cheque as respostas\\.?)?|AI responses may include mistakes\\.?)(?:\\s*Saiba mais\\.?|\\s*Learn more\\.?)?$/i, '').trim();
  return { blocked, answer, count: replies.length, url: location.href };
})()`;

function buildSendQuestionJs(question, imagePayload) {
  return `(async () => {
    const question = ${JSON.stringify(question)};
    const img = ${JSON.stringify(imagePayload || null)};
    const visible = el => {
      if (!el || el.disabled) return false;
      const style = getComputedStyle(el);
      if (style.display === 'none' || style.visibility === 'hidden') return false;
      const r = el.getBoundingClientRect();
      return r.width > 0 && r.height > 0;
    };
    const findBox = () => {
      const candidates = [...document.querySelectorAll('textarea, [contenteditable="true"], [role="textbox"]')];
      return candidates.find(visible) || null;
    };
    let box = findBox();
    if (!box) {
      const modeBtn = [...document.querySelectorAll('a, button, [role="tab"], [role="link"]')].find(el =>
        visible(el) && /^(Modo IA|AI Mode)$/i.test((el.innerText || el.getAttribute('aria-label') || '').trim())
      );
      if (modeBtn) {
        modeBtn.click();
        await new Promise(r => setTimeout(r, 600));
        box = findBox();
      }
    }
    if (!box) return { ok: false, error: 'O Google não mostrou o campo de conversa. Clique em Contas → Conectar Google e faça login.' };
    box.focus();
    if (img) {
      const bytes = Uint8Array.from(atob(img.base64), c => c.charCodeAt(0));
      const file = new File([bytes], img.name, { type: img.mime });
      const dt = new DataTransfer();
      dt.items.add(file);
      const input = document.querySelector('input[type="file"]');
      if (input) {
        try {
          input.files = dt.files;
          input.dispatchEvent(new Event('change', { bubbles: true }));
        } catch {}
      }
      box.dispatchEvent(new ClipboardEvent('paste', { clipboardData: dt, bubbles: true, cancelable: true }));
      await new Promise(r => setTimeout(r, 900));
    }
    if (box.tagName.toLowerCase() === 'textarea' || box.tagName.toLowerCase() === 'input') {
      const proto = box.tagName.toLowerCase() === 'textarea' ? HTMLTextAreaElement.prototype : HTMLInputElement.prototype;
      const setter = Object.getOwnPropertyDescriptor(proto, 'value')?.set;
      if (setter) setter.call(box, question);
      else box.value = question;
      box.dispatchEvent(new Event('input', { bubbles: true }));
      box.dispatchEvent(new Event('change', { bubbles: true }));
    } else {
      box.focus();
      document.execCommand('selectAll', false, null);
      document.execCommand('insertText', false, question);
      box.dispatchEvent(new InputEvent('input', { bubbles: true, data: question }));
    }
    await new Promise(r => setTimeout(r, 300));
    const sendRe = /^(Enviar|Enviar mensagem|Send|Send message)$/i;
    for (let i = 0; i < 20; i++) {
      const btn = [...document.querySelectorAll('button, [role="button"]')].find(el => {
        if (!visible(el)) return false;
        const label = (el.getAttribute('aria-label') || el.getAttribute('title') || el.innerText || '').trim();
        return sendRe.test(label);
      });
      if (btn && !btn.disabled && btn.getAttribute('aria-disabled') !== 'true') {
        btn.click();
        return { ok: true, method: 'button' };
      }
      await new Promise(r => setTimeout(r, 250));
    }
    box.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter', code: 'Enter', keyCode: 13, which: 13, bubbles: true }));
    return { ok: true, method: 'enter' };
  })()`;
}

export function createPururuBrowser({ profileDir }) {
  let proc = null;
  let loginProc = null;
  let cdp = null;
  let bootPromise = null;
  let lastKnownAuth = { google: 'disconnected', grok: 'disconnected' };
  const hiddenTargets = { chat: null, tts: null };
  let chatLock = Promise.resolve();
  let ttsLock = Promise.resolve();

  function isRunning() {
    return proc !== null && proc.exitCode === null && cdp !== null && cdp.ws.readyState === WebSocket.OPEN;
  }

  function isLoginRunning() {
    return loginProc !== null && loginProc.exitCode === null;
  }

  async function closeAutomation() {
    cdp?.close();
    cdp = null;
    hiddenTargets.chat = null;
    hiddenTargets.tts = null;
    if (proc && proc.exitCode === null) {
      const current = proc;
      proc = null;
      try { current.kill(); } catch { /* ignore */ }
      await new Promise(resolve => {
        const timer = setTimeout(resolve, 1500);
        current.once('exit', () => { clearTimeout(timer); resolve(); });
      });
    }
    proc = null;
  }

  async function closeLoginWindow() {
    const pid = loginProc?.exitCode === null ? loginProc.pid : 0;
    const escapedProfile = profileDir.replace(/'/g, "''");
    try {
      execFileSync('powershell.exe', [
        '-NoProfile',
        '-Command',
        `
Add-Type @"
using System;
using System.Runtime.InteropServices;
using System.Text;
public class PururuWin {
  public delegate bool EnumProc(IntPtr hwnd, IntPtr lParam);
  [DllImport("user32.dll")] public static extern bool EnumWindows(EnumProc lpEnumFunc, IntPtr lParam);
  [DllImport("user32.dll")] public static extern uint GetWindowThreadProcessId(IntPtr hWnd, out uint lpdwProcessId);
  [DllImport("user32.dll")] public static extern bool IsWindowVisible(IntPtr hWnd);
  [DllImport("user32.dll", CharSet=CharSet.Unicode)] public static extern int GetClassName(IntPtr hWnd, StringBuilder lpClassName, int nMaxCount);
  [DllImport("user32.dll")] public static extern bool PostMessage(IntPtr hWnd, uint Msg, IntPtr wParam, IntPtr lParam);
}
"@
$procs = Get-CimInstance Win32_Process -Filter "Name = 'chrome.exe'" | Where-Object { $_.CommandLine -like '*${escapedProfile}*' }
$pids = @($procs.ProcessId)
if (${pid} -gt 0 -and $pids -notcontains ${pid}) { $pids += ${pid} }
if ($pids.Count -gt 0) {
  [PururuWin]::EnumWindows({
    param($hwnd, $lparam)
    $owner = [uint32]0
    [PururuWin]::GetWindowThreadProcessId($hwnd, [ref]$owner) | Out-Null
    if ($pids -contains $owner -and [PururuWin]::IsWindowVisible($hwnd)) {
      $cb = New-Object System.Text.StringBuilder 64
      [PururuWin]::GetClassName($hwnd, $cb, 64) | Out-Null
      if ($cb.ToString() -eq "Chrome_WidgetWin_1") {
        [PururuWin]::PostMessage($hwnd, 0x0010, [IntPtr]::Zero, [IntPtr]::Zero) | Out-Null
      }
    }
    return $true
  }, [IntPtr]::Zero) | Out-Null
}
`,
      ], { stdio: 'ignore', windowsHide: true, timeout: 6_000 });
    } catch { /* ignore */ }

    if (loginProc && loginProc.exitCode === null) {
      const current = loginProc;
      await new Promise(resolve => {
        const timer = setTimeout(resolve, 3500);
        current.once('exit', () => { clearTimeout(timer); resolve(); });
      });
    }
    loginProc = null;
    await sleep(350);
  }

  async function ensureBrowser() {
    if (isRunning()) return cdp;
    if (bootPromise) return bootPromise;
    bootPromise = (async () => {
      await closeLoginWindow();
      const chrome = findChrome();
      await fsp.mkdir(profileDir, { recursive: true });
      markCleanExit(profileDir);
      const portFile = path.join(profileDir, 'DevToolsActivePort');
      await fsp.rm(portFile, { force: true }).catch(() => {});
      const child = spawn(chrome, [
        `--user-data-dir=${profileDir}`,
        '--remote-debugging-port=0',
        '--disable-blink-features=AutomationControlled',
        '--no-first-run',
        '--no-default-browser-check',
        '--lang=pt-BR',
        '--disable-extensions',
        '--disable-sync',
        '--disable-default-apps',
        '--disable-session-crashed-bubble',
        '--hide-crash-restore-bubble',
        '--window-position=-32000,-32000',
        '--window-size=1280,1000',
        'about:blank',
      ], { stdio: 'ignore', windowsHide: true });
      proc = child;
      child.once('exit', () => {
        if (proc === child) {
          proc = null;
          cdp?.close();
          cdp = null;
          hiddenTargets.chat = null;
          hiddenTargets.tts = null;
        }
      });

      const deadline = Date.now() + 15_000;
      let wsUrl = '';
      while (Date.now() < deadline) {
        if (child.exitCode !== null) {
          throw new Error('O Chrome não pôde iniciar no perfil do Pururu. Feche a janela de login e tente novamente.');
        }
        try {
          const raw = await fsp.readFile(portFile, 'utf8');
          const [portLine, pathLine] = raw.trim().split(/\r?\n/);
          if (portLine && pathLine) {
            wsUrl = `ws://127.0.0.1:${portLine.trim()}${pathLine.trim()}`;
            break;
          }
        } catch { /* wait for file */ }
        await sleep(150);
      }
      if (!wsUrl) throw new Error('O navegador do Pururu não respondeu a tempo.');

      const ws = new WebSocket(wsUrl);
      await new Promise((resolve, reject) => {
        ws.addEventListener('open', resolve, { once: true });
        ws.addEventListener('error', () => reject(new Error('Falha ao conectar ao Chrome via CDP.')), { once: true });
      });
      const connection = new CdpConnection(ws);
      cdp = connection;

      const { targetInfos } = await connection.send('Target.getTargets');
      const firstPage = targetInfos?.find(t => t.type === 'page');
      if (firstPage) hiddenTargets.chat = firstPage.targetId;
      return connection;
    })();
    try {
      return await bootPromise;
    } finally {
      bootPromise = null;
    }
  }

  async function attachPage(kind, initialUrl = 'about:blank') {
    const conn = await ensureBrowser();
    let targetId = hiddenTargets[kind];
    if (targetId) {
      const { targetInfos } = await conn.send('Target.getTargets');
      if (!targetInfos?.some(t => t.targetId === targetId)) targetId = null;
    }
    if (!targetId) {
      const created = await conn.send('Target.createTarget', {
        url: initialUrl,
        newWindow: true,
        background: true,
        left: -32000,
        top: -32000,
        width: 1280,
        height: 1000,
      });
      targetId = created.targetId;
      hiddenTargets[kind] = targetId;
    }
    const { sessionId } = await conn.send('Target.attachToTarget', { targetId, flatten: true });
    await conn.send('Page.enable', {}, sessionId);
    await conn.send('Runtime.enable', {}, sessionId);
    return { conn, sessionId, targetId };
  }

  async function evalInPage(conn, sessionId, expression, timeoutMs = 45_000) {
    const res = await conn.send('Runtime.evaluate', {
      expression,
      awaitPromise: true,
      returnByValue: true,
    }, sessionId, timeoutMs);
    if (res.exceptionDetails) {
      throw new Error(res.exceptionDetails.text || 'Erro ao executar script na página.');
    }
    return res.result?.value;
  }

  async function navigateAndWait(conn, sessionId, url, timeoutMs = 30_000) {
    await conn.send('Page.navigate', { url }, sessionId, timeoutMs);
    const deadline = Date.now() + timeoutMs;
    while (Date.now() < deadline) {
      try {
        const state = await evalInPage(conn, sessionId, 'document.readyState', 5_000);
        if (state === 'interactive' || state === 'complete') break;
      } catch { /* navigation in progress */ }
      await sleep(200);
    }
    await sleep(600);
  }

  async function status({ finishLogin = false } = {}) {
    if (finishLogin) {
      await closeLoginWindow();
    }
    if (isLoginRunning()) {
      return {
        google: lastKnownAuth.google,
        grok: lastKnownAuth.grok,
        browserOpen: true,
      };
    }
    if (!isRunning()) {
      const res = checkSqliteCookies(profileDir, lastKnownAuth);
      if (!res.browserOpen) {
        lastKnownAuth = { google: res.google, grok: res.grok };
      }
      return res;
    }
    try {
      const { cookies } = await cdp.send('Storage.getCookies');
      const nowSec = Date.now() / 1000;
      const hasValid = (domain, names) => (cookies || []).some(c => {
        const host = String(c.domain || '').replace(/^\./, '');
        const matchHost = host === domain || host.endsWith('.' + domain);
        const validExp = !c.expires || c.expires <= 0 || c.expires > nowSec;
        return matchHost && names.has(c.name) && validExp;
      });
      lastKnownAuth = {
        google: hasValid('google.com', GOOGLE_AUTH_COOKIES) ? 'connected' : 'disconnected',
        grok: hasValid('grok.com', GROK_AUTH_COOKIES) ? 'connected' : 'disconnected',
      };
      return {
        ...lastKnownAuth,
        browserOpen: false,
      };
    } catch {
      const res = checkSqliteCookies(profileDir, lastKnownAuth);
      if (!res.browserOpen) {
        lastKnownAuth = { google: res.google, grok: res.grok };
      }
      return res;
    }
  }

  async function connect(target = 'google') {
    await closeAutomation();
    const chrome = findChrome();
    await fsp.mkdir(profileDir, { recursive: true });
    markCleanExit(profileDir);
    const url = target === 'grok' ? GROK_URL : GOOGLE_AI_URL;
    const args = [
      `--user-data-dir=${profileDir}`,
      '--no-first-run',
      '--no-default-browser-check',
      '--disable-session-crashed-bubble',
      '--hide-crash-restore-bubble',
    ];
    if (!isLoginRunning()) {
      args.push('--new-window', '--window-position=120,80', '--window-size=1100,820');
    }
    args.push(url);
    const child = spawn(chrome, args, { stdio: 'ignore' });
    if (!isLoginRunning()) {
      loginProc = child;
      child.once('exit', () => {
        if (loginProc === child) loginProc = null;
      });
    }
    return {
      google: lastKnownAuth.google,
      grok: lastKnownAuth.grok,
      browserOpen: true,
    };
  }

  function speak(text, voice = 'ara') {
    const run = async () => {
      const { conn, sessionId } = await attachPage('tts');
      const currentUrl = await evalInPage(conn, sessionId, 'location.href', 5_000).catch(() => '');
      if (!String(currentUrl).startsWith('https://grok.com/')) {
        await navigateAndWait(conn, sessionId, GROK_TTS_ORIGIN, 30_000);
      }
      const script = `(async () => {
        const reply = await fetch('/rest/app-chat/text-to-speech', {
          method: 'POST',
          credentials: 'include',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            text: ${JSON.stringify(text)},
            voiceId: ${JSON.stringify(voice)},
            language: 'pt-BR',
            codec: 'wav',
            sampleRate: 24000,
            textNormalization: true,
          }),
        });
        const body = await reply.text();
        return { status: reply.status, body: reply.ok ? body : body.slice(0, 200) };
      })()`;
      const result = await evalInPage(conn, sessionId, script, 55_000);
      if (!result || result.status !== 200) {
        if (result?.status === 401 || result?.status === 403) {
          throw new Error('Sessão do Grok não conectada. Clique em Contas → Conectar Grok e faça login com o Google.');
        }
        throw new Error(`O Grok recusou o pedido de voz (HTTP ${result?.status ?? 'erro'}).`);
      }
      return { bytes: readGrokWav(result.body), format: 'wav' };
    };
    const job = ttsLock.then(run, run);
    ttsLock = job.catch(() => {});
    return job;
  }

  function ask({ prompt, scene, text, theme, url, image, mime }) {
    const run = async () => {
      const current = await status({ finishLogin: true });
      if (current.google !== 'connected') {
        throw new Error('Conta Google não conectada. Clique em Contas → Conectar Google para entrar.');
      }
      const context = url ? scene : prompt;
      const available = Math.max(0, 5950 - text.length - browserInstructions.length);
      const message = [context?.slice(0, available), browserInstructions, text].filter(Boolean).join('\n\n');
      const { conn, sessionId } = await attachPage('chat');
      const targetUrl = googleConversationUrl(url) || GOOGLE_AI_URL;
      await navigateAndWait(conn, sessionId, targetUrl, 30_000);

      const before = await evalInPage(conn, sessionId, READ_GOOGLE_STATE_JS, 10_000);
      if (before?.blocked) {
        throw new Error('O Google bloqueou temporariamente a conversa. Abra Contas → Conectar Google para verificar.');
      }

      let imagePayload = null;
      if (image && mime) {
        const bytes = await fsp.readFile(image);
        imagePayload = {
          base64: bytes.toString('base64'),
          mime,
          name: 'imagem.' + (mime.split('/')[1] || 'png'),
        };
      }

      const sendResult = await evalInPage(conn, sessionId, buildSendQuestionJs(message, imagePayload), 30_000);
      if (!sendResult?.ok) {
        throw new Error(sendResult?.error || 'Não foi possível enviar a mensagem no Modo IA do Google.');
      }

      const start = Date.now();
      let deadline = start + (imagePayload ? 90_000 : 60_000);
      const hardDeadline = start + 150_000;
      let lastAnswer = '';
      let stableSince = start;
      let finalState = null;

      while (Date.now() < deadline) {
        await sleep(300);
        let state;
        try {
          state = await evalInPage(conn, sessionId, READ_GOOGLE_STATE_JS, 8_000);
        } catch {
          continue;
        }
        if (!state) continue;
        if (state.blocked) {
          throw new Error('O Google interrompeu a conversa. Clique em Contas → Conectar Google e confira sua sessão.');
        }
        const now = Date.now();
        const isNew = Boolean(state.answer) && state.answer !== (before?.answer || '');
        if (state.answer !== lastAnswer) {
          lastAnswer = state.answer;
          stableSince = now;
          if (isNew) deadline = Math.min(Math.max(deadline, now + 20_000), hardDeadline);
        }
        if (isNew && now - stableSince >= 1300) {
          finalState = state;
          break;
        }
      }

      await conn.send('Page.navigate', { url: 'about:blank' }, sessionId).catch(() => {});

      if (!finalState?.answer) {
        throw new Error('O Modo IA do Google não respondeu a tempo. Tente novamente.');
      }
      const rawAnswer = finalState.answer.trim();
      const startJson = rawAnswer.indexOf('{');
      const endJson = rawAnswer.lastIndexOf('}');
      let reply;
      try {
        if (startJson < 0 || endJson < startJson) throw new SyntaxError();
        reply = cleanReply(rawAnswer.slice(startJson, endJson + 1), theme);
      } catch (error) {
        if (!(error instanceof SyntaxError)) throw error;
        if (startJson >= 0 && /"speech"\s*:/.test(rawAnswer)) {
          throw new Error('O Modo IA retornou uma fala incompleta. Use “Tentar de novo” no histórico.');
        }
        reply = cleanReply(JSON.stringify({ speech: rawAnswer, emotion: 'neutral', intensity: 0.4 }), theme);
      }
      return { reply, url: googleConversationUrl(finalState.url) };
    };
    const job = chatLock.then(run, run);
    chatLock = job.catch(() => {});
    return job;
  }

  function close() {
    cdp?.close();
    cdp = null;
    if (proc && proc.exitCode === null) {
      try { proc.kill(); } catch { /* ignore */ }
    }
    proc = null;
  }

  return { ask, speak, status, connect, close };
}

