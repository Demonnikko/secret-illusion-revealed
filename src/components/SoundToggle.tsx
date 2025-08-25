import { useEffect, useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { useTheaterSounds } from '@/hooks/useTheaterSounds';
import MagicalTooltip from './MagicalTooltip';

const SoundToggle = () => {
  const { isEnabled, setIsEnabled, volume, setVolume } = useTheaterSounds();
  const [showVolumeSlider, setShowVolumeSlider] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
      {/* Volume Slider */}
      {showVolumeSlider && isEnabled && (
        <div className="bg-theater-curtain/95 backdrop-blur-sm p-4 rounded-lg border border-theater-gold/30 shadow-mystical animate-fade-in-up">
          <div className="flex items-center gap-3">
            <span className="text-theater-light-gold text-sm font-inter">Громкость</span>
            <input
              type="range"
              min="0"
              max="1"
              step="0.1"
              value={volume}
              onChange={(e) => setVolume(parseFloat(e.target.value))}
              className="w-20 h-2 bg-theater-stage rounded-lg appearance-none cursor-pointer
                [&::-webkit-slider-thumb]:appearance-none
                [&::-webkit-slider-thumb]:h-4
                [&::-webkit-slider-thumb]:w-4
                [&::-webkit-slider-thumb]:rounded-full
                [&::-webkit-slider-thumb]:bg-theater-gold
                [&::-webkit-slider-thumb]:cursor-pointer
                [&::-webkit-slider-thumb]:shadow-gold-glow"
            />
          </div>
        </div>
      )}

      {/* Sound Toggle Button */}
      <MagicalTooltip 
        content={isEnabled ? "Отключить звуковые эффекты" : "Включить звуковые эффекты"}
        position="left"
      >
        <button
          onClick={() => setIsEnabled(!isEnabled)}
          onMouseEnter={() => setShowVolumeSlider(true)}
          onMouseLeave={() => setShowVolumeSlider(false)}
          className="p-3 bg-theater-burgundy/90 backdrop-blur-sm rounded-full text-theater-gold hover:bg-theater-burgundy transition-all duration-300 hover:scale-110 hover:shadow-gold-glow group border border-theater-gold/30"
        >
          {isEnabled ? (
            <Volume2 className="w-6 h-6 group-hover:animate-micro-bounce" />
          ) : (
            <VolumeX className="w-6 h-6 group-hover:animate-micro-shake" />
          )}
          
          {/* Sound waves animation when enabled */}
          {isEnabled && (
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="absolute inset-0 border-2 border-theater-gold/20 rounded-full animate-ping"
                  style={{
                    animationDelay: `${i * 0.3}s`,
                    animationDuration: '2s',
                  }}
                />
              ))}
            </div>
          )}
        </button>
      </MagicalTooltip>
    </div>
  );
};

export default SoundToggle;