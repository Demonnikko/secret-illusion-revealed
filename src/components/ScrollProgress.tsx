import { useEffect, useState } from 'react';

const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollPx = document.documentElement.scrollTop;
      const winHeightPx = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = scrollPx / winHeightPx;
      
      setScrollProgress(scrolled);
      setIsVisible(scrollPx > 100);
    };

    window.addEventListener('scroll', updateScrollProgress, { passive: true });
    updateScrollProgress();

    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-1 z-50 bg-black/20 backdrop-blur-sm">
      {/* Main progress bar */}
      <div 
        className="h-full bg-gradient-gold relative overflow-hidden transition-all duration-300"
        style={{ width: `${scrollProgress * 100}%` }}
      >
        {/* Animated shimmer effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-[shimmer_2s_ease-in-out_infinite]" />
        
        {/* Sparkle particles */}
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-theater-light-gold rounded-full animate-sparkle"
              style={{
                right: `${i * 4}px`,
                top: `${-2 + i * 2}px`,
                animationDelay: `${i * 0.2}s`,
                boxShadow: '0 0 6px currentColor',
              }}
            />
          ))}
        </div>
      </div>

      {/* Magic trail effect */}
      <div 
        className="absolute top-0 left-0 h-full bg-theater-gold/20 blur-sm transition-all duration-300"
        style={{ width: `${Math.min(scrollProgress * 100 + 10, 100)}%` }}
      />

      {/* Progress percentage indicator */}
      <div 
        className="absolute top-2 bg-theater-curtain/90 backdrop-blur-sm px-3 py-1 rounded-full border border-theater-gold/30 transition-all duration-300"
        style={{ 
          left: `${Math.min(Math.max(scrollProgress * 100 - 5, 0), 85)}%`,
          opacity: scrollProgress > 0.05 ? 1 : 0 
        }}
      >
        <span className="text-xs font-cinzel text-theater-gold">
          {Math.round(scrollProgress * 100)}%
        </span>
      </div>
    </div>
  );
};

export default ScrollProgress;