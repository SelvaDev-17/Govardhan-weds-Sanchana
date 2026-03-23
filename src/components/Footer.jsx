import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="relative py-16 text-center border-t border-white/5 bg-deep-bg z-10 overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-neon-pink/5 rounded-full blur-[100px] pointer-events-none"></div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="relative z-10"
      >
        <div className="text-4xl md:text-6xl font-serif text-neon-gold text-glow-gold mb-6 opacity-80 border-b border-white/10 inline-block pb-4">
          G<span className="text-neon-pink text-3xl md:text-5xl mx-3 font-light italic">&amp;</span>S
        </div>
        
        <p className="font-sans text-xs md:text-sm text-white/50 tracking-[0.2em] md:tracking-[0.3em] uppercase mt-2">
          With best compliments from family &amp; friends
        </p>
      </motion.div>
    </footer>
  );
};

export default Footer;
