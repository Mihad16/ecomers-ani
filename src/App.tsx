import { Navigation } from './components/Navigation';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Services } from './sections/Services';
import { Philosophy } from './sections/Philosophy';
import { Testimonials } from './sections/Testimonials';
import { Contact } from './sections/Contact';
import { Footer } from './sections/Footer';

function App() {
  return (
    <div className="min-h-screen bg-peach-50 overflow-x-hidden">
      <Navigation />
      <Hero />
      <About />
      <Services />
      <Philosophy />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
