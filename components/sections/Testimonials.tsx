'use client';

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'James Mitchell',
      role: 'CTO, DataFlow AI (Austin, TX)',
      text: 'Rana built a custom AI agent pipeline that automated our entire data enrichment workflow. The precision and reliability exceeded expectations. He communicated seamlessly across time zones and delivered ahead of schedule.',
      rating: 5,
    },
    {
      name: 'Sofia Chen',
      role: 'VP of Engineering, FinEdge Technologies (London, UK)',
      text: 'We hired Rana for a complex RAG implementation. His deep understanding of vector databases and retrieval optimization made a noticeable difference in our search accuracy. A true expert who delivers enterprise-grade work.',
      rating: 5,
    },
    {
      name: 'Marcus Weber',
      role: 'Founder, BuildSmart GmbH (Berlin, Germany)',
      text: 'Tanzeel developed an AI-powered customer support chatbot that handles 70% of our inquiries autonomously. Setup was smooth, documentation was clear, and the results were immediate. I highly recommend his services.',
      rating: 5,
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
            <span className="glow-text">Client Testimonials</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass p-8 rounded-xl"
            >
              <div className="flex gap-1 mb-4">
                {Array(testimonial.rating).fill(0).map((_, i) => (
                  <Star key={i} size={18} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-gray-300 mb-6 italic">"{testimonial.text}"</p>

              <div>
                <p className="font-semibold text-white">{testimonial.name}</p>
                <p className="text-sm text-gray-400">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
