import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface TheaterButtonProps {
  children: ReactNode;
  variant?: 'gold' | 'burgundy' | 'transparent';
  size?: 'sm' | 'default' | 'lg';
  className?: string;
  onClick?: () => void;
  href?: string;
}

const TheaterButton = ({ 
  children, 
  variant = 'gold', 
  size = 'default',
  className,
  onClick,
  href
}: TheaterButtonProps) => {
  const getVariantStyles = () => {
    switch (variant) {
      case 'gold':
        return "bg-gradient-gold text-theater-stage hover:shadow-gold-glow border-theater-gold/30 border backdrop-blur-sm";
      case 'burgundy':
        return "bg-theater-burgundy text-theater-gold hover:bg-theater-burgundy/90 border-theater-burgundy/30 border";
      case 'transparent':
        return "bg-white/10 text-theater-gold hover:bg-white/20 border-white/20 border backdrop-blur-sm";
      default:
        return "bg-gradient-gold text-theater-stage hover:shadow-gold-glow";
    }
  };

  const baseStyles = "font-cinzel font-medium tracking-wide transition-all duration-300 hover:scale-105 shadow-mystical";

  const content = (
    <Button
      className={cn(baseStyles, getVariantStyles(), className)}
      size={size}
      onClick={onClick}
    >
      {children}
    </Button>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }

  return content;
};

export default TheaterButton;