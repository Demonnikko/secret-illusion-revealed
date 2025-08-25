import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Подходит ли шоу для детей?",
      answer: "Шоу рассчитано на взрослых (18+). Детям допустимо присутствовать, но им оно может быть менее интересно. Это серьёзное шоу с философией и фокусами, без пошлости."
    },
    {
      question: "Сколько длится представление?",
      answer: "2 часа + антракт 10–15 минут."
    },
    {
      question: "Можно ли прийти всей семьёй?",
      answer: "Да, можно. Но детям менее зайдёт, чем взрослым."
    },
    {
      question: "Есть ли возрастные ограничения?",
      answer: "Да, 18+."
    }
  ];

  return (
    <section className="min-h-screen bg-gradient-curtain py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-cinzel text-4xl md:text-5xl font-bold text-theater-gold mb-12 text-center">
          Частые вопросы
        </h2>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-theater-curtain/30 backdrop-blur-sm border border-theater-gold/20 rounded-lg overflow-hidden"
            >
              <button
                className="w-full p-6 text-left flex justify-between items-center hover:bg-theater-gold/10 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <h3 className="font-cinzel text-lg md:text-xl text-theater-gold pr-4">
                  {faq.question}
                </h3>
                <ChevronDown 
                  className={`w-5 h-5 text-theater-gold transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-6 border-t border-theater-gold/20">
                  <p className="font-inter text-theater-light-gold leading-relaxed pt-4">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;