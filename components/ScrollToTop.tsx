'use client';

import { motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      style={{
        position: 'fixed',
        bottom: '32px',
        right: '32px',
        zIndex: 40,
      }}
    >
      <button
        onClick={scrollToTop}
        type="button"
        aria-label="Scroll to top"
        className="p-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full shadow-lg shadow-purple-500/50 hover:shadow-xl cursor-pointer focus-visible:ring-2 focus-visible:ring-violet-400/70"
      >
        <ArrowUp size={20} />
      </button>
    </motion.div>
  );
}
