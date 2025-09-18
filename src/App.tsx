import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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

  return (
    <Router>
      <div className="min-h-screen">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route 
            path="/thank-you" 
            element={
              <>
                {console.log('ThankYou route matched')}
                <ThankYouPage />
              </>
            } 
          />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-use" element={<TermsOfUse />} />
          <Route path="*" element={
            <>
              {console.log('Catch-all route matched for:', window.location.pathname)}
              <HomePage />
            </>
          } />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;