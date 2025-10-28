import React from 'react';
import { 
  Building, 
  Calculator, 
  Wrench, 
  Users, 
  FileText, 
  Shield,
  Clock,
  Phone,
  ArrowRight
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Building,
      title: 'HOA Management',
      description: 'Comprehensive homeowner association management including board support, meeting coordination, and community oversight.',
      image: 'https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: [
        'Board Meeting Management',
        'Architectural Review Committee Support', 
        'Community Enforcement',
        'Vendor Management'
      ]
    },
    {
      icon: Calculator,
      title: 'Financial Management',
      description: 'Complete financial oversight including budgeting, accounting, collections, and detailed financial reporting.',
      image: 'https://images.pexels.com/photos/6863183/pexels-photo-6863183.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: [
        'Monthly Financial Statements',
        'Budget Preparation & Analysis',
        'Collections Management',
        'Reserve Study Coordination'
      ]
    },
    {
      icon: Wrench,
      title: 'Property Maintenance',
      description: 'Professional maintenance services to keep your property in excellent condition and preserve its value.',
      image: 'https://images.pexels.com/photos/1642125/pexels-photo-1642125.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: [
        'Preventive Maintenance Programs',
        'Emergency Repair Coordination',
        'Contractor Management',
        'Capital Improvement Projects'
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary-navy mb-6">
            Comprehensive Management Services
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            From financial management to property maintenance, we provide complete condominium 
            and HOA management services tailored to your community's unique needs.
          </p>
        </div>

        <div className="space-y-20">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isEven = index % 2 === 0;
            
            return (
              <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center ${!isEven ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={`${!isEven ? 'lg:col-start-2' : ''}`}>
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-primary-navy rounded-xl flex items-center justify-center">
                        <Icon className="w-8 h-8 text-accent-cyan" />
                      </div>
                      <h3 className="text-3xl font-bold text-primary-navy">{service.title}</h3>
                    </div>
                    
                    <p className="text-xl text-gray-600 leading-relaxed">{service.description}</p>
                    
                    <ul className="grid md:grid-cols-2 gap-3">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-700">
                          <div className="w-2 h-2 bg-accent-cyan rounded-full mr-3 flex-shrink-0"></div>
                          <span className="font-medium">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <button className="inline-flex items-center text-primary-navy font-semibold hover:text-accent-gold transition-colors duration-200">
                      Learn More
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </button>
                  </div>
                </div>
                
                <div className={`${!isEven ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <div className="relative">
                    <img 
                      src={service.image}
                      alt={service.title}
                      className="w-full h-80 lg:h-96 object-cover rounded-2xl shadow-2xl"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-navy/20 to-transparent rounded-2xl"></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div 
            className="relative rounded-3xl overflow-hidden"
            style={{
              backgroundImage: `linear-gradient(rgba(15, 37, 84, 0.9), rgba(15, 37, 84, 0.9)), url('https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=1200')`
            }}
          >
            <div className="px-8 lg:px-16 py-16 text-center">
              <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Trusted by Communities Everywhere
              </h3>
              <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
                Our commitment to excellence speaks through our results. Join hundreds of communities 
                who trust us for professional property management.
              </p>
              
              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-accent-gold rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="w-8 h-8 text-primary-navy" />
                  </div>
                  <div className="text-4xl font-bold text-white mb-2">24/7</div>
                  <div className="text-gray-300 font-medium">Emergency Support</div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-accent-gold rounded-full flex items-center justify-center mx-auto mb-4">
                    <Building className="w-8 h-8 text-primary-navy" />
                  </div>
                  <div className="text-4xl font-bold text-white mb-2">500+</div>
                  <div className="text-gray-300 font-medium">Properties Managed</div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-accent-gold rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-primary-navy" />
                  </div>
                  <div className="text-4xl font-bold text-white mb-2">10K+</div>
                  <div className="text-gray-300 font-medium">Happy Residents</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;