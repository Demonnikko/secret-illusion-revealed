import { useState, useEffect } from 'react';
import LoadingScreen from '@/components/LoadingScreen';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import ScheduleSection from '@/components/ScheduleSection';
import Footer from '@/components/Footer';
import AnimatedSection from '@/components/AnimatedSection';
import ScrollProgress from '@/components/ScrollProgress';
import ParticleSystem from '@/components/ParticleSystem';
import SectionManager from '@/components/SectionManager';
import { useSmoothScroll } from '@/hooks/useSmoothScroll';
import { Toaster } from '@/components/ui/toaster';

const Index = () => {
  const [showLoading, setShowLoading] = useState(true);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const { scrollToSection } = useSmoothScroll();

  const handleSectionChange = (section: string) => {
    if (['about', 'reviews', 'private', 'school', 'contacts', 'faq'].includes(section)) {
      setActiveSection(section);
    } else {
      scrollToSection(section);
    }
  };

  if (showLoading) {
    return <LoadingScreen onComplete={() => setShowLoading(false)} />;
  }

  return (
    <div className="min-h-screen bg-black font-inter overflow-x-hidden relative text-sm md:text-base lg:text-lg">
      {/* Scroll Progress Bar */}
      <ScrollProgress />
      
      {/* Falling Particles System - reduced for mobile */}
      <ParticleSystem 
        density={0} 
        types={[]} 
      />
      
      <Navigation onSectionChange={handleSectionChange} />
      
      <main>
        <AnimatedSection id="hero" animationType="fadeUp">
          <HeroSection onSectionChange={handleSectionChange} />
        </AnimatedSection>
        
        <AnimatedSection id="schedule" animationType="fadeUp" delay={100}>
          <ScheduleSection />
        </AnimatedSection>
      </main>
      
      <Footer onSectionChange={handleSectionChange} />
      
      {/* Section Manager for modal sections */}
      <SectionManager 
        activeSection={activeSection} 
        onClose={() => setActiveSection(null)} 
      />
      
      {/* Toast Notifications */}
      <Toaster />
    </div>
  );
};

export default Index;
