'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import heroPortrait from '../Adobe Express - file.png';
import Image from 'next/image';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);

    const onScrollSpy = () => {
      const sections = navItems.map((item) => document.getElementById(item.href.slice(1)));
      let current = 'home';
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = sections[i];
        if (el && el.getBoundingClientRect().top <= 200) {
          current = navItems[i].href.slice(1);
          break;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', onScroll);
    window.addEventListener('scroll', onScrollSpy);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('scroll', onScrollSpy);
    };
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'What I Build', href: '#what-i-build' },
    { name: 'Projects', href: '#projects' },
    { name: 'AI Ecosystem', href: '#ai-ecosystem' },
    { name: 'About Me', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      aria-label="Primary"
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-dark/85 backdrop-blur-xl border-b border-white/[0.08] shadow-card' : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="container-custom flex items-center justify-between h-[76px]">
        {/* Logo */}
        <motion.a
          href="#home"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-3"
        >
          <div className="w-10 h-10 rounded-xl overflow-hidden border border-white/10 shadow-glow-sm">
            <Image src={heroPortrait} alt="Portrait" width={40} height={40} className="w-full h-full object-cover object-center" />
          </div>
          <div className="leading-tight hidden sm:block">
            <div className="font-display font-bold text-sm tracking-wide text-white">RANA TANZEEL</div>
            <div className="text-[10px] tracking-[0.25em] text-gray-400 font-mono">AI ENGINEER</div>
          </div>
        </motion.a>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          {navItems.map((item, i) => (
            <motion.a
              key={item.name}
              href={item.href}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.05 }}
              className={`relative text-sm transition-colors group ${
                activeSection === item.href.slice(1) ? 'text-white' : 'text-gray-300 hover:text-white'
              }`}
            >
              {item.name}
              <span className={`absolute -bottom-1.5 left-0 h-px bg-gradient-to-r from-primary to-secondary transition-all duration-300 ${
                activeSection === item.href.slice(1) ? 'w-full' : 'w-0 group-hover:w-full'
              }`} />
            </motion.a>
          ))}
        </div>

        <div className="hidden lg:block">
          <a href="#contact" className="btn-primary !py-2.5 !px-5 !text-xs">
            Let&apos;s Talk <ArrowUpRight size={15} />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="lg:hidden text-white p-2 -mr-2 rounded-lg transition-colors hover:bg-white/5 focus-visible:bg-white/5"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            id="mobile-menu"
            className="lg:hidden overflow-hidden"
          >
            <div className="bg-dark/95 backdrop-blur-xl border-t border-white/[0.08]">
              <div className="container-custom py-6 flex flex-col gap-5">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-gray-300 hover:text-white transition-colors text-base focus-visible:text-white"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
                <a href="#contact" className="btn-primary w-full mt-2" onClick={() => setIsOpen(false)}>
                  Let&apos;s Talk <ArrowUpRight size={15} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
