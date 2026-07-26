'use client';

import { motion } from 'framer-motion';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Specializations from '@/components/sections/Specializations';
import Projects from '@/components/sections/Projects';
import Experience from '@/components/sections/Experience';
import Testimonials from '@/components/sections/Testimonials';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/sections/Footer';
import Navigation from '@/components/Navigation';
import ScrollToTop from '@/components/ScrollToTop';
import FloatingWidgets from '@/components/FloatingWidgets';
import TechStack from '@/components/sections/TechStack';

export default function Home() {
  return (
    <div className="min-h-screen bg-dark">
      <Navigation />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <main>
          <Hero />
          <Specializations />
          <Projects />
          <TechStack />
          <Experience />
          <Testimonials />
          <About />
          <Contact />
        </main>
        <Footer />
      </motion.div>

      <ScrollToTop />
      <FloatingWidgets />
    </div>
  );
}
