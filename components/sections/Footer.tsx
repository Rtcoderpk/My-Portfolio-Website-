'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { siteConfig } from '@/config/site';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="border-t border-white/10 pt-16 pb-8 relative">
      <div className="container-custom">
        <div className="grid md:grid-cols-4 gap-10 mb-10">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold glow-text mb-4">RT</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              AI Engineer crafting intelligent solutions for real businesses.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2.5 text-sm text-gray-400">
              <li><a href="#about" className="hover:text-violet-glow transition-colors duration-200">About</a></li>
              <li><a href="#what-i-build" className="hover:text-violet-glow transition-colors duration-200">Services</a></li>
              <li><a href="#projects" className="hover:text-violet-glow transition-colors duration-200">Projects</a></li>
              <li><a href="#contact" className="hover:text-violet-glow transition-colors duration-200">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Services</h4>
            <ul className="space-y-2.5 text-sm text-gray-400">
              <li><a href="#what-i-build" className="hover:text-violet-glow transition-colors duration-200">AI Agents</a></li>
              <li><a href="#projects" className="hover:text-violet-glow transition-colors duration-200">Chatbots</a></li>
              <li><a href="#ai-ecosystem" className="hover:text-violet-glow transition-colors duration-200">RAG Systems</a></li>
              <li><a href="#what-i-build" className="hover:text-violet-glow transition-colors duration-200">Automation</a></li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Contact</h4>
            <ul className="space-y-2.5 text-sm text-gray-400 mb-6">
              <li><a href={`mailto:${siteConfig.email}`} className="hover:text-violet-glow transition-colors duration-200">{siteConfig.email}</a></li>
              <li><a href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`} className="hover:text-violet-glow transition-colors duration-200">{siteConfig.phone}</a></li>
              <li>Pakistan</li>
            </ul>
            <div className="flex gap-3">
              <a href={siteConfig.social.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="p-2.5 bg-white/5 rounded-lg hover:bg-white/10 hover:text-violet-glow transition-all">
                <Github size={18} />
              </a>
              <a href={siteConfig.social.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="p-2.5 bg-white/5 rounded-lg hover:bg-white/10 hover:text-violet-glow transition-all">
                <Linkedin size={18} />
              </a>
              <a href={`mailto:${siteConfig.email}`} aria-label="Email" className="p-2.5 bg-white/5 rounded-lg hover:bg-white/10 hover:text-violet-glow transition-all">
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>&copy; {currentYear} Rana Tanzeel. All rights reserved.</p>
            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Scroll to top"
              className="mt-4 md:mt-0 flex items-center gap-1.5 text-gray-500 hover:text-violet-glow transition-colors"
            >
              Back to top <ArrowUp size={14} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}