import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface CaseStudiesPageProps {
  theme: string;
}

const CaseStudiesPage: React.FC<CaseStudiesPageProps> = ({ theme }) => {
  const caseStudies = [
    {
      title: 'Stanford University',
      category: 'Higher Education',
      description: 'How Stanford streamlined their admissions process and increased application processing efficiency by 78% using Tredumo.',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80',
      results: [
        '78% increase in application processing efficiency',
        '45% reduction in administrative workload',
        '92% student satisfaction rating',
        '3.2M in cost savings over 3 years'
      ]
    },
    {
      title: 'Boston Public Schools',
      category: 'K-12 Education',
      description: 'Boston Public Schools implemented Tredumo to unify their district-wide management systems and improve student outcomes.',
      image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80',
      results: [
        'Unified 125 schools under one platform',
        '32% improvement in attendance tracking',
        '28% increase in parent engagement',
        '15% improvement in student performance'
      ]
    },
    {
      title: 'Harvard Business School',
      category: 'Business Education',
      description: 'How HBS leveraged Tredumo\'s analytics to personalize learning paths and improve student outcomes.',
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80',
      results: [
        'Personalized learning paths for 2,000+ students',
        '35% improvement in course completion rates',
        '42% increase in student engagement',
        '4.8/5 average course satisfaction rating'
      ]
    },
    {
      title: 'University of Tokyo',
      category: 'International Education',
      description: 'University of Tokyo implemented Tredumo to manage international student programs and improve cross-cultural collaboration.',
      image: 'https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&q=80',
      results: [
        'Streamlined visa and immigration processes',
        '65% faster onboarding for international students',
        'Support for 28 languages',
        '47% increase in international enrollment'
      ]
    },
    {
      title: 'MIT Media Lab',
      category: 'Research Institution',
      description: 'How MIT Media Lab used Tredumo to manage complex research projects and improve collaboration across departments.',
      image: 'https://images.unsplash.com/photo-1581093458791-9d2b11a0c07d?auto=format&fit=crop&q=80',
      results: [
        'Managed 150+ concurrent research projects',
        '87% improvement in cross-department collaboration',
        '52% reduction in administrative overhead',
        '3.5x increase in research output'
      ]
    },
    {
      title: 'Oxford Online Learning',
      category: 'Online Education',
      description: 'Oxford\'s online learning division scaled their operations globally while maintaining educational excellence using Tredumo.',
      image: 'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&q=80',
      results: [
        'Scaled to 75,000+ students across 120 countries',
        '99.9% platform uptime',
        '68% improvement in course completion rates',
        '4.9/5 student satisfaction rating'
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
              Success stories from
              <br />
              leading institutions
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className={`text-xl ${theme === 'dark' ? 'text-white/80' : 'text-black/80'} max-w-2xl mx-auto font-light leading-relaxed`}
            >
              Discover how educational institutions around the world are transforming with Tredumo.
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Featured Case Study */}
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
            
            <div className={`relative ${theme === 'dark' ? 'bg-white/5 border-white/10' : 'bg-black/5 border-black/10'} backdrop-blur-xl rounded-[2rem] border overflow-hidden`}>
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <span className={`text-sm font-medium tracking-widest ${theme === 'dark' ? 'text-white/60' : 'text-black/60'} uppercase`}>Featured Case Study</span>
                  <h3 className={`text-3xl md:text-4xl font-semibold ${theme === 'dark' ? 'text-white' : 'text-black'} mt-4 mb-6 tracking-tight`}>
                    Stanford University
                  </h3>
                  
                   <p className={`${theme === 'dark' ? 'text-white/80' : 'text-black/80'} mb-6`}>
                    Stanford University implemented Tredumo to revolutionize their admissions process, resulting in a 78% increase in application processing efficiency and significant cost savings.
                  </p>
                  
                  <div className="mb-8">
                    <h4 className={`text-sm font-medium ${theme === 'dark' ? 'text-white/60' : 'text-black/60'} uppercase mb-3`}>Key Results</h4>
                    <ul className="space-y-3">
                      {[
                        '78% increase in application processing efficiency',
                        '45% reduction in administrative workload',
                        '92% student satisfaction rating',
                        '3.2M in cost savings over 3 years'
                      ].map((result, index) => (
                        <li key={index} className="flex items-start">
                          <ArrowRight className={`h-5 w-5 ${theme === 'dark' ? 'text-white/60' : 'text-black/60'} mr-3 flex-shrink-0 mt-0.5`} />
                          <span className={`${theme === 'dark' ? 'text-white/80' : 'text-black/80'}`}>{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Link to="/contact" className={`inline-flex items-center ${theme === 'dark' ? 'text-white' : 'text-black'} font-medium group`}>
                    Read the full case study
                    <ArrowUpRight className="ml-2 h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </Link>
                </div>
                
                <div className="h-full">
                  <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80"
                    alt="Stanford University Case Study"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className={`py-20 px-4 sm:px-6 lg:px-8 ${theme === 'dark' ? 'bg-black' : 'bg-white'} relative`}>
        <div className="max-w-7xl mx-auto relative">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {caseStudies.slice(1).map((caseStudy, index) => (
              <motion.div 
                key={index} 
                variants={itemVariants}
                className={`case-study-card ${theme === 'dark' ? 'bg-white/5 hover:bg-white/10 border-white/5 hover:border-white/10' : 'bg-black/5 hover:bg-black/10 border-black/5 hover:border-black/10'}`}
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={caseStudy.image}
                    alt={caseStudy.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <span className={`text-xs font-medium tracking-widest ${theme === 'dark' ? 'text-white/60' : 'text-black/60'} uppercase`}>{caseStudy.category}</span>
                  <h3 className={`text-xl font-semibold ${theme === 'dark' ? 'text-white' : 'text-black'} mt-2 mb-3`}>
                    {caseStudy.title}
                  </h3>
                  <p className={`${theme === 'dark' ? 'text-white/70' : 'text-black/70'} text-sm mb-4`}>
                    {caseStudy.description}
                  </p>
                  <Link to="/contact" className={`inline-flex items-center text-sm ${theme === 'dark' ? 'text-white' : 'text-black'} font-medium group`}>
                    Read case study
                    <ArrowUpRight className="ml-2 h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Results Section */}
      <section className={`py-20 px-4 sm:px-6 lg:px-8 ${theme === 'dark' ? 'bg-black' : 'bg-white'} relative`}>
        <div className="max-w-7xl mx-auto relative">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className={`text-sm font-medium tracking-widest ${theme === 'dark' ? 'text-white/60' : 'text-black/60'} uppercase`}>The Impact</span>
            <h2 className={`text-3xl md:text-4xl font-semibold ${theme === 'dark' ? 'text-white' : 'text-black'} mt-4 tracking-tight`}>
              Real results from real institutions
            </h2>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              { metric: '250+', description: 'Educational institutions using Tredumo worldwide' },
              { metric: '78%', description: 'Average increase in administrative efficiency' },
              { metric: '3.5M+', description: 'Students managed through our platform' },
              { metric: '92%', description: 'Customer satisfaction rating' }
            ].map((stat, index) => (
              <motion.div 
                key={index} 
                variants={itemVariants}
                className={`p-8 rounded-3xl ${theme === 'dark' ? 'bg-white/5 border-white/5' : 'bg-black/5 border-black/5'} backdrop-blur-xl border text-center`}
              >
                <p className={`text-4xl font-bold ${theme === 'dark' ? 'text-white' : 'text-black'} mb-3`}>{stat.metric}</p>
                <p className={`${theme === 'dark' ? 'text-white/70' : 'text-black/70'}`}>{stat.description}</p>
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
                Ready to become our next success story?
              </h2>
              <p className={`${theme === 'dark' ? 'text-white/80' : 'text-black/80'} max-w-2xl mx-auto mb-8`}>
                Join hundreds of leading educational institutions that have transformed their operations with Tredumo.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className={`${theme === 'dark' ? 'bg-white text-black hover:bg-gray-100' : 'bg-black text-white hover:bg-gray-900'} px-8 py-4 rounded-full transition-all duration-300 font-medium text-sm tracking-wide flex items-center justify-center group`}>
                  Schedule a Demo
                  <ArrowRight className="inline ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link to="/pricing" className={`${theme === 'dark' ? 'bg-white/10 text-white hover:bg-white/20' : 'bg-black/10 text-black hover:bg-black/20'} backdrop-blur-xl px-8 py-4 rounded-full transition-all duration-300 font-medium text-sm tracking-wide`}>
                  View Pricing
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudiesPage;