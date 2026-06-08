import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '40%']);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '80%']);
  const opacity = useTransform(scrollYProgress, [0, 0.4, 0.7], [1, 0.6, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.5], [0.35, 0.65]);
  const lineScale = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Deep Parallax Background */}
      <motion.div
        style={{ y: bgY, scale }}
        className="absolute inset-0 -top-40 -bottom-40"
      >
        <img
          src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080"
          alt="Luxury interior"
          className="w-full h-full object-cover"
        />
        <motion.div
          style={{ opacity: overlayOpacity }}
          className="absolute inset-0 bg-charcoal-900"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal-900/30 via-transparent to-peach-50" />
      </motion.div>

      {/* Parallax Decorative Lines */}
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], ['0%', '20%']) }}
        className="absolute top-0 left-8 lg:left-24 w-px h-full"
      >
        <motion.div
          style={{ scaleY: lineScale }}
          className="w-full h-full bg-gradient-to-b from-gold-400/0 via-gold-400/20 to-gold-400/0 origin-top"
        />
      </motion.div>
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], ['0%', '-15%']) }}
        className="absolute top-0 right-8 lg:right-24 w-px h-full"
      >
        <motion.div
          style={{ scaleY: lineScale }}
          className="w-full h-full bg-gradient-to-b from-gold-400/0 via-gold-400/20 to-gold-400/0 origin-top"
        />
      </motion.div>

      {/* Floating Orbs with Parallax */}
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, 60]) }}
        animate={{
          y: [0, -20, 0],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/4 right-1/4 w-96 h-96 bg-gold-200/10 rounded-full blur-3xl"
      />
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, -40]) }}
        animate={{
          y: [0, 20, 0],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-1/3 left-1/4 w-64 h-64 bg-beige-200/20 rounded-full blur-2xl"
      />

      {/* Content */}
      <motion.div
        style={{ y: textY, opacity }}
        className="relative z-10 max-w-5xl mx-auto px-6 text-center"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-xs uppercase tracking-[0.4em] text-gold-300 mb-8"
        >
          Est. 2012 — Zurich &amp; London
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl text-cream-50 leading-[1.05] mb-8 text-balance"
        >
          Where Vision
          <br />
          <span className="italic text-gold-300">Meets Mastery</span>
        </motion.h1>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
          className="w-24 h-px bg-gold-400/50 mx-auto mb-8"
        />

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-cream-100/80 text-lg md:text-xl max-w-2xl mx-auto mb-14 leading-relaxed font-light"
        >
          We craft extraordinary experiences for those who expect nothing less
          than perfection. A studio devoted to the art of refined living.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.3, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-5"
        >
          <motion.button
            onClick={() => scrollTo('services')}
            whileHover={{ scale: 1.03, x: 3 }}
            whileTap={{ scale: 0.98 }}
            className="group flex items-center gap-3 bg-gold-400/90 backdrop-blur-sm text-charcoal-900 px-10 py-4 text-xs uppercase tracking-widest hover:bg-gold-300 transition-colors duration-300"
          >
            Discover Our World
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.button>
          <motion.button
            onClick={() => scrollTo('about')}
            whileHover={{ scale: 1.03 }}
            className="text-xs uppercase tracking-widest text-cream-100 hover:text-gold-300 transition-colors border-b border-gold-400/40 pb-1"
          >
            Our Story
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator with Parallax */}
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, 30]) }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-gold-400/50">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown className="w-5 h-5 text-gold-400/50" />
        </motion.div>
      </motion.div>
    </section>
  );
}
