import { useCallback, useRef, useState } from 'react';

interface TimelineStep {
  duration: number;
  animation: () => void;
}

export const useTimeline = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const timelineRef = useRef<TimelineStep[]>([]);

  const addStep = useCallback((step: TimelineStep) => {
    timelineRef.current.push(step);
  }, []);

  const play = useCallback(async () => {
    setIsPlaying(true);
    for (const step of timelineRef.current) {
      step.animation();
      await new Promise((resolve) => setTimeout(resolve, step.duration));
    }
    setIsPlaying(false);
  }, []);

  const reset = useCallback(() => {
    timelineRef.current = [];
    setIsPlaying(false);
  }, []);

  return {
    addStep,
    play,
    reset,
    isPlaying,
  };
};