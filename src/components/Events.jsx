import React from 'react';
import { motion } from 'framer-motion';

const Events = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (custom) => ({
      opacity: 1, y: 0, transition: { delay: custom * 0.3, duration: 0.8, ease: "easeOut" }
    })
  };

  const EventCard = ({ title, date, time, custom }) => (
    <motion.div
      custom={custom}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ scale: 1.02 }}
      className="glass-card-pastel rounded-[2rem] p-8 md:p-12 text-center w-full max-w-md mx-auto relative overflow-hidden group border border-white/80 shadow-xl"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      <div className="w-16 h-16 mx-auto bg-pastel-pink/30 rounded-full flex items-center justify-center mb-6 border border-pastel-pink/50 shadow-sm relative z-10 transition-transform duration-500 group-hover:rotate-12">
        <span className="text-pastel-gold text-2xl drop-shadow-sm">✨</span>
      </div>

      <h3 className="font-serif text-3xl md:text-4xl text-text-main mb-4 drop-shadow-sm">{title}</h3>
      <div className="space-y-2 font-sans text-text-light">
        <p className="text-lg tracking-wider text-text-main font-medium">{date}</p>
        <p className="font-light">{time}</p>
      </div>
    </motion.div>
  );

  return (
    <section className="py-24 px-6 relative z-10 bg-pastel-bg">
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        <motion.div 
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           className="mb-16 text-center"
        >
          <h2 className="font-serif text-4xl md:text-5xl text-text-main mb-4">Wedding Events</h2>
          <div className="w-16 h-[2px] bg-pastel-pink mx-auto rounded-full"></div>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-8 justify-center w-full">
           <EventCard title="Reception" date="Sunday, April 19, 2026" time="7:00 PM onwards" custom={1} />
           <EventCard title="Muhurtham" date="Monday, April 20, 2026" time="6:00 AM – 7:30 AM" custom={2} />
        </div>
      </div>
    </section>
  );
};

export default Events;
