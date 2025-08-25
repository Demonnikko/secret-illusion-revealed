import React, { useState } from 'react';

interface TooltipProps {
  children: React.ReactNode;
  content: string;
  position?: 'top' | 'bottom' | 'left' | 'right';
  delay?: number;
  disabled?: boolean;
}

const MagicalTooltip = ({ 
  children, 
  content, 
  position = 'top', 
  delay = 500,
  disabled = false 
}: TooltipProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [showDelay, setShowDelay] = useState<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (disabled) return;
    
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, delay);
    
    setShowDelay(timeout);
  };

  const handleMouseLeave = () => {
    if (showDelay) {
      clearTimeout(showDelay);
      setShowDelay(null);
    }
    setIsVisible(false);
  };

  const getPositionClasses = () => {
    switch (position) {
      case 'top':
        return 'bottom-full left-1/2 transform -translate-x-1/2 mb-2';
      case 'bottom':
        return 'top-full left-1/2 transform -translate-x-1/2 mt-2';
      case 'left':
        return 'right-full top-1/2 transform -translate-y-1/2 mr-2';
      case 'right':
        return 'left-full top-1/2 transform -translate-y-1/2 ml-2';
      default:
        return 'bottom-full left-1/2 transform -translate-x-1/2 mb-2';
    }
  };

  const getArrowClasses = () => {
    switch (position) {
      case 'top':
        return 'top-full left-1/2 transform -translate-x-1/2 border-l-transparent border-r-transparent border-b-transparent border-t-theater-curtain';
      case 'bottom':
        return 'bottom-full left-1/2 transform -translate-x-1/2 border-l-transparent border-r-transparent border-t-transparent border-b-theater-curtain';
      case 'left':
        return 'left-full top-1/2 transform -translate-y-1/2 border-t-transparent border-b-transparent border-r-transparent border-l-theater-curtain';
      case 'right':
        return 'right-full top-1/2 transform -translate-y-1/2 border-t-transparent border-b-transparent border-l-transparent border-r-theater-curtain';
      default:
        return 'top-full left-1/2 transform -translate-x-1/2 border-l-transparent border-r-transparent border-b-transparent border-t-theater-curtain';
    }
  };

  return (
    <div 
      className="relative inline-block"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      
      {isVisible && (
        <div 
          className={`absolute z-[9999] ${getPositionClasses()}`}
          style={{ pointerEvents: 'none' }}
        >
          {/* Tooltip container */}
          <div className="relative">
            {/* Main tooltip */}
            <div className="bg-theater-curtain/95 backdrop-blur-sm px-3 py-2 rounded-lg border border-theater-gold/30 shadow-mystical animate-fade-in-up">
              {/* Magical background glow */}
              <div className="absolute inset-0 bg-gradient-radial from-theater-gold/10 via-transparent to-transparent rounded-lg animate-magic-pulse" />
              
              {/* Content */}
              <p className="relative z-10 text-sm font-inter text-theater-light-gold whitespace-nowrap max-w-xs">
                {content}
              </p>
              
              {/* Sparkles */}
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-1 bg-theater-gold rounded-full animate-sparkle opacity-60"
                  style={{
                    top: `${10 + Math.random() * 80}%`,
                    left: `${10 + Math.random() * 80}%`,
                    animationDelay: `${i * 0.3}s`,
                  }}
                />
              ))}
            </div>
            
            {/* Arrow */}
            <div className={`absolute w-0 h-0 border-4 ${getArrowClasses()}`} />
          </div>
        </div>
      )}
    </div>
  );
};

export default MagicalTooltip;