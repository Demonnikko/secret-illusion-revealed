import { useState, useEffect } from 'react';
import { Settings } from 'lucide-react';

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 800); // Wait for curtain animation
    }, 5000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className={`fixed inset-0 z-50 ${isVisible ? '' : 'pointer-events-none'}`}>
      {/* Curtains */}
      <div 
        className={`absolute inset-0 bg-theater-curtain transition-transform duration-1000 ease-in-out ${
          !isVisible ? 'animate-curtain-open' : ''
        }`}
      />
      
      {/* Loading Content */}
      <div className={`absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-500 ${
        !isVisible ? 'opacity-0' : 'opacity-100'
      }`}>
        {/* Spinning Gear */}
        <div className="mb-8">
          <Settings 
            className="w-16 h-16 text-theater-gold animate-spin-gear drop-shadow-lg" 
          />
        </div>
        
        {/* Loading Text */}
        <h2 className="font-cinzel text-2xl text-theater-gold font-medium tracking-wide">
          Шоу начинается...
        </h2>
        
        {/* Sparkles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-theater-gold rounded-full animate-sparkle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;