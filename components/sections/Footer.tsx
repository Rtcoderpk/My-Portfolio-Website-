'use client';

import { motion } from 'framer-motion';
import { siteConfig } from '@/config/site';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 py-12 relative">
      <div className="container-custom">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold glow-text mb-4">RT</h3>
            <p className="text-gray-400 text-sm">
              AI Engineer crafting intelligent solutions for real businesses.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#about" className="hover:text-violet-glow transition-colors">About</a></li>
              <li><a href="#what-i-build" className="hover:text-violet-glow transition-colors">Services</a></li>
              <li><a href="#projects" className="hover:text-violet-glow transition-colors">Projects</a></li>
              <li><a href="#contact" className="hover:text-violet-glow transition-colors">Contact</a></li>
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#what-i-build" className="hover:text-violet-glow transition-colors">AI Agents</a></li>
              <li><a href="#projects" className="hover:text-violet-glow transition-colors">Chatbots</a></li>
              <li><a href="#ai-ecosystem" className="hover:text-violet-glow transition-colors">RAG Systems</a></li>
              <li><a href="#what-i-build" className="hover:text-violet-glow transition-colors">Automation</a></li>
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href={`mailto:${siteConfig.email}`} className="hover:text-violet-glow transition-colors">Email: {siteConfig.email}</a></li>
              <li><a href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`} className="hover:text-violet-glow transition-colors">Phone: {siteConfig.phone}</a></li>
              <li>Location: Pakistan</li>
            </ul>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400"
          >
            <p>&copy; {currentYear} rtcoder. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href={`mailto:${siteConfig.email}`} className="hover:text-violet-glow transition-colors">Email</a>
              <a href={siteConfig.social.linkedin} target="_blank" rel="noreferrer" className="hover:text-violet-glow transition-colors">LinkedIn</a>
              <a href={siteConfig.social.github} target="_blank" rel="noreferrer" className="hover:text-violet-glow transition-colors">GitHub</a>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
