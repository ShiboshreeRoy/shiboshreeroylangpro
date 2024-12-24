import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface SlideTransitionProps {
  children: React.ReactNode;
  direction?: 'left' | 'right' | 'up' | 'down';
  isVisible?: boolean;
  className?: string;
  duration?: number;
}

const slideVariants = {
  left: {
    initial: { x: 100, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: -100, opacity: 0 },
  },
  right: {
    initial: { x: -100, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: 100, opacity: 0 },
  },
  up: {
    initial: { y: 100, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: -100, opacity: 0 },
  },
  down: {
    initial: { y: -100, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: 100, opacity: 0 },
  },
};

export const SlideTransition: React.FC<SlideTransitionProps> = ({
  children,
  direction = 'left',
  isVisible = true,
  className = '',
  duration = 0.3,
}) => {
  return (
    <AnimatePresence mode="wait">
      {isVisible && (
        <motion.div
          className={className}
          variants={slideVariants[direction]}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{
            type: 'spring',
            duration,
            bounce: 0.3,
          }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};