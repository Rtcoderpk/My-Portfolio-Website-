'use client';

import { motion } from 'framer-motion';
import { useInView } from '@/components/useInView';

const experiences = [
  {
    role: 'Generative AI Research Engineer',
    company: 'National Center of Artificial Intelligence (NCAI), UET Lahore',
    period: 'May 2026 - Present',
    description: 'Conducting cutting-edge research in generative AI, large language models, and multi-modal AI systems at one of Pakistan\'s premier AI research centers.',
    achievements: [
      'Developing novel LLM architectures for Urdu and regional language understanding',
      'Published research on efficient fine-tuning techniques for low-resource languages',
      'Building production-grade RAG pipelines for institutional knowledge retrieval',
    ],
  },
  {
    role: 'DevOps Engineer',
    company: 'Dafi Labs',
    period: 'Jun 2026 - Present',
    description: 'Designing and maintaining CI/CD pipelines, cloud infrastructure, and MLOps workflows for AI model deployment and monitoring.',
    achievements: [
      'Architected AWS-based infrastructure reducing deployment time by 60%',
      'Implemented Kubernetes clusters for scalable AI model serving',
      'Automated monitoring and alerting for 15+ production microservices',
    ],
  },
  {
    role: 'Freelance AI Engineer & Developer',
    company: 'Self-Employed',
    period: '2023 - Present',
    description: 'Providing end-to-end AI solutions including custom chatbot development, RAG systems, process automation, and AI agent architectures for international clients.',
    achievements: [
      'Delivered 20+ AI projects for clients across 5 countries',
      'Built custom AI agents reducing operational costs by 40-60%',
      'Achieved 100% client satisfaction rate with consistent repeat business',
    ],
  },
];

export default function Experience() {
  const { ref: headerRef, inView: headerIn } = useInView();
  const { ref: listRef, inView: listIn } = useInView();

  return (
    <section id="experience" className="py-20 relative">
      <div className="container-custom">
        <div ref={headerRef}>
          {headerIn && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                <span className="glow-text">Experience</span>
              </h2>
            </motion.div>
          )}
        </div>

        <div ref={listRef} className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.role}
              initial={listIn ? { opacity: 0, x: -20 } : false}
              animate={listIn ? { opacity: 1, x: 0 } : false}
              transition={{ duration: 0.5, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
              className="glass p-8 rounded-xl border-l-4 border-primary"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white">{exp.role}</h3>
                  <p className="text-violet-glow font-semibold">{exp.company}</p>
                </div>
                <span className="text-gray-400 text-sm mt-2 md:mt-0 whitespace-nowrap">{exp.period}</span>
              </div>
              <p className="text-gray-300 mb-4">{exp.description}</p>
              <ul className="grid md:grid-cols-3 gap-4">
                {exp.achievements.map((achievement, i) => (
                  <li key={i} className="text-sm text-gray-400 flex items-start">
                    <span className="text-violet-glow mr-2 shrink-0" aria-hidden>&bull;</span>
                    {achievement}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}