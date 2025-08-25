import { useToast } from '@/hooks/use-toast';
import { CheckCircle, AlertCircle, Info, X } from 'lucide-react';

export const useTheaterToast = () => {
  const { toast } = useToast();

  const showToast = (
    message: string, 
    type: 'success' | 'error' | 'info' = 'info',
    duration: number = 4000
  ) => {
    const icons = {
      success: CheckCircle,
      error: AlertCircle,
      info: Info,
    };

    const colors = {
      success: 'text-green-400',
      error: 'text-red-400',
      info: 'text-theater-gold',
    };

    const Icon = icons[type];

    toast({
      description: (
        <div className="flex items-center gap-3 p-2">
          <Icon className={`w-5 h-5 ${colors[type]} animate-magic-pulse`} />
          <span className="font-inter text-theater-light-gold">{message}</span>
          
          {/* Sparkles for success */}
          {type === 'success' && (
            <div className="relative ml-2">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-1 bg-theater-gold rounded-full animate-sparkle"
                  style={{
                    top: `${i * 3}px`,
                    left: `${i * 2}px`,
                    animationDelay: `${i * 0.2}s`,
                  }}
                />
              ))}
            </div>
          )}
        </div>
      ),
      duration,
      className: "bg-theater-curtain/95 backdrop-blur-sm border border-theater-gold/30 shadow-mystical",
    });
  };

  return {
    success: (message: string) => showToast(message, 'success'),
    error: (message: string) => showToast(message, 'error'),
    info: (message: string) => showToast(message, 'info'),
  };
};