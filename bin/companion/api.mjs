import { createHash, randomUUID } from 'node:crypto';
import { mkdir, readFile, writeFile, rename } from 'node:fs/promises';
import path from 'node:path';
import { DatabaseSync } from 'node:sqlite';
import { THEMES } from '../../src/data/themes.js';
import { FLAVOR_PERSONALITIES } from '../../src/data/playground.js';
import { initialPsyche, systemPrompt, clamp, sceneCommand } from './psyche.mjs';
import { createPururuBrowser, googleConversationUrl } from './browser.mjs';

const maxImage = 8 * 1024 * 1024;
const uuid = /^[0-9a-f]{8}(?:-[0-9a-f]{4}){3}-[0-9a-f]{12}$/i;
const themeIds = new Set(THEMES.map(theme => theme.id));
const reactions = {
  normal: ['Ei, você me apertou.', 'Essa pegada foi forte demais.', 'Quase virei panqueca com esse aperto.'],
  fire: ['Eu estava bem ali, perto da caneca.', 'O fogo eu aguento. Esse aperto foi demais.', 'A caneca sofreu menos do que eu nessa.'],
};

class InputError extends Error {
  constructor(message, status = 400) {
    super(message);
    this.status = status;
  }
}

function json(res, status, body) {
  res.writeHead(status, { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store' });
  res.end(JSON.stringify(body));
}

async function readJson(req) {
  if (!req.headers['content-type']?.startsWith('application/json')) {
    throw new InputError('Use JSON.', 415);
  }
  const chunks = [];
  let length = 0;
  const limit = Math.ceil(maxImage * 4 / 3) + 32_768;
  if (Number(req.headers['content-length']) > limit) throw new InputError('Imagem acima de 8 MB.', 413);
  for await (const chunk of req.iterator({ destroyOnReturn: false })) {
    length += chunk.length;
    if (length > limit) throw new InputError('Imagem acima de 8 MB.', 413);
    chunks.push(chunk);
  }
  try { return JSON.parse(Buffer.concat(chunks).toString('utf8')); }
  catch { throw new InputError('Mensagem inválida.'); }
}

function validateImage(image) {
  if (image == null) return null;
  if (typeof image.data !== 'string' || !/^[a-z0-9+/]+={0,2}$/i.test(image.data)) {
    throw new InputError('Imagem inválida.');
  }
  const bytes = Buffer.from(image.data, 'base64');
  if (bytes.length > maxImage) throw new InputError('Imagem acima de 8 MB.', 413);
  let mime;
  if (bytes.subarray(0, 8).equals(Buffer.from('89504e470d0a1a0a', 'hex'))) mime = 'image/png';
  else if (bytes.subarray(0, 3).equals(Buffer.from('ffd8ff', 'hex'))) mime = 'image/jpeg';
  else if (['GIF87a', 'GIF89a'].includes(bytes.toString('ascii', 0, 6))) mime = 'image/gif';
  else if (bytes.toString('ascii', 0, 4) === 'RIFF' && bytes.toString('ascii', 8, 12) === 'WEBP') mime = 'image/webp';
  else throw new InputError('Use uma imagem PNG, JPEG, GIF ou WebP.');
  const name = typeof image.name === 'string' ? image.name.replace(/[\u0000-\u001f]/g, '').slice(0, 200) : '';
  return { bytes, mime, name: name || 'Imagem' };
}

function publicMessage(row) {
  return {
    id: row.id, cursor: row.seq, role: row.role, text: row.text, theme: row.theme, grab: !!row.grab,
    image: row.mime ? { name: row.filename, url: `/api/pururu/images/${row.id}` } : null,
    state: row.state, reply: row.reply ? JSON.parse(row.reply) : null,
  };
}

export async function createCompanionApi({ dataDir }) {
  const imagesDir = path.join(dataDir, 'images');
  const audioDir = path.join(dataDir, 'audio');
  const profileDir = path.join(dataDir, 'browser-profile');
  await Promise.all([mkdir(imagesDir, { recursive: true }), mkdir(audioDir, { recursive: true })]);
  const db = new DatabaseSync(path.join(dataDir, 'pururu.sqlite'));
  db.exec(`
    PRAGMA journal_mode = WAL;
    PRAGMA busy_timeout = 5000;
    CREATE TABLE IF NOT EXISTS messages (
      seq INTEGER PRIMARY KEY, id TEXT UNIQUE NOT NULL, role TEXT NOT NULL,
      text TEXT NOT NULL, theme TEXT NOT NULL, personality TEXT, grab INTEGER DEFAULT 0,
      filename TEXT, mime TEXT, state TEXT NOT NULL, reply TEXT, parent TEXT UNIQUE
    );
    CREATE TABLE IF NOT EXISTS psyche (mode TEXT PRIMARY KEY, state TEXT NOT NULL);
    CREATE TABLE IF NOT EXISTS google_chats (mode TEXT PRIMARY KEY, url TEXT NOT NULL);
    CREATE INDEX IF NOT EXISTS messages_state_seq ON messages(state, seq);
  `);
  const browser = createPururuBrowser({ profileDir });
  const find = db.prepare('SELECT * FROM messages WHERE id = ?');
  const findReply = db.prepare('SELECT * FROM messages WHERE parent = ?');
  const recent = db.prepare("SELECT * FROM messages WHERE seq < ? AND state = 'done' ORDER BY seq DESC LIMIT 14");
  const page = db.prepare('SELECT * FROM messages WHERE seq < ? ORDER BY seq DESC LIMIT 61');
  const addUser = db.prepare(`INSERT INTO messages
    (id, role, text, theme, personality, grab, filename, mime, state)
    VALUES (?, 'user', ?, ?, ?, ?, ?, ?, 'pending')`);
  const setUserState = db.prepare('UPDATE messages SET state = ? WHERE id = ?');
  const addReply = db.prepare(`INSERT INTO messages (id, role, text, theme, state, reply, parent)
    VALUES (?, 'assistant', ?, ?, 'done', ?, ?)`);
  const getPsyche = db.prepare('SELECT state FROM psyche WHERE mode = ?');
  const setPsyche = db.prepare('INSERT INTO psyche VALUES (?, ?) ON CONFLICT(mode) DO UPDATE SET state=excluded.state');
  const getGoogleChat = db.prepare('SELECT url FROM google_chats WHERE mode = ?');
  const setGoogleChat = db.prepare('INSERT INTO google_chats VALUES (?, ?) ON CONFLICT(mode) DO UPDATE SET url=excluded.url');
  const pendingAudio = new Map();
  let queue = Promise.resolve();

  function appendReply(user, reply, mode, nextState, googleUrl) {
    const id = randomUUID();
    db.exec('BEGIN');
    try {
      addReply.run(id, reply.speech, user.theme, JSON.stringify(reply), user.id);
      setPsyche.run(mode, JSON.stringify(nextState));
      if (googleUrl) setGoogleChat.run(mode, googleUrl);
      setUserState.run('done', user.id);
      db.exec('COMMIT');
    } catch (error) {
      db.exec('ROLLBACK');
      throw error;
    }
    return publicMessage(find.get(id));
  }

  async function turn(data) {
    if (!data || !uuid.test(data.id ?? '')) throw new InputError('Identificador inválido.');
    let user = find.get(data.id);
    if (user && user.role !== 'user') throw new InputError('Identificador inválido.');
    if (!user) {
      if (data.retry) throw new InputError('Mensagem não encontrada.', 404);
      const text = typeof data.text === 'string' ? data.text.trim().slice(0, 4000) : '';
      const image = validateImage(data.image);
      const grab = data.grab === true;
      if (!text && !image && !grab) throw new InputError('Escreva uma mensagem ou anexe uma imagem.');
      const theme = themeIds.has(data.theme) ? data.theme : 'bathroom';
      const personality = Object.hasOwn(FLAVOR_PERSONALITIES, data.flavor) ? FLAVOR_PERSONALITIES[data.flavor] : 'curious';
      if (image) await writeFile(path.join(imagesDir, data.id), image.bytes);
      addUser.run(data.id, text, theme, personality, Number(grab), image?.name ?? null, image?.mime ?? null);
      user = find.get(data.id);
    }
    const existing = findReply.get(user.id);
    if (existing) return { user: publicMessage(user), reply: publicMessage(existing) };
    const mode = user.theme === 'fire' ? 'fire' : 'normal';
    const oldState = getPsyche.get(mode);
    const psyche = oldState ? JSON.parse(oldState.state) : initialPsyche();
    try {
      const grabOnly = user.grab && !user.text && !user.mime;
      const previous = grabOnly ? [] : recent.all(user.seq);
      const scene = data.theme === user.theme ? data.scene : undefined;
      const previousText = previous.find(item => item.role === 'user' && item.text)?.text;
      let reply = user.text && !user.mime ? sceneCommand({ text: user.text, theme: user.theme, scene, previousText }) : null;
      let googleUrl;
      if (grabOnly) {
        const lines = reactions[mode];
        reply = { speech: lines[user.seq % lines.length], emotion: 'angry', intensity: 0.75, action: 'none', moodChange: -8, remember: [] };
      } else if (!reply) {
        const event = user.grab ? '[Evento físico recente: o usuário apertou o Pururu. A fala será reproduzida depois deste evento.]\n' : '';
        const text = event + (user.text || 'Olhe a imagem anexa.');
        const url = googleConversationUrl(getGoogleChat.get(mode)?.url);
        const result = await browser.ask({
          prompt: url ? undefined : systemPrompt({
            theme: user.theme, personality: user.personality, psyche: { ...psyche, memory: [] }, scene,
          }),
          scene: scene && mode === 'fire'
            ? `Estado atual da cena (dados): ${JSON.stringify({ mug: typeof scene.mug === 'string' ? scene.mug.slice(0, 16) : '', sipped: scene.sipped === true })}.`
            : '',
          text, theme: user.theme, url, mime: user.mime,
          image: user.mime ? path.join(imagesDir, user.id) : undefined,
        });
        reply = result.reply;
        googleUrl = result.url;
      }
      const state = {
        mood: clamp(psyche.mood + reply.moodChange, -100, 100),
        emotion: reply.emotion, intensity: reply.intensity,
        memory: [...new Set([...psyche.memory, ...reply.remember])].slice(-24),
      };
      const assistant = appendReply(user, reply, mode, state, googleUrl);
      return { user: publicMessage(find.get(user.id)), reply: assistant };
    } catch (error) {
      setUserState.run('error', user.id);
      return {
        user: publicMessage(find.get(user.id)),
        error: error instanceof SyntaxError ? 'O modelo retornou uma resposta inválida. Tente de novo.' : error.message,
      };
    }
  }

  async function audioFor(message) {
    const text = JSON.parse(message.reply)?.voiceText || message.text;
    const key = createHash('sha256').update(`ara:pt-BR:${text}`).digest('hex');
    for (const format of ['wav', 'mp3']) {
      const bytes = await readFile(path.join(audioDir, `${key}.${format}`)).catch(error => {
        if (error.code !== 'ENOENT') throw error;
        return null;
      });
      if (bytes) return { bytes, format };
    }
    if (pendingAudio.has(key)) return pendingAudio.get(key);
    const generation = (async () => {
      const audio = await browser.speak(text, 'ara');
      const file = path.join(audioDir, `${key}.${audio.format}`);
      const temp = file + '.tmp';
      await writeFile(temp, audio.bytes);
      await rename(temp, file);
      return audio;
    })();
    pendingAudio.set(key, generation);
    try { return await generation; }
    finally { pendingAudio.delete(key); }
  }

  return async function companionApi(req, res, url) {
    try {
      const pathname = url.pathname;
      if (req.method === 'POST' && req.headers.origin && new URL(req.headers.origin).host !== req.headers.host) {
        throw new InputError('Origem inválida.', 403);
      }
      if (req.method === 'GET' && pathname === '/api/pururu/history') {
        const cursor = Number(url.searchParams.get('before')) || Number.MAX_SAFE_INTEGER;
        const rows = page.all(cursor);
        const messages = rows.slice(0, 60).reverse().map(publicMessage);
        const auth = cursor === Number.MAX_SAFE_INTEGER ? await browser.status() : undefined;
        return json(res, 200, {
          messages, more: rows.length > 60,
          configured: {
            llm: auth ? auth.google === 'connected' : true,
            voice: auth ? auth.grok === 'connected' : true,
          },
          auth,
        });
      }
      if (req.method === 'GET' && pathname === '/api/pururu/auth') {
        const finishLogin = url.searchParams.get('verify') === '1';
        return json(res, 200, await browser.status({ finishLogin }));
      }
      if (req.method === 'POST' && pathname === '/api/pururu/auth') {
        const data = await readJson(req);
        if (data?.target === 'verify') {
          return json(res, 200, await browser.status({ finishLogin: true }));
        }
        const target = data?.target === 'grok' ? 'grok' : 'google';
        const auth = await browser.connect(target);
        return json(res, 200, auth);
      }
      if (req.method === 'POST' && pathname === '/api/pururu/turn') {
        const data = await readJson(req);
        const job = queue.then(() => turn(data));
        queue = job.catch(() => {});
        const result = await job;
        return json(res, result.error ? 502 : 200, result);
      }
      const file = /^\/api\/pururu\/(images|voice)\/([0-9a-f-]+)$/i.exec(pathname);
      if (file && uuid.test(file[2])) {
        const row = find.get(file[2]);
        if (file[1] === 'images' && req.method === 'GET' && row?.mime) {
          const bytes = await readFile(path.join(imagesDir, row.id));
          res.writeHead(200, { 'Content-Type': row.mime, 'Content-Length': bytes.length, 'X-Content-Type-Options': 'nosniff', 'Cache-Control': 'private, max-age=3600' });
          return res.end(bytes);
        }
        if (file[1] === 'voice' && req.method === 'POST' && row?.role === 'assistant') {
          let audio;
          try { audio = await audioFor(row); }
          catch (error) { throw new InputError(error.message, error.status ?? 502); }
          const type = audio.format === 'wav' ? 'audio/wav' : 'audio/mpeg';
          res.writeHead(200, { 'Content-Type': type, 'Content-Length': audio.bytes.length, 'Cache-Control': 'no-store' });
          return res.end(audio.bytes);
        }
      }
      return json(res, 404, { error: 'Recurso não encontrado.' });
    } catch (error) {
      if (!(error instanceof InputError)) console.error('Falha no serviço do Pururu:', error);
      if (!res.headersSent) json(res, error.status ?? 500, { error: error.status ? error.message : 'Falha no serviço local.' });
    }
  };
}
