import React, { useEffect, useState } from 'react';

export default function LoadingScreen({ onComplete }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(() => {
        onComplete();
      }, 1000); // Wait for fade out animation
    }, 2000); // 2 seconds loading
    
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div 
      className={`fixed inset-0 z-[9999] bg-deepblack flex flex-col items-center justify-center transition-opacity duration-1000 ${
        isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <div className="flex flex-col items-center">
        <img 
          src="/logo.jpeg" 
          alt="Milan Conventional Center" 
          className="w-16 h-16 sm:w-20 sm:h-20 object-contain mb-6 animate-pulse"
        />
        <div className="text-cream tracking-[0.3em] uppercase text-sm sm:text-base font-light mb-8">
          Milan<span className="text-gold">.</span>
        </div>
        
        {/* Loading line animation */}
        <div className="w-40 sm:w-64 h-[1px] bg-gold/20 overflow-hidden relative">
          <div className="absolute top-0 left-0 h-full w-1/3 bg-gold animate-[loading_1.5s_ease-in-out_infinite]"></div>
        </div>
        
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes loading {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(300%); }
          }
        `}} />
      </div>
    </div>
  );
}
