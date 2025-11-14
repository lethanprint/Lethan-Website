import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import FloatingChat from '@/components/FloatingChat';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [isSending, setIsSending] = useState(false);

  const contactInfo = [
    {
      icon: <Phone size={24} />,
      title: 'Phone',
      content: '+254 723 883 765',
      link: 'tel:+254723883765',
    },
    {
      icon: <Mail size={24} />,
      title: 'Email',
      content: 'lethanprint@gmail.com',
      link: 'mailto:lethanprint@gmail.com',
    },
    {
      icon: <MapPin size={24} />,
      title: 'Address',
      content: 'Gaberone Plaza, 7th Floor. Gaberone Rd Along Luthuli Ave',
      link: 'https://www.google.com/maps/place/Gaberone+plaza/@-1.2842154,36.8268291,80m/data=!3m1!1e3!4m14!1m7!3m6!1s0x182f11e849a53eb7:0x235009a1613022f4!2sGaberone+plaza!8m2!3d-1.2841156!4d36.827013!16s%2Fg%2F11vcp55qw6!3m5!1s0x182f11e849a53eb7:0x235009a1613022f4!8m2!3d-1.2841156!4d36.827013!16s%2Fg%2F11vcp55qw6?entry=ttu&g_ep=EgoyMDI1MTAyOS4xIKXMDSoASAFQAw%3D%3D',
      external: true,
    },
    {
      icon: <Clock size={24} />,
      title: 'Business Hours',
      content: 'Mon - Fri: 9AM - 6PM',
      link: '#',
    },
  ];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSending(true);

    const form = e.currentTarget;

    emailjs
      .sendForm(
        'Lethan', // 🔹 replace with your EmailJS service ID
        'template_cgsjksj', // 🔹 replace with your EmailJS template ID
        form,
        'r3bqdyZu1WlKg1yCY'   // 🔹 replace with your EmailJS public key
      )
      .then(
        (result) => {
          console.log(result.text);
          alert('✅ Message sent successfully!');
          form.reset();
          setIsSending(false);
        },
        (error) => {
          console.error(error.text);
          alert('❌ Failed to send message. Please try again.');
          setIsSending(false);
        }
      );
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      <FloatingChat />

      <HeroSection
        title="Get In Touch"
        subtitle="We'd love to hear from you. Let's discuss your project!"
        backgroundImage="/logos/contact2.jpg"
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
                    target={info.external ? '_blank' : '_self'}
                    rel={info.external ? 'noopener noreferrer' : ''}
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
                      <h3 className="font-semibold text-foreground mb-1 group-hover:text-secondary transition-smooth">
                        {info.title}
                      </h3>
                      <p className="text-muted-foreground">{info.content}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            <div className="mt-10 w-full h-[350px] rounded-lg overflow-hidden shadow-md">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.166042187628!2d36.8268291!3d-1.2842154!2m3!1f80!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f11e849a53eb7%3A0x235009a1613022f4!2sGaberone%20plaza!5e0!3m2!1sen!2ske!4v1730490000000!5m2!1sen!2ske"
                width="100%"
                height="100%"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

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
                    <Input id="name" name="name" type="text" placeholder="John Kamau" required className="w-full" />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email Address
                    </label>
                    <Input id="email" name="email" type="email" placeholder="john@example.com" required className="w-full" />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                      Phone Number
                    </label>
                    <Input id="phone" name="phone" type="tel" placeholder="0722 123 456" className="w-full" />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-foreground mb-2">
                      Service Interested In
                    </label>
                    <select
                      id="service"
                      name="service"
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
                      name="message"
                      placeholder="Tell us about your project..."
                      rows={5}
                      required
                      className="w-full"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSending}
                    className={`w-full gradient-accent shadow-glow hover:scale-105 transition-transform ${
                      isSending ? 'bg-red-500 text-white' : ''
                    }`}
                  >
                    {isSending ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </div>
            </motion.div>

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
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
