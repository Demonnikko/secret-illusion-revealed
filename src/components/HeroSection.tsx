import { useState, useEffect } from 'react';
import { Play, Gift, Share2 } from 'lucide-react';
import TheaterButton from './TheaterButton';
import MagicalTooltip from './MagicalTooltip';
import { useParallax } from '@/hooks/useParallax';
import { useMouseTracker } from '@/hooks/useMouseTracker';
import { useTheaterToast } from '@/hooks/useTheaterToast';
import { useTheaterSounds } from '@/hooks/useTheaterSounds';
import { useHapticFeedback } from '@/hooks/useHapticFeedback';
import CinematicTransition from './CinematicTransition';

interface HeroSectionProps {
  onSectionChange: (section: string) => void;
}

const HeroSection = ({ onSectionChange }: HeroSectionProps) => {
  const [easterEggClicks, setEasterEggClicks] = useState(0);
  const [showEasterEgg, setShowEasterEgg] = useState(false);
  const [confetti, setConfetti] = useState<Array<{ id: number; color: string; left: number; delay: number }>>([]);
  
  const parallaxOffset = useParallax(0.3);
  const { mousePosition, getMouseParallax } = useMouseTracker();
  const theaterToast = useTheaterToast();
  const { playSound } = useTheaterSounds();
  const { magical, heavy } = useHapticFeedback();

  const handleLogoClick = () => {
    const newClicks = easterEggClicks + 1;
    setEasterEggClicks(newClicks);
    
    // Play click sound and haptic feedback
    playSound('click', { volume: 0.4 });
    magical();

    if (newClicks === 5) {
      // Trigger easter egg with special sound and haptic
      setShowEasterEgg(true);
      playSound('whoosh', { volume: 0.6 });
      heavy(); // Strong haptic for easter egg
      
      // Generate confetti
      const newConfetti = Array.from({ length: 50 }, (_, i) => ({
        id: i,
        color: Math.random() > 0.5 ? '#D4AF37' : '#7A1E2B',
        left: Math.random() * 100,
        delay: Math.random() * 2
      }));
      setConfetti(newConfetti);

      // Clear confetti after animation but keep modal open
      setTimeout(() => {
        setConfetti([]);
      }, 3000);
    }
  };

  const shareSecret = () => {
    const shareData = {
      title: 'Шоу Секрет - Театральное иллюзионное шоу',
      text: 'Тайна, которую осмелишься увидеть',
      url: window.location.href
    };

    if (navigator.share && navigator.canShare(shareData)) {
      navigator.share(shareData);
      theaterToast.success('Секрет поделен с миром! ✨');
    } else {
      navigator.clipboard.writeText(window.location.href);
      theaterToast.success('Ссылка скопирована в буфер обмена! 🎭');
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-black overflow-hidden">
      {/* Magic Particles Background with Parallax */}
      <div 
        className="absolute inset-0 magic-particles"
        style={{ transform: `translateY(${parallaxOffset}px)` }}
      ></div>
      
      {/* Stage Lighting Effects with Parallax */}
      <div 
        className="absolute inset-0 stage-lighting" 
        style={{ transform: `translateY(${parallaxOffset * 0.5}px)` }}
      >
        <div 
          className="absolute top-32 left-1/4 w-40 h-40 bg-theater-spotlight/30 rounded-full blur-3xl animate-magic-pulse"
          style={getMouseParallax(10)}
        />
        <div 
          className="absolute top-20 right-1/4 w-32 h-32 bg-theater-gold/20 rounded-full blur-3xl animate-magic-pulse" 
          style={{ 
            animationDelay: '1s',
            ...getMouseParallax(15)
          }} 
        />
        <div 
          className="absolute bottom-20 left-1/3 w-48 h-48 bg-theater-light-gold/15 rounded-full blur-3xl animate-magic-pulse" 
          style={{ 
            animationDelay: '2s',
            ...getMouseParallax(8)
          }} 
        />
        <div 
          className="absolute bottom-32 right-1/4 w-36 h-36 bg-theater-spotlight/25 rounded-full blur-2xl animate-magic-pulse" 
          style={{ 
            animationDelay: '0.5s',
            ...getMouseParallax(12)
          }} 
        />
      </div>

      {/* Floating Magical Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-mystical-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${2 + Math.random() * 4}px`,
              height: `${2 + Math.random() * 4}px`,
              backgroundColor: Math.random() > 0.5 ? 'rgba(255, 215, 0, 0.8)' : 'rgba(255, 255, 255, 0.9)',
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${4 + Math.random() * 4}s`,
              boxShadow: '0 0 10px currentColor',
            }}
          />
        ))}
      </div>

      {/* Confetti for Easter Egg */}
      {confetti.map((piece) => (
        <div
          key={piece.id}
          className="fixed w-3 h-3 z-50 animate-confetti-fall pointer-events-none rounded-full"
          style={{
            backgroundColor: piece.color,
            left: `${piece.left}%`,
            animationDelay: `${piece.delay}s`,
            boxShadow: `0 0 10px ${piece.color}`,
          }}
        />
      ))}

      {/* Main Content with Cinematic Transitions */}
      <div className="relative z-10 text-center space-y-12 px-6">
        <CinematicTransition delay={500} direction="zoom">
          {/* Magical Lock Symbol - Above Title */}
          <div className="mb-8">
            <MagicalTooltip content="Кликните 5 раз для открытия секретного послания!" position="top">
              <div 
                className="cursor-pointer group inline-block relative"
                onClick={handleLogoClick}
              >
                {/* Ancient Lock SVG */}
                <div className="relative animate-mystical-float">
                  <svg
                    width="80"
                    height="90"
                    viewBox="0 0 32 36"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-theater-gold drop-shadow-2xl group-hover:scale-110 transition-all duration-500 animate-glow-pulse"
                  >
                    {/* Lock body with breathing animation */}
                    <rect 
                      x="6" y="14" width="20" height="18" rx="3" 
                      fill="currentColor" 
                      stroke="currentColor" 
                      strokeWidth="1"
                      className="animate-pulse"
                    />
                    <rect x="8" y="16" width="16" height="14" rx="2" fill="rgba(0,0,0,0.4)"/>
                    
                    {/* Lock shackle with gentle sway */}
                    <g className="animate-micro-wiggle origin-center">
                      <path 
                        d="M10 14V10C10 6.68629 12.6863 4 16 4C19.3137 4 22 6.68629 22 10V14" 
                        stroke="currentColor" 
                        strokeWidth="2.5" 
                        fill="none"
                        strokeLinecap="round"
                      />
                    </g>
                    
                    {/* Keyhole with intense glow effect */}
                    <g className="animate-pulse">
                      <circle cx="16" cy="23" r="2.5" fill="#FFD700" className="drop-shadow-lg animate-glow-pulse"/>
                      <rect x="15.2" y="23" width="1.6" height="4" rx="0.8" fill="#FFD700" className="animate-glow-pulse"/>
                      
                      {/* Multiple keyhole glow layers */}
                      <circle cx="16" cy="23" r="4" fill="none" stroke="#FFD700" strokeWidth="0.8" opacity="0.8" className="animate-ping"/>
                      <circle cx="16" cy="23" r="6" fill="none" stroke="#FFD700" strokeWidth="0.5" opacity="0.5" className="animate-ping" style={{ animationDelay: '0.3s' }}/>
                      <circle cx="16" cy="23" r="8" fill="none" stroke="#FFD700" strokeWidth="0.3" opacity="0.3" className="animate-ping" style={{ animationDelay: '0.6s' }}/>
                    </g>
                    
                    {/* Decorative elements with subtle animation */}
                    <g className="animate-sparkle">
                      <circle cx="10" cy="18" r="0.8" fill="currentColor" opacity="0.7"/>
                      <circle cx="22" cy="18" r="0.8" fill="currentColor" opacity="0.7"/>
                      <circle cx="10" cy="28" r="0.8" fill="currentColor" opacity="0.7"/>
                      <circle cx="22" cy="28" r="0.8" fill="currentColor" opacity="0.7"/>
                    </g>
                  </svg>
                  
                  {/* Magical light rays from keyhole - more intense */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                    {[...Array(12)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-1 h-12 bg-gradient-to-t from-theater-gold via-theater-light-gold to-transparent animate-pulse origin-bottom"
                        style={{
                          transform: `rotate(${i * 30}deg) translateY(-20px)`,
                          animationDelay: `${i * 0.15}s`,
                          opacity: 0.8,
                          filter: 'blur(0.5px)'
                        }}
                      />
                    ))}
                  </div>
                  
                  {/* Enhanced sparkles around lock - more dynamic */}
                  {[...Array(12)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-2 h-2 bg-theater-light-gold rounded-full animate-sparkle"
                      style={{
                        top: `${50 + 45 * Math.sin((i * Math.PI * 2) / 12)}%`,
                        left: `${50 + 45 * Math.cos((i * Math.PI * 2) / 12)}%`,
                        animationDelay: `${i * 0.2}s`,
                        boxShadow: '0 0 12px currentColor',
                        animationDuration: `${2 + Math.random() * 2}s`
                      }}
                    />
                  ))}
                </div>
              </div>
            </MagicalTooltip>
          </div>

          {/* Logo */}
          <div 
            className="cursor-pointer group"
            onClick={handleLogoClick}
          >
            <div className="relative inline-block">
              <h1 className="font-cinzel text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-theater-gold mb-6 text-magic-glow group-hover:scale-105 transition-all duration-500 animate-mystical-float">
                ШОУ СЕКРЕТ
              </h1>
            </div>
          </div>
        </CinematicTransition>

        <CinematicTransition delay={800} direction="up">
          {/* Enhanced Tagline */}
          <div className="space-y-4">
            <p className="font-inter text-lg md:text-xl lg:text-2xl text-theater-light-gold font-light tracking-wide max-w-3xl mx-auto leading-relaxed animate-float-slow">
              Тайна, которую осмелишься увидеть
            </p>
            <div className="w-32 h-0.5 bg-gradient-gold mx-auto rounded-full animate-glow-pulse"></div>
          </div>
        </CinematicTransition>

        <CinematicTransition delay={1200} direction="up">
          {/* Enhanced Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-16">
            <MagicalTooltip content="Забронируйте места на волшебное представление">
              <TheaterButton 
                variant="gold"
                size="lg"
                onClick={() => onSectionChange('schedule')}
                className="min-w-56 animate-morph hover:animate-micro-glow"
              >
                Купить билет
              </TheaterButton>
            </MagicalTooltip>
            
            <MagicalTooltip content="Посмотрите промо-видео нашего шоу">
              <TheaterButton 
                variant="burgundy"
                size="lg"
                onClick={() => onSectionChange('promo')}
                className="min-w-56 hover:shadow-mystical transition-all duration-500 hover:animate-micro-wiggle"
              >
                <Play className="w-6 h-6 mr-3" />
                Смотреть промо
              </TheaterButton>
            </MagicalTooltip>
          </div>
        </CinematicTransition>

        <CinematicTransition delay={1500} direction="up">
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-8">
            <MagicalTooltip content="Получите специальную скидку на билеты">
              <TheaterButton 
                variant="transparent"
                onClick={() => onSectionChange('discount')}
                className="hover:animate-micro-bounce"
              >
                <Gift className="w-5 h-5 mr-2" />
                Получить скидку
              </TheaterButton>
            </MagicalTooltip>
            
            <MagicalTooltip content="Поделитесь магией с друзьями">
              <TheaterButton 
                variant="transparent"
                onClick={shareSecret}
                className="hover:animate-micro-shake"
              >
                <Share2 className="w-5 h-5 mr-2" />
                Поделиться секретом
              </TheaterButton>
            </MagicalTooltip>
          </div>
        </CinematicTransition>
      </div>

      {/* Enhanced Easter Egg Modal */}
      {showEasterEgg && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 animate-fade-in-up backdrop-blur-sm">
          <div className="bg-gradient-to-br from-theater-curtain via-theater-burgundy to-theater-curtain p-10 rounded-2xl max-w-3xl mx-6 text-center border-2 border-theater-gold/50 shadow-mystical relative overflow-hidden">
            {/* Magical background effect */}
            <div className="absolute inset-0 magic-particles opacity-50"></div>
            
            <div className="relative z-10">
              <h3 className="font-cinzel text-3xl text-theater-gold mb-8 text-magic-glow">
                🎭 Тайное послание открыто 🎭
              </h3>
              <div className="border border-theater-gold/30 rounded-lg p-4 md:p-6 bg-black/30">
                <p className="font-inter text-theater-light-gold leading-relaxed text-sm md:text-base lg:text-lg break-words">
                  Истинная магия начинается тогда, когда вы перестаете искать объяснения и начинаете верить в невозможное. 
                  Добро пожаловать в мир, где чудеса — это не исключение, а правило.
                </p>
              </div>
              <TheaterButton 
                variant="gold"
                className="mt-8 theater-button-gold"
                onClick={() => {
                  setShowEasterEgg(false);
                  setEasterEggClicks(0);
                }}
              >
                Понял секрет
              </TheaterButton>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HeroSection;