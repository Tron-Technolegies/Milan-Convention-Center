import React from 'react';
import { Maximize, Utensils, Car, Building2, TreePine, Crown, Hotel, Mountain } from 'lucide-react';

const stats = [
  { icon: Maximize, text: "43,000 SQ.FT. OF LUXURY" },
  { icon: Utensils, text: "1,000+ SEATED DINING" },
  { icon: Car, text: "400+ CAR PARKING" },
  { icon: Building2, text: "CANTILEVERED ARCHITECTURE" },
  { icon: TreePine, text: "SIGNATURE OUTDOOR VENUE" },
  { icon: Crown, text: "VIP SUITES" },
  { icon: Hotel, text: "FOUR-STAR HOTELS" },
  { icon: Mountain, text: "MOUNTAIN HORIZON VIEWS" }
];

export default function StatsMarquee() {
  return (
    <section className="relative py-8 md:py-14 bg-deepblack border-y border-gold/10 overflow-hidden">
      <div className="flex whitespace-nowrap overflow-hidden group">
        <div className="flex items-center animate-[marquee_40s_linear_infinite] group-hover:pause">
          {[...stats, ...stats].map((stat, index) => (
            <div key={index} className="flex items-center px-4 sm:px-6 md:px-12">
              <stat.icon className="text-gold mr-4 md:mr-6 shrink-0 w-6 h-6 md:w-8 md:h-8" strokeWidth={1.4} />
              <span className="font-display text-xl sm:text-2xl md:text-5xl text-cream/90 italic">
                {stat.text}
              </span>
              <span className="mx-6 md:mx-10 text-gold/50 text-xl md:text-2xl shrink-0">✦</span>
            </div>
          ))}
        </div>
      </div>
      
      {/* Custom CSS for marquee animation */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}} />
    </section>
  );
}
