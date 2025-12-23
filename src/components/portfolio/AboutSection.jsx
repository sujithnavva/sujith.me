import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MapPin, Building2, GraduationCap } from 'lucide-react';

export default function AboutSection({ isDarkMode }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { label: "Years Experience", value: "3+" },
    { label: "Projects Delivered", value: "15+" },
    { label: "Assets Secured", value: "100+" },
    { label: "Downtime Reduced", value: "15%" },
  ];

  return (
    <section id="about" className={`py-32 ${isDarkMode ? 'bg-black' : 'bg-white'} transition-colors duration-500`} ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          <p className={`text-sm font-medium ${isDarkMode ? 'text-blue-500' : 'text-blue-600'} tracking-widest uppercase mb-4`}>
            About Me
          </p>
          <h2 className={`text-4xl md:text-5xl lg:text-6xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'} tracking-tight`}>
            Securing the Digital Frontier
          </h2>
        </motion.div>

        {/* Main content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className={`text-xl md:text-2xl ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} leading-relaxed mb-8 font-light`}>
              Cybersecurity Engineer with expertise in enterprise security engineering, 
              threat detection, and privileged access management across on-premises 
              and cloud environments.
            </p>
            <p className={`text-lg ${isDarkMode ? 'text-gray-400' : 'text-gray-500'} leading-relaxed mb-10`}>
              Proven success in deploying Trend Micro XDR, BeyondTrust PAM, and WAF/IPS 
              technologies. Experienced in SIEM operations, cloud compliance, and automation 
              using Python and Java. Dedicated to building secure, compliant, and resilient 
              infrastructures aligned with MAS TRM and ISO 27001 standards.
            </p>

            {/* Quick info */}
            <div className="space-y-4">
              <div className={`flex items-center gap-3 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                <MapPin className={`w-5 h-5 ${isDarkMode ? 'text-blue-500' : 'text-blue-600'}`} />
                <span>Singapore</span>
              </div>
              <div className={`flex items-center gap-3 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                <Building2 className={`w-5 h-5 ${isDarkMode ? 'text-blue-500' : 'text-blue-600'}`} />
                <span>Network for Electronic Transfers (Singapore)</span>
              </div>
              <div className={`flex items-center gap-3 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                <GraduationCap className={`w-5 h-5 ${isDarkMode ? 'text-blue-500' : 'text-blue-600'}`} />
                <span>MSc Cybersecurity, NTU Singapore</span>
              </div>
            </div>
          </motion.div>

          {/* Stats grid */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                className={`${isDarkMode ? 'bg-white/5 hover:bg-white/10' : 'bg-gray-50 hover:bg-gray-100'} rounded-3xl p-8 text-center transition-colors duration-300`}
              >
                <p className={`text-4xl md:text-5xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-2`}>
                  {stat.value}
                </p>
                <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'} uppercase tracking-wider`}>
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}