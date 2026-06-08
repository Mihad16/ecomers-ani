import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Diamond, Gem, Award, Star, ArrowUpRight } from 'lucide-react';
import { GlassCard } from '../components/GlassCard';

const services = [
  {
    icon: Diamond,
    title: 'Bespoke Consultations',
    description:
      'Every vision begins with an intimate conversation. We listen, curate, and craft experiences that mirror your deepest aspirations with unwavering precision.',
    image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    icon: Gem,
    title: 'Curated Experiences',
    description:
      'From private gatherings to grand unveilings, we orchestrate moments that linger in memory — seamless, sublime, and entirely yours.',
    image: 'https://images.pexels.com/photos/262048/pexels-photo-262048.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    icon: Award,
    title: 'Refined Aesthetics',
    description:
      'Our design philosophy marries timeless elegance with contemporary sensibility, creating spaces and visuals that transcend passing trends.',
    image: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    icon: Star,
    title: 'Artisan Partnerships',
    description:
      'We collaborate with master craftsmen and visionary creators worldwide, ensuring every detail reflects extraordinary quality and heritage.',
    image: 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

export function Services() {
  const headerRef = useRef<HTMLDivElement>(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: '-100px' });

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="services" className="py-28 lg:py-40 bg-peach-50 relative overflow-hidden">
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,_#C9A46A_0%,_transparent_50%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-24">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-xs uppercase tracking-[0.4em] text-gold-500 mb-8"
          >
            What We Offer
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.15 }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl text-charcoal-800 mb-8"
          >
            The Art of <span className="italic text-gold-300">Distinction</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-charcoal-500 font-light leading-relaxed text-lg"
          >
            Four pillars of expertise, each honed through years of dedicated
            practice and an unwavering commitment to the extraordinary.
          </motion.p>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          {services.map((service, i) => (
            <GlassCard
              key={i}
              delay={i * 0.15}
              direction={i % 2 === 0 ? 'left' : 'right'}
              className="group relative overflow-hidden"
            >
              <div className="relative h-80 lg:h-96 overflow-hidden">
                <motion.img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/90 via-charcoal-900/40 to-transparent" />

                {/* Content Overlay */}
                <div className="absolute inset-0 p-8 lg:p-10 flex flex-col justify-end">
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="relative z-10"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-full bg-gold-400/20 backdrop-blur-sm flex items-center justify-center text-gold-300">
                        <service.icon className="w-5 h-5" />
                      </div>
                      <h3 className="font-serif text-2xl lg:text-3xl text-cream-50">
                        {service.title}
                      </h3>
                    </div>
                    <p className="text-cream-100/60 font-light leading-relaxed mb-6 max-w-md">
                      {service.description}
                    </p>
                    <motion.button
                      onClick={() => scrollTo('contact')}
                      whileHover={{ x: 5 }}
                      className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-gold-300 hover:text-gold-200 transition-colors"
                    >
                      Inquire
                      <ArrowUpRight className="w-4 h-4" />
                    </motion.button>
                  </motion.div>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
