// src/components/ClientLogosCarousel.jsx

import { motion } from "framer-motion";

const logos = [
  "/logos/rhinoark.png",
  "/logos/ntsa.png",
  "/logos/kenGen.png",
  "/logos/goblue.jpeg",
  "/logos/kdf.jpg",
  "/logos/safaricom.png",
  "/logos/aberdareyetu.jpg",
  "/logos/eargh.png",
  "/logos/jumiapwani.png",
  "/logos/nawassco.png",
  "/logos/jabeic.png",
  "/logos/safaricom.png",
];

const ClientLogosCarousel = () => {
  return (
    <section className="py-14 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-2xl md:text-3xl font-bold mb-10">
          Trusted by Leading Brands
        </h2>

        <div className="relative w-full overflow-hidden">
          <motion.div
            className="flex gap-50 whitespace-nowrap" // Increased from gap-10 → gap-24
            animate={{ x: ["0%", "-100%"] }}
            transition={{
              repeat: Infinity,
              duration: 22, // slightly slower for an elegant look
              ease: "linear",
            }}
          >
            {[...logos, ...logos].map((logo, i) => (
              <motion.img
                key={i}
                src={logo}
                alt="Client logo"
                className="h-20 w-auto object-contain
                  opacity-95 
                  hover:opacity-100
                  grayscale-[5%] hover:grayscale-0
                  saturate-150 hover:saturate-200
                  transition-all duration-300"
                whileHover={{ scale: 1.08 }}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ClientLogosCarousel;
