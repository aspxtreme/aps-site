import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    try {
      const response = await fetch('/', {
        method: 'POST',
        body: formData
      });
      
      if (response.ok) {
        window.location.href = '/thank-you';
      } else {
        alert('There was a problem submitting your form. Please try again.');
      }
    } catch (error) {
      alert('There was a problem submitting your form. Please try again.');
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      value: '(555) 123-4567',
      description: 'Call us during business hours'
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'info@condoassociates.com',
      description: 'We respond within 24 hours'
    },
    {
      icon: MapPin,
      title: 'Office',
      value: '123 Management Boulevard, Suite 100, City, State 12345',
      description: 'Visit us for in-person consultations'
    },
    {
      icon: Clock,
      title: 'Hours',
      value: 'Monday - Friday: 8:00 AM - 6:00 PM',
      description: '24/7 emergency support available'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary-navy mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Contact us today for a free consultation and discover how we can help your 
            condominium or HOA community thrive with professional management services.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1 space-y-6">
            <h3 className="text-2xl font-semibold text-primary-navy">Get in Touch</h3>
            
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <div key={index} className="flex items-start space-x-4 p-4 bg-light-gray rounded-lg">
                  <div className="w-12 h-12 bg-primary-navy rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-accent-cyan" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary-navy">{info.title}</h4>
                    <p className="text-primary-navy font-medium">{info.value}</p>
                    <p className="text-sm text-gray-600">{info.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="lg:col-span-2">
            <form
              onSubmit={handleSubmit}
              name="homepage-contact"
              method="POST"
              action="/thank-you"
              encType="multipart/form-data"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              className="bg-light-gray p-8 rounded-xl space-y-6 border border-gray-200"
            >
              <input type="hidden" name="bot-field" />
              <input type="hidden" name="form-name" value="homepage-contact" />
              <input type="hidden" name="source" value="Homepage Contact Form" />
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-primary-navy mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary-blue focus:border-transparent transition-colors duration-200"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-primary-navy mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary-blue focus:border-transparent transition-colors duration-200"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-primary-navy mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary-blue focus:border-transparent transition-colors duration-200"
                  />
                </div>
                <div>
                  <label htmlFor="propertyType" className="block text-sm font-medium text-primary-navy mb-2">
                    Property Type *
                  </label>
                  <select
                    id="propertyType"
                    name="propertyType"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary-blue focus:border-transparent transition-colors duration-200"
                  >
                    <option value="">Select Property Type</option>
                    <option value="condominium">Condominium</option>
                    <option value="hoa">Homeowner Association</option>
                    <option value="townhome">Townhome Community</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-primary-navy mb-2">
                  Tell Us About Your Needs *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Please describe your property management needs, current challenges, or questions..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary-blue focus:border-transparent transition-colors duration-200 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 px-8 bg-accent-cyan hover:bg-accent-cyan/80 text-primary-navy rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Request Free Consultation
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;