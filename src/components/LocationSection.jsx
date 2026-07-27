import React from 'react';
import { motion } from 'framer-motion';

export default function LocationSection() {
  return (
    <section className="relative bg-bg-main py-10 md:py-24 border-t border-gold-primary/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-[0.65rem] tracking-[0.3em] uppercase text-gold-light mb-4 border-l border-gold-light/40 pl-4">
              Location
            </div>
            <h2 className="font-display text-3xl md:text-5xl text-white">
              Find Us In <span className="italic font-light text-gold-light">Chettuva</span>
            </h2>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-sm text-white/70 max-w-sm font-light leading-relaxed"
          >
            Easily accessible from Thrissur and surrounding areas, our convention centre offers an idyllic setting for your events.
          </motion.div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative w-full h-[400px] md:h-[500px] border border-gold-primary/30 grayscale hover:grayscale-0 transition-all duration-700 opacity-80 hover:opacity-100 shadow-2xl"
        >
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.545882515411!2d76.0536255!3d10.525490099999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba793001ea6bc15%3A0xe802bb1dec76a6e6!2sMILAN%20INTERNATIONAL%20CONVENTION%20CENTER!5e1!3m2!1sen!2sin!4v1784108615366!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Milan Conventional Center Location"
          ></iframe>
          
          {/* Subtle overlay when not hovered to blend with site design */}
          <div className="absolute inset-0 bg-brown-deep/40 pointer-events-none transition-opacity duration-500 hover:opacity-0"></div>
        </motion.div>
        
      </div>
    </section>
  );
}
