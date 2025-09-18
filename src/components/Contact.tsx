import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'quote@allstarpropertyservice.com',
      description: '24 hour response'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '(714) 631-9056',
      description: 'Call or text for immediate assistance'
    },
    {
      icon: MapPin,
      title: 'Service Areas',
      value: 'Orange County, Los Angeles, Ventura, Santa Barbara, Riverside, San Bernardino, San Diego, Imperial Counties and parts of Kern & San Luis Obispo',
      description: 'Commercial & Multi-Family Properties'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Get Your Free Inspection & Estimate Today
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to ensure your property's compliance and service needs are handled professionally? 
            Contact us for a no-obligation consultation.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          <div className="lg:col-span-1 space-y-6 order-2 lg:order-1">
            <h3 className="text-xl lg:text-2xl font-semibold text-gray-900">Contact Information</h3>
            
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <div key={index} className="flex items-start space-x-4 p-4 bg-slate-50 rounded-lg">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-blue-900" />
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-semibold text-gray-900">{info.title}</h4>
                    <p className="text-sm sm:text-base text-gray-900">{info.value}</p>
                    <p className="text-xs sm:text-sm text-gray-600">{info.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="lg:col-span-2 order-1 lg:order-2">
            <form 
              name="homepage-contact" 
              method="POST" 
              data-netlify="true"
              encType="multipart/form-data"
              action="/thank-you"
              className="bg-slate-50 p-6 sm:p-8 rounded-xl space-y-4 sm:space-y-6 border-2 border-accent-red/20 shadow-lg shadow-accent-red/10"
            >
              <input type="hidden" name="form-name" value="homepage-contact" />
              <input type="hidden" name="source" value="Homepage Contact Form" />
              
              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label htmlFor="name" className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label htmlFor="phone" className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                  />
                </div>
                <div>
                  <label htmlFor="propertyType" className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">
                    Property Type *
                  </label>
                  <select
                    id="propertyType"
                    name="propertyType"
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
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
                <label htmlFor="message" className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">
                  Project Details *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell us about your project needs ..."
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 resize-none"
                />
              </div>

              <div>
                <label htmlFor="attachments" className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">
                  Attach Photos or Documents (Optional)
                </label>
                <input
                  type="file"
                  id="attachments"
                  name="attachments"
                  multiple
                  accept=".jpg,.jpeg,.png,.pdf,.doc,.docx"
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-red focus:border-transparent transition-colors duration-200 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-red-50 file:text-red-700 hover:file:bg-red-100"
                />
                <p className="text-xs sm:text-sm text-gray-500 mt-2">
                  Accepted formats: JPG, PNG, PDF, DOC, DOCX (Max 10MB per file)
                </p>
              </div>

              <button
                type="submit"
                className="w-full py-3 sm:py-4 px-6 sm:px-8 text-sm sm:text-base bg-accent-red hover:bg-accent-cyan hover:text-[#181B38] text-white rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Get Estimate Today
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;