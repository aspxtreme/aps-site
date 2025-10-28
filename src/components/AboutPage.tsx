import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Users, Target, Shield, CheckCircle, Award, Building } from 'lucide-react';

const AboutPage = () => {
  const navigate = useNavigate();

  const navigateToContact = () => {
    navigate('/contact');
    window.scrollTo(0, 0);
  };

  const coreValues = [
    {
      icon: Target,
      title: 'Excellence',
      description: 'Committed to the highest standards of professional management'
    },
    {
      icon: CheckCircle,
      title: 'Integrity',
      description: 'Transparent, honest, and ethical in all our dealings'
    },
    {
      icon: Shield,
      title: 'Reliability',
      description: 'Dependable service you can count on, 24/7'
    },
    {
      icon: Award,
      title: 'Expertise',
      description: 'Deep knowledge of condominium and HOA management'
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Building stronger, more vibrant communities'
    }
  ];

  const stats = [
    { number: '500+', label: 'Properties Managed' },
    { number: '25+', label: 'Years Experience' },
    { number: '10K+', label: 'Happy Residents' },
    { number: '98%', label: 'Client Satisfaction' }
  ];

  return (
    <div className="min-h-screen bg-warm-white pt-20">
      {/* Header */}
      <div className="bg-primary-navy py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <img 
              src="https://images.squarespace-cdn.com/content/v1/5ba66b8eca525b39055173f0/8bb26ac2-7e67-4506-bb76-120073a80434/CA+LOGO+Transparent.png?format=1500w"
              alt="Condo Associates"
              className="h-16 w-auto mx-auto mb-6"
            />
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">About Us</h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              For over 25 years, Condo Associates has been a trusted partner in condominium and 
              homeowner association management, helping communities thrive through professional 
              service and expert guidance.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Our Story */}
        <div className="mb-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-primary-navy">Our Story</h2>
              <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                <p>
                  Founded in 1998, Condo Associates began with a simple mission: to provide 
                  professional, reliable, and personalized management services for condominium 
                  and homeowner associations.
                </p>
                <p>
                  What started as a small local firm has grown into one of the region's most 
                  trusted property management companies, managing over 500 properties and serving 
                  more than 10,000 residents across diverse communities.
                </p>
                <p>
                  Our success is built on the foundation of strong relationships, transparent 
                  communication, and an unwavering commitment to excellence in everything we do.
                </p>
              </div>
            </div>

            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Professional management team"
                className="w-full h-[400px] object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg border">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-navy">25+</div>
                  <div className="text-sm text-gray-600">Years Serving</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-secondary-blue rounded-2xl p-8 lg:p-12 mb-20">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">Our Impact</h2>
            <p className="text-xl text-gray-100">Building stronger communities through professional management</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-200 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-navy mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              These principles guide every decision we make and every service we provide, 
              ensuring consistent excellence in community management.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreValues.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
                  <div className="w-16 h-16 bg-accent-cyan/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-8 h-8 text-accent-cyan" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary-navy mb-3">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Leadership Team */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-primary-navy mb-4">Leadership Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the experienced professionals who lead our commitment to excellence
            </p>
          </div>

          <div className="bg-light-gray rounded-2xl p-8 lg:p-12">
            <div className="text-center">
              <img 
                src="https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?auto=compress&cs=tinysrgb&w=400" 
                alt="Leadership team"
                className="w-64 h-64 object-cover rounded-full mx-auto mb-8 shadow-xl"
              />
              <h3 className="text-2xl font-bold text-primary-navy mb-2">Professional Management Team</h3>
              <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
                Our leadership team brings together decades of experience in property management, 
                financial oversight, and community development. Each member is committed to delivering 
                exceptional service and building lasting relationships with our clients.
              </p>
            </div>
          </div>
        </div>

        {/* Our Mission & Vision */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <div className="bg-primary-navy p-8 rounded-2xl text-white">
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-xl leading-relaxed">
              To provide exceptional management services that enhance property values, strengthen 
              community bonds, and deliver peace of mind to property owners and residents alike.
            </p>
          </div>
          <div className="bg-accent-cyan p-8 rounded-2xl text-white">
            <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
            <p className="text-xl leading-relaxed">
              To be the premier choice for condominium and HOA management, setting the standard 
              for professionalism, innovation, and community excellence in our industry.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-white rounded-2xl p-12 shadow-lg border border-gray-200">
            <h3 className="text-3xl font-bold text-primary-navy mb-4">Ready to Experience the Difference?</h3>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
              Join hundreds of communities who trust Condo Associates for professional, 
              reliable, and personalized management services.
            </p>
            <button 
              onClick={navigateToContact}
              className="inline-flex items-center justify-center px-8 py-4 bg-primary-navy text-white font-semibold rounded-lg hover:bg-secondary-blue transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Schedule Your Free Consultation
            </button>
          </div>
        </div>
      </div>
      </div>
  );
};

export default AboutPage;