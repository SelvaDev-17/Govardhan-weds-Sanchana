import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0, hours: 0, minutes: 0, seconds: 0
  });

  useEffect(() => {
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
    <div className="flex flex-col items-center justify-center p-4 md:p-8 glass-card-light rounded-3xl mx-2 w-20 md:w-36 transition-transform duration-500 hover:-translate-y-2 hover:shadow-[0_15px_40px_-15px_rgba(197,164,126,0.3)]">
      <span className="text-3xl md:text-5xl font-serif text-text-main mb-2 md:mb-3 font-light">{value}</span>
      <span className="text-[10px] md:text-sm font-sans tracking-[0.2em] text-text-light uppercase font-medium">{label}</span>
    </div>
  );

  return (
    <section className="relative w-full py-32 bg-light-bg overflow-hidden flex flex-col items-center">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cream rounded-full blur-[120px] pointer-events-none"></div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="text-center z-10 px-4"
      >
        <h2 className="text-3xl md:text-5xl font-serif text-text-main mb-6 tracking-wide font-normal">Our forever begins soon</h2>
        <div className="w-32 h-[1px] bg-gradient-to-r from-transparent via-soft-gold to-transparent mx-auto mb-16 opacity-60"></div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, delay: 0.3 }}
        className="flex justify-center z-10 w-full px-4"
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
