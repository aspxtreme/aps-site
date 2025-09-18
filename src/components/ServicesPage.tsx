import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Shield, 
  CheckCircle, 
  Clock, 
  Award, 
  Star,
  Wrench,
  Building2,
  Droplets,
  Zap,
  Paintbrush,
  Hammer,
  Truck,
  ArrowRight
} from 'lucide-react';

const ServicesPage = () => {
  const navigate = useNavigate();

  const navigateToContact = () => {
    navigate('/contact');
    window.scrollTo(0, 0);
  };

  // Images for the rotating gallery
  const galleryImages = [
    'https://cdn.jsdelivr.net/gh/aspxtreme/aps-images@main/red-curb-paint.png',
    'https://cdn.jsdelivr.net/gh/aspxtreme/aps-images@main/asphalt-striping.jpg',
    'https://cdn.jsdelivr.net/gh/aspxtreme/aps-images@main/curb-restoration.png',
    'https://cdn.jsdelivr.net/gh/aspxtreme/aps-images@main/pressure-wash-building.jpg',
    'https://cdn.jsdelivr.net/gh/aspxtreme/aps-images@main/stairs-pressure-washing.jpg',
    'https://cdn.jsdelivr.net/gh/aspxtreme/aps-images@main/high-rise-window-washing.jpg',
    'https://cdn.jsdelivr.net/gh/aspxtreme/aps-images@main/asphalt-striping.png',
    'https://cdn.jsdelivr.net/gh/aspxtreme/aps-images@main/pressure-washing.png',
    'https://cdn.jsdelivr.net/gh/aspxtreme/aps-images@main/trash-chute-cleaning.png',
    'https://cdn.jsdelivr.net/gh/aspxtreme/aps-images@main/window-washing.png',
    'https://cdn.jsdelivr.net/gh/aspxtreme/aps-images@main/aps-solar-cleaning.jpg',
    'https://cdn.jsdelivr.net/gh/aspxtreme/aps-images@main/aps-roof-replacement.jpg',
    'https://cdn.jsdelivr.net/gh/aspxtreme/aps-images@main/aps-floor-care.jpg',
    'https://cdn.jsdelivr.net/gh/aspxtreme/aps-images@main/aps-roof-coating.jpg',
    'https://cdn.jsdelivr.net/gh/aspxtreme/aps-images@main/aps-epoxy-floor-coating.jpg',
    'https://cdn.jsdelivr.net/gh/aspxtreme/aps-images@main/aps-oprofessional-waterproofing.jpg'
  ];

  // State for rotating images in 4 boxes
  const [currentImages, setCurrentImages] = useState<string[]>([]);

  // Initialize and rotate images
  useEffect(() => {
    // Shuffle array function
    const shuffleArray = (array: string[]) => {
      const shuffled = [...array];
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      return shuffled;
    };

    // Initialize with first 4 random images
    const shuffled = shuffleArray(galleryImages);
    setCurrentImages(shuffled.slice(0, 4));

    // Rotate images every 3 seconds
    const interval = setInterval(() => {
      const newShuffled = shuffleArray(galleryImages);
      setCurrentImages(newShuffled.slice(0, 4));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const services = [
    {
      icon: Building2,
      title: 'Professional Window Cleaning',
      features: [
        'Interior & Exterior Care - Streak-free window cleaning for both interior and exterior surfaces.',
        'High-Rise Ready - Water-fed poles and rope access methods ensure safe, effective service for tall buildings.',
        'Maintenance Programs - Flexible schedules to keep glass clean and property curb appeal high year-round.'
      ]
    },
    {
      icon: Shield,
      title: 'Trash Chute Repair & Cleaning',
      features: [
        'Sanitation & Safety - Deep cleaning to eliminate odor, bacteria, pests, and fire hazards.',
        'Repairs & Maintenance - Hinge, door, and seal repair to keep systems functioning longer.'
      ]
    },
    {
      icon: Droplets,
      title: 'Building Wash Services',
      features: [
        'Soft-Wash or Pressure Wash - Exterior cleaning for siding, stucco, brick, or stone.',
        'Protect & Preserve - Removes mold, algae, soot, and stains that damage building materials.'
      ]
    },
    {
      icon: Wrench,
      title: 'Common Area Pressure Washing',
      features: [
        'High-Traffic Surfaces - Walkways, patios, entryways, and stairs pressure-washed to remove dirt, gum, and stains.',
        'Safer, Cleaner Shared Spaces - Enhances appearance and reduces slip hazards for residents and visitors.'
      ]
    },
    {
      icon: Truck,
      title: 'Parking Garage Pressure Washing',
      features: [
        'Heavy-Duty Cleaning - Floors, walls, and ceilings of parking garages thoroughly cleaned.',
        'Surface Protection - Removes oil, tire marks, salt, and debris; optional sealing to extend surface life.'
      ]
    },
    {
      icon: Zap,
      title: 'Solar Panel Cleaning',
      features: [
        'Efficiency First - Gentle, non-abrasive cleaning to remove dust, pollen, and droppings.',
        'Safe Methods - Ensures panels remain in peak condition and maximize energy output.'
      ]
    },
    {
      icon: Droplets,
      title: 'Rain Gutter Cleaning',
      features: [
        'Prevent Damage - Clears leaves, twigs, and blockages to avoid leaks and foundation issues.',
        'Full System Care - Flushes downspouts and inspects flow for complete functionality.'
      ]
    },
    {
      icon: Building2,
      title: 'Floor, Tile & Carpet Cleaning',
      features: [
        'Deep Cleaning Solutions - Hot water extraction, dry cleaning, or encapsulation methods tailored to each surface.',
        'Stain & Odor Removal - Restores appearance and freshness of floors, tile, and carpet.'
      ]
    },
    {
      icon: Hammer,
      title: 'Concrete Grinding & Polishing',
      features: [
        'Smooth & Shine - Grinding to remove bumps and stains, polishing for a glossy or matte finish.',
        'Long-Term Durability - Ideal for showrooms, lobbies, and industrial floors that need a professional look.'
      ]
    },
    {
      icon: Shield,
      title: 'Trash Bin & Dumpster Cleaning',
      features: [
        'Odor & Pest Control - Sanitizes bins and dumpsters to reduce bacteria, pests, and foul smells.',
        'Disinfection & Deodorizing - Pressure-washed interiors and treated surfaces for ongoing cleanliness.'
      ]
    },
    {
      icon: Paintbrush,
      title: 'Asphalt Striping & Surface Repair',
      features: [
        'Clear Markings - Parking lots and traffic lanes striped with weather-resistant paint.',
        'Surface Repairs - Crack filling, pothole patching, and resurfacing for safety and compliance.'
      ]
    },
    {
      icon: Paintbrush,
      title: 'Graffiti Removal & Painting',
      features: [
        'Rapid Response - Safe and effective removal of graffiti from walls, doors, and fixtures.',
        'Fresh Finish - Repainting with color-matching or new paint to restore property image.'
      ]
    },
    {
      icon: Wrench,
      title: 'Commercial Handyman Services',
      features: [
        'General Repairs - Carpentry, drywall, painting, fixture installs, and minor electrical or plumbing.',
        'Reliable Support - One trusted partner to handle repairs big and small, without juggling multiple vendors.'
      ]
    },
    {
      icon: Building2,
      title: 'Day Porter & Janitorial Services',
      features: [
        'Professional Presence - Uniformed staff who provide both cleaning and a polished, helpful presence for tenants and guests with ongoing common area upkeep.',
        'Waste Management & Restroom Servicing - Consistent trash removal and restroom servicing to keep properties clean and presentable.'
      ]
    },
    {
      icon: Hammer,
      title: 'Construction Clean-Up',
      features: [
        'Dust & Debris Removal - Thorough cleaning and wiping of surfaces after construction, renovations, or tenant improvements.',
        'Move-In Ready - Final cleaning of windows, floors and spaces preparing for occupancy.'
      ]
    }
  ];

  const whyChooseAPS = [
    {
      icon: Shield,
      title: 'Safety First',
      description: 'All jobs follow strict safety protocols; we carry liability insurance and ensure technician training and protective gear.'
    },
    {
      icon: Star,
      title: 'Quality You Can See & Trust',
      description: 'We use professional-grade equipment and industry best practices.'
    },
    {
      icon: Clock,
      title: 'Reliable Scheduling & Responsive Service',
      description: 'You can expect us to show up on time, do the work right, and clean up after ourselves.'
    },
    {
      icon: CheckCircle,
      title: 'Customized Maintenance Plans',
      description: 'Whether you need seasonal servicing or regular maintenance, we tailor schedules to protect your investment.'
    },
    {
      icon: Award,
      title: 'Transparent Pricing',
      description: 'With APS there are never hidden fees or surprises. You\'ll get a fair quote, and we\'ll stand by it.'
    }
  ];

  return (
    <div className="min-h-screen bg-white pt-16">
      {/* Header */}
      <div className="bg-primary-blue py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">Our Services</h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              At All-Star Property Service, we keep your property spotless, safe, and inviting. Whether you're managing commercial buildings, 
              multi-unit properties, or high-end facilities, we deliver excellence across a wide range of services. 
              Every service is backed by top-quality equipment, trained staff, and the APS promise of reliability and satisfaction.
            </p>
          </div>
        </div>
      </div>

      {/* Auto-Rotating Image Gallery */}
      <div className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {currentImages.map((image, index) => (
              <div 
                key={`${image}-${index}`} 
                className="relative h-64 rounded-xl overflow-hidden shadow-lg group"
              >
                <img
                  src={image}
                  alt={`APS Service ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mission Statement */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-accent-red mb-6">
              We Carry the Burden, You Keep the Credit.
            </h2>
            <div className="max-w-5xl mx-auto space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                At APS, we see our job as being your force multiplier. You already have enough on your plate managing 
                properties, people, and expectations. The last thing you need is to chase property service partners or 
                worry about compliance details.
              </p>
              <p>
                That's where we come in. As a veteran-owned company, APS brings discipline, precision, and follow-through 
                to every service. We handle the work behind the scenes — the cleaning, repairs, inspections, and maintenance 
                that keep everything running smoothly.
              </p>
              <p className="text-xl font-semibold text-primary-blue">
                We don't need the spotlight. We're simply the team behind your team, making sure you look good and that 
                every job gets done right — reliably, compliantly, and at a fair price.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Some of Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Property and facility managers carry an impossible burden. You're judged on keeping everything spotless, safe, and compliant. Only problem is, all too often the service partners you have to rely on can make your job even more difficult. At APS, we communicate and commit. You won't have to constantly follow-up or manage project details, that's our job and we do it with excellence and pride.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105">
                  <div className="w-16 h-16 bg-secondary-blue/20 rounded-xl flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-secondary-blue" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => {
                      const [title, description] = feature.split(' - ');
                      return (
                        <li key={idx} className="text-gray-700">
                          <span className="font-semibold text-primary-blue">{title}</span>
                          {description && <span className="text-gray-600"> - {description}</span>}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Why Choose APS */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Choose APS
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional service delivery backed by military precision and veteran values.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseAPS.slice(0, 3).map((reason, index) => {
              const Icon = reason.icon;
              return (
                <div key={index} className="text-center p-6">
                  <div className="w-16 h-16 bg-accent-red/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-8 h-8 text-accent-red" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{reason.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{reason.description}</p>
                </div>
              );
            })}
          </div>

          {/* Bottom 2 items centered */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-8">
            {whyChooseAPS.slice(3, 5).map((reason, index) => {
              const Icon = reason.icon;
              return (
                <div key={index + 3} className="text-center p-6">
                  <div className="w-16 h-16 bg-accent-red/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-8 h-8 text-accent-red" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{reason.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{reason.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary-blue rounded-2xl p-12 shadow-lg text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Experience Professional Property Services?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Join property managers who trust APS for reliable, compliant, and professional service delivery. 
              Get your free inspection and estimate today.
            </p>
            <button 
              onClick={navigateToContact}
              className="inline-flex items-center justify-center px-8 py-4 bg-accent-red text-white font-semibold rounded-lg hover:bg-accent-cyan hover:text-[#181B38] transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Get Your Free Estimate
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

    </div>
  );
};

export default ServicesPage;