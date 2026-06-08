import { motion, useInView } from 'framer-motion';
import { useRef, ReactNode } from 'react';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'left' | 'right' | 'up' | 'down';
  blur?: string;
}

export function GlassCard({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  blur = 'backdrop-blur-xl',
}: GlassCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const directions = {
    left: { x: -80, y: 0 },
    right: { x: 80, y: 0 },
    up: { x: 0, y: 80 },
    down: { x: 0, y: -80 },
  };

  const initial = {
    opacity: 0,
    x: directions[direction].x,
    y: directions[direction].y,
  };

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={
        isInView
          ? { opacity: 1, x: 0, y: 0 }
          : initial
      }
      transition={{
        duration: 1,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className={`bg-ivory/10 ${blur} bg-clip-padding border border-ivory/20 shadow-2xl ${className}`}
    >
      {children}
    </motion.div>
  );
}

interface GlassPanelProps {
  children: ReactNode;
  className?: string;
  intensity?: 'light' | 'medium' | 'heavy';
}

export function GlassPanel({
  children,
  className = '',
  intensity = 'medium',
}: GlassPanelProps) {
  const intensities = {
    light: 'bg-ivory/5 backdrop-blur-sm border-ivory/10',
    medium: 'bg-ivory/10 backdrop-blur-md border-ivory/15',
    heavy: 'bg-ivory/15 backdrop-blur-xl border-ivory/20',
  };

  return (
    <div className={`${intensities[intensity]} ${className}`}>
      {children}
    </div>
  );
}
