import { useState } from 'react';
import { cn } from '@/lib/utils';

interface FlipCard3DProps {
  children: React.ReactNode;
  backContent?: React.ReactNode;
  className?: string;
  trigger?: 'hover' | 'click';
  direction?: 'horizontal' | 'vertical';
}

const FlipCard3D = ({ 
  children, 
  backContent, 
  className = '',
  trigger = 'hover',
  direction = 'horizontal'
}: FlipCard3DProps) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleInteraction = () => {
    if (trigger === 'click') {
      setIsFlipped(!isFlipped);
    }
  };

  const hoverProps = trigger === 'hover' ? {
    onMouseEnter: () => setIsFlipped(true),
    onMouseLeave: () => setIsFlipped(false)
  } : {};

  const rotateClass = direction === 'horizontal' 
    ? (isFlipped ? 'rotate-y-180' : 'rotate-y-0')
    : (isFlipped ? 'rotate-x-180' : 'rotate-x-0');

  return (
    <div 
      className={cn(
        "group perspective-1000 w-full h-full cursor-pointer",
        className
      )}
      onClick={handleInteraction}
      {...hoverProps}
    >
      <div 
        className={cn(
          "relative w-full h-full duration-700 transform-style-preserve-3d transition-transform",
          rotateClass
        )}
      >
        {/* Front Side */}
        <div 
          className={cn(
            "absolute inset-0 w-full h-full backface-hidden",
            "bg-theater-curtain/40 backdrop-blur-sm rounded-xl border border-theater-gold/20",
            "shadow-mystical hover:shadow-gold-glow transition-all duration-300"
          )}
        >
          {children}
        </div>

        {/* Back Side */}
        {backContent && (
          <div 
            className={cn(
              "absolute inset-0 w-full h-full backface-hidden",
              direction === 'horizontal' ? 'rotate-y-180' : 'rotate-x-180',
              "bg-theater-stage/40 backdrop-blur-sm rounded-xl border border-theater-gold/30",
              "shadow-mystical"
            )}
          >
            {backContent}
          </div>
        )}

        {/* Magical sparkles during flip */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className={cn(
                "absolute w-2 h-2 bg-theater-gold rounded-full",
                "opacity-0 group-hover:opacity-100 transition-all duration-500",
                "animate-sparkle"
              )}
              style={{
                top: `${20 + i * 10}%`,
                left: `${10 + i * 15}%`,
                animationDelay: `${i * 0.1}s`,
                transform: isFlipped ? 'scale(1.5)' : 'scale(1)',
              }}
            />
          ))}
        </div>
      </div>

      {/* Glow effect */}
      <div 
        className={cn(
          "absolute inset-0 bg-gradient-radial from-theater-gold/20 via-transparent to-transparent",
          "opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none",
          "rounded-xl blur-xl scale-110"
        )}
      />
    </div>
  );
};

export default FlipCard3D;