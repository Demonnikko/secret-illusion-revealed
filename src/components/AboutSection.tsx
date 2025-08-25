import { useState } from 'react';
import { Play, ChevronRight } from 'lucide-react';
import TheaterButton from './TheaterButton';

const AboutSection = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const philosophyPoints = [
    "Это не про фокусы — это про вас",
    "Зритель становится частью спектакля",
    "Философия и магия соединяются",
    "Один вечер — опыт на всю жизнь"
  ];

  const galleryImages = [
    { id: 1, src: "/api/placeholder/400/300", alt: "Сцена шоу", caption: "Магическая атмосфера" },
    { id: 2, src: "/api/placeholder/400/300", alt: "Дмитрий на сцене", caption: "Мастер иллюзий" },
    { id: 3, src: "/api/placeholder/400/300", alt: "Зрители", caption: "Восторженные лица" },
    { id: 4, src: "/api/placeholder/400/300", alt: "Фокус", caption: "Невероятные трюки" },
    { id: 5, src: "/api/placeholder/400/300", alt: "Реквизит", caption: "Тайные инструменты" },
    { id: 6, src: "/api/placeholder/400/300", alt: "Финал", caption: "Грандиозный финал" }
  ];

  return (
    <div className="min-h-screen bg-theater-stage py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="font-cinzel text-4xl md:text-5xl font-bold text-theater-gold mb-6">
            О Шоу
          </h2>
          <div className="w-24 h-1 bg-gradient-gold mx-auto rounded-full" />
        </div>

        {/* Video Presentation */}
        <div className="mb-20">
          <div className="bg-theater-curtain/50 backdrop-blur-sm rounded-xl p-8 border border-theater-gold/20 shadow-mystical">
            <h3 className="font-cinzel text-2xl text-theater-gold mb-6 text-center">
              Видео-презентация Дмитрия
            </h3>
            <div className="aspect-video bg-theater-burgundy/30 rounded-lg flex items-center justify-center relative overflow-hidden">
              <button 
                onClick={() => setSelectedVideo('presentation')}
                className="group flex items-center space-x-3 text-theater-gold hover:text-theater-light-gold transition-colors"
              >
                <div className="w-16 h-16 bg-theater-gold/20 rounded-full flex items-center justify-center group-hover:bg-theater-gold/30 transition-colors">
                  <Play className="w-8 h-8 ml-1" />
                </div>
                <span className="font-cinzel text-xl">Смотреть презентацию</span>
              </button>
            </div>
          </div>
        </div>

        {/* Philosophy */}
        <div className="mb-20">
          <h3 className="font-cinzel text-3xl text-theater-gold mb-10 text-center">
            Философия шоу
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {philosophyPoints.map((point, index) => (
              <div 
                key={index}
                className="bg-theater-curtain/30 backdrop-blur-sm p-6 rounded-lg border border-theater-gold/20 hover:border-theater-gold/40 transition-all duration-300 group"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-theater-gold/20 rounded-full flex items-center justify-center mt-1 group-hover:bg-theater-gold/40 transition-colors">
                    <ChevronRight className="w-4 h-4 text-theater-gold" />
                  </div>
                  <p className="font-inter text-lg text-theater-light-gold leading-relaxed">
                    "{point}"
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* My Secret Video */}
        <div className="mb-20">
          <div className="bg-theater-burgundy/20 backdrop-blur-sm rounded-xl p-8 border border-theater-gold/20 shadow-mystical">
            <h3 className="font-cinzel text-2xl text-theater-gold mb-6 text-center">
              Мой секрет - История Дмитрия
            </h3>
            <div className="aspect-video bg-theater-stage/50 rounded-lg flex items-center justify-center relative overflow-hidden">
              <button 
                onClick={() => setSelectedVideo('story')}
                className="group flex items-center space-x-3 text-theater-gold hover:text-theater-light-gold transition-colors"
              >
                <div className="w-16 h-16 bg-theater-gold/20 rounded-full flex items-center justify-center group-hover:bg-theater-gold/30 transition-colors">
                  <Play className="w-8 h-8 ml-1" />
                </div>
                <span className="font-cinzel text-xl">Узнать секрет</span>
              </button>
            </div>
          </div>
        </div>

        {/* Photo Gallery */}
        <div className="mb-20">
          <h3 className="font-cinzel text-3xl text-theater-gold mb-10 text-center">
            Галерея
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image) => (
              <div 
                key={image.id}
                className="group relative overflow-hidden rounded-lg border border-theater-gold/20 hover:border-theater-gold/40 transition-all duration-300 cursor-pointer"
              >
                <div className="aspect-video bg-theater-burgundy/30 flex items-center justify-center">
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-theater-burgundy/0 group-hover:bg-theater-burgundy/70 transition-all duration-300 flex items-center justify-center">
                  <p className="font-cinzel text-theater-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-lg">
                    {image.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Description */}
        <div className="bg-theater-curtain/40 backdrop-blur-sm rounded-xl p-8 border border-theater-gold/20 shadow-mystical text-center">
          <h3 className="font-cinzel text-2xl text-theater-gold mb-6">
            Описание шоу
          </h3>
          <p className="font-inter text-lg text-theater-light-gold leading-relaxed max-w-4xl mx-auto mb-8">
            Шоу Секрет — это не просто представление, это философское путешествие в мир невозможного. 
            Каждый номер раскрывает новую грань реальности, заставляя зрителей пересмотреть границы между 
            возможным и невероятным. Дмитрий Костюк создал уникальный театральный опыт, где магия служит 
            инструментом для глубоких размышлений о природе восприятия и сознания.
          </p>
          
          <TheaterButton 
            variant="gold"
            size="lg"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            Купить билет на шоу
          </TheaterButton>
        </div>

        {/* Video Modal */}
        {selectedVideo && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-6">
            <div className="bg-theater-curtain rounded-xl p-6 max-w-4xl w-full">
              <div className="flex justify-between items-center mb-4">
                <h4 className="font-cinzel text-xl text-theater-gold">
                  {selectedVideo === 'presentation' ? 'Презентация шоу' : 'История Дмитрия'}
                </h4>
                <button 
                  onClick={() => setSelectedVideo(null)}
                  className="text-theater-gold hover:text-theater-light-gold"
                >
                  ✕
                </button>
              </div>
              <div className="aspect-video bg-theater-burgundy/30 rounded-lg flex items-center justify-center">
                <p className="font-inter text-theater-light-gold">
                  Здесь будет встроенное видео
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AboutSection;