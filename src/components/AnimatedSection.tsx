import { useEffect, useRef, useState } from 'react';
import { useScrollAnimation } from '@/hooks/useSmoothScroll';

interface AnimatedSectionProps {
  id: string;
  children: React.ReactNode;
  className?: string;
  animationType?: 'fadeUp' | 'fadeLeft' | 'fadeRight' | 'zoom' | 'rotate';
  delay?: number;
}

const AnimatedSection = ({ 
  id, 
  children, 
  className = '', 
  animationType = 'fadeUp',
  delay = 0
}: AnimatedSectionProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const visibleSections = useScrollAnimation(0.2);

  useEffect(() => {
    if (visibleSections.has(id)) {
      setTimeout(() => setIsVisible(true), delay);
    }
  }, [visibleSections, id, delay]);

  const getAnimationClasses = () => {
    const base = 'transition-all duration-1000 ease-out';
    
    if (!isVisible) {
      switch (animationType) {
        case 'fadeUp':
          return `${base} opacity-0 translate-y-20`;
        case 'fadeLeft':
          return `${base} opacity-0 -translate-x-20`;
        case 'fadeRight':
          return `${base} opacity-0 translate-x-20`;
        case 'zoom':
          return `${base} opacity-0 scale-75`;
        case 'rotate':
          return `${base} opacity-0 rotate-12 scale-90`;
        default:
          return `${base} opacity-0 translate-y-20`;
      }
    }

    return `${base} opacity-100 translate-y-0 translate-x-0 scale-100 rotate-0`;
  };

  return (
    <div
      ref={sectionRef}
      id={id}
      data-section
      className={`${getAnimationClasses()} ${className}`}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;