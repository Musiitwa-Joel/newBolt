import type React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  MapPin,
  Clock,
  Briefcase,
  Users,
  Heart,
  Zap,
  Coffee,
} from "lucide-react";
import { motion } from "framer-motion";

interface CareersPageProps {
  theme: string;
}

const CareersPage: React.FC<CareersPageProps> = ({ theme = "light" }) => {
  const openPositions = [
    {
      title: "Senior Frontend Engineer",
      department: "Engineering",
      location: "San Francisco, CA (Remote Available)",
      type: "Full-time",
      description:
        "We're looking for a Senior Frontend Engineer to help build and improve our user interfaces. You'll work closely with our product and design teams to create intuitive, responsive, and accessible experiences.",
    },
    {
      title: "Backend Engineer",
      department: "Engineering",
      location: "San Francisco, CA (Remote Available)",
      type: "Full-time",
      description:
        "Join our backend team to build scalable, reliable services that power our education management platform. You'll work with modern technologies to solve complex problems and improve performance.",
    },
    {
      title: "Product Manager",
      department: "Product",
      location: "San Francisco, CA (Remote Available)",
      type: "Full-time",
      description:
        "We're seeking an experienced Product Manager to lead the development of new features and improvements. You'll work with cross-functional teams to define requirements, prioritize work, and deliver value to our users.",
    },
    {
      title: "UX/UI Designer",
      department: "Design",
      location: "San Francisco, CA (Remote Available)",
      type: "Full-time",
      description:
        "Help us create beautiful, intuitive interfaces that delight our users. You'll collaborate with product and engineering teams to design and implement user-centered experiences.",
    },
    {
      title: "Customer Success Manager",
      department: "Customer Success",
      location: "San Francisco, CA (Remote Available)",
      type: "Full-time",
      description:
        "Join our customer success team to help educational institutions implement and get the most out of Tredumo. You'll be the primary point of contact for a portfolio of clients, ensuring their success and satisfaction.",
    },
    {
      title: "Sales Development Representative",
      department: "Sales",
      location: "San Francisco, CA (Remote Available)",
      type: "Full-time",
      description:
        "We're looking for a motivated Sales Development Representative to help grow our customer base. You'll identify and qualify leads, conduct outreach, and set up meetings for our account executives.",
    },
  ];

  const benefits = [
    {
      icon: (
        <Heart
          className={`h-8 w-8 ${
            theme === "dark" ? "text-white" : "text-black"
          }`}
        />
      ),
      title: "Comprehensive Healthcare",
      description:
        "We offer top-tier medical, dental, and vision coverage for you and your dependents, with 100% of premiums covered by Tredumo.",
    },
    {
      icon: (
        <Zap
          className={`h-8 w-8 ${
            theme === "dark" ? "text-white" : "text-black"
          }`}
        />
      ),
      title: "Flexible Work",
      description:
        "Work from anywhere with our remote-first approach, or choose a hybrid model with access to our beautiful offices.",
    },
    {
      icon: (
        <Coffee
          className={`h-8 w-8 ${
            theme === "dark" ? "text-white" : "text-black"
          }`}
        />
      ),
      title: "Unlimited PTO",
      description:
        "Take the time you need to rest, recharge, and pursue personal interests with our unlimited paid time off policy.",
    },
    {
      icon: (
        <Users
          className={`h-8 w-8 ${
            theme === "dark" ? "text-white" : "text-black"
          }`}
        />
      ),
      title: "Professional Development",
      description:
        "We invest in your growth with a generous annual budget for courses, conferences, and learning resources.",
    },
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
      <div className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0">
          <div
            className={`absolute inset-0 ${
              theme === "dark"
                ? "bg-gradient-to-b from-black via-black/95 to-black"
                : "bg-gradient-to-b from-white via-white/95 to-white"
            }`}
          ></div>
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
              className={`text-4xl sm:text-5xl md:text-6xl font-semibold ${
                theme === "dark" ? "text-white" : "text-black"
              } leading-tight tracking-tight`}
            >
              Join our mission to transform
              <br />
              education worldwide
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className={`text-xl ${
                theme === "dark" ? "text-white/80" : "text-black/80"
              } max-w-2xl mx-auto font-light leading-relaxed`}
            >
              We're building the future of education management, and we're
              looking for passionate, talented people to join our team.
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Culture Section */}
      <section
        className={`py-20 px-4 sm:px-6 lg:px-8 ${
          theme === "dark" ? "bg-black" : "bg-white"
        } relative`}
      >
        <div className="max-w-7xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative rounded-[2rem] overflow-hidden"
          >
            <div className="absolute -inset-x-20 -inset-y-20 bg-gradient-to-r from-purple-500/30 via-blue-500/30 to-cyan-500/30 blur-3xl opacity-20 rounded-[3rem]"></div>

            <div
              className={`relative ${
                theme === "dark"
                  ? "bg-white/5 border-white/10"
                  : "bg-black/5 border-black/10"
              } backdrop-blur-xl rounded-[2rem] border p-8 md:p-12 overflow-hidden`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <span
                    className={`text-sm font-medium tracking-widest ${
                      theme === "dark" ? "text-white/60" : "text-black/60"
                    } uppercase`}
                  >
                    Our Culture
                  </span>
                  <h3
                    className={`text-3xl md:text-4xl font-semibold ${
                      theme === "dark" ? "text-white" : "text-black"
                    } mt-4 mb-6 tracking-tight`}
                  >
                    Work that matters, with people who care
                  </h3>

                  <div
                    className={`space-y-6 ${
                      theme === "dark" ? "text-white/80" : "text-black/80"
                    }`}
                  >
                    <p>
                      At Tredumo, we're passionate about improving education
                      through technology. We believe that by building better
                      tools for educational institutions, we can help create
                      better learning experiences for students worldwide.
                    </p>
                    <p>
                      Our team is collaborative, innovative, and focused on
                      making a real impact. We value diverse perspectives, open
                      communication, and a healthy work-life balance.
                    </p>
                    <p>
                      Whether you're working remotely or in one of our offices,
                      you'll be part of a supportive community that celebrates
                      wins together and helps each other grow.
                    </p>
                  </div>
                </div>

                <div>
                  <img
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80"
                    alt="Tredumo Team"
                    className="rounded-2xl w-full shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section
        className={`py-20 px-4 sm:px-6 lg:px-8 ${
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
                theme === "dark" ? "text-white/60" : "text-black/60"
              } uppercase`}
            >
              Benefits & Perks
            </span>
            <h2
              className={`text-3xl md:text-4xl font-semibold ${
                theme === "dark" ? "text-white" : "text-black"
              } mt-4 tracking-tight`}
            >
              Taking care of our team
            </h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`p-6 rounded-2xl ${
                  theme === "dark"
                    ? "bg-white/5 hover:bg-white/10 border-white/5 hover:border-white/10"
                    : "bg-black/5 hover:bg-black/10 border-black/5 hover:border-black/10"
                } border transition-all duration-300`}
              >
                <div className="mb-6">{benefit.icon}</div>
                <h3
                  className={`text-2xl font-semibold ${
                    theme === "dark" ? "text-white" : "text-black"
                  } mb-4`}
                >
                  {benefit.title}
                </h3>
                <p
                  className={`${
                    theme === "dark" ? "text-white/70" : "text-black/70"
                  } text-lg leading-relaxed`}
                >
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <p
              className={`${
                theme === "dark" ? "text-white/80" : "text-black/80"
              } mb-6`}
            >
              And more: 401(k) matching, parental leave, wellness programs, home
              office stipend, team retreats, and more!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Open Positions */}
      <section
        className={`py-20 px-4 sm:px-6 lg:px-8 ${
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
                theme === "dark" ? "text-white/60" : "text-black/60"
              } uppercase`}
            >
              Open Positions
            </span>
            <h2
              className={`text-3xl md:text-4xl font-semibold ${
                theme === "dark" ? "text-white" : "text-black"
              } mt-4 tracking-tight`}
            >
              Join our growing team
            </h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            {openPositions.map((position, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`p-6 rounded-2xl ${
                  theme === "dark"
                    ? "bg-white/5 hover:bg-white/10 border-white/5 hover:border-white/10"
                    : "bg-black/5 hover:bg-black/10 border-black/5 hover:border-black/10"
                } backdrop-blur-xl border transition-all duration-300`}
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <h3
                      className={`text-xl font-semibold ${
                        theme === "dark" ? "text-white" : "text-black"
                      } mb-2`}
                    >
                      {position.title}
                    </h3>

                    <div className="flex flex-wrap items-center gap-4 mb-4">
                      <div className="flex items-center">
                        <Briefcase
                          className={`h-4 w-4 ${
                            theme === "dark" ? "text-white/60" : "text-black/60"
                          } mr-2`}
                        />
                        <span
                          className={`text-sm ${
                            theme === "dark" ? "text-white/60" : "text-black/60"
                          }`}
                        >
                          {position.department}
                        </span>
                      </div>
                      <div className="flex items-center">
                        <MapPin
                          className={`h-4 w-4 ${
                            theme === "dark" ? "text-white/60" : "text-black/60"
                          } mr-2`}
                        />
                        <span
                          className={`text-sm ${
                            theme === "dark" ? "text-white/60" : "text-black/60"
                          }`}
                        >
                          {position.location}
                        </span>
                      </div>
                      <div className="flex items-center">
                        <Clock
                          className={`h-4 w-4 ${
                            theme === "dark" ? "text-white/60" : "text-black/60"
                          } mr-2`}
                        />
                        <span
                          className={`text-sm ${
                            theme === "dark" ? "text-white/60" : "text-black/60"
                          }`}
                        >
                          {position.type}
                        </span>
                      </div>
                    </div>

                    <p
                      className={`${
                        theme === "dark" ? "text-white/80" : "text-black/80"
                      } mb-4 md:mb-0`}
                    >
                      {position.description}
                    </p>
                  </div>

                  <div className="md:ml-8">
                    <Link
                      to="/contact"
                      className={`inline-flex items-center justify-center ${
                        theme === "dark"
                          ? "bg-white/10 text-white hover:bg-white/20"
                          : "bg-black/10 text-black hover:bg-black/20"
                      } px-6 py-3 rounded-full transition-all duration-300 font-medium text-sm tracking-wide group whitespace-nowrap`}
                    >
                      Apply Now
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <p
              className={`${
                theme === "dark" ? "text-white/80" : "text-black/80"
              } mb-6`}
            >
              Don't see a position that matches your skills? We're always
              looking for talented people to join our team.
            </p>
            <Link
              to="/contact"
              className={`inline-flex items-center justify-center ${
                theme === "dark"
                  ? "bg-white text-black hover:bg-gray-100"
                  : "bg-black text-white hover:bg-gray-900"
              } px-8 py-4 rounded-full transition-all duration-300 font-medium text-sm tracking-wide group`}
            >
              Send us your resume
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Hiring Process */}
      <section
        className={`py-20 px-4 sm:px-6 lg:px-8 ${
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
            } backdrop-blur-xl border p-8 md:p-12 relative overflow-hidden`}
          >
            <div className="absolute -inset-x-20 -inset-y-20 bg-gradient-to-r from-purple-500/30 via-blue-500/30 to-cyan-500/30 blur-3xl opacity-20 rounded-[3rem]"></div>

            <div className="relative">
              <span
                className={`text-sm font-medium tracking-widest ${
                  theme === "dark" ? "text-white/60" : "text-black/60"
                } uppercase`}
              >
                Our Hiring Process
              </span>
              <h3
                className={`text-3xl md:text-4xl font-semibold ${
                  theme === "dark" ? "text-white" : "text-black"
                } mt-4 mb-8 tracking-tight`}
              >
                What to expect when you apply
              </h3>

              <div className="space-y-6">
                {[
                  {
                    step: "1",
                    title: "Application Review",
                    description:
                      "Our recruiting team reviews your application and resume to determine if your skills and experience align with the role.",
                  },
                  {
                    step: "2",
                    title: "Initial Interview",
                    description:
                      "A 30-45 minute video call with a recruiter to discuss your background, experience, and interest in Tredumo.",
                  },
                  {
                    step: "3",
                    title: "Technical/Role Assessment",
                    description:
                      "Depending on the role, you may be asked to complete a take-home assignment or technical interview to showcase your skills.",
                  },
                  {
                    step: "4",
                    title: "Team Interviews",
                    description:
                      "Meet with potential teammates and cross-functional partners to discuss your experience and approach to problem-solving.",
                  },
                  {
                    step: "5",
                    title: "Final Interview",
                    description:
                      "A conversation with a senior leader to discuss your career goals and how you can contribute to Tredumo's mission.",
                  },
                  {
                    step: "6",
                    title: "Offer",
                    description:
                      "If there's a mutual fit, we'll extend an offer and welcome you to the team!",
                  },
                ].map((step, index) => (
                  <div key={index} className="flex">
                    <div
                      className={`flex-shrink-0 w-10 h-10 rounded-full ${
                        theme === "dark"
                          ? "bg-white/10 text-white"
                          : "bg-black/10 text-black"
                      } flex items-center justify-center font-semibold mr-4`}
                    >
                      {step.step}
                    </div>
                    <div>
                      <h4
                        className={`text-lg font-medium ${
                          theme === "dark" ? "text-white" : "text-black"
                        } mb-2`}
                      >
                        {step.title}
                      </h4>
                      <p
                        className={`${
                          theme === "dark" ? "text-white/70" : "text-black/70"
                        }`}
                      >
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className={`py-20 px-4 sm:px-6 lg:px-8 ${
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
              <h2
                className={`text-3xl md:text-4xl font-semibold ${
                  theme === "dark" ? "text-white" : "text-black"
                } mb-6 tracking-tight`}
              >
                Ready to make an impact?
              </h2>
              <p
                className={`${
                  theme === "dark" ? "text-white/80" : "text-black/80"
                } max-w-2xl mx-auto mb-8`}
              >
                Join our team and help us transform education management for
                institutions worldwide.
              </p>

              <Link
                to="/contact"
                className={`inline-flex items-center justify-center ${
                  theme === "dark"
                    ? "bg-white text-black hover:bg-gray-100"
                    : "bg-black text-white hover:bg-gray-900"
                } px-8 py-4 rounded-full transition-all duration-300 font-medium text-sm tracking-wide group`}
              >
                View open positions
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CareersPage;
