'use client';

import { motion } from 'framer-motion';
import { Zap, Brain, Code2, Lightbulb } from 'lucide-react';
import { useInView } from '@/components/useInView';

const stats = [
  { label: 'Years Experience', value: '2+', icon: Zap },
  { label: 'Projects Completed', value: '20+', icon: Code2 },
  { label: 'Clients Satisfied', value: '15+', icon: Brain },
  { label: 'Technologies', value: '20+', icon: Lightbulb },
];

export default function About() {
  const { ref: headerRef, inView: headerIn } = useInView();
  const { ref: contentRef, inView: contentIn } = useInView();

  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container-custom">
        {/* Section Header */}
        <div ref={headerRef}>
          {headerIn && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
              className="text-center mb-20"
            >
              <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6">
                <span className="glow-text">About Me</span>
              </h2>
              <p className="text-gray-300 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
                I'm an AI Engineer with deep expertise in building intelligent systems that solve real, complex business problems
              </p>
            </motion.div>
          )}
        </div>

        {/* Main Content Grid */}
        <div ref={contentRef} className="grid lg:grid-cols-3 gap-8 items-start mb-16">
          {/* Left: Bio Section */}
          {contentIn && (
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
              className="lg:col-span-1 glass p-8 rounded-2xl border border-primary/20 hover:border-primary/50 transition-all"
            >
              <h3 className="text-2xl font-bold mb-4 text-violet-glow">Who I Am</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                I'm a passionate AI Engineer specializing in designing and implementing AI-powered solutions that transform businesses.
              </p>
              <p className="text-gray-300 leading-relaxed mb-6">
                With expertise in AI agents, chatbots, RAG systems, and automation, I help companies automate workflows and enhance customer experiences.
              </p>
              <p className="text-gray-300 leading-relaxed mb-6">
                My mission is to bridge the gap between cutting-edge AI technology and practical business applications.
              </p>
              <a href="#what-i-build" className="btn-primary w-full">Explore Services</a>
            </motion.div>
          )}

          {/* Right: Stats Grid */}
          <div className="lg:col-span-2 grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={contentIn ? { opacity: 0, y: 20 } : false}
                animate={contentIn ? { opacity: 1, y: 0 } : false}
                transition={{ duration: 0.6, delay: 0.1 + index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                className="glass p-8 rounded-2xl border border-purple-500/20 hover:border-purple-500/50 transition-all group cursor-pointer"
                whileHover={{ y: -8, borderColor: 'rgba(168, 85, 247, 0.5)' }}
              >
                <div className="mb-4 p-3 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-lg w-fit group-hover:from-primary/50 group-hover:to-secondary/50 transition-all">
                  <stat.icon size={28} className="text-secondary" />
                </div>
                <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-glow to-secondary mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}