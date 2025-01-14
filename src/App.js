import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Offerings from "./components/Offerings";
import Solutions from "./components/Solutions";
import LawyerList from "./components/LawyerList";
import DocumentSection from "./components/DocumentSection";
import Features from "./components/Features";
import BlogSection from "./components/BlogSection";
import Footer from "./components/Footer";
import BackgroundSlider from "./components/BackgroundSlider";

import "swiper/css"; // Core Swiper styles
import "swiper/css/navigation"; // Navigation styles
import "swiper/css/pagination"; // Pagination styles
import "swiper/css/autoplay"; // Autoplay styles

import "./App.css";

function App() {
  return (
    <div className="App">
      {/* Navbar Section */}
      <Navbar />

      {/* Background Slider Section */}
      <BackgroundSlider />

      {/* Hero Section */}
      <HeroSection />

      {/* Offerings Section */}
      <Offerings />

      {/* Solutions Section */}
      <Solutions />

      {/* Lawyer List Section */}
      <LawyerList />

      {/* Document Section */}
      <DocumentSection />

      {/* Features Section */}
      <Features />

      {/* Blog Section */}
      <BlogSection />

      {/* Footer Section */}
      <Footer />
    </div>
  );
}

export default App;
