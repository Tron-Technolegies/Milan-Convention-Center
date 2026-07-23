import React from 'react';
import { motion } from 'framer-motion';
import { Star, Wine, Camera, Music, Coffee, Map } from 'lucide-react';

const facilities = [
  {
    title: 'Bespoke Interiors',
    description: 'Thoughtfully detailed finishes designed to bring editorial polish to grand weddings and milestone celebrations.',
    icon: Star
  },
  {
    title: 'Climate Control',
    description: 'The region’s largest fully air-conditioned complex, delivering silent, balanced comfort across every hall.',
    icon: Wine
  },
  {
    title: 'Reception Atrium',
    description: 'An expansive double-height foyer curated for fluid guest movement and an unforgettable opening statement.',
    icon: Map
  },
  {
    title: 'Performance Tech',
    description: 'State-of-the-art media systems paired with precision geometric acoustic paneling for pristine audio delivery.',
    icon: Music
  },
  {
    title: 'Culinary Excellence',
    description: 'Integrated live culinary counters and flexible dining pavilions designed for high-capacity, effortless service.',
    icon: Coffee
  },
  {
    title: 'Scenic Backdrops',
    description: 'Surrounded by the natural beauty of Chettuva, offering picturesque settings for outdoor photography.',
    icon: Camera
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function FacilitiesSection() {
  return (
    <section id="facilities" className="relative py-24 md:py-32 bg-bg-main overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16 md:mb-24"
        >
          <div className="text-[0.65rem] tracking-[0.3em] uppercase text-gold-light mb-6">
            The Milan Difference
          </div>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-white mb-8">
            Venue <span className="italic font-light text-gold-light">Highlights</span>
          </h2>
          <p className="text-white/70 font-light leading-relaxed">
            Every square foot is engineered to lend an undeniable sense of grandeur to your occasion.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {facilities.map((facility, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className="group relative p-8 md:p-10 bg-white/5 backdrop-blur-md border border-white/10 hover:border-white/20 hover:-translate-y-1 transition-all duration-500 overflow-hidden shadow-xl"
            >
              {/* Subtle background glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-gold-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="text-[3rem] font-display text-white/5 absolute -top-4 -right-0 font-bold select-none group-hover:text-gold-primary/10 transition-colors duration-500">
                {(index + 1).toString().padStart(2, '0')}
              </div>
              
              <div className="relative z-10 w-12 h-12 flex items-center justify-center text-gold-light mb-8 border border-gold-primary/30 rounded-full transition-transform duration-500 group-hover:scale-110 group-hover:bg-gold-primary/10">
                <facility.icon strokeWidth={1} size={24} />
              </div>
              
              <h3 className="relative z-10 font-display text-2xl text-white mb-4 group-hover:text-gold-light transition-colors duration-300">
                {facility.title}
              </h3>
              
              <p className="relative z-10 text-white/70 text-sm leading-relaxed font-light">
                {facility.description}
              </p>
              
              {/* Animated bottom border */}
              <div className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-gold-primary to-gold-light w-0 group-hover:w-full transition-all duration-700 ease-out"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
