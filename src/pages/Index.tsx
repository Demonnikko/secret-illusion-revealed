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

const Index = () => {
  const [showLoading, setShowLoading] = useState(true);
  const [currentSection, setCurrentSection] = useState('hero');

  const handleSectionChange = (section: string) => {
    setCurrentSection(section);
    
    // Smooth scroll to section
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const renderSection = () => {
    switch (currentSection) {
      case 'about':
        return <AboutSection />;
      case 'reviews':
        return <ReviewsSection />;
      case 'schedule':
        return <ScheduleSection />;
      default:
        return <HeroSection onSectionChange={handleSectionChange} />;
    }
  };

  if (showLoading) {
    return <LoadingScreen onComplete={() => setShowLoading(false)} />;
  }

  return (
    <div className="min-h-screen bg-black font-inter overflow-x-hidden relative">
      {/* Interactive Particles Layer */}
      <InteractiveParticles />
      
      <Navigation onSectionChange={handleSectionChange} />
      
      <main>
        <div id="hero">
          <HeroSection onSectionChange={handleSectionChange} />
        </div>
        
        <div id="about">
          <AboutSection />
        </div>
        
        <div id="reviews">
          <ReviewsSection />
        </div>
        
        <div id="schedule">
          <ScheduleSection />
        </div>
        
        <div id="private">
          <PrivateEventsSection />
        </div>
        
        <div id="school">
          <SchoolSection />
        </div>
        
        <div id="contacts">
          <ContactsSection />
        </div>
        
        <div id="faq">
          <FAQSection />
        </div>
      </main>
      
      <Footer onSectionChange={handleSectionChange} />
    </div>
  );
};

export default Index;
