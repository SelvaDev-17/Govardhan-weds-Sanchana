import React from 'react';
import { motion } from 'framer-motion';

const Venue = () => {
  return (
    <section className="relative py-32 px-6 z-10 overflow-hidden bg-transparent">
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-sage-green/10 rounded-full blur-[150px] -z-10"></div>
      
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        <motion.div 
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 1.5 }}
           className="mb-12 md:mb-16 text-center"
        >
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-text-main mb-4 md:mb-6">The Venue</h2>
          <div className="w-16 md:w-24 h-[1px] bg-soft-gold/60 mx-auto"></div>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 md:gap-16 w-full max-w-7xl mx-auto">
          {/* Venue Image Card */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.2 }}
            className="w-full lg:w-1/2 glass-panel-light p-4 md:p-6 rounded-[2rem] md:rounded-[3rem] shadow-xl group overflow-hidden"
          >
             <div className="relative w-full aspect-[4/3] md:aspect-[16/10] overflow-hidden rounded-2xl md:rounded-3xl">
                <img 
                   src={`${import.meta.env.BASE_URL}venue.jpg`} 
                   alt="Asirvatham Mahal Venue" 
                   className="w-full h-full object-cover transition-transform duration-1500 group-hover:scale-110" 
                />
             </div>
          </motion.div>

          {/* Venue Details Grid */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.4 }}
            className="w-full lg:w-1/2 glass-card-light rounded-[2rem] md:rounded-[3rem] p-8 sm:p-12 md:p-16 shadow-lg border border-white text-center flex flex-col justify-center transition-transform duration-700 hover:-translate-y-2"
          >
            <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl text-text-main mb-6 md:mb-8 tracking-wide">Asirvatham Mahal</h3>
            <p className="font-sans text-base sm:text-lg md:text-xl text-text-light max-w-lg mx-auto leading-relaxed mb-10 md:mb-12 tracking-wide font-medium">
              1No3, Madambakkam Main Rd, Maruthi Nagar, Madambakkam, Chennai, Tamil Nadu 600073
            </p>

            <a 
              href="https://maps.app.goo.gl/GFym4bJiWEErbfMN7" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-gold mx-auto inline-block relative z-10"
            >
              View on Google Maps
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Venue;
