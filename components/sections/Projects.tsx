'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, FileSearch, MessageSquareText, Mic, Workflow } from 'lucide-react';
import { useInView } from '@/components/useInView';

const projects = [
  {
    title: 'NADRA AI Assistant',
    description: 'RAG based assistant for NADRA services with document retrieval and accurate responses.',
    tech: ['RAG', 'LangChain', 'Streamlit'],
    icon: FileSearch,
  },
  {
    title: 'Customer Support Chatbot',
    description: 'AI chatbot for e-commerce support with contextual understanding and automation.',
    tech: ['AI Agent', 'FastAPI', 'OpenAI'],
    icon: MessageSquareText,
  },
  {
    title: 'Voice Assistant',
    description: 'Voice assistant for tasks, information retrieval and smart automation.',
    tech: ['Whisper', 'TTS', 'Python'],
    icon: Mic,
  },
  {
    title: 'Business Automation',
    description: 'Automated lead generation and follow-up system that saves time and boosts conversions.',
    tech: ['Automation', 'Zapier', 'API'],
    icon: Workflow,
  },
];

export default function Projects() {
  const { ref: headerRef, inView: headerIn } = useInView();
  const { ref: gridRef, inView: gridIn } = useInView();

  return (
    <section id="projects" className="section-pad relative">
      <div className="container-custom">
        <div ref={headerRef}>
          {headerIn && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
              className="flex flex-wrap items-end justify-between gap-4 mb-12"
            >
              <div>
                <span className="eyebrow">Featured Projects</span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mt-3">
                  <span className="text-white">Some Things I&apos;ve </span>
                  <span className="glow-text">Built</span>
                </h2>
              </div>
              <a href="#contact" className="btn-secondary !py-2.5 hidden sm:inline-flex">
                Start a Project <ArrowUpRight size={15} />
              </a>
            </motion.div>
          )}
        </div>

        <div ref={gridRef} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={gridIn ? { opacity: 0, y: 24 } : false}
              animate={gridIn ? { opacity: 1, y: 0 } : false}
              transition={{ duration: 0.5, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
              whileHover={{ y: -8 }}
              className="glass overflow-hidden group card-hover flex flex-col gpu"
            >
              <div className="h-40 relative bg-gradient-to-br from-white/[0.06] to-white/[0.02] flex items-center justify-center overflow-hidden border-b border-white/[0.06]">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-transparent to-secondary/15 group-hover:from-primary/25 group-hover:to-secondary/25 transition-all" />
                <div className="w-14 h-14 rounded-2xl bg-white/[0.08] backdrop-blur-sm flex items-center justify-center relative z-10 group-hover:scale-110 transition-transform">
                  <project.icon size={26} className="text-white/80" />
                </div>
              </div>
              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-base font-display font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 text-[13px] leading-relaxed mb-4 flex-1">{project.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((t) => (
                      <span key={t} className="text-[10px] px-2 py-1 bg-white/[0.05] border border-white/10 rounded-md text-gray-300">
                        {t}
                      </span>
                    ))}
                  </div>
                  <ArrowUpRight size={16} className="text-violet-glow group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0 ml-2" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <a href="#contact" className="btn-secondary w-full sm:hidden mt-6 flex justify-center">
          Start a Project <ArrowUpRight size={15} />
        </a>
      </div>
    </section>
  );
}