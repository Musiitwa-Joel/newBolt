import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, HelpCircle } from 'lucide-react';
import { motion } from 'framer-motion';

interface PricingPageProps {
  theme: string;
}

const PricingPage: React.FC<PricingPageProps> = ({ theme }) => {
  const [annual, setAnnual] = useState(true);
  
  const plans = [
    {
      name: 'Starter',
      description: 'Perfect for small institutions just getting started.',
      monthlyPrice: 499,
      annualPrice: 399,
      features: [
        'Up to 500 students',
        'Core admissions module',
        'Basic analytics',
        'Email support',
        '99.5% uptime SLA',
        'Standard security features'
      ],
      highlighted: false
    },
    {
      name: 'Professional',
      description: 'Ideal for growing institutions with advanced needs.',
      monthlyPrice: 999,
      annualPrice: 799,
      features: [
        'Up to 2,000 students',
        'All Starter features',
        'Advanced analytics',
        'Financial management module',
        'Course management module',
        'Priority email & phone support',
        '99.9% uptime SLA',
        'Enhanced security features'
      ],
      highlighted: true
    },
    {
      name: 'Enterprise',
      description: 'Comprehensive solution for large educational institutions.',
      monthlyPrice: 1999,
      annualPrice: 1599,
      features: [
        'Unlimited students',
        'All Professional features',
        'All available modules',
        'Custom integrations',
        'Dedicated account manager',
        '24/7 premium support',
        '99.99% uptime SLA',
        'Advanced security & compliance'
      ],
      highlighted: false
    }
  ];

  const faqs = [
    {
      question: 'How does billing work?',
      answer: 'We offer both monthly and annual billing options. Annual billing provides a 20% discount compared to monthly billing. You can change your billing cycle at any time.'
    },
    {
      question: 'Can I change plans later?',
      answer: 'Yes, you can upgrade or downgrade your plan at any time. When upgrading, you\'ll be prorated for the remainder of your billing cycle. When downgrading, changes will take effect at the end of your current billing cycle.'
    },
    {
      question: 'Is there a free trial?',
      answer: 'We offer a 14-day free trial for all plans. No credit card is required to start your trial. You can upgrade to a paid plan at any time during or after your trial.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards (Visa, Mastercard, American Express) as well as ACH transfers for US customers. For Enterprise plans, we also offer invoicing options.'
    },
    {
      question: 'Do you offer educational discounts?',
      answer: 'Yes, we offer special pricing for public K-12 schools and non-profit educational institutions. Contact our sales team for more information.'
    },
    {
      question: 'What happens to my data if I cancel?',
      answer: 'You maintain ownership of your data at all times. If you cancel your subscription, we provide a 30-day window to export your data. After that period, data is permanently deleted from our systems.'
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
              Simple, transparent pricing
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className={`text-xl ${theme === 'dark' ? 'text-white/80' : 'text-black/80'} max-w-2xl mx-auto font-light leading-relaxed`}
            >
              Choose the plan that's right for your institution. All plans include a 14-day free trial.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex justify-center mt-8"
            >
              <div className={`p-1 rounded-full ${theme === 'dark' ? 'bg-white/10' : 'bg-black/10'} inline-flex`}>
                <button
                  onClick={() => setAnnual(true)}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                    annual 
                      ? theme === 'dark' 
                        ? 'bg-white text-black' 
                        : 'bg-black text-white' 
                      : ''
                  }`}
                >
                  Annual (20% off)
                </button>
                <button
                  onClick={() => setAnnual(false)}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                    !annual 
                      ? theme === 'dark' 
                        ? 'bg-white text-black' 
                        : 'bg-black text-white' 
                      : ''
                  }`}
                >
                  Monthly
                </button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Pricing Plans */}
      <section className={`py-20 px-4 sm:px-6 lg:px-8 ${theme === 'dark' ? 'bg-black' : 'bg-white'} relative`}>
        <div className="max-w-7xl mx-auto relative">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {plans.map((plan, index) => (
              <motion.div 
                key={index} 
                variants={itemVariants}
                className={`${
                  plan.highlighted 
                    ? 'pricing-card-highlight' 
                    : 'pricing-card'
                } ${
                  theme === 'dark' 
                    ? 'bg-white/5 hover:bg-white/10 border-white/5 hover:border-white/10' 
                    : 'bg-black/5 hover:bg-black/10 border-black/5 hover:border-black/10'
                }`}
              >
                {plan.highlighted && (
                  <div className={`absolute top-0 inset-x-0 h-2 ${theme === 'dark' ? 'bg-white' : 'bg-black'} rounded-t-3xl`}></div>
                )}
                
                <div className="mb-8">
                  <h3 className={`text-2xl font-semibold ${theme === 'dark' ? 'text-white' : 'text-black'} mb-2`}>
                    {plan.name}
                  </h3>
                  <p className={`${theme === 'dark' ? 'text-white/70' : 'text-black/70'} mb-6`}>
                    {plan.description}
                  </p>
                  <div className="flex items-baseline">
                    <span className={`text-4xl font-bold ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                      ${annual ? plan.annualPrice : plan.monthlyPrice}
                    </span>
                    <span className={`ml-2 ${theme === 'dark' ? 'text-white/60' : 'text-black/60'}`}>
                      /month
                    </span>
                  </div>
                  {annual && (
                    <p className={`text-sm ${theme === 'dark' ? 'text-white/60' : 'text-black/60'} mt-1`}>
                      Billed annually (${plan.annualPrice * 12}/year)
                    </p>
                  )}
                </div>
                
                <div className="mb-8">
                  <h4 className={`text-sm font-medium ${theme === 'dark' ? 'text-white/60' : 'text-black/60'} uppercase mb-4`}>What's included</h4>
                  <ul className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <Check className={`h-5 w-5 ${theme === 'dark' ? 'text-white/60' : 'text-black/60'} mr-3 flex-shrink-0 mt-0.5`} />
                        <span className={`${theme === 'dark' ? 'text-white/80' : 'text-black/80'}`}>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mt-auto">
                  <Link 
                    to="/contact" 
                    className={`w-full flex items-center justify-center ${
                      plan.highlighted
                        ? theme === 'dark' 
                          ? 'bg-white text-black hover:bg-gray-100' 
                          : 'bg-black text-white hover:bg-gray-900'
                        : theme === 'dark'
                          ? 'bg-white/10 text-white hover:bg-white/20'
                          : 'bg-black/10 text-black hover:bg-black/20'
                    } px-8 py-4 rounded-full transition-all duration-300 font-medium text-sm tracking-wide group`}
                  >
                    {plan.name === 'Enterprise' ? 'Contact Sales' : 'Start Free Trial'}
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Enterprise Section */}
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
                  <span className={`text-sm font-medium tracking-widest ${theme === 'dark' ? 'text-white/60' : 'text-black/60'} uppercase`}>Enterprise Solutions</span>
                  <h3 className={`text-3xl md:text-4xl font-semibold ${theme === 'dark' ? 'text-white' : 'text-black'} mt-4 mb-6 tracking-tight`}>
                    Need a custom solution?
                  </h3>
                  
                  <p className={`${theme === 'dark' ? 'text-white/80' : 'text-black/80'} mb-6`}>
                    Our Enterprise plan offers additional customization, dedicated support, and advanced features for large educational institutions with complex requirements.
                  </p>
                  
                  <ul className="space-y-4 mb-8">
                    {[
                      'Custom integrations with existing systems',
                      'Dedicated account manager and implementation team',
                      'Custom reporting and analytics',
                      'On-premise deployment options',
                      'Advanced security and compliance features',
                      'Custom SLAs and support agreements'
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <Check className={`h-6 w-6 ${theme === 'dark' ? 'text-white' : 'text-black'} mr-3 flex-shrink-0 mt-0.5`} />
                        <span className={`${theme === 'dark' ? 'text-white/80' : 'text-black/80'}`}>{item}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link to="/contact" className={`inline-flex items-center justify-center ${theme === 'dark' ? 'bg-white text-black hover:bg-gray-100' : 'bg-black text-white hover:bg-gray-900'} px-8 py-4 rounded-full transition-all duration-300 font-medium text-sm tracking-wide group`}>
                    Contact our sales team
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
                
                <div>
                  <img
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80"
                    alt="Enterprise Solutions"
                    className="rounded-2xl w-full shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQs */}
      <section className={`py-20 px-4 sm:px-6 lg:px-8 ${theme === 'dark' ? 'bg-black' : 'bg-white'} relative`}>
        <div className="max-w-4xl mx-auto relative">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className={`text-sm font-medium tracking-widest ${theme === 'dark' ? 'text-white/60' : 'text-black/60'} uppercase`}>FAQs</span>
            <h2 className={`text-3xl md:text-4xl font-semibold ${theme === 'dark' ? 'text-white' : 'text-black'} mt-4 tracking-tight`}>
              Frequently asked questions
            </h2>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            {faqs.map((faq, index) => (
              <motion.div 
                key={index} 
                variants={itemVariants}
                className={`p-6 rounded-2xl ${theme === 'dark' ? 'bg-white/5 border-white/5' : 'bg-black/5 border-black/5'} backdrop-blur-xl border`}
              >
                <div className="flex items-start">
                  <HelpCircle className={`h-6 w-6 ${theme === 'dark' ? 'text-white/60' : 'text-black/60'} mr-4 flex-shrink-0 mt-0.5`} />
                  <div>
                    <h3 className={`text-lg font-medium ${theme === 'dark' ? 'text-white' : 'text-black'} mb-2`}>{faq.question}</h3>
                    <p className={`${theme === 'dark' ? 'text-white/70' : 'text-black/70'}`}>{faq.answer}</p>
                  </div>
                </div>
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
                Ready to transform your institution?
              </h2>
              <p className={`${theme === 'dark' ? 'text-white/80' : 'text-black/80'} max-w-2xl mx-auto mb-8`}>
                Start your 14-day free trial today. No credit card required.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className={`${theme === 'dark' ? 'bg-white text-black hover:bg-gray-100' : 'bg-black text-white hover:bg-gray-900'} px-8 py-4 rounded-full transition-all duration-300 font-medium text-sm tracking-wide flex items-center justify-center group`}>
                  Start Free Trial
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

export default PricingPage;