import { useState, useEffect } from 'react';
import LoadingScreen from '@/components/LoadingScreen';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ReviewsSection from '@/components/ReviewsSection';
import ScheduleSection from '@/components/ScheduleSection';

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
    <div className="min-h-screen bg-theater-stage font-inter overflow-x-hidden">
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
      </main>
    </div>
  );
};

export default Index;
