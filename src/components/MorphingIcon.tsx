import { useEffect, useState } from 'react';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface MorphingIconProps {
  icons: LucideIcon[];
  size?: number;
  className?: string;
  duration?: number;
  trigger?: 'auto' | 'hover' | 'click';
  autoInterval?: number;
}

const MorphingIcon = ({
  icons,
  size = 24,
  className = '',
  duration = 500,
  trigger = 'auto',
  autoInterval = 3000
}: MorphingIconProps) => {
  const [currentIconIndex, setCurrentIconIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const nextIcon = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIconIndex((prev) => (prev + 1) % icons.length);
      setIsTransitioning(false);
    }, duration / 2);
  };

  useEffect(() => {
    if (trigger === 'auto') {
      const interval = setInterval(nextIcon, autoInterval);
      return () => clearInterval(interval);
    }
  }, [trigger, autoInterval, isTransitioning]);

  const CurrentIcon = icons[currentIconIndex];

  const handleInteraction = () => {
    if (trigger === 'hover' || trigger === 'click') {
      nextIcon();
    }
  };

  const interactionProps = trigger === 'hover' 
    ? { onMouseEnter: handleInteraction }
    : trigger === 'click'
    ? { onClick: handleInteraction }
    : {};

  return (
    <div 
      className={cn(
        "relative inline-flex items-center justify-center cursor-pointer",
        className
      )}
      {...interactionProps}
    >
      {/* Background glow */}
      <div 
        className={cn(
          "absolute inset-0 bg-theater-gold/20 rounded-full blur-md",
          "scale-0 transition-transform duration-300",
          isTransitioning && "scale-150"
        )}
      />
      
      {/* Icon container */}
      <div 
        className={cn(
          "relative transition-all duration-300 transform",
          isTransitioning && "scale-75 rotate-180 opacity-0"
        )}
      >
        <CurrentIcon 
          size={size}
          className={cn(
            "text-theater-gold transition-all duration-300",
            isTransitioning && "blur-sm"
          )}
        />
      </div>

      {/* Sparkle particles during transition */}
      {isTransitioning && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-theater-gold rounded-full animate-ping"
              style={{
                top: `${50 + 30 * Math.sin((i * Math.PI * 2) / 8)}%`,
                left: `${50 + 30 * Math.cos((i * Math.PI * 2) / 8)}%`,
                animationDelay: `${i * 0.1}s`,
              }}
            />
          ))}
        </div>
      )}

      {/* Magic circle during transition */}
      {isTransitioning && (
        <div 
          className={cn(
            "absolute inset-0 border-2 border-theater-gold/50 rounded-full",
            "animate-spin"
          )}
          style={{ animationDuration: `${duration}ms` }}
        />
      )}
    </div>
  );
};

export default MorphingIcon;