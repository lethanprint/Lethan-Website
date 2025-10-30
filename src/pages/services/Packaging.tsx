import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import ServiceCarousel from '@/components/ServiceCarousel';
import FloatingChat from '@/components/FloatingChat';
import { motion } from 'framer-motion';

const Packaging = () => {
  const carouselImages = [
    'https://images.unsplash.com/photo-1638646201197-07bdd9dfa145?w=1200&h=600&fit=crop',
    'https://images.unsplash.com/photo-1612817288484-6f916006741a?w=1200&h=600&fit=crop',
    'https://images.unsplash.com/photo-1607082349566-187342175e2f?w=1200&h=600&fit=crop',
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <FloatingChat />

      <HeroSection 
        title="Custom Packaging Solutions"
        subtitle="Create unforgettable unboxing experiences with stunning packaging"
        backgroundImage="https://images.unsplash.com/photo-1612817288484-6f916006741a?w=1920&h=600&fit=crop"
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
              Create unforgettable unboxing experiences with custom packaging that reflects your brand's personality. Our packaging solutions combine functionality with stunning design to protect your products while making a memorable impression on your customers.
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
            <h2 className="text-3xl font-bold text-primary mb-8 text-center">Our Packaging Services Include:</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                'Custom Box Design & Printing',
                'Product Labels & Tags',
                'Retail Packaging Solutions',
                'Gift Box & Specialty Packaging',
                'Food & Beverage Packaging',
                'E-commerce Packaging',
                'Sustainable Packaging Options',
                'Packaging Prototyping',
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

export default Packaging;
