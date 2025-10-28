import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle, Phone, Mail, ArrowRight } from 'lucide-react';

const ThankYouPage = () => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate('/');
    window.scrollTo(0, 0);
  };

  const goToContact = () => {
    navigate('/contact');
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-white pt-16">
      {/* Header */}
      <div className="bg-primary-blue py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <CheckCircle className="w-16 h-16 text-accent-cyan mx-auto mb-6" />
          <h1 className="text-4xl font-bold text-white mb-4">Thank You!</h1>
          <p className="text-xl text-gray-300">
            Your message has been successfully submitted.<br />
            We'll get back to you within 24-48 hours with your free estimate.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">What Happens Next?</h2>
          <div className="bg-slate-50 p-8 rounded-xl">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-accent-red text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">1</div>
                <h3 className="font-semibold text-gray-900 mb-2">Review</h3>
                <p className="text-gray-600">We'll review your project details</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-accent-red text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">2</div>
                <h3 className="font-semibold text-gray-900 mb-2">Contact</h3>
                <p className="text-gray-600">We'll call within 24-48 hours</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-accent-red text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">3</div>
                <h3 className="font-semibold text-gray-900 mb-2">Estimate</h3>
                <p className="text-gray-600">You'll get a detailed estimate</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Options */}
        <div className="bg-primary-blue rounded-xl p-8 text-center text-white mb-8">
          <h3 className="text-2xl font-bold mb-6">Need Immediate Assistance?</h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="tel:+17146319056" 
              className="inline-flex items-center px-6 py-3 bg-accent-red text-white font-semibold rounded-lg hover:bg-accent-cyan hover:text-primary-blue transition-all duration-200"
            >
              <Phone className="w-5 h-5 mr-2" />
              (714) 631-9056
            </a>
            <a 
              href="mailto:quote@allstarpropertyservice.com" 
              className="inline-flex items-center px-6 py-3 bg-secondary-blue text-white font-semibold rounded-lg hover:bg-accent-cyan hover:text-primary-blue transition-all duration-200"
            >
              <Mail className="w-5 h-5 mr-2" />
              Email Us
            </a>
          </div>
        </div>

        {/* Navigation */}
        <div className="text-center space-y-4">
          <button 
            onClick={goHome}
            className="inline-flex items-center justify-center px-8 py-4 bg-accent-red text-white font-semibold rounded-lg hover:bg-accent-cyan hover:text-primary-blue transition-all duration-200 mr-4"
          >
            Return to Home
            <ArrowRight className="ml-2 w-5 h-5" />
          </button>
          <button 
            onClick={goToContact}
            className="inline-flex items-center justify-center px-8 py-4 bg-gray-100 text-gray-800 font-semibold rounded-lg hover:bg-gray-200 transition-all duration-200"
          >
            Submit Another Request
          </button>
        </div>
      </div>
    </div>
  );
};

export default ThankYouPage;