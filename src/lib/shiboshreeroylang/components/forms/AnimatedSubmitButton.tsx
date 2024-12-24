import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedSubmitButtonProps {
  children: React.ReactNode;
  className?: string;
}

export const AnimatedSubmitButton: React.FC<AnimatedSubmitButtonProps> = ({
  children,
  className = '',
}) => {
  return (
    <motion.button
      type="submit"
      className={`px-4 py-2 bg-blue-500 text-white rounded-md shadow-md ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.button>
  );
};