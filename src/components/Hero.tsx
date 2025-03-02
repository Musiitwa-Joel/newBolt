import React from "react";
import { ArrowRight, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

interface HeroProps {
  theme: string;
}

const Hero: React.FC<HeroProps> = ({ theme }) => {
  const benefits = [
    "AI-powered learning analytics",
    "Seamless integration with existing systems",
    "Mobile-first design for learning on the go",
    "Enterprise-grade security and compliance",
  ];

  return (
    <div
      className={`relative min-h-screen flex items-center ${
        theme === "dark" ? "bg-black" : "bg-white"
      }`}
    >
      <div className="absolute inset-0">
        <div
          className={`absolute inset-0 ${
            theme === "dark"
              ? "bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-20"
              : "bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-5"
          }`}
        ></div>
        <div
          className={`absolute inset-0 ${
            theme === "dark"
              ? "bg-gradient-to-b from-black via-black/95 to-black"
              : "bg-gradient-to-b from-white via-white/95 to-white"
          }`}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative pt-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div>
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className={`inline-block px-4 py-1 rounded-full text-sm font-medium ${
                  theme === "dark"
                    ? "bg-white/10 text-white"
                    : "bg-black/10 text-black"
                } mb-6`}
              >
                Trusted by 500+ educational institutions
              </motion.span>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className={`text-5xl sm:text-6xl md:text-7xl font-bold ${
                  theme === "dark" ? "text-white" : "text-black"
                } leading-tight tracking-tight`}
              >
                Education.
                <br />
                <span
                  className={`${
                    theme === "dark"
                      ? "text-tredumo-blue-400"
                      : "text-tredumo-blue-600"
                  }`}
                >
                  Reimagined.
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className={`text-xl md:text-2xl ${
                  theme === "dark" ? "text-white/80" : "text-black/80"
                } max-w-xl mt-6 font-light leading-relaxed`}
              >
                Transform your institution with our revolutionary education
                management platform that puts students at the center of
                learning.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <ul className="space-y-3 mb-8">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle
                      className={`h-5 w-5 ${
                        theme === "dark"
                          ? "text-tredumo-blue-400"
                          : "text-tredumo-blue-600"
                      } mr-3 flex-shrink-0 mt-0.5`}
                    />
                    <span
                      className={`${
                        theme === "dark" ? "text-white/90" : "text-black/90"
                      }`}
                    >
                      {benefit}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button
                className={`${
                  theme === "dark"
                    ? "bg-white text-black hover:bg-gray-100"
                    : "bg-black text-white hover:bg-gray-900"
                } px-8 py-4 rounded-full transition-all duration-300 font-medium text-sm tracking-wide flex items-center justify-center group`}
              >
                Get Started
                <ArrowRight className="inline ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                className={`${
                  theme === "dark"
                    ? "bg-white/10 text-white hover:bg-white/20"
                    : "bg-black/10 text-black hover:bg-black/20"
                } backdrop-blur-xl px-8 py-4 rounded-full transition-all duration-300 font-medium text-sm tracking-wide`}
              >
                Request Demo
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className={`flex items-center space-x-4 mt-8 ${
                theme === "dark" ? "text-white/60" : "text-black/60"
              }`}
            >
              <span>Trusted by:</span>
              <div className="flex space-x-6">
                <span className="font-semibold">NU</span>
                <span className="font-semibold">KiCol. </span>
                <span className="font-semibold">MIoC</span>
                <span className="font-semibold">Charmant</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative"
          >
            <div className="absolute -inset-x-20 -inset-y-20 bg-gradient-to-r from-purple-500/30 via-blue-500/30 to-cyan-500/30 blur-3xl opacity-20 rounded-[3rem]"></div>
            <div
              className={`relative ${
                theme === "dark" ? "bg-white/5" : "bg-black/5"
              } backdrop-blur-xl rounded-[2rem] ${
                theme === "dark"
                  ? "border border-white/10"
                  : "border border-black/10"
              } p-8 overflow-hidden`}
            >
              <img
                src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80"
                alt="Dashboard Preview"
                className="rounded-2xl shadow-2xl w-full"
              />
              <div
                className={`absolute inset-0 bg-gradient-to-t ${
                  theme === "dark" ? "from-black/50" : "from-white/50"
                } via-transparent to-transparent`}
              ></div>
            </div>

            {/* Floating elements for visual interest */}
            <div
              className={`absolute -top-6 -right-6 p-4 rounded-xl ${
                theme === "dark"
                  ? "bg-white/10 border border-white/10"
                  : "bg-black/5 border border-black/10"
              } backdrop-blur-xl animate-float`}
            >
              <div className="flex items-center space-x-2">
                <div
                  className={`h-3 w-3 rounded-full ${
                    theme === "dark" ? "bg-green-400" : "bg-green-500"
                  }`}
                ></div>
                <span
                  className={`text-sm font-medium ${
                    theme === "dark" ? "text-white" : "text-black"
                  }`}
                >
                  98% Satisfaction
                </span>
              </div>
            </div>

            <div
              className={`absolute -bottom-4 -left-4 p-4 rounded-xl ${
                theme === "dark"
                  ? "bg-white/10 border border-white/10"
                  : "bg-black/5 border border-black/10"
              } backdrop-blur-xl animate-float`}
              style={{ animationDelay: "2s" }}
            >
              <div className="flex items-center space-x-2">
                <div
                  className={`h-3 w-3 rounded-full ${
                    theme === "dark" ? "bg-blue-400" : "bg-blue-500"
                  }`}
                ></div>
                <span
                  className={`text-sm font-medium ${
                    theme === "dark" ? "text-white" : "text-black"
                  }`}
                >
                  Real-time Analytics
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
