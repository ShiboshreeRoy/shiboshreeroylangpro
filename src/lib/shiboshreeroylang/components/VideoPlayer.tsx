import React from 'react';
import { motion } from 'framer-motion';

interface VideoPlayerProps {
  src: string;
  className?: string;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  onEnded?: () => void;
}

export const VideoPlayer: React.FC<VideoPlayerProps> = ({
  src,
  className = '',
  autoPlay = true,
  loop = true,
  muted = true,
  onEnded
}) => {
  return (
    <motion.video
      src={src}
      autoPlay={autoPlay}
      loop={loop}
      muted={muted}
      onEnded={onEnded}
      className={`w-full h-full object-cover ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    />
  );
};