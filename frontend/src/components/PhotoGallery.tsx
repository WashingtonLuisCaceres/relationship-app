import { useState, useRef, useCallback } from 'react';
import { HeartIcon } from './HeartIcon';

const BASE_URL = import.meta.env.DEV
  ? 'https://wcaceres.tplinkdns.com/mica-app'
  : '/mica-app';

const PHOTOS = Array.from({ length: 8 }, (_, i) => ({
  id: i + 1,
  src: `${BASE_URL}/imgs/${i + 1}.jpeg`,
}));

interface PhotoGalleryProps {
  onClose: () => void;
}

export function PhotoGallery({ onClose }: PhotoGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  }, []);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  }, []);

  const handleTouchEnd = useCallback(() => {
    const diff = touchStartX.current - touchEndX.current;
    const threshold = 50;

    if (diff > threshold && currentIndex < PHOTOS.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setIsLoading(true);
    } else if (diff < -threshold && currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
      setIsLoading(true);
    }
  }, [currentIndex]);

  const goToPhoto = (index: number) => {
    setCurrentIndex(index);
    setIsLoading(true);
  };

  return (
    <div className="fixed inset-0 bg-black/90 z-50 flex flex-col">
      {/* Header */}
      <header className="flex items-center justify-between p-4 text-white">
        <button
          onClick={onClose}
          className="p-2 hover:bg-white/10 rounded-full transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <div className="flex items-center gap-2">
          <HeartIcon className="text-coral" size={20} />
          <span className="text-sm font-medium">Nuestros Recuerdos</span>
          <HeartIcon className="text-coral" size={20} />
        </div>
        <div className="w-10" /> {/* Spacer for centering */}
      </header>

      {/* Photo container */}
      <div
        className="flex-1 flex items-center justify-center overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className="relative w-full h-full flex items-center justify-center p-4">
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center">
              <HeartIcon className="text-coral animate-pulse" size={48} />
            </div>
          )}
          <img
            src={PHOTOS[currentIndex].src}
            alt={`Recuerdo ${currentIndex + 1}`}
            className={`max-w-full max-h-full object-contain rounded-lg transition-opacity duration-300 ${
              isLoading ? 'opacity-0' : 'opacity-100'
            }`}
            onLoad={() => setIsLoading(false)}
          />
        </div>
      </div>

      {/* Navigation arrows (for desktop) */}
      <div className="hidden md:flex absolute inset-y-0 left-0 right-0 items-center justify-between px-4 pointer-events-none">
        <button
          onClick={() => currentIndex > 0 && goToPhoto(currentIndex - 1)}
          disabled={currentIndex === 0}
          className={`p-3 bg-white/20 rounded-full pointer-events-auto transition-opacity ${
            currentIndex === 0 ? 'opacity-30' : 'hover:bg-white/30'
          }`}
        >
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={() => currentIndex < PHOTOS.length - 1 && goToPhoto(currentIndex + 1)}
          disabled={currentIndex === PHOTOS.length - 1}
          className={`p-3 bg-white/20 rounded-full pointer-events-auto transition-opacity ${
            currentIndex === PHOTOS.length - 1 ? 'opacity-30' : 'hover:bg-white/30'
          }`}
        >
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Dots indicator */}
      <div className="flex justify-center gap-2 pb-8 pt-4">
        {PHOTOS.map((_, index) => (
          <button
            key={index}
            onClick={() => goToPhoto(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex
                ? 'bg-coral w-6'
                : 'bg-white/50 hover:bg-white/70'
            }`}
          />
        ))}
      </div>

      {/* Swipe hint (mobile only) */}
      <p className="md:hidden text-center text-white/50 text-xs pb-4">
        Desliza para ver más fotos
      </p>
    </div>
  );
}
