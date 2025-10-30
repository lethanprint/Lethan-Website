import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, Sparkles, Palette, Package } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import StatsCounter from '@/components/StatsCounter';
import FloatingChat from '@/components/FloatingChat';
import { Button } from '@/components/ui/button';

const Home = () => {
  const [ref1, inView1] = useInView({ threshold: 0.2, triggerOnce: true });
  const [ref2, inView2] = useInView({ threshold: 0.2, triggerOnce: true });

  const services = [
    {
      icon: <Palette size={48} />,
      title: 'Professional Designing',
      description: 'Creative and innovative designs tailored to your brand identity',
      path: '/services/designing',
    },
    {
      icon: <Sparkles size={48} />,
      title: 'Quality Printing',
      description: 'High-quality printing services for all your business needs',
      path: '/services/printing',
    },
    {
      icon: <Package size={48} />,
      title: 'Brand Development',
      description: 'Complete branding solutions to elevate your business',
      path: '/services/branding',
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <FloatingChat />

      {/* Hero Section */}
      <section className="relative gradient-hero text-primary-foreground pt-32 pb-20 overflow-hidden">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1920&h=800&fit=crop)' }}
        />
        <div className="absolute inset-0 bg-primary/80" />
        
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-20 left-10 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-3xl"
            animate={{
              scale: [1.3, 1, 1.3],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-6"
            >
              <motion.span 
                className="inline-block bg-secondary/20 text-secondary-foreground px-6 py-2 rounded-full text-sm font-semibold mb-8 border-2 border-secondary/30"
                animate={{ 
                  scale: [1, 1.05, 1],
                  borderColor: ['hsl(37 90% 53% / 0.3)', 'hsl(37 90% 53% / 0.6)', 'hsl(37 90% 53% / 0.3)']
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                Your Trusted Design & Print Partner
              </motion.span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
            >
              Transform Your Vision Into Reality
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-primary-foreground/90 mb-10"
            >
              Professional design, printing, branding, signage, and packaging solutions for businesses that stand out
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button size="lg" variant="default" className="gradient-accent shadow-glow text-lg hover:scale-105 transition-transform">
                Get Started <ArrowRight className="ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg border-2 border-primary-foreground text-primary-foreground hover:bg-secondary hover:text-secondary-foreground hover:border-secondary transition-all duration-300">
                View Our Work
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Counter */}
      <StatsCounter />

      {/* Services Section */}
      <section ref={ref1} className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView1 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Our Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive solutions to bring your brand to life
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView1 ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
              <Link to={service.path}>
                  <motion.div 
                    className="group bg-card rounded-2xl p-8 shadow-lg hover:shadow-elegant transition-all duration-500 hover:-translate-y-3 border-2 border-transparent hover:border-secondary relative overflow-hidden"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-br from-secondary/0 via-secondary/5 to-secondary/0"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                    <div className="relative z-10">
                      <motion.div 
                        className="text-primary mb-6 group-hover:text-secondary transition-smooth"
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        {service.icon}
                      </motion.div>
                      <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-secondary transition-smooth">{service.title}</h3>
                      <p className="text-muted-foreground mb-6">{service.description}</p>
                      <span className="text-primary font-semibold inline-flex items-center group-hover:text-secondary transition-smooth">
                        Learn More <ArrowRight className="ml-2 group-hover:translate-x-3 transition-transform" size={20} />
                      </span>
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section ref={ref2} className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView2 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Why Choose Lethan?</h2>
            <p className="text-xl text-muted-foreground mb-12">
              We combine creativity, quality, and reliability to deliver exceptional results
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              {[
                { title: 'Expert Team', desc: 'Skilled professionals with years of industry experience' },
                { title: 'Quality Guaranteed', desc: 'Premium materials and cutting-edge technology' },
                { title: 'Fast Turnaround', desc: 'Efficient processes to meet your deadlines' },
                { title: 'Competitive Pricing', desc: 'Excellent value without compromising quality' },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  animate={inView2 ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-background p-6 rounded-xl hover:bg-muted hover:border-secondary border-2 border-transparent transition-all duration-300 hover:-translate-y-2 hover:shadow-xl relative overflow-hidden group"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative z-10">
                    <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-secondary transition-smooth">{item.title}</h3>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-hero text-primary-foreground relative overflow-hidden">
        <motion.div 
          className="absolute inset-0"
          animate={{
            background: [
              'radial-gradient(circle at 20% 50%, hsl(37 90% 53% / 0.15) 0%, transparent 50%)',
              'radial-gradient(circle at 80% 50%, hsl(37 90% 53% / 0.15) 0%, transparent 50%)',
              'radial-gradient(circle at 20% 50%, hsl(37 90% 53% / 0.15) 0%, transparent 50%)',
            ]
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <motion.h2 
              className="text-4xl md:text-5xl font-bold mb-6"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Ready to Get Started?
            </motion.h2>
            <motion.p 
              className="text-xl mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Let's bring your vision to life with our professional services
            </motion.p>
            <Link to="/contact">
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" variant="default" className="gradient-accent shadow-glow text-lg animate-pulse-glow">
                  Contact Us Today <ArrowRight className="ml-2" />
                </Button>
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
