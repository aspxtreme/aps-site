import React from 'react';
import { Shield, Wrench, FileCheck, AlertTriangle, Clock, Award } from 'lucide-react';
import ImageCarousel from './ImageCarousel';

const Services = () => {
  const servicesRow1 = [
    {
      icon: Shield,
      title: 'Trash Chute Repair & Cleaning',
      description: 'Expert repair, maintenance, and cleaning of trash chutes, ensuring safe and efficient operation for multi-story buildings.',
      features: [
        'Chute door repairs & replacement',
        'Discharge door repair & replacement',
        'Free repair inspections',
        'Emergency repair services'
      ]
    },
    {
      icon: Wrench,
      title: 'Professional Window Cleaning',
      description: 'High-quality window cleaning services for commercial and multi-family buildings, ensuring crystal-clear views and professional appearance.',
      features: [
        'Interior & exterior cleaning',
        'High-rise window access',
        'Streak-free professional results',
        'Regular maintenance schedules'
      ]
    },
    {
      icon: FileCheck,
      title: 'Asphalt Striping & Surface Repair',
      description: 'Professional asphalt striping and surface repair designed to maintain safe and organized parking areas.',
      features: [
        'Parking lot line striping',
        'ADA compliance markings',
        'Surface crack repair',
        'Asphalt maintenance'
      ]
    },
    {
      icon: AlertTriangle,
      title: 'Parking Garage Pressure Washing',
      description: 'Comprehensive pressure washing services for parking garages, removing stains, debris, and maintaining clean facilities.',
      features: [
        'Deep cleaning & stain removal',
        'Oil stain treatment',
        'Concrete surface restoration',
        'Regular maintenance programs'
      ]
    }
  ];

  const servicesRow2 = [
    {
      icon: Shield,
      title: 'Graffiti Removal & Painting',
      description: 'Professional graffiti removal and protective coating services to maintain your property\'s appearance and value.',
      features: [
        'Complete graffiti removal',
        'Anti-graffiti protective coatings',
        'Touch-up painting services',
        'Preventive maintenance programs'
      ]
    },
    {
      icon: Wrench,
      title: 'Floor, Tile & Carpet Cleaning',
      description: 'Deep cleaning services for all floor types including tile, ensuring hygienic and professional environments for tenants and visitors.',
      features: [
        'Commercial carpet cleaning',
        'Tile & hard floor maintenance',
        'Stain removal & treatment',
        'Regular cleaning schedules'
      ]
    },
    {
      icon: AlertTriangle,
      title: 'Trash Bin & Dumpster Cleaning',
      description: 'Sanitization and cleaning of waste containers to eliminate odors, bacteria, and maintain a healthy environment.',
      features: [
        'High-pressure sanitization',
        'Odor elimination treatment',
        'Scheduled cleaning programs',
        'Eco-friendly cleaning solutions'
      ]
    },
    {
      icon: FileCheck,
      title: 'Commercial Handyman Services',
      description: 'Comprehensive repair and maintenance services for commercial properties, handling everything from minor fixes to major installations.',
      features: [
        'Door & window maintenance',
        'Broken glass replacement',
        'Drywall & painting services',
        'Plumbing, electrical & HVAC support'
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Professional Property Services
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
            All-Star Property Service brings discipline, precision, and follow-through to every service. Our clients work with year-after-year because we offer reliability and compliance at a fair price. We are humble, servant-led and veteran-owned. Simply stated: We'll do a great job for you!
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-16">
          {servicesRow1.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className="bg-white p-6 lg:p-8 rounded-xl border border-gray-200 shadow-lg hover:shadow-xl hover:border-secondary-blue hover:shadow-secondary-blue/20 transition-all duration-300 hover:transform hover:scale-105">
                <div className="w-12 h-12 lg:w-16 lg:h-16 bg-secondary-blue/20 rounded-xl flex items-center justify-center mb-4 lg:mb-6">
                  <Icon className="w-8 h-8 text-secondary-blue" />
                </div>
                <h3 className="text-lg lg:text-xl font-semibold text-primary-blue mb-3">{service.title}</h3>
                <p className="text-sm lg:text-base text-gray-600 mb-4 lg:mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-xs lg:text-sm text-gray-700">
                      <div className="w-1.5 h-1.5 bg-accent-cyan rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Image Carousel */}
        <ImageCarousel />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-16">
          {servicesRow2.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className="bg-white p-6 lg:p-8 rounded-xl border border-gray-200 shadow-lg hover:shadow-xl hover:border-secondary-blue hover:shadow-secondary-blue/20 transition-all duration-300 hover:transform hover:scale-105">
                <div className="w-12 h-12 lg:w-16 lg:h-16 bg-secondary-blue/20 rounded-xl flex items-center justify-center mb-4 lg:mb-6">
                  <Icon className="w-8 h-8 text-secondary-blue" />
                </div>
                <h3 className="text-lg lg:text-xl font-semibold text-primary-blue mb-3">{service.title}</h3>
                <p className="text-sm lg:text-base text-gray-600 mb-4 lg:mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-xs lg:text-sm text-gray-700">
                      <div className="w-1.5 h-1.5 bg-accent-cyan rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 text-center">
          <div className="p-6">
            <div className="w-12 h-12 lg:w-16 lg:h-16 bg-accent-red/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="w-8 h-8 text-accent-red" />
            </div>
            <h4 className="text-lg lg:text-xl font-semibold text-gray-900 mb-2">Rapid Response</h4>
            <p className="text-sm lg:text-base text-gray-600">24-48 hour quote turnaround for all service requests</p>
          </div>
          <div className="p-6">
            <div className="w-12 h-12 lg:w-16 lg:h-16 bg-secondary-blue/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-secondary-blue" />
            </div>
            <h4 className="text-lg lg:text-xl font-semibold text-gray-900 mb-2">Certified Professionals</h4>
            <p className="text-sm lg:text-base text-gray-600">Licensed crews with specialized compliance expertise</p>
          </div>
          <div className="p-6 sm:col-span-2 lg:col-span-1">
            <div className="w-12 h-12 lg:w-16 lg:h-16 bg-primary-blue/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-primary-blue" />
            </div>
            <h4 className="text-lg lg:text-xl font-semibold text-gray-900 mb-2">Veteran Owned</h4>
            <p className="text-sm lg:text-base text-gray-600">We serve, not sell, with precision and reliability on every job</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;