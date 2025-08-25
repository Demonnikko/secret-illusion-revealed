import { useEffect, useRef } from 'react';
import { useTheaterSounds } from '@/hooks/useTheaterSounds';

const AmbientSounds = () => {
  const { playSound, stopSound, isEnabled, volume } = useTheaterSounds();
  const ambientRef = useRef<AudioBufferSourceNode | null>(null);

  useEffect(() => {
    if (isEnabled && volume > 0) {
      // Start ambient theater sounds
      setTimeout(() => {
        playSound('ambient', { 
          volume: 0.3, 
          loop: true, 
          fadeIn: true 
        });
      }, 2000);
    }

    return () => {
      stopSound('ambient');
    };
  }, [isEnabled, volume, playSound, stopSound]);

  // This component doesn't render anything visible
  return null;
};

export default AmbientSounds;