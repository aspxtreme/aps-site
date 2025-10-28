import React from 'react';
import { Link } from 'react-router-dom';
import { Building, Phone, Mail, MapPin, Linkedin, Facebook } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <footer className="bg-primary-navy text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src="https://images.squarespace-cdn.com/content/v1/5ba66b8eca525b39055173f0/8bb26ac2-7e67-4506-bb76-120073a80434/CA+LOGO+Transparent.png?format=1500w"
                alt="Condo Associates"
                className="h-10 w-auto"
              />
              <div>
                <h1 className="text-2xl font-bold text-white">Condo Associates</h1>
                <p className="text-sm text-gray-300">Professional Management</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              Professional condominium and HOA management services with over 25 years of experience. 
              We help communities thrive through expert management, financial oversight, and dedicated service.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-accent-cyan" />
                <a href="tel:+15551234567" className="text-gray-300 hover:text-white transition-colors duration-200">(555) 123-4567</a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-accent-cyan" />
                <a href="mailto:info@condoassociates.com" className="text-gray-300 hover:text-white transition-colors duration-200">info@condoassociates.com</a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-accent-cyan" />
                <span className="text-gray-300">123 Management Boulevard<br />Suite 100, City, State 12345</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">
              <Link to="/services" onClick={scrollToTop} className="hover:text-accent-gold transition-colors duration-200">
                Services
              </Link>
            </h4>
            <ul className="space-y-3 text-gray-300">
              <li>HOA Management</li>
              <li>Financial Management</li>
              <li>Property Maintenance</li>
              <li>Owner Communications</li>
              <li>Administrative Services</li>
              <li>Risk Management</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3 text-gray-300">
              <li><Link to="/" onClick={scrollToTop} className="hover:text-accent-gold transition-colors duration-200">Home</Link></li>
              <li><Link to="/about" onClick={scrollToTop} className="hover:text-accent-gold transition-colors duration-200">About Us</Link></li>
              <li><Link to="/services" onClick={scrollToTop} className="hover:text-accent-gold transition-colors duration-200">Services</Link></li>
              <li><Link to="/contact" onClick={scrollToTop} className="hover:text-accent-gold transition-colors duration-200">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-secondary-blue/30 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-300 text-center md:text-left mb-4 md:mb-0">
            &copy; 2025 Condo Associates. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link to="/privacy-policy" onClick={scrollToTop} className="text-gray-300 hover:text-accent-gold transition-colors duration-200">Privacy Policy</Link>
            <Link to="/terms-of-use" onClick={scrollToTop} className="text-gray-300 hover:text-accent-gold transition-colors duration-200">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;