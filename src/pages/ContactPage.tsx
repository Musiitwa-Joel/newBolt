import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { motion } from "framer-motion";

interface ContactPageProps {
  theme: string;
}

const ContactPage: React.FC<ContactPageProps> = ({ theme }) => {
  const offices = [
    {
      city: "Kigali",
      address: "123 Kigali Heights, Kigali, Rwanda",
      phone: "+250 788 123 456",
      email: "kigali@tredumo.com",
      hours: "Mon-Fri: 9am-6pm CAT",
    },
    {
      city: "Pretoria",
      address: "456 Pretoria Street, Pretoria, South Africa",
      phone: "+27 12 345 6789",
      email: "pretoria@tredumo.com",
      hours: "Mon-Fri: 9am-6pm SAST",
    },
    {
      city: "Kampala",
      address: "Nkumba University, Entebbe, Uganda",
      phone: "+256 414 321 789",
      email: "nkumba@tredumo.com",
      hours: "Mon-Fri: 9am-6pm EAT",
    },
  ];

  const departments = [
    {
      name: "Sales",
      description: "For pricing inquiries and product demos",
      email: "sales@tredumo.com",
      phone: "+256 706-231319",
    },
    {
      name: "Support",
      description: "For technical assistance and customer service",
      email: "support@tredumo.com",
      phone: "+256 762-219997",
    },
    {
      name: "Partnerships",
      description: "For integration and partnership opportunities",
      email: "partnerships@tredumo.com",
      phone: "+256 703-840326",
    },
    {
      name: "Media",
      description: "For press inquiries and media relations",
      email: "media@tredumo.com",
      phone: "+256770421202",
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
              Get in touch with our team
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className={`text-xl ${
                theme === "dark" ? "text-white/80" : "text-black/80"
              } max-w-2xl mx-auto font-light leading-relaxed`}
            >
              Have questions about Tredumo? We're here to help. Reach out to us
              and we'll get back to you as soon as possible.
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Contact Form Section */}
      <section
        className={`py-20 px-4 sm:px-6 lg:px-8 ${
          theme === "dark" ? "bg-black" : "bg-white"
        } relative`}
      >
        <div className="max-w-7xl mx-auto relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2
                  className={`text-3xl font-semibold ${
                    theme === "dark" ? "text-white" : "text-black"
                  } mb-4`}
                >
                  Send us a message
                </h2>
                <p
                  className={`${
                    theme === "dark" ? "text-white/80" : "text-black/80"
                  }`}
                >
                  Fill out the form and we'll get back to you within 24 hours.
                </p>
              </div>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="first-name"
                      className={`block text-sm font-medium ${
                        theme === "dark" ? "text-white/60" : "text-black/60"
                      } mb-2`}
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      id="first-name"
                      className={`w-full px-4 py-3 ${
                        theme === "dark"
                          ? "bg-white/5 focus:ring-white/20 text-white placeholder-white/40 border-white/10"
                          : "bg-black/5 focus:ring-black/20 text-black placeholder-black/40 border-black/10"
                      } rounded-lg focus:outline-none focus:ring-2 border`}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="last-name"
                      className={`block text-sm font-medium ${
                        theme === "dark" ? "text-white/60" : "text-black/60"
                      } mb-2`}
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="last-name"
                      className={`w-full px-4 py-3 ${
                        theme === "dark"
                          ? "bg-white/5 focus:ring-white/20 text-white placeholder-white/40 border-white/10"
                          : "bg-black/5 focus:ring-black/20 text-black placeholder-black/40 border-black/10"
                      } rounded-lg focus:outline-none focus:ring-2 border`}
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className={`block text-sm font-medium ${
                      theme === "dark" ? "text-white/60" : "text-black/60"
                    } mb-2`}
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className={`w-full px-4 py-3 ${
                      theme === "dark"
                        ? "bg-white/5 focus:ring-white/20 text-white placeholder-white/40 border-white/10"
                        : "bg-black/5 focus:ring-black/20 text-black placeholder-black/40 border-black/10"
                    } rounded-lg focus:outline-none focus:ring-2 border`}
                  />
                </div>

                <div>
                  <label
                    htmlFor="company"
                    className={`block text-sm font-medium ${
                      theme === "dark" ? "text-white/60" : "text-black/60"
                    } mb-2`}
                  >
                    Company / Institution
                  </label>
                  <input
                    type="text"
                    id="company"
                    className={`w-full px-4 py-3 ${
                      theme === "dark"
                        ? "bg-white/5 focus:ring-white/20 text-white placeholder-white/40 border-white/10"
                        : "bg-black/5 focus:ring-black/20 text-black placeholder-black/40 border-black/10"
                    } rounded-lg focus:outline-none focus:ring-2 border`}
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className={`block text-sm font-medium ${
                      theme === "dark" ? "text-white/60" : "text-black/60"
                    } mb-2`}
                  >
                    Subject
                  </label>
                  <select
                    id="subject"
                    className={`w-full px-4 py-3 ${
                      theme === "dark"
                        ? "bg-white/5 focus:ring-white/20 text-white border-white/10"
                        : "bg-black/5 focus:ring-black/20 text-black border-black/10"
                    } rounded-lg focus:outline-none focus:ring-2 border`}
                  >
                    <option
                      value=""
                      className={theme === "dark" ? "bg-black" : "bg-white"}
                    >
                      Select a subject
                    </option>
                    <option
                      value="sales"
                      className={theme === "dark" ? "bg-black" : "bg-white"}
                    >
                      Sales Inquiry
                    </option>
                    <option
                      value="support"
                      className={theme === "dark" ? "bg-black" : "bg-white"}
                    >
                      Technical Support
                    </option>
                    <option
                      value="demo"
                      className={theme === "dark" ? "bg-black" : "bg-white"}
                    >
                      Request a Demo
                    </option>
                    <option
                      value="partnership"
                      className={theme === "dark" ? "bg-black" : "bg-white"}
                    >
                      Partnership Opportunity
                    </option>
                    <option
                      value="other"
                      className={theme === "dark" ? "bg-black" : "bg-white"}
                    >
                      Other
                    </option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className={`block text-sm font-medium ${
                      theme === "dark" ? "text-white/60" : "text-black/60"
                    } mb-2`}
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className={`w-full px-4 py-3 ${
                      theme === "dark"
                        ? "bg-white/5 focus:ring-white/20 text-white placeholder-white/40 border-white/10"
                        : "bg-black/5 focus:ring-black/20 text-black placeholder-black/40 border-black/10"
                    } rounded-lg focus:outline-none focus:ring-2 border`}
                  ></textarea>
                </div>

                <div className="flex items-center">
                  <input
                    id="privacy"
                    type="checkbox"
                    className={`h-4 w-4 ${
                      theme === "dark"
                        ? "bg-white/5 border-white/10 text-white focus:ring-white/20"
                        : "bg-black/5 border-black/10 text-black focus:ring-black/20"
                    } rounded focus:ring-2`}
                  />
                  <label
                    htmlFor="privacy"
                    className={`ml-2 block text-sm ${
                      theme === "dark" ? "text-white/60" : "text-black/60"
                    }`}
                  >
                    I agree to the{" "}
                    <Link to="/privacy" className="underline">
                      privacy policy
                    </Link>
                  </label>
                </div>

                <button
                  type="submit"
                  className={`w-full flex items-center justify-center ${
                    theme === "dark"
                      ? "bg-white text-black hover:bg-gray-100"
                      : "bg-black text-white hover:bg-gray-900"
                  } px-8 py-4 rounded-lg transition-all duration-300 font-medium text-sm tracking-wide group`}
                >
                  Send Message
                  <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2
                  className={`text-3xl font-semibold ${
                    theme === "dark" ? "text-white" : "text-black"
                  } mb-4`}
                >
                  Contact departments
                </h2>
                <p
                  className={`${
                    theme === "dark" ? "text-white/80" : "text-black/80"
                  }`}
                >
                  Reach out directly to the department that can best assist you.
                </p>
              </div>

              <div className="space-y-6">
                {departments.map((department, index) => (
                  <div
                    key={index}
                    className={`p-6 rounded-2xl ${
                      theme === "dark"
                        ? "bg-white/5 border-white/5"
                        : "bg-black/5 border-black/5"
                    } backdrop-blur-xl border`}
                  >
                    <h3
                      className={`text-xl font-semibold ${
                        theme === "dark" ? "text-white" : "text-black"
                      } mb-2`}
                    >
                      {department.name}
                    </h3>
                    <p
                      className={`${
                        theme === "dark" ? "text-white/70" : "text-black/70"
                      } mb-4`}
                    >
                      {department.description}
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <Mail
                          className={`h-4 w-4 ${
                            theme === "dark" ? "text-white/60" : "text-black/60"
                          } mr-3`}
                        />
                        <a
                          href={`mailto:${department.email}`}
                          className={`${
                            theme === "dark"
                              ? "text-white/80 hover:text-white"
                              : "text-black/80 hover:text-black"
                          } transition-colors`}
                        >
                          {department.email}
                        </a>
                      </div>
                      <div className="flex items-center">
                        <Phone
                          className={`h-4 w-4 ${
                            theme === "dark" ? "text-white/60" : "text-black/60"
                          } mr-3`}
                        />
                        <a
                          href={`tel:${department.phone.replace(/\D/g, "")}`}
                          className={`${
                            theme === "dark"
                              ? "text-white/80 hover:text-white"
                              : "text-black/80 hover:text-black"
                          } transition-colors`}
                        >
                          {department.phone}
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div>
                <h2
                  className={`text-3xl font-semibold ${
                    theme === "dark" ? "text-white" : "text-black"
                  } mb-4`}
                >
                  Visit our offices
                </h2>
                <div className="space-y-6 mt-6">
                  {offices.map((office, index) => (
                    <div key={index} className="flex space-x-4">
                      <MapPin
                        className={`h-6 w-6 ${
                          theme === "dark" ? "text-white/60" : "text-black/60"
                        } flex-shrink-0`}
                      />
                      <div>
                        <h3
                          className={`text-lg font-medium ${
                            theme === "dark" ? "text-white" : "text-black"
                          } mb-1`}
                        >
                          {office.city}
                        </h3>
                        <p
                          className={`${
                            theme === "dark" ? "text-white/70" : "text-black/70"
                          } mb-2`}
                        >
                          {office.address}
                        </p>
                        <div className="flex items-center mb-1">
                          <Clock
                            className={`h-4 w-4 ${
                              theme === "dark"
                                ? "text-white/60"
                                : "text-black/60"
                            } mr-2`}
                          />
                          <span
                            className={`text-sm ${
                              theme === "dark"
                                ? "text-white/60"
                                : "text-black/60"
                            }`}
                          >
                            {office.hours}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      {/* <section
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
            className="relative rounded-[2rem] overflow-hidden h-[400px]"
          >
            <div className="absolute -inset-x-20 -inset-y-20 bg-gradient-to-r from-purple-500/30 via-blue-500/30 to-cyan-500/30 blur-3xl opacity-20 rounded-[3rem]"></div>

            <div
              className={`relative ${
                theme === "dark"
                  ? "bg-white/5 border-white/10"
                  : "bg-black/5 border-black/10"
              } backdrop-blur-xl rounded-[2rem] border h-full`}
            >
              <img
                src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5ce?auto=format&fit=crop&q=80"
                alt="Map"
                className="w-full h-full object-cover rounded-[2rem]"
              />
            </div>
          </motion.div>
        </div>
      </section> */}

      {/* FAQ Section */}
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
                Have more questions?
              </h2>
              <p
                className={`${
                  theme === "dark" ? "text-white/80" : "text-black/80"
                } max-w-2xl mx-auto mb-8`}
              >
                Check out our frequently asked questions or reach out to our
                support team for assistance.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/pricing"
                  className={`${
                    theme === "dark"
                      ? "bg-white text-black hover:bg-gray-100"
                      : "bg-black text-white hover:bg-gray-900"
                  } px-8 py-4 rounded-full transition-all duration-300 font-medium text-sm tracking-wide flex items-center justify-center group`}
                >
                  View FAQs
                  <ArrowRight className="inline ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a
                  href="mailto:support@tredumo.com"
                  className={`${
                    theme === "dark"
                      ? "bg-white/10 text-white hover:bg-white/20"
                      : "bg-black/10 text-black hover:bg-black/20"
                  } backdrop-blur-xl px-8 py-4 rounded-full transition-all duration-300 font-medium text-sm tracking-wide flex items-center justify-center`}
                >
                  Email Support
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
