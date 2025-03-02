import React from 'react';
import { UserPlus, ClipboardList, Award, DollarSign } from 'lucide-react';

const features = [
  {
    icon: <UserPlus className="h-8 w-8 text-white" />,
    title: 'Smart Admissions',
    description: 'Streamline your enrollment process with AI-powered automation.'
  },
  {
    icon: <ClipboardList className="h-8 w-8 text-white" />,
    title: 'Advanced Registration',
    description: 'Intelligent course scheduling with smart conflict resolution.'
  },
  {
    icon: <Award className="h-8 w-8 text-white" />,
    title: 'Performance Analytics',
    description: 'Track progress with comprehensive analytics and insights.'
  },
  {
    icon: <DollarSign className="h-8 w-8 text-white" />,
    title: 'Smart Finance',
    description: 'Automated billing and financial reporting in real-time.'
  }
];

const Features = () => {
  return (
    <section id="features" className="section-padding bg-black relative">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-24">
          <span className="text-sm font-medium tracking-widest text-white/60 uppercase">Features</span>
          <h2 className="text-4xl md:text-5xl font-semibold text-white mt-4 tracking-tight">
            Incredible features.
            <br />
            Designed for you.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="feature-card group">
              <div className="mb-6">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">
                {feature.title}
              </h3>
              <p className="text-white/70 text-lg leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-32 text-center">
          <span className="text-sm font-medium tracking-widest text-white/60 uppercase">And more</span>
          <h3 className="text-3xl md:text-4xl font-semibold text-white mt-4 mb-8 tracking-tight">
            Discover all capabilities
          </h3>
          <button className="btn-secondary">
            View all features
          </button>
        </div>
      </div>
    </section>
  );
};

export default Features;