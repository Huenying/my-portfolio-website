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

  // Card transforms - spread into a line on scroll
  // Card 1 moves far left, Card 2 stays centered, Card 3 moves far right
  const card1X = useTransform(
    scrollYProgress,
    [0, 0.6, 0.9],
    ["0px", "-280px", "-420px"]
  );
  const card2Y = useTransform(
    scrollYProgress,
    [0, 0.6, 1],
    ["0px", "-20px", "0px"]
  );
  const card3X = useTransform(
    scrollYProgress,
    [0, 0.6, 0.9],
    ["0px", "280px", "420px"]
  );

  const card1Scale = useTransform(scrollYProgress, [0, 0.7], [1, 0.92]);
  const card3Scale = useTransform(scrollYProgress, [0, 0.7], [1, 0.92]);

  const card1Rotate = useTransform(scrollYProgress, [0, 1], ["-2deg", "0deg"]);
  const card2Rotate = useTransform(scrollYProgress, [0, 1], ["0deg", "0deg"]);
  const card3Rotate = useTransform(scrollYProgress, [0, 1], ["2deg", "0deg"]);

  const card1Z = useTransform(scrollYProgress, [0, 0.3, 0.7], [30, 20, 10]);
  const card2Z = useTransform(scrollYProgress, [0, 0.3, 0.7], [20, 15, 10]);
  const card3Z = useTransform(scrollYProgress, [0, 0.3, 0.7], [10, 10, 10]);

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.7, 0.9, 1],
    [1, 1, 0.6, 0]
  );
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.93]);

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
    <section id="hero" ref={containerRef} className="relative min-h-[200vh]">
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

          {/* Cards - stacked by default, spread into a line on scroll */}
          <div className="relative h-[340px] md:h-[380px] flex items-center justify-center">
            {/* Card 1 - Portfolio (moves left) */}
            <motion.div
              style={{
                x: card1X,
                scale: card1Scale,
                rotate: card1Rotate,
                zIndex: card1Z,
              }}
              onClick={() => handleCardClick("My Portfolio")}
              className="absolute w-[260px] md:w-[300px] h-[260px] md:h-[300px] rounded-2xl bg-gradient-to-br from-violet-500 to-purple-600 p-6 md:p-8 cursor-pointer shadow-xl hover:shadow-2xl transition-shadow duration-300 flex flex-col justify-between"
            >
              <div className="text-3xl md:text-4xl">🎨</div>
              <div>
                <h3 className="text-white text-xl md:text-2xl font-bold mb-2">
                  My Portfolio
                </h3>
                <p className="text-white/80 text-sm md:text-base">
                  Explore my projects across competitions, data analysis, web
                  development, and AI.
                </p>
                <p className="text-white/60 text-xs mt-3 font-medium uppercase tracking-wider">
                  View My Work →
                </p>
              </div>
            </motion.div>

            {/* Card 2 - About Me (stays centered, slight float) */}
            <motion.div
              style={{
                y: card2Y,
                rotate: card2Rotate,
                zIndex: card2Z,
              }}
              onClick={() => handleCardClick("About Me")}
              className="absolute w-[260px] md:w-[300px] h-[260px] md:h-[300px] rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-500 p-6 md:p-8 cursor-pointer shadow-xl hover:shadow-2xl transition-shadow duration-300 flex flex-col justify-between"
            >
              <div className="text-3xl md:text-4xl">👩‍💻</div>
              <div>
                <h3 className="text-white text-xl md:text-2xl font-bold mb-2">
                  About Me
                </h3>
                <p className="text-white/80 text-sm md:text-base">
                  Business Analytics & Computer Science double major with a
                  passion for tech innovation.
                </p>
                <p className="text-white/60 text-xs mt-3 font-medium uppercase tracking-wider">
                  Get to Know Me →
                </p>
              </div>
            </motion.div>

            {/* Card 3 - Contact (moves right) */}
            <motion.div
              style={{
                x: card3X,
                scale: card3Scale,
                rotate: card3Rotate,
                zIndex: card3Z,
              }}
              onClick={() => handleCardClick("Contact Me")}
              className="absolute w-[260px] md:w-[300px] h-[260px] md:h-[300px] rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 p-6 md:p-8 cursor-pointer shadow-xl hover:shadow-2xl transition-shadow duration-300 flex flex-col justify-between"
            >
              <div className="text-3xl md:text-4xl">📬</div>
              <div>
                <h3 className="text-white text-xl md:text-2xl font-bold mb-2">
                  Contact Me
                </h3>
                <p className="text-white/80 text-sm md:text-base">
                  Have a project in mind? I&apos;d love to hear from you. Reach
                  out anytime!
                </p>
                <p className="text-white/60 text-xs mt-3 font-medium uppercase tracking-wider">
                  Let&apos;s Connect →
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
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
