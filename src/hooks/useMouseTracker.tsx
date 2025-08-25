import { useEffect, useState } from 'react';

interface MousePosition {
  x: number;
  y: number;
}

export const useMouseTracker = () => {
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 });
  const [isMoving, setIsMoving] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsMoving(true);
      
      clearTimeout(timeout);
      timeout = setTimeout(() => setIsMoving(false), 100);
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(timeout);
    };
  }, []);

  const getMouseParallax = (intensity: number = 20) => {
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const moveX = (mousePosition.x - centerX) / centerX;
    const moveY = (mousePosition.y - centerY) / centerY;

    return {
      transform: `translate3d(${moveX * intensity}px, ${moveY * intensity}px, 0)`,
    };
  };

  const getMouseTilt = (intensity: number = 10) => {
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const rotateX = (mousePosition.y - centerY) / centerY;
    const rotateY = (mousePosition.x - centerX) / centerX;

    return {
      transform: `perspective(1000px) rotateX(${-rotateX * intensity}deg) rotateY(${rotateY * intensity}deg)`,
    };
  };

  return {
    mousePosition,
    isMoving,
    getMouseParallax,
    getMouseTilt,
  };
};