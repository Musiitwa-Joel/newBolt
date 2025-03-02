import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Users,
  Award,
  Globe,
  BookOpen,
  CheckCircle,
} from "lucide-react";
import { motion } from "framer-motion";
import LubegaPic from "../../public/assets/img/lubega.jpeg";
import HakimPic from "../../public/assets/img/hakim.jpeg";

interface AboutPageProps {
  theme: string;
}

const AboutPage: React.FC<AboutPageProps> = ({ theme }) => {
  const team = [
    {
      name: "Prof. Jude T. Lubega",
      position: "CEO & Co-Founder Tredumo",
      bio: "Vice Chancellor Nkumba University, Treasurer Vice Chancellors forum.",
      image:
        "https://unffeict4farmers.org/wp-content/uploads/2020/07/Prof.-Jude-Lubega-ceo-8tech-consults-1.jpg",
    },
    {
      name: "Hakim Mulinde",
      position: "CTO & Co-Founder",
      bio: "MIT graduate with extensive experience building scalable software solutions for educational institutions.",
      image: HakimPic,
    },
    {
      name: "Lubega Tashah Desire",
      position: "Software Developer",
      bio: "Software developer with a passion for creating innovative solutions that empower educational institutions.",
      image: LubegaPic,
    },
    {
      name: "Akampereza Darlington",
      position: "Software Developer",
      bio: "Full-stack developer with experience in building cloud-based solutions for educational institutions.",
      image:
        "https://student1.zeevarsity.com:8001/get_photo.yaws?ic=nkumba&stdno=2000101041",
    },
    {
      name: "Musiitwa Joel",
      position: "Software Developer",
      bio: "Dedicated to ensuring our clients achieve their goals through effective implementation and support.",
      image:
        "https://student1.zeevarsity.com:8001/get_photo.yaws?ic=nkumba&stdno=2000100121",
    },
  ];

  const values = [
    {
      icon: (
        <Users
          className={`h-8 w-8 ${
            theme === "dark" ? "text-white" : "text-black"
          }`}
        />
      ),
      title: "Student-Centered",
      description:
        "We believe that education technology should enhance the learning experience and put students at the center of everything we do.",
    },
    {
      icon: (
        <Award
          className={`h-8 w-8 ${
            theme === "dark" ? "text-white" : "text-black"
          }`}
        />
      ),
      title: "Excellence",
      description:
        "We strive for excellence in every aspect of our product and service, setting the highest standards for ourselves and our solutions.",
    },
    {
      icon: (
        <Globe
          className={`h-8 w-8 ${
            theme === "dark" ? "text-white" : "text-black"
          }`}
        />
      ),
      title: "Accessibility",
      description:
        "We believe that quality education management tools should be accessible to institutions of all sizes and backgrounds.",
    },
    {
      icon: (
        <BookOpen
          className={`h-8 w-8 ${
            theme === "dark" ? "text-white" : "text-black"
          }`}
        />
      ),
      title: "Innovation",
      description:
        "We continuously innovate to stay ahead of the evolving needs of educational institutions and embrace new technologies.",
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
              Our mission is to transform
              <br />
              education management
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className={`text-xl ${
                theme === "dark" ? "text-white/80" : "text-black/80"
              } max-w-2xl mx-auto font-light leading-relaxed`}
            >
              We're a team of educators, technologists, and innovators dedicated
              to creating tools that empower educational institutions worldwide.
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Our Story Section */}
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
                    Our Story
                  </span>
                  <h3
                    className={`text-3xl md:text-4xl font-semibold ${
                      theme === "dark" ? "text-white" : "text-black"
                    } mt-4 mb-6 tracking-tight`}
                  >
                    From classroom to cloud
                  </h3>

                  <div
                    className={`space-y-6 ${
                      theme === "dark" ? "text-white/80" : "text-black/80"
                    }`}
                  >
                    <p>
                      Tredumo was founded in 2022 by Prof. Jude T. Lubega who we
                      met while working on educational technology initiatives at
                      Nkumba University. They shared a vision of creating a
                      comprehensive platform that would address the complex
                      needs of modern educational institutions.
                    </p>
                    <p>
                      Having experienced firsthand the limitations of existing
                      education management systems, they set out to build a
                      solution that would be intuitive, powerful, and adaptable
                      to the unique requirements of different educational
                      environments.
                    </p>
                    <p>
                      Today, Tredumo serves over 31 educational institutions
                      worldwide, from small private schools to large
                      universities, helping them streamline their operations and
                      focusing on what matters most: providing quality education
                      to their students.
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

      {/* Our Values */}
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
              Our Values
            </span>
            <h2
              className={`text-3xl md:text-4xl font-semibold ${
                theme === "dark" ? "text-white" : "text-black"
              } mt-4 tracking-tight`}
            >
              What drives us every day
            </h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`feature-card group ${
                  theme === "dark"
                    ? "bg-white/5 hover:bg-white/10 border-white/5 hover:border-white/10"
                    : "bg-black/5 hover:bg-black/10 border-black/5 hover:border-black/10"
                }`}
              >
                <div className="mb-6">{value.icon}</div>
                <h3
                  className={`text-2xl font-semibold ${
                    theme === "dark" ? "text-white" : "text-black"
                  } mb-4`}
                >
                  {value.title}
                </h3>
                <p
                  className={`${
                    theme === "dark" ? "text-white/70" : "text-black/70"
                  } text-lg leading-relaxed`}
                >
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
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
              Our Team
            </span>
            <h2
              className={`text-3xl md:text-4xl font-semibold ${
                theme === "dark" ? "text-white" : "text-black"
              } mt-4 tracking-tight`}
            >
              Meet the people behind Tredumo
            </h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {team.map((member, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`team-card ${
                  theme === "dark"
                    ? "bg-white/5 hover:bg-white/10 border-white/5 hover:border-white/10"
                    : "bg-black/5 hover:bg-black/10 border-black/5 hover:border-black/10"
                }`}
              >
                <div className="h-64 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3
                    className={`text-xl font-semibold ${
                      theme === "dark" ? "text-white" : "text-black"
                    } mb-1`}
                  >
                    {member.name}
                  </h3>
                  <p
                    className={`text-sm ${
                      theme === "dark" ? "text-white/60" : "text-black/60"
                    } mb-4`}
                  >
                    {member.position}
                  </p>
                  <p
                    className={`${
                      theme === "dark" ? "text-white/80" : "text-black/80"
                    }`}
                  >
                    {member.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
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
            } backdrop-blur-xl border p-12 relative overflow-hidden`}
          >
            <div className="absolute -inset-x-20 -inset-y-20 bg-gradient-to-r from-purple-500/30 via-blue-500/30 to-cyan-500/30 blur-3xl opacity-20 rounded-[3rem]"></div>

            <div className="relative">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                {[
                  { value: "31+", label: "Institutions" },
                  { value: "3.5M+", label: "Students" },
                  { value: "35+", label: "Countries" },
                  { value: "98%", label: "Satisfaction" },
                ].map((stat, index) => (
                  <div key={index}>
                    <p
                      className={`text-4xl font-bold ${
                        theme === "dark" ? "text-white" : "text-black"
                      } mb-2`}
                    >
                      {stat.value}
                    </p>
                    <p
                      className={`${
                        theme === "dark" ? "text-white/60" : "text-black/60"
                      } text-sm uppercase tracking-wider`}
                    >
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Join Us Section */}
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
            className="text-center mb-8"
          >
            <span
              className={`text-sm font-medium tracking-widest ${
                theme === "dark" ? "text-white/60" : "text-black/60"
              } uppercase`}
            >
              Join Our Team
            </span>
            <h2
              className={`text-3xl md:text-4xl font-semibold ${
                theme === "dark" ? "text-white" : "text-black"
              } mt-4 tracking-tight`}
            >
              We're always looking for talent
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className={`text-xl ${
              theme === "dark" ? "text-white/80" : "text-black/80"
            } max-w-2xl mx-auto text-center mb-8`}
          >
            If you're passionate about education and technology, we'd love to
            hear from you. Check out our open positions or send us your resume.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/careers"
              className={`${
                theme === "dark"
                  ? "bg-white text-black hover:bg-gray-100"
                  : "bg-black text-white hover:bg-gray-900"
              } px-8 py-4 rounded-full transition-all duration-300 font-medium text-sm tracking-wide flex items-center justify-center group`}
            >
              View Open Positions
              <ArrowRight className="inline ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/contact"
              className={`${
                theme === "dark"
                  ? "bg-white/10 text-white hover:bg-white/20"
                  : "bg-black/10 text-black hover:bg-black/20"
              } backdrop-blur-xl px-8 py-4 rounded-full transition-all duration-300 font-medium text-sm tracking-wide`}
            >
              Contact Us
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
