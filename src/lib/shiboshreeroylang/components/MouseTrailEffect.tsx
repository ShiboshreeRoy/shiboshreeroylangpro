import React, { useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

interface MouseTrailEffectProps {
  color?: string;
  size?: number;
  trail?: number;
}

export const MouseTrailEffect: React.FC<MouseTrailEffectProps> = ({
  color = '#3b82f6',
  size = 20,
  trail = 8
}) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const dots = Array.from({ length: trail });

  const springConfig = { damping: 25, stiffness: 300 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - size / 2);
      mouseY.set(e.clientY - size / 2);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      {dots.map((_, i) => (
        <motion.div
          key={i}
          className="fixed pointer-events-none"
          style={{
            x,
            y,
            width: size,
            height: size,
            borderRadius: '50%',
            backgroundColor: color,
            opacity: 1 - (i / trail),
            scale: 1 - (i / trail) * 0.5,
            zIndex: 9999,
          }}
          transition={{
            delay: i * 0.02,
          }}
        />
      ))}
    </>
  );
};