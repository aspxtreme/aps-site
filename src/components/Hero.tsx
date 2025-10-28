import React from 'react';
import { useState, useEffect } from 'react';
import { CheckCircle, ArrowRight } from 'lucide-react';

const Hero = () => {
  // Hero images array
  const heroImages = [
    'https://cdn.jsdelivr.net/gh/aspxtreme/aps-images@main/trash-chute-cleaning.png',
    'https://cdn.jsdelivr.net/gh/aspxtreme/aps-images@main/aps-solar-cleaning.jpg',
    'https://cdn.jsdelivr.net/gh/aspxtreme/aps-images@main/aps-oprofessional-waterproofing.jpg',
    'https://cdn.jsdelivr.net/gh/aspxtreme/aps-images@main/pressure-wash-building.jpg'
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto-rotate images every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [heroImages.length]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="pt-16 bg-gradient-to-r from-primary-blue via-primary-blue to-secondary-blue min-h-screen flex items-center relative overflow-hidden rounded-b-xl">
      {/* Gradient Overlay for Extra Depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-blue/90 via-transparent to-accent-cyan/20"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 lg:pt-6 lg:pb-12">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-8 relative z-10">
            <div className="space-y-4">
              <div className="space-y-2">
                <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-accent-cyan">
                  Professional Property Services
                </h1>
                <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-none space-y-1">
                  <div className="text-white">Disciplined.</div>
                  <div className="text-accent-cyan">Reliable.</div>
                  <div className="text-white">Fair.</div>
                </div>
              </div>
              <p className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed">
                APS brings discipline, compliance, and follow-through to every service. Our clients have worked with us for decades because we offer great communication and exceptional service, always at a fair price.
              </p>
            </div>

            <div className="space-y-4">
              {[
                'Trash Chute Repair & Cleaning',
                'Professional Window Cleaning',
                'Asphalt Striping & Surface Repair',
                'Parking Garage Pressure Washing',
                'Plus more Cost-Effective Services'
              ].map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-accent-cyan flex-shrink-0" />
                  <span className="text-sm sm:text-base text-gray-300 font-medium">{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => scrollToSection('contact')}
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base bg-accent-red text-white font-semibold rounded-lg hover:bg-accent-cyan hover:text-[#181B38] transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Get Estimate
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="relative animate-fade-in-up z-10">
            <div className="rounded-2xl overflow-hidden shadow-2xl animate-float">
              {heroImages.map((image, index) => (
                <img 
                  key={image}
                  src={image}
                  alt={`Professional property service ${index + 1}`}
                  className={`w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover rounded-2xl transition-opacity duration-1000 ${
                    index === currentImageIndex ? 'opacity-100' : 'opacity-0 absolute inset-0'
                  } ${
                    // Custom object positioning for optimal cropping per image
                    image.includes('trash-chute-cleaning') ? 'object-center' :
                    image.includes('aps-solar-cleaning') ? 'object-center' :
                    image.includes('aps-oprofessional-waterproofing') ? 'object-center' :
                    image.includes('high-rise-window-washing') ? 'object-center' :
                    image.includes('pressure-wash-building') ? 'object-center' : 'object-center'
                  }`}
                />
              ))}
            </div>
            <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 bg-white p-4 sm:p-6 rounded-xl shadow-lg border animate-slide-in-left">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-8 h-8 text-accent-cyan font-bold stroke-2" />
                </div>
                <div>
                  <p className="text-sm sm:text-base font-semibold text-gray-900">100% Compliant</p>
                  <p className="text-xs sm:text-sm text-gray-600">Always Code Certified</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;