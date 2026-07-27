import React from 'react';
import { motion } from 'framer-motion';

const images = [
  "/img-3.jpeg",
  "/img-4.jpeg",
  "/img-5.jpeg",
  "/img-6.jpeg"
];

export default function GallerySection() {
  return (
    <section id="gallery" className="py-12 md:py-24 bg-bg-secondary relative">
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16 md:mb-24">
          <div className="text-[0.65rem] tracking-[0.3em] uppercase text-gold-light mb-6">
            Visual Journey
          </div>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-white">
            The <span className="italic font-light text-gold-light">Gallery</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4">
          {images.map((src, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative overflow-hidden rounded-sm group shadow-xl aspect-[4/5] md:aspect-[3/4]"
            >
              <img 
                src={src} 
                alt={`Gallery ${index + 1}`} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brown-deep/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a href="#contact" className="btn-outline border-white text-white hover:bg-white hover:text-brown-warm hover:border-white">
            <span>View All Spaces</span>
          </a>
        </div>
      </div>
    </section>
  );
}
