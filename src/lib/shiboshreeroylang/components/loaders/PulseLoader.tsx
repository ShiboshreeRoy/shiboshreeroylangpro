import React from 'react';
import { motion } from 'framer-motion';

interface PulseLoaderProps {
  size?: number;
  color?: string;
  count?: number;
  className?: string;
}

export const PulseLoader: React.FC<PulseLoaderProps> = ({
  size = 12,
  color = '#3B82F6',
  count = 3,
  className = '',
}) => {
  return (
    <div className={`flex space-x-2 ${className}`}>
      {Array.from({ length: count }).map((_, i) => (
        <motion.div
          key={i}
          style={{
            width: size,
            height: size,
            backgroundColor: color,
            borderRadius: '50%',
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [1, 0.5, 1],
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            delay: i * 0.2,
          }}
        />
      ))}
    </div>
  );
};