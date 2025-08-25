import { useRef } from 'react';
import { useParallaxElement } from '@/hooks/useParallax';
import { cn } from '@/lib/utils';

interface ParallaxSectionProps {
  children: React.ReactNode;
  speed?: number;
  className?: string;
  direction?: 'up' | 'down';
}

const ParallaxSection = ({ 
  children, 
  speed = 0.5, 
  className = '',
  direction = 'up'
}: ParallaxSectionProps) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const transform = useParallaxElement(elementRef, direction === 'up' ? speed : -speed);

  return (
    <div 
      ref={elementRef}
      className={cn("relative", className)}
      style={{ transform }}
    >
      {children}
    </div>
  );
};

export default ParallaxSection;