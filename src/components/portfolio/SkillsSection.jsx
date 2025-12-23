import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  Shield, 
  Monitor, 
  Cloud, 
  Code, 
  Database, 
  Lock,
  Eye,
  Terminal,
  Server,
  FileSearch,
  AlertTriangle,
  Settings
} from 'lucide-react';

const skillCategories = [
  {
    title: "Security Operations",
    icon: Shield,
    color: "from-blue-500 to-cyan-500",
    skills: ["LogRhythm SIEM", "Amazon Security Lake", "ELK Stack", "Grafana", "AppDynamics"]
  },
  {
    title: "Endpoint & Network",
    icon: Monitor,
    color: "from-purple-500 to-pink-500",
    skills: ["Trend Micro XDR", "Imperva WAF", "DOSarrest WAF", "TippingPoint IPS", "Tripwire FIM"]
  },
  {
    title: "Access Management",
    icon: Lock,
    color: "from-orange-500 to-red-500",
    skills: ["BeyondTrust PAM", "Dual-Control", "Audit Management", "XyGate"]
  },
  {
    title: "Cloud Security",
    icon: Cloud,
    color: "from-green-500 to-emerald-500",
    skills: ["AWS", "Azure", "GCP", "AWS Macie", "Security Lake"]
  },
  {
    title: "Automation",
    icon: Terminal,
    color: "from-yellow-500 to-orange-500",
    skills: ["Python", "Bash", "PowerShell", "Java", "Docker", "Jenkins"]
  },
  {
    title: "Compliance",
    icon: FileSearch,
    color: "from-indigo-500 to-purple-500",
    skills: ["MAS TRM", "ISO 27001", "PCI-DSS", "MITRE ATT&CK", "OWASP"]
  }
];

export default function SkillsSection({ isDarkMode }) {
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
          <p className={`text-sm font-medium ${isDarkMode ? 'text-blue-500' : 'text-blue-600'} tracking-widest uppercase mb-4`}>
            Core Competencies
          </p>
          <h2 className={`text-4xl md:text-5xl lg:text-6xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'} tracking-tight`}>
            Technical Arsenal
          </h2>
        </motion.div>

        {/* Skills grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={`group ${isDarkMode ? 'bg-white/5 border-white/10 hover:bg-white/10' : 'bg-white border-gray-100 hover:shadow-xl'} rounded-3xl p-8 transition-all duration-500 border`}
            >
              {/* Icon */}
              <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${category.color} mb-6`}>
                <category.icon className="w-6 h-6 text-white" />
              </div>

              {/* Title */}
              <h3 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-4`}>
                {category.title}
              </h3>

              {/* Skills list */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`px-3 py-1.5 text-sm ${isDarkMode ? 'bg-white/10 text-gray-300 group-hover:bg-white/20' : 'bg-gray-100 text-gray-700 group-hover:bg-gray-200'} rounded-full transition-colors duration-300`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional tools */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 text-center"
        >
          <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'} uppercase tracking-wider mb-6`}>
            Development Stack
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {["React.js", "Spring Boot", "Git", "Docker", "Jenkins", "Tenable", "Autopsy"].map((tool) => (
              <span
                key={tool}
                className={`px-5 py-2.5 ${isDarkMode ? 'bg-white/5 border-white/10 text-gray-300 hover:border-blue-500 hover:text-blue-400' : 'bg-white border-gray-200 text-gray-700 hover:border-blue-500 hover:text-blue-600'} border rounded-full text-sm font-medium transition-colors duration-300`}
              >
                {tool}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}