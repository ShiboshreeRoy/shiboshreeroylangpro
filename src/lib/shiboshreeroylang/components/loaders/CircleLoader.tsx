import React from 'react';
import { motion } from 'framer-motion';

interface CircleLoaderProps {
  size?: number;
  color?: string;
  thickness?: number;
  speed?: number;
  className?: string;
}

export const CircleLoader: React.FC<CircleLoaderProps> = ({
  size = 40,
  color = '#3B82F6',
  thickness = 4,
  speed = 1.2,
  className = '',
}) => {
  return (
    <motion.div
      className={`relative ${className}`}
      style={{ width: size, height: size }}
      animate={{ rotate: 360 }}
      transition={{
        duration: speed,
        repeat: Infinity,
        ease: "linear"
      }}
    >
      <motion.span
        className="absolute inset-0"
        style={{
          border: `${thickness}px solid ${color}20`,
          borderTopColor: color,
          borderRadius: '50%',
          width: '100%',
          height: '100%',
        }}
      />
    </motion.div>
  );
};