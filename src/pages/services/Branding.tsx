import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import ServiceCarousel from '@/components/ServiceCarousel';
import FloatingChat from '@/components/FloatingChat';
import { motion } from 'framer-motion';

const Branding = () => {
  const carouselImages = [
    '/packphotos/branding1.png',
    '/packphotos/branding4.jpg',
    '/packphotos/branding3.png', 
    '/products/ever2.png',
    '/products/earg1.png', 
    '/products/jumuia2.png',
    '/products/kengen1.jpg',
    '/products/kdf3.jpg',
    '/products/kengen2.jpg',
    '/products/goblue2.png',
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <FloatingChat />

      <HeroSection 
        title="Complete Branding Solutions"
        backgroundImage="/logos/brandinghero.jpg"
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
            <p className="text-xl font-medium leading-relaxed mb-8">
              Build a powerful brand identity that resonates with your audience. Our comprehensive branding services help you establish a unique market presence, create memorable experiences, and build lasting connections with your customers.
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
            <h2 className="text-3xl font-extrabold text-primary mb-8 text-center">Our Branding Services Include:</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                'Custom Designed Products',
                'Branded Merchandise & Apparel',
                'Social Media Infographics',
                'Branded Packaging',
                'Corporate Identity Systems',
                'Rebranding Services',
                'Printing Services for Branding',
                'Brand Personal Experience Design',
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

export default Branding;
