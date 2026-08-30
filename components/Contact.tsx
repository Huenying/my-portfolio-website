"use client";

import { motion } from "framer-motion";

const CONTACTS = [
  {
    icon: "📧",
    title: "Email",
    value: "cynthia.chy680@gmail.com",
    link: "mailto:cynthia.chy680@gmail.com",
  },
  {
    icon: "📍",
    title: "Location",
    value: "Hong Kong",
  },
  {
    icon: "🐙",
    title: "GitHub",
    value: "github.com/Huenying",
    link: "https://github.com/Huenying",
  },
];

export default function Contact() {
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h2>
          <p className="text-textSecondary max-w-2xl mx-auto">
            Seeking AI &amp; data engineering roles — I&apos;d love to connect and talk
            about how I can contribute to your team.
          </p>
        </motion.div>

        {/* Contact cards — one row of three */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {CONTACTS.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              whileHover={{ y: -6 }}
              className="group relative bg-white rounded-2xl p-6 shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg hover:border-primary/20 transition-all duration-300"
            >
              {/* Top accent bar */}
              <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-primary to-accent opacity-70" />

              <div className="flex items-start gap-4">
                <span className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center text-xl flex-shrink-0 group-hover:scale-110 group-hover:bg-primary/15 transition-all duration-300">
                  {item.icon}
                </span>
                <div className="min-w-0">
                  <p className="text-[11px] uppercase tracking-[0.2em] text-textSecondary font-medium mb-1">
                    {item.title}
                  </p>
                  {item.link ? (
                    <a
                      href={item.link}
                      target={
                        item.link.startsWith("http") ? "_blank" : undefined
                      }
                      rel="noopener noreferrer"
                      className="block font-semibold text-gray-900 hover:text-primary transition-colors truncate"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="font-semibold text-gray-900">{item.value}</p>
                  )}
                </div>
              </div>

              {/* Hover arrow */}
              <span className="absolute bottom-4 right-4 text-primary opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7 17L17 7M17 7H7m10 0v10"
                  />
                </svg>
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}