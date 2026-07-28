'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, Github, MessageCircle } from 'lucide-react';
import { FormEvent, useState } from 'react';
import { siteConfig } from '@/config/site';
import { useInView } from '@/components/useInView';

function buildMailtoHref(formData: FormData) {
  const name = String(formData.get('name') || '').trim();
  const email = String(formData.get('email') || '').trim();
  const message = String(formData.get('message') || '').trim();
  const subject = encodeURIComponent(`Portfolio inquiry${name ? ` from ${name}` : ''}`);
  const body = encodeURIComponent(
    [name && `Name: ${name}`, email && `Email: ${email}`, '', message || 'Hello Rana Tanzeel,']
      .filter(Boolean).join('\n')
  );
  return `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
}

export default function Contact() {
  const { ref: headerRef, inView: headerIn } = useInView();
  const { ref: leftRef, inView: leftIn } = useInView();
  const { ref: rightRef, inView: rightIn } = useInView();
  const [sending, setSending] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSending(true);
    const formData = new FormData(event.currentTarget);
    window.location.href = buildMailtoHref(formData);
    setTimeout(() => setSending(false), 1000);
  };

  return (
    <section id="contact" className="py-20 relative">
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
                <span className="glow-text">Get In Touch</span>
              </h2>
              <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
                Ready to bring your AI project to life? Let&apos;s connect and discuss how I can help.
              </p>
            </motion.div>
          )}
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Contact Form */}
          <div ref={leftRef}>
            {leftIn && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
                className="glass p-8 rounded-xl"
              >
                <form className="space-y-6" onSubmit={handleSubmit} noValidate>
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold mb-2">Name</label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      autoComplete="name"
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-violet-glow transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold mb-2">Email</label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      autoComplete="email"
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-violet-glow transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold mb-2">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-violet-glow resize-none h-32 transition-colors"
                      placeholder="Your message"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={sending}
                    className="btn-primary w-full disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {sending ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              </motion.div>
            )}
          </div>

          {/* Contact Info */}
          <div ref={rightRef}>
            {rightIn && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
                className="space-y-6"
              >
                <a href={`mailto:${siteConfig.email}`} className="glass p-6 rounded-xl flex items-start gap-4 focus-visible:ring-2 focus-visible:ring-violet-400/50 hover:border-white/[0.15] transition-all" aria-label={`Email ${siteConfig.email}`}>
                  <Mail className="text-violet-glow mt-1 shrink-0" size={24} />
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-gray-400 break-all">{siteConfig.email}</p>
                  </div>
                </a>

                <a href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`} className="glass p-6 rounded-xl flex items-start gap-4 focus-visible:ring-2 focus-visible:ring-violet-400/50 hover:border-white/[0.15] transition-all" aria-label={`Phone ${siteConfig.phone}`}>
                  <Phone className="text-violet-glow mt-1 shrink-0" size={24} />
                  <div>
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <p className="text-gray-400">{siteConfig.phone}</p>
                  </div>
                </a>

                <a href={siteConfig.social.whatsapp} target="_blank" rel="noreferrer" className="glass p-6 rounded-xl flex items-start gap-4 focus-visible:ring-2 focus-visible:ring-violet-400/50 hover:border-white/[0.15] transition-all" aria-label="WhatsApp">
                  <MessageCircle className="text-violet-glow mt-1 shrink-0" size={24} />
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
            )}
          </div>
        </div>
      </div>
    </section>
  );
}