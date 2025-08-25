import * as React from "react";
import { cn } from "@/lib/utils";
import { useMouseTracker } from "@/hooks/useMouseTracker";
import { useTheaterSounds } from "@/hooks/useTheaterSounds";
import { useHapticFeedback } from "@/hooks/useHapticFeedback";

interface BaseButtonProps {
  children: React.ReactNode;
  variant?: 'gold' | 'burgundy' | 'transparent';
  size?: 'sm' | 'default' | 'lg' | 'icon';
  className?: string;
}

interface ButtonProps extends BaseButtonProps {
  href?: never;
  onClick?: () => void;
}

interface LinkProps extends BaseButtonProps {
  href: string;
  onClick?: never;
}

type TheaterButtonProps = ButtonProps | LinkProps;

const getVariantStyles = (variant: string) => {
  switch (variant) {
    case 'gold':
      return "bg-gradient-gold text-black hover:shadow-gold-glow border-2 border-theater-gold/50 hover:border-theater-gold hover:scale-105 font-cinzel font-semibold";
    case 'burgundy':
      return "bg-theater-burgundy text-theater-light-gold border-2 border-theater-burgundy hover:bg-theater-burgundy/80 hover:shadow-mystical hover:scale-105 font-cinzel";
    case 'transparent':
      return "bg-transparent text-theater-light-gold border-2 border-theater-gold/30 hover:border-theater-gold hover:bg-theater-gold/10 hover:scale-105 font-cinzel";
    default:
      return "bg-gradient-gold text-black hover:shadow-gold-glow border-2 border-theater-gold/50 hover:border-theater-gold hover:scale-105 font-cinzel font-semibold";
  }
};

const getSizeStyles = (size: string) => {
  switch (size) {
    case 'sm':
      return "h-10 px-4 py-2 text-sm";
    case 'lg':
      return "h-14 px-8 py-4 text-lg";
    case 'icon':
      return "h-12 w-12";
    default:
      return "h-12 px-6 py-3";
  }
};

const TheaterButton: React.FC<TheaterButtonProps> = ({
  children,
  variant = 'gold',
  size = 'default',
  className,
  href,
  onClick,
}) => {
  const { getMouseTilt } = useMouseTracker();
  const { playSound } = useTheaterSounds();
  const { light, magical } = useHapticFeedback();
  const [isHovered, setIsHovered] = React.useState(false);

  const baseClasses = "inline-flex items-center justify-center whitespace-nowrap rounded-lg text-base font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 relative overflow-hidden group transform-gpu perspective-1000";
  
  const classes = cn(
    baseClasses,
    getVariantStyles(variant),
    getSizeStyles(size),
    className
  );

  const handleMouseEnter = () => {
    setIsHovered(true);
    playSound('sparkle', { volume: 0.2 });
    light();
  };

  const handleMouseLeave = () => setIsHovered(false);

  const handleClick = (e: React.MouseEvent) => {
    playSound('click', { volume: 0.3 });
    
    if (variant === 'gold') {
      magical(); // Special haptic for gold buttons
    } else {
      light();
    }
    
    if (onClick) {
      onClick();
    }
  };

  const content = (
    <>
      {/* Magical shimmer effect */}
      <div className="absolute inset-0 -top-2 -left-2 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 group-hover:animate-[shimmer_0.8s_ease-out] opacity-0 group-hover:opacity-100" />
      
      {/* Floating sparkles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-theater-light-gold rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-sparkle"
            style={{
              top: `${20 + Math.random() * 60}%`,
              left: `${20 + Math.random() * 60}%`,
              animationDelay: `${i * 0.2}s`,
            }}
          />
        ))}
      </div>

      {/* Content with enhanced styling */}
      <span className="relative z-10 flex items-center justify-center gap-2 group-hover:drop-shadow-glow transition-all duration-300">
        {children}
      </span>

      {/* Glow effect on hover */}
      <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300 bg-gradient-to-r from-theater-gold/0 via-theater-gold/50 to-theater-gold/0" />
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
        style={isHovered ? getMouseTilt(5) : undefined}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      className={classes}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={isHovered ? getMouseTilt(5) : undefined}
    >
      {content}
    </button>
  );
};

export default TheaterButton;