import React from 'react';
import { motion } from 'framer-motion';

export default function AboutSection() {
  return (
    <section id="about" className="relative py-24 md:py-32 bg-bg-secondary overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
        
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-6"
        >
          <div className="text-[0.65rem] tracking-[0.3em] uppercase text-gold-light mb-8 border-l border-gold-light/40 pl-4">
            Our Story
          </div>
          
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl leading-[1.05] text-text-primary mb-8">
            A new landmark for celebrations and <span className="italic font-light text-gold-light">grand occasions</span>
          </h2>
          
          <div className="space-y-6 max-w-xl text-white/80 leading-relaxed font-light">
            <p>
              Anchored in Chettuva, Thrissur, Milan spans 43,000 square feet of purposefully sculpted space. From soaring glass entryways to warm, acoustic woodwork, every square foot is engineered to lend an undeniable sense of grandeur to your occasion.
            </p>
          </div>
          
          <div className="mt-14 grid grid-cols-2 gap-8">
            <div className="border-t border-gold-primary/20 pt-5">
              <div className="font-display text-4xl text-gold-light">43K</div>
              <div className="mt-2 text-[0.65rem] tracking-[0.2em] uppercase text-white/70">Square Feet</div>
            </div>
            <div className="border-t border-gold-primary/20 pt-5">
              <div className="font-display text-4xl text-gold-light">1000+</div>
              <div className="mt-2 text-[0.65rem] tracking-[0.2em] uppercase text-white/70">Dining Capacity</div>
            </div>
            <div className="border-t border-gold-primary/20 pt-5">
              <div className="font-display text-4xl text-gold-light">400+</div>
              <div className="mt-2 text-[0.65rem] tracking-[0.2em] uppercase text-white/70">Parking Spaces</div>
            </div>
            <div className="border-t border-gold-primary/20 pt-5">
              <div className="font-display text-4xl text-gold-light">5</div>
              <div className="mt-2 text-[0.65rem] tracking-[0.2em] uppercase text-white/70">Signature Spaces</div>
            </div>
          </div>
        </motion.div>
        
        {/* Asymmetrical Image Layout */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-6 relative"
        >
          <div className="relative aspect-[4/5] w-full overflow-hidden border border-gold-primary/20 shadow-2xl">
            <img 
              src="/img-1.jpeg" 
              alt="Milan Architecture" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 border-[0.5px] border-gold-primary/30 pointer-events-none z-10 m-4"></div>
            {/* Subtle warm overlay on image */}
            <div className="absolute inset-0 bg-brown-dark/10 pointer-events-none z-10"></div>
          </div>
          
          {/* Floating Experience Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="absolute -bottom-8 -left-8 bg-white/5 backdrop-blur-md border border-white/10 shadow-2xl p-6 w-64 hidden sm:block"
          >
            <div className="font-display text-6xl text-gold-light leading-none mb-2">15+</div>
            <div className="text-[0.65rem] tracking-[0.2em] uppercase text-white/80">Years of Excellence</div>
            <p className="mt-3 text-xs text-white/60 font-light">Crafting unforgettable moments in luxury spaces.</p>
          </motion.div>
          
        </motion.div>
        
      </div>
    </section>
  );
}
