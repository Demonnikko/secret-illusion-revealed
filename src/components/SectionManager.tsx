import { useState, useEffect } from 'react';
import AboutSection from './AboutSection';
import ReviewsSection from './ReviewsSection';
import PrivateEventsSection from './PrivateEventsSection';
import SchoolSection from './SchoolSection';
import ContactsSection from './ContactsSection';
import FAQSection from './FAQSection';
import AnimatedSection from './AnimatedSection';

interface SectionManagerProps {
  activeSection: string | null;
  onClose: () => void;
}

const SectionManager = ({ activeSection, onClose }: SectionManagerProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (activeSection) {
      setIsVisible(true);
      // Disable body scroll
      document.body.style.overflow = 'hidden';
    } else {
      setIsVisible(false);
      // Re-enable body scroll
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [activeSection]);

  if (!activeSection || !isVisible) return null;

  const renderSection = () => {
    switch (activeSection) {
      case 'about':
        return (
          <AnimatedSection id="about" animationType="fadeUp">
            <AboutSection />
          </AnimatedSection>
        );
      case 'reviews':
        return (
          <AnimatedSection id="reviews" animationType="zoom">
            <ReviewsSection />
          </AnimatedSection>
        );
      case 'private':
        return (
          <AnimatedSection id="private" animationType="fadeRight">
            <PrivateEventsSection />
          </AnimatedSection>
        );
      case 'school':
        return (
          <AnimatedSection id="school" animationType="rotate">
            <SchoolSection />
          </AnimatedSection>
        );
      case 'contacts':
        return (
          <AnimatedSection id="contacts" animationType="fadeUp">
            <ContactsSection />
          </AnimatedSection>
        );
      case 'faq':
        return (
          <AnimatedSection id="faq" animationType="fadeLeft">
            <FAQSection />
          </AnimatedSection>
        );
      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 overflow-y-auto">
      {/* Close button */}
      <button
        onClick={onClose}
        className="fixed top-4 right-4 z-[60] w-12 h-12 bg-theater-gold/20 hover:bg-theater-gold/30 rounded-full flex items-center justify-center text-theater-gold hover:text-theater-light-gold transition-all duration-300 group"
      >
        <span className="text-2xl group-hover:rotate-90 transition-transform duration-300">×</span>
      </button>

      {/* Section content */}
      <div className="min-h-screen">
        {renderSection()}
      </div>
    </div>
  );
};

export default SectionManager;