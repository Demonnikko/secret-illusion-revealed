import { useEffect, useState } from 'react';

interface CinematicTransitionProps {
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'zoom' | 'rotate';
}

const CinematicTransition = ({ 
  children, 
  delay = 0, 
  direction = 'up' 
}: CinematicTransitionProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
      setHasAnimated(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  const getTransitionClasses = () => {
    const base = 'transition-all duration-1000 ease-out';
    
    if (!hasAnimated) {
      switch (direction) {
        case 'up':
          return `${base} translate-y-20 opacity-0`;
        case 'down':
          return `${base} -translate-y-20 opacity-0`;
        case 'left':
          return `${base} translate-x-20 opacity-0`;
        case 'right':
          return `${base} -translate-x-20 opacity-0`;
        case 'zoom':
          return `${base} scale-75 opacity-0`;
        case 'rotate':
          return `${base} rotate-12 scale-75 opacity-0`;
        default:
          return `${base} translate-y-20 opacity-0`;
      }
    }

    return `${base} translate-y-0 translate-x-0 scale-100 rotate-0 opacity-100`;
  };

  return (
    <div className={getTransitionClasses()}>
      {children}
    </div>
  );
};

export default CinematicTransition;