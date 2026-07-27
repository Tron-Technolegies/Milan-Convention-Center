import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

const events = [
  {
    id: '01',
    category: 'GRAND CELEBRATIONS',
    name: 'Weddings & Receptions',
    description: 'Engineered for cinematic keynotes, major conventions, and landmark ceremonies, the space features warm timber-coffered ceilings, precision acoustic geometric paneling, and plush tiered auditorium seating.',
    capacity: 'Large Events',
    image: '/img-7.jpeg'
  },
  {
    id: '02',
    category: 'CORPORATE',
    name: 'Summits & Conferences',
    description: 'Designed for grand feasts and high-end receptions, this flexible dining pavilion combines warm geometric grid illumination with tailored round-table arrangements and integrated live culinary counters.',
    capacity: '700+',
    image: '/img-8.jpeg'
  }
];

export default function EventTypes() {
  return (
    <section id="events" className="relative py-12 md:py-24 bg-bg-main overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-4xl mb-16 md:mb-24">
          <div className="text-[0.65rem] tracking-[0.3em] uppercase text-gold-light mb-6 border-l border-gold-light/40 pl-4">
            Curated Experiences
          </div>
          
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] text-white">
            Event <span className="italic text-gold-gradient">Types</span>
          </h2>
        </div>

        <div className="space-y-24 md:space-y-32">
          {events.map((event, index) => {
            const isEven = index % 2 === 0;
            return (
              <div 
                key={event.id} 
                className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-20 items-center group`}
              >
                {/* Image */}
                <motion.div 
                  initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="w-full lg:w-1/2 relative aspect-[4/3] overflow-hidden shadow-2xl"
                >
                  <img 
                    src={event.image} 
                    alt={event.name} 
                    className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105"
                  />
                  <div className="absolute inset-0 border border-gold-primary/20 pointer-events-none z-10 m-4 transition-all duration-500 group-hover:m-6 group-hover:border-gold-light/40"></div>
                  <div className="absolute inset-0 bg-brown-dark/10 pointer-events-none z-10"></div>
                </motion.div>

                {/* Content */}
                <motion.div 
                  initial={{ opacity: 0, x: isEven ? 30 : -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="w-full lg:w-1/2"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <span className="font-display text-4xl text-gold-primary/30 group-hover:text-gold-light transition-colors duration-500">{event.id}</span>
                    <div className="h-px flex-1 bg-gold-primary/20"></div>
                  </div>
                  
                  <div className="text-[0.65rem] tracking-[0.25em] uppercase text-gold-light/80 mb-3">
                    {event.category}
                  </div>
                  
                  <h3 className="font-display text-3xl md:text-4xl lg:text-5xl text-white mb-6">
                    {event.name}
                  </h3>
                  
                  <p className="text-white/70 font-light leading-relaxed mb-10 text-lg">
                    {event.description}
                  </p>
                  
                  <div className="flex items-center justify-between border-t border-gold-primary/20 pt-6">
                    <div>
                      <div className="text-[0.55rem] tracking-[0.25em] uppercase text-white/60">Capacity</div>
                      <div className="text-gold-light mt-1">{event.capacity}</div>
                    </div>
                    <a href="#booking" className="flex items-center gap-3 text-[0.7rem] tracking-[0.2em] uppercase text-white hover:text-gold-light transition-colors group/link">
                      <span>Explore</span>
                      <span className="w-8 h-8 rounded-full border border-gold-primary/30 flex items-center justify-center group-hover/link:border-gold-light group-hover/link:bg-gold-light group-hover/link:text-brown-deep transition-all">
                        <ArrowUpRight size={14} />
                      </span>
                    </a>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
