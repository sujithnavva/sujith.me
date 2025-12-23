import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navigation from '../../components/portfolio/Navigation';
import HeroSection from '../../components/portfolio/HeroSection';
import AboutSection from '../../components/portfolio/AboutSection';
import SkillsSection from '../../components/portfolio/SkillsSection';
import ExperienceTimeline from '../../components/portfolio/ExperienceTimeline';
import ProjectsSection from '../../components/portfolio/ProjectsSection';
import CertificationsSection from '../../components/portfolio/CertificationsSection';
import ContactSection from '../../components/portfolio/ContactSection';
import Footer from '../../components/portfolio/Footer';
import ScrollProgress from '../../components/portfolio/ScrollProgress';
import BackToTop from '../../components/portfolio/BackToTop';

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? savedTheme === 'dark' : true;
  });

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  return (
    <div className={`${isDarkMode ? 'bg-black' : 'bg-white'} min-h-screen transition-colors duration-500`}>
      <ScrollProgress isDarkMode={isDarkMode} />
      <Navigation isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      
      <main>
        <HeroSection isDarkMode={isDarkMode} />
        
        <motion.div 
          id="about"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <AboutSection isDarkMode={isDarkMode} />
        </motion.div>
        
        <motion.div 
          id="skills"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <SkillsSection isDarkMode={isDarkMode} />
        </motion.div>
        
        <motion.div 
          id="experience"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <ExperienceTimeline isDarkMode={isDarkMode} />
        </motion.div>
        
        <motion.div 
          id="projects"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <ProjectsSection isDarkMode={isDarkMode} />
        </motion.div>
        
        <motion.div 
          id="certifications"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <CertificationsSection isDarkMode={isDarkMode} />
        </motion.div>
        
        <motion.div 
          id="contact"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <ContactSection isDarkMode={isDarkMode} />
        </motion.div>
      </main>
      
      <Footer isDarkMode={isDarkMode} />
      <BackToTop isDarkMode={isDarkMode} />
    </div>
  );
}