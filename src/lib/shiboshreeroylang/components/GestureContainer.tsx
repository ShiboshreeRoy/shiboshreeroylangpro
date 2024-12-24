import React from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { useGesture } from '@use-gesture/react';

interface GestureContainerProps {
  children: React.ReactNode;
  className?: string;
  onGesture?: (type: string, data: any) => void;
}

export const GestureContainer: React.FC<GestureContainerProps> = ({
  children,
  className = '',
  onGesture
}) => {
  const scale = useMotionValue(1);
  const rotate = useMotionValue(0);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const bind = useGesture({
    onPinch: ({ offset: [d] }) => {
      scale.set(d);
      onGesture?.('pinch', d);
    },
    onRotate: ({ offset: [r] }) => {
      rotate.set(r);
      onGesture?.('rotate', r);
    },
    onDrag: ({ offset: [x1, y1] }) => {
      x.set(x1);
      y.set(y1);
      onGesture?.('drag', { x: x1, y: y1 });
    }
  });

  return (
    <motion.div
      {...bind()}
      style={{ scale, rotate, x, y }}
      className={`touch-none ${className}`}
    >
      {children}
    </motion.div>
  );
};