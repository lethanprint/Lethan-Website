import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import ServiceCarousel from '@/components/ServiceCarousel';
import FloatingChat from '@/components/FloatingChat';
import { motion } from 'framer-motion';
import { P } from 'node_modules/framer-motion/dist/types.d-BJcRxCew';

const Printing = () => {
  const carouselImages = [
    '/packphotos/printing1.png',
    '/packphotos/printing3.png',
    '/products/earg4.png',
    '/packphotos/printing7.png',

  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <FloatingChat />

      <HeroSection 
        title="High-Quality Printing Solutions"
        backgroundImage="/products/printinghero.jpg"
      />

      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Experience premium printing services with state-of-the-art technology and superior materials. We deliver crisp, vibrant prints that make a lasting impression, whether it's business cards, large format banners, or specialty materials.
            </p>
          </motion.div>

          <ServiceCarousel images={carouselImages} />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-16 max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-primary mb-8 text-center">Our Printing Services Include:</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                'Digital Offset Printing',
                'Large Format Printing',
                'Merchandise Printing',
                'Offset Printing',
                'Engraving & Direct Branding',
                'Signage Production',
                'Screen Printing',
                'UV/ DTF Printing',
              ].map((service, index) => (
                <motion.div
                  key={service}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-card p-6 rounded-xl shadow-lg hover:shadow-elegant hover:border-secondary border-2 border-transparent transition-all duration-300 hover:-translate-y-1"
                >
                  <p className="text-lg font-medium text-foreground">✓ {service}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Printing;
