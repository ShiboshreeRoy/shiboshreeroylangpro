import React from 'react';
import { motion } from 'framer-motion';

interface SpringTextProps {
  children: string;
  className?: string;
  stiffness?: number;
  damping?: number;
}

export const SpringText: React.FC<SpringTextProps> = ({
  children,
  className = '',
  stiffness = 100,
  damping = 10,
}) => {
  const letters = children.split('');

  return (
    <div className={`flex ${className}`}>
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            type: 'spring',
            stiffness,
            damping,
            delay: index * 0.05,
          }}
          whileHover={{
            scale: 1.2,
            transition: { type: 'spring', stiffness: 300 },
          }}
          className="inline-block"
        >
          {letter === ' ' ? '\u00A0' : letter}
        </motion.span>
      ))}
    </div>
  );
};