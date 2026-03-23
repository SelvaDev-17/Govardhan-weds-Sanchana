import React from 'react';
import { motion } from 'framer-motion';

const InvitationText = () => {
  return (
    <section className="relative w-full py-24 md:py-32 px-6 flex items-center justify-center z-20 overflow-hidden">
      {/* Decorative neon blur elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-neon-purple/20 rounded-full blur-[100px] -z-10"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-neon-pink/10 rounded-full blur-[80px] -z-10"></div>
      
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.2 }}
        className="max-w-3xl mx-auto text-center glass-panel rounded-3xl p-8 md:p-16 border border-white/5 relative shadow-2xl"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-neon-gold to-transparent"></div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-neon-gold to-transparent"></div>

        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ delay: 0.3, duration: 1 }}
        >
          <p className="font-serif text-lg md:text-2xl text-white/90 leading-relaxed md:leading-loose text-shadow-sm">
            <span className="text-neon-gold font-medium  text-glow-gold">Mr. A. Singaram</span> &amp; <span className="text-neon-gold font-medium text-glow-gold">Mrs. S. Jayalakshmi</span>
            <br className="hidden md:block"/> request the honour of your presence<br className="hidden md:block"/> with your family and friends<br/> on the marriage occasion of their son
          </p>

          <div className="my-10 flex flex-col items-center justify-center space-y-4">
             <h3 className="font-serif text-3xl md:text-5xl text-glow-gold text-white drop-shadow-md">S. Govardan</h3>
             <span className="text-neon-pink italic font-serif text-xl md:text-2xl">with</span>
             <h3 className="font-serif text-3xl md:text-5xl text-glow-gold text-white drop-shadow-md">U. Sanchana</h3>
          </div>
        </motion.div>

        <div className="w-16 h-16 mx-auto mt-8 opacity-50 relative">
          <div className="absolute inset-0 border border-neon-pink rounded-full blur-sm"></div>
          <div className="absolute inset-2 border-[0.5px] border-neon-gold rounded-full rotate-45"></div>
          <div className="absolute inset-4 bg-neon-purple rounded-full blur-md"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default InvitationText;
