import { Phone, Send, Calendar, Users, MapPin } from 'lucide-react';
import TheaterButton from './TheaterButton';

interface FooterProps {
  onSectionChange: (section: string) => void;
}

const Footer = ({ onSectionChange }: FooterProps) => {
  const shareSecret = () => {
    const shareData = {
      title: 'Шоу Секрет - Театральное иллюзионное шоу',
      text: 'Тайна, которую осмелишься увидеть',
      url: window.location.href
    };

    if (navigator.share && navigator.canShare(shareData)) {
      navigator.share(shareData);
    } else {
      navigator.clipboard.writeText(window.location.href);
    }
  };

  return (
    <footer className="bg-black border-t border-theater-gold/20 py-12 px-6 relative overflow-hidden">
      {/* Magic Particles Background */}
      <div className="absolute inset-0 magic-particles opacity-10"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-8">
          <h3 className="font-cinzel text-2xl md:text-3xl text-theater-gold mb-4">
            Секрет всегда рядом. Готовы открыть свой?
          </h3>
          <TheaterButton 
            variant="gold"
            size="lg"
            onClick={() => onSectionChange('schedule')}
          >
            Купить билет
          </TheaterButton>
        </div>
        
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <button
            onClick={() => onSectionChange('schedule')}
            className="flex items-center gap-3 p-4 bg-theater-stage/20 rounded-lg hover:bg-theater-gold/10 transition-colors group"
          >
            <Calendar className="w-5 h-5 text-theater-gold group-hover:scale-110 transition-transform" />
            <span className="font-inter text-theater-light-gold group-hover:text-theater-gold transition-colors">
              Афиша
            </span>
          </button>
          
          <button
            onClick={() => onSectionChange('private')}
            className="flex items-center gap-3 p-4 bg-theater-stage/20 rounded-lg hover:bg-theater-gold/10 transition-colors group"
          >
            <Users className="w-5 h-5 text-theater-gold group-hover:scale-110 transition-transform" />
            <span className="font-inter text-theater-light-gold group-hover:text-theater-gold transition-colors">
              Частные мероприятия
            </span>
          </button>
          
          <button
            onClick={() => onSectionChange('contacts')}
            className="flex items-center gap-3 p-4 bg-theater-stage/20 rounded-lg hover:bg-theater-gold/10 transition-colors group"
          >
            <MapPin className="w-5 h-5 text-theater-gold group-hover:scale-110 transition-transform" />
            <span className="font-inter text-theater-light-gold group-hover:text-theater-gold transition-colors">
              Контакты
            </span>
          </button>
          
          <button
            onClick={shareSecret}
            className="flex items-center gap-3 p-4 bg-theater-stage/20 rounded-lg hover:bg-theater-gold/10 transition-colors group"
          >
            <Send className="w-5 h-5 text-theater-gold group-hover:scale-110 transition-transform" />
            <span className="font-inter text-theater-light-gold group-hover:text-theater-gold transition-colors">
              Поделиться секретом
            </span>
          </button>
        </div>
        
        <div className="text-center border-t border-theater-gold/20 pt-6">
          <p className="font-inter text-theater-light-gold/60 text-sm">
            © 2024 Шоу Секрет. Дмитрий Костюк. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;