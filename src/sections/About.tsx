import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { RevealSection, StaggerContainer, StaggerItem } from '../components/RevealSection';

export function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 70,
    damping: 28,
    mass: 0.45,
    restDelta: 0.001,
  });

  const bgY = useTransform(smoothProgress, [0, 1], ['-10%', '10%']);
  const bgScale = useTransform(smoothProgress, [0, 0.5, 1], [1.06, 1, 1.06]);
  const contentY = useTransform(smoothProgress, [0, 0.5, 1], [48, 0, -36]);
  const contentOpacity = useTransform(smoothProgress, [0, 0.16, 0.86, 1], [0, 1, 1, 0.92]);
  const imagePanelY = useTransform(smoothProgress, [0, 1], [42, -42]);
  const imageY = useTransform(smoothProgress, [0, 1], ['-14%', '14%']);
  const imageScale = useTransform(smoothProgress, [0, 0.5, 1], [1.13, 1.04, 1.12]);
  const topAccentY = useTransform(smoothProgress, [0, 1], [20, -80]);
  const bottomAccentY = useTransform(smoothProgress, [0, 1], [-12, 56]);
  const lineY = useTransform(smoothProgress, [0, 1], ['-6%', '18%']);

  return (
    <section id="about" ref={sectionRef} className="relative min-h-screen flex items-center overflow-hidden bg-peach-50">
      {/* Peach Parallax Background */}
      <motion.div
        style={{ y: bgY, scale: bgScale }}
        className="absolute inset-0 -top-40 -bottom-40 bg-peach-50"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-ivory/70 via-peach-50 to-beige-100/60" />
      </motion.div>

      {/* Parallax Decorative Accents */}
      <motion.div
        style={{ y: topAccentY }}
        className="absolute top-20 right-20 w-64 h-64 bg-gold-300/5 rounded-full blur-3xl"
      />
      <motion.div
        style={{ y: bottomAccentY }}
        className="absolute bottom-20 left-20 w-48 h-48 bg-gold-400/5 rounded-full blur-3xl"
      />

      {/* Parallax Side Lines */}
      <motion.div
        style={{ y: lineY }}
        className="absolute left-8 lg:left-24 top-0 h-full w-px"
      >
        <div className="w-full h-full bg-gradient-to-b from-gold-400/0 via-gold-400/15 to-gold-400/0" />
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 w-full py-28 lg:py-40"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Text Content */}
            <div>
              <RevealSection delay={0}>
                <p className="text-xs uppercase tracking-[0.4em] text-gold-500 mb-6">
                  Our Heritage
                </p>
              </RevealSection>

              <RevealSection delay={0.15}>
                <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-charcoal-800 mb-10 leading-[1.1]">
                  A Legacy of
                  <br />
                  <span className="italic text-gold-500">Quiet Excellence</span>
                </h2>
              </RevealSection>

              <StaggerContainer className="space-y-6" staggerDelay={0.12}>
                <StaggerItem>
                  <p className="text-charcoal-600 leading-relaxed font-light text-lg">
                    Founded in Zurich over a decade ago, Aurelia & Co. emerged from
                    a singular belief: that true luxury lives in the details most never
                    notice. We are not a service provider — we are curators of
                    moments, architects of atmosphere, and guardians of an
                    uncompromising standard.
                  </p>
                </StaggerItem>
                <StaggerItem>
                  <p className="text-charcoal-600 leading-relaxed font-light text-lg">
                    Our atelier serves an intimate circle of discerning clients across
                    Europe and beyond. Each relationship begins with trust and deepens
                    through understanding. We do not follow trends; we set them
                    through a philosophy of timeless refinement.
                  </p>
                </StaggerItem>
                <StaggerItem>
                  <p className="text-charcoal-600 leading-relaxed font-light text-lg">
                    From private residences to exclusive events, from brand identity to
                    spatial design, our work is defined by one principle: everything
                    worthy of your attention must be worthy of ours first.
                  </p>
                </StaggerItem>
              </StaggerContainer>

              <StaggerContainer className="mt-14 flex items-center gap-10" staggerDelay={0.1} delayChildren={0.3}>
                <StaggerItem>
                  <div>
                    <motion.p
                      whileInView={{ opacity: 1, scale: 1 }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.6 }}
                      className="font-serif text-4xl text-gold-500"
                    >
                      12+
                    </motion.p>
                    <p className="text-xs uppercase tracking-widest text-charcoal-500 mt-2">
                      Years of Craft
                    </p>
                  </div>
                </StaggerItem>
                <div className="w-px h-14 bg-gold-400/30" />
                <StaggerItem>
                  <div>
                    <motion.p
                      whileInView={{ opacity: 1, scale: 1 }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.6, delay: 0.1 }}
                      className="font-serif text-4xl text-gold-500"
                    >
                      200+
                    </motion.p>
                    <p className="text-xs uppercase tracking-widest text-charcoal-500 mt-2">
                      Curated Projects
                    </p>
                  </div>
                </StaggerItem>
                <div className="w-px h-14 bg-gold-400/30" />
                <StaggerItem>
                  <div>
                    <motion.p
                      whileInView={{ opacity: 1, scale: 1 }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      className="font-serif text-4xl text-gold-500"
                    >
                      14
                    </motion.p>
                    <p className="text-xs uppercase tracking-widest text-charcoal-500 mt-2">
                      Countries Served
                    </p>
                  </div>
                </StaggerItem>
              </StaggerContainer>
            </div>

            {/* Parallax Image Panel */}
            <motion.div style={{ y: imagePanelY }} className="relative will-change-transform">
              <RevealSection direction="right" delay={0.2} distance={80}>
                <div className="aspect-[3/4] relative overflow-hidden">
                  <motion.div style={{ y: imageY, scale: imageScale }} className="absolute inset-0 -top-10 -bottom-10">
                    <img
                      src="https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
                      alt="Refined aesthetic detail"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </motion.div>
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/30 to-transparent" />
                </div>
              </RevealSection>

              {/* Floating Frame Elements */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                viewport={{ once: true }}
                className="absolute -bottom-8 -left-8 w-56 h-56 border border-gold-300/30 -z-10"
              />
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.7 }}
                viewport={{ once: true }}
                className="absolute -top-6 -right-6 w-40 h-40 bg-gold-300/10 -z-10"
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
