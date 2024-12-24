import React from 'react';
import { motion } from 'framer-motion';

interface FloatingElementProps {
  children: React.ReactNode;
  className?: string;
  amplitude?: number;
  duration?: number;
}

export const FloatingElement: React.FC<FloatingElementProps> = ({
  children,
  className = '',
  amplitude = 10,
  duration = 2,
}) => {
  return (
    <motion.div
      className={className}
      animate={{
        y: [-amplitude, amplitude],
      }}
      transition={{
        duration,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
      }}
    >
      {children}
    </motion.div>
  );
};