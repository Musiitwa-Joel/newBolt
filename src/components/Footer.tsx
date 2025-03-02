import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Twitter, Linkedin, Github, Instagram } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

import { motion } from "framer-motion";

interface FooterProps {
  theme: string;
}

const Footer: React.FC<FooterProps> = ({ theme }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className={`${
        theme === "dark" ? "bg-black text-white" : "bg-white text-black"
      } relative`}
    >
      <div className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12"
        >
          <div>
            <Link to="/" className="text-2xl font-semibold">
              Tredumo
            </Link>
            <p
              className={`mt-4 ${
                theme === "dark" ? "text-white/60" : "text-black/60"
              }`}
            >
              Transforming education management for the modern era.
            </p>
            <div className="flex space-x-4 mt-6">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 rounded-full ${
                  theme === "dark"
                    ? "bg-white/10 hover:bg-white/20"
                    : "bg-black/10 hover:bg-black/20"
                } transition-colors`}
              >
                <FaXTwitter className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 rounded-full ${
                  theme === "dark"
                    ? "bg-white/10 hover:bg-white/20"
                    : "bg-black/10 hover:bg-black/20"
                } transition-colors`}
              >
                <FaLinkedin className="h-5 w-5" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 rounded-full ${
                  theme === "dark"
                    ? "bg-white/10 hover:bg-white/20"
                    : "bg-black/10 hover:bg-black/20"
                } transition-colors`}
              >
                <FaGithub className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 rounded-full ${
                  theme === "dark"
                    ? "bg-white/10 hover:bg-white/20"
                    : "bg-black/10 hover:bg-black/20"
                } transition-colors`}
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4
              className={`text-sm font-medium tracking-widest ${
                theme === "dark" ? "text-white/60" : "text-black/60"
              } uppercase mb-6`}
            >
              Product
            </h4>
            <ul className="space-y-4">
              <li>
                <Link
                  to="/features"
                  className={`${
                    theme === "dark"
                      ? "text-white/80 hover:text-white"
                      : "text-black/80 hover:text-black"
                  } transition-colors`}
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  to="/modules"
                  className={`${
                    theme === "dark"
                      ? "text-white/80 hover:text-white"
                      : "text-black/80 hover:text-black"
                  } transition-colors`}
                >
                  Modules
                </Link>
              </li>
              <li>
                <Link
                  to="/case-studies"
                  className={`${
                    theme === "dark"
                      ? "text-white/80 hover:text-white"
                      : "text-black/80 hover:text-black"
                  } transition-colors`}
                >
                  Case Studies
                </Link>
              </li>
              <li>
                <Link
                  to="/pricing"
                  className={`${
                    theme === "dark"
                      ? "text-white/80 hover:text-white"
                      : "text-black/80 hover:text-black"
                  } transition-colors`}
                >
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4
              className={`text-sm font-medium tracking-widest ${
                theme === "dark" ? "text-white/60" : "text-black/60"
              } uppercase mb-6`}
            >
              Company
            </h4>
            <ul className="space-y-4">
              <li>
                <Link
                  to="/about"
                  className={`${
                    theme === "dark"
                      ? "text-white/80 hover:text-white"
                      : "text-black/80 hover:text-black"
                  } transition-colors`}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className={`${
                    theme === "dark"
                      ? "text-white/80 hover:text-white"
                      : "text-black/80 hover:text-black"
                  } transition-colors`}
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/careers"
                  className={`${
                    theme === "dark"
                      ? "text-white/80 hover:text-white"
                      : "text-black/80 hover:text-black"
                  } transition-colors`}
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className={`${
                    theme === "dark"
                      ? "text-white/80 hover:text-white"
                      : "text-black/80 hover:text-black"
                  } transition-colors`}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4
              className={`text-sm font-medium tracking-widest ${
                theme === "dark" ? "text-white/60" : "text-black/60"
              } uppercase mb-6`}
            >
              Updates
            </h4>
            <p
              className={`${
                theme === "dark" ? "text-white/60" : "text-black/60"
              } mb-6`}
            >
              Sign up for product updates and news.
            </p>
            <div className="space-y-4">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Email address"
                  className={`w-full px-4 py-3 ${
                    theme === "dark"
                      ? "bg-white/5 focus:ring-white/20 text-white placeholder-white/40 border-white/10"
                      : "bg-black/5 focus:ring-black/20 text-black placeholder-black/40 border-black/10"
                  } rounded-lg focus:outline-none focus:ring-2 border`}
                />
              </div>
              <button
                className={`w-full flex items-center justify-center ${
                  theme === "dark"
                    ? "bg-white text-black hover:bg-gray-100"
                    : "bg-black text-white hover:bg-gray-900"
                } px-8 py-3 rounded-lg transition-all duration-300 font-medium text-sm tracking-wide group`}
              >
                Subscribe
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </motion.div>

        <div
          className={`border-t ${
            theme === "dark" ? "border-white/10" : "border-black/10"
          } pt-8`}
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p
              className={`${
                theme === "dark" ? "text-white/60" : "text-black/60"
              } text-sm`}
            >
              &copy; {currentYear} Tredumo. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link
                to="/privacy"
                className={`${
                  theme === "dark"
                    ? "text-white/60 hover:text-white"
                    : "text-black/60 hover:text-black"
                } transition-colors`}
              >
                Privacy
              </Link>
              <Link
                to="/terms"
                className={`${
                  theme === "dark"
                    ? "text-white/60 hover:text-white"
                    : "text-black/60 hover:text-black"
                } transition-colors`}
              >
                Terms
              </Link>
              <a
                href="#cookies"
                className={`${
                  theme === "dark"
                    ? "text-white/60 hover:text-white"
                    : "text-black/60 hover:text-black"
                } transition-colors`}
              >
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
