import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Volume2, VolumeX } from 'lucide-react';

export const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-pastel-peach via-pastel-pink to-pastel-gold origin-left z-50 shadow-sm"
      style={{ scaleX }}
    />
  );
};

export const MusicToggle = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    // Note: Provide an actual file or let user provide it in public folder
    audioRef.current = new Audio(`${import.meta.env.BASE_URL}music_trimmed.mp3`);
    audioRef.current.loop = true;
    audioRef.current.volume = 0.5;
  }, []);

  const toggleMusic = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(e => console.log('Audio play failed', e));
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <motion.button
      onClick={toggleMusic}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="fixed top-6 right-6 z-50 p-3 rounded-full glass-card-pastel text-text-main hover:text-text-light transition-colors duration-300 shadow-md border border-white/80"
      aria-label="Toggle background music"
    >
      {isPlaying ? <Volume2 size={22} /> : <VolumeX size={22} />}
    </motion.button>
  );
};

export const Particles = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          initial={{
            y: "110vh",
            x: Math.random() * 100 + "vw",
            opacity: Math.random() * 0.4 + 0.1,
            scale: Math.random() * 0.5 + 0.5,
          }}
          animate={{
            y: "-10vh",
            x: `calc(${Math.random() * 100}vw + ${Math.random() * 100 - 50}px)`,
            rotate: Math.random() * 360,
          }}
          transition={{
            duration: Math.random() * 12 + 15,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute w-3 h-3 rounded-full bg-pastel-pink shadow-[0_0_15px_rgba(244,214,210,0.6)]"
          style={{ filter: "blur(2px)" }}
        />
      ))}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={`gold-${i}`}
          initial={{
            y: "-10vh",
            x: Math.random() * 100 + "vw",
            opacity: Math.random() * 0.3 + 0.1,
            scale: Math.random() * 0.8 + 0.4,
          }}
          animate={{
            y: "110vh",
            x: `calc(${Math.random() * 100}vw + ${Math.random() * 100 - 50}px)`,
            rotate: Math.random() * -360,
          }}
          transition={{
            duration: Math.random() * 18 + 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute w-4 h-4 rounded-full bg-pastel-gold shadow-[0_0_15px_rgba(210,180,140,0.4)]"
          style={{ filter: "blur(3px)" }}
        />
      ))}
    </div>
  );
};
