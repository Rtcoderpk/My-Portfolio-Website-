'use client';

import { motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let ticking = false;
    const update = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setIsVisible(scrollTop > 300);
      setProgress(docHeight > 0 ? Math.min(scrollTop / docHeight, 1) : 0);
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.div
      initial={false}
      animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
      transition={{ duration: 0.2 }}
      style={{ position: 'fixed', bottom: '32px', left: '32px', zIndex: 40 }}
    >
      <button
        onClick={scrollToTop}
        type="button"
        aria-label="Scroll to top"
        className="relative w-12 h-12 flex items-center justify-center"
      >
        {/* Progress ring */}
        <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 48 48">
          <circle cx="24" cy="24" r="21" fill="none" stroke="rgba(139,92,246,0.2)" strokeWidth="2" />
          <circle
            cx="24" cy="24" r="21"
            fill="none"
            stroke="rgba(139,92,246,0.6)"
            strokeWidth="2"
            strokeDasharray={`${2 * Math.PI * 21}`}
            strokeDashoffset={`${2 * Math.PI * 21 * (1 - progress)}`}
            strokeLinecap="round"
            className="transition-[stroke-dashoffset] duration-100"
          />
        </svg>
        <span className="p-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full shadow-lg shadow-purple-500/50 hover:shadow-xl transition-shadow cursor-pointer focus-visible:ring-2 focus-visible:ring-violet-400/70 relative">
          <ArrowUp size={20} />
        </span>
      </button>
    </motion.div>
  );
}