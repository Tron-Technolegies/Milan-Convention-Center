import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function PortfolioCarousel() {
  const images = [
    '/img-1.jpeg',
    '/img-2.jpeg',
    '/img-3.jpeg',
    '/img-4.jpeg',
    '/img-5.jpeg',
    '/img-6.jpeg',
    '/img-7.jpeg',
    '/img-8.jpeg',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  // Determine the three images to show based on currentIndex
  const visibleImages = [
    images[currentIndex],
    images[(currentIndex + 1) % images.length],
    images[(currentIndex + 2) % images.length]
  ];

  return (
    <section className="bg-bg-main py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="mb-16 max-w-2xl">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl text-text-primary mb-6"
          >
            Refined and Contemporary
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-text-secondary font-light text-base md:text-lg"
          >
            Stunning spaces designed to inspire simplicity and elegance.
          </motion.p>
        </div>

        {/* Carousel Container */}
        <div className="relative group">
          
          {/* Navigation Buttons */}
          <button 
            onClick={handlePrev}
            className="absolute -left-4 md:-left-12 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-bg-secondary border border-gold-primary/20 text-gold-primary hover:bg-gold-primary hover:text-bg-main transition-colors"
          >
            <ChevronLeft size={20} />
          </button>

          <button 
            onClick={handleNext}
            className="absolute -right-4 md:-right-12 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-bg-secondary border border-gold-primary/20 text-gold-primary hover:bg-gold-primary hover:text-bg-main transition-colors"
          >
            <ChevronRight size={20} />
          </button>

          {/* Images Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 overflow-hidden">
            <AnimatePresence mode="popLayout">
              {visibleImages.map((src, idx) => (
                <motion.div
                  key={`${currentIndex}-${idx}`}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="relative aspect-[4/5] overflow-hidden"
                >
                  {/* Fallback styling in case image doesn't exist yet */}
                  <div className="absolute inset-0 bg-bg-secondary"></div>
                  <img 
                    src={src} 
                    alt={`Portfolio view ${idx + 1}`}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.innerHTML = '<div class="absolute inset-0 bg-bg-secondary flex flex-col items-center justify-center border border-gold-primary/10"><div class="text-gold-primary/30 font-display text-2xl">Image ' + (idx + 1) + '</div></div>';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-main/80 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
          
          {/* Pagination Dots */}
          <div className="flex justify-center gap-3 mt-12">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  idx === currentIndex 
                    ? 'bg-gold-primary w-6' 
                    : 'bg-gold-primary/30 hover:bg-gold-primary/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
