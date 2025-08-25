import { ExternalLink, Wand2 } from 'lucide-react';
import TheaterButton from './TheaterButton';

const SchoolSection = () => {
  return (
    <section className="min-h-screen bg-black py-20 px-6 relative overflow-hidden">
      {/* Magic Particles Background */}
      <div className="absolute inset-0 magic-particles opacity-20"></div>
      
      {/* Stage Lighting */}
      <div className="absolute inset-0 stage-lighting opacity-15"></div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="font-cinzel text-4xl md:text-5xl font-bold text-theater-gold mb-8">
          Школа фокусов
        </h2>
        
        <div className="bg-theater-curtain/30 backdrop-blur-sm border border-theater-gold/20 rounded-lg p-8">
          <div className="mb-8">
            <Wand2 className="w-16 h-16 text-theater-gold mx-auto mb-6" />
            <p className="font-inter text-lg md:text-xl text-theater-light-gold leading-relaxed mb-8">
              Хотите научиться создавать магию своими руками? Откройте для себя 
              секреты иллюзионного искусства в нашей школе фокусов.
            </p>
          </div>
          
          <TheaterButton 
            variant="gold"
            size="lg"
            onClick={() => window.open('https://example.com/school', '_blank')}
          >
            <ExternalLink className="w-5 h-5 mr-2" />
            Перейти к обучению
          </TheaterButton>
        </div>
      </div>
    </section>
  );
};

export default SchoolSection;