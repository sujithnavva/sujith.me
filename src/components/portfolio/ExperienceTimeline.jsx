import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Building2, Calendar, ArrowUpRight, CheckCircle2 } from 'lucide-react';

const experiences = [
  {
    company: "Network for Electronic Transfers (Singapore)",
    role: "Cybersecurity Engineer",
    period: "Present",
    current: true,
    highlights: [
      "Deployed and integrated Trend Micro XDR across on-prem and cloud environments",
      "Implemented BeyondTrust PAM with dual-control access enforcement",
      "Optimized Imperva and DOSarrest WAFs and TippingPoint IPS",
      "Integrated Amazon Security Lake with ELK for centralized SIEM visibility",
      "Deployed AWS Macie for automated PII detection and compliance",
      "Led vulnerability assessments using Tenable across hybrid workloads"
    ]
  },
  {
    company: "Development Bank of Singapore (DBS)",
    role: "Application Security – L2 Analyst",
    period: "Jul 2022 – Aug 2024",
    current: false,
    highlights: [
      "Managed security incident triage during MAS resilience events, reducing downtime by 15%",
      "Delivered features used by thousands of active customers",
      "Supported forensic investigations and access control audits",
      "Contributed to secure coding guidelines and encryption libraries",
      "Reviewed and remediated application-level vulnerabilities"
    ]
  }
];

const education = [
  {
    institution: "Nanyang Technological University (NTU)",
    degree: "Master of Science (MSc) in Cybersecurity",
    location: "Singapore",
    current: true
  },
  {
    institution: "SRM Institute of Science and Technology",
    degree: "Bachelor of Technology in Computer Science Engineering",
    location: "Chennai",
    period: "2018 – 2022"
  }
];

export default function ExperienceTimeline({ isDarkMode }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className={`py-32 ${isDarkMode ? 'bg-black text-white' : 'bg-gray-50 text-gray-900'} transition-colors duration-500`} ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          <p className={`text-sm font-medium ${isDarkMode ? 'text-blue-400' : 'text-blue-600'} tracking-widest uppercase mb-4`}>
            Career Journey
          </p>
          <h2 className={`text-4xl md:text-5xl lg:text-6xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'} tracking-tight`}>
            Professional Experience
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className={`absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b ${isDarkMode ? 'from-blue-500 via-gray-700 to-transparent' : 'from-blue-500 via-gray-300 to-transparent'} transform md:-translate-x-1/2`} />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2, ease: [0.16, 1, 0.3, 1] }}
              className={`relative mb-16 ${index % 2 === 0 ? 'md:pr-[50%] md:text-right' : 'md:pl-[50%] md:ml-auto'}`}
            >
              {/* Timeline dot */}
              <div className={`absolute top-0 ${index % 2 === 0 ? 'left-0 md:left-auto md:right-0 md:translate-x-1/2' : 'left-0 md:-translate-x-1/2'} md:left-1/2`}>
                <div className={`w-4 h-4 rounded-full ${exp.current ? 'bg-blue-500 animate-pulse' : isDarkMode ? 'bg-gray-600' : 'bg-gray-400'} ring-4 ${isDarkMode ? 'ring-black' : 'ring-gray-50'}`} />
              </div>

              {/* Content card */}
              <div className={`ml-8 md:ml-0 ${index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'}`}>
                <div className={`${isDarkMode ? 'bg-white/5 border-white/10 hover:bg-white/10' : 'bg-white border-gray-200 hover:shadow-xl'} backdrop-blur-sm border rounded-3xl p-8 transition-all duration-300 group`}>
                  {/* Header */}
                  <div className={`flex items-start gap-4 mb-6 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                    <div className={`p-3 ${isDarkMode ? 'bg-blue-500/10' : 'bg-blue-50'} rounded-2xl shrink-0 group-hover:scale-110 transition-transform`}>
                      <Building2 className={`w-6 h-6 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                    </div>
                    <div className={index % 2 === 0 ? 'md:text-right' : ''}>
                      <h3 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-1`}>{exp.role}</h3>
                      <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>{exp.company}</p>
                      <div className={`flex items-center gap-2 mt-2 text-sm ${isDarkMode ? 'text-gray-500' : 'text-gray-500'}`}>
                        {index % 2 === 0 && <span className="hidden md:inline" />}
                        <Calendar className="w-4 h-4" />
                        <span>{exp.period}</span>
                        {exp.current && (
                          <span className="px-2 py-0.5 bg-green-500/20 text-green-400 rounded-full text-xs">
                            Current
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Highlights */}
                  <ul className={`space-y-3 ${index % 2 === 0 ? 'md:text-left' : ''}`}>
                    {exp.highlights.map((highlight, i) => (
                      <li key={i} className={`flex items-start gap-3 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} text-sm`}>
                        <CheckCircle2 className={`w-4 h-4 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'} shrink-0 mt-0.5`} />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Education section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mt-24"
        >
          <h3 className={`text-2xl font-semibold text-center mb-12 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Education
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {education.map((edu, index) => (
              <div
                key={edu.institution}
                className={`${isDarkMode ? 'bg-white/5 border-white/10 hover:bg-white/10' : 'bg-white border-gray-200 hover:shadow-xl'} backdrop-blur-sm border rounded-3xl p-8 transition-all duration-300 group`}
              >
                <div className="flex items-start justify-between mb-4">
                  <h4 className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{edu.degree}</h4>
                  {edu.current && (
                    <span className="px-2 py-0.5 bg-blue-500/20 text-blue-400 rounded-full text-xs">
                      Pursuing
                    </span>
                  )}
                </div>
                <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} mb-2`}>{edu.institution}</p>
                <p className={`text-sm ${isDarkMode ? 'text-gray-500' : 'text-gray-500'}`}>{edu.location} {edu.period && `• ${edu.period}`}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}