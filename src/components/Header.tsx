import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

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
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary-blue shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <div className="flex items-end space-x-3">
              <button onClick={() => navigateToPage('/')} className="flex items-end space-x-3 hover:opacity-80 transition-opacity">
                <img 
                  src="https://cdn.jsdelivr.net/gh/aspxtreme/aps-images@main/aps-logo-APS-color-NEW.png" 
                  alt="APS Logo" 
                  className="h-6 sm:h-8 md:h-10 w-auto"
                />
                <h1 className="text-lg sm:text-xl md:text-3xl font-medium text-white leading-tight tracking-tighter">All-Star Property Service</h1>
              </button>
            </div>
          </div>

          <nav className="hidden lg:flex space-x-4 xl:space-x-8">
            {['Home'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`font-medium transition-colors duration-200 relative group text-sm lg:text-base ${
                  location.pathname === '/' 
                    ? 'text-accent-cyan' 
                    : 'text-white hover:text-accent-cyan'
                }`}
              >
                {item}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-accent-cyan transition-all duration-300 ${
                  location.pathname === '/' 
                    ? 'w-full' 
                    : 'w-0 group-hover:w-full'
                }`}></span>
              </button>
            ))}
            <button
              onClick={() => navigateToPage('/services')}
              className={`font-medium transition-colors duration-200 relative group text-sm lg:text-base ${
                location.pathname === '/services' 
                  ? 'text-accent-cyan' 
                  : 'text-white hover:text-accent-cyan'
              }`}
            >
              Services
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-accent-cyan transition-all duration-300 ${
                location.pathname === '/services' 
                  ? 'w-full' 
                  : 'w-0 group-hover:w-full'
              }`}></span>
            </button>
            <button
              onClick={() => navigateToPage('/about')}
              className={`font-medium transition-colors duration-200 relative group text-sm lg:text-base ${
                location.pathname === '/about' 
                  ? 'text-accent-cyan' 
                  : 'text-white hover:text-accent-cyan'
              }`}
            >
              About
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-accent-cyan transition-all duration-300 ${
                location.pathname === '/about' 
                  ? 'w-full' 
                  : 'w-0 group-hover:w-full'
              }`}></span>
            </button>
            <button
              onClick={() => navigateToPage('/contact')}
              className={`font-medium transition-colors duration-200 relative group text-sm lg:text-base ${
                location.pathname === '/contact' 
                  ? 'text-accent-cyan' 
                  : 'text-white hover:text-accent-cyan'
              }`}
            >
              Contact Us
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-accent-cyan transition-all duration-300 ${
                location.pathname === '/contact' 
                  ? 'w-full' 
                  : 'w-0 group-hover:w-full'
              }`}></span>
            </button>
          </nav>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-white hover:bg-white/10 transition-colors duration-200"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden absolute top-16 left-0 right-0 bg-primary-blue border-t border-white/20 shadow-lg z-50">
            <nav className="px-4 py-4 space-y-2">
              {['Home'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`block w-full text-left px-4 py-2 rounded-lg transition-colors duration-200 ${
                    location.pathname === '/' 
                      ? 'text-accent-cyan bg-white/10' 
                      : 'text-white hover:bg-white/10 hover:text-accent-cyan'
                  }`}
                >
                  {item}
                </button>
              ))}
              <button
                onClick={() => navigateToPage('/services')}
                className={`block w-full text-left px-4 py-2 rounded-lg transition-colors duration-200 ${
                  location.pathname === '/services' 
                    ? 'text-accent-cyan bg-white/10' 
                    : 'text-white hover:bg-white/10 hover:text-accent-cyan'
                }`}
              >
                Services
              </button>
              <button
                onClick={() => navigateToPage('/about')}
                className={`block w-full text-left px-4 py-2 rounded-lg transition-colors duration-200 ${
                  location.pathname === '/about' 
                    ? 'text-accent-cyan bg-white/10' 
                    : 'text-white hover:bg-white/10 hover:text-accent-cyan'
                }`}
              >
                About
              </button>
              <button
                onClick={() => navigateToPage('/contact')}
                className={`block w-full text-left px-4 py-2 rounded-lg transition-colors duration-200 ${
                  location.pathname === '/contact' 
                    ? 'text-accent-cyan bg-white/10' 
                    : 'text-white hover:bg-white/10 hover:text-accent-cyan'
                }`}
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