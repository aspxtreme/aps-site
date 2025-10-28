import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, Building } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigateToPage = (path: string) => {
    navigate(path);
    window.scrollTo(0, 0);
    setIsMenuOpen(false);
  };

  const scrollToSection = (sectionId: string) => {
    // If we're not on the home page, navigate there first
    if (location.pathname !== '/') {
      navigate('/');
      // Wait for navigation to complete, then scroll
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          const offsetTop = element.offsetTop - 80;
          window.scrollTo({ top: offsetTop, behavior: 'smooth' });
        }
      }, 200);
      setIsMenuOpen(false);
      return;
    }
    
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <button onClick={() => navigateToPage('/')} className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
              <img 
                src="https://images.squarespace-cdn.com/content/v1/5ba66b8eca525b39055173f0/8bb26ac2-7e67-4506-bb76-120073a80434/CA+LOGO+Transparent.png?format=1500w"
                alt="Condo Associates"
                className="h-14 w-auto"
              />
            </button>
          </div>

          <nav className="hidden lg:flex space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className={`font-medium transition-colors duration-200 relative group ${
                location.pathname === '/' 
                  ? 'text-primary-navy' 
                  : 'text-gray-700 hover:text-primary-navy'
              }`}
            >
              Home
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-accent-gold transition-all duration-300 ${
                location.pathname === '/' 
                  ? 'w-full' 
                  : 'w-0 group-hover:w-full'
              }`}></span>
            </button>
            <button
              onClick={() => navigateToPage('/services')}
              className={`font-medium transition-colors duration-200 relative group ${
                location.pathname === '/services' 
                  ? 'text-primary-navy' 
                  : 'text-gray-700 hover:text-primary-navy'
              }`}
            >
              Services
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-accent-gold transition-all duration-300 ${
                location.pathname === '/services' 
                  ? 'w-full' 
                  : 'w-0 group-hover:w-full'
              }`}></span>
            </button>
            <button
              onClick={() => navigateToPage('/about')}
              className={`font-medium transition-colors duration-200 relative group ${
                location.pathname === '/about' 
                  ? 'text-primary-navy' 
                  : 'text-gray-700 hover:text-primary-navy'
              }`}
            >
              About
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-accent-gold transition-all duration-300 ${
                location.pathname === '/about' 
                  ? 'w-full' 
                  : 'w-0 group-hover:w-full'
              }`}></span>
            </button>
            <button
              onClick={() => navigateToPage('/contact')}
              className="px-6 py-2 bg-primary-navy text-white font-semibold rounded-lg hover:bg-secondary-blue transition-colors duration-200"
            >
              Contact Us
            </button>
          </nav>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors duration-200"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden absolute top-20 left-0 right-0 bg-white border-t border-gray-200 shadow-lg">
            <nav className="px-4 py-4 space-y-2">
              <button
                onClick={() => scrollToSection('home')}
                className={`block w-full text-left px-4 py-2 rounded-lg transition-colors duration-200 ${
                  location.pathname === '/' 
                    ? 'text-primary-navy bg-gray-100' 
                    : 'text-gray-700 hover:bg-gray-100 hover:text-primary-navy'
                }`}
              >
                Home
              </button>
              <button
                onClick={() => navigateToPage('/services')}
                className={`block w-full text-left px-4 py-2 rounded-lg transition-colors duration-200 ${
                  location.pathname === '/services' 
                    ? 'text-primary-navy bg-gray-100' 
                    : 'text-gray-700 hover:bg-gray-100 hover:text-primary-navy'
                }`}
              >
                Services
              </button>
              <button
                onClick={() => navigateToPage('/about')}
                className={`block w-full text-left px-4 py-2 rounded-lg transition-colors duration-200 ${
                  location.pathname === '/about' 
                    ? 'text-primary-navy bg-gray-100' 
                    : 'text-gray-700 hover:bg-gray-100 hover:text-primary-navy'
                }`}
              >
                About
              </button>
              <button
                onClick={() => navigateToPage('/contact')}
                className="block w-full text-left px-4 py-2 bg-primary-navy text-white font-semibold rounded-lg hover:bg-secondary-blue transition-colors duration-200 mt-4"
              >
                Contact Us
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;