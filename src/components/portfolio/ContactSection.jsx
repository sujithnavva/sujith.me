import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, Linkedin, Github, Phone, MapPin, ArrowUpRight, Send } from 'lucide-react';

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "navv0001@e.ntu.edu.sg",
    href: "mailto:navv0001@e.ntu.edu.sg",
    color: "from-red-500 to-orange-500"
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "SujithNavva",
    href: "https://linkedin.com/in/SujithNavva",
    color: "from-blue-600 to-blue-400"
  },
  {
    icon: Github,
    label: "GitHub",
    value: "SujithNavva",
    href: "https://github.com/SujithNavva",
    color: "from-gray-700 to-gray-500"
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+65 98854920",
    href: "tel:+6598854920",
    color: "from-green-500 to-emerald-500"
  }
];

export default function ContactSection({ isDarkMode }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className={`py-32 ${isDarkMode ? 'bg-black text-white' : 'bg-white text-gray-900'} transition-colors duration-500`} ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          <p className={`text-sm font-medium ${isDarkMode ? 'text-blue-400' : 'text-blue-600'} tracking-widest uppercase mb-4`}>
            Get In Touch
          </p>
          <h2 className={`text-4xl md:text-5xl lg:text-6xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'} tracking-tight mb-6`}>
            Let's Connect
          </h2>
          <p className={`text-xl ${isDarkMode ? 'text-gray-400' : 'text-gray-600'} max-w-2xl mx-auto`}>
            Open to discussing cybersecurity opportunities, collaborations, 
            or just a friendly chat about the latest in security.
          </p>
        </motion.div>

        {/* Contact cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {contactLinks.map((contact, index) => (
            <motion.a
              key={contact.label}
              href={contact.href}
              target={contact.href.startsWith('http') ? '_blank' : undefined}
              rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={`group relative ${isDarkMode ? 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20' : 'bg-white border-gray-200 hover:shadow-xl hover:border-blue-200'} backdrop-blur-sm border rounded-3xl p-6 transition-all duration-300`}
            >
              {/* Icon with gradient */}
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${contact.color} mb-4 group-hover:scale-110 transition-transform`}>
                <contact.icon className="w-5 h-5 text-white" />
              </div>

              {/* Label */}
              <p className={`text-sm ${isDarkMode ? 'text-gray-500' : 'text-gray-500'} mb-1`}>{contact.label}</p>
              
              {/* Value */}
              <p className={`${isDarkMode ? 'text-white' : 'text-gray-900'} font-medium flex items-center gap-2`}>
                {contact.value}
                <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </p>
            </motion.a>
          ))}
        </div>

        {/* Location */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-center"
        >
          <div className={`inline-flex items-center gap-2 px-6 py-3 ${isDarkMode ? 'bg-white/5 border-white/10' : 'bg-gray-100 border-gray-200'} border rounded-full`}>
            <MapPin className={`w-5 h-5 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} />
            <span className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Based in Singapore</span>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mt-16"
        >
          <a
            href="mailto:navv0001@e.ntu.edu.sg"
            className="group inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white rounded-full text-lg font-medium transition-all duration-300 shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 hover:scale-105"
          >
            <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            Send Me a Message
          </a>
        </motion.div>
      </div>
    </section>
  );
}