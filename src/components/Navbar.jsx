import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-bg-main/95 backdrop-blur-md py-4 shadow-lg shadow-black/50 border-b border-gold-primary/20' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-12">
        {/* Logo Area */}
        <a href="#top" className="flex items-center gap-3 group">
          <img 
            src="/logo.png" 
            alt="Milan Conventional Center" 
            className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-500 rounded-sm"
          />
          <div className="hidden sm:block text-text-primary tracking-widest uppercase text-sm font-light">
            Milan<span className="text-gold-primary">.</span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-10">
          {['About', 'Facilities', 'Events', 'Gallery', 'Contact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-xs tracking-[0.22em] uppercase text-text-secondary hover:text-gold-primary transition-colors">
              {item}
            </a>
          ))}
        </nav>

        {/* CTA & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <div className="hidden lg:block">
            <a href="https://wa.me/917770008435" target="_blank" rel="noopener noreferrer" className="btn-gold text-[0.7rem] py-2 px-4">
              Book a Slot
            </a>
          </div>
          <button 
            className="lg:hidden text-gold-primary p-2 hover:bg-gold-primary/10 rounded-full transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-bg-main border-b border-gold-primary/20 shadow-2xl">
          <nav className="flex flex-col items-center py-8 gap-6">
            {['About', 'Facilities', 'Events', 'Gallery', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm tracking-[0.22em] uppercase text-text-primary hover:text-gold-primary transition-colors"
              >
                {item}
              </a>
            ))}
            <a href="https://wa.me/917770008435" target="_blank" rel="noopener noreferrer" className="btn-gold text-xs mt-4">
              Book a Slot
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
