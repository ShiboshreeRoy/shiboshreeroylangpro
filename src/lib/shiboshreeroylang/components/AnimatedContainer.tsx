import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface AnimatedContainerProps {
  children: React.ReactNode;
  isVisible?: boolean;
  animation?: 'fade' | 'slide' | 'scale' | 'rotate';
  duration?: number;
  delay?: number;
  className?: string;
}

const animations = {
  fade: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  },
  slide: {
    initial: { x: -100, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: 100, opacity: 0 },
  },
  scale: {
    initial: { scale: 0, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    exit: { scale: 0, opacity: 0 },
  },
  rotate: {
    initial: { rotate: -180, opacity: 0 },
    animate: { rotate: 0, opacity: 1 },
    exit: { rotate: 180, opacity: 0 },
  },
};

export const AnimatedContainer: React.FC<AnimatedContainerProps> = ({
  children,
  isVisible = true,
  animation = 'fade',
  duration = 0.3,
  delay = 0,
  className = '',
}) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className={className}
          initial={animations[animation].initial}
          animate={animations[animation].animate}
          exit={animations[animation].exit}
          transition={{
            duration,
            delay,
            type: 'spring',
            stiffness: 100,
            damping: 10,
          }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};