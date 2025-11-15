import { Link } from 'react-router-dom';
import { Facebook, MessageCircle ,PhoneOutgoing , Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const services = [
    { name: 'Designing', path: '/services/designing' },
    { name: 'Printing', path: '/services/printing' },
    { name: 'Branding', path: '/services/branding' },
    { name: 'Signage', path: '/services/signage' },
    { name: 'Packaging', path: '/services/packaging' },
  ];

  return (
    <footer className="gradient-hero text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-extrabold mb-4">Lethan Garments & Prints</h3>
            <p className="text-primary-foreground/80 font-bold mb-4">
              Your trusted partner for professional design, printing, and branding solutions.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/profile.php?id=100088955576999" className="hover:text-secondary transition-smooth">
                <Facebook size={20} />
              </a>
              <a href="https://wa.me/<+254723883765>" className="hover:text-secondary transition-smooth">
                <MessageCircle  size={20} />
              </a>
              <a href="tel:+254723883765>" className="hover:text-secondary transition-smooth">
                <PhoneOutgoing  size={20} />
              </a>
              
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-primary-foreground/80  hover:text-secondary transition-smooth">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-primary-foreground/80 hover:text-secondary transition-smooth">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-primary-foreground/80 hover:text-secondary transition-smooth">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.path}>
                  <Link
                    to={service.path}
                    className="text-primary-foreground/80 hover:text-secondary transition-smooth"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="mt-1 flex-shrink-0" />
                <span className="text-primary-foreground/80">Gaberone Plaza, 7th Floor. Gaberone Rd</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} className="flex-shrink-0" />
                <span className="text-primary-foreground/80">+254 723 883 765</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} className="flex-shrink-0" />
                <span className="text-primary-foreground/80">lethanprint@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8">
          <p className="text-center text-primary-foreground/60">
            © {new Date().getFullYear()} Lethan Garments & Prints. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
