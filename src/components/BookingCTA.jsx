import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CalendarDays, PhoneCall } from 'lucide-react';

export default function BookingCTA() {
  return (
    <section id="booking" className="py-12 md:py-24 bg-bg-secondary relative overflow-hidden">
      
      <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative bg-bg-main border border-gold-primary/10 p-10 md:p-20 text-center overflow-hidden shadow-2xl"
        >
          {/* Decorative background elements inside the card */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[2px] bg-gradient-to-r from-transparent via-gold-light to-transparent opacity-50"></div>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-[2px] bg-gradient-to-r from-transparent via-gold-light to-transparent opacity-50"></div>
          
          <div className="relative z-10">
            <div className="w-16 h-16 mx-auto bg-bg-secondary border border-gold-light/20 rotate-45 flex items-center justify-center mb-10 shadow-lg">
              <CalendarDays className="text-gold-light -rotate-45" size={24} />
            </div>
            
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-white mb-6">
              Reserve Your <span className="italic font-light text-gold-light">Masterpiece</span>
            </h2>
            
            <p className="text-white/80 leading-relaxed font-light max-w-2xl mx-auto mb-12 text-lg">
              Our calendar is currently open for the upcoming season. Connect with our venue specialists to curate your extraordinary event.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a href="https://wa.me/917770008435" target="_blank" rel="noopener noreferrer" className="btn-gold group w-full sm:w-auto">
                <span>Book via WhatsApp</span>
                <ArrowRight size={16} className="ml-3 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="tel:+917770008435" className="btn-outline border-white text-white hover:bg-white hover:text-brown-deep hover:border-white group w-full sm:w-auto flex items-center justify-center gap-3">
                <PhoneCall size={16} />
                <span>+91 77700 08435</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
