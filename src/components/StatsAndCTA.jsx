import React from 'react';
import { motion } from 'framer-motion';

export default function StatsAndCTA() {
  const stats = [
    { value: "1+", label: "Years of Experience" },
    { value: "99%", label: "Client Satisfaction" },
    { value: "100%", label: "Dedication to Quality" },
  ];

  return (
    <section className="bg-bg-main py-20 pb-32">
      <div className="max-w-5xl mx-auto px-6 md:px-12 text-center">
        
        {/* Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
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

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <a href="#about" className="btn-outline px-12 py-5 text-xs">
            Learn About Us
          </a>
        </motion.div>
        
      </div>
    </section>
  );
}
