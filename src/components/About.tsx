import React from 'react';
import { Target, DollarSign, Users, TrendingUp } from 'lucide-react';

const About = () => {
  const advantages = [
    {
      icon: Target,
      title: 'Industry Expertise',
      description: 'Deep knowledge of property services for commercial and multi-family real estate.'
    },
    {
      icon: DollarSign,
      title: 'Cost-Effective Approach',
      description: 'No unnecessary overhead or fluff - just disciplined, professional service at fair price.'
    },
    {
      icon: Users,
      title: 'Proven Network',
      description: 'Established relationships with qualified, licensed contractors ensure every job meets our inspection-ready standards.'
    },
    {
      icon: TrendingUp,
      title: 'Compliance Focus',
      description: 'Specialized in regulatory requirements and fire codes to keep properties safe and compliant.'
    }
  ];

  return (
    <>
      <section id="about" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Why Choose All-Star Property Service
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed">
                APS brings decades of professional property services experience to each and every one of your jobs. Property management professionals, LCAMs and owner-operators count on the All-Star team for our steadfast commitment to on-time, on-budget services.
              </p>
            </div>

            <div className="grid gap-6">
              {advantages.map((advantage, index) => {
                const Icon = advantage.icon;
                return (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-secondary-blue/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-primary-blue" />
                    </div>
                    <div>
                      <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">{advantage.title}</h4>
                      <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{advantage.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="relative">
            <img 
              src="https://cdn.jsdelivr.net/gh/aspxtreme/aps-images@main/pressure-washing.png" 
              alt="Professional pressure washing services"
              className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover object-right rounded-2xl shadow-2xl animate-float"
            />
            <div className="absolute -bottom-4 -left-4 sm:-bottom-8 sm:-left-8 bg-white p-4 sm:p-6 rounded-xl shadow-lg border animate-slide-in-left">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-primary-blue">15+</div>
                <div className="text-xs sm:text-sm text-gray-600">Years Experience</div>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 sm:-top-8 sm:-right-8 bg-white p-4 sm:p-6 rounded-xl shadow-lg border animate-slide-in-right">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-accent-red">100%</div>
                <div className="text-xs sm:text-sm text-gray-600">Veteran Owned</div>
              </div>
            </div>
          </div>
        </div>

        {/* New Our Approach Section */}
        <div className="mt-12 lg:mt-20 bg-primary-blue rounded-2xl p-6 sm:p-8 lg:p-12 shadow-lg">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">Our Disciplined Approach</h3>
              <p className="text-base sm:text-lg lg:text-xl text-white leading-relaxed">
                With strict attention to detail, we focus on direct customer needs, professional 
                inspections, competitive quoting, and reliable service completion. We'll make sure your job gets done properly, on time, and is ready to pass inspection.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="rounded-xl p-6 sm:p-8 text-white border-2 border-accent-red lg:w-[calc(100%+100px)]">
                <h4 className="text-xl sm:text-2xl font-bold text-center mb-6 sm:mb-8 text-white">
                  <span className="text-[#7DFFFC]">Inspect</span><span className="text-white">. </span>
                  <span className="text-[#7DFFFC]">Quote</span><span className="text-white">. </span>
                  <span className="text-[#7DFFFC]">Execute</span><span className="text-white">.</span>
                </h4>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-accent-cyan rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
                      Every mission begins with a free detailed inspection, followed by a clear estimate within 24 hours in most cases.
                    </p>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-accent-cyan rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
                      At APS, we've eliminated the expensive overhead, unnecessary marketing fluff, and corporate bureaucracy.
                    </p>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-accent-cyan rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
                      We complete each job with disciplined precision, leaving your property inspection-ready.
                    </p>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-accent-cyan rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
                      So say goodbye to missed deadlines, sloppy work and inflated invoices. And say hello to reliable project regimen and clear communication.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-center items-center lg:justify-start">
                <img 
                  src="https://cdn.jsdelivr.net/gh/aspxtreme/aps-images@main/repair-main.png" 
                  alt="Professional repair services"
                  className="w-4/5 sm:w-3/5 lg:w-3/5 max-w-sm h-auto rounded-xl shadow-lg lg:ml-[100px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      </section>

    </>
  );
};

export default About;