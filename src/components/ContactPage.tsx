import React from 'react';
import { Phone, Mail, MapPin, Clock, MessageCircle, Users, Building, Wrench } from 'lucide-react';

const ContactPage = () => {
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

  const services = [
    {
      icon: Users,
      title: 'HOA Management',
      description: 'Complete board support and community oversight'
    },
    {
      icon: Building,
      title: 'Financial Management',
      description: 'Budgeting, accounting, and financial reporting'
    },
    {
      icon: Wrench,
      title: 'Property Maintenance',
      description: 'Preventive maintenance and repair coordination'
    }
  ];

  return (
    <div className="min-h-screen bg-warm-white pt-20">
      {/* Header */}
      <div className="bg-primary-navy py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <MessageCircle className="w-16 h-16 text-accent-gold mx-auto mb-6" />
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">Contact Us</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to experience professional condominium management? <br />
              Get in touch today for your free consultation.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-5 gap-12">
          
          {/* Right Column - Form */}
          <div className="lg:col-span-3 order-1 lg:order-2">
            <div className="bg-white border-2 border-secondary-blue/20 rounded-xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-primary-navy mb-6 text-center">Request Your Free Consultation</h2>
              <form
                onSubmit={handleSubmit}
                name="contactpage-contact"
                method="POST"
                action="/thank-you"
                encType="multipart/form-data"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
              >
                <input type="hidden" name="bot-field" />
                <input type="hidden" name="form-name" value="contactpage-contact" />
                <input type="hidden" name="source" value="Contact Page Form" />
                
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

          {/* Left Column - Info */}
          <div className="lg:col-span-2 space-y-8 order-2 lg:order-1">

            {/* Services Overview */}
            <div className="bg-light-gray p-6 rounded-xl">
              <h3 className="text-2xl font-bold text-primary-navy mb-4">Our Management Services</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Professional condominium and HOA management services with over 25 years of experience 
                in building strong communities and protecting property values.
              </p>
              <div className="space-y-4">
                {services.map((service, index) => {
                  const Icon = service.icon;
                  return (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-secondary-blue/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                        <Icon className="w-4 h-4 text-secondary-blue" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary-navy">{service.title}</h4>
                        <p className="text-sm text-gray-600">{service.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            
            {/* Contact Info */}
            <div className="bg-primary-navy p-6 rounded-xl text-white">
              <h3 className="text-xl font-semibold mb-4">Get In Touch</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Phone className="w-5 h-5 text-accent-cyan flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <a href="tel:+15551234567" className="text-accent-gold hover:text-white transition-colors">
                      (555) 123-4567
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Mail className="w-5 h-5 text-accent-cyan flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium">Email</p>
                    <a href="mailto:info@condoassociates.com" className="text-accent-gold hover:text-white transition-colors">
                      info@condoassociates.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-accent-cyan flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium">Office</p>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      123 Management Boulevard<br />
                      Suite 100, City, State 12345
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-accent-cyan flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium">Business Hours</p>
                    <p className="text-gray-300 text-sm">
                      Monday - Friday: 8:00 AM - 6:00 PM<br />
                      24/7 Emergency Support
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;