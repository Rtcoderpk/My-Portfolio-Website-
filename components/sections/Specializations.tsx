'use client';

import { motion } from 'framer-motion';
import { Bot, MessageSquareText, Mic, FileSearch, Zap, Code2, ArrowRight } from 'lucide-react';

const items = [
  {
    icon: Bot,
    title: 'AI Agents',
    desc: 'Intelligent agents that plan, reason and complete tasks autonomously.',
    color: 'from-primary to-violet-glow',
  },
  {
    icon: MessageSquareText,
    title: 'AI Assistants',
    desc: 'Custom AI assistants for customer support, internal tools and businesses.',
    color: 'from-primary to-violet-glow',
  },
  {
    icon: Mic,
    title: 'Voice AI',
    desc: 'Voice assistants and voice bots that understand and respond naturally.',
    color: 'from-secondary to-tertiary',
  },
  {
    icon: FileSearch,
    title: 'RAG Systems',
    desc: 'Retrieval Augmented Generation systems for accurate & context-aware responses.',
    color: 'from-primary to-violet-glow',
  },
  {
    icon: Zap,
    title: 'Automation',
    desc: 'Automate workflows and processes to save time and increase efficiency.',
    color: 'from-amber-500 to-orange-500',
  },
  {
    icon: Code2,
    title: 'AI Web Apps',
    desc: 'Scalable AI-powered web applications with modern technologies.',
    color: 'from-secondary to-tertiary',
  },
];

export default function Specializations() {
  return (
    <section id="what-i-build" className="section-pad relative">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <span className="eyebrow">What I Build</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mt-3">
            <span className="text-white">AI Solutions That Drive </span>
            <span className="glow-text">Real Impact</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-5">
          {items.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="glass p-6 group cursor-pointer relative overflow-hidden card-hover"
            >
              <div className="absolute -top-10 -right-10 w-24 h-24 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-all" />
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-5 shadow-glow-sm group-hover:scale-110 transition-transform`}>
                <item.icon size={22} className="text-white" />
              </div>
              <h3 className="text-base font-display font-semibold mb-2 text-white">{item.title}</h3>
              <p className="text-gray-400 text-[13px] leading-relaxed mb-4">{item.desc}</p>
              <ArrowRight size={16} className="text-violet-glow group-hover:translate-x-1 transition-transform" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
