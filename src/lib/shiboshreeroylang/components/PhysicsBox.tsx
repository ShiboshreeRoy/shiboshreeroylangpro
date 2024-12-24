import React from 'react';
import { useSpring, animated } from 'react-spring';
import { useDrag } from '@use-gesture/react';

interface PhysicsBoxProps {
  children: React.ReactNode;
  className?: string;
  damping?: number;
  mass?: number;
  tension?: number;
}

export const PhysicsBox: React.FC<PhysicsBoxProps> = ({
  children,
  className = '',
  damping = 20,
  mass = 1,
  tension = 170,
}) => {
  const [{ x, y }, api] = useSpring(() => ({ x: 0, y: 0 }));

  const bind = useDrag(({ down, movement: [mx, my] }) => {
    api.start({
      x: down ? mx : 0,
      y: down ? my : 0,
      immediate: down,
      config: {
        mass,
        tension,
        friction: damping,
      },
    });
  });

  return (
    <animated.div
      {...bind()}
      style={{
        x,
        y,
        touchAction: 'none',
      }}
      className={`cursor-grab active:cursor-grabbing ${className}`}
    >
      {children}
    </animated.div>
  );
};