import React from 'react';
import { motion } from 'framer-motion';

const Venue = () => {
  return (
    <section className="relative py-32 px-6 z-10 overflow-hidden bg-light-bg">
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-sage-green/10 rounded-full blur-[150px] -z-10"></div>
      
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        <motion.div 
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 1.5 }}
           className="mb-16 text-center"
        >
          <h2 className="font-serif text-5xl md:text-6xl text-text-main mb-6">The Venue</h2>
          <div className="w-24 h-[1px] bg-soft-gold/60 mx-auto"></div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.3 }}
          className="w-full glass-panel-light rounded-[3rem] p-8 md:p-16 text-center relative group min-h-[500px] flex flex-col justify-end overflow-hidden shadow-2xl"
        >
          {/* Parallax background image integrating venue.jpg seamlessly */}
          <div className="absolute inset-0 w-full h-full overflow-hidden rounded-[3rem] -z-10">
             <div className="absolute inset-0 bg-white/70 backdrop-blur-[2px] z-10 transition-colors duration-700 group-hover:bg-white/50"></div>
             <img 
                src={`${import.meta.env.BASE_URL}venue.jpg`} 
                alt="Asirvatham Mahal Venue" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
             />
          </div>

          <div className="relative z-20 bg-white/90 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-sm border border-white mt-48 transition-transform duration-700 group-hover:-translate-y-2">
            <h3 className="font-serif text-4xl md:text-5xl text-text-main mb-6 tracking-wide">Asirvatham Mahal</h3>
            <p className="font-sans text-lg md:text-xl text-text-light max-w-2xl mx-auto leading-relaxed mb-10 tracking-wide">
              1No3, Madambakkam Main Rd, Maruthi Nagar, Madambakkam, Chennai, Tamil Nadu 600073
            </p>

            <a 
              href="https://maps.app.goo.gl/GFym4bJiWEErbfMN7" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-gold inline-block"
            >
              View on Google Maps
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Venue;
