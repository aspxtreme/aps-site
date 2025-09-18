import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfUse from './components/TermsOfUse';
import ContactPage from './components/ContactPage';
import AboutPage from './components/AboutPage';
import ServicesPage from './components/ServicesPage';
import ThankYouPage from './components/ThankYouPage';

// Component wrapper to force re-render on route changes
const RouteWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  return <div key={location.pathname}>{children}</div>;
};

const HomePage = () => (
  <>
    <Hero />
    <Services />
    <About />
    <Contact />
  </>
);

function App() {
  console.log('App component loaded'); // Debug log

  React.useEffect(() => {
    // Force scroll to top on route changes and handle browser back/forward
    const handlePopState = () => {
      // Small delay to ensure React has processed the route change
      setTimeout(() => {
        window.scrollTo(0, 0);
      }, 100);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  return (
    <Router>
      <div className="min-h-screen">
        <Header />
        <RouteWrapper>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/thank-you" element={<ThankYouPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-use" element={<TermsOfUse />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </RouteWrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;