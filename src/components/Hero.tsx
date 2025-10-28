import React, { useState, useEffect } from 'react';
import { CheckCircle, ArrowRight, Phone, ChevronLeft, ChevronRight } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
  };

  // Florida property management carousel images
  const carouselImages = [
    'https://images.pexels.com/photos/2034335/pexels-photo-2034335.jpeg?auto=compress&cs=tinysrgb&w=1600',
    'https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&w=1600',
    'https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?auto=compress&cs=tinysrgb&w=1600',
    'https://images.pexels.com/photos/1642125/pexels-photo-1642125.jpeg?auto=compress&cs=tinysrgb&w=1600'
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % carouselImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [carouselImages.length]);

  const goToPrevious = () => {
    setCurrentImageIndex((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  const goToNext = () => {
    setCurrentImageIndex((prev) => (prev + 1) % carouselImages.length);
  };

  return (
    <section id="home" className="relative pt-20 min-h-screen">
      {/* Carousel Background */}
      <div className="absolute inset-0 overflow-hidden">
        {carouselImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={image}
              alt={`Florida Property ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Carousel Controls */}
      <button
        onClick={goToPrevious}
        className="absolute left-6 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full backdrop-blur-sm transition-all duration-200"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={goToNext}
        className="absolute right-6 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full backdrop-blur-sm transition-all duration-200"
        aria-label="Next image"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Carousel Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
        {carouselImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              index === currentImageIndex ? 'bg-accent-cyan' : 'bg-white/50'
            }`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
      
      {/* Content overlay with side panel approach */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Text content with white background */}
            <div className="bg-gray-900/80 backdrop-blur-md p-8 lg:p-12 rounded-2xl shadow-2xl">
              <div className="space-y-8">
                <div className="space-y-6">
                  <h1 className="text-4xl lg:text-6xl font-bold text-primary-navy leading-tight">
                    <span className="text-white">Expert Condominium</span>
                    <span className="text-accent-cyan block">Management</span>
                    <span className="text-white">Solutions</span>
                  </h1>
                  <p className="text-xl text-gray-200 leading-relaxed">
                    Professional management services for condominiums, HOAs, and residential communities. 
                    We handle the complexities so you can enjoy your investment and community living.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    'HOA Board Support',
                    'Financial Management', 
                    'Property Maintenance',
                    'Owner Communications'
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-accent-cyan flex-shrink-0" />
                      <span className="text-white font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button 
                    onClick={() => scrollToSection('contact')}
                    className="inline-flex items-center justify-center px-8 py-4 bg-accent-cyan text-primary-navy font-bold rounded-lg hover:bg-accent-cyan/80 transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    Get Free Consultation
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </button>
                  <a 
                    href="tel:+1234567890" 
                    className="inline-flex items-center justify-center px-8 py-4 text-white font-bold rounded-lg border-2 border-white hover:bg-white hover:text-gray-900 transition-all duration-300"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Call Now
                  </a>
                </div>
              </div>
            </div>

            {/* Right side - Stats cards */}
            <div className="space-y-6">
              <div className="bg-gray-800/70 backdrop-blur-md p-6 rounded-xl shadow-xl">
                <div className="text-4xl font-bold text-accent-cyan mb-2">500+</div>
                <div className="text-gray-200 font-medium">Properties Managed</div>
              </div>
              <div className="bg-gray-800/70 backdrop-blur-md p-6 rounded-xl shadow-xl">
                <div className="text-4xl font-bold text-accent-cyan mb-2">25+</div>
                <div className="text-gray-200 font-medium">Years Experience</div>
              </div>
              <div className="bg-gray-800/70 backdrop-blur-md p-6 rounded-xl shadow-xl">
                <div className="text-4xl font-bold text-accent-cyan mb-2">98%</div>
                <div className="text-gray-200 font-medium">Client Satisfaction</div>
              </div>
              <div className="bg-accent-cyan/70 backdrop-blur-md p-6 rounded-xl shadow-xl">
                <div className="text-3xl font-bold text-gray-900">A+</div>
                <div className="text-sm font-medium text-gray-900">BBB Rating</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;