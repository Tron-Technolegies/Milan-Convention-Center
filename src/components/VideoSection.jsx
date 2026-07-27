import React, { useRef, useState, useEffect } from 'react';
import { AnimatePresence, motion, useInView } from 'framer-motion';
import { Play, X } from 'lucide-react';

export default function VideoSection({ 
  videoUrl = "/Milan%20reel%20.mp4", 
  posterUrl = "/img-9.jpeg" // Public thumbnail image
}) {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isModalOpen]);

  return (
    <section id="video-tour" className="relative py-12 md:py-24 bg-bg-secondary overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        
        <div className="text-center mb-10 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-[0.65rem] tracking-[0.3em] uppercase text-gold-light mb-4 sm:mb-6">
              Experience
            </div>
            <h2 className="font-display text-3xl sm:text-5xl md:text-6xl text-white mb-4 sm:mb-6">
              The <span className="italic font-light text-gold-light">Grandeur</span>
            </h2>
            <p className="text-white/70 font-light max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
              Step into a world of elegance. Watch our cinematic showcase of the Milan Convention Center spaces and facilities.
            </p>
          </motion.div>
        </div>

        {/* Video Preview Card */}
        <motion.div
          ref={containerRef}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex justify-center items-center"
        >
          <div
            onClick={() => setIsModalOpen(true)}
            className="relative cursor-pointer group flex items-center justify-center w-full max-w-[320px] md:max-w-4xl aspect-[9/16] md:aspect-video overflow-hidden rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,.45)]"
          >
            {/* Background Thumbnail Image */}
            <img 
              src={posterUrl} 
              alt="Video Preview"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Dark Overlay for better button readability */}
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-300" />

            {/* Play Button */}
            <div className="relative z-10 w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-black/40 backdrop-blur-md border border-gold-primary/40 flex items-center justify-center transition-all duration-300 group-hover:scale-110">
              <Play
                className="w-7 h-7 sm:w-9 sm:h-9 text-white ml-1"
                fill="currentColor"
              />
            </div>
          </div>
        </motion.div>
        
      </div>

      {/* Modal Overlay */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md p-4 sm:p-6"
            onClick={() => setIsModalOpen(false)}
          >
            <button 
              className="absolute top-4 right-4 sm:top-6 sm:right-6 text-white/70 hover:text-white transition-colors z-50 p-2"
              onClick={() => setIsModalOpen(false)}
              aria-label="Close modal"
            >
              <X size={32} />
            </button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative flex items-center justify-center w-full max-w-[90vw] max-h-[85vh] aspect-[9/16] overflow-hidden rounded-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <video
                src={videoUrl}
                poster={posterUrl}
                className="w-[177.77%] max-w-none h-auto -rotate-90 "
                autoPlay
                controls
                playsInline
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}