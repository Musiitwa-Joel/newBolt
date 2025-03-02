import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Calendar, TrendingUp, BookOpen, CheckCircle, BarChart, Shield, Zap, Globe, Smartphone, Database } from 'lucide-react';
import { motion } from 'framer-motion';

interface FeaturesPageProps {
  theme: string;
}

const FeaturesPage: React.FC<FeaturesPageProps> = ({ theme }) => {
  const mainFeatures = [
    {
      icon: <Users className={`h-8 w-8 ${theme === 'dark' ? 'text-white' : 'text-black'}`} />,
      title: 'Smart Admissions',
      description: 'Streamline your enrollment process with AI-powered automation that intelligently processes applications, identifies qualified candidates, and provides personalized communication throughout the admissions journey.'
    },
    {
      icon: <BookOpen className={`h-8 w-8 ${theme === 'dark' ? 'text-white' : 'text-black'}`} />,
      title: 'Advanced Registration',
      description: 'Intelligent course scheduling with smart conflict resolution, automated prerequisite verification, and dynamic class capacity management to optimize resource allocation.'
    },
    {
      icon: <BarChart className={`h-8 w-8 ${theme === 'dark' ? 'text-white' : 'text-black'}`} />,
      title: 'Performance Analytics',
      description: 'Track progress with comprehensive analytics and insights, including predictive performance modeling, early intervention alerts, and customizable reporting dashboards.'
    },
    {
      icon: <Calendar className={`h-8 w-8 ${theme === 'dark' ? 'text-white' : 'text-black'}`} />,
      title: 'Smart Finance',
      description: 'Automated billing and financial reporting in real-time, with integrated payment processing, scholarship management, and financial aid tracking.'
    }
  ];

  const additionalFeatures = [
    {
      icon: <Shield className={`h-6 w-6 ${theme === 'dark' ? 'text-white' : 'text-black'}`} />,
      title: 'Enterprise-Grade Security',
      description: 'Bank-level encryption, role-based access controls, and comprehensive audit logs.'
    },
    {
      icon: <Zap className={`h-6 w-6 ${theme === 'dark' ? 'text-white' : 'text-black'}`} />,
      title: 'Lightning-Fast Performance',
      description: 'Optimized for speed with distributed cloud infrastructure and intelligent caching.'
    },
    {
      icon: <Globe className={`h-6 w-6 ${theme === 'dark' ? 'text-white' : 'text-black'}`} />,
      title: 'Global Compliance',
      description: 'Built to meet educational standards and privacy regulations worldwide.'
    },
    {
      icon: <Smartphone className={`h-6 w-6 ${theme === 'dark' ? 'text-white' : 'text-black'}`} />,
      title: 'Mobile-First Design',
      description: 'Fully responsive interface that works seamlessly across all devices.'
    },
    {
      icon: <Database className={`h-6 w-6 ${theme === 'dark' ? 'text-white' : 'text-black'}`} />,
      title: 'Seamless Integrations',
      description: 'Connect with existing systems through our comprehensive API and pre-built connectors.'
    },
    {
      icon: <TrendingUp className={`h-6 w-6 ${theme === 'dark' ? 'text-white' : 'text-black'}`} />,
      title: 'Continuous Updates',
      description: 'Regular feature enhancements and improvements based on user feedback and industry trends.'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className={`${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'}`}>
      {/* Hero Section */}
      <div className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0">
          <div className={`absolute inset-0 ${theme === 'dark' ? 'bg-gradient-to-b from-black via-black/95 to-black' : 'bg-gradient-to-b from-white via-white/95 to-white'}`}></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center space-y-8 max-w-4xl mx-auto"
          >
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className={`text-4xl sm:text-5xl md:text-6xl font-semibold ${theme === 'dark' ? 'text-white' : 'text-black'} leading-tight tracking-tight`}
            >
              Powerful features
              <br />
              for modern education
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className={`text-xl ${theme === 'dark' ? 'text-white/80' : 'text-black/80'} max-w-2xl mx-auto font-light leading-relaxed`}
            >
              Discover how Tredumo's comprehensive suite of tools can transform your educational institution.
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Main Features Section */}
      <section className={`py-20 px-4 sm:px-6 lg:px-8 ${theme === 'dark' ? 'bg-black' : 'bg-white'} relative`}>
        <div className="max-w-7xl mx-auto relative">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {mainFeatures.map((feature, index) => (
              <motion.div 
                key={index} 
                variants={itemVariants}
                className={`feature-card group ${theme === 'dark' ? 'bg-white/5 hover:bg-white/10 border-white/5 hover:border-white/10' : 'bg-black/5 hover:bg-black/10 border-black/5 hover:border-black/10'}`}
              >
                <div className="mb-6">
                  {feature.icon}
                </div>
                <h3 className={`text-2xl font-semibold ${theme === 'dark' ? 'text-white' : 'text-black'} mb-4`}>
                  {feature.title}
                </h3>
                <p className={`${theme === 'dark' ? 'text-white/70' : 'text-black/70'} text-lg leading-relaxed`}>
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Feature Showcase */}
      <section className={`py-20 px-4 sm:px-6 lg:px-8 ${theme === 'dark' ? 'bg-black' : 'bg-white'} relative`}>
        <div className="max-w-7xl mx-auto relative">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative rounded-[2rem] overflow-hidden"
          >
            <div className="absolute -inset-x-20 -inset-y-20 bg-gradient-to-r from-purple-500/30 via-blue-500/30 to-cyan-500/30 blur-3xl opacity-20 rounded-[3rem]"></div>
            
            <div className={`relative ${theme === 'dark' ? 'bg-white/5 border-white/10' : 'bg-black/5 border-black/10'} backdrop-blur-xl rounded-[2rem] border p-8 md:p-12 overflow-hidden`}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <span className={`text-sm font-medium tracking-widest ${theme === 'dark' ? 'text-white/60' : 'text-black/60'} uppercase`}>AI-Powered Analytics</span>
                  <h3 className={`text-3xl md:text-4xl font-semibold ${theme === 'dark' ? 'text-white' : 'text-black'} mt-4 mb-6 tracking-tight`}>
                    Make data-driven decisions with confidence
                  </h3>
                  
                  <ul className="space-y-4">
                    {[
                      'Real-time performance tracking',
                      'Predictive analytics for student success',
                      'Customizable dashboards and reports',
                      'Automated early intervention alerts',
                      'Comprehensive data visualization tools'
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className={`h-6 w-6 ${theme === 'dark' ? 'text-white' : 'text-black'} mr-3 flex-shrink-0 mt-0.5`} />
                        <span className={`${theme === 'dark' ? 'text-white/80' : 'text-black/80'}`}>{item}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link to="/modules" className={`inline-flex items-center mt-8 ${theme === 'dark' ? 'text-white' : 'text-black'} font-medium group`}>
                    Learn more about our analytics
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
                
                <div>
                  <img
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80"
                    alt="Analytics Dashboard"
                    className="rounded-2xl w-full shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Additional Features */}
      <section className={`py-20 px-4 sm:px-6 lg:px-8 ${theme === 'dark' ? 'bg-black' : 'bg-white'} relative`}>
        <div className="max-w-7xl mx-auto relative">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className={`text-sm font-medium tracking-widest ${theme === 'dark' ? 'text-white/60' : 'text-black/60'} uppercase`}>More Features</span>
            <h2 className={`text-3xl md:text-4xl font-semibold ${theme === 'dark' ? 'text-white' : 'text-black'} mt-4 tracking-tight`}>
              Everything you need to succeed
            </h2>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {additionalFeatures.map((feature, index) => (
              <motion.div 
                key={index} 
                variants={itemVariants}
                className={`p-6 rounded-2xl ${theme === 'dark' ? 'bg-white/5 hover:bg-white/10 border-white/5 hover:border-white/10' : 'bg-black/5 hover:bg-black/10 border-black/5 hover:border-black/10'} backdrop-blur-xl border transition-all duration-300`}
              >
                <div className="mb-4">
                  {feature.icon}
                </div>
                <h3 className={`text-xl font-semibold ${theme === 'dark' ? 'text-white' : 'text-black'} mb-2`}>
                  {feature.title}
                </h3>
                <p className={`${theme === 'dark' ? 'text-white/70' : 'text-black/70'}`}>
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`py-20 px-4 sm:px-6 lg:px-8 ${theme === 'dark' ? 'bg-black' : 'bg-white'} relative`}>
        <div className="max-w-7xl mx-auto relative">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className={`rounded-[2rem] ${theme === 'dark' ? 'bg-white/5 border-white/10' : 'bg-black/5 border-black/10'} backdrop-blur-xl border p-12 md:p-16 text-center relative overflow-hidden`}
          >
            <div className="absolute -inset-x-20 -inset-y-20 bg-gradient-to-r from-purple-500/30 via-blue-500/30 to-cyan-500/30 blur-3xl opacity-20 rounded-[3rem]"></div>
            
            <div className="relative">
              <h2 className={`text-3xl md:text-4xl font-semibold ${theme === 'dark' ? 'text-white' : 'text-black'} mb-6 tracking-tight`}>
                Ready to experience Tredumo?
              </h2>
              <p className={`${theme === 'dark' ? 'text-white/80' : 'text-black/80'} max-w-2xl mx-auto mb-8`}>
                Schedule a personalized demo to see how our features can transform your institution.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className={`${theme === 'dark' ? 'bg-white text-black hover:bg-gray-100' : 'bg-black text-white hover:bg-gray-900'} px-8 py-4 rounded-full transition-all duration-300 font-medium text-sm tracking-wide flex items-center justify-center group`}>
                  Request a Demo
                  <ArrowRight className="inline ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link to="/modules" className={`${theme === 'dark' ? 'bg-white/10 text-white hover:bg-white/20' : 'bg-black/10 text-black hover:bg-black/20'} backdrop-blur-xl px-8 py-4 rounded-full transition-all duration-300 font-medium text-sm tracking-wide`}>
                  Explore Modules
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default FeaturesPage;