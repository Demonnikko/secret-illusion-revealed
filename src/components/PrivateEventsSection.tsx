import TheaterButton from './TheaterButton';
import { ExternalLink } from 'lucide-react';

const PrivateEventsSection = () => {
  return (
    <section className="min-h-screen bg-gradient-curtain py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-cinzel text-4xl md:text-5xl font-bold text-theater-gold mb-8">
          Частные мероприятия
        </h2>
        
        <div className="bg-theater-curtain/30 backdrop-blur-sm border border-theater-gold/20 rounded-lg p-8 mb-8">
          <p className="font-inter text-lg md:text-xl text-theater-light-gold leading-relaxed mb-8">
            Хотите пригласить Дмитрия Костюка на свадьбу, юбилей, корпоратив или день рождения? 
            Магия и иллюзии станут частью вашего праздника.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-theater-stage/20 p-6 rounded-lg">
              <h3 className="font-cinzel text-xl text-theater-gold mb-4">Корпоративы</h3>
              <p className="text-theater-light-gold">Удивите коллег незабываемым шоу</p>
            </div>
            <div className="bg-theater-stage/20 p-6 rounded-lg">
              <h3 className="font-cinzel text-xl text-theater-gold mb-4">Свадьбы</h3>
              <p className="text-theater-light-gold">Магический момент в особенный день</p>
            </div>
            <div className="bg-theater-stage/20 p-6 rounded-lg">
              <h3 className="font-cinzel text-xl text-theater-gold mb-4">Юбилеи</h3>
              <p className="text-theater-light-gold">Сделайте праздник поистине волшебным</p>
            </div>
            <div className="bg-theater-stage/20 p-6 rounded-lg">
              <h3 className="font-cinzel text-xl text-theater-gold mb-4">Дни рождения</h3>
              <p className="text-theater-light-gold">Подарите гостям настоящее чудо</p>
            </div>
          </div>
          
          <TheaterButton 
            variant="gold"
            size="lg"
            onClick={() => window.open('https://demonnikko.github.io/Site76/', '_blank')}
          >
            <ExternalLink className="w-5 h-5 mr-2" />
            Заказать выступление
          </TheaterButton>
        </div>
      </div>
    </section>
  );
};

export default PrivateEventsSection;