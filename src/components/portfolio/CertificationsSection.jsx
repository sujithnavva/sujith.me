import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Award, CheckCircle, Shield, Code, Terminal, Trophy } from 'lucide-react';

const certifications = [
  {
    title: "Advanced Cyber Threat Intelligence",
    issuer: "May 2025",
    icon: Shield
  },
  {
    title: "Automation with Python and PowerShell",
    issuer: "IT & Cybersecurity",
    icon: Terminal
  },
  {
    title: "Penetration Testing Professional",
    issuer: "Cybrary",
    icon: Code
  },
  {
    title: "Application Security Titan",
    issuer: "Bronze Level",
    icon: Trophy
  },
  {
    title: "Front-End Developer",
    issuer: "React.js",
    icon: Code
  }
];

const achievements = [
  "Reduced service downtime by 15% through proactive monitoring during MAS incidents",
  "Onboarded 100+ assets to BeyondTrust PAM, achieving full dual-control compliance",
  "Enhanced SOC visibility by deploying Trend Micro XDR across hybrid workloads",
  "Improved compliance posture via Tripwire and XyGate integrations",
  "Strengthened cloud privacy with scalable PII detection using AWS Macie"
];

export default function CertificationsSection({ isDarkMode }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className={`py-32 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'} transition-colors duration-500`} ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          <p className={`text-sm font-medium ${isDarkMode ? 'text-blue-400' : 'text-blue-600'} tracking-widest uppercase mb-4`}>
            Credentials
          </p>
          <h2 className={`text-4xl md:text-5xl lg:text-6xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'} tracking-tight`}>
            Certifications & Achievements
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <h3 className={`text-2xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-8 flex items-center gap-3`}>
              <Award className={`w-6 h-6 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} />
              Certifications
            </h3>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className={`flex items-center gap-4 p-5 ${isDarkMode ? 'bg-white/5 border-white/10 hover:bg-white/10' : 'bg-white border-gray-100 hover:shadow-lg hover:border-blue-100'} rounded-2xl border transition-all duration-300 group`}
                >
                  <div className={`p-3 ${isDarkMode ? 'bg-blue-500/10' : 'bg-blue-50'} rounded-xl group-hover:scale-110 transition-transform`}>
                    <cert.icon className={`w-5 h-5 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                  </div>
                  <div>
                    <h4 className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{cert.title}</h4>
                    <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>{cert.issuer}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Achievements */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <h3 className={`text-2xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-8 flex items-center gap-3`}>
              <Trophy className="w-6 h-6 text-yellow-500" />
              Key Achievements
            </h3>
            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className={`flex items-start gap-4 p-5 ${isDarkMode ? 'bg-white/5 border-white/10 hover:bg-white/10' : 'bg-white border-gray-100 hover:shadow-lg hover:border-green-100'} rounded-2xl border transition-all duration-300 group`}
                >
                  <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                  <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>{achievement}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}