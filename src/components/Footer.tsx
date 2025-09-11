import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Phone, Mail, Building2 } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <footer className="bg-primary-blue text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <img 
              src="https://cdn.jsdelivr.net/gh/aspxtreme/aps-images@main/aps-logo-stack-blu-bg.png" 
              alt="All Star Property Services Logo" 
              className="h-40 w-auto"
            />
            <div className="text-secondary-blue leading-relaxed mb-6 max-w-md">
              <p>www.allstarpropertyservice.com</p>
              <p className="text-accent-cyan font-semibold">"Veteran Owned Company"</p>
            </div>
            <p className="text-white leading-relaxed max-w-md">
              Professional property services and facility maintenance for commercial and multi-family real estate. 
              Reliable and Compliant. Always Fair Prices. Never Any Fluff.
            </p>
            <div className="space-y-3 mt-6">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-white" />
                <a href="tel:+17146319056" className="text-white hover:text-accent-cyan transition-colors duration-200">(714) 631-9056</a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-white" />
                <a href="mailto:quote@allstarpropertyservice.com" className="text-white hover:text-accent-cyan transition-colors duration-200">quote@allstarpropertyservice.com</a>
              </div>
              <div className="flex items-center space-x-3">
                <Building2 className="w-5 h-5 text-white" />
                <span className="text-white">14092 Willow Ln, Suite A<br />Westminster, CA 92683</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">
              <Link to="/services" onClick={scrollToTop} className="hover:text-accent-cyan transition-colors duration-200">
                Services
              </Link>
            </h4>
            <ul className="space-y-3 text-white">
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

          <div>
            <h4 className="text-lg font-semibold mb-6">Industries</h4>
            <ul className="space-y-3 text-white">
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
          <p className="text-white text-center md:text-left">
            &copy; 2025 All Star Property Services, Inc. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy-policy" onClick={scrollToTop} className="text-white hover:text-accent-cyan transition-colors duration-200">Privacy Policy</Link>
            <Link to="/terms-of-use" onClick={scrollToTop} className="text-white hover:text-accent-cyan transition-colors duration-200">Terms of Use</Link>
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/services" onClick={scrollToTop} className="text-white hover:text-accent-cyan transition-colors duration-200">Services</Link>
            <Link to="/about" onClick={scrollToTop} className="text-white hover:text-accent-cyan transition-colors duration-200">About</Link>
            <Link to="/contact" onClick={scrollToTop} className="text-white hover:text-accent-cyan transition-colors duration-200">Contact Us</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;