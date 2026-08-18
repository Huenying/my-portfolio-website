"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const EXPERIENCES = [
  {
    year: "2024 - Present",
    title: "BBA(BA) & BSc(CS)",
    company: "The University of Hong Kong",
    description:
      "Double majoring in Business Analytics and Computer Science. Dean's List recipient.",
    icon: "🎓",
  },
  {
    year: "2025",
    title: "Data Science Intern",
    company: "Internship",
    description:
      "Built ML models for customer segmentation and predictive analytics.",
    icon: "💼",
  },
  {
    year: "2024",
    title: "Exchange Student",
    company: "Copenhagen Business School",
    description:
      "Semester exchange studying business analytics and international business.",
    icon: "🌍",
  },
  {
    year: "2023",
    title: "Web Development Intern",
    company: "Internship",
    description:
      "Designed and developed responsive websites and web apps with React and Next.js.",
    icon: "🖥️",
  },
];

const INTERESTS = [
  { icon: "🤖", name: "Machine Learning" },
  { icon: "📊", name: "Data Science" },
  { icon: "🗄️", name: "Data Engineering" },
  { icon: "🌐", name: "Web Development" },
];

/** Amber pushpin decoration (CSS/SVG) — sits on a card's top edge. */
function Pin({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={`w-6 h-6 drop-shadow-sm ${className}`}>
      <path
        d="M12 2C9 2 6.5 4.3 6.5 7.7c0 2.4 1.4 4.3 2.8 5.2V22h5.4v-9.1c1.4-.9 2.8-2.8 2.8-5.2C17.5 4.3 15 2 12 2z"
        fill="#D99A3C"
      />
      <ellipse cx="12" cy="7.6" rx="2.2" ry="2.6" fill="#F4F1EA" opacity="0.85" />
    </svg>
  );
}

/** Amber paperclip decoration — sits on the photo frame's top edge. */
function Paperclip({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="#D99A3C"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`w-6 h-6 drop-shadow-sm ${className}`}
    >
      <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48" />
    </svg>
  );
}

export default function About() {
  const [unlocked, setUnlocked] = useState(false);

  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
          <p className="text-textSecondary max-w-2xl mx-auto">
            A passionate double-major student who loves bridging the gap between
            business strategy and technical implementation.
          </p>
        </motion.div>

        {/* Computer screen — "login to unlock" then reveal the profile */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="w-full max-w-5xl mx-auto"
        >
          {/* Monitor body */}
          <div className="relative rounded-[2rem] p-3 sm:p-5 bg-gradient-to-br from-[#2E4038] to-[#16241F] shadow-2xl ring-1 ring-white/10">
            {/* Webcam dot */}
            <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-black/50 ring-1 ring-white/10" />

            {/* Screen — fixed normal monitor height, content scrolls inside */}
            <div className="relative h-[520px] sm:h-[560px] rounded-xl bg-[#0B1410] border border-white/10 p-2 sm:p-3 shadow-inner">
              <AnimatePresence mode="wait">
                {unlocked ? (
                  <motion.div
                    key="content"
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    className="relative h-full rounded-lg bg-[#F4F1EA] p-6 sm:p-10 overflow-y-auto"
                  >
                    {/* Top: photo space (left) + 自述 & interests (right) */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
                      {/* Photo space — paperclip */}
                      <div className="lg:col-span-5">
                        <div className="relative aspect-[4/5] w-full max-w-[320px] mx-auto rounded-2xl border-2 border-dashed border-primary/30 bg-muted/40 flex items-center justify-center overflow-hidden">
                          <Paperclip className="absolute -top-2.5 left-8 -rotate-12 z-10" />
                          {/* Replace this placeholder with the real photo when provided:
                              <Image
                                src="/my-photo.jpg"
                                alt="Cynthia"
                                fill
                                className="object-cover"
                              />
                          */}
                          <div className="flex flex-col items-center gap-2 text-textSecondary/70 select-none">
                            <span className="text-4xl">📷</span>
                            <p className="text-xs font-medium">My photo coming soon</p>
                          </div>
                        </div>
                      </div>

                      {/* Right: 自述 card + areas of interest card */}
                      <div className="lg:col-span-7 space-y-6">
                        {/* 自述 card — pin */}
                        <div className="relative bg-white rounded-2xl p-7 shadow-sm border border-gray-100">
                          <Pin className="absolute -top-3 right-8 z-10 rotate-6" />
                          <div className="flex items-center gap-3 mb-5">
                            <span className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center text-xl flex-shrink-0">
                              👩‍💻
                            </span>
                            <div>
                              <h3 className="text-lg font-bold text-gray-900 leading-tight">
                                Cynthia
                              </h3>
                              <p className="text-sm font-medium text-primary">
                                BBA(BA)&amp;BSc(CS) • Year 3 • HKU
                              </p>
                            </div>
                          </div>
                          <p className="text-textSecondary leading-relaxed">
                            I&apos;m a Year 3 undergraduate at the University of
                            Hong Kong, pursuing a double major in Business
                            Analytics and Computer Science. My passion lies at the
                            intersection of data-driven decision-making and
                            software engineering.
                          </p>
                          <br />
                          <p className="text-textSecondary leading-relaxed">
                            From analyzing complex datasets to building full-stack
                            web applications, I thrive on turning ideas into
                            impactful solutions. I&apos;m particularly fascinated by
                            how AI and machine learning can transform traditional
                            business processes.
                          </p>
                        </div>

                        {/* Areas of interest — icon + title per card, pin */}
                        <div className="relative bg-white rounded-2xl p-7 shadow-sm border border-gray-100">
                          <Pin className="absolute -top-3 left-8 z-10 -rotate-6" />
                          <h3 className="text-base font-bold text-gray-900 mb-5">
                            Areas of Interest
                          </h3>
                          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                            {INTERESTS.map((interest) => (
                              <motion.div
                                key={interest.name}
                                whileHover={{ y: -4 }}
                                whileTap={{ scale: 0.97 }}
                                className="flex flex-col items-center gap-2.5 rounded-xl border border-gray-100 bg-gray-50/70 px-2 py-4 text-center hover:border-accent hover:bg-white transition-colors"
                              >
                                <span className="text-3xl">{interest.icon}</span>
                                <span className="text-[11px] font-semibold text-gray-800 leading-tight">
                                  {interest.name}
                                </span>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Experience timeline — left to right */}
                    <div className="mt-12">
                      <h3 className="text-base font-bold text-gray-900 text-center">
                        Experience
                      </h3>
                      <p className="text-xs text-textSecondary text-center mt-1 mb-9">
                        My journey so far — from left to right
                      </p>
                      <div className="relative">
                        {/* The horizontal timeline line */}
                        <div className="hidden md:block absolute top-[7px] left-8 right-8 h-0.5 bg-primary/15" />
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-5">
                          {EXPERIENCES.map((exp, index) => (
                            <motion.div
                              key={index}
                              initial={{ opacity: 0, y: 24 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true, margin: "-40px" }}
                              transition={{ delay: index * 0.08, duration: 0.5 }}
                              className="relative"
                            >
                              {/* Timeline node on the line */}
                              <span className="relative z-10 mx-auto flex items-center justify-center w-4 h-4 rounded-full bg-accent ring-4 ring-[#F4F1EA] shadow">
                                <span className="w-1.5 h-1.5 rounded-full bg-white" />
                              </span>
                              {/* Card */}
                              <div className="mt-4 bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                <span className="text-[11px] font-semibold text-primary uppercase tracking-wider">
                                  {exp.year}
                                </span>
                                <div className="flex items-start gap-2 mt-1.5">
                                  <span className="text-xl flex-shrink-0">
                                    {exp.icon}
                                  </span>
                                  <div className="min-w-0">
                                    <h4 className="text-sm font-bold text-gray-900 leading-snug">
                                      {exp.title}
                                    </h4>
                                    <p className="text-xs font-medium text-secondary">
                                      {exp.company}
                                    </p>
                                  </div>
                                </div>
                                <p className="text-textSecondary text-xs mt-2 leading-relaxed">
                                  {exp.description}
                                </p>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>

                  </motion.div>
                ) : (
                  <motion.div
                    key="login"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.3 }}
                    className="h-full rounded-lg overflow-hidden"
                  >
                    <div
                      className="relative w-full h-full flex flex-col items-center justify-center gap-3 p-8 text-center select-none"
                      style={{
                        background:
                          "linear-gradient(160deg, #16241F 0%, #2E4038 50%, #3A5A4A 100%)",
                      }}
                    >
                      {/* Soft glow behind the avatar */}
                      <div className="absolute left-1/2 top-[16%] -translate-x-1/2 w-64 h-64 bg-primary-light/15 rounded-full blur-3xl pointer-events-none" />

                      {/* Avatar */}
                      <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-[#F4F1EA] to-[#B2C9B0] ring-4 ring-white/15 flex items-center justify-center text-4xl shadow-xl">
                        👩‍💻
                      </div>
                      <p className="relative text-white font-bold text-lg tracking-wide">
                        Cynthia
                      </p>
                      <p className="relative text-white/45 text-xs font-mono uppercase tracking-widest">
                        login to unlock
                      </p>

                      {/* Login button */}
                      <motion.button
                        onClick={() => setUnlocked(true)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="relative mt-2 flex items-center gap-2.5 px-7 py-2.5 rounded-full bg-[#F4F1EA] text-[#1A2D28] font-semibold text-sm shadow-lg shadow-black/25 hover:bg-white transition-colors"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                        Login
                        <span aria-hidden>→</span>
                      </motion.button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Monitor stand */}
          <div className="mx-auto w-24 h-2.5 bg-[#16241F] rounded-b-lg" />
          <div className="mx-auto w-40 h-3 bg-[#16241F] rounded-b-xl" />

          {/* Helper caption */}
          <p className="mt-5 text-center text-sm text-textSecondary">
            Click{" "}
            <span className="font-semibold text-primary">Login</span> to reveal
            my 自述 &amp; areas of interest, then scroll down to review the
            experience timeline.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
