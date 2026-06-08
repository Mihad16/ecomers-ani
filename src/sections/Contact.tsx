import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import { RevealSection, StaggerContainer, StaggerItem } from '../components/RevealSection';
import { GlassPanel } from '../components/GlassCard';

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: '-100px' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  const contactInfo = [
    { icon: Phone, label: 'Telephone', value: '+41 44 555 0182' },
    { icon: Mail, label: 'Correspondence', value: 'atelier@aureliaandco.com' },
    { icon: MapPin, label: 'Atelier', value: 'Bahnhofstrasse 42, 8001 Zurich' },
    { icon: Clock, label: 'Availability', value: 'By appointment, Monday — Friday' },
  ];

  return (
    <section id="contact" className="py-28 lg:py-40 bg-peach-50 relative overflow-hidden">
      {/* Decorative */}
      <motion.div
        animate={{ y: [0, -30, 0], opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-20 -left-40 w-96 h-96 bg-gold-200/20 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ y: [0, 20, 0], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-20 -right-40 w-80 h-80 bg-beige-200/30 rounded-full blur-3xl"
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-xs uppercase tracking-[0.4em] text-gold-500 mb-8"
          >
            Begin Your Journey
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.15 }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl text-charcoal-800 mb-8"
          >
            Let Us Create
            <br />
            <span className="italic text-gold-500">Something Extraordinary</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-charcoal-400 font-light leading-relaxed text-lg"
          >
            We invite you to begin a conversation. Every remarkable project
            starts with a single, intentional step.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Contact Info */}
          <div>
            <StaggerContainer className="space-y-8" staggerDelay={0.12}>
              {contactInfo.map((item, i) => (
                <StaggerItem key={i}>
                  <motion.div
                    whileHover={{ x: 8 }}
                    className="flex items-center gap-5 group"
                  >
                    <div className="w-14 h-14 bg-cream-200 group-hover:bg-gold-100 transition-colors duration-300 flex items-center justify-center text-gold-500">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-widest text-charcoal-400 mb-1">
                        {item.label}
                      </p>
                      <p className="text-charcoal-800 font-light">{item.value}</p>
                    </div>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>

            {/* Map Placeholder with Parallax */}
            <RevealSection delay={0.4} direction="up" distance={40}>
              <div className="mt-12 aspect-[16/9] bg-beige-100 overflow-hidden relative group">
                <img
                  src="https://images.pexels.com/photos/208745/pexels-photo-208745.jpeg?auto=compress&cs=tinysrgb&w=1260"
                  alt="Zurich cityscape"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-charcoal-900/20 group-hover:bg-charcoal-900/10 transition-colors duration-500" />
                <div className="absolute bottom-4 left-4 bg-ivory/90 backdrop-blur-sm px-4 py-2">
                  <p className="text-xs uppercase tracking-widest text-charcoal-600">
                    Zurich, Switzerland
                  </p>
                </div>
              </div>
            </RevealSection>
          </div>

          {/* Form */}
          <RevealSection direction="right" delay={0.2} distance={60}>
            <GlassPanel
              intensity="light"
              className="p-8 lg:p-12 bg-ivory/80 border border-beige-200"
            >
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-20 text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
                  >
                    <CheckCircle className="w-16 h-16 text-gold-400 mb-6" />
                  </motion.div>
                  <h3 className="font-serif text-2xl text-charcoal-800 mb-3">
                    Inquiry Received
                  </h3>
                  <p className="text-charcoal-400 font-light">
                    Our concierge will be in touch within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <>
                  <h3 className="font-serif text-2xl text-charcoal-800 mb-2">
                    Request a Private Consultation
                  </h3>
                  <p className="text-charcoal-400 font-light text-sm mb-10">
                    Complete the form below and our concierge will respond within 24
                    hours.
                  </p>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs uppercase tracking-widest text-charcoal-400 mb-2">
                          Given Name
                        </label>
                        <input
                          type="text"
                          required
                          className="w-full bg-cream-100 border border-beige-200 px-4 py-3.5 text-charcoal-800 focus:outline-none focus:border-gold-400 transition-colors duration-300"
                          placeholder="Your first name"
                        />
                      </div>
                      <div>
                        <label className="block text-xs uppercase tracking-widest text-charcoal-400 mb-2">
                          Family Name
                        </label>
                        <input
                          type="text"
                          required
                          className="w-full bg-cream-100 border border-beige-200 px-4 py-3.5 text-charcoal-800 focus:outline-none focus:border-gold-400 transition-colors duration-300"
                          placeholder="Your last name"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs uppercase tracking-widest text-charcoal-400 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        className="w-full bg-cream-100 border border-beige-200 px-4 py-3.5 text-charcoal-800 focus:outline-none focus:border-gold-400 transition-colors duration-300"
                        placeholder="you@example.com"
                      />
                    </div>
                    <div>
                      <label className="block text-xs uppercase tracking-widest text-charcoal-400 mb-2">
                        Service of Interest
                      </label>
                      <select
                        required
                        className="w-full bg-cream-100 border border-beige-200 px-4 py-3.5 text-charcoal-800 focus:outline-none focus:border-gold-400 transition-colors duration-300"
                      >
                        <option value="">Select a service</option>
                        <option value="consultation">Bespoke Consultations</option>
                        <option value="experiences">Curated Experiences</option>
                        <option value="aesthetics">Refined Aesthetics</option>
                        <option value="partnerships">Artisan Partnerships</option>
                        <option value="other">Something Else</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs uppercase tracking-widest text-charcoal-400 mb-2">
                        Your Vision
                      </label>
                      <textarea
                        required
                        rows={4}
                        className="w-full bg-cream-100 border border-beige-200 px-4 py-3.5 text-charcoal-800 focus:outline-none focus:border-gold-400 transition-colors duration-300 resize-none"
                        placeholder="Tell us about your project or aspirations..."
                      />
                    </div>
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-charcoal-800 text-cream-50 py-4 text-xs uppercase tracking-widest hover:bg-gold-500 transition-colors duration-300 flex items-center justify-center gap-3"
                    >
                      Submit Inquiry
                      <Send className="w-4 h-4" />
                    </motion.button>
                  </form>
                </>
              )}
            </GlassPanel>
          </RevealSection>
        </div>
      </div>
    </section>
  );
}
