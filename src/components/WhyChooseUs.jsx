import React from 'react';
import { motion } from 'framer-motion';

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-24 md:py-32 bg-bg-secondary relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* Text Side */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-[0.65rem] tracking-[0.3em] uppercase text-gold-light mb-6 border-l border-gold-light/40 pl-4">
            The Milan Difference
          </div>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-white mb-8 leading-[1.1]">
            Why Choose <span className="italic text-gold-light">Milan</span>
          </h2>
          <p className="text-white/80 leading-relaxed font-light mb-10">
            We believe that every detail matters. From the architectural grandeur of our spaces to the impeccable service provided by our dedicated team, Milan Convention Centre is designed to elevate your events beyond the ordinary.
          </p>

          <ul className="space-y-6">
            {[
              "Unmatched Architectural Elegance",
              "State-of-the-art Infrastructure",
              "Dedicated Event Management",
              "Exclusive Culinary Experiences"
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-4 text-white">
                <div className="w-1.5 h-1.5 rounded-full bg-gold-primary border border-gold-light"></div>
                <span className="font-light tracking-wide">{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Image Side */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative aspect-square w-full"
        >
          <div className="absolute inset-4 border border-gold-primary/30 z-0 transform translate-x-4 translate-y-4"></div>
          <img 
            src="/img-2.jpeg" 
            alt="Luxury details" 
            className="absolute inset-0 w-full h-full object-cover z-10 shadow-2xl"
          />
          <div className="absolute inset-0 bg-brown-dark/10 pointer-events-none z-20"></div>
        </motion.div>

      </div>
    </section>
  );
}
