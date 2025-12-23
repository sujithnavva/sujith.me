import React from 'react';
import { Shield, Heart } from 'lucide-react';

export default function Footer({ isDarkMode }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`py-12 ${isDarkMode ? 'bg-black border-white/10' : 'bg-gray-50 border-gray-200'} border-t transition-colors duration-500`}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Shield className="w-6 h-6 text-blue-500" />
            <span className={`${isDarkMode ? 'text-white' : 'text-gray-900'} font-medium`}>Sujith Kumar Navva</span>
          </div>

          {/* Copyright */}
          <p className={`${isDarkMode ? 'text-gray-500' : 'text-gray-600'} text-sm flex items-center gap-1`}>
            © {currentYear} • Built with <Heart className="w-4 h-4 text-red-500" /> for security
          </p>

          {/* Quick links */}
          <div className="flex items-center gap-6">
            <a href="#about" className={`${isDarkMode ? 'text-gray-500 hover:text-white' : 'text-gray-600 hover:text-gray-900'} text-sm transition-colors`}>
              About
            </a>
            <a href="#skills" className={`${isDarkMode ? 'text-gray-500 hover:text-white' : 'text-gray-600 hover:text-gray-900'} text-sm transition-colors`}>
              Skills
            </a>
            <a href="#experience" className={`${isDarkMode ? 'text-gray-500 hover:text-white' : 'text-gray-600 hover:text-gray-900'} text-sm transition-colors`}>
              Experience
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}