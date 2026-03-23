import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0, hours: 0, minutes: 0, seconds: 0
  });

  useEffect(() => {
    // April 20, 2026 06:00:00
    const targetDate = new Date('2026-04-20T06:00:00').getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const TimeBlock = ({ value, label }) => (
    <div className="flex flex-col items-center justify-center p-3 md:p-6 glass-card-neon rounded-2xl mx-1 w-[72px] md:w-32 border-neon-purple/40">
      <span className="text-2xl md:text-5xl font-serif text-neon-gold text-glow-gold mb-1 md:mb-2">{value}</span>
      <span className="text-[10px] md:text-sm font-sans tracking-widest text-white uppercase opacity-80">{label}</span>
    </div>
  );

  return (
    <section className="relative w-full py-20 bg-deep-bg overflow-hidden flex flex-col items-center">
      {/* Background neon blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-neon-pink/10 rounded-full blur-[100px] pointer-events-none"></div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="text-center z-10"
      >
        <h2 className="text-2xl md:text-5xl font-serif text-white mb-4 tracking-wide text-glow-gold">The Wait Is Ending</h2>
        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-neon-pink to-transparent mx-auto mb-12"></div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2 }}
        className="flex justify-center z-10 w-full px-2"
      >
        <TimeBlock value={timeLeft.days} label="Days" />
        <TimeBlock value={timeLeft.hours} label="Hours" />
        <TimeBlock value={timeLeft.minutes} label="Mins" />
        <TimeBlock value={timeLeft.seconds} label="Secs" />
      </motion.div>
    </section>
  );
};

export default Countdown;
