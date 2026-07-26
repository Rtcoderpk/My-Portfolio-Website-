'use client';

import { motion } from 'framer-motion';
import { Zap, MessageSquare, Brain, Code2, Workflow, FileText } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Brain,
      title: 'AI Agent Development',
      description: 'Custom autonomous agents with reasoning, planning, and action capabilities',
    },
    {
      icon: MessageSquare,
      title: 'AI Assistant Development',
      description: 'Intelligent assistants that understand context and provide smart solutions',
    },
    {
      icon: MessageSquare,
      title: 'Chatbot Development',
      description: 'Conversational AI for customer support, sales, and engagement',
    },
    {
      icon: Zap,
      title: 'Voice Assistant Development',
      description: 'Voice-enabled AI interfaces with natural language understanding',
    },
    {
      icon: FileText,
      title: 'RAG Systems',
      description: 'Retrieval Augmented Generation for knowledge-aware AI systems',
    },
    {
      icon: Workflow,
      title: 'Business Automation',
      description: 'Workflow automation and process optimization using AI',
    },
  ];

  return (
    <section id="services" className="py-20 relative">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="glow-text">Services I Offer</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Comprehensive AI solutions tailored to your business needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="glass p-8 rounded-xl group cursor-pointer border border-white/5 hover:border-cyan-500/50 transition-all"
            >
              <div className="p-4 bg-gradient-to-br from-purple-600 to-cyan-600 rounded-lg w-fit mb-6 group-hover:shadow-glow transition-all">
                <service.icon size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
