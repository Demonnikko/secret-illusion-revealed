import { Haptics, ImpactStyle } from '@capacitor/haptics';

export const useHapticFeedback = () => {
  const isSupported = typeof window !== 'undefined' && 'navigator' in window && 'vibrate' in navigator;

  const light = async () => {
    try {
      await Haptics.impact({ style: ImpactStyle.Light });
    } catch {
      // Fallback for web
      if (isSupported) {
        navigator.vibrate(10);
      }
    }
  };

  const medium = async () => {
    try {
      await Haptics.impact({ style: ImpactStyle.Medium });
    } catch {
      // Fallback for web
      if (isSupported) {
        navigator.vibrate(20);
      }
    }
  };

  const heavy = async () => {
    try {
      await Haptics.impact({ style: ImpactStyle.Heavy });
    } catch {
      // Fallback for web
      if (isSupported) {
        navigator.vibrate(50);
      }
    }
  };

  const magical = async () => {
    try {
      // Create magical pattern
      await Haptics.impact({ style: ImpactStyle.Light });
      setTimeout(() => Haptics.impact({ style: ImpactStyle.Medium }), 100);
      setTimeout(() => Haptics.impact({ style: ImpactStyle.Light }), 200);
    } catch {
      // Fallback pattern
      if (isSupported) {
        navigator.vibrate([10, 50, 10, 50, 10]);
      }
    }
  };

  const curtainOpen = async () => {
    try {
      // Simulate curtain opening with ascending intensity
      await Haptics.impact({ style: ImpactStyle.Light });
      setTimeout(() => Haptics.impact({ style: ImpactStyle.Medium }), 200);
      setTimeout(() => Haptics.impact({ style: ImpactStyle.Heavy }), 400);
    } catch {
      if (isSupported) {
        navigator.vibrate([20, 100, 40, 100, 60]);
      }
    }
  };

  return {
    light,
    medium,
    heavy,
    magical,
    curtainOpen,
    isSupported,
  };
};