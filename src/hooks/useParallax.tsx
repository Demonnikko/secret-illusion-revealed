import { useEffect, useState } from 'react';

export const useParallax = () => {
  const [scrollY, setScrollY] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleResize = () => setWindowHeight(window.innerHeight);

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize);
    
    handleResize();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const getParallaxProps = (speed: number = 0.5) => ({
    style: {
      transform: `translateY(${scrollY * speed}px)`,
    },
  });

  const getParallaxScale = (speed: number = 0.1) => ({
    style: {
      transform: `scale(${1 + (scrollY * speed) / 1000})`,
    },
  });

  const getParallaxRotate = (speed: number = 0.1) => ({
    style: {
      transform: `rotate(${scrollY * speed}deg)`,
    },
  });

  return {
    scrollY,
    windowHeight,
    getParallaxProps,
    getParallaxScale,
    getParallaxRotate,
  };
};