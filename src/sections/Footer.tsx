import { motion } from 'framer-motion';
import { RevealSection, StaggerContainer, StaggerItem } from '../components/RevealSection';

const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'testimonials', label: 'Testimonials' },
  { id: 'contact', label: 'Contact' },
];

export function Footer() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <footer className="bg-charcoal-900 py-20 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gold-400/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-4 gap-12 lg:gap-16 mb-20">
          {/* Brand */}
          <RevealSection className="md:col-span-2" delay={0}>
            <motion.p
              className="font-serif text-3xl text-cream-100 mb-6"
              whileHover={{ x: 3 }}
            >
              Aurelia & Co.
            </motion.p>
            <p className="text-cream-200/40 font-light leading-relaxed max-w-sm">
              A Zurich-based atelier devoted to the art of refined living.
              Crafting extraordinary experiences for the world's most discerning
              individuals since 2012.
            </p>
          </RevealSection>

          {/* Navigation */}
          <div>
            <p className="text-xs uppercase tracking-widest text-gold-400 mb-6">
              Navigate
            </p>
            <StaggerContainer className="space-y-3" staggerDelay={0.06}>
              {navLinks.map((link) => (
                <StaggerItem key={link.id}>
                  <motion.button
                    onClick={() => scrollTo(link.id)}
                    whileHover={{ x: 5 }}
                    className="block text-cream-200/50 hover:text-gold-300 transition-colors text-sm"
                  >
                    {link.label}
                  </motion.button>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>

          {/* Social */}
          <div>
            <p className="text-xs uppercase tracking-widest text-gold-400 mb-6">
              Connect
            </p>
            <StaggerContainer className="space-y-3" staggerDelay={0.06}>
              {['Instagram', 'LinkedIn', 'Pinterest'].map((social) => (
                <StaggerItem key={social}>
                  <motion.p
                    whileHover={{ x: 5, color: '#C9A46A' }}
                    className="text-cream-200/50 text-sm cursor-pointer transition-colors"
                  >
                    {social}
                  </motion.p>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="border-t border-charcoal-700 pt-8 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="text-cream-200/30 text-xs">
            © {new Date().getFullYear()} Aurelia & Co. All rights reserved.
          </p>
          <p className="text-cream-200/30 text-xs">
            Crafted with intention in Zurich.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
