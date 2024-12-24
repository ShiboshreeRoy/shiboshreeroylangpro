import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface TextWriterProps {
  text: string;
  speed?: number;
  className?: string;
  cursor?: boolean;
}

export const TextWriter: React.FC<TextWriterProps> = ({
  text,
  speed = 50,
  className = '',
  cursor = true,
}) => {
  const [displayText, setDisplayText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timer = setTimeout(() => {
        setDisplayText((prev) => prev + text[index]);
        setIndex((prev) => prev + 1);
      }, speed);
      return () => clearTimeout(timer);
    }
  }, [index, speed, text]);

  return (
    <motion.span className={`inline-block ${className}`}>
      {displayText}
      {cursor && index < text.length && (
        <span className="animate-pulse">|</span>
      )}
    </motion.span>
  );
};