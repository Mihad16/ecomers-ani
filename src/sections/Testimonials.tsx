import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { RevealSection } from '../components/RevealSection';

const testimonials = [
  {
    quote:
      'An experience unlike any other. Every detail was anticipated before I even thought to ask. True mastery of their craft.',
    author: 'Isabelle Marchetti',
    role: 'Private Client, Milan',
    rating: 5,
  },
  {
    quote:
      'They transformed our residence into something that feels both timeless and deeply personal. The level of care is unparalleled.',
    author: 'Henrik Voss',
    role: 'Estate Director, Zurich',
    rating: 5,
  },
  {
    quote:
      'Working with them felt effortless, yet the results were nothing short of extraordinary. A rare combination of grace and excellence.',
    author: 'Camille Beaumont',
    role: 'Creative Director, Paris',
    rating: 5,
  },
  {
    quote:
      'The attention to detail is staggering. They understood our vision before we could articulate it ourselves. Simply exceptional.',
    author: 'Alexander Roth',
    role: 'Hotelier, Vienna',
    rating: 5,
  },
  {
    quote:
      'Aurelia & Co. elevated our brand beyond what we imagined possible. Their work speaks a language of luxury that is both authentic and powerful.',
    author: 'Sophia Laurent',
    role: 'Founder, Maison Laurent',
    rating: 5,
  },
];

export function Testimonials() {
  const [current, setCurrent] = useState(0);
  const headerRef = useRef<HTMLDivElement>(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: '-100px' });

  const next = () => setCurrent((c) => (c + 1) % testimonials.length);
  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="testimonials" className="py-28 lg:py-40 bg-peach-50/50 relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-transparent to-beige-300" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-xs uppercase tracking-[0.4em] text-gold-500 mb-8"
          >
            Client Voices
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.15 }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl text-charcoal-800"
          >
            Words of <span className="italic text-gold-500">Appreciation</span>
          </motion.h2>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <RevealSection>
            <div className="relative bg-ivory border border-beige-200 p-10 lg:p-16">
              {/* Quote Icon */}
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-gold-400 rounded-full flex items-center justify-center">
                <Quote className="w-5 h-5 text-cream-50" />
              </div>

              {/* Stars */}
              <div className="flex justify-center gap-1 mb-8">
                {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Star className="w-4 h-4 fill-gold-400 text-gold-400" />
                  </motion.div>
                ))}
              </div>

              {/* Quote */}
              <AnimatePresence mode="wait">
                <motion.blockquote
                  key={current}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                  className="text-center"
                >
                  <p className="font-serif text-xl md:text-2xl lg:text-3xl text-charcoal-700 leading-relaxed italic mb-10">
                    "{testimonials[current].quote}"
                  </p>
                  <div className="w-12 h-px bg-beige-300 mx-auto mb-6" />
                  <p className="font-serif text-lg text-charcoal-800">
                    {testimonials[current].author}
                  </p>
                  <p className="text-xs uppercase tracking-widest text-charcoal-400 mt-2">
                    {testimonials[current].role}
                  </p>
                </motion.blockquote>
              </AnimatePresence>

              {/* Navigation */}
              <div className="flex items-center justify-center gap-6 mt-10">
                <motion.button
                  onClick={prev}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 border border-beige-300 flex items-center justify-center text-charcoal-500 hover:bg-charcoal-800 hover:text-cream-50 hover:border-charcoal-800 transition-all duration-300"
                >
                  <ChevronLeft className="w-5 h-5" />
                </motion.button>

                <div className="flex gap-2">
                  {testimonials.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrent(i)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        i === current
                          ? 'bg-gold-400 w-6'
                          : 'bg-beige-300 hover:bg-gold-300'
                      }`}
                    />
                  ))}
                </div>

                <motion.button
                  onClick={next}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 border border-beige-300 flex items-center justify-center text-charcoal-500 hover:bg-charcoal-800 hover:text-cream-50 hover:border-charcoal-800 transition-all duration-300"
                >
                  <ChevronRight className="w-5 h-5" />
                </motion.button>
              </div>
            </div>
          </RevealSection>
        </div>
      </div>
    </section>
  );
}
