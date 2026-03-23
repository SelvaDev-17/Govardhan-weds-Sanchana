import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="relative py-24 text-center bg-light-bg z-10 overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-cream rounded-full blur-[140px] pointer-events-none"></div>

      {/* Decorative top border */}
      <div className="absolute top-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-soft-gold/30 to-transparent"></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
        className="relative z-10 flex flex-col items-center"
      >
        <div className="text-5xl md:text-7xl font-serif text-text-main mb-8 font-light tracking-widest flex items-center justify-center">
          G
          <span className="text-soft-gold text-4xl md:text-6xl mx-6 italic font-normal">
            &amp;
          </span>
          S
        </div>
        
        <div className="w-12 h-12 mb-8 opacity-60">
           <svg viewBox="0 0 200 200" fill="currentColor" className="text-sage-green w-full h-full">
              <path d="M100,20 C80,60 40,80 10,100 C40,120 80,140 100,180 C120,140 160,120 190,100 C160,80 120,60 100,20 Z" className="rotate-45 origin-center"/>
           </svg>
        </div>

        <p className="font-sans text-xs md:text-sm text-text-light/80 tracking-[0.3em] md:tracking-[0.4em] uppercase font-medium">
          With best compliments from family &amp; friends
        </p>
      </motion.div>
    </footer>
  );
};

export default Footer;
