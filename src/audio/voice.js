/** Analyze the exact buffer being played, so movement follows playback and its pauses. */
export function createVoice() {
  let context, analyser, waveform, spectrum, source, resolvePlayback;
  let envelope = 0;
  const level = { open: 0, round: 0, pulse: 0 };

  function unlock() {
    const Audio = window.AudioContext || window.webkitAudioContext;
    if (!Audio) return;
    if (!context) {
      context = new Audio();
      analyser = context.createAnalyser();
      analyser.fftSize = 512;
      analyser.smoothingTimeConstant = 0.52;
      waveform = new Float32Array(analyser.fftSize);
      spectrum = new Uint8Array(analyser.frequencyBinCount);
      analyser.connect(context.destination);
    }
    if (context.state === 'suspended') context.resume().catch(() => {});
  }

  function stop() {
    if (!source) return;
    const playing = source;
    source = null;
    playing.onended = null;
    playing.stop();
    playing.disconnect();
    resolvePlayback?.();
    resolvePlayback = null;
  }

  async function play(bytes, signal, onStart) {
    unlock();
    if (!context) throw new Error('O navegador não conseguiu iniciar o áudio.');
    const buffer = await context.decodeAudioData(bytes);
    if (signal.aborted) return;
    if (context.state !== 'running') throw new Error('Toque no botão de ouvir para liberar o áudio.');
    stop();
    const playing = context.createBufferSource();
    playing.buffer = buffer;
    playing.connect(analyser);
    source = playing;
    await new Promise(resolve => {
      resolvePlayback = resolve;
      playing.onended = () => {
        playing.disconnect();
        if (source === playing) {
          source = null;
          resolvePlayback = null;
        }
        resolve();
      };
      playing.start();
      onStart(buffer.duration);
    });
  }

  function frame(dt) {
    let open = 0, round = 0;
    if (source) {
      analyser.getFloatTimeDomainData(waveform);
      let sum = 0;
      for (const sample of waveform) sum += sample * sample;
      const rms = Math.sqrt(sum / waveform.length);
      open = Math.min(1, Math.max(0, (rms - 0.012) * 7.2));
      if (open > 0.03) {
        analyser.getByteFrequencyData(spectrum);
        const binHz = context.sampleRate / analyser.fftSize;
        let lower = 0, upper = 0;
        for (let i = 1; i < Math.min(spectrum.length, 2800 / binHz); i++) {
          const strength = Math.max(0, spectrum[i] - 45);
          if (i * binHz < 800) lower += strength;
          else upper += strength;
        }
        round = Math.min(1, Math.max(0, (lower / (lower + upper || 1) - 0.27) * 2.2));
      }
    }
    envelope += (open - envelope) * (1 - Math.exp(-12 * dt));
    level.open += (open - level.open) * (1 - Math.exp(-(open > level.open ? 34 : 19) * dt));
    level.round += (round - level.round) * (1 - Math.exp(-18 * dt));
    level.pulse += (Math.max(0, open - envelope) - level.pulse) * (1 - Math.exp(-20 * dt));
    return level;
  }

  return { unlock, stop, play, frame };
}
