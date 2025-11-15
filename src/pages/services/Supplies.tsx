import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import ServiceCarousel from '@/components/ServiceCarousel';
import FloatingChat from '@/components/FloatingChat';
import { motion } from 'framer-motion';

const Supplies = () => {
  const carouselImages = [
    '/products/ever1.png',
    '/products/goblue3.png',
    '/products/jabiec1.png',
    '/products/jabiec2.png',
    '/products/office1.jpg',
    '/products/office2.jpg',
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <FloatingChat />

      <HeroSection 
        title="Office Supplies & School Stationary"
        backgroundImage="/products/stationeryhero.jpg"
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
              Keep your workspace efficient, organized, and professional with our premium office supplies and stationery. Whether you're a startup, corporate office, or educational institution, we provide reliable products
            </p>
            <p>
              From pens that glide smoothly to notebooks built for ideas, durable files for organization, 
              branded stationery, and premium desk essentials — we supply everything your office needs to run flawlessly.
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
            <h2 className="text-3xl font-extrabold text-primary mb-8 text-center">
              Our Office Supplies & School Stationary Include:
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                'Paper in various paper sizes.',
                'Pens, Sharpie Pens & Pencils',
                'Printer Ink & Toner Cartridges',
                'Shipping & Packing Supplies',
                'Staple Guns & Staples',
                'Paper Clips, Push Pins & Binder Clips',
                'Dry Erase Markers & Whiteboards',
                'Notebooks & Legal Pads',
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

export default Supplies;
