import React from 'react';
import { motion } from 'framer-motion';

const InvitationText = () => {
  return (
    <section className="relative w-full py-32 md:py-48 px-6 flex items-center justify-center z-20 overflow-hidden bg-transparent">
      {/* Soft daylight background glows */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-cream rounded-full blur-[100px] -z-10"></div>
      <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-blush-pink/20 rounded-full blur-[120px] -z-10"></div>
      
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="max-w-4xl mx-auto text-center glass-panel-light rounded-[3rem] p-12 md:p-24 relative"
      >
        {/* Decorative gold floral dividers */}
        <div className="absolute top-8 left-1/2 -translate-x-1/2 w-32 h-[1px] bg-gradient-to-r from-transparent via-soft-gold/80 to-transparent"></div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-32 h-[1px] bg-gradient-to-r from-transparent via-soft-gold/80 to-transparent"></div>

        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ delay: 0.4, duration: 1.5 }}
        >
          <p className="font-serif text-xl md:text-3xl text-text-light leading-relaxed md:leading-[2.5] tracking-wide mb-16">
            <span className="text-text-main font-semibold">Mr. A. Singaram</span> &amp; <span className="text-text-main font-semibold">Mrs. S. Jayalakshmi</span>
            <br className="hidden md:block"/> request the honour of your presence<br className="hidden md:block"/> with your family and friends<br/> on the marriage occasion of their son
          </p>

          <div className="my-16 flex flex-col items-center justify-center space-y-6">
             <h3 className="font-serif text-5xl md:text-6xl text-text-main tracking-wide">S. Govardan</h3>
             <span className="text-soft-gold italic font-serif text-3xl md:text-4xl">with</span>
             <h3 className="font-serif text-5xl md:text-6xl text-text-main tracking-wide">U. Sanchana</h3>
          </div>
        </motion.div>

        {/* Minimalist ornamental seal */}
        <div className="w-12 h-12 mx-auto mt-12 opacity-80 relative flex items-center justify-center">
          <div className="absolute inset-0 border-[0.5px] border-soft-gold rotate-45"></div>
          <div className="absolute inset-1 border border-sage-green/30 rounded-full"></div>
          <div className="w-2 h-2 bg-soft-gold rounded-full"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default InvitationText;
