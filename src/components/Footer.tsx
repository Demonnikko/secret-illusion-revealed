import { Phone, Send, Calendar, Users, MapPin } from 'lucide-react';
import TheaterButton from './TheaterButton';
import SparkleTrail from './SparkleTrail';

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
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <SparkleTrail>
            <button
              onClick={() => onSectionChange('schedule')}
              className="flex items-center gap-3 p-4 bg-theater-stage/20 rounded-lg hover:bg-theater-gold/10 transition-all duration-300 group hover:scale-105 hover:shadow-gold-glow w-full"
            >
              <Calendar className="w-5 h-5 text-theater-gold group-hover:scale-110 transition-transform" />
              <span className="font-inter text-theater-light-gold group-hover:text-theater-gold transition-colors">
                Афиша
              </span>
            </button>
          </SparkleTrail>
          
          <SparkleTrail>
            <button
              onClick={() => onSectionChange('private')}
              className="flex items-center gap-3 p-4 bg-theater-stage/20 rounded-lg hover:bg-theater-gold/10 transition-all duration-300 group hover:scale-105 hover:shadow-gold-glow w-full"
            >
              <Users className="w-5 h-5 text-theater-gold group-hover:scale-110 transition-transform" />
              <span className="font-inter text-theater-light-gold group-hover:text-theater-gold transition-colors">
                Частные мероприятия
              </span>
            </button>
          </SparkleTrail>
          
          <SparkleTrail>
            <button
              onClick={() => onSectionChange('contacts')}
              className="flex items-center gap-3 p-4 bg-theater-stage/20 rounded-lg hover:bg-theater-gold/10 transition-all duration-300 group hover:scale-105 hover:shadow-gold-glow w-full"
            >
              <MapPin className="w-5 h-5 text-theater-gold group-hover:scale-110 transition-transform" />
              <span className="font-inter text-theater-light-gold group-hover:text-theater-gold transition-colors">
                Контакты
              </span>
            </button>
          </SparkleTrail>
          
          <SparkleTrail>
            <button
              onClick={shareSecret}
              className="flex items-center gap-3 p-4 bg-theater-stage/20 rounded-lg hover:bg-theater-gold/10 transition-all duration-300 group hover:scale-105 hover:shadow-gold-glow w-full"
            >
              <Send className="w-5 h-5 text-theater-gold group-hover:scale-110 transition-transform" />
              <span className="font-inter text-theater-light-gold group-hover:text-theater-gold transition-colors">
                Поделиться секретом
              </span>
            </button>
          </SparkleTrail>
        </div>
        
        <div className="text-center border-t border-theater-gold/20 pt-6">
          <p className="font-inter text-theater-light-gold/50 text-xs">
            ИП КОСТЮК 2025 работаем официально
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;