import { useEffect, useRef, useState } from 'react';

interface SparkleTrailProps {
  children: React.ReactNode;
  className?: string;
}

const SparkleTrail = ({ children, className }: SparkleTrailProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [sparkles, setSparkles] = useState<Array<{
    id: number;
    x: number;
    y: number;
    delay: number;
  }>>([]);

  const handleMouseEnter = (e: React.MouseEvent) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;

    const newSparkles = Array.from({ length: 8 }, (_, i) => ({
      id: Date.now() + i,
      x: Math.random() * rect.width,
      y: Math.random() * rect.height,
      delay: i * 0.1,
    }));

    setSparkles(newSparkles);

    // Clear sparkles after animation
    setTimeout(() => setSparkles([]), 2000);
  };

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden group ${className}`}
      onMouseEnter={handleMouseEnter}
    >
      {children}
      
      {/* Sparkles */}
      {sparkles.map((sparkle) => (
        <div
          key={sparkle.id}
          className="absolute w-2 h-2 bg-theater-gold rounded-full animate-sparkle pointer-events-none"
          style={{
            left: `${sparkle.x}px`,
            top: `${sparkle.y}px`,
            animationDelay: `${sparkle.delay}s`,
            boxShadow: '0 0 10px currentColor',
          }}
        />
      ))}
      
      {/* Hover glow effect */}
      <div className="absolute inset-0 bg-gradient-radial from-theater-gold/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    </div>
  );
};

export default SparkleTrail;