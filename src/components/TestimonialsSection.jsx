import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    text: "The grandeur of Milan is simply unmatched. The bespoke interior and attention to detail made our wedding day an absolute dream. The hospitality team ensured everything was flawless.",
    author: "Anjali & Rahul",
    event: "Wedding Celebration"
  },
  {
    text: "Hosting our annual corporate summit at Milan was our best decision. The expansive spaces and integrated performance technology handled our 800+ attendees seamlessly.",
    author: "K. Menon",
    event: "Corporate Summit"
  }
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-12 md:py-24 bg-bg-main relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16 md:mb-24">
          <div className="text-[0.65rem] tracking-[0.3em] uppercase text-gold-light mb-6">
            Words of Praise
          </div>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-white">
            Client <span className="italic font-light text-gold-light">Testimonials</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {testimonials.map((t, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative p-10 md:p-14 bg-white/5 backdrop-blur-md border border-white/10 hover:border-white/20 transition-colors duration-500 shadow-2xl"
            >
              <Quote className="text-gold-light/20 w-12 h-12 mb-6" />
              <p className="font-display text-xl md:text-2xl text-white leading-relaxed mb-10">
                "{t.text}"
              </p>
              
              <div className="flex items-center gap-4 border-t border-gold-primary/20 pt-6">
                <div className="w-12 h-12 rounded-full bg-gold-primary/20 flex items-center justify-center text-gold-light font-display text-xl border border-gold-primary/30">
                  {t.author.charAt(0)}
                </div>
                <div>
                  <div className="text-white font-semibold">{t.author}</div>
                  <div className="text-[0.65rem] tracking-[0.2em] uppercase text-gold-light mt-1">{t.event}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
