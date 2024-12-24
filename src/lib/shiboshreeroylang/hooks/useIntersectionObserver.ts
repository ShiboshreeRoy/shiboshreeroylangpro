import { useEffect, useRef, useState } from 'react';

interface UseIntersectionObserverProps {
  threshold?: number;
  root?: Element | null;
  rootMargin?: string;
}

export const useIntersectionObserver = ({
  threshold = 0,
  root = null,
  rootMargin = '0px',
}: UseIntersectionObserverProps = {}) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const targetRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { threshold, root, rootMargin }
    );

    const currentTarget = targetRef.current;
    if (currentTarget) {
      observer.observe(currentTarget);
    }

    return () => {
      if (currentTarget) {
        observer.unobserve(currentTarget);
      }
    };
  }, [threshold, root, rootMargin]);

  return { targetRef, isIntersecting };
};