import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import FloatingChat from '@/components/FloatingChat';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Phone size={24} />,
      title: 'Phone',
      content: '+1 234 567 8900',
      link: 'tel:+1234567890',
    },
    {
      icon: <Mail size={24} />,
      title: 'Email',
      content: 'info@lethangarments.com',
      link: 'mailto:info@lethangarments.com',
    },
    {
      icon: <MapPin size={24} />,
      title: 'Address',
      content: '123 Business Street, City, Country',
      link: '#',
    },
    {
      icon: <Clock size={24} />,
      title: 'Business Hours',
      content: 'Mon - Fri: 9AM - 6PM',
      link: '#',
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      <FloatingChat />

      <HeroSection
        title="Get In Touch"
        subtitle="We'd love to hear from you. Let's discuss your project!"
        backgroundImage="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1920&h=600&fit=crop"
      />

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-primary mb-8">Contact Information</h2>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.title}
                    href={info.link}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-4 p-4 bg-card rounded-xl hover:shadow-lg hover:border-secondary border-2 border-transparent transition-all duration-300 hover:-translate-y-1 group"
                  >
                    <div className="text-primary group-hover:text-secondary group-hover:scale-110 transition-all duration-300">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1 group-hover:text-secondary transition-smooth">{info.title}</h3>
                      <p className="text-muted-foreground">{info.content}</p>
                    </div>
                  </motion.a>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="mt-8 p-6 bg-primary/5 rounded-xl"
              >
                <h3 className="text-xl font-bold text-primary mb-4">Why Contact Us?</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>✓ Free consultation and quotes</li>
                  <li>✓ Quick response time</li>
                  <li>✓ Expert guidance and support</li>
                  <li>✓ Flexible scheduling</li>
                </ul>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-card p-8 rounded-2xl shadow-elegant border-2 border-transparent hover:border-secondary transition-all duration-300">
                <h2 className="text-3xl font-bold text-primary mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Full Name
                    </label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="John Doe"
                      required
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      required
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+1 234 567 8900"
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-foreground mb-2">
                      Service Interested In
                    </label>
                    <select
                      id="service"
                      className="w-full px-3 py-2 border border-input rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    >
                      <option value="">Select a service</option>
                      <option value="designing">Designing</option>
                      <option value="printing">Printing</option>
                      <option value="branding">Branding</option>
                      <option value="signage">Signage</option>
                      <option value="packaging">Packaging</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your project..."
                      rows={5}
                      required
                      className="w-full"
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full gradient-accent shadow-glow hover:scale-105 transition-transform">
                    Send Message
                  </Button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
