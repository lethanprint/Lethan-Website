import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import lethanLogo from "/logos/lethanlogo.png";
import { useIsMobile } from "@/hooks/use-mobile"; // 👈 import your hook

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();
  const isMobile = useIsMobile(); // 👈 hook value (true below 950 px)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setServicesOpen(false);
  }, [location]);

  const services = [
    { name: "Designing", path: "/services/designing" },
    { name: "Printing", path: "/services/printing" },
    { name: "Branding", path: "/services/branding" },
    { name: "Supplies", path: "/services/supplies" },
    { name: "Packaging", path: "/services/packaging" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 bg-background transition-all duration-300 ${
        isScrolled ? "shadow-elegant" : "shadow-md"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <motion.img
              src={lethanLogo}
              alt="Lethan Garments & Prints Logo"
              className="max-h-14 w-auto border-2 border-transparent group-hover:border-secondary transition-all duration-300"
              whileHover={{ rotate: [0, -5, 5, -5, 0], scale: 1.05 }}
              transition={{ duration: 0.5 }}
            />
            <motion.span
              className="text-xl font-bold text-primary hidden sm:block group-hover:text-secondary transition-colors duration-300"
              whileHover={{ x: 5 }}
            >
              Lethan Garments & Prints
            </motion.span>
          </Link>

          {/* 👇 Desktop nav (≥951 px) */}
          {!isMobile && (
            <div className="flex items-center space-x-8">
              <motion.div whileHover={{ y: -2 }}>
                <Link
                  to="/"
                  className="nav-link text-foreground hover:text-secondary transition-smooth relative group"
                >
                  Home
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary group-hover:w-full transition-all duration-300" />
                </Link>
              </motion.div>

              <motion.div whileHover={{ y: -2 }}>
                <Link
                  to="/about"
                  className="nav-link text-foreground hover:text-secondary transition-smooth relative group"
                >
                  About Us
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary group-hover:w-full transition-all duration-300" />
                </Link>
              </motion.div>

              {/* Services Dropdown */}
              <div className="relative group">
                <motion.button
                  className="flex items-center space-x-1 text-foreground hover:text-secondary transition-smooth relative"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                  whileHover={{ y: -2 }}
                >
                  <span>Services</span>
                  <motion.div
                    animate={{ rotate: servicesOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </motion.div>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary group-hover:w-full transition-all duration-300" />
                </motion.button>

                <AnimatePresence>
                  {servicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-48 bg-card rounded-lg shadow-elegant overflow-hidden border-2 border-secondary/20"
                      onMouseEnter={() => setServicesOpen(true)}
                      onMouseLeave={() => setServicesOpen(false)}
                    >
                      {services.map((service, i) => (
                        <motion.div
                          key={service.path}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.05 }}
                        >
                          <Link
                            to={service.path}
                            className="block px-4 py-3 text-foreground hover:bg-secondary hover:text-secondary-foreground transition-all duration-300 border-l-4 border-transparent hover:border-primary"
                          >
                            {service.name}
                          </Link>
                        </motion.div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link
                to="/clients"
                className="nav-link text-foreground hover:text-secondary transition-smooth relative group"
              >
                Clients
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary group-hover:w-full transition-all duration-300" />
              </Link>

              <Link
                to="/contact"
                className="nav-link text-foreground hover:text-secondary transition-smooth relative group"
              >
                Contact
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary group-hover:w-full transition-all duration-300" />
              </Link>

              <Link to="/contact">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    variant="default"
                    size="lg"
                    className="gradient-accent shadow-glow hover:shadow-xl transition-all duration-300 animate-pulse-glow"
                  >
                    Get Quote
                  </Button>
                </motion.div>
              </Link>
            </div>
          )}

          {/* 👇 Mobile Menu Button (≤950 px) */}
          {isMobile && (
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-foreground hover:text-primary transition-smooth"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          )}
        </div>

        {/* 👇 Mobile Menu */}
        <AnimatePresence>
          {isMobile && isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="bg-card rounded-lg shadow-elegant mb-4 overflow-hidden"
            >
              <div className="flex flex-col p-4 space-y-4">
                <Link to="/" className="text-foreground hover:text-primary transition-smooth">
                  Home
                </Link>
                <Link to="/about" className="text-foreground hover:text-secondary transition-smooth">
                  About Us
                </Link>

                <div>
                  <button
                    onClick={() => setServicesOpen(!servicesOpen)}
                    className="flex items-center justify-between w-full text-foreground hover:text-secondary transition-smooth"
                  >
                    <span>Services</span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        servicesOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <AnimatePresence>
                    {servicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="flex flex-col pl-4 mt-2 space-y-2"
                      >
                        {services.map((service) => (
                          <Link
                            key={service.path}
                            to={service.path}
                            className="text-muted-foreground hover:text-primary transition-smooth"
                          >
                            {service.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <Link to="/clients" className="text-foreground hover:text-secondary transition-smooth">
                  Clients
                </Link>
                <Link to="/contact" className="text-foreground hover:text-primary transition-smooth">
                  Contact
                </Link>

                <Link to="/contact" className="w-full">
                  <Button variant="default" className="gradient-accent w-full">
                    Get Quote
                  </Button>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navigation;
