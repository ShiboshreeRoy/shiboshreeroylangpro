import React from 'react';
import { motion } from 'framer-motion';

interface ProgressBarProps {
  progress: number;
  height?: number;
  color?: string;
  backgroundColor?: string;
  className?: string;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  progress,
  height = 6,
  color = '#3B82F6',
  backgroundColor = '#E5E7EB',
  className = '',
}) => {
  return (
    <div
      className={`w-full rounded-full overflow-hidden ${className}`}
      style={{ height, backgroundColor }}
    >
      <motion.div
        className="h-full"
        style={{ backgroundColor: color }}
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      />
    </div>
  );
};