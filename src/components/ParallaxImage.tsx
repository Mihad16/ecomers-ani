import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

interface ParallaxImageProps {
  src: string;
  alt: string;
  className?: string;
  speed?: number;
  scale?: number;
}

export function ParallaxImage({
  src,
  alt,
  className = '',
  speed = 0.3,
  scale = 1.2,
}: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [`-${speed * 100}px`, `${speed * 100}px`]
  );

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.img
        src={src}
        alt={alt}
        style={{ y, scale }}
        className="w-full h-full object-cover"
        loading="lazy"
      />
    </div>
  );
}

interface ParallaxSectionProps {
  children: React.ReactNode;
  className?: string;
  bgImage?: string;
  speed?: number;
  overlayOpacity?: number;
}

export function ParallaxSection({
  children,
  className = '',
  bgImage,
  speed = 0.2,
  overlayOpacity = 0.3,
}: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [`-${speed * 100}px`, `${speed * 100}px`]
  );

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      {bgImage && (
        <>
          <motion.div
            style={{ y }}
            className="absolute inset-0 -top-20 -bottom-20"
          >
            <img
              src={bgImage}
              alt=""
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </motion.div>
          <div
            className="absolute inset-0 bg-charcoal-900"
            style={{ opacity: overlayOpacity }}
          />
        </>
      )}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
