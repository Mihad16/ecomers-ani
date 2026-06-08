import { useScroll, useTransform, MotionValue } from 'framer-motion';
import { useRef } from 'react';

export function useScrollProgress() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  return { ref, scrollYProgress };
}

export function useParallax(
  scrollYProgress: MotionValue<number>,
  distance: number = 100
) {
  return useTransform(scrollYProgress, [0, 1], [-distance, distance]);
}

export function useFadeIn(
  scrollYProgress: MotionValue<number>,
  start: number = 0.1,
  end: number = 0.4
) {
  return useTransform(scrollYProgress, [start, end], [0, 1]);
}

export function useSlideUp(
  scrollYProgress: MotionValue<number>,
  start: number = 0.1,
  end: number = 0.4,
  distance: number = 60
) {
  const opacity = useTransform(scrollYProgress, [start, end], [0, 1]);
  const y = useTransform(scrollYProgress, [start, end], [distance, 0]);
  return { opacity, y };
}

export function useScaleIn(
  scrollYProgress: MotionValue<number>,
  start: number = 0.1,
  end: number = 0.4
) {
  const opacity = useTransform(scrollYProgress, [start, end], [0, 1]);
  const scale = useTransform(scrollYProgress, [start, end], [0.9, 1]);
  return { opacity, scale };
}
