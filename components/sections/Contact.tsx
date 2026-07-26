'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, Github, MessageCircle } from 'lucide-react';
import { FormEvent } from 'react';
import { siteConfig } from '@/config/site';

function buildMailtoHref(formData: FormData) {
  const name = String(formData.get('name') || '').trim();
  const email = String(formData.get('email') || '').trim();
  const message = String(formData.get('message') || '').trim();
  const subject = encodeURIComponent(`Portfolio inquiry${name ? ` from ${name}` : ''}`);
  const body = encodeURIComponent([
    name && `Name: ${name}`,
    email && `Email: ${email}`,
    '',
    message || 'Hello Rana Tanzeel,',
  ].filter(Boolean).join('\n'));

  return `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
}

export default function Contact() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    window.location.href = buildMailtoHref(formData);
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="glow-text">Get In Touch</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Ready to bring your AI project to life? Let's connect and discuss how I can help.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass p-8 rounded-xl"
          >
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-semibold mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  autoComplete="name"
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-violet-glow"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  autoComplete="email"
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-violet-glow"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Message</label>
                <textarea
                  name="message"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-violet-glow resize-none h-32"
                  placeholder="Your message"
                />
              </div>
              <button type="submit" className="btn-primary w-full">Send Message</button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <a href={`mailto:${siteConfig.email}`} className="glass p-6 rounded-xl flex items-start gap-4 focus-visible:ring-2 focus-visible:ring-violet-400/50">
              <Mail className="text-violet-glow mt-1" size={24} />
              <div>
                <h3 className="font-semibold mb-1">Email</h3>
                <p className="text-gray-400">{siteConfig.email}</p>
              </div>
            </a>

            <a href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`} className="glass p-6 rounded-xl flex items-start gap-4 focus-visible:ring-2 focus-visible:ring-violet-400/50">
              <Phone className="text-violet-glow mt-1" size={24} />
              <div>
                <h3 className="font-semibold mb-1">Phone</h3>
                <p className="text-gray-400">{siteConfig.phone}</p>
              </div>
            </a>

            <a href={siteConfig.social.whatsapp} target="_blank" rel="noreferrer" className="glass p-6 rounded-xl flex items-start gap-4 focus-visible:ring-2 focus-visible:ring-violet-400/50">
              <MessageCircle className="text-violet-glow mt-1" size={24} />
              <div>
                <h3 className="font-semibold mb-1">WhatsApp</h3>
                <p className="text-gray-400">{siteConfig.phone}</p>
              </div>
            </a>

            <div className="flex gap-4 pt-4">
              <motion.a
                whileHover={{ scale: 1.1 }}
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn profile"
                className="p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-all"
              >
                <Linkedin size={24} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                href={siteConfig.social.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub profile"
                className="p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-all"
              >
                <Github size={24} />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
