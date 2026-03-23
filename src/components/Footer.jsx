import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="relative py-16 text-center border-t border-pastel-gold/20 bg-pastel-bg z-10 overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-pastel-pink/20 rounded-full blur-[120px] pointer-events-none"></div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="relative z-10"
      >
        <div className="text-4xl md:text-6xl font-serif text-text-main mb-6 opacity-90 border-b border-pastel-gold/30 inline-block pb-4 drop-shadow-sm">
          G<span className="text-pastel-gold text-3xl md:text-5xl mx-3 font-light italic">&amp;</span>S
        </div>
        
        <p className="font-sans text-xs md:text-sm text-text-light/80 tracking-[0.2em] md:tracking-[0.3em] uppercase mt-2 font-medium">
          With best compliments from family &amp; friends
        </p>
      </motion.div>
    </footer>
  );
};

export default Footer;
