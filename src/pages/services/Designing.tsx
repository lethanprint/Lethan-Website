import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import ServiceCarousel from '@/components/ServiceCarousel';
import FloatingChat from '@/components/FloatingChat';
import { motion } from 'framer-motion';

const Designing = () => {
  const carouselImages = [
    '/products/un.jpg',
    '/products/aberdare1.png',
    '/products/ever5.png',
    '/products/aberdare2.png',
    '/products/brand.jpg',
    '/products/design1.jpg',
    '/products/design2.jpg',

  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <FloatingChat />

      <HeroSection 
        title="Professional Designing Services"
        backgroundImage="/logos/designhero.jpg"
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
              Our design services combine creativity with strategic thinking to create visuals that resonate with your target audience. From brand identity to marketing materials, we bring your vision to life with stunning, professional designs.
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
            <h2 className="text-3xl font-bold text-primary mb-8 text-center">Our Design Services Include:</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                'Logo Design & Brand Identity',
                'Marketing Materials',
                'Social Media Graphics',
                'Business Cards & Stationery',
                'Brochures & Flyers',
                'Posters & Banners',
                'Company Profiles',
                'UI/UX Design',
              ].map((service, index) => (
                <motion.div
                  key={service}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-card p-6 rounded-xl shadow-lg hover:shadow-elegant hover:border-secondary border-2 border-transparent transition-all duration-300 hover:-translate-y-1"
                >
                  <p className="text-lg font-medium text-foreground group-hover:text-secondary">✓ {service}</p>
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

export default Designing;
