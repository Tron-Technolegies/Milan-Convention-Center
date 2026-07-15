import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const spaces = [
  {
    id: '01',
    category: 'Main Hall',
    name: 'The Summit',
    description: 'The grand central hall. A soaring volume beneath cantilevered wooden ceilings, where weddings, galas and conferences unfold on a single, cinematic scale.',
    capacity: 'Up to 1,000 guests',
    colSpan: 'col-span-1 md:col-span-1 lg:col-span-1'
  },
  {
    id: '02',
    category: 'Mezzanine Balcony',
    name: 'The Ridge',
    description: 'An elegant upper-level gallery overlooking the Summit — reserved for cocktail hours, private vows and a sweeping view of every ceremony below.',
    capacity: '150 seated',
    colSpan: 'col-span-1 md:col-span-1 lg:col-span-1'
  },
  {
    id: '03',
    category: 'Fine Dining',
    name: 'The Crest',
    description: 'A banquet-scale dining pavilion backed by full-service kitchens and bespoke catering — seating that flexes from a hundred guests to over a thousand.',
    capacity: '1,000+ seated dining',
    colSpan: 'col-span-1 md:col-span-1 lg:col-span-1'
  },
  {
    id: '04',
    category: 'VIP & Bridal Suites',
    name: 'The Pinnacle',
    description: 'Private salons and bridal studios appointed in cream, gold and copper — a quiet retreat reserved for the guests at the heart of the day.',
    capacity: 'Intimate gatherings',
    colSpan: 'col-span-1 md:col-span-1 lg:col-span-1'
  },
  {
    id: '05',
    category: 'Outdoor Venue',
    name: 'The Horizon',
    description: 'An expansive outdoor terrace and landscaped garden framing the distant mountain range. Designed for twilight receptions, open-air ceremonies, and gatherings under the open sky.',
    capacity: '800+ guests',
    colSpan: 'col-span-1 md:col-span-2 lg:col-span-2'
  }
];

export default function SpacesSection() {
  return (
    <section id="spaces" className="relative py-24 md:py-32 bg-deepblack overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-charcoal/30 to-transparent pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-4xl mb-16 md:mb-24">
          <div className="text-[0.65rem] tracking-[0.25em] uppercase text-gold mb-6 border-l border-gold/40 pl-4">
            The Spaces
          </div>
          
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] text-cream">
            Five signature spaces.<br/>
            <span className="italic font-light text-gold-gradient">One extraordinary venue.</span>
          </h2>
          
          <p className="mt-8 max-w-2xl text-base text-cream/60 leading-relaxed font-light">
            Each space at Milan is a stage for a distinct kind of occasion — the grand and the intimate, the ceremonial and the free-spirited — composed around a single idea: the moment matters most.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {spaces.map((space) => (
            <div 
              key={space.id} 
              className={`group relative border border-gold/15 bg-gradient-to-b from-charcoal/60 to-deepblack overflow-hidden ${space.colSpan}`}
            >
              {/* Image Placeholder */}
              <div className="relative h-64 md:h-80 overflow-hidden bg-maroon/20">
                <div className="absolute inset-0 bg-gradient-to-t from-deepblack via-deepblack/40 to-transparent z-10"></div>
                <div className="absolute top-6 left-6 font-display text-5xl text-gold/40 z-20">{space.id}</div>
                
                {/* Abstract geometric background to replace image */}
                <div className="absolute inset-0 opacity-20 group-hover:scale-110 transition-transform duration-[1.5s] ease-out flex items-center justify-center">
                  <div className="w-full h-full border-[0.5px] border-gold/50 rounded-full scale-[1.5]"></div>
                  <div className="w-full h-full border-[0.5px] border-gold/30 rounded-full scale-[1.2] absolute"></div>
                </div>
              </div>

              {/* Content */}
              <div className="relative z-20 p-6 md:p-8 -mt-20">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <div className="text-[0.6rem] tracking-[0.25em] uppercase text-gold mb-2">
                      {space.category}
                    </div>
                    <h3 className="font-display text-3xl md:text-4xl text-cream group-hover:text-gold-gradient transition-all">
                      {space.name}
                    </h3>
                  </div>
                  
                  <div className="shrink-0 w-10 h-10 border border-gold/30 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-deepblack transition-all duration-500">
                    <ArrowUpRight size={20} />
                  </div>
                </div>
                
                <p className="text-cream/60 text-sm leading-relaxed font-light mb-6">
                  {space.description}
                </p>
                
                <div className="flex items-center justify-between pt-5 border-t border-gold/10">
                  <div>
                    <div className="text-[0.55rem] tracking-[0.22em] uppercase text-cream/50">Capacity</div>
                    <div className="text-sm text-gold mt-1">{space.capacity}</div>
                  </div>
                  <a href="#contact" className="text-[0.65rem] tracking-[0.22em] uppercase text-cream/70 hover:text-gold transition-colors">
                    Reserve &rarr;
                  </a>
                </div>
              </div>

              {/* Hover Border Effect */}
              <div className="absolute inset-0 border border-gold/0 group-hover:border-gold/50 transition-colors duration-500 pointer-events-none z-30"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
