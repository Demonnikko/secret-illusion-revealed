import { Calendar, Clock, MapPin, Ticket, ExternalLink } from 'lucide-react';
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
    <div className="min-h-screen bg-black py-16 px-4 md:px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-cinzel text-3xl md:text-4xl lg:text-5xl font-bold text-theater-gold mb-6">
            Афиша
          </h2>
          <div className="w-24 h-1 bg-theater-gold mx-auto rounded-full mb-6" />
          <p className="font-inter text-lg text-theater-light-gold max-w-2xl mx-auto">
            Выберите удобную дату и забронируйте билеты
          </p>
        </div>

        {/* Shows List */}
        <div className="space-y-6">
          {shows.map((show) => (
            <div 
              key={show.id}
              className="bg-theater-stage/20 border border-theater-gold/20 rounded-xl p-6 hover:border-theater-gold/40 transition-all duration-300"
            >
              <div className="grid md:grid-cols-2 gap-6 items-center">
                {/* Show Info */}
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-4 text-sm md:text-base">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-theater-gold" />
                      <span className="text-theater-light-gold">{show.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-theater-gold" />
                      <span className="text-theater-light-gold">{show.time}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-theater-gold mt-0.5 flex-shrink-0" />
                    <div className="text-sm md:text-base">
                      <p className="text-theater-gold font-medium">{show.venue}</p>
                      <p className="text-theater-light-gold">{show.address}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-1">
                      <Ticket className="w-4 h-4 text-theater-gold" />
                      <span className="text-theater-light-gold">
                        Билетов: {show.ticketsLeft}
                      </span>
                    </div>
                    <span className="text-theater-gold font-medium">
                      {show.price}
                    </span>
                  </div>
                </div>

                {/* Buy Button */}
                <div className="flex justify-center md:justify-end">
                  <TheaterButton 
                    variant="gold"
                    href="https://qwitikеts.ru"
                    className="w-full md:w-auto min-w-[160px] flex items-center justify-center gap-2 group"
                  >
                    Купить билет
                    <ExternalLink className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  </TheaterButton>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Show Info Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          <div className="text-center p-6 bg-theater-burgundy/20 rounded-xl border border-theater-gold/20">
            <div className="w-12 h-12 bg-theater-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="w-6 h-6 text-theater-gold" />
            </div>
            <h3 className="font-cinzel text-lg text-theater-gold mb-2">Продолжительность</h3>
            <p className="font-inter text-theater-light-gold text-sm">2 часа + антракт</p>
          </div>

          <div className="text-center p-6 bg-theater-burgundy/20 rounded-xl border border-theater-gold/20">
            <div className="w-12 h-12 bg-theater-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-xl">🎭</span>
            </div>
            <h3 className="font-cinzel text-lg text-theater-gold mb-2">Возраст</h3>
            <p className="font-inter text-theater-light-gold text-sm">18+</p>
          </div>

          <div className="text-center p-6 bg-theater-burgundy/20 rounded-xl border border-theater-gold/20 sm:col-span-2 lg:col-span-1">
            <div className="w-12 h-12 bg-theater-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-xl">✨</span>
            </div>
            <h3 className="font-cinzel text-lg text-theater-gold mb-2">Жанр</h3>
            <p className="font-inter text-theater-light-gold text-sm">Иллюзионное шоу</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScheduleSection;