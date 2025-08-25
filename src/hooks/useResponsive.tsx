import { useEffect, useState } from 'react';

export const useResponsiveFonts = () => {
  const [fontSize, setFontSize] = useState('base');

  useEffect(() => {
    const updateFontSize = () => {
      const width = window.innerWidth;
      
      if (width < 768) {
        setFontSize('sm');
      } else if (width < 1024) {
        setFontSize('base');
      } else if (width < 1440) {
        setFontSize('lg');
      } else {
        setFontSize('xl');
      }
    };

    updateFontSize();
    window.addEventListener('resize', updateFontSize);
    
    return () => window.removeEventListener('resize', updateFontSize);
  }, []);

  return fontSize;
};

export const useMicroAnimations = () => {
  const [animatedElements, setAnimatedElements] = useState<Set<string>>(new Set());

  const triggerAnimation = (elementId: string) => {
    setAnimatedElements(prev => new Set([...prev, elementId]));
    
    setTimeout(() => {
      setAnimatedElements(prev => {
        const newSet = new Set(prev);
        newSet.delete(elementId);
        return newSet;
      });
    }, 600);
  };

  return { animatedElements, triggerAnimation };
};