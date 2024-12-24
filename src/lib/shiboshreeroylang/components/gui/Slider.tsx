import React from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';

interface SliderProps {
  min?: number;
  max?: number;
  value: number;
  onChange: (value: number) => void;
  className?: string;
}

export const Slider: React.FC<SliderProps> = ({
  min = 0,
  max = 100,
  value,
  onChange,
  className = '',
}) => {
  const x = useMotionValue(0);
  const width = 200;
  
  const handleDrag = (event: any, info: any) => {
    const newX = Math.max(0, Math.min(info.point.x, width));
    const percentage = newX / width;
    const newValue = Math.round(min + (max - min) * percentage);
    onChange(newValue);
  };

  return (
    <div className={`relative ${className}`} style={{ width }}>
      <div className="h-2 bg-gray-200 rounded-full">
        <motion.div
          className="absolute top-0 left-0 h-2 bg-blue-500 rounded-full"
          style={{ width: `${((value - min) / (max - min)) * 100}%` }}
        />
      </div>
      <motion.div
        className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow-lg cursor-pointer"
        style={{
          x: useTransform(
            x,
            [0, width],
            [0, width]
          ),
          left: `${((value - min) / (max - min)) * 100}%`,
        }}
        drag="x"
        dragConstraints={{ left: 0, right: width }}
        dragElastic={0}
        onDrag={handleDrag}
      />
    </div>
  );
};