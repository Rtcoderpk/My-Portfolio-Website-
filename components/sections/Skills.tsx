'use client';

import { motion } from 'framer-motion';

export default function Skills() {
  const skillCategories = [
    {
      title: 'AI & ML',
      skills: ['LLMs', 'Claude API', 'OpenAI', 'Langchain', 'RAG', 'Fine-tuning'],
    },
    {
      title: 'Backend',
      skills: ['Node.js', 'Python', 'FastAPI', 'Express.js', 'PostgreSQL', 'MongoDB'],
    },
    {
      title: 'Frontend',
      skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    },
    {
      title: 'Tools & Platforms',
      skills: ['Docker', 'AWS', 'Vercel', 'GitHub', 'Zapier', 'Make.com'],
    },
  ];

  return (
    <section className="py-20 relative">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="glow-text">Technical Skills</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              viewport={{ once: true }}
              className="glass p-8 rounded-xl"
            >
              <h3 className="text-xl font-bold text-cyan-400 mb-6">{category.title}</h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, index) => (
                  <motion.span
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="px-4 py-2 bg-gradient-to-r from-purple-600/30 to-blue-600/30 border border-purple-500/50 rounded-full text-sm text-gray-200 hover:border-purple-500 transition-colors"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
