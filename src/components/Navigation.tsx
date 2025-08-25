import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import TheaterButton from './TheaterButton';
import SparkleTrail from './SparkleTrail';

interface NavigationProps {
  onSectionChange: (section: string) => void;
}

const Navigation = ({ onSectionChange }: NavigationProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: 'О шоу', section: 'about' },
    { label: 'Отзывы', section: 'reviews' },
    { label: 'Афиша', section: 'schedule' },
    { label: 'Частные мероприятия', section: 'private' },
    { label: 'Школа фокусов', section: 'school' },
    { label: 'Контакты', section: 'contacts' },
    { label: 'FAQ', section: 'faq' },
  ];

  const handleItemClick = (section: string) => {
    onSectionChange(section);
    setIsOpen(false);
  };

  return (
    <>
      {/* Menu Toggle with Sparkle Effect */}
      <SparkleTrail>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="fixed top-6 right-6 z-50 p-3 bg-theater-burgundy/90 backdrop-blur-sm rounded-full text-theater-gold hover:bg-theater-burgundy transition-all duration-300 hover:scale-110 hover:shadow-gold-glow group"
        >
          <div className="relative">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            
            {/* Rotating border on hover */}
            <div className="absolute inset-0 border-2 border-theater-gold/30 rounded-full group-hover:border-theater-gold group-hover:animate-spin opacity-0 group-hover:opacity-100 transition-all duration-300" />
          </div>
        </button>
      </SparkleTrail>

      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Menu */}
      <div className={`fixed top-0 right-0 h-full w-80 bg-theater-curtain/95 backdrop-blur-lg z-40 transform transition-transform duration-300 ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="pt-20 px-6">
          <h2 className="font-cinzel text-2xl text-theater-gold mb-8 text-center">
            Меню
          </h2>
          
          <nav className="space-y-4">
            {menuItems.map((item, index) => (
              <SparkleTrail key={item.section}>
                <button
                  onClick={() => handleItemClick(item.section)}
                  className="block w-full text-left font-inter text-lg text-theater-light-gold hover:text-theater-gold transition-all duration-300 py-3 px-4 rounded-lg hover:bg-theater-burgundy/30 hover:scale-105 hover:shadow-gold-glow group relative overflow-hidden"
                >
                  <span className="relative z-10">{item.label}</span>
                  
                  {/* Slide-in effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-theater-gold/10 to-theater-gold/5 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300" />
                </button>
              </SparkleTrail>
            ))}
          </nav>

          <div className="mt-12 space-y-4">
            <TheaterButton 
              variant="gold" 
              className="w-full"
              onClick={() => handleItemClick('schedule')}
            >
              Купить билет
            </TheaterButton>
            
            <TheaterButton 
              variant="transparent" 
              className="w-full"
              onClick={() => {
                // Share functionality
                if (navigator.share) {
                  navigator.share({
                    title: 'Шоу Секрет',
                    text: 'Авторское иллюзионное театральное шоу',
                    url: window.location.href,
                  });
                }
              }}
            >
              Поделиться секретом
            </TheaterButton>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;