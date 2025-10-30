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
      name: "TechCorp Solutions",
      logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=200&h=200&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&h=400&fit=crop",
      ]
    },
    {
      name: "Creative Minds Agency",
      logo: "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=200&h=200&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1542744094-3a31f272c490?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&h=400&fit=crop",
      ]
    },
    {
      name: "Global Retail Group",
      logo: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=200&h=200&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?w=600&h=400&fit=crop",
      ]
    },
    {
      name: "Innovate Startups",
      logo: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=200&h=200&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=400&fit=crop",
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
                <Card className="p-8 hover:shadow-elegant transition-all duration-300 border-2 hover:border-secondary">
                  {/* Client Logo and Name */}
                  <div className="flex items-center space-x-4 mb-6">
                    <motion.img 
                      src={client.logo} 
                      alt={`${client.name} logo`}
                      className="w-16 h-16 rounded-full object-cover border-4 border-primary"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    />
                    <h3 className="text-2xl font-bold text-primary">{client.name}</h3>
                  </div>

                  {/* Image Carousel */}
                  <Carousel className="w-full">
                    <CarouselContent>
                      {client.images.map((image, imgIndex) => (
                        <CarouselItem key={imgIndex}>
                          <div className="relative aspect-video overflow-hidden rounded-lg">
                            <motion.img
                              src={image}
                              alt={`${client.name} project ${imgIndex + 1}`}
                              className="w-full h-full object-cover"
                              whileHover={{ scale: 1.05 }}
                              transition={{ duration: 0.3 }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious className="left-2 bg-secondary text-secondary-foreground hover:bg-secondary/90" />
                    <CarouselNext className="right-2 bg-secondary text-secondary-foreground hover:bg-secondary/90" />
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
