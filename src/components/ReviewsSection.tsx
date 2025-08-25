import { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, MessageCircle } from 'lucide-react';
import TheaterButton from './TheaterButton';

const ReviewsSection = () => {
  const [currentReview, setCurrentReview] = useState(0);
  const [newReview, setNewReview] = useState({ name: '', text: '', rating: 5 });
  const [showReviewForm, setShowReviewForm] = useState(false);

  const reviews = [
    {
      id: 1,
      name: "Анна Петрова",
      text: "Невероятное шоу! Дмитрий заставил меня поверить в чудеса. Каждый номер был философским откровением.",
      rating: 5,
      isVideo: false
    },
    {
      id: 2,
      name: "Михаил Сидоров",
      text: "Это не просто фокусы, это настоящее искусство. Я до сих пор думаю о том, что увидел.",
      rating: 5,
      isVideo: true,
      videoPreview: "/api/placeholder/400/300"
    },
    {
      id: 3,
      name: "Елена Козлова", 
      text: "Шоу перевернуло мое понимание реальности. Спасибо за этот удивительный вечер!",
      rating: 5,
      isVideo: false
    },
    {
      id: 4,
      name: "Дмитрий Иванов",
      text: "Профессионализм на высшем уровне. Каждая минута была захватывающей.",
      rating: 5,
      isVideo: true,
      videoPreview: "/api/placeholder/400/300"
    }
  ];

  // Auto-carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [reviews.length]);

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the review to your backend
    console.log('New review:', newReview);
    setShowReviewForm(false);
    setNewReview({ name: '', text: '', rating: 5 });
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star 
        key={i} 
        className={`w-5 h-5 ${i < rating ? 'text-theater-gold fill-current' : 'text-theater-gold/30'}`} 
      />
    ));
  };

  return (
    <div className="min-h-screen bg-theater-curtain py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="font-cinzel text-4xl md:text-5xl font-bold text-theater-gold mb-6">
            Отзывы зрителей
          </h2>
          <div className="w-24 h-1 bg-gradient-gold mx-auto rounded-full" />
        </div>

        {/* Reviews Carousel */}
        <div className="relative mb-16">
          <div className="overflow-hidden rounded-xl border border-theater-gold/20 shadow-mystical">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentReview * 100}%)` }}
            >
              {reviews.map((review) => (
                <div 
                  key={review.id}
                  className="w-full flex-shrink-0 bg-theater-stage/40 backdrop-blur-sm p-8"
                >
                  <div className="flex flex-col lg:flex-row gap-8 items-center">
                    {/* Review Content */}
                    <div className="flex-1 text-center lg:text-left">
                      <div className="flex justify-center lg:justify-start mb-4">
                        {renderStars(review.rating)}
                      </div>
                      <p className="font-inter text-lg text-theater-light-gold leading-relaxed mb-6">
                        "{review.text}"
                      </p>
                      <div className="flex items-center justify-center lg:justify-start space-x-3">
                        <div className="w-12 h-12 bg-theater-gold/20 rounded-full flex items-center justify-center">
                          <span className="font-cinzel text-theater-gold font-medium">
                            {review.name.charAt(0)}
                          </span>
                        </div>
                        <div>
                          <p className="font-cinzel text-theater-gold font-medium">
                            {review.name}
                          </p>
                          <p className="font-inter text-sm text-theater-light-gold/70">
                            Зритель шоу
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Video Preview */}
                    {review.isVideo && (
                      <div className="w-full lg:w-96">
                        <div className="aspect-video bg-theater-burgundy/30 rounded-lg flex items-center justify-center relative overflow-hidden border border-theater-gold/20">
                          <img 
                            src={review.videoPreview} 
                            alt="Video preview"
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-theater-burgundy/60 flex items-center justify-center">
                            <button className="w-16 h-16 bg-theater-gold/20 rounded-full flex items-center justify-center hover:bg-theater-gold/30 transition-colors">
                              <ChevronRight className="w-8 h-8 text-theater-gold ml-1" />
                            </button>
                          </div>
                        </div>
                        <p className="text-center font-inter text-sm text-theater-light-gold/70 mt-2">
                          Видео-отзыв
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Carousel Controls */}
          <button 
            onClick={prevReview}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-theater-burgundy/80 backdrop-blur-sm rounded-full flex items-center justify-center text-theater-gold hover:bg-theater-burgundy transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button 
            onClick={nextReview}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-theater-burgundy/80 backdrop-blur-sm rounded-full flex items-center justify-center text-theater-gold hover:bg-theater-burgundy transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-6">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentReview(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentReview ? 'bg-theater-gold' : 'bg-theater-gold/30'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Add Review Button */}
        <div className="text-center mb-16">
          <TheaterButton 
            variant="gold"
            onClick={() => setShowReviewForm(true)}
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            Оставить отзыв
          </TheaterButton>
        </div>

        {/* Review Form Modal */}
        {showReviewForm && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-6">
            <div className="bg-theater-curtain rounded-xl p-8 max-w-md w-full border border-theater-gold/20">
              <h3 className="font-cinzel text-2xl text-theater-gold mb-6 text-center">
                Поделитесь впечатлениями
              </h3>
              
              <form onSubmit={handleSubmitReview} className="space-y-6">
                <div>
                  <label className="block font-inter text-theater-light-gold mb-2">
                    Ваше имя
                  </label>
                  <input
                    type="text"
                    value={newReview.name}
                    onChange={(e) => setNewReview(prev => ({ ...prev, name: e.target.value }))}
                    className="w-full px-4 py-3 bg-theater-stage/50 border border-theater-gold/20 rounded-lg text-theater-light-gold focus:border-theater-gold focus:outline-none"
                    required
                  />
                </div>

                <div>
                  <label className="block font-inter text-theater-light-gold mb-2">
                    Ваш отзыв
                  </label>
                  <textarea
                    value={newReview.text}
                    onChange={(e) => setNewReview(prev => ({ ...prev, text: e.target.value }))}
                    rows={4}
                    className="w-full px-4 py-3 bg-theater-stage/50 border border-theater-gold/20 rounded-lg text-theater-light-gold focus:border-theater-gold focus:outline-none resize-none"
                    required
                  />
                </div>

                <div>
                  <label className="block font-inter text-theater-light-gold mb-2">
                    Оценка
                  </label>
                  <div className="flex space-x-1">
                    {Array.from({ length: 5 }, (_, i) => (
                      <button
                        key={i}
                        type="button"
                        onClick={() => setNewReview(prev => ({ ...prev, rating: i + 1 }))}
                        className="focus:outline-none"
                      >
                        <Star 
                          className={`w-6 h-6 ${i < newReview.rating ? 'text-theater-gold fill-current' : 'text-theater-gold/30'}`} 
                        />
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-4">
                  <TheaterButton 
                    variant="burgundy"
                    onClick={() => setShowReviewForm(false)}
                    className="flex-1"
                  >
                    Отмена
                  </TheaterButton>
                  <TheaterButton 
                    variant="gold"
                    className="flex-1"
                  >
                    Отправить
                  </TheaterButton>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ReviewsSection;