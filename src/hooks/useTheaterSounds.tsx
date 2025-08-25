import { useEffect, useRef, useState } from 'react';

interface SoundConfig {
  volume?: number;
  loop?: boolean;
  fadeIn?: boolean;
  fadeOut?: boolean;
}

export const useTheaterSounds = () => {
  const audioContext = useRef<AudioContext | null>(null);
  const audioBuffers = useRef<Map<string, AudioBuffer>>(new Map());
  const activeSources = useRef<Map<string, AudioBufferSourceNode>>(new Map());
  const [isEnabled, setIsEnabled] = useState(false);
  const [volume, setVolume] = useState(0.7);

  // Initialize audio context
  useEffect(() => {
    const initAudio = async () => {
      try {
        audioContext.current = new (window.AudioContext || (window as any).webkitAudioContext)();
        await generateTheaterSounds();
        setIsEnabled(true);
      } catch (error) {
        console.warn('Audio not supported:', error);
      }
    };

    // Enable audio on first user interaction
    const enableAudio = () => {
      if (audioContext.current?.state === 'suspended') {
        audioContext.current.resume();
      }
      if (!isEnabled) {
        initAudio();
      }
    };

    document.addEventListener('click', enableAudio, { once: true });
    document.addEventListener('touchstart', enableAudio, { once: true });

    return () => {
      document.removeEventListener('click', enableAudio);
      document.removeEventListener('touchstart', enableAudio);
    };
  }, [isEnabled]);

  // Generate procedural theater sounds
  const generateTheaterSounds = async () => {
    if (!audioContext.current) return;

    const ctx = audioContext.current;
    const sampleRate = ctx.sampleRate;

    // Curtain rustle sound
    const curtainBuffer = ctx.createBuffer(2, sampleRate * 2, sampleRate);
    for (let channel = 0; channel < 2; channel++) {
      const channelData = curtainBuffer.getChannelData(channel);
      for (let i = 0; i < channelData.length; i++) {
        const noise = (Math.random() - 0.5) * 0.1;
        const fade = Math.sin((i / channelData.length) * Math.PI);
        channelData[i] = noise * fade * (0.5 + Math.sin(i * 0.001) * 0.3);
      }
    }
    audioBuffers.current.set('curtain', curtainBuffer);

    // Mechanical click sound
    const clickBuffer = ctx.createBuffer(1, sampleRate * 0.1, sampleRate);
    const clickData = clickBuffer.getChannelData(0);
    for (let i = 0; i < clickData.length; i++) {
      const t = i / sampleRate;
      clickData[i] = Math.sin(800 * Math.PI * t) * Math.exp(-t * 50) * 0.3;
    }
    audioBuffers.current.set('click', clickBuffer);

    // Magic sparkle sound
    const sparkleBuffer = ctx.createBuffer(1, sampleRate * 0.5, sampleRate);
    const sparkleData = sparkleBuffer.getChannelData(0);
    for (let i = 0; i < sparkleData.length; i++) {
      const t = i / sampleRate;
      const freq = 1000 + Math.sin(t * 20) * 500;
      sparkleData[i] = Math.sin(freq * Math.PI * t) * Math.exp(-t * 8) * 0.2;
    }
    audioBuffers.current.set('sparkle', sparkleBuffer);

    // Ambient theater atmosphere
    const ambientBuffer = ctx.createBuffer(2, sampleRate * 10, sampleRate);
    for (let channel = 0; channel < 2; channel++) {
      const channelData = ambientBuffer.getChannelData(channel);
      for (let i = 0; i < channelData.length; i++) {
        const t = i / sampleRate;
        // Low frequency rumble + subtle harmonics
        const rumble = Math.sin(40 * Math.PI * t) * 0.05;
        const harmonics = Math.sin(80 * Math.PI * t) * 0.02;
        const noise = (Math.random() - 0.5) * 0.01;
        channelData[i] = rumble + harmonics + noise;
      }
    }
    audioBuffers.current.set('ambient', ambientBuffer);

    // Mystical whoosh
    const whooshBuffer = ctx.createBuffer(2, sampleRate * 1.5, sampleRate);
    for (let channel = 0; channel < 2; channel++) {
      const channelData = whooshBuffer.getChannelData(channel);
      for (let i = 0; i < channelData.length; i++) {
        const t = i / sampleRate;
        const freq = 200 * (1 + t * 2);
        const envelope = Math.sin(t * Math.PI / 1.5);
        const noise = (Math.random() - 0.5) * 0.5;
        channelData[i] = (Math.sin(freq * Math.PI * t) + noise) * envelope * 0.3;
      }
    }
    audioBuffers.current.set('whoosh', whooshBuffer);
  };

  const playSound = (soundName: string, config: SoundConfig = {}) => {
    if (!audioContext.current || !audioBuffers.current.has(soundName) || !isEnabled) return;

    const buffer = audioBuffers.current.get(soundName)!;
    const source = audioContext.current.createBufferSource();
    const gainNode = audioContext.current.createGain();

    source.buffer = buffer;
    source.loop = config.loop || false;
    
    // Set volume
    gainNode.gain.setValueAtTime((config.volume || 1) * volume, audioContext.current.currentTime);

    // Fade in effect
    if (config.fadeIn) {
      gainNode.gain.setValueAtTime(0, audioContext.current.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(
        (config.volume || 1) * volume, 
        audioContext.current.currentTime + 0.5
      );
    }

    source.connect(gainNode);
    gainNode.connect(audioContext.current.destination);

    source.start();
    activeSources.current.set(soundName, source);

    // Auto cleanup for non-looping sounds
    if (!config.loop) {
      source.addEventListener('ended', () => {
        activeSources.current.delete(soundName);
      });
    }

    return source;
  };

  const stopSound = (soundName: string) => {
    const source = activeSources.current.get(soundName);
    if (source) {
      source.stop();
      activeSources.current.delete(soundName);
    }
  };

  const stopAllSounds = () => {
    activeSources.current.forEach((source, name) => {
      source.stop();
    });
    activeSources.current.clear();
  };

  return {
    playSound,
    stopSound,
    stopAllSounds,
    isEnabled,
    setIsEnabled,
    volume,
    setVolume,
  };
};