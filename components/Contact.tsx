"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    await new Promise((r) => setTimeout(r, 1000));
    setSubmitted(true);
    formRef.current?.reset();
  };

  return (
    <section id="contact" className="relative py-24 md:py-32">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 right-0 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <span className="text-sm uppercase tracking-[0.3em] text-primary font-medium">
            Get in Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-4">
            Let&apos;s Work Together
          </h2>
          <p className="text-textSecondary max-w-2xl mx-auto">
            Have a project, question, or just want to say hi? Drop me a message
            and I&apos;ll get back to you as soon as possible.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 max-w-5xl mx-auto">
          {/* Contact info cards */}
          <div className="space-y-6">
            {[
              {
                icon: "📧",
                title: "Email",
                value: "cynthia@connect.hku.hk",
                link: "mailto:cynthia@connect.hku.hk",
              },
              {
                icon: "📍",
                title: "Location",
                value: "Hong Kong",
              },
              {
                icon: "🔗",
                title: "LinkedIn",
                value: "linkedin.com/in/cynthia-hku",
                link: "#",
              },
              {
                icon: "🐙",
                title: "GitHub",
                value: "github.com/Huenying",
                link: "https://github.com/Huenying",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ x: 4 }}
                className="flex items-center gap-4 bg-white rounded-xl p-5 shadow-sm border border-gray-100"
              >
                <span className="text-2xl">{item.icon}</span>
                <div>
                  <p className="text-sm text-textSecondary">{item.title}</p>
                  {item.link ? (
                    <a
                      href={item.link}
                      target={item.link.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="font-medium text-gray-900 hover:text-primary transition-colors"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="font-medium text-gray-900">{item.value}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 h-full flex flex-col items-center justify-center text-center"
              >
                <div className="text-6xl mb-4">🎉</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Message Sent!
                </h3>
                <p className="text-textSecondary mb-6">
                  Thanks for reaching out. I&apos;ll get back to you shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 bg-primary text-white rounded-full text-sm font-medium hover:bg-primary-dark transition-colors"
                >
                  Send Another
                </button>
              </motion.div>
            ) : (
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 space-y-5"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-1.5"
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-gray-50/50 focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1.5"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-gray-50/50 focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 mb-1.5"
                  >
                    Subject
                  </label>
                  <input
                    id="subject"
                    type="text"
                    required
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-gray-50/50 focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm"
                    placeholder="What's this about?"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1.5"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-gray-50/50 focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-xl font-medium text-sm hover:opacity-90 transition-opacity shadow-lg shadow-primary/20"
                >
                  Send Message
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
