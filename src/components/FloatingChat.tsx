import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X } from 'lucide-react';

const FloatingChat = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="absolute bottom-20 right-0 w-80 bg-card rounded-2xl shadow-elegant overflow-hidden"
          >
            <div className="gradient-hero text-primary-foreground p-4">
              <div className="flex items-center justify-between">
                <h3 className="font-semiextrabold">Chat with us!</h3>
                <button
                  onClick={() => setIsOpen(false)}
                  className="hover:bg-primary-foreground/20 p-1 rounded transition-smooth"
                >
                  <X size={20} />
                </button>
              </div>
            </div>
            <div className="p-4 space-y-4">
              <div className="bg-muted p-3 rounded-lg">
                <p className="text-sm">👋 Hello! How can we help you today?</p>
              </div>
              <div className="flex flex-col space-y-2">
                <a
                  href="https://wa.me/+254723883765"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#25D366] text-white p-3 rounded-lg text-center font-medium hover:bg-[#20BA5A] transition-smooth"
                >
                  Chat on WhatsApp
                </a>
                <a
                  href="mailto:lethanprint@gmail.com
"
                  className="bg-primary text-primary-foreground p-3 rounded-lg text-center font-medium hover:bg-primary/90 transition-smooth"
                >
                  Send Email
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="gradient-accent text-accent-foreground p-4 rounded-full shadow-glow"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </motion.button>
    </div>
  );
};

export default FloatingChat;
