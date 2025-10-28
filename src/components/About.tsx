import React from 'react';
import { Target, Award, Users, TrendingUp, CheckCircle } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Expert Leadership',
      description: 'Decades of experience in condominium and HOA management with proven results.'
    },
    {
      icon: Award,
      title: 'Professional Excellence',
      description: 'Licensed, bonded, and insured with industry certifications and continuous training.'
    },
    {
      icon: Users,
      title: 'Community Focused',
      description: 'We understand that each community is unique and tailor our services accordingly.'
    },
    {
      icon: TrendingUp,
      title: 'Financial Expertise',
      description: 'Advanced financial management and reporting to maximize your community\'s value.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-light-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-primary-navy mb-6">
                Why Choose Condo Associates
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-6">
                With over 25 years of experience in condominium and homeowner association management, 
                Condo Associates has built a reputation for excellence, integrity, and professional service.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We understand the unique challenges facing condominium boards and property owners. 
                Our comprehensive approach combines financial expertise, maintenance excellence, 
                and clear communication to ensure your community thrives.
              </p>
            </div>

            <div className="grid gap-6">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-secondary-blue/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-secondary-blue" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-primary-navy mb-2">{value.title}</h4>
                      <p className="text-gray-600 leading-relaxed">{value.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="relative">
            <img 
              src="https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?auto=compress&cs=tinysrgb&w=800" 
              alt="Professional team meeting"
              className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-xl shadow-lg border">
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary-blue">98%</div>
                <div className="text-sm text-gray-600">Client Satisfaction</div>
              </div>
            </div>
            <div className="absolute -top-8 -right-8 bg-accent-gold p-6 rounded-xl shadow-lg">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">A+</div>
                <div className="text-sm text-white">BBB Rating</div>
              </div>
            </div>
          </div>
        </div>

        {/* Our Approach Section */}
        <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-primary-navy mb-4">Our Management Approach</h3>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              We believe in proactive management, transparent communication, and building strong 
              community relationships that enhance property values and resident satisfaction.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-accent-cyan mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-lg font-semibold text-primary-navy mb-2">Proactive Management</h4>
                  <p className="text-gray-600">We anticipate issues before they become problems, saving time and money.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-accent-cyan mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-lg font-semibold text-primary-navy mb-2">Transparent Communication</h4>
                  <p className="text-gray-600">Regular updates, detailed reporting, and open communication channels.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-accent-cyan mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-lg font-semibold text-primary-navy mb-2">Financial Excellence</h4>
                  <p className="text-gray-600">Detailed budgeting, careful expense management, and comprehensive reporting.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-accent-cyan mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-lg font-semibold text-primary-navy mb-2">Community Building</h4>
                  <p className="text-gray-600">Fostering positive relationships and enhancing community living experience.</p>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center">
              <img 
                src="https://images.pexels.com/photos/1642125/pexels-photo-1642125.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Community management approach"
                className="w-4/5 h-auto rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;