import React from 'react';

export default function AboutSection() {
  return (
    <section id="about" className="relative py-24 md:py-32 bg-deepblack overflow-hidden">
      <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-br from-gold/5 via-transparent to-transparent pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
        
        {/* Text Content */}
        <div className="lg:col-span-7">
          <div className="text-[0.65rem] tracking-[0.25em] uppercase text-gold mb-8 border-l border-gold/40 pl-4">
            Our Story
          </div>
          
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] text-cream mb-10">
            A landmark <span className="italic font-light text-gold-gradient">reimagining</span><br/>
            of what a venue<br/>can be.
          </h2>
          
          <div className="space-y-6 max-w-xl text-cream/70 leading-relaxed font-light">
            <p>
              Milan Conventional Center is a 43,000 square foot architectural landmark set against the horizon of Chettuva, Thrissur — a venue conceived for occasions that deserve more than ordinary.
            </p>
            <p>
              Cantilevered wooden roofs, soaring glass facades, and sandstone volumes rooted in the land. Every surface, every sightline, every threshold has been composed as a canvas for the moments staged within it.
            </p>
            <p>
              From intimate bridal salons to grand halls seating a thousand, Milan is where families, enterprises and visionaries come to mark their most defining moments.
            </p>
          </div>
          
          <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="border-t border-gold/20 pt-5">
              <div className="font-display text-4xl md:text-5xl text-gold-gradient">43K</div>
              <div className="mt-2 text-[0.65rem] tracking-[0.2em] uppercase text-cream/60">Square Feet</div>
            </div>
            <div className="border-t border-gold/20 pt-5">
              <div className="font-display text-4xl md:text-5xl text-gold-gradient">1K+</div>
              <div className="mt-2 text-[0.65rem] tracking-[0.2em] uppercase text-cream/60">Dining Capacity</div>
            </div>
            <div className="border-t border-gold/20 pt-5">
              <div className="font-display text-4xl md:text-5xl text-gold-gradient">400+</div>
              <div className="mt-2 text-[0.65rem] tracking-[0.2em] uppercase text-cream/60">Parking Spaces</div>
            </div>
            <div className="border-t border-gold/20 pt-5">
              <div className="font-display text-4xl md:text-5xl text-gold-gradient">5</div>
              <div className="mt-2 text-[0.65rem] tracking-[0.2em] uppercase text-cream/60">Signature Spaces</div>
            </div>
          </div>
        </div>
        
        {/* Abstract/Placeholder Image Element */}
        <div className="lg:col-span-5 relative">
          <div className="relative aspect-[3/4] w-full overflow-hidden border border-gold/10">
            <div className="absolute inset-0 bg-gradient-to-br from-maroon/80 via-charcoal to-deepblack"></div>
            
            {/* Abstract geometric lines simulating architecture */}
            <div className="absolute inset-0 flex items-center justify-center opacity-30">
              <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                <line x1="0" y1="100" x2="100" y2="0" stroke="var(--color-gold)" strokeWidth="0.5" />
                <line x1="20" y1="100" x2="100" y2="20" stroke="var(--color-gold)" strokeWidth="0.5" />
                <line x1="40" y1="100" x2="100" y2="40" stroke="var(--color-gold)" strokeWidth="0.5" />
                
                <rect x="30" y="30" width="40" height="70" fill="transparent" stroke="var(--color-gold)" strokeWidth="1" />
                <rect x="40" y="40" width="40" height="60" fill="var(--color-charcoal)" opacity="0.8" />
              </svg>
            </div>
            
            <div className="absolute inset-x-[20%] inset-y-[40%] bg-gold/10 blur-3xl rounded-full"></div>
            <div className="absolute inset-4 border border-gold/20 pointer-events-none"></div>
          </div>
          
          {/* Corner Accents */}
          <div className="absolute -top-4 -left-4 w-16 h-16 border-t-2 border-l-2 border-gold/50"></div>
          <div className="absolute -bottom-4 -right-4 w-16 h-16 border-b-2 border-r-2 border-gold/50"></div>
          
          <div className="absolute -bottom-6 right-6 bg-deepblack border border-gold/20 px-6 py-3">
            <div className="text-[0.55rem] tracking-[0.25em] uppercase text-gold">Architectural Detail</div>
            <div className="font-display text-sm text-cream mt-1">The Cantilevered Pavilion</div>
          </div>
        </div>
        
      </div>
    </section>
  );
}
