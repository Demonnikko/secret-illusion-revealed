import { useEffect, useRef, useState } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  type: 'rose' | 'star' | 'sparkle';
  rotation: number;
  rotationSpeed: number;
  color: string;
}

interface ParticleSystemProps {
  density?: number;
  types?: Array<'rose' | 'star' | 'sparkle'>;
  className?: string;
}

const ParticleSystem = ({ 
  density = 15, 
  types = ['rose', 'star', 'sparkle'],
  className = ''
}: ParticleSystemProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [particles, setParticles] = useState<Particle[]>([]);
  const animationRef = useRef<number>();

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

    // Create initial particles
    const createParticle = (): Particle => {
      const type = types[Math.floor(Math.random() * types.length)];
      const colors = {
        rose: '#d4af37',
        star: '#ffd700', 
        sparkle: '#fff8dc'
      };

      return {
        id: Math.random(),
        x: Math.random() * canvas.width,
        y: -20,
        vx: (Math.random() - 0.5) * 2,
        vy: Math.random() * 2 + 1,
        size: Math.random() * 8 + 4,
        opacity: Math.random() * 0.8 + 0.2,
        type,
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 4,
        color: colors[type]
      };
    };

    const initParticles = () => {
      const newParticles: Particle[] = [];
      for (let i = 0; i < density; i++) {
        newParticles.push(createParticle());
      }
      setParticles(newParticles);
    };

    const drawParticle = (particle: Particle) => {
      ctx.save();
      ctx.globalAlpha = particle.opacity;
      ctx.translate(particle.x, particle.y);
      ctx.rotate((particle.rotation * Math.PI) / 180);

      switch (particle.type) {
        case 'rose':
          // Draw rose petal
          ctx.fillStyle = particle.color;
          ctx.beginPath();
          ctx.ellipse(0, 0, particle.size, particle.size * 0.6, 0, 0, Math.PI * 2);
          ctx.fill();
          
          // Add inner highlight
          ctx.fillStyle = `${particle.color}80`;
          ctx.beginPath();
          ctx.ellipse(-particle.size * 0.3, -particle.size * 0.3, particle.size * 0.3, particle.size * 0.2, 0, 0, Math.PI * 2);
          ctx.fill();
          break;

        case 'star':
          // Draw 5-pointed star
          ctx.fillStyle = particle.color;
          ctx.beginPath();
          const spikes = 5;
          const outerRadius = particle.size;
          const innerRadius = particle.size * 0.4;
          
          for (let i = 0; i < spikes * 2; i++) {
            const radius = i % 2 === 0 ? outerRadius : innerRadius;
            const angle = (i * Math.PI) / spikes;
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;
            
            if (i === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
          }
          ctx.closePath();
          ctx.fill();
          
          // Add glow effect
          ctx.shadowColor = particle.color;
          ctx.shadowBlur = particle.size;
          ctx.fill();
          break;

        case 'sparkle':
          // Draw sparkle (4-pointed star)
          ctx.strokeStyle = particle.color;
          ctx.lineWidth = 2;
          ctx.lineCap = 'round';
          
          // Vertical line
          ctx.beginPath();
          ctx.moveTo(0, -particle.size);
          ctx.lineTo(0, particle.size);
          ctx.stroke();
          
          // Horizontal line
          ctx.beginPath();
          ctx.moveTo(-particle.size, 0);
          ctx.lineTo(particle.size, 0);
          ctx.stroke();
          
          // Add center dot
          ctx.fillStyle = particle.color;
          ctx.beginPath();
          ctx.arc(0, 0, particle.size * 0.2, 0, Math.PI * 2);
          ctx.fill();
          break;
      }
      
      ctx.restore();
    };

    const updateParticles = () => {
      setParticles(prevParticles => {
        return prevParticles.map(particle => {
          // Update position
          const newParticle = {
            ...particle,
            x: particle.x + particle.vx,
            y: particle.y + particle.vy,
            rotation: particle.rotation + particle.rotationSpeed,
            opacity: particle.opacity - 0.002
          };

          // Reset particle if it goes off screen or fades out
          if (newParticle.y > canvas.height + 50 || newParticle.opacity <= 0) {
            return createParticle();
          }

          return newParticle;
        });
      });
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(drawParticle);
      updateParticles();
      
      animationRef.current = requestAnimationFrame(animate);
    };

    initParticles();
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [density, types]);

  return (
    <canvas
      ref={canvasRef}
      className={`fixed top-0 left-0 w-full h-full pointer-events-none z-10 ${className}`}
      style={{ mixBlendMode: 'screen' }}
    />
  );
};

export default ParticleSystem;