import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import Services from '../components/Services';
import LawyersCarousel from '../components/LawyersCarousel';
import Footer from '../components/Footer';

function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Services />
      <LawyersCarousel />
      <Footer />
    </div>
  );
}

export default Home;
