export const inlineSpeechTags = [
  'laugh', 'chuckle', 'giggle', 'cry', 'sigh', 'breath', 'inhale', 'exhale',
  'tsk', 'tongue-click', 'lip-smack', 'pause', 'long-pause', 'hum-tune',
];
export const wrappingSpeechTags = [
  'soft', 'whisper', 'loud', 'build-intensity', 'decrease-intensity', 'higher-pitch',
  'lower-pitch', 'slow', 'fast', 'sing-song', 'singing', 'emphasis',
];
const speechTag = /\[[a-z][\w-]*\]|<\/?[a-z][\w-]*>/gi;

export function parseSpeech(raw) {
  const voiceText = typeof raw === 'string' ? raw.trim().slice(0, 1000) : '';
  const speech = voiceText.replace(speechTag, '').replace(/\s+/g, ' ').replace(/ +([,.!?;:])/g, '$1').trim();
  const tags = voiceText.match(speechTag);
  if (!tags) return { speech };

  const opened = [];
  for (const tag of tags) {
    if (tag.startsWith('[')) {
      if (!inlineSpeechTags.includes(tag.slice(1, -1))) return { speech };
    } else if (tag.startsWith('</')) {
      if (opened.pop() !== tag.slice(2, -1)) return { speech };
    } else {
      const name = tag.slice(1, -1);
      if (!wrappingSpeechTags.includes(name)) return { speech };
      opened.push(name);
    }
  }
  if (opened.length) return { speech };
  if (speech) return { speech, voiceText };
  if (tags.includes('[hum-tune]')) return { speech: '♪', voiceText };
  if (tags.some(tag => tag.startsWith('[') && tag !== '[pause]' && tag !== '[long-pause]')) {
    return { speech: 'Efeito de voz', voiceText };
  }
  return { speech };
}

export function readGrokWav(body) {
  const chunks = [];
  for (const line of body.split('\n')) {
    if (!line.trim()) continue;
    let message;
    try { message = JSON.parse(line); }
    catch { throw new Error('Grok TTS retornou um fluxo de áudio inválido.'); }
    if (message?.error) throw new Error('O Grok recusou a geração de voz.');
    if (typeof message?.result?.data === 'string') {
      chunks.push(Buffer.from(message.result.data, 'base64'));
    }
  }
  const wav = Buffer.concat(chunks);
  if (wav.length < 44 || wav.toString('ascii', 0, 4) !== 'RIFF' ||
      wav.toString('ascii', 8, 12) !== 'WAVE') {
    throw new Error('Grok TTS não retornou um WAV válido.');
  }
  let blockAlign = 0;
  for (let offset = 12; offset + 8 <= wav.length;) {
    const kind = wav.toString('ascii', offset, offset + 4);
    const length = wav.readUInt32LE(offset + 4);
    if (kind === 'fmt ' && length >= 16 && offset + 24 <= wav.length &&
        wav.readUInt16LE(offset + 8) === 1) {
      blockAlign = wav.readUInt16LE(offset + 20);
    }
    if (kind === 'data') {
      const bytes = wav.length - offset - 8;
      if (!blockAlign || !bytes || bytes % blockAlign) break;
      wav.writeUInt32LE(wav.length - 8, 4);
      wav.writeUInt32LE(bytes, offset + 4);
      return wav;
    }
    offset += 8 + length + (length % 2);
  }
  throw new Error('Grok TTS retornou um WAV sem dados de áudio válidos.');
}
