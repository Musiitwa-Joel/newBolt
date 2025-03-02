import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';

interface NotFoundPageProps {
  theme: string;
}

const NotFoundPage: React.FC<NotFoundPageProps> = ({ theme }) => {
  return (
    <div className={`${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'} min-h-screen flex items-center justify-center`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className={`text-9xl font-bold ${theme === 'dark' ? 'text-white' : 'text-black'}`}>404</h1>
          <h2 className={`text-3xl md:text-4xl font-semibold ${theme === 'dark' ? 'text-white' : 'text-black'} mt-6 mb-4`}>
            Page not found
          </h2>
          <p className={`text-xl ${theme === 'dark' ? 'text-white/70' : 'text-black/70'} max-w-md mx-auto mb-8`}>
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Link to="/" className={`inline-flex items-center justify-center ${theme === 'dark' ? 'bg-white text-black hover:bg-gray-100' : 'bg-black text-white hover:bg-gray-900'} px-8 py-4 rounded-full transition-all duration-300 font-medium text-sm tracking-wide group`}>
            <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            Back to home
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFoundPage;