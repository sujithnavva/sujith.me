import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Shield, Github, Linkedin, Mail, Phone,FileText } from 'lucide-react';
import resumeFile from '../assets/Resume_Sujith.pdf';
export default function HeroSection({ isDarkMode }) {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className={`min-h-screen ${isDarkMode ? 'bg-black text-white' : 'bg-white text-gray-900'} flex flex-col justify-center items-center relative overflow-hidden px-6 transition-colors duration-500`}>
      {/* Subtle gradient background */}
      <div className={`absolute inset-0 ${isDarkMode ? 'bg-gradient-to-b from-black via-gray-900/50 to-black' : 'bg-gradient-to-b from-gray-50 via-white to-gray-50'} transition-colors duration-500`} />
      
      {/* Animated grid pattern */}
      <div className={`absolute inset-0 ${isDarkMode ? 'opacity-[0.03]' : 'opacity-[0.02]'}`}>
        <div className="absolute inset-0" style={{
          backgroundImage: isDarkMode 
            ? 'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)'
            : 'linear-gradient(rgba(0,0,0,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,.1) 1px, transparent 1px)',
          backgroundSize: '100px 100px'
        }} />
      </div>

      <div className="relative z-10 text-center max-w-5xl mx-auto">
        {/* Shield icon with glow */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8"
        >
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full" />
            <Shield className="w-16 h-16 md:w-20 md:h-20 text-blue-500 relative" strokeWidth={1.5} />
          </div>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 relative"
          style={{ fontFamily: "'SF Mono', 'Monaco', 'Inconsolata', 'Fira Code', 'Courier New', monospace" }}
        >
          <motion.span 
            className={`${isDarkMode ? 'bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500' : 'bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-700'} bg-clip-text text-transparent`}
            animate={{
              backgroundPosition: ['0%', '100%', '0%'],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              backgroundSize: '200% auto',
            }}
          >
            Sujith Kumar Navva
          </motion.span>
        </motion.h1>

        {/* Title */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className={`text-xl md:text-2xl lg:text-3xl ${isDarkMode ? 'text-gray-400' : 'text-gray-600'} font-light mb-4`}
        >
          Cybersecurity Engineer
        </motion.p>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className={`text-lg md:text-xl ${isDarkMode ? 'text-gray-500' : 'text-gray-500'} font-light max-w-2xl mx-auto mb-8`}
        >
          Defending Digital Infrastructure with Precision & Innovation
        </motion.p>

        {/* Education badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1, ease: [0.16, 1, 0.3, 1] }}
          className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${isDarkMode ? 'bg-white/5 border-white/10' : 'bg-black/5 border-black/10'} border backdrop-blur-sm mb-12`}
        >
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Cybersecurity Engineer @ NETS Group Singapore
          </span>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center justify-center gap-6"
        >
          <a
            href="mailto:navv0001@e.ntu.edu.sg"
            className={`p-3 rounded-full ${isDarkMode ? 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20' : 'bg-black/5 border-black/10 hover:bg-black/10 hover:border-black/20'} border transition-all duration-300`}
            aria-label="Email"
          >
            <Mail className={`w-5 h-5 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`} />
          </a>
          <a
            href="https://linkedin.com/in/SujithNavva"
            target="_blank"
            rel="noopener noreferrer"
            className={`p-3 rounded-full ${isDarkMode ? 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20' : 'bg-black/5 border-black/10 hover:bg-black/10 hover:border-black/20'} border transition-all duration-300`}
            aria-label="LinkedIn"
          >
            <Linkedin className={`w-5 h-5 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`} />
          </a>
          <a
            href="https://github.com/SujithNavva"
            target="_blank"
            rel="noopener noreferrer"
            className={`p-3 rounded-full ${isDarkMode ? 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20' : 'bg-black/5 border-black/10 hover:bg-black/10 hover:border-black/20'} border transition-all duration-300`}
            aria-label="GitHub"
          >
            <Github className={`w-5 h-5 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`} />
          </a>
          <a
            href="tel:+6598854920"
            className={`p-3 rounded-full ${isDarkMode ? 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20' : 'bg-black/5 border-black/10 hover:bg-black/10 hover:border-black/20'} border transition-all duration-300`}
            aria-label="Phone"
          >
            <Phone className={`w-5 h-5 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`} />
          </a>
          <a
            href={resumeFile} // Replace with the actual path to your CV in the public folder
            target="_blank"
            rel="noopener noreferrer"
            className={`p-3 rounded-full ${isDarkMode ? 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20' : 'bg-black/5 border-black/10 hover:bg-black/10 hover:border-black/20'} border transition-all duration-300`}
            aria-label="CV"
        >
          <FileText className={`w-5 h-5 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`} />
        </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToAbout}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className={`absolute bottom-12 left-1/2 -translate-x-1/2 ${isDarkMode ? 'text-gray-500 hover:text-white' : 'text-gray-400 hover:text-gray-900'} transition-colors cursor-pointer`}
        aria-label="Scroll down"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-8 h-8" />
        </motion.div>
      </motion.button>
    </section>
  );
}