import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle, Phone, Mail, MapPin, Clock, Award, Shield } from 'lucide-react';

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

  const advantages = [
    {
      icon: Clock,
      title: 'Rapid Response',
      description: '24-48 hour quote turnaround for all service requests'
    },
    {
      icon: Award,
      title: 'Certified Professionals',
      description: 'Licensed contractors with specialized compliance expertise'
    },
    {
      icon: Shield,
      title: 'Veteran Owned',
      description: 'Military precision and reliability in every service'
    }
  ];

  return (
    <div className="min-h-screen bg-white pt-16">
      {/* Header */}
      <div className="bg-primary-blue py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <CheckCircle className="w-16 h-16 text-accent-cyan mx-auto mb-6" />
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">Thank You!</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Your message has been successfully submitted. <br />
              We'll get back to you within 24-48 hours with your free estimate.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-5 gap-12">
          
          {/* Left Column - Info */}
          <div className="lg:col-span-2 space-y-8">

            {/* Services Overview */}
            <div className="bg-slate-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Professional Services</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                As a veteran-owned company, we deliver specialized property maintenance with military precision and attention to detail.
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-accent-red rounded-full mr-3 flex-shrink-0"></div>
                  Trash Chute Repair & Cleaning
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-accent-red rounded-full mr-3 flex-shrink-0"></div>
                  Professional Window Cleaning
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-accent-red rounded-full mr-3 flex-shrink-0"></div>
                  Asphalt Striping & Surface Repair
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-accent-red rounded-full mr-3 flex-shrink-0"></div>
                  Parking Garage Pressure Washing
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-accent-red rounded-full mr-3 flex-shrink-0"></div>
                  Commercial Handyman Services
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-accent-red rounded-full mr-3 flex-shrink-0"></div>
                  Plus More Cost-Effective Solutions
                </li>
              </ul>
            </div>
            
            {/* Why Choose APS */}
            <div className="space-y-6">
              {advantages.map((advantage, index) => {
                const Icon = advantage.icon;
                let iconColor = 'text-primary-blue';
                let bgColor = 'bg-secondary-blue/20';
                
                if (advantage.title === 'Rapid Response') {
                  iconColor = 'text-accent-red';
                  bgColor = 'bg-accent-red/20';
                } else if (advantage.title === 'Certified Professionals') {
                  iconColor = 'text-secondary-blue';
                  bgColor = 'bg-secondary-blue/20';
                } else if (advantage.title === 'Veteran Owned') {
                  iconColor = 'text-primary-blue';
                  bgColor = 'bg-primary-blue/20';
                }
                
                return (
                  <div key={index} className="flex items-start space-x-4">
                    <div className={`w-12 h-12 ${bgColor} rounded-lg flex items-center justify-center flex-shrink-0`}>
                      <Icon className={`w-6 h-6 ${iconColor}`} />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">{advantage.title}</h4>
                      <p className="text-gray-600 leading-relaxed">{advantage.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Contact Info */}
            <div className="bg-primary-blue p-6 rounded-xl text-white">
              <h3 className="text-xl font-semibold mb-4">Get In Touch</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-accent-cyan" />
                  <div>
                    <p className="font-medium">Email</p>
                    <a href="mailto:quote@allstarpropertyservice.com" className="text-accent-cyan hover:text-white transition-colors">
                      quote@allstarpropertyservice.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-accent-cyan" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <a href="tel:+17146319056" className="text-accent-cyan hover:text-white transition-colors">
                      (714) 631-9056
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-accent-cyan flex-shrink-0" />
                  <div>
                    <p className="font-medium">Service Areas</p>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      Orange County, Los Angeles, Ventura, Santa Barbara, Riverside, San Bernardino, San Diego, Imperial Counties and parts of Kern & San Luis Obispo
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Thank You Message */}
          <div className="lg:col-span-3">
            <div className="bg-white border-2 border-accent-red/20 rounded-xl p-8 shadow-lg shadow-accent-red/10">
              <div className="text-center mb-8">
                <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Form Submitted Successfully!</h2>
                <p className="text-xl text-gray-600 leading-relaxed mb-6">
                  Thank you for contacting All-Star Property Service. Your request has been received and we appreciate your interest in our professional property services.
                </p>
              </div>

              <div className="bg-slate-50 p-6 rounded-xl mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">What Happens Next?</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-accent-red text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">1</div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Review</h4>
                      <p className="text-gray-600">Our team will carefully review your project details and requirements.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-accent-red text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">2</div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Contact</h4>
                      <p className="text-gray-600">We'll reach out within 24-48 hours to schedule your free inspection.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-accent-red text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">3</div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Estimate</h4>
                      <p className="text-gray-600">After inspection, you'll receive a detailed, fair-priced estimate.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <p className="text-lg text-gray-700 mb-4">
                  Need immediate assistance? Don't hesitate to call us directly:
                </p>
                <a 
                  href="tel:+17146319056" 
                  className="inline-flex items-center justify-center px-6 py-3 bg-accent-red text-white font-semibold rounded-lg hover:bg-accent-cyan hover:text-[#181B38] transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  (714) 631-9056
                </a>
                <div className="mt-6 space-x-4">
                  <button 
                    onClick={goHome}
                    className="inline-flex items-center justify-center px-6 py-3 bg-gray-100 text-gray-800 font-semibold rounded-lg hover:bg-gray-200 transition-all duration-200"
                  >
                    Return to Home
                  </button>
                  <button 
                    onClick={goToContact}
                    className="inline-flex items-center justify-center px-6 py-3 bg-secondary-blue text-white font-semibold rounded-lg hover:bg-primary-blue transition-all duration-200"
                  >
                    Contact Us Again
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYouPage;