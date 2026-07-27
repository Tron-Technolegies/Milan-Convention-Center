import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function StatsAndCTA() {
  const stats = [
    { value: "1+", label: "Years of Experience" },
    { value: "99%", label: "Client Satisfaction" },
    { value: "100%", label: "Dedication to Quality" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % stats.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [stats.length]);

  return (
    <section className="bg-bg-main py-12 md:py-20 pb-16 md:pb-32">
      <div className="max-w-5xl mx-auto px-6 md:px-12 text-center">
        
        {/* Stats Row - Desktop */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
          {stats.map((stat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="flex flex-col items-center"
            >
              <div className="font-display text-5xl md:text-6xl text-text-primary mb-4">
                {stat.value}
              </div>
              <div className="text-text-secondary text-sm tracking-wide font-light">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Row - Mobile (Auto-rotating) */}
        <div className="md:hidden relative h-32 flex items-center justify-center mb-12">
          <AnimatePresence mode="wait">
            <motion.div 
              key={currentIndex}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col items-center absolute inset-0 justify-center"
            >
              <div className="font-display text-5xl text-text-primary mb-2">
                {stats[currentIndex].value}
              </div>
              <div className="text-text-secondary text-sm tracking-wide font-light">
                {stats[currentIndex].label}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <a href="#about" className="btn-outline px-10 py-4 text-xs md:px-12 md:py-5">
            Learn About Us
          </a>
        </motion.div>
        
      </div>
    </section>
  );
}
