import { useState, useEffect } from 'react';
import LoadingScreen from '@/components/LoadingScreen';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ReviewsSection from '@/components/ReviewsSection';
import ScheduleSection from '@/components/ScheduleSection';
import PrivateEventsSection from '@/components/PrivateEventsSection';
import SchoolSection from '@/components/SchoolSection';
import ContactsSection from '@/components/ContactsSection';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';
import InteractiveParticles from '@/components/InteractiveParticles';
import CustomCursor from '@/components/CustomCursor';
import AnimatedSection from '@/components/AnimatedSection';
import ScrollProgress from '@/components/ScrollProgress';
import AmbientSounds from '@/components/AmbientSounds';
import SoundToggle from '@/components/SoundToggle';
import ParticleSystem from '@/components/ParticleSystem';
import ParallaxSection from '@/components/ParallaxSection';
import { useSmoothScroll } from '@/hooks/useSmoothScroll';
import { useResponsiveFonts } from '@/hooks/useResponsive';
import { Toaster } from '@/components/ui/toaster';

const Index = () => {
  const [showLoading, setShowLoading] = useState(true);
  const { scrollToSection } = useSmoothScroll();
  const responsiveFontSize = useResponsiveFonts();

  const handleSectionChange = (section: string) => {
    scrollToSection(section);
  };

  if (showLoading) {
    return <LoadingScreen onComplete={() => setShowLoading(false)} />;
  }

  return (
    <div className={`min-h-screen bg-black font-inter overflow-x-hidden relative text-${responsiveFontSize}`}>
      {/* Scroll Progress Bar */}
      <ScrollProgress />
      
      {/* Custom Cursor */}
      <CustomCursor />
      
      {/* Interactive Particles Layer */}
      <InteractiveParticles />
      
      {/* Falling Particles System */}
      <ParticleSystem 
        density={20} 
        types={['rose', 'star', 'sparkle']} 
      />
      
      {/* Ambient Theater Sounds */}
      <AmbientSounds />
      
      {/* Sound Toggle Control */}
      <SoundToggle />
      
      <Navigation onSectionChange={handleSectionChange} />
      
      <main>
        <AnimatedSection id="hero" animationType="fadeUp">
          <HeroSection onSectionChange={handleSectionChange} />
        </AnimatedSection>
        
        <AnimatedSection id="about" animationType="fadeLeft" delay={200}>
          <AboutSection />
        </AnimatedSection>
        
        <AnimatedSection id="reviews" animationType="zoom" delay={300}>
          <ReviewsSection />
        </AnimatedSection>
        
        <AnimatedSection id="schedule" animationType="fadeUp" delay={100}>
          <ScheduleSection />
        </AnimatedSection>
        
        <AnimatedSection id="private" animationType="fadeRight" delay={200}>
          <PrivateEventsSection />
        </AnimatedSection>
        
        <AnimatedSection id="school" animationType="rotate" delay={150}>
          <SchoolSection />
        </AnimatedSection>
        
        <AnimatedSection id="contacts" animationType="fadeUp" delay={100}>
          <ContactsSection />
        </AnimatedSection>
        
        <AnimatedSection id="faq" animationType="fadeLeft" delay={200}>
          <FAQSection />
        </AnimatedSection>
      </main>
      
      <Footer onSectionChange={handleSectionChange} />
      
      {/* Toast Notifications */}
      <Toaster />
    </div>
  );
};

export default Index;
