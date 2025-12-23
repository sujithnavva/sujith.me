import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';

export default function ThemeToggle({ isDarkMode, toggleTheme }) {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="relative">
      <motion.button
        onClick={toggleTheme}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className={`p-2.5 rounded-full ${
          isDarkMode 
            ? 'bg-white/10 hover:bg-white/20 border border-white/20' 
            : 'bg-gray-100 hover:bg-gray-200 border border-gray-200'
        } transition-all duration-300`}
        whileTap={{ scale: 0.95 }}
        aria-label="Toggle theme"
      >
        <motion.div
          initial={false}
          animate={{ rotate: isDarkMode ? 0 : 180 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          {isDarkMode ? (
            <Sun className="w-5 h-5 text-yellow-400" />
          ) : (
            <Moon className="w-5 h-5 text-gray-700" />
          )}
        </motion.div>
      </motion.button>

      {/* Tooltip */}
      {showTooltip && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className={`absolute top-full mt-2 right-0 px-3 py-2 rounded-lg text-sm whitespace-nowrap ${
            isDarkMode 
              ? 'bg-white/10 backdrop-blur-xl border border-white/20 text-white' 
              : 'bg-gray-900 text-white'
          } pointer-events-none z-50`}
        >
          {isDarkMode ? 'Light Mode' : 'Dark Mode'}
          <div className={`absolute -top-1 right-3 w-2 h-2 rotate-45 ${
            isDarkMode ? 'bg-white/10 border-t border-l border-white/20' : 'bg-gray-900'
          }`} />
        </motion.div>
      )}
    </div>
  );
}