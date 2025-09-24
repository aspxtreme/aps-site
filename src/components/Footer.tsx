import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Phone, Mail, Building2, Linkedin } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <footer className="bg-primary-blue text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="sm:col-span-2 lg:col-span-2">
            <img 
              src="https://cdn.jsdelivr.net/gh/aspxtreme/aps-images@main/aps-logo-full-color-NEW-bold.png" 
              alt="All Star Property Services Logo" 
              className="h-32 sm:h-40 w-auto"
            />
            <div className="text-secondary-blue leading-relaxed mb-2 max-w-md">
              <p>www.allstarpropertyservice.com</p>
              <p className="text-accent-cyan font-semibold">"Veteran Owned Company"</p>
            </div>
            <p className="text-sm sm:text-base text-white leading-relaxed max-w-md">
              Professional property services and facility maintenance for commercial and multi-family real estate. 
              Reliable and Compliant. Always Fair Prices. Never Any Fluff.
            </p>
            <div className="space-y-3 mt-6">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-white" />
                <a href="tel:+17146319056" className="text-sm sm:text-base text-white hover:text-accent-cyan transition-colors duration-200">(714) 631-9056</a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-white" />
                <a href="mailto:quote@allstarpropertyservice.com" className="text-sm sm:text-base text-white hover:text-accent-cyan transition-colors duration-200">quote@allstarpropertyservice.com</a>
              </div>
              <div className="flex items-center space-x-3">
                <Building2 className="w-5 h-5 text-white" />
                <span className="text-sm sm:text-base text-white">14092 Willow Ln, Suite A<br />Westminster, CA 92683</span>
              </div>
              <div className="flex items-center space-x-3">
                <Linkedin className="w-5 h-5 text-white" />
                <a 
                  href="https://www.linkedin.com/company/all-star-property-service/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm sm:text-base text-white hover:text-accent-cyan transition-colors duration-200"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          <div className="sm:col-span-1">
            <h4 className="text-base sm:text-lg font-semibold mb-6">
              <Link to="/services" onClick={scrollToTop} className="hover:text-accent-cyan transition-colors duration-200">
                Services
              </Link>
            </h4>
            <ul className="space-y-3 text-sm sm:text-base text-white">
              <li>Trash Chute Repair & Cleaning</li>
              <li>Professional Window Cleaning</li>
              <li>Building Wash Services</li>
              <li>Common Area Pressure Washing</li>
              <li>Parking Garage Pressure Washing</li>
              <li>Solar Panel Cleaning</li>
              <li>Rain Gutter Cleaning</li>
              <li>Floor, Tile & Carpet Cleaning</li>
              <li>Concrete Grinding & Polishing</li>
              <li>Trash Bin & Dumpster Cleaning</li>
              <li>Asphalt Striping & Surface Repair</li>
              <li>Graffiti Removal & Painting</li>
              <li>Commercial Handyman Services</li>
            </ul>
          </div>

          <div className="sm:col-span-1">
            <h4 className="text-base sm:text-lg font-semibold mb-6">Facilities</h4>
            <ul className="space-y-3 text-sm sm:text-base text-white">
              <li>Commercial Properties</li>
              <li>Multi-Family Housing</li>
              <li>Industrial Facilities</li>
              <li>Office Buildings</li>
              <li>Retail Centers</li>
              <li>Mixed-Use Developments</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-secondary-blue/30 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm sm:text-base text-white text-center md:text-left mb-4 md:mb-0">
            &copy; 2025 All Star Property Services, Inc. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy-policy" onClick={scrollToTop} className="text-sm sm:text-base text-white hover:text-accent-cyan transition-colors duration-200">Privacy Policy</Link>
            <Link to="/terms-of-use" onClick={scrollToTop} className="text-sm sm:text-base text-white hover:text-accent-cyan transition-colors duration-200">Terms of Use</Link>
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/services" onClick={scrollToTop} className="text-sm sm:text-base text-white hover:text-accent-cyan transition-colors duration-200">Services</Link>
            <Link to="/about" onClick={scrollToTop} className="text-sm sm:text-base text-white hover:text-accent-cyan transition-colors duration-200">About</Link>
            <Link to="/contact" onClick={scrollToTop} className="text-sm sm:text-base text-white hover:text-accent-cyan transition-colors duration-200">Contact Us</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;