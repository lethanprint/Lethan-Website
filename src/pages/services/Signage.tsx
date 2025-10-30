import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import ServiceCarousel from '@/components/ServiceCarousel';
import FloatingChat from '@/components/FloatingChat';
import { motion } from 'framer-motion';

const Signage = () => {
  const carouselImages = [
    'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&h=600&fit=crop',
    'https://images.unsplash.com/photo-1556912173-3bb406ef7e77?w=1200&h=600&fit=crop',
    'https://images.unsplash.com/photo-1523726491678-bf852e717f6a?w=1200&h=600&fit=crop',
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <FloatingChat />

      <HeroSection 
        title="Professional Signage Solutions"
        backgroundImage="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&h=600&fit=crop"
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
              Make your business stand out with eye-catching, professional signage. From storefront displays to indoor wayfinding, we create durable, attractive signs that effectively communicate your message and enhance your brand visibility.
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
            <h2 className="text-3xl font-bold text-primary mb-8 text-center">Our Signage Services Include:</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                'Outdoor Business Signs',
                'Indoor Signage & Wayfinding',
                'LED & Illuminated Signs',
                'Vehicle Graphics & Wraps',
                'Window Graphics & Decals',
                'A-Frame & Sidewalk Signs',
                'Trade Show Displays',
                'Safety & Regulatory Signs',
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

export default Signage;
