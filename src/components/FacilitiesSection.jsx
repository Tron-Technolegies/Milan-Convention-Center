import React from 'react';
import { Car, Wifi, Utensils, Shield, Wind, Accessibility } from 'lucide-react';

const facilities = [
  {
    icon: Car,
    title: 'Extensive Parking',
    description: 'Valet-assisted parking for over 400 vehicles, ensuring seamless arrival for all your guests.'
  },
  {
    icon: Utensils,
    title: 'Gourmet Catering',
    description: 'State-of-the-art industrial kitchens capable of serving 1,000+ guests with bespoke culinary experiences.'
  },
  {
    icon: Wind,
    title: 'Climate Control',
    description: 'Fully air-conditioned halls and dining areas to keep you comfortable regardless of the season.'
  },
  {
    icon: Shield,
    title: '24/7 Security',
    description: 'Comprehensive surveillance and on-ground security personnel ensuring a safe, private event.'
  },
  {
    icon: Wifi,
    title: 'High-Speed Connectivity',
    description: 'Complimentary high-speed Wi-Fi across the venue to keep your events and guests connected.'
  },
  {
    icon: Accessibility,
    title: 'Universal Access',
    description: 'Wheelchair accessible ramps, elevators, and dedicated facilities designed for all guests.'
  }
];

export default function FacilitiesSection() {
  return (
    <section id="facilities" className="relative py-24 md:py-32 bg-deepblack overflow-hidden border-t border-gold/10">
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 to-transparent pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <div className="text-[0.65rem] tracking-[0.25em] uppercase text-gold mb-6">
            World-Class Amenities
          </div>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-cream mb-6">
            Uncompromising <span className="italic font-light text-gold-gradient">Facilities</span>
          </h2>
          <p className="text-cream/60 text-base leading-relaxed font-light">
            Every detail at Milan has been thoughtfully curated to provide an effortless, luxurious experience from the moment your first guest arrives.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {facilities.map((facility, index) => (
            <div key={index} className="group p-8 border border-gold/10 hover:border-gold/30 bg-charcoal/20 hover:bg-charcoal/40 transition-all duration-500">
              <div className="w-12 h-12 flex items-center justify-center text-gold mb-6 bg-gold/5 group-hover:bg-gold/10 rounded-full transition-colors">
                <facility.icon strokeWidth={1.5} size={24} />
              </div>
              <h3 className="font-display text-2xl text-cream mb-3 group-hover:text-gold transition-colors">
                {facility.title}
              </h3>
              <p className="text-cream/60 text-sm font-light leading-relaxed">
                {facility.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
