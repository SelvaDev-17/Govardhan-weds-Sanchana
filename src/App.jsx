import React, { useEffect, useState } from 'react';
import Hero from './components/Hero';
import InvitationText from './components/InvitationText';
import Countdown from './components/Countdown';
import Events from './components/Events';
import Venue from './components/Venue';
import Footer from './components/Footer';
import { ScrollProgress, MusicToggle, Particles, FloralCorners } from './components/Effects';
import { motion, AnimatePresence } from 'framer-motion';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-light-bg text-text-main font-sans selection:bg-blush-pink selection:text-text-main paper-texture">
      <AnimatePresence>
        {loading && (
          <motion.div 
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-light-bg paper-texture"
          >
            <motion.div 
              animate={{ 
                scale: [1, 1.05, 1],
                opacity: [0.7, 1, 0.7]
              }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="text-text-main text-5xl font-serif mb-8 tracking-[0.3em] font-light"
            >
              G & S
            </motion.div>
            <div className="h-[1px] w-64 bg-text-light/10 overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 2, ease: "easeInOut" }}
                className="h-full bg-gradient-to-r from-transparent via-soft-gold to-transparent"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <ScrollProgress />
      <MusicToggle />
      <FloralCorners />
      <Particles />

      <Hero />
      <InvitationText />
      <Countdown />
      <Events />
      <Venue />
      <Footer />
    </div>
  );
}

export default App;
