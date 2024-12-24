import React from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';

interface Cube3DProps {
  size?: number;
  className?: string;
  colors?: string[];
}

export const Cube3D: React.FC<Cube3DProps> = ({
  size = 200,
  className = '',
  colors = ['#3B82F6', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6', '#EC4899'],
}) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useTransform(mouseY, [-300, 300], [45, -45]);
  const rotateY = useTransform(mouseX, [-300, 300], [-45, 45]);

  const handleMouseMove = (event: React.MouseEvent) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;
    mouseX.set(x);
    mouseY.set(y);
  };

  return (
    <div
      className={`perspective-1000 ${className}`}
      style={{ width: size, height: size }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => {
        mouseX.set(0);
        mouseY.set(0);
      }}
    >
      <motion.div
        className="relative w-full h-full transform-style-3d"
        style={{ rotateX, rotateY }}
      >
        {['front', 'back', 'right', 'left', 'top', 'bottom'].map((face, index) => (
          <div
            key={face}
            className="absolute w-full h-full"
            style={{
              backgroundColor: colors[index],
              transform: `${
                face === 'front' ? 'translateZ(' + size / 2 + 'px)' :
                face === 'back' ? 'translateZ(' + -size / 2 + 'px) rotateY(180deg)' :
                face === 'right' ? 'translateX(' + size / 2 + 'px) rotateY(90deg)' :
                face === 'left' ? 'translateX(' + -size / 2 + 'px) rotateY(-90deg)' :
                face === 'top' ? 'translateY(' + -size / 2 + 'px) rotateX(90deg)' :
                'translateY(' + size / 2 + 'px) rotateX(-90deg)'
              }`,
            }}
          />
        ))}
      </motion.div>
    </div>
  );
};