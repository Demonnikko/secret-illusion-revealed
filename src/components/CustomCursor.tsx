import { useCustomCursor } from '@/hooks/useCustomCursor';
import { Sparkles } from 'lucide-react';

const CustomCursor = () => {
  const { cursorPosition, isHovering, cursorVariant } = useCustomCursor();

  return (
    <>
      {/* Main cursor */}
      <div
        className="fixed pointer-events-none z-[9999] mix-blend-difference"
        style={{
          left: `${cursorPosition.x}px`,
          top: `${cursorPosition.y}px`,
          transform: 'translate(-50%, -50%)',
        }}
      >
        {cursorVariant === 'magic' ? (
          <div className="relative">
            {/* Magic wand cursor */}
            <div className="w-8 h-8 rotate-45 bg-gradient-gold rounded-full animate-pulse shadow-gold-glow">
              <Sparkles className="w-4 h-4 text-black absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -rotate-45" />
            </div>
            
            {/* Magic particles */}
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-theater-gold rounded-full animate-sparkle"
                style={{
                  top: `${50 + 20 * Math.sin((i * Math.PI * 2) / 8)}%`,
                  left: `${50 + 20 * Math.cos((i * Math.PI * 2) / 8)}%`,
                  animationDelay: `${i * 0.2}s`,
                }}
              />
            ))}
          </div>
        ) : (
          <div className="w-4 h-4 border-2 border-theater-gold rounded-full bg-theater-gold/20 animate-pulse" />
        )}
      </div>

      {/* Cursor trail */}
      <div
        className="fixed pointer-events-none z-[9998]"
        style={{
          left: `${cursorPosition.x}px`,
          top: `${cursorPosition.y}px`,
          transform: 'translate(-50%, -50%)',
        }}
      >
        <div className={`w-12 h-12 border border-theater-gold/30 rounded-full transition-all duration-300 ${
          isHovering ? 'scale-150 border-theater-gold/60' : 'scale-100'
        }`} />
      </div>
    </>
  );
};

export default CustomCursor;