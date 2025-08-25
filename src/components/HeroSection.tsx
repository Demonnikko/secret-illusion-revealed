import { useState, useEffect } from 'react';
import { Eye, Play, Gift, Share2 } from 'lucide-react';
import TheaterButton from './TheaterButton';

interface HeroSectionProps {
  onSectionChange: (section: string) => void;
}

const HeroSection = ({ onSectionChange }: HeroSectionProps) => {
  const [easterEggClicks, setEasterEggClicks] = useState(0);
  const [showEasterEgg, setShowEasterEgg] = useState(false);
  const [confetti, setConfetti] = useState<Array<{ id: number; color: string; left: number; delay: number }>>([]);

  const handleLogoClick = () => {
    const newClicks = easterEggClicks + 1;
    setEasterEggClicks(newClicks);

    if (newClicks === 5) {
      // Trigger easter egg
      setShowEasterEgg(true);
      
      // Generate confetti
      const newConfetti = Array.from({ length: 50 }, (_, i) => ({
        id: i,
        color: Math.random() > 0.5 ? '#D4AF37' : '#7A1E2B',
        left: Math.random() * 100,
        delay: Math.random() * 2
      }));
      setConfetti(newConfetti);

      // Reset after animation
      setTimeout(() => {
        setShowEasterEgg(false);
        setConfetti([]);
        setEasterEggClicks(0);
      }, 5000);
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
    } else {
      // Fallback - copy to clipboard
      navigator.clipboard.writeText(window.location.href);
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-stage overflow-hidden">
      {/* Stage Lighting Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-1/4 w-32 h-32 bg-theater-spotlight/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-20 right-1/4 w-24 h-24 bg-theater-gold/20 rounded-full blur-2xl animate-pulse delay-1000" />
        <div className="absolute bottom-20 left-1/3 w-40 h-40 bg-theater-light-gold/10 rounded-full blur-3xl animate-pulse delay-2000" />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-theater-gold/60 rounded-full animate-mystical-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Confetti for Easter Egg */}
      {confetti.map((piece) => (
        <div
          key={piece.id}
          className="fixed w-2 h-2 z-50 animate-confetti-fall pointer-events-none"
          style={{
            backgroundColor: piece.color,
            left: `${piece.left}%`,
            animationDelay: `${piece.delay}s`,
          }}
        />
      ))}

      {/* Main Content */}
      <div className="relative z-10 text-center space-y-8 px-6 animate-fade-in-up">
        {/* Logo with Lock and Eye */}
        <div 
          className="cursor-pointer group"
          onClick={handleLogoClick}
        >
          <div className="relative inline-block">
            <h1 className="font-cinzel text-5xl md:text-7xl font-bold text-theater-gold mb-4 group-hover:scale-105 transition-transform duration-300">
              ШОУ СЕКРЕТ
            </h1>
            
            {/* Eye in Lock Symbol */}
            <div className="absolute -top-2 -right-2 w-12 h-12 bg-theater-burgundy rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
              <Eye className="w-6 h-6 text-theater-gold" />
            </div>
          </div>
        </div>

        {/* Tagline */}
        <p className="font-inter text-xl md:text-2xl text-theater-light-gold font-light tracking-wide max-w-2xl mx-auto">
          Тайна, которую осмелишься увидеть
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
          <TheaterButton 
            variant="gold"
            size="lg"
            onClick={() => onSectionChange('schedule')}
            className="min-w-48"
          >
            Купить билет
          </TheaterButton>
          
          <TheaterButton 
            variant="burgundy"
            size="lg"
            onClick={() => onSectionChange('promo')}
            className="min-w-48"
          >
            <Play className="w-5 h-5 mr-2" />
            Смотреть промо
          </TheaterButton>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-6">
          <TheaterButton 
            variant="transparent"
            onClick={() => onSectionChange('discount')}
          >
            <Gift className="w-5 h-5 mr-2" />
            Получить скидку
          </TheaterButton>
          
          <TheaterButton 
            variant="transparent"
            onClick={shareSecret}
          >
            <Share2 className="w-5 h-5 mr-2" />
            Поделиться секретом
          </TheaterButton>
        </div>
      </div>

      {/* Easter Egg Modal */}
      {showEasterEgg && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 animate-fade-in-up">
          <div className="bg-theater-curtain p-8 rounded-lg max-w-2xl mx-6 text-center border border-theater-gold/30">
            <h3 className="font-cinzel text-2xl text-theater-gold mb-6">
              🎭 Тайное послание открыто 🎭
            </h3>
            <div className="overflow-hidden">
              <p className="font-inter text-theater-light-gold leading-relaxed text-lg animate-typewriter whitespace-nowrap">
                Истинная магия начинается тогда, когда вы перестаете искать объяснения и начинаете верить в невозможное. 
                Добро пожаловать в мир, где чудеса — это не исключение, а правило.
              </p>
            </div>
            <TheaterButton 
              variant="gold"
              className="mt-6"
              onClick={() => setShowEasterEgg(false)}
            >
              Понял секрет
            </TheaterButton>
          </div>
        </div>
      )}
    </div>
  );
};

export default HeroSection;