import { useEffect, useRef, useState } from 'react';
import { useMouseTracker } from '@/hooks/useMouseTracker';

interface Particle {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  size: number;
  color: string;
}

const InteractiveParticles = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [particles, setParticles] = useState<Particle[]>([]);
  const { mousePosition, isMoving } = useMouseTracker();
  const animationFrameRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const createParticle = (x: number, y: number): Particle => ({
      id: Math.random(),
      x,
      y,
      vx: (Math.random() - 0.5) * 4,
      vy: (Math.random() - 0.5) * 4,
      life: 0,
      maxLife: 60 + Math.random() * 60,
      size: 1 + Math.random() * 3,
      color: Math.random() > 0.5 ? '#FFD700' : '#FFFFFF',
    });

    const updateParticles = () => {
      setParticles(prev => {
        const updated = prev.map(particle => ({
          ...particle,
          x: particle.x + particle.vx,
          y: particle.y + particle.vy,
          life: particle.life + 1,
          vx: particle.vx * 0.99,
          vy: particle.vy * 0.99,
        })).filter(particle => particle.life < particle.maxLife);

        // Add new particles when mouse is moving
        if (isMoving && updated.length < 50) {
          const newParticles = Array.from({ length: 3 }, () => 
            createParticle(
              mousePosition.x + (Math.random() - 0.5) * 20,
              mousePosition.y + (Math.random() - 0.5) * 20
            )
          );
          return [...updated, ...newParticles];
        }

        return updated;
      });
    };

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(particle => {
        const alpha = 1 - (particle.life / particle.maxLife);
        ctx.save();
        ctx.globalAlpha = alpha;
        ctx.fillStyle = particle.color;
        ctx.shadowBlur = 10;
        ctx.shadowColor = particle.color;
        
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.restore();
      });
    };

    const animate = () => {
      updateParticles();
      render();
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [mousePosition, isMoving, particles]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-20"
      style={{ mixBlendMode: 'screen' }}
    />
  );
};

export default InteractiveParticles;