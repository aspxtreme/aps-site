import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Award, Shield, MessageCircle } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    propertyType: '',
    message: '',
    files: null as FileList | null
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    if (e.target.type === 'file') {
      const fileInput = e.target as HTMLInputElement;
      setFormData(prev => ({
        ...prev,
        files: fileInput.files
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [e.target.name]: e.target.value
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // TODO: Replace with Google Sheets submission URL
      const response = await fetch('YOUR_GOOGLE_APPS_SCRIPT_URL_HERE', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          timestamp: new Date().toISOString(),
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          propertyType: formData.propertyType,
          message: formData.message,
          source: 'All Star Property Services Website - Contact Page'
        }),
      });

      if (response.ok) {
        alert('Thank you! Your message has been sent. We\'ll get back to you within 24-48 hours.');
        setFormData({ name: '', email: '', phone: '', propertyType: '', message: '', files: null });
      } else {
        throw new Error('Failed to submit form');
      }

    } catch (error) {
      console.error('Form submission error:', error);
      alert('There was an error sending your message. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
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
            <MessageCircle className="w-16 h-16 text-accent-cyan mx-auto mb-6" />
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">Contact Us</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to partner with All-Star Property Service? <br />
              Get in touch today for your free inspection and fast estimate.
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
                      Orange County, Los Angeles, Ventura, Santa Barbara, Riverside, San Bernadino, San Diego, Imperial Counties and parts of Kern & San Luis Obispo
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="lg:col-span-3">
            <div className="bg-white border-2 border-accent-red/20 rounded-xl p-8 shadow-lg shadow-accent-red/10">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Request Your Free Estimate</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-red focus:border-transparent transition-colors duration-200"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-red focus:border-transparent transition-colors duration-200"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-red focus:border-transparent transition-colors duration-200"
                    />
                  </div>
                  <div>
                    <label htmlFor="propertyType" className="block text-sm font-medium text-gray-700 mb-2">
                      Property Type
                    </label>
                    <select
                      id="propertyType"
                      name="propertyType"
                      value={formData.propertyType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-red focus:border-transparent transition-colors duration-200"
                    >
                      <option value="">Select Property Type</option>
                      <option value="commercial">Commercial</option>
                      <option value="multi-family">Multi-Family</option>
                      <option value="industrial">Industrial</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell us about your project needs ..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-red focus:border-transparent transition-colors duration-200 resize-none"
                  />
                </div>

                <div>
                  <label htmlFor="files" className="block text-sm font-medium text-gray-700 mb-2">
                    Attach Photos or Documents (Optional)
                  </label>
                  <input
                    type="file"
                    id="files"
                    name="files"
                    onChange={handleChange}
                    multiple
                    accept=".jpg,.jpeg,.png,.pdf,.doc,.docx"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-red focus:border-transparent transition-colors duration-200 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-red-50 file:text-red-700 hover:file:bg-red-100"
                  />
                  <p className="text-sm text-gray-500 mt-2">
                    Accepted formats: JPG, PNG, PDF, DOC, DOCX (Max 10MB per file)
                  </p>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 px-8 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl ${
                    isSubmitting
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-accent-red hover:bg-accent-cyan hover:text-[#181B38]'
                  } text-white`}
                >
                  {isSubmitting ? 'Sending...' : 'Get Your Free Estimate'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;