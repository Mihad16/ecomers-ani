import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export function Philosophy() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ['-20%', '20%']);
  const textY = useTransform(scrollYProgress, [0, 0.5, 1], [60, 0, -60]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section
      id="philosophy"
      ref={sectionRef}
      className="relative min-h-[80vh] flex items-center justify-center overflow-hidden"
    >
      {/* Parallax Background */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 -top-32 -bottom-32"
      >
        <img
          src="https://images.pexels.com/photos/259962/pexels-photo-259962.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Luxury atmosphere"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-charcoal-900/70" />
      </motion.div>

      {/* Glass Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal-900/30 via-transparent to-charcoal-900/30" />

      {/* Content */}
      <motion.div
        style={{ y: textY, opacity: textOpacity }}
        className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: true, margin: '-100px' }}
          className="bg-ivory/5 backdrop-blur-xl border border-ivory/10 p-12 lg:p-20"
        >
          <p className="text-xs uppercase tracking-[0.4em] text-gold-300 mb-10">
            Our Philosophy
          </p>
          <blockquote className="font-serif text-3xl md:text-5xl lg:text-6xl text-cream-50 leading-[1.15] mb-10">
            "True elegance is not about being noticed.
            <br className="hidden md:block" />
            It is about being{' '}
            <span className="italic text-gold-300">remembered</span>."
          </blockquote>
          <div className="w-16 h-px bg-gold-400/50 mx-auto mb-8" />
          <p className="text-cream-100/60 font-light max-w-xl mx-auto leading-relaxed text-lg">
            This belief guides every decision we make, every partnership we forge,
            and every experience we create. It is the invisible thread that binds
            our work together.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
