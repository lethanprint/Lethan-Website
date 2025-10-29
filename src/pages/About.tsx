import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Target, Heart, Award, Users } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import FloatingChat from '@/components/FloatingChat';

const About = () => {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  const values = [
    {
      icon: <Target size={48} />,
      title: 'Our Mission',
      description: 'To provide exceptional design and printing solutions that help businesses stand out and succeed in their markets.',
    },
    {
      icon: <Heart size={48} />,
      title: 'Our Values',
      description: 'Quality, integrity, and customer satisfaction are at the heart of everything we do.',
    },
    {
      icon: <Award size={48} />,
      title: 'Our Excellence',
      description: 'Committed to delivering outstanding results through innovation and attention to detail.',
    },
    {
      icon: <Users size={48} />,
      title: 'Our Team',
      description: 'A dedicated group of creative professionals passionate about bringing your vision to life.',
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <FloatingChat />

      <HeroSection
        title="About Lethan Garments & Prints"
        subtitle="Your trusted partner for professional design, printing, and branding solutions"
      />

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Our Story</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Founded with a passion for creativity and excellence, Lethan Garments & Prints has grown to become a trusted name in the design and printing industry. With over 15 years of experience, we've helped hundreds of businesses transform their brand identity and achieve their marketing goals.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-muted p-8 rounded-2xl"
            >
              <p className="text-lg text-foreground leading-relaxed">
                Our journey began with a simple mission: to provide high-quality design and printing services that make a real difference for our clients. Today, we combine traditional craftsmanship with cutting-edge technology to deliver results that exceed expectations.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section ref={ref} className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">What Drives Us</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our core values and commitment to excellence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-background p-8 rounded-2xl shadow-lg text-center hover:shadow-elegant transition-all duration-300"
              >
                <div className="text-primary mb-6 flex justify-center">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Meet Our Team</h2>
            <p className="text-lg text-muted-foreground mb-12">
              A passionate group of designers, printers, and brand specialists dedicated to bringing your vision to life. Our diverse team combines creativity, technical expertise, and industry knowledge to deliver exceptional results for every project.
            </p>
            <div className="bg-primary/5 p-8 rounded-2xl">
              <p className="text-lg text-foreground italic">
                "We don't just create designs and prints – we create experiences that help our clients succeed. Every project is an opportunity to exceed expectations and build lasting relationships."
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
