import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';

interface NavbarProps {
  theme: string;
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ theme, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Features', path: '/features' },
    { name: 'Modules', path: '/modules' },
    { name: 'Case Studies', path: '/case-studies' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'About', path: '/about' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <motion.nav 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? theme === 'dark' 
            ? 'bg-black/80 backdrop-blur-xl' 
            : 'bg-white/80 backdrop-blur-xl shadow-sm' 
          : theme === 'dark'
            ? 'bg-transparent'
            : 'bg-white/80 backdrop-blur-xl shadow-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className={`text-2xl font-semibold ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                Tredumo
              </span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link 
                key={link.path}
                to={link.path} 
                className={`nav-link ${
                  location.pathname === link.path 
                    ? theme === 'dark' 
                      ? 'text-white font-medium' 
                      : 'text-black font-medium' 
                    : theme === 'dark'
                      ? 'text-white/80 hover:text-white'
                      : 'text-black/80 hover:text-black'
                }`}
              >
                {link.name}
              </Link>
            ))}
            
            <button 
              onClick={toggleTheme}
              className={`p-2 rounded-full ${
                theme === 'dark' 
                  ? 'text-white/80 hover:text-white' 
                  : 'text-black/80 hover:text-black'
              } transition-colors`}
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            
            <Link to="/contact" className={`${
              theme === 'dark' 
                ? 'bg-white text-black hover:bg-gray-100' 
                : 'bg-black text-white hover:bg-gray-900'
            } px-8 py-3 rounded-full transition-all duration-300 font-medium text-sm tracking-wide`}>
              Get Started
            </Link>
          </div>

          <div className="md:hidden flex items-center space-x-4">
            <button 
              onClick={toggleTheme}
              className={`p-2 rounded-full ${
                theme === 'dark' 
                  ? 'text-white/80 hover:text-white' 
                  : 'text-black/80 hover:text-black'
              } transition-colors`}
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-lg ${
                theme === 'dark' 
                  ? 'text-white/80 hover:text-white' 
                  : 'text-black/80 hover:text-black'
              } transition-colors`}
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className={`md:hidden absolute left-0 right-0 ${
              theme === 'dark' 
                ? 'bg-black/90 backdrop-blur-xl border-t border-white/10' 
                : 'bg-white/90 backdrop-blur-xl border-t border-black/10 shadow-md'
            } p-4`}
          >
            <div className="space-y-3">
              {navLinks.map((link) => (
                <Link 
                  key={link.path}
                  to={link.path} 
                  className={`block px-3 py-2 ${
                    theme === 'dark' 
                      ? 'text-white/80 hover:text-white' 
                      : 'text-black/80 hover:text-black'
                  } transition-colors ${
                    location.pathname === link.path 
                      ? theme === 'dark' 
                        ? 'text-white font-medium' 
                        : 'text-black font-medium' 
                      : ''
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link to="/contact" className={`block w-full ${
                theme === 'dark' 
                  ? 'bg-white text-black hover:bg-gray-100' 
                  : 'bg-black text-white hover:bg-gray-900'
              } px-8 py-3 rounded-full mt-4 text-center transition-all duration-300 font-medium text-sm tracking-wide`}>
                Get Started
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;