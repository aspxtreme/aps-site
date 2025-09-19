import React from 'react';
import { CheckCircle, ArrowRight } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="pt-16 bg-primary-blue min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-20 lg:py-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight">
                Professional Property Services with a Mission
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed">
                Specialized building maintenance and repair services for commercial and multi-family properties. 
                Professional results from a veteran-owned company with military precision.
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

          <div className="relative animate-fade-in-up">
            <div className="rounded-2xl overflow-hidden shadow-2xl animate-float">
              <img 
                src="https://cdn.jsdelivr.net/gh/aspxtreme/aps-images@main/trash-chute-cleaning.png" 
                alt="Professional trash chute repair technician at work"
                className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover object-center rounded-2xl"
              />
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