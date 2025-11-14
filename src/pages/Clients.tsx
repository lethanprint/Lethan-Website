import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import FloatingChat from '@/components/FloatingChat';
import HeroSection from '@/components/HeroSection';
import { Card } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Clients = () => {
  const clients = [
    {
      name: "Safaricom PLC",
      logo: "/logos/safaricom1.png",
      images: [
        "/products/safaricom1.png",
        "/products/safaricom2.jpg",
        "/products/safaricom3.jpg",
        "/products/safaricom4.jpg",
      ]
    },
    {
      name: "Kenya Defence Forces",
      logo: "/logos/kdf.jpg",
      images: [
        "/products/kdf3.jpg",
        "/products/kdf2.png",
        "/products/kdf1.png",
      ]
    },
    {
      name: "NTSA",
      logo: "/logos/ntsa.png",
      images: [
        "/products/ntsa4.png",
        "/products/ntsa1.png",
        "/products/ntsa3.png",
        "/products/ntsa2.png",
        "/products/ntsa5.png",
        
      ]
    },
    {
      name: "KRA",
      logo: "/logos/kra.png",
      images: [
        "/products/kra2.png",
        "/products/kra3.jpeg",
        "/products/kra1.png",
        "/products/kra4.jpeg",
        "/products/kra5.jpeg", 
      ]
    },
    {
      name: "KenGen",
      logo: "/logos/kenGen.png",
      images: [
        "/products/kengen1.jpg",
        "/products/kengen2.jpg",
        "/products/kengen3.png",
        "/products/kengen4.jpg",         
      ]
    },
    {
      name: "East African Regional Summit",
      logo: "/logos/eargh.png",
      images: [
        "/products/earg6.png",
        "/products/earg1.png",
        "/products/earg2.png",
        "/products/earg4.png",
        "/products/earg5.png",                       
      ]
    },
    {
      name: "Evergrow",
      logo: "/logos/evergreen.png",
      images: [
        "/products/ever1.png",
        "/products/ever2.png",
        "/products/ever3.png",
        "/products/ever4.png",
        "/products/ever5.png",                       
      ]
    },
    {
      name: "Rhinoark",
      logo: "/logos/rhinoark.png",
      images: [
        "/products/rhino1.png",
        "/products/rhino3.jpg",
                       

      ]
    },
    {
      name: "Go Blue",
      logo: "/logos/goblue.jpeg",
      images: [
        "/products/goblue1.png",
        "/products/goblue2.png",
        "/products/goblue3.png",                       
      ]
    },
    {
      name: "JABEIC",
      logo: "/logos/jabeic.png",
      images: [
        "/products/jabiec1.png",
        "/products/jabiec2.png",                           
    ]
    },
    {
      name: "Aberdare Yetu",
      logo: "/logos/aberdareyetu.jpg",
      images: [
        "/products/aberdare1.png",
        "/products/aberdare2.png",                              
        "/products/aberdare3.png",                              
      ]
    },
    {
      name: "Jumuiya Pwani",
      logo: "/logos/jumiapwani.png",
      images: [
        "/products/jumuia1.png",
        "/products/jumuia2.png",                              
                                      
      ]
    },
    
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <FloatingChat />
      
      <HeroSection 
        title="Our Valued Clients" 
        subtitle="Trusted by businesses across industries to deliver exceptional results"
        backgroundImage="/logos/client.jpg"
      />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {clients.map((client, index) => (
              <motion.div
                key={client.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-8 hover:shadow-elegant transition-all duration-500 border-2 hover:border-secondary relative overflow-hidden group hover:-translate-y-2">
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-primary/5 opacity-0 group-hover:opacity-100"
                    transition={{ duration: 0.5 }}
                  />
                  {/* Client Logo and Name */}
                  <div className="flex items-center space-x-4 mb-6 relative z-10">
                    <motion.div
                      whileHover={{ scale: 1.15, rotate: [0, -5, 5, -5, 0] }}
                      transition={{ duration: 0.5 }}
                    >
                      <img 
                        src={client.logo} 
                        alt={`${client.name} logo`}
                        className="w-16 h-16 rounded-full object-cover border-4 border-primary group-hover:border-secondary transition-colors duration-300 shadow-lg"
                      />
                    </motion.div>
                    <motion.h3 
                      className="text-2xl font-bold text-primary group-hover:text-secondary transition-colors duration-300"
                      whileHover={{ x: 5 }}
                    >
                      {client.name}
                    </motion.h3>
                  </div>

                  {/* Image Carousel */}
                  <Carousel className="w-full relative z-10">
                    <CarouselContent>
                      {client.images.map((image, imgIndex) => (
                        <CarouselItem key={imgIndex}>
                          <motion.div 
                            className="relative h-72 overflow-hidden rounded-xl border-2 border-transparent hover:border-secondary transition-all duration-300"
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.4 }}
                          >
                            <motion.img
                              src={image}
                              alt={`${client.name} project ${imgIndex + 1}`}
                              className="w-full h-full object-cover"
                              initial={{ scale: 1 }}
                              whileHover={{ scale: 1.1 }}
                              transition={{ duration: 0.6 }}
                            />
                            <motion.div 
                              className="absolute inset-0 bg-gradient-to-t from-primary/40 via-secondary/20 to-transparent"
                              initial={{ opacity: 0 }}
                              whileHover={{ opacity: 1 }}
                              transition={{ duration: 0.3 }}
                            />
                          </motion.div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious className="left-2 bg-secondary text-secondary-foreground hover:bg-secondary/90 hover:scale-110 transition-all duration-300 shadow-lg" />
                    <CarouselNext className="right-2 bg-secondary text-secondary-foreground hover:bg-secondary/90 hover:scale-110 transition-all duration-300 shadow-lg" />
                  </Carousel>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Clients;
