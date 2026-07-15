import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import StatsMarquee from '../components/StatsMarquee';
import AboutSection from '../components/AboutSection';
import SpacesSection from '../components/SpacesSection';
import FacilitiesSection from '../components/FacilitiesSection';
import MapSection from '../components/MapSection';
import Footer from '../components/Footer';
import LoadingScreen from '../components/LoadingScreen';

export default function Home() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="min-h-screen bg-deepblack text-cream font-sans selection:bg-gold selection:text-deepblack">
      {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      
      <div className={`transition-opacity duration-1000 ${loading ? 'opacity-0' : 'opacity-100'}`}>
        <Navbar />
        <main>
          <HeroSection />
          <StatsMarquee />
          <AboutSection />
          <SpacesSection />
          <FacilitiesSection />
          <MapSection />
        </main>
        <Footer />
      </div>
    </div>
  );
}
