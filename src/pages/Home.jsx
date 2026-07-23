import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import FeaturesRow from '../components/FeaturesRow';
import PortfolioCarousel from '../components/PortfolioCarousel';
import StatsAndCTA from '../components/StatsAndCTA';
import AboutSection from '../components/AboutSection';
import FacilitiesSection from '../components/FacilitiesSection';
import EventTypes from '../components/EventTypes';
import TestimonialsSection from '../components/TestimonialsSection';
import LocationSection from '../components/LocationSection';
import BookingCTA from '../components/BookingCTA';
import Footer from '../components/Footer';
import LoadingScreen from '../components/LoadingScreen';

export default function Home() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="min-h-screen bg-bg-main text-text-primary font-sans selection:bg-gold-primary selection:text-bg-main">
        <Navbar />
        <main>
          <HeroSection />
          <FeaturesRow />
          <PortfolioCarousel />
          <StatsAndCTA />
          <AboutSection />
          <FacilitiesSection />
          <EventTypes />
          <TestimonialsSection />
          <LocationSection />
          <BookingCTA />
        </main>
        <Footer />
    </div>
  );
}
