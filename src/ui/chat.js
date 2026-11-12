import { createVoice } from '../audio/voice.js';

const maxImage = 8 * 1024 * 1024;
const grabReplyCooldown = 6_000;
const preparingVoice = 'Preparando a voz…';
const historyUrl = '/api/pururu/history';
const authUrl = '/api/pururu/auth';
const turnUrl = '/api/pururu/turn';
const voiceUrl = id => `/api/pururu/voice/${id}`;
const voiceEmoji = {
  laugh: '😂', chuckle: '😄', giggle: '🤭', cry: '😢', sigh: '😮‍💨',
  breath: '💨', inhale: '💨', exhale: '💨', tsk: '😒', 'tongue-click': '👅',
  'lip-smack': '👄', pause: '⏸️', 'long-pause': '⏸️', 'hum-tune': '🎶',
  soft: '🔈', whisper: '🤫', loud: '📣', 'build-intensity': '🔊',
  'decrease-intensity': '🔉', 'higher-pitch': '⬆️', 'lower-pitch': '⬇️',
  slow: '🐢', fast: '⚡', 'sing-song': '🎵', singing: '🎤', emphasis: '❗',
};

function messageText(row) {
  const spoken = row.reply?.voiceText;
  if (typeof spoken !== 'string') return row.text;
  return spoken.replace(/\[([a-z-]+)\]|<(\/?)([a-z-]+)>/g, (tag, inline, closing, wrapping) => {
    const emoji = voiceEmoji[inline ?? wrapping];
    return emoji ? (closing ? '' : emoji + ' ') : tag;
  }).replace(/\s+/g, ' ').trim();
}

async function jsonRequest(url, options) {
  const response = await fetch(url, options);
  const result = await response.json().catch(() => null);
  if (!result || (!response.ok && !result.user)) throw new Error(result?.error || 'Abra o Pururu pelo servidor local para usar o chat.');
  return result;
}

function encodeImage(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve({ name: file.name, data: String(reader.result).split(',')[1] });
    reader.onerror = () => reject(new Error('Não foi possível ler a imagem.'));
    reader.readAsDataURL(file);
  });
}

export function createChat({ getContext, onReply }) {
  const el = id => document.getElementById(id);
  const panel = el('puru-chat');
  const toggle = el('chat-history-toggle');
  const history = el('chat-history');
  const list = el('chat-messages');
  const older = el('chat-older');
  const form = el('chat-compose');
  const input = el('chat-text');
  const file = el('chat-file');
  const attachment = el('chat-attachment');
  const mic = el('chat-mic');
  const accountsButton = el('chat-accounts');
  const authPanel = el('chat-auth-panel');
  const authGoogleState = el('auth-google-state');
  const authGrokState = el('auth-grok-state');
  const authGoogleBtn = el('auth-google-btn');
  const authGrokBtn = el('auth-grok-btn');
  const authRefreshBtn = el('auth-refresh-btn');
  const authBrowserHint = el('auth-browser-hint');
  const voiceButton = el('chat-voice');
  const liveButton = el('chat-live');
  const status = el('chat-status');
  const pending = el('chat-pending');
  const pendingText = el('chat-pending-text');
  const voice = createVoice();
  const messages = new Map();
  const sending = new Map();
  const retryPayloads = new Map();
  const delivered = new Set();
  const speechQueue = [];
  const Recognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  let selected, recognition, pendingGrab, grabTimer, playback, liveSession, liveTimer, voiceBeforeLive, authPollTimer;
  let work = Promise.resolve();
  let pendingTurns = 0, nextGrabReply = 0;
  let voiceEnabled = true;
  try { voiceEnabled = localStorage.getItem('pururu-voice') !== 'off'; }
  catch { /* Use the default in private storage modes. */ }

  function setStatus(text = '') { status.textContent = text; status.hidden = !text; }
  function showHistory(open) {
    history.hidden = !open;
    toggle.setAttribute('aria-expanded', String(open));
    if (open) history.scrollTop = history.scrollHeight;
  }
  function showAuth(open) {
    authPanel.hidden = !open;
    accountsButton.setAttribute('aria-expanded', String(open));
    if (!open && authPollTimer) {
      clearInterval(authPollTimer);
      authPollTimer = null;
    }
  }
  function applyAuthState(auth) {
    if (!auth) return;
    const labels = {
      connected: 'Conectado ✓',
      disconnected: 'Não conectado',
      unknown: 'Aguardando…',
    };
    const gState = auth.google || 'disconnected';
    const kState = auth.grok || 'disconnected';
    authGoogleState.dataset.state = gState;
    authGoogleState.textContent = labels[gState] || labels.disconnected;
    authGoogleBtn.textContent = gState === 'connected' ? 'Trocar Google' : 'Conectar Google';
    authGrokState.dataset.state = kState;
    authGrokState.textContent = labels[kState] || labels.disconnected;
    authGrokBtn.textContent = kState === 'connected' ? 'Trocar Grok' : 'Conectar Grok';
    const bothReady = gState === 'connected' && kState === 'connected';
    accountsButton.dataset.ready = String(bothReady);
    authBrowserHint.textContent = auth.browserOpen
      ? 'Janela de login aberta — faça login e aguarde.'
      : (bothReady ? 'Contas prontas!' : '');
    if (bothReady && authPollTimer && !auth.browserOpen) {
      clearInterval(authPollTimer);
      authPollTimer = null;
    }
  }
  async function refreshAuth({ openIfNeeded = false } = {}) {
    try {
      const response = await fetch(authUrl);
      const auth = await response.json();
      applyAuthState(auth);
      if (openIfNeeded && (auth.google !== 'connected' || auth.grok !== 'connected')) {
        showAuth(true);
      }
      return auth;
    } catch {
      return null;
    }
  }
  async function connectAccount(target) {
    const btn = target === 'grok' ? authGrokBtn : authGoogleBtn;
    btn.disabled = true;
    authBrowserHint.textContent = 'Abrindo navegador para login…';
    try {
      const response = await fetch(authUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ target }),
      });
      const auth = await response.json();
      if (!response.ok) throw new Error(auth?.error || 'Não foi possível abrir o navegador.');
      applyAuthState(auth);
      authBrowserHint.textContent = target === 'grok'
        ? 'No navegador aberto, clique em "Continue with Google" no Grok.'
        : 'Entre na sua conta Google na janela que abriu.';
      if (!authPollTimer) {
        authPollTimer = setInterval(() => { void refreshAuth(); }, 3000);
      }
    } catch (error) {
      setStatus(error.message);
    } finally {
      btn.disabled = false;
    }
  }
  function updateVoiceButton() {
    voiceButton.setAttribute('aria-pressed', String(voiceEnabled));
    voiceButton.textContent = voiceEnabled ? 'Voz' : 'Voz desligada';
  }
  updateVoiceButton();

  function stopVoice() {
    playback?.reveal?.();
    for (const item of speechQueue) item.reveal?.();
    speechQueue.length = 0;
    playback?.controller.abort();
    voice.stop();
  }
  function unlock() {
    if (voiceEnabled) voice.unlock();
  }
  window.addEventListener('pointerdown', unlock, { capture: true, passive: true });
  window.addEventListener('click', unlock, { capture: true });
  window.addEventListener('keydown', unlock, { capture: true });

  function liveReady() {
    return liveSession && !recognition && !pendingTurns && !playback && !speechQueue.length;
  }

  function scheduleLive(delay = 150) {
    if (liveTimer || !liveReady()) return;
    liveTimer = setTimeout(() => {
      liveTimer = null;
      if (liveReady()) startListening();
    }, delay);
  }

  async function playNext() {
    if (!voiceEnabled || recognition || playback || !speechQueue.length) return;
    const { row, reveal } = speechQueue.shift();
    const controller = new AbortController();
    playback = { controller, reveal };
    if (status.hidden) setStatus(preparingVoice);
    let failed = false;
    try {
      const response = await fetch(voiceUrl(row.id), { method: 'POST', signal: controller.signal });
      if (!response.ok) {
        const payload = await response.json().catch(() => null);
        throw new Error(payload?.error || 'A voz do Grok está indisponível.');
      }
      const bytes = await response.arrayBuffer();
      if (!controller.signal.aborted) {
        await voice.play(bytes, controller.signal, duration => {
          if (status.textContent === preparingVoice) setStatus(liveSession ? 'Pururu está falando…' : '');
          if (reveal) reveal(duration);
          else onReply(row, false, duration);
        });
      }
    } catch (error) {
      if (!controller.signal.aborted) {
        failed = true;
        setStatus(error.message);
      }
    } finally {
      if ([preparingVoice, 'Pururu está falando…'].includes(status.textContent)) setStatus();
      reveal?.();
      playback = null;
      void playNext();
      scheduleLive(failed ? 1500 : 150);
    }
  }

  function makeRow(row) {
    const item = document.createElement('li');
    item.className = 'chat-line ' + row.role;
    item.dataset.id = row.id;
    if (row.grab && !row.text && !row.image) {
      item.classList.add('event');
      item.textContent = 'Você agarrou o Pururu';
    } else if (row.text) {
      item.append(document.createTextNode(messageText(row)));
    }
    if (row.image) {
      const link = document.createElement(row.image.url ? 'a' : 'span');
      if (row.image.url) {
        link.href = row.image.url;
        link.target = '_blank';
        link.rel = 'noopener';
        const thumbnail = document.createElement('img');
        thumbnail.src = row.image.url;
        thumbnail.alt = row.image.name;
        thumbnail.loading = 'lazy';
        link.append(thumbnail);
      }
      link.append(document.createTextNode(row.image.name));
      item.append(link);
    }
    if (row.state === 'sending') {
      const label = document.createElement('small');
      label.className = 'chat-sending';
      label.textContent = 'Enviando…';
      item.append(label);
    }
    if (row.role === 'assistant' || row.state === 'error' || row.state === 'pending') {
      const control = document.createElement('button');
      control.type = 'button';
      control.textContent = row.role === 'assistant' ? 'Ouvir' : 'Tentar de novo';
      control.addEventListener('click', () => {
        if (row.role !== 'assistant') {
          if (liveSession) stopListening();
          return enqueue(retryPayloads.get(row.id) ?? { id: row.id, retry: true }, liveSession);
        }
        voiceEnabled = true;
        if (!liveSession) saveVoice();
        voice.unlock();
        if (liveSession) stopListening();
        stopVoice();
        setStatus();
        speechQueue.push({ row });
        void playNext();
      });
      item.append(document.createElement('br'), control);
    }
    return item;
  }

  function upsert(row, after) {
    messages.set(row.id, row);
    if (row.state === 'sending') sending.set(row.id, row);
    else sending.delete(row.id);
    const latest = [...sending.values()].at(-1);
    pending.hidden = !latest;
    pendingText.textContent = latest?.text || latest?.image?.name || '';
    const item = makeRow(row);
    const existing = list.querySelector(`[data-id="${row.id}"]`);
    const parent = after && list.querySelector(`[data-id="${after}"]`);
    if (existing) existing.replaceWith(item);
    else if (parent) parent.after(item);
    else list.append(item);
    history.scrollTop = history.scrollHeight;
  }

  async function loadHistory(before) {
    const result = await jsonRequest(before ? `${historyUrl}?before=${before}` : historyUrl);
    const previousHeight = history.scrollHeight;
    const entries = document.createDocumentFragment();
    for (const row of result.messages) {
      if (messages.has(row.id)) continue;
      messages.set(row.id, row);
      entries.append(makeRow(row));
    }
    list.prepend(entries);
    older.hidden = !result.more;
    if (before) history.scrollTop += history.scrollHeight - previousHeight;
    else {
      if (!history.hidden) history.scrollTop = history.scrollHeight;
      if (result.auth) {
        applyAuthState(result.auth);
        if (result.auth.google !== 'connected' || result.auth.grok !== 'connected') {
          showAuth(true);
        }
      } else if (!result.configured.llm) {
        showAuth(true);
      }
    }
  }

  let started = false;
  function initialize() {
    if (started) return;
    started = true;
    loadHistory().catch(error => setStatus(error.message));
  }
  setTimeout(initialize, 250);

  async function send(payload, fromLive) {
    setStatus();
    try {
      const { file, ...request } = payload;
      const context = getContext();
      if (request.retry || request.theme === context.theme) {
        Object.assign(request, { theme: context.theme, scene: context.scene });
      }
      if (file) request.image = await encodeImage(file);
      const result = await jsonRequest(turnUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(request),
      });
      if (result.user) retryPayloads.delete(payload.id);
      if (result.error) {
        if (result.user) upsert(result.user);
        setStatus(result.error);
        return false;
      }
      setStatus();
      const row = result.reply;
      if (!row || delivered.has(row.id)) {
        if (result.user) upsert(result.user);
        return;
      }
      delivered.add(row.id);
      if (result.user) upsert(result.user);
      upsert(row, result.user?.id);
      onReply(row, true, 0);
      if (voiceEnabled && (!fromLive || fromLive === liveSession)) {
        speechQueue.push({ row });
        void playNext();
      }
    } catch (error) {
      const row = messages.get(payload.id);
      if (row?.state === 'sending') upsert({ ...row, state: 'error' });
      setStatus(error.message);
      return false;
    }
  }

  function enqueue(payload, fromLive) {
    const existing = messages.get(payload.id);
    if (existing?.state === 'sending') return;
    if (existing || payload.text || payload.file) {
      if (!payload.retry) retryPayloads.set(payload.id, payload);
      upsert({
        ...existing, id: payload.id, role: 'user', state: 'sending',
        text: payload.text ?? existing?.text,
        image: existing?.image ?? (payload.file ? { name: payload.file.name } : null),
      });
    }
    initialize();
    pendingTurns++;
    work = work.then(async () => {
      const succeeded = await send(payload, fromLive);
      pendingTurns--;
      scheduleLive(succeeded === false ? 1500 : 150);
    });
  }

  function flushGrab() {
    clearTimeout(grabTimer);
    if (!pendingGrab || recognition) return;
    const context = pendingGrab;
    pendingGrab = null;
    const now = performance.now();
    if (liveSession || now < nextGrabReply || pendingTurns || playback || speechQueue.length) return;
    nextGrabReply = now + grabReplyCooldown;
    enqueue({ id: crypto.randomUUID(), grab: true, ...context });
  }

  function grabbed() {
    pendingGrab = getContext();
    clearTimeout(grabTimer);
    grabTimer = setTimeout(flushGrab, 650);
  }

  function submit(text, keepDraft = false) {
    text = text.trim();
    const image = selected;
    if (!text && !image) return;
    const grab = Boolean(pendingGrab);
    const context = getContext();
    const fromLive = liveSession;
    pendingGrab = null;
    clearTimeout(grabTimer);
    if (!keepDraft) input.value = '';
    selectFile();
    if (!fromLive) showHistory(true);
    enqueue({ id: crypto.randomUUID(), text, grab, ...context, file: image }, fromLive);
  }

  function selectFile(next) {
    selected = next;
    attachment.hidden = !next;
    el('chat-filename').textContent = next?.name ?? '';
    if (!next) file.value = '';
  }

  function saveVoice() {
    try { localStorage.setItem('pururu-voice', voiceEnabled ? 'on' : 'off'); }
    catch { /* Playback is still available during this visit. */ }
    updateVoiceButton();
  }

  form.addEventListener('submit', event => {
    event.preventDefault();
    const text = input.value;
    if (recognition && (text.trim() || selected)) {
      stopListening();
    }
    submit(text);
  });
  el('chat-attach').addEventListener('click', () => file.click());
  el('chat-remove').addEventListener('click', () => selectFile());
  file.addEventListener('change', () => {
    const next = file.files[0];
    if (!next) return;
    if (next.size > maxImage) { selectFile(); setStatus('Escolha uma imagem de até 8 MB.'); return; }
    selectFile(next);
    setStatus();
  });
  toggle.addEventListener('click', () => { initialize(); showHistory(history.hidden); });
  accountsButton.addEventListener('click', () => {
    initialize();
    const opening = authPanel.hidden;
    showAuth(opening);
    if (opening) void refreshAuth();
  });
  authGoogleBtn.addEventListener('click', () => { void connectAccount('google'); });
  authGrokBtn.addEventListener('click', () => { void connectAccount('grok'); });
  authRefreshBtn.addEventListener('click', () => { void refreshAuth(); });
  older.addEventListener('click', () => {
    const first = messages.get(list.firstElementChild?.dataset.id);
    if (first) loadHistory(first.cursor).catch(error => setStatus(error.message));
  });
  voiceButton.addEventListener('click', () => {
    voiceEnabled = !voiceEnabled;
    saveVoice();
    if (voiceEnabled) voice.unlock();
    else stopVoice();
  });
  panel.addEventListener('focusin', initialize, { once: true });

  function releaseRecognition() {
    const active = recognition;
    recognition = null;
    delete panel.dataset.listening;
    input.readOnly = false;
    if (active) input.value = active.draft;
    mic.setAttribute('aria-pressed', 'false');
    mic.setAttribute('aria-label', 'Usar microfone');
    mic.title = 'Usar microfone';
    return active;
  }

  function stopListening() {
    releaseRecognition()?.session.abort();
  }

  function endLive() {
    liveSession = null;
    clearTimeout(liveTimer);
    liveTimer = null;
    liveButton.setAttribute('aria-pressed', 'false');
    liveButton.title = 'Iniciar conversa por voz contínua';
    mic.disabled = false;
    voiceButton.disabled = false;
    voiceEnabled = voiceBeforeLive;
    updateVoiceButton();
    stopListening();
    stopVoice();
    pendingGrab = null;
    setStatus();
  }

  function startListening() {
    const live = Boolean(liveSession);
    const session = new Recognition();
    session.lang = 'pt-BR';
    session.interimResults = true;
    session.continuous = false;
    session.maxAlternatives = 1;
    let failed = false, stopping = false, heard = '', finalText = '';
    function finalize() {
      if (stopping) return;
      stopping = true;
      session.stop();
    }
    const draft = input.value;
    const withDraft = transcript => transcript ? [draft.trimEnd(), transcript].filter(Boolean).join(' ') : draft;
    recognition = { session, finalize, draft };
    panel.dataset.listening = '';
    input.readOnly = true;
    if (live) input.value = '';
    mic.setAttribute('aria-pressed', 'true');
    mic.setAttribute('aria-label', 'Encerrar ditado');
    mic.title = 'Encerrar ditado';
    setStatus('Abrindo microfone…');
    session.onaudiostart = () => {
      if (recognition?.session === session) setStatus('Ouvindo…');
    };
    session.onresult = event => {
      if (recognition?.session !== session) return;
      const results = Array.from(event.results);
      const preview = results.map(result => result[0].transcript).join(' ').trim();
      if (preview) heard = preview;
      const confirmed = results.filter(result => result.isFinal).map(result => result[0].transcript).join(' ').trim();
      if (confirmed) finalText = confirmed;
      input.value = live ? heard : withDraft(heard);
      input.scrollLeft = input.scrollWidth;
    };
    session.onerror = event => {
      if (recognition?.session !== session || event.error === 'no-speech' || event.error === 'aborted') return;
      failed = true;
      if (liveSession) endLive();
      const errors = {
        'not-allowed': 'Permita o microfone no Chrome.',
        'service-not-allowed': 'O reconhecimento de fala está bloqueado neste navegador.',
        'audio-capture': 'O Chrome não encontrou um microfone. Confira a entrada de áudio.',
        network: 'O Chrome perdeu a conexão com o reconhecimento de fala.',
      };
      setStatus(errors[event.error] || 'O Chrome não conseguiu reconhecer a fala.');
    };
    session.onend = () => {
      if (recognition?.session !== session) return;
      releaseRecognition();
      const transcript = live ? finalText || heard : withDraft(finalText || heard);
      if (transcript && !failed) {
        submit(transcript, live);
      } else {
        if (!failed) setStatus(liveSession
          ? 'Nenhuma fala reconhecida. Tentando de novo…'
          : 'Nenhuma fala reconhecida. Toque no microfone para tentar de novo.');
        flushGrab();
      }
      void playNext();
      scheduleLive(transcript ? 150 : 1100);
    };
    try { session.start(); }
    catch {
      releaseRecognition();
      if (liveSession) endLive();
      setStatus('O Chrome não conseguiu iniciar o microfone.');
      flushGrab();
    }
  }

  mic.addEventListener('click', () => {
    if (!Recognition) return setStatus('Abra no Chrome para usar o microfone.');
    if (recognition) { recognition.finalize(); return; }
    unlock();
    stopVoice();
    startListening();
  });

  liveButton.addEventListener('click', () => {
    if (liveSession) return endLive();
    if (!Recognition) return setStatus('Abra no Chrome para usar o modo Live.');
    initialize();
    liveSession = Symbol();
    liveButton.setAttribute('aria-pressed', 'true');
    liveButton.title = 'Encerrar conversa por voz contínua';
    mic.disabled = true;
    voiceButton.disabled = true;
    voiceBeforeLive = voiceEnabled;
    voiceEnabled = true;
    updateVoiceButton();
    unlock();
    showHistory(false);
    if (liveReady()) startListening();
  });

  return { grabbed, frame: voice.frame };
}
