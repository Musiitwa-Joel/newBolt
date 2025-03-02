import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, BookOpen, BarChart, Calendar, DollarSign, MessageSquare, FileText, GraduationCap, Settings, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

interface ModulesPageProps {
  theme: string;
}

const ModulesPage: React.FC<ModulesPageProps> = ({ theme }) => {
  const modules = [
    {
      icon: <Users className={`h-8 w-8 ${theme === 'dark' ? 'text-white' : 'text-black'}`} />,
      title: 'Admissions Management',
      description: 'Streamline the entire admissions process from application to enrollment with automated workflows, document management, and applicant tracking.',
      features: [
        'Online application portal',
        'Document verification',
        'Automated communications',
        'Interview scheduling',
        'Decision management',
        'Enrollment processing'
      ]
    },
    {
      icon: <BookOpen className={`h-8 w-8 ${theme === 'dark' ? 'text-white' : 'text-black'}`} />,
      title: 'Course Management',
      description: 'Create, organize, and manage courses with intelligent scheduling, resource allocation, and curriculum planning tools.',
      features: [
        'Course catalog management',
        'Prerequisite verification',
        'Faculty assignment',
        'Room scheduling',
        'Syllabus management',
        'Learning outcomes tracking'
      ]
    },
    {
      icon: <BarChart className={`h-8 w-8 ${theme === 'dark' ? 'text-white' : 'text-black'}`} />,
      title: 'Performance Analytics',
      description: 'Track student progress, identify trends, and make data-driven decisions with comprehensive analytics and reporting tools.',
      features: [
        'Real-time performance dashboards',
        'Predictive analytics',
        'Custom report generation',
        'Early intervention alerts',
        'Outcome assessment',
        'Comparative analysis'
      ]
    },
    {
      icon: <Calendar className={`h-8 w-8 ${theme === 'dark' ? 'text-white' : 'text-black'}`} />,
      title: 'Attendance Tracking',
      description: 'Monitor and manage student attendance with automated tracking, notifications, and reporting capabilities.',
      features: [
        'Digital attendance recording',
        'Absence notifications',
        'Attendance patterns analysis',
        'Compliance reporting',
        'Mobile check-in options',
        'Integration with grading'
      ]
    },
    {
      icon: <DollarSign className={`h-8 w-8 ${theme === 'dark' ? 'text-white' : 'text-black'}`} />,
      title: 'Financial Management',
      description: 'Handle all financial aspects of your institution with integrated billing, payment processing, and financial aid management.',
      features: [
        'Automated billing',
        'Payment processing',
        'Scholarship management',
        'Financial aid tracking',
        'Budget planning',
        'Financial reporting'
      ]
    },
    {
      icon: <MessageSquare className={`h-8 w-8 ${theme === 'dark' ? 'text-white' : 'text-black'}`} />,
      title: 'Communication Hub',
      description: 'Facilitate seamless communication between students, faculty, and staff with integrated messaging, notifications, and announcements.',
      features: [
        'Centralized messaging',
        'Automated notifications',
        'Announcement system',
        'Discussion forums',
        'Parent communication',
        'Email integration'
      ]
    },
    {
      icon: <FileText className={`h-8 w-8 ${theme === 'dark' ? 'text-white' : 'text-black'}`} />,
      title: 'Document Management',
      description: 'Organize, store, and manage all institutional documents with secure cloud storage, version control, and access permissions.',
      features: [
        'Secure document storage',
        'Version control',
        'Access permissions',
        'Document sharing',
        'Digital signatures',
        'Compliance management'
      ]
    },
    {
      icon: <GraduationCap className={`h-8 w-8 ${theme === 'dark' ? 'text-white' : 'text-black'}`} />,
      title: 'Alumni Management',
      description: 'Maintain relationships with graduates through alumni tracking, engagement tools, and donation management.',
      features: [
        'Alumni directory',
        'Event management',
        'Donation tracking',
        'Career services',
        'Alumni communications',
        'Networking opportunities'
      ]
    },
    {
      icon: <Settings className={`h-8 w-8 ${theme === 'dark' ? 'text-white' : 'text-black'}`} />,
      title: 'System Administration',
      description: 'Configure and customize the platform to meet your institution\'s specific needs with flexible settings and permissions.',
      features: [
        'User management',
        'Role-based permissions',
        'System configuration',
        'Integration management',
        'Audit logging',
        'Security controls'
      ]
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
              Comprehensive modules
              <br />
              for every need
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className={`text-xl ${theme === 'dark' ? 'text-white/80' : 'text-black/80'} max-w-2xl mx-auto font-light leading-relaxed`}
            >
              Explore our complete suite of integrated modules designed to handle every aspect of educational management.
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Modules Grid */}
      <section className={`py-20 px-4 sm:px-6 lg:px-8 ${theme === 'dark' ? 'bg-black' : 'bg-white'} relative`}>
        <div className="max-w-7xl mx-auto relative">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {modules.map((module, index) => (
              <motion.div 
                key={index} 
                variants={itemVariants}
                className={`module-card ${theme === 'dark' ? 'bg-white/5 hover:bg-white/10 border-white/5 hover:border-white/10' : 'bg-black/5 hover:bg-black/10 border-black/5 hover:border-black/10'}`}
              >
                <div className="mb-6">
                  {module.icon}
                </div>
                <h3 className={`text-2xl font-semibold ${theme === 'dark' ? 'text-white' : 'text-black'} mb-4`}>
                  {module.title}
                </h3>
                <p className={`${theme === 'dark' ? 'text-white/70' : 'text-black/70'} mb-6`}>
                  {module.description}
                </p>
                
                <div className="mt-auto">
                  <h4 className={`text-sm font-medium ${theme === 'dark' ? 'text-white/60' : 'text-black/60'} uppercase mb-3`}>Key Features</h4>
                  <ul className="space-y-2">
                    {module.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className={`h-4 w-4 ${theme === 'dark' ? 'text-white/60' : 'text-black/60'} mr-2 flex-shrink-0 mt-0.5`} />
                        <span className={`text-sm ${theme === 'dark' ? 'text-white/80' : 'text-black/80'}`}>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Integration Section */}
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
                  <span className={`text-sm font-medium tracking-widest ${theme === 'dark' ? 'text-white/60' : 'text-black/60'} uppercase`}>Seamless Integration</span>
                  <h3 className={`text-3xl md:text-4xl font-semibold ${theme === 'dark' ? 'text-white' : 'text-black'} mt-4 mb-6 tracking-tight`}>
                    All modules work together perfectly
                  </h3>
                  
                  <p className={`${theme === 'dark' ? 'text-white/80' : 'text-black/80'} mb-6`}>
                    Unlike disconnected point solutions, Tredumo's modules are designed from the ground up to work together seamlessly, sharing data and providing a unified experience.
                  </p>
                  
                  <ul className="space-y-4">
                    {[
                      'Single sign-on across all modules',
                      'Consistent user interface and experience',
                      'Real-time data synchronization',
                      'Comprehensive cross-module reporting',
                      'Unified administration and configuration'
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className={`h-6 w-6 ${theme === 'dark' ? 'text-white' : 'text-black'} mr-3 flex-shrink-0 mt-0.5`} />
                        <span className={`${theme === 'dark' ? 'text-white/80' : 'text-black/80'}`}>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <img
                    src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80"
                    alt="Integrated Modules"
                    className="rounded-2xl w-full shadow-2xl"
                  />
                </div>
              </div>
            </div>
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
                Build your perfect solution
              </h2>
              <p className={`${theme === 'dark' ? 'text-white/80' : 'text-black/80'} max-w-2xl mx-auto mb-8`}>
                Start with the modules you need now and add more as your institution grows. Our flexible platform adapts to your requirements.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/pricing" className={`${theme === 'dark' ? 'bg-white text-black hover:bg-gray-100' : 'bg-black text-white hover:bg-gray-900'} px-8 py-4 rounded-full transition-all duration-300 font-medium text-sm tracking-wide flex items-center justify-center group`}>
                  View Pricing Options
                  <ArrowRight className="inline ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link to="/contact" className={`${theme === 'dark' ? 'bg-white/10 text-white hover:bg-white/20' : 'bg-black/10 text-black hover:bg-black/20'} backdrop-blur-xl px-8 py-4 rounded-full transition-all duration-300 font-medium text-sm tracking-wide`}>
                  Contact Sales
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ModulesPage;