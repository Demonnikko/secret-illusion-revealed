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
    <div className="min-h-screen bg-black py-8 md:py-20 px-4 md:px-6 relative overflow-hidden">
      {/* Magic Particles Background */}
      <div className="absolute inset-0 magic-particles opacity-30"></div>
      
      {/* Stage Lighting */}
      <div className="absolute inset-0 stage-lighting opacity-20"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-16 animate-fade-in-up">
          <h2 className="font-cinzel text-3xl md:text-4xl lg:text-5xl font-bold text-theater-gold mb-4 md:mb-6 px-2">
            О Шоу
          </h2>
          <div className="w-16 md:w-24 h-1 bg-gradient-gold mx-auto rounded-full" />
        </div>

        {/* Video Presentation */}
        <div className="mb-12 md:mb-20">
          <div className="bg-theater-curtain/50 backdrop-blur-sm rounded-xl p-4 md:p-8 border border-theater-gold/20 shadow-mystical">
            <h3 className="font-cinzel text-xl md:text-2xl text-theater-gold mb-4 md:mb-6 text-center px-2">
              Видео-презентация Дмитрия
            </h3>
            <div className="aspect-video bg-theater-burgundy/30 rounded-lg flex items-center justify-center relative overflow-hidden">
              <button 
                onClick={() => setSelectedVideo('presentation')}
                className="group flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-3 text-theater-gold hover:text-theater-light-gold transition-colors p-4"
              >
                <div className="w-12 h-12 md:w-16 md:h-16 bg-theater-gold/20 rounded-full flex items-center justify-center group-hover:bg-theater-gold/30 transition-colors">
                  <Play className="w-6 h-6 md:w-8 md:h-8 ml-1" />
                </div>
                <span className="font-cinzel text-lg md:text-xl text-center">Смотреть презентацию</span>
              </button>
            </div>
          </div>
        </div>

        {/* Philosophy */}
        <div className="mb-12 md:mb-20">
          <h3 className="font-cinzel text-2xl md:text-3xl text-theater-gold mb-6 md:mb-10 text-center px-2">
            Философия шоу
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
            {philosophyPoints.map((point, index) => (
              <div 
                key={index}
                className="bg-theater-curtain/30 backdrop-blur-sm p-4 md:p-6 rounded-lg border border-theater-gold/20 hover:border-theater-gold/40 transition-all duration-300 group"
              >
                <div className="flex items-start space-x-3 md:space-x-4">
                  <div className="w-6 h-6 md:w-8 md:h-8 bg-theater-gold/20 rounded-full flex items-center justify-center mt-1 group-hover:bg-theater-gold/40 transition-colors flex-shrink-0">
                    <ChevronRight className="w-3 h-3 md:w-4 md:h-4 text-theater-gold" />
                  </div>
                  <p className="font-inter text-base md:text-lg text-theater-light-gold leading-relaxed">
                    "{point}"
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* My Secret Video */}
        <div className="mb-12 md:mb-20">
          <div className="bg-theater-burgundy/20 backdrop-blur-sm rounded-xl p-4 md:p-8 border border-theater-gold/20 shadow-mystical">
            <h3 className="font-cinzel text-xl md:text-2xl text-theater-gold mb-4 md:mb-6 text-center px-2">
              Мой секрет - История Дмитрия
            </h3>
            <div className="aspect-video bg-theater-stage/50 rounded-lg flex items-center justify-center relative overflow-hidden">
              <button 
                onClick={() => setSelectedVideo('story')}
                className="group flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-3 text-theater-gold hover:text-theater-light-gold transition-colors p-4"
              >
                <div className="w-12 h-12 md:w-16 md:h-16 bg-theater-gold/20 rounded-full flex items-center justify-center group-hover:bg-theater-gold/30 transition-colors">
                  <Play className="w-6 h-6 md:w-8 md:h-8 ml-1" />
                </div>
                <span className="font-cinzel text-lg md:text-xl text-center">Узнать секрет</span>
              </button>
            </div>
          </div>
        </div>

        {/* Photo Gallery */}
        <div className="mb-12 md:mb-20">
          <h3 className="font-cinzel text-2xl md:text-3xl text-theater-gold mb-6 md:mb-10 text-center px-2">
            Галерея
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
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
        <div className="bg-theater-curtain/40 backdrop-blur-sm rounded-xl p-4 md:p-8 border border-theater-gold/20 shadow-mystical text-center">
          <h3 className="font-cinzel text-xl md:text-2xl text-theater-gold mb-4 md:mb-6 px-2">
            Описание шоу
          </h3>
          <p className="font-inter text-base md:text-lg text-theater-light-gold leading-relaxed max-w-4xl mx-auto mb-6 md:mb-8 px-2">
            Шоу Секрет — это не просто представление, это философское путешествие в мир невозможного. 
            Каждый номер раскрывает новую грань реальности, заставляя зрителей пересмотреть границы между 
            возможным и невероятным. Дмитрий Костюк создал уникальный театральный опыт, где магия служит 
            инструментом для глубоких размышлений о природе восприятия и сознания.
          </p>
          
          <div className="flex justify-center">
            <TheaterButton 
              variant="gold"
              size="lg"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="w-full md:w-auto"
            >
              Купить билет на шоу
            </TheaterButton>
          </div>
        </div>

        {/* Video Modal */}
        {selectedVideo && (
          <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4 md:p-6">
            <div className="bg-theater-curtain rounded-xl p-4 md:p-6 max-w-4xl w-full max-h-screen overflow-y-auto">
              <div className="flex justify-between items-center mb-4">
                <h4 className="font-cinzel text-lg md:text-xl text-theater-gold">
                  {selectedVideo === 'presentation' ? 'Презентация шоу' : 'История Дмитрия'}
                </h4>
                <button 
                  onClick={() => setSelectedVideo(null)}
                  className="text-theater-gold hover:text-theater-light-gold text-2xl md:text-xl w-8 h-8 flex items-center justify-center"
                >
                  ✕
                </button>
              </div>
              <div className="aspect-video bg-theater-burgundy/30 rounded-lg flex items-center justify-center">
                <p className="font-inter text-theater-light-gold text-center px-4">
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