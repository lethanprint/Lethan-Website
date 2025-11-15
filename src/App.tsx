import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Designing from "./pages/services/Designing";
import Printing from "./pages/services/Printing";
import Branding from "./pages/services/Branding";
import Packaging from "./pages/services/Packaging";
import Clients from "./pages/Clients";
import NotFound from "./pages/NotFound";
import CustomCursor from "./components/CustomCursor";
import Supplies from "./pages/services/Supplies";

const queryClient = new QueryClient();

// 🔥 Page Transition Wrapper
const PageWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

// 🔥 Animated Routes Component
const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
        <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
        <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />

        <Route path="/services/designing" element={<PageWrapper><Designing /></PageWrapper>} />
        <Route path="/services/printing" element={<PageWrapper><Printing /></PageWrapper>} />
        <Route path="/services/branding" element={<PageWrapper><Branding /></PageWrapper>} />
        <Route path="/services/supplies" element={<PageWrapper><Supplies /></PageWrapper>} />
        <Route path="/services/packaging" element={<PageWrapper><Packaging /></PageWrapper>} />

        <Route path="/clients" element={<PageWrapper><Clients /></PageWrapper>} />

        {/* Catch-all */}
        <Route path="*" element={<PageWrapper><NotFound /></PageWrapper>} />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <CustomCursor />
      <Toaster />
      <Sonner />
     <BrowserRouter
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true,
        }}
      >
        <AnimatedRoutes />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
