import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -100]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);
  const scale = useTransform(scrollY, [0, 1000], [1, 1.05]);

  return (
    <section className="relative h-[100svh] w-full flex items-center justify-center overflow-hidden z-10 bg-light-bg origin-top">
      {/* Background Image handling cinematic daylight */}
      <motion.div 
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ y: y1, scale }}
      >
        <img 
           src={`${import.meta.env.BASE_URL}warm_rings.png`} 
           alt="Wedding Rings Background"
           className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-cream/70 backdrop-blur-[6px]"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-light-bg via-transparent to-light-bg/60"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-soft-gold/20 via-transparent to-blush-pink/10 mix-blend-multiply"></div>
      </motion.div>

      {/* Main Content with vastly increased spacing */}
      <motion.div 
        style={{ y: y2, opacity }}
        className="relative z-10 flex flex-col items-center justify-center text-center px-4 w-full h-full pt-16"
      >
        {/* Softly floating Ganesha with gold aura */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1, y: [0, -5, 0] }}
          transition={{ 
            opacity: { duration: 2, delay: 0.5 },
            scale: { duration: 2, delay: 0.5 },
            y: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 } 
          }}
          className="mb-10 flex flex-col items-center justify-center relative"
        >
          <div className="absolute inset-0 bg-soft-gold/40 blur-2xl rounded-full scale-150"></div>
          <img src={`${import.meta.env.BASE_URL}ganesha.png`} className="w-24 md:w-32 h-auto object-contain drop-shadow-[0_0_20px_rgba(197,164,126,0.5)] relative z-10" alt="Ganesh" />
        </motion.div>

        <motion.h2 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 1 }}
          className="text-text-light font-sans tracking-[0.3em] md:tracking-[0.4em] text-xs md:text-sm uppercase mb-8 font-medium"
        >
          Two hearts. One journey.
        </motion.h2>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 1.2 }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl text-text-main mb-10 drop-shadow-sm font-normal tracking-wide"
        >
          <span className="block mb-3">S. Govardan</span>
          <span className="text-soft-gold font-light italic block my-3 md:inline md:my-0 md:mx-8 text-glow-soft">&amp;</span>
          <span className="block mt-3">U. Sanchana</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 1.6 }}
          className="text-lg md:text-2xl font-serif text-text-light mb-14 tracking-[0.2em] uppercase"
        >
          Forever begins here
        </motion.p>
        
        <motion.div
           initial={{ opacity: 0, y: 10 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 1.5, delay: 1.8 }}
           className="glass-card-light px-10 py-4 rounded-full border border-soft-gold/20"
        >
           <span className="text-text-main font-sans font-medium tracking-[0.2em] text-sm md:text-base uppercase">April 20, 2026</span>
        </motion.div>
      </motion.div>

      {/* Gentle Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
      >
        <span className="text-[10px] md:text-xs tracking-[0.4em] text-text-light/80 mb-4 uppercase font-medium">Scroll</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}>
          <ChevronDown className="text-soft-gold w-6 h-6 opacity-80" strokeWidth={1.5} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
