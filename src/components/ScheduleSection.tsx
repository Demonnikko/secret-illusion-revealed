import { Calendar, Clock, MapPin, Ticket } from 'lucide-react';
import TheaterButton from './TheaterButton';

const ScheduleSection = () => {
  const shows = [
    {
      id: 1,
      date: '15 декабря 2024',
      time: '19:00',
      venue: 'Театр им. Волкова',
      address: 'пл. Волкова, 1, Ярославль',
      ticketsLeft: 12,
      price: 'от 2000 ₽'
    },
    {
      id: 2,
      date: '22 декабря 2024',
      time: '19:00',
      venue: 'Театр им. Волкова',
      address: 'пл. Волкова, 1, Ярославль',
      ticketsLeft: 8,
      price: 'от 2000 ₽'
    },
    {
      id: 3,
      date: '29 декабря 2024',
      time: '19:00',
      venue: 'Театр им. Волкова',
      address: 'пл. Волкова, 1, Ярославль',
      ticketsLeft: 25,
      price: 'от 2000 ₽'
    }
  ];

  return (
    <div className="min-h-screen bg-theater-stage py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="font-cinzel text-4xl md:text-5xl font-bold text-theater-gold mb-6">
            Афиша
          </h2>
          <div className="w-24 h-1 bg-gradient-gold mx-auto rounded-full" />
          <p className="font-inter text-lg text-theater-light-gold mt-6 max-w-2xl mx-auto">
            Выберите удобную дату и забронируйте билеты на незабываемое театральное представление
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Show Poster */}
          <div className="order-2 lg:order-1">
            <div className="relative group">
              <div className="aspect-[3/4] bg-theater-burgundy/30 rounded-xl border border-theater-gold/20 shadow-mystical overflow-hidden">
                <div className="h-full flex flex-col items-center justify-center p-8 text-center bg-gradient-curtain">
                  {/* Poster Content */}
                  <div className="space-y-6">
                    <div className="w-20 h-20 bg-theater-gold/20 rounded-full flex items-center justify-center mb-4">
                      <span className="text-3xl">🎭</span>
                    </div>
                    
                    <h3 className="font-cinzel text-4xl font-bold text-theater-gold">
                      ШОУ СЕКРЕТ
                    </h3>
                    
                    <div className="space-y-2 text-theater-light-gold">
                      <p className="font-inter text-lg">Авторское иллюзионное шоу</p>
                      <p className="font-cinzel text-xl font-medium">Дмитрия Костюка</p>
                    </div>
                    
                    <div className="pt-4 border-t border-theater-gold/20">
                      <p className="font-inter text-theater-light-gold mb-2">Продолжительность:</p>
                      <p className="font-cinzel text-lg text-theater-gold">2 часа + антракт</p>
                    </div>
                    
                    <div className="bg-theater-burgundy/40 p-3 rounded-lg">
                      <p className="font-inter text-sm text-theater-light-gold">
                        Возрастное ограничение: 18+
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-theater-gold/20 rounded-full animate-mystical-float"></div>
              <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-theater-light-gold/30 rounded-full animate-mystical-float" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>

          {/* Schedule */}
          <div className="order-1 lg:order-2 space-y-6">
            <h3 className="font-cinzel text-2xl text-theater-gold mb-8">
              Ближайшие показы
            </h3>
            
            {shows.map((show) => (
              <div 
                key={show.id}
                className="bg-theater-curtain/40 backdrop-blur-sm rounded-xl p-6 border border-theater-gold/20 hover:border-theater-gold/40 transition-all duration-300 shadow-mystical group"
              >
                <div className="flex flex-col space-y-4">
                  {/* Date and Time */}
                  <div className="flex flex-wrap gap-4">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-5 h-5 text-theater-gold" />
                      <span className="font-cinzel text-lg text-theater-light-gold">
                        {show.date}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-5 h-5 text-theater-gold" />
                      <span className="font-inter text-lg text-theater-light-gold">
                        {show.time}
                      </span>
                    </div>
                  </div>
                  
                  {/* Venue */}
                  <div className="flex items-start space-x-2">
                    <MapPin className="w-5 h-5 text-theater-gold mt-0.5" />
                    <div>
                      <p className="font-cinzel text-lg text-theater-gold font-medium">
                        {show.venue}
                      </p>
                      <p className="font-inter text-theater-light-gold">
                        {show.address}
                      </p>
                    </div>
                  </div>
                  
                  {/* Tickets Info */}
                  <div className="flex items-center justify-between pt-4 border-t border-theater-gold/20">
                    <div className="space-y-1">
                      <div className="flex items-center space-x-2">
                        <Ticket className="w-4 h-4 text-theater-gold" />
                        <span className="font-inter text-sm text-theater-light-gold">
                          Осталось билетов: {show.ticketsLeft}
                        </span>
                      </div>
                      <p className="font-cinzel text-lg text-theater-gold font-medium">
                        {show.price}
                      </p>
                    </div>
                    
                    <TheaterButton 
                      variant="gold"
                      href="https://qwitikеts.ru"
                      className="group-hover:scale-105 transition-transform"
                    >
                      Купить билет
                    </TheaterButton>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Call to Action */}
            <div className="bg-theater-burgundy/20 backdrop-blur-sm rounded-xl p-6 border border-theater-gold/20 text-center">
              <h4 className="font-cinzel text-xl text-theater-gold mb-3">
                Готовы открыть свой секрет?
              </h4>
              <p className="font-inter text-theater-light-gold mb-6">
                Забронируйте билет прямо сейчас и станьте частью магического представления
              </p>
              <TheaterButton 
                variant="gold"
                size="lg"
                href="https://qwitikеts.ru"
              >
                Забронировать билет
              </TheaterButton>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-theater-curtain/20 rounded-lg border border-theater-gold/20">
            <div className="w-12 h-12 bg-theater-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="w-6 h-6 text-theater-gold" />
            </div>
            <h4 className="font-cinzel text-lg text-theater-gold mb-2">Продолжительность</h4>
            <p className="font-inter text-theater-light-gold">2 часа + антракт 10-15 минут</p>
          </div>

          <div className="text-center p-6 bg-theater-curtain/20 rounded-lg border border-theater-gold/20">
            <div className="w-12 h-12 bg-theater-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-xl">👥</span>
            </div>
            <h4 className="font-cinzel text-lg text-theater-gold mb-2">Для всей семьи</h4>
            <p className="font-inter text-theater-light-gold">Можно прийти всей семьёй, но больше понравится взрослым</p>
          </div>

          <div className="text-center p-6 bg-theater-curtain/20 rounded-lg border border-theater-gold/20">
            <div className="w-12 h-12 bg-theater-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-xl">🎭</span>
            </div>
            <h4 className="font-cinzel text-lg text-theater-gold mb-2">Серьёзное шоу</h4>
            <p className="font-inter text-theater-light-gold">Философия и фокусы без пошлости</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScheduleSection;