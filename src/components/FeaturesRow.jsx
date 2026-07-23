import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Sparkles, Gem } from 'lucide-react';

export default function FeaturesRow() {
  const features = [
    {
      icon: <Building2 strokeWidth={1} size={28} />,
      title: "Adaptable Spaces",
      desc: "43,000 sq.ft of intelligently designed areas that transform to fit your exact vision."
    },
    {
      icon: <Sparkles strokeWidth={1} size={28} />,
      title: "Exquisite Ambiance",
      desc: "Curated lighting, superior acoustics, and climate control for perfect moments."
    },
    {
      icon: <Gem strokeWidth={1} size={28} />,
      title: "Premium Hospitality",
      desc: "Dedicated VIP suites, bridal rooms, and five-star catering facilities."
    }
  ];

  return (
    <section className="bg-bg-main py-16 md:py-24 border-b border-gold-primary/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-12">
          {features.map((feature, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className={`flex flex-col items-center text-center px-6 ${
                idx !== features.length - 1 ? 'md:border-r border-gold-primary/20' : ''
              }`}
            >
              <div className="text-gold-primary mb-6">
                {feature.icon}
              </div>
              <h3 className="font-display text-2xl text-text-primary mb-4">{feature.title}</h3>
              <p className="text-text-secondary text-sm md:text-base font-light leading-relaxed max-w-xs mx-auto">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
