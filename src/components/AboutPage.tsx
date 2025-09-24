import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Flag, Target, Shield, CheckCircle, Users, Award } from 'lucide-react';

const AboutPage = () => {
  const navigate = useNavigate();

  const navigateToContact = () => {
    navigate('/contact');
    window.scrollTo(0, 0);
  };

  const coreValues = [
    {
      icon: Target,
      title: 'Disciplined',
      description: 'Military-level preparation and execution'
    },
    {
      icon: CheckCircle,
      title: 'Clear',
      description: 'Transparent communication, no surprises'
    },
    {
      icon: Shield,
      title: 'Reliable',
      description: 'On time, every time'
    },
    {
      icon: Award,
      title: 'Fair',
      description: 'Competitive pricing without unnecessary overhead'
    },
    {
      icon: Users,
      title: 'Supportive',
      description: 'The team behind your team'
    }
  ];

  return (
    <div className="min-h-screen bg-white pt-16">
      {/* Header */}
      <div className="bg-primary-blue py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Flag className="w-16 h-16 text-accent-cyan mx-auto mb-6" />
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">About Us</h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              As a veteran-owned business, we apply the lessons of military precision — planning, execution, and accountability — to every professional property service we provide. At APS, we promise to keep your property spotless, safe, and inviting.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Hero Image and Our Story */}
        <div className="mb-20">
          <div className="space-y-8 mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-6">
                APS was founded on the belief that property managers deserve true partners, not vendors. Whether it's chute repairs, compliance inspections, cleaning, or maintenance, our approach is always the same: professional results you can trust, delivered at a fair price.
              </p>
              <ul className="text-lg text-gray-700 space-y-2">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-accent-cyan rounded-full mr-4 flex-shrink-0"></div>
                  <strong>Code Compliance & Inspection-Ready</strong>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-accent-cyan rounded-full mr-4 flex-shrink-0"></div>
                  <strong>Reliability & Communication</strong>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-accent-cyan rounded-full mr-4 flex-shrink-0"></div>
                  <strong>Highest-Quality, Professional Results</strong>
                </li>
              </ul>
            </div>
          </div>

          <div className="relative">
            <img 
              src="https://cdn.jsdelivr.net/gh/aspxtreme/aps-images@main/building-flag-mirror.jpg" 
              alt="American flag on commercial building representing veteran-owned business values"
              className="w-full h-[400px] object-cover rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg border">
              <div className="text-center">
                <div className="text-3xl font-bold text-accent-red">100%</div>
                <div className="text-sm text-gray-600">Veteran Owned</div>
              </div>
            </div>
          </div>
        </div>

        {/* Our Promise & Differentiator */}
        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          <div className="bg-secondary-blue/20 p-8 rounded-2xl border-2 border-secondary-blue/30">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Promise</h2>
            <h3 className="text-2xl font-semibold text-accent-red mb-6">Disciplined. Caring. Great Communication.</h3>
            <p className="text-xl text-gray-600 leading-relaxed">
              We carry the mission, so you can keep the credit. From inspections to execution, we deliver professional 
              results that make our clients look good.
            </p>
          </div>

          <div className="bg-primary-blue p-8 rounded-2xl text-white">
            <h2 className="text-3xl font-bold mb-6">Our Differentiator</h2>
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-accent-cyan">Planned. Precise. Done Properly.</h3>
              <p className="text-xl leading-relaxed">
                APS meticulously plans every detail of every mission, communicates clearly, and delivers results that 
                pass inspection — without wasted time or excuses.
              </p>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-6">
              Property and facility managers carry an impossible burden. You're judged on keeping everything spotless, safe, and compliant — but the service partners you have to rely on can make your job even more difficult. Having to constantly follow-up and manage details can feel like you're doing their job, instead of yours.
            </p>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              To help service your properties, these values guide every decision we make and every service we deliver.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreValues.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="flip-card h-64 rounded-xl shadow-lg">
                  <div className="flip-card-inner">
                    {/* Front of card - Just the title */}
                    <div className="flip-card-front bg-primary-blue rounded-xl flex items-center justify-center p-8">
                      <h3 className="text-4xl font-bold text-white text-center">{value.title}</h3>
                    </div>
                    {/* Back of card - Icon and description */}
                    <div className="flip-card-back bg-accent-cyan rounded-xl p-8 flex flex-col items-center justify-center">
                      <div className="w-16 h-16 bg-primary-blue rounded-xl flex items-center justify-center mb-6">
                        <Icon className="w-8 h-8 text-accent-cyan" />
                      </div>
                      <h3 className="text-2xl font-semibold text-primary-blue mb-3">{value.title}</h3>
                      <p className="text-primary-blue leading-relaxed text-center">{value.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
            
            {/* Logo card - static, no flip */}
            <div className="bg-primary-blue rounded-xl shadow-lg h-64 flex items-center justify-center p-8">
              <img 
                src="https://cdn.jsdelivr.net/gh/aspxtreme/aps-images@main/aps-logo-stack-blu-bg.png" 
                alt="All Star Property Services Logo" 
                className="max-w-full max-h-full object-contain"
              />
            </div>
          </div>
        </div>

        {/* Closing Statement */}
        <div className="mb-20 relative bg-slate-50 p-12 rounded-2xl border-2 border-gray-200 overflow-hidden">
          {/* Background Image */}
          <div 
            className="absolute inset-0 opacity-50 bg-cover bg-no-repeat"
            style={{
              backgroundImage: 'url(https://cdn.jsdelivr.net/gh/aspxtreme/aps-images@main/building-flag.jpg)',
              backgroundPosition: 'right 20% top 0%'
            }}
          ></div>
          
          {/* White Overlay for Readability */}
          <div className="absolute inset-0 bg-white opacity-20"></div>
          
          {/* Content */}
          <div className="relative z-10 text-center">
            <h2 className="text-3xl font-bold text-primary-blue mb-6">Your Dependable Partner</h2>
            <p className="text-xl text-gray-900 leading-relaxed mb-6 max-w-4xl mx-auto">
              For more than a decade, our "All-Star" professional property services team has served as the chosen partner of top property management firms and commercial real estate owners because APS is always reliable and fair.
            </p>
            <p className="text-xl text-gray-900 leading-relaxed mb-4 max-w-3xl mx-auto">
              With APS, you can say goodbye to missed deadlines, sloppy work and inflated invoices. And say hello to project precision and attention to detail.
            </p>
            <p className="text-2xl text-accent-red font-bold">
              Mission complete, every time.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-primary-blue rounded-2xl p-12 shadow-lg">
            <h3 className="text-3xl font-bold text-white mb-4">Ready to Experience the APS Difference?</h3>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join property managers who trust APS for reliable, compliant, and professional service delivery.
            </p>
            <button 
              onClick={navigateToContact}
              className="inline-flex items-center justify-center px-8 py-4 bg-accent-red text-white font-semibold rounded-lg hover:bg-accent-cyan hover:text-[#181B38] transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Get Your Free Inspection Today
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;