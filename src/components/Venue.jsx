import React from 'react';
import { motion } from 'framer-motion';

const Venue = () => {
  return (
    <section className="relative py-24 px-6 z-10 overflow-hidden bg-pastel-bg">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-pastel-gold/20 rounded-full blur-[140px] -z-10"></div>
      
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        <motion.div 
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           className="mb-12 text-center"
        >
          <h2 className="font-serif text-4xl md:text-5xl text-text-main mb-4">The Venue</h2>
          <div className="w-16 h-[2px] bg-pastel-pink mx-auto rounded-full"></div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="w-full glass-panel rounded-[2rem] p-8 md:p-14 text-center border overflow-hidden border-white/80 shadow-[0_15px_40px_rgba(210,180,140,0.15)] relative group"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent rounded-[2rem] pointer-events-none"></div>

          <div className="w-full h-48 md:h-64 mb-8 rounded-2xl overflow-hidden relative shadow-lg border border-white/50">
             <div className="absolute inset-0 bg-white/10 mix-blend-overlay z-10 transition-opacity duration-500 hover:opacity-0"></div>
             <img src={`${import.meta.env.BASE_URL}venue.jpg`} alt="Asirvatham Mahal Venue" className="w-full h-full object-cover filter brightness-110 saturate-50 opacity-90" />
          </div>

          <h3 className="font-serif text-3xl md:text-5xl text-text-main mb-6 drop-shadow-sm">Asirvatham Mahal</h3>
          <p className="font-sans text-lg md:text-xl text-text-light max-w-xl mx-auto leading-relaxed mb-10">
            1No3, Madambakkam Main Rd, Maruthi Nagar, Madambakkam, Chennai, Tamil Nadu 600073
          </p>

          <a 
            href="https://maps.app.goo.gl/GFym4bJiWEErbfMN7" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-white/70 backdrop-blur-md rounded-full text-text-main font-sans font-semibold hover:bg-pastel-gold hover:text-white transition-colors duration-300 shadow-md border border-pastel-gold/20"
          >
            View on Google Maps
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Venue;
