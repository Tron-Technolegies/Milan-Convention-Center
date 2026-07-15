import React from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';

export default function HeroSection() {
  return (
    <section id="top" className="relative min-h-[100svh] w-full flex items-center overflow-hidden">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/hero-bg.png" 
          alt="Milan Conventional Center" 
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        {/* Gradients to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-deepblack"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/10 to-black/10"></div>
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-20 px-6 md:px-12 pt-24 pb-20">
        <div className="text-[0.65rem] tracking-[0.25em] uppercase text-gold/80 mb-8 border-l border-gold/40 pl-4">
          Chettuva · Thrissur · Kerala
        </div>
        
        <h1 className="font-display text-5xl sm:text-6xl md:text-8xl lg:text-[8rem] leading-[0.95] tracking-tight text-cream max-w-5xl">
          <span className="block mb-2">Where Grandeur</span>
          <span className="block mb-2">Meets the</span>
          <span className="italic font-light text-gold-gradient">Horizon</span>
        </h1>
        
        <p className="mt-10 max-w-xl text-cream/70 text-sm sm:text-base md:text-lg leading-relaxed font-light">
          43,000 square feet of uncompromising luxury. A landmark convention center set against Kerala's mountain horizon — crafted for weddings, galas, conferences, and the occasions worth remembering.
        </p>
        
        <div className="mt-12 flex flex-wrap gap-4">
          <a href="https://wa.me/917770008435" target="_blank" rel="noopener noreferrer" className="btn-gold">
            <span>WhatsApp for Booking</span>
            <ArrowRight size={14} className="ml-2" />
          </a>
          <a href="tel:+917770008435" className="btn-outline">
            <span>Call Us</span>
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-gold/70 animate-bounce">
        <span className="text-[0.6rem] tracking-[0.3em] uppercase">Scroll</span>
        <ChevronDown size={18} />
      </div>

      {/* Side embellishments */}
      <div className="absolute top-24 right-6 md:right-12 z-20 hidden md:block">
        <div className="w-px h-32 bg-gradient-to-b from-transparent via-gold/50 to-transparent"></div>
      </div>
      
      <div className="absolute bottom-24 right-6 md:right-12 z-20 text-right hidden md:block">
        <div className="text-[0.55rem] tracking-[0.3em] uppercase text-gold/70 mb-1">Established</div>
        <div className="font-display text-2xl text-cream">MMXXVI</div>
      </div>
    </section>
  );
}
