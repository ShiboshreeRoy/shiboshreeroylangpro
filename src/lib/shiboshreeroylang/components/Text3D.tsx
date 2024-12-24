import React from 'react';
import { motion } from 'framer-motion';

interface Text3DProps {
  children: string;
  className?: string;
  depth?: number;
  color?: string;
  shadowColor?: string;
}

export const Text3D: React.FC<Text3DProps> = ({
  children,
  className = '',
  depth = 8,
  color = '#1d4ed8',
  shadowColor = '#1e40af',
}) => {
  const layers = Array.from({ length: depth }, (_, i) => i + 1);

  return (
    <motion.div
      className={`relative font-bold ${className}`}
      whileHover={{ scale: 1.05 }}
      style={{ color }}
    >
      {layers.map((layer) => (
        <motion.span
          key={layer}
          className="absolute left-0 top-0"
          style={{
            textShadow: `${layer}px ${layer}px 0 ${shadowColor}`,
            zIndex: -layer,
          }}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: layer * 0.05 }}
        >
          {children}
        </motion.span>
      ))}
      <span className="relative">{children}</span>
    </motion.div>
  );
};