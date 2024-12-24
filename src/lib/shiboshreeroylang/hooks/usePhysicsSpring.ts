import { useSpring } from 'react-spring';
import { useMemo } from 'react';

interface PhysicsConfig {
  mass?: number;
  tension?: number;
  friction?: number;
  velocity?: number;
}

export const usePhysicsSpring = (
  initialValue: number,
  config?: PhysicsConfig
) => {
  const defaultConfig = useMemo(
    () => ({
      mass: 1,
      tension: 170,
      friction: 26,
      velocity: 0,
      ...config,
    }),
    [config]
  );

  const [spring, api] = useSpring(() => ({
    value: initialValue,
    config: defaultConfig,
  }));

  return {
    spring,
    api,
  };
};