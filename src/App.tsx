import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Suspense, lazy } from "react";

import CustomCursor from "./components/CustomCursor";

// 🔥 Lazy-loaded pages (reduces unused JS)
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Designing = lazy(() => import("./pages/services/Designing"));
const Printing = lazy(() => import("./pages/services/Printing"));
const Branding = lazy(() => import("./pages/services/Branding"));
const Packaging = lazy(() => import("./pages/services/Packaging"));
const Supplies = lazy(() => import("./pages/services/Supplies"));
const Clients = lazy(() => import("./pages/Clients"));
const NotFound = lazy(() => import("./pages/NotFound"));

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

// 🔥 Animated Routes with Page Transitions + Lazy Loading
const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Suspense fallback={<div className="p-20 text-center">Loading...</div>}>
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
      </Suspense>
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
