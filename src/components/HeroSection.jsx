import React from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section id="top" className="relative min-h-[100svh] w-full flex items-center justify-center overflow-hidden bg-bg-main">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <motion.img 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: "easeOut" }}
          src="/hero-bg.jpeg" 
          alt="Milan Conventional Center" 
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        {/* Much darker, high-contrast luxury brown overlay for text readability */}
        <div className="absolute inset-0 bg-bg-main/50"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-bg-main via-transparent to-bg-main/50"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-bg-main via-bg-main/60 to-transparent w-full md:w-4/5"></div>
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-20 px-6 md:px-12 pt-28 pb-12 md:pt-32 md:pb-20 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
        
        {/* Text Content */}
        <div className="flex-1 text-center md:text-left mt-8 md:mt-0 drop-shadow-2xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[0.7rem] sm:text-xs tracking-[0.3em] uppercase text-gold-light mb-8 font-semibold"
          >
            <span className="hidden md:inline-block w-8 h-[1px] bg-gold-light/60 align-middle mr-4"></span>
            Chettuva · Thrissur · Kerala
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1] tracking-tight text-white mb-8 drop-shadow-lg"
          >
            <span className="block mb-2 font-medium">Elevate Your Events</span>
            <span className="block italic text-gold-light font-normal drop-shadow-md">with Extraordinary Spaces</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="max-w-2xl mx-auto md:mx-0 text-white/90 text-base md:text-lg leading-relaxed font-light drop-shadow-md"
          >
            Tailored spaces, endlessly adaptable designed around a single vision: making every moment extraordinary.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-12 flex flex-wrap gap-6 justify-center md:justify-start"
          >
            <a href="#booking" className="btn-gold">
              <span>Book Venue</span>
              <ArrowRight size={16} className="ml-3" />
            </a>
            <a href="#spaces" className="btn-outline">
              <span>Explore Spaces</span>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-gold-primary/70 animate-bounce"
      >
        <ChevronDown size={24} strokeWidth={1} />
      </motion.div>
    </section>
  );
}
