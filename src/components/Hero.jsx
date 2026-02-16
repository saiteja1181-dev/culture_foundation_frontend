// components/Hero.jsx
import React, { useState, useEffect } from 'react';
import { 
  FaBook, 
  FaHeartbeat, 
  FaBriefcase, 
  FaFemale, 
  FaWheelchair, 
  FaUmbrella, 
  FaSeedling, 
  FaFutbol, 
  FaTree,
  FaArrowLeft,
  FaArrowRight,
  FaPlay,
  FaInfoCircle
} from 'react-icons/fa';

// Blue and Orange color scheme matching your logo
const colors = {
  primary: '#0066B3',      // Deep Blue - main brand color
  secondary: '#FF6B35',     // Orange - accent color
  dark: '#1E2A3A',         // Dark Blue/Navy - for backgrounds
  light: '#FFFFFF',         // White
  gray: '#F5F7FA'          // Light gray for backgrounds
};

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Background images for slider
  const slides = [
    {
      image: "https://i.ibb.co/wZrf6D3w/Training-Center-Visit.jpg",
      title: "Education for All",
      subtitle: "Building brighter futures together"
    },
    {
      image: "https://i.ibb.co/Zp38tJ7k/2018-Ugadi-Puraskara-Awards-1.jpg",
      title: "Community Development",
      subtitle: "Strengthening communities through collective action"
    },
    {
      image: "https://i.ibb.co/bjY4T2gd/xp-E0-C4-NI4sb-MFe8b-PD3iu2-EMFd-KMRy-Nm-VJDR-l-Yz8-I-plaintext-638290604256533475.jpg",
      title: "Skill Training",
      subtitle: "Creating sustainable livelihoods for all"
    },
    {
      image: "https://i.ibb.co/mV07PXcs/Meeting-With-CSR-Companies-NGOs.jpg",
      title: "Inclusive Growth",
      subtitle: "Leaving no one behind"
    }
  ];

  // 9 Core Programs from your PDF
  const programs = [
    { name: "High and Quality Education", icon: FaBook },
    { name: "Health Awareness", icon: FaHeartbeat },
    { name: "Employability Skills", icon: FaBriefcase },
    { name: "Women Empowerment", icon: FaFemale },
    { name: "Person With Disability", icon: FaWheelchair },
    { name: "Disaster Preparedness", icon: FaUmbrella },
    { name: "Agriculture Enhancement", icon: FaSeedling },
    { name: "Games & Sports", icon: FaFutbol },
    { name: "Fisher Flock / Tribal", icon: FaTree }
  ];

  // Auto slide change
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      {/* Background Image Slider */}
      <div className="absolute inset-0 w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {/* Background Image */}
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ 
                backgroundImage: `url(${slide.image})`,
                filter: 'brightness(0.6)'
              }}
            />
            
            {/* Overlay Text */}
            
          </div>
        ))}
        
        {/* Dark Overlay with Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1E2A3A]/90 via-[#1E2A3A]/70 to-transparent" />
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-5 top-1/2 transform -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full backdrop-blur-sm transition-all duration-300 border border-white/20"
        aria-label="Previous slide"
      >
        <FaArrowLeft className="text-xl" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-5 top-1/2 transform -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full backdrop-blur-sm transition-all duration-300 border border-white/20"
        aria-label="Next slide"
      >
        <FaArrowRight className="text-xl" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'w-8' : ''
            }`}
            style={{
              backgroundColor: index === currentSlide ? colors.secondary : 'rgba(255,255,255,0.5)'
            }}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-6 lg:px-8 pt-24 md:pt-32 lg:pt-40 pb-20">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
          {/* Left Content */}
          <div className="w-full lg:w-1/2 text-white">
            {/* Logo/Name with Blue and Orange */}
            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl md:text-4xl lg:text-5xl font-bold" style={{ color: colors.primary }}>
                CULTURE
              </span>
              <span className="text-xl md:text-2xl text-white/80">FOUNDATION</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
              <span className="block">Empowering</span>
              <span className="block" style={{ color: colors.primary }}>
                Communities
              </span>
              <span className="block text-2xl md:text-3xl lg:text-4xl mt-2" style={{ color: colors.secondary }}>
                Through Skills & Development
              </span>
            </h1>
            
            <p className="text-base md:text-lg lg:text-xl text-gray-200 mt-6 mb-8 max-w-xl">
              Culture Foundation is dedicated to empowering underprivileged communities, 
              differently-abled individuals, and women through comprehensive skill development 
              programs, vocational training, and sustainable livelihood opportunities.
            </p>
            
            {/* CTA Buttons - Blue and Orange */}
            <div className="flex flex-col sm:flex-row gap-4">
              
              <a
                 
                  href="#programs"
                
                >
                  <button 
                className="group px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold text-base md:text-lg transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                style={{ 
                  backgroundColor: colors.primary,
                  color: '#FFFFFF'
                }}
              >
                <FaPlay className="text-sm" />
                Explore Programs
              </button>
                </a>
            </div>

            {/* Trust Indicators */}
           
          </div>

          {/* Right Content - 9 Programs Grid */}
          
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#1E2A3A]/80 to-transparent pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#1E2A3A]/80 to-transparent pointer-events-none" />
    </section>
  );
};

export default Hero;