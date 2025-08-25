import { Phone, Send } from 'lucide-react';
import TheaterButton from './TheaterButton';

const ContactsSection = () => {
  return (
    <section className="min-h-screen bg-black py-20 px-6 relative overflow-hidden">
      {/* Magic Particles Background */}
      <div className="absolute inset-0 magic-particles opacity-25"></div>
      
      {/* Stage Lighting */}
      <div className="absolute inset-0 stage-lighting opacity-20"></div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="font-cinzel text-4xl md:text-5xl font-bold text-theater-gold mb-8">
          Контакты
        </h2>
        
        <div className="bg-theater-curtain/30 backdrop-blur-sm border border-theater-gold/20 rounded-lg p-8 space-y-8">
          <div className="space-y-6">
            <div className="flex items-center justify-center gap-4">
              <Phone className="w-6 h-6 text-theater-gold" />
              <a 
                href="tel:+79092763386"
                className="font-inter text-xl text-theater-light-gold hover:text-theater-gold transition-colors"
              >
                +7 (909) 276-33-86
              </a>
            </div>
            
            <div className="border-t border-theater-gold/20 pt-6">
              <h3 className="font-cinzel text-2xl text-theater-gold mb-4">
                Официальная группа
              </h3>
              <TheaterButton 
                variant="burgundy"
                onClick={() => window.open('https://t.me/+SEXWNgTBCUo4Nzhi', '_blank')}
              >
                <Send className="w-5 h-5 mr-2" />
                Telegram
              </TheaterButton>
            </div>
          </div>
          
          <div className="bg-theater-stage/20 p-6 rounded-lg">
            <p className="font-inter text-theater-light-gold leading-relaxed">
              Готовы окунуться в мир тайн и иллюзий? Свяжитесь с нами для бронирования билетов 
              или организации частного мероприятия.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactsSection;