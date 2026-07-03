"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const CARD_DATA = [
  {
    title: "My Portfolio",
    subtitle: "View My Work",
    description:
      "Explore my projects across competitions, data analysis, web development, and AI.",
    color: "from-violet-500 to-purple-600",
    icon: "🎨",
  },
  {
    title: "About Me",
    subtitle: "Get to Know Me",
    description:
      "Business Analytics & Computer Science double major with a passion for tech innovation.",
    color: "from-cyan-400 to-blue-500",
    icon: "👩‍💻",
  },
  {
    title: "Contact Me",
    subtitle: "Let's Connect",
    description:
      "Have a project in mind? I'd love to hear from you. Reach out anytime!",
    color: "from-amber-400 to-orange-500",
    icon: "📬",
  },
];

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Card transforms based on scroll progress
  const card1X = useTransform(scrollYProgress, [0, 0.6, 1], ["0%", "-20%", "-35%"]);
  const card2Y = useTransform(scrollYProgress, [0, 0.8, 1], ["0%", "-5%", "0%"]);
  const card3X = useTransform(scrollYProgress, [0, 0.6, 1], ["0%", "20%", "35%"]);

  const card1Scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.95, 0.85]);
  const card3Scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.95, 0.85]);

  const card1Rotate = useTransform(scrollYProgress, [0, 1], ["-3deg", "0deg"]);
  const card2Rotate = useTransform(scrollYProgress, [0, 1], ["2deg", "0deg"]);
  const card3Rotate = useTransform(scrollYProgress, [0, 1], ["-1.5deg", "0deg"]);

  const card1Z = useTransform(scrollYProgress, [0, 0.3, 1], [30, 20, 0]);
  const card2Z = useTransform(scrollYProgress, [0, 0.3, 1], [20, 10, 0]);
  const card3Z = useTransform(scrollYProgress, [0, 0.3, 1], [10, 5, 0]);

  const opacity = useTransform(scrollYProgress, [0, 0.8, 0.95, 1], [1, 1, 0.8, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);

  const handleCardClick = (title: string) => {
    const sectionMap: Record<string, string> = {
      "My Portfolio": "portfolio",
      "About Me": "about",
      "Contact Me": "contact",
    };
    const id = sectionMap[title];
    if (id) {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-[200vh]"
    >
      {/* Sticky content container */}
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden">
        {/* Background gradient orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute -top-40 -left-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
            animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 180] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute -bottom-40 -right-40 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"
            animate={{ scale: [1.2, 1, 1.2], rotate: [180, 90, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
        </div>

        <motion.div
          style={{ scale: heroScale, opacity }}
          className="relative z-10 w-full max-w-6xl mx-auto px-6"
        >
          {/* Greeting */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-center mb-12"
          >
            <motion.p
              className="text-sm uppercase tracking-[0.3em] text-primary font-medium mb-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Welcome to my portfolio
            </motion.p>
            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Hi, I&apos;m{" "}
              <span className="bg-gradient-to-r from-primary via-primary-light to-secondary bg-clip-text text-transparent">
                Cynthia
              </span>
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl text-textSecondary max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Year 3 Double Major in Business Analytics & Computer Science
            </motion.p>
          </motion.div>

          {/* Cards - stacked by default, spread on scroll */}
          <div className="relative h-[320px] md:h-[360px] flex items-center justify-center">
            {/* Card 1 - Portfolio */}
            <motion.div
              style={{
                x: card1X,
                scale: card1Scale,
                rotate: card1Rotate,
                zIndex: card1Z,
              }}
              onClick={() => handleCardClick("My Portfolio")}
              className={`absolute w-[280px] md:w-[320px] h-[280px] md:h-[320px] rounded-2xl bg-gradient-to-br ${CARD_DATA[0].color} p-6 md:p-8 cursor-pointer shadow-xl hover:shadow-2xl transition-shadow duration-300 flex flex-col justify-between`}
            >
              <div className="text-3xl md:text-4xl">{CARD_DATA[0].icon}</div>
              <div>
                <h3 className="text-white text-xl md:text-2xl font-bold mb-2">
                  {CARD_DATA[0].title}
                </h3>
                <p className="text-white/80 text-sm md:text-base">
                  {CARD_DATA[0].description}
                </p>
                <p className="text-white/60 text-xs mt-3 font-medium uppercase tracking-wider">
                  {CARD_DATA[0].subtitle} →
                </p>
              </div>
            </motion.div>

            {/* Card 2 - About Me */}
            <motion.div
              style={{
                y: card2Y,
                rotate: card2Rotate,
                zIndex: card2Z,
              }}
              onClick={() => handleCardClick("About Me")}
              className={`absolute w-[280px] md:w-[320px] h-[280px] md:h-[320px] rounded-2xl bg-gradient-to-br ${CARD_DATA[1].color} p-6 md:p-8 cursor-pointer shadow-xl hover:shadow-2xl transition-shadow duration-300 flex flex-col justify-between`}
            >
              <div className="text-3xl md:text-4xl">{CARD_DATA[1].icon}</div>
              <div>
                <h3 className="text-white text-xl md:text-2xl font-bold mb-2">
                  {CARD_DATA[1].title}
                </h3>
                <p className="text-white/80 text-sm md:text-base">
                  {CARD_DATA[1].description}
                </p>
                <p className="text-white/60 text-xs mt-3 font-medium uppercase tracking-wider">
                  {CARD_DATA[1].subtitle} →
                </p>
              </div>
            </motion.div>

            {/* Card 3 - Contact */}
            <motion.div
              style={{
                x: card3X,
                scale: card3Scale,
                rotate: card3Rotate,
                zIndex: card3Z,
              }}
              onClick={() => handleCardClick("Contact Me")}
              className={`absolute w-[280px] md:w-[320px] h-[280px] md:h-[320px] rounded-2xl bg-gradient-to-br ${CARD_DATA[2].color} p-6 md:p-8 cursor-pointer shadow-xl hover:shadow-2xl transition-shadow duration-300 flex flex-col justify-between`}
            >
              <div className="text-3xl md:text-4xl">{CARD_DATA[2].icon}</div>
              <div>
                <h3 className="text-white text-xl md:text-2xl font-bold mb-2">
                  {CARD_DATA[2].title}
                </h3>
                <p className="text-white/80 text-sm md:text-base">
                  {CARD_DATA[2].description}
                </p>
                <p className="text-white/60 text-xs mt-3 font-medium uppercase tracking-wider">
                  {CARD_DATA[2].subtitle} →
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2 text-textSecondary"
          >
            <span className="text-xs tracking-widest uppercase">Scroll</span>
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
