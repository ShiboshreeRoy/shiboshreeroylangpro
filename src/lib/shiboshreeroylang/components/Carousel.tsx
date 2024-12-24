import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselProps {
  items: React.ReactNode[];
  className?: string;
  autoPlay?: boolean;
  interval?: number;
}

export const Carousel: React.FC<CarouselProps> = ({
  items,
  className = '',
  autoPlay = true,
  interval = 3000,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  React.useEffect(() => {
    if (autoPlay) {
      const timer = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % items.length);
      }, interval);
      return () => clearInterval(timer);
    }
  }, [autoPlay, interval, items.length]);

  const navigate = (direction: number) => {
    setCurrentIndex((prev) => {
      const nextIndex = prev + direction;
      if (nextIndex >= items.length) return 0;
      if (nextIndex < 0) return items.length - 1;
      return nextIndex;
    });
  };

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.3 }}
          className="w-full"
        >
          {items[currentIndex]}
        </motion.div>
      </AnimatePresence>
      
      <button
        onClick={() => navigate(-1)}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={() => navigate(1)}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  );
};