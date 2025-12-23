import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ExternalLink, Github, Shield, Cloud, Lock, Cpu, Server, Zap } from 'lucide-react';

const projects = [
  {
    title: "Hybrid XDR Deployment",
    description: "Integrated Trend Micro XDR telemetry into LogRhythm SIEM for unified cloud-on-prem monitoring, enhancing SOC visibility and detection accuracy.",
    icon: Shield,
    tags: ["XDR", "SIEM", "Cloud Security"],
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "PAM Transformation",
    description: "Migrated from manual access control to BeyondTrust dual-control PAM with automated audit reporting, onboarding 100+ assets with full compliance.",
    icon: Lock,
    tags: ["PAM", "Access Control", "Compliance"],
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "Cloud Honeypots",
    description: "Built and analysed Azure/GCP honeypots via ELK and Sentinel for real-time threat intelligence gathering and attack pattern analysis.",
    icon: Cloud,
    tags: ["Azure", "GCP", "Threat Intel"],
    color: "from-green-500 to-emerald-500"
  },
  {
    title: "OAuth Phishing PoC",
    description: "Simulated token theft attacks and implemented countermeasures for secure authentication flows in enterprise applications.",
    icon: Zap,
    tags: ["OAuth", "Penetration Testing", "Authentication"],
    color: "from-orange-500 to-red-500"
  },
  {
    title: "IoT Cryptography Research",
    description: "Researched lightweight ciphers (ASCON, PRESENT) for embedded device protection in resource-constrained IoT environments.",
    icon: Cpu,
    tags: ["IoT", "Cryptography", "Research"],
    color: "from-yellow-500 to-orange-500"
  },
  {
    title: "Security Lake Integration",
    description: "Integrated Amazon Security Lake with ELK Stack for centralized SIEM visibility, alert analytics, and automated PII detection using AWS Macie.",
    icon: Server,
    tags: ["AWS", "SIEM", "Data Protection"],
    color: "from-indigo-500 to-purple-500"
  }
];

export default function ProjectsSection({ isDarkMode }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className={`py-32 ${isDarkMode ? 'bg-black' : 'bg-white'} transition-colors duration-500`} ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          <p className={`text-sm font-medium ${isDarkMode ? 'text-blue-400' : 'text-blue-600'} tracking-widest uppercase mb-4`}>
            Key Projects
          </p>
          <h2 className={`text-4xl md:text-5xl lg:text-6xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'} tracking-tight`}>
            Featured Work
          </h2>
        </motion.div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={`group relative ${isDarkMode ? 'bg-white/5 hover:bg-white/10' : 'bg-gray-50 hover:shadow-2xl'} rounded-3xl p-8 transition-all duration-500 overflow-hidden border ${isDarkMode ? 'border-white/10' : 'border-transparent'}`}
            >
              {/* Background gradient on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
              
              {/* Icon */}
              <div className={`relative inline-flex p-4 rounded-2xl bg-gradient-to-br ${project.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <project.icon className="w-6 h-6 text-white" />
              </div>

              {/* Content */}
              <h3 className={`relative text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-3`}>
                {project.title}
              </h3>
              <p className={`relative ${isDarkMode ? 'text-gray-400' : 'text-gray-600'} text-sm leading-relaxed mb-6`}>
                {project.description}
              </p>

              {/* Tags */}
              <div className="relative flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`px-3 py-1 text-xs ${isDarkMode ? 'bg-white/10 text-gray-300 border-white/20' : 'bg-white text-gray-600 border-gray-200'} rounded-full border`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* GitHub link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mt-16"
        >
          <a
            href="https://github.com/SujithNavva"
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-3 px-10 py-5 ${isDarkMode ? 'bg-white/10 hover:bg-white/20 border border-white/20' : 'bg-gray-900 hover:bg-gray-800'} text-white rounded-full text-lg font-medium transition-all duration-300 group`}
          >
            <Github className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            <span className="font-medium">View More on GitHub</span>
            <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}