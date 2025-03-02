import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Users,
  Calendar,
  TrendingUp,
  BookOpen,
  CheckCircle,
  Shield,
  Zap,
  Globe,
} from "lucide-react";
import { motion } from "framer-motion";
import Hero from "../components/Hero";
import HakimPic from "../../public/assets/img/hakim.jpeg";

interface HomePageProps {
  theme: string;
}

const HomePage: React.FC<HomePageProps> = ({ theme }) => {
  const features = [
    {
      icon: (
        <Users
          className={`h-8 w-8 ${
            theme === "dark" ? "text-white" : "text-black"
          }`}
        />
      ),
      title: "Smart Admissions",
      description:
        "Streamline your enrollment process with AI-powered automation that intelligently processes applications and identifies qualified candidates.",
    },
    {
      icon: (
        <BookOpen
          className={`h-8 w-8 ${
            theme === "dark" ? "text-white" : "text-black"
          }`}
        />
      ),
      title: "Advanced Registration",
      description:
        "Intelligent course scheduling with smart conflict resolution, automated prerequisite verification, and dynamic class capacity management.",
    },
    {
      icon: (
        <TrendingUp
          className={`h-8 w-8 ${
            theme === "dark" ? "text-white" : "text-black"
          }`}
        />
      ),
      title: "Performance Analytics",
      description:
        "Track progress with comprehensive analytics, predictive performance modeling, early intervention alerts, and customizable reporting dashboards.",
    },
    {
      icon: (
        <Calendar
          className={`h-8 w-8 ${
            theme === "dark" ? "text-white" : "text-black"
          }`}
        />
      ),
      title: "Smart Finance",
      description:
        "Automated billing and financial reporting in real-time, with integrated payment processing, scholarship management, and financial aid tracking.",
    },
  ];

  const testimonials = [
    {
      quote:
        "Tredumo has completely transformed how we manage our educational processes. The intuitive interface and powerful analytics have made a significant impact on our efficiency.",
      author: "Jude Lubega",
      position: "Vice Chancellor, Nkumba University",
      image:
        "https://unffeict4farmers.org/wp-content/uploads/2020/07/Prof.-Jude-Lubega-ceo-8tech-consults-1.jpg",
    },
    {
      quote:
        "The AI-driven insights have helped us identify areas for improvement that we never would have noticed otherwise. Our student satisfaction rates have increased by 35% since implementing Tredumo.",
      author: "Hakim Mulinde",
      position: "CTO, Nkumba University",
      image: HakimPic,
    },
    {
      quote:
        "The seamless integration with our existing systems made the transition to Tredumo incredibly smooth. Their support team was exceptional throughout the entire process.",
      author: "Ntabadde Vanessah",
      position: "CEO of Charmant Clothing Line",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80",
    },
  ];

  const stats = [
    { value: "500+", label: "Institutions" },
    { value: "3.5M+", label: "Students" },
    { value: "98%", label: "Satisfaction" },
    { value: "24/7", label: "Support" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div
      className={`${
        theme === "dark" ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      {/* Hero Section */}
      <Hero theme={theme} />

      {/* Stats Section */}
      <section
        className={`py-20 px-4 sm:px-6 lg:px-8 ${
          theme === "dark" ? "bg-black" : "bg-white"
        } relative`}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p
                  className={`text-4xl md:text-5xl font-bold ${
                    theme === "dark"
                      ? "text-tredumo-blue-400"
                      : "text-tredumo-blue-600"
                  } mb-2`}
                >
                  {stat.value}
                </p>
                <p
                  className={`${
                    theme === "dark" ? "text-white/70" : "text-black/70"
                  } text-sm uppercase tracking-wider`}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section
        className={`py-32 px-4 sm:px-6 lg:px-8 ${
          theme === "dark" ? "bg-black" : "bg-white"
        } relative`}
      >
        <div className="max-w-7xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-24"
          >
            <span
              className={`text-sm font-medium tracking-widest ${
                theme === "dark"
                  ? "text-tredumo-blue-400"
                  : "text-tredumo-blue-600"
              } uppercase`}
            >
              Features
            </span>
            <h2
              className={`text-4xl md:text-5xl font-bold ${
                theme === "dark" ? "text-white" : "text-black"
              } mt-4 tracking-tight`}
            >
              Powerful features.
              <br />
              <span
                className={`${
                  theme === "dark"
                    ? "text-tredumo-blue-400"
                    : "text-tredumo-blue-600"
                }`}
              >
                Designed for education.
              </span>
            </h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`feature-card group ${
                  theme === "dark"
                    ? "bg-white/5 hover:bg-white/10 border-white/5 hover:border-white/10"
                    : "bg-black/5 hover:bg-black/10 border-black/5 hover:border-black/10"
                }`}
              >
                <div
                  className={`mb-6 p-3 rounded-xl inline-block ${
                    theme === "dark" ? "bg-white/10" : "bg-black/10"
                  }`}
                >
                  {feature.icon}
                </div>
                <h3
                  className={`text-2xl font-semibold ${
                    theme === "dark" ? "text-white" : "text-black"
                  } mb-4`}
                >
                  {feature.title}
                </h3>
                <p
                  className={`${
                    theme === "dark" ? "text-white/70" : "text-black/70"
                  } text-lg leading-relaxed`}
                >
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <Link
              to="/features"
              className={`inline-block ${
                theme === "dark"
                  ? "bg-white/10 text-white hover:bg-white/20"
                  : "bg-black/10 text-black hover:bg-black/20"
              } backdrop-blur-xl px-8 py-4 rounded-full transition-all duration-300 font-medium text-sm tracking-wide`}
            >
              View all features
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Dashboard Section */}
      <section
        className={`py-32 px-4 sm:px-6 lg:px-8 ${
          theme === "dark" ? "bg-black" : "bg-white"
        } relative`}
      >
        <div className="max-w-7xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-24"
          >
            <span
              className={`text-sm font-medium tracking-widest ${
                theme === "dark"
                  ? "text-tredumo-blue-400"
                  : "text-tredumo-blue-600"
              } uppercase`}
            >
              Dashboard
            </span>
            <h2
              className={`text-4xl md:text-5xl font-bold ${
                theme === "dark" ? "text-white" : "text-black"
              } mt-4 tracking-tight`}
            >
              Beautiful analytics.
              <br />
              <span
                className={`${
                  theme === "dark"
                    ? "text-tredumo-blue-400"
                    : "text-tredumo-blue-600"
                }`}
              >
                At your fingertips.
              </span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-x-20 -inset-y-20 bg-gradient-to-r from-purple-500/30 via-blue-500/30 to-cyan-500/30 blur-3xl opacity-20 rounded-[3rem]"></div>

            <div
              className={`relative ${
                theme === "dark"
                  ? "bg-white/5 border-white/10"
                  : "bg-black/5 border-black/10"
              } backdrop-blur-xl rounded-[2rem] border p-8 overflow-hidden`}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div
                  className={`stats-card ${
                    theme === "dark"
                      ? "bg-white/5 border-white/5 hover:border-white/10"
                      : "bg-black/5 border-black/5 hover:border-black/10"
                  }`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3
                      className={`${
                        theme === "dark" ? "text-white/80" : "text-black/80"
                      } font-medium`}
                    >
                      Students
                    </h3>
                    <Users
                      className={`h-5 w-5 ${
                        theme === "dark" ? "text-white/60" : "text-black/60"
                      }`}
                    />
                  </div>
                  <p
                    className={`text-3xl font-semibold ${
                      theme === "dark" ? "text-white" : "text-black"
                    } mb-2`}
                  >
                    1,234
                  </p>
                  <p
                    className={`${
                      theme === "dark" ? "text-white/60" : "text-black/60"
                    } text-sm flex items-center`}
                  >
                    <TrendingUp className="h-4 w-4 mr-1" /> +12% this month
                  </p>
                </div>

                <div
                  className={`stats-card ${
                    theme === "dark"
                      ? "bg-white/5 border-white/5 hover:border-white/10"
                      : "bg-black/5 border-black/5 hover:border-black/10"
                  }`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3
                      className={`${
                        theme === "dark" ? "text-white/80" : "text-black/80"
                      } font-medium`}
                    >
                      Courses
                    </h3>
                    <BookOpen
                      className={`h-5 w-5 ${
                        theme === "dark" ? "text-white/60" : "text-black/60"
                      }`}
                    />
                  </div>
                  <p
                    className={`text-3xl font-semibold ${
                      theme === "dark" ? "text-white" : "text-black"
                    } mb-2`}
                  >
                    86
                  </p>
                  <p
                    className={`${
                      theme === "dark" ? "text-white/60" : "text-black/60"
                    } text-sm`}
                  >
                    Active sessions
                  </p>
                </div>

                <div
                  className={`stats-card ${
                    theme === "dark"
                      ? "bg-white/5 border-white/5 hover:border-white/10"
                      : "bg-black/5 border-black/5 hover:border-black/10"
                  }`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3
                      className={`${
                        theme === "dark" ? "text-white/80" : "text-black/80"
                      } font-medium`}
                    >
                      Revenue
                    </h3>
                    <span
                      className={`text-2xl ${
                        theme === "dark" ? "text-white/60" : "text-black/60"
                      }`}
                    >
                      $
                    </span>
                  </div>
                  <p
                    className={`text-3xl font-semibold ${
                      theme === "dark" ? "text-white" : "text-black"
                    } mb-2`}
                  >
                    284.5k
                  </p>
                  <p
                    className={`${
                      theme === "dark" ? "text-white/60" : "text-black/60"
                    } text-sm flex items-center`}
                  >
                    <TrendingUp className="h-4 w-4 mr-1" /> +8% this month
                  </p>
                </div>

                <div
                  className={`stats-card ${
                    theme === "dark"
                      ? "bg-white/5 border-white/5 hover:border-white/10"
                      : "bg-black/5 border-black/5 hover:border-black/10"
                  }`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3
                      className={`${
                        theme === "dark" ? "text-white/80" : "text-black/80"
                      } font-medium`}
                    >
                      Events
                    </h3>
                    <Calendar
                      className={`h-5 w-5 ${
                        theme === "dark" ? "text-white/60" : "text-black/60"
                      }`}
                    />
                  </div>
                  <p
                    className={`text-3xl font-semibold ${
                      theme === "dark" ? "text-white" : "text-black"
                    } mb-2`}
                  >
                    12
                  </p>
                  <p
                    className={`${
                      theme === "dark" ? "text-white/60" : "text-black/60"
                    } text-sm`}
                  >
                    Next 7 days
                  </p>
                </div>
              </div>

              <div className="mt-8">
                <img
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80"
                  alt="Analytics Dashboard"
                  className="rounded-2xl w-full shadow-xl"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section
        className={`py-32 px-4 sm:px-6 lg:px-8 ${
          theme === "dark" ? "bg-black" : "bg-white"
        } relative`}
      >
        <div className="max-w-7xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span
              className={`text-sm font-medium tracking-widest ${
                theme === "dark"
                  ? "text-tredumo-blue-400"
                  : "text-tredumo-blue-600"
              } uppercase`}
            >
              Why Choose Us
            </span>
            <h2
              className={`text-4xl md:text-5xl font-bold ${
                theme === "dark" ? "text-white" : "text-black"
              } mt-4 tracking-tight`}
            >
              Built for modern education
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <Shield
                    className={`h-8 w-8 ${
                      theme === "dark"
                        ? "text-tredumo-blue-400"
                        : "text-tredumo-blue-600"
                    }`}
                  />
                ),
                title: "Enterprise Security",
                description:
                  "Bank-level encryption, role-based access controls, and comprehensive audit logs to keep your data safe.",
              },
              {
                icon: (
                  <Zap
                    className={`h-8 w-8 ${
                      theme === "dark"
                        ? "text-tredumo-blue-400"
                        : "text-tredumo-blue-600"
                    }`}
                  />
                ),
                title: "Lightning Fast",
                description:
                  "Optimized for speed with distributed cloud infrastructure and intelligent caching for seamless performance.",
              },
              {
                icon: (
                  <Globe
                    className={`h-8 w-8 ${
                      theme === "dark"
                        ? "text-tredumo-blue-400"
                        : "text-tredumo-blue-600"
                    }`}
                  />
                ),
                title: "Global Compliance",
                description:
                  "Built to meet educational standards and privacy regulations worldwide, including FERPA, GDPR, and more.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`p-8 rounded-3xl ${
                  theme === "dark"
                    ? "bg-white/5 border-white/5"
                    : "bg-black/5 border-black/5"
                } backdrop-blur-xl border text-center`}
              >
                <div className="flex justify-center mb-6">{item.icon}</div>
                <h3
                  className={`text-xl font-semibold ${
                    theme === "dark" ? "text-white" : "text-black"
                  } mb-4`}
                >
                  {item.title}
                </h3>
                <p
                  className={`${
                    theme === "dark" ? "text-white/70" : "text-black/70"
                  }`}
                >
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        className={`py-32 px-4 sm:px-6 lg:px-8 ${
          theme === "dark" ? "bg-black" : "bg-white"
        } relative`}
      >
        <div className="max-w-7xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-24"
          >
            <span
              className={`text-sm font-medium tracking-widest ${
                theme === "dark"
                  ? "text-tredumo-blue-400"
                  : "text-tredumo-blue-600"
              } uppercase`}
            >
              Testimonials
            </span>
            <h2
              className={`text-4xl md:text-5xl font-bold ${
                theme === "dark" ? "text-white" : "text-black"
              } mt-4 tracking-tight`}
            >
              Trusted by leading
              <br />
              institutions worldwide
            </h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`p-8 rounded-3xl ${
                  theme === "dark"
                    ? "bg-white/5 border-white/5"
                    : "bg-black/5 border-black/5"
                } backdrop-blur-xl border relative`}
              >
                <div
                  className={`absolute -top-5 -left-5 w-10 h-10 flex items-center justify-center rounded-full ${
                    theme === "dark"
                      ? "bg-tredumo-blue-500 text-white"
                      : "bg-tredumo-blue-600 text-white"
                  } text-2xl font-serif`}
                >
                  "
                </div>
                <p
                  className={`${
                    theme === "dark" ? "text-white/80" : "text-black/80"
                  } text-lg mb-6 italic`}
                >
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <h4
                      className={`font-medium ${
                        theme === "dark" ? "text-white" : "text-black"
                      }`}
                    >
                      {testimonial.author}
                    </h4>
                    <p
                      className={`text-sm ${
                        theme === "dark" ? "text-white/60" : "text-black/60"
                      }`}
                    >
                      {testimonial.position}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className={`py-32 px-4 sm:px-6 lg:px-8 ${
          theme === "dark" ? "bg-black" : "bg-white"
        } relative`}
      >
        <div className="max-w-7xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className={`rounded-[2rem] ${
              theme === "dark"
                ? "bg-white/5 border-white/10"
                : "bg-black/5 border-black/10"
            } backdrop-blur-xl border p-12 md:p-16 text-center relative overflow-hidden`}
          >
            <div className="absolute -inset-x-20 -inset-y-20 bg-gradient-to-r from-purple-500/30 via-blue-500/30 to-cyan-500/30 blur-3xl opacity-20 rounded-[3rem]"></div>

            <div className="relative">
              <span
                className={`text-sm font-medium tracking-widest ${
                  theme === "dark"
                    ? "text-tredumo-blue-400"
                    : "text-tredumo-blue-600"
                } uppercase`}
              >
                Ready to transform your institution?
              </span>
              <h2
                className={`text-4xl md:text-5xl font-bold ${
                  theme === "dark" ? "text-white" : "text-black"
                } mt-4 mb-8 tracking-tight`}
              >
                Start your journey with Tredumo today
              </h2>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className={`${
                    theme === "dark"
                      ? "bg-white text-black hover:bg-gray-100"
                      : "bg-black text-white hover:bg-gray-900"
                  } px-8 py-4 rounded-full transition-all duration-300 font-medium text-sm tracking-wide flex items-center justify-center group`}
                >
                  Get Started
                  <ArrowRight className="inline ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/pricing"
                  className={`${
                    theme === "dark"
                      ? "bg-white/10 text-white hover:bg-white/20"
                      : "bg-black/10 text-black hover:bg-black/20"
                  } backdrop-blur-xl px-8 py-4 rounded-full transition-all duration-300 font-medium text-sm tracking-wide`}
                >
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

export default HomePage;
