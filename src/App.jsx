import React, { useEffect, useState } from 'react';
import Hero from './components/Hero';
import InvitationText from './components/InvitationText';
import Countdown from './components/Countdown';
import Events from './components/Events';
import Venue from './components/Venue';
import Footer from './components/Footer';
import { ScrollProgress, MusicToggle, Particles } from './components/Effects';
import { motion, AnimatePresence } from 'framer-motion';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-pastel-bg text-text-main font-sans selection:bg-pastel-pink selection:text-text-main">
      <AnimatePresence>
        {loading && (
          <motion.div 
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-pastel-bg"
          >
            <motion.div 
              animate={{ 
                scale: [1, 1.1, 1],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="text-text-main text-4xl font-serif mb-6 tracking-widest drop-shadow-sm"
            >
              G & S
            </motion.div>
            <div className="h-[2px] w-48 bg-text-light/10 rounded-full overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.8, ease: "easeInOut" }}
                className="h-full bg-gradient-to-r from-pastel-pink to-pastel-gold"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <ScrollProgress />
      <MusicToggle />
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
