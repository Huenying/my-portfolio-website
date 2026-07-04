"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Cards spread out gradually over the first ~3 scrolls
  // At scroll=0: stacked together; at scroll=35%: fully spread in a line
  const card1X = useTransform(scrollYProgress, [0, 0.15, 0.35], ["0px", "-210px", "-420px"]);
  const card2Y = useTransform(scrollYProgress, [0, 0.15, 0.35], ["0px", "-10px", "0px"]);
  const card3X = useTransform(scrollYProgress, [0, 0.15, 0.35], ["0px", "210px", "420px"]);

  const card1Scale = useTransform(scrollYProgress, [0, 0.35], [1, 0.92]);
  const card3Scale = useTransform(scrollYProgress, [0, 0.35], [1, 0.92]);

  const card1Rotate = useTransform(scrollYProgress, [0, 0.35], ["-2deg", "0deg"]);
  const card3Rotate = useTransform(scrollYProgress, [0, 0.35], ["2deg", "0deg"]);

  const card1Z = useTransform(scrollYProgress, [0, 0.35], [30, 10]);
  const card2Z = useTransform(scrollYProgress, [0, 0.35], [20, 10]);
  const card3Z = useTransform(scrollYProgress, [0, 0.35], [10, 10]);

  const opacity = useTransform(scrollYProgress, [0, 0.5, 0.9, 1], [1, 1, 0.6, 0]);

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
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-80"
            style={{ backgroundImage: `url('${process.env.NODE_ENV === "production" ? "/my-portfolio-website/hero-bg.jpg" : "/hero-bg.jpg"}')` }}
          />
        </div>

        <motion.div
          style={{ opacity }}
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
              className="text-sm uppercase tracking-[0.3em] text-white font-medium mb-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Welcome to my portfolio
            </motion.p>
            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-4 text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Hi, I&apos;m{" "}
              <span className="bg-gradient-to-r from-white via-white/80 to-white/60 bg-clip-text text-transparent">
                Cynthia
              </span>
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl text-white max-w-2xl mx-auto font-bold"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Year 3 Double Major in Business Analytics & Computer Science
            </motion.p>
          </motion.div>

          {/* Cards — stacked by default, snap to a line instantly on scroll */}
          <div className="relative h-[340px] md:h-[380px] flex items-center justify-center">
            {/* Card 1 - Portfolio (snaps left) */}
            <motion.div
              style={{ x: card1X, scale: card1Scale, rotate: card1Rotate, zIndex: card1Z }}
              onClick={() => handleCardClick("My Portfolio")}
              className="absolute w-[260px] md:w-[300px] h-[260px] md:h-[300px] rounded-2xl bg-gradient-to-br from-[#3A5A4A] to-[#2E4038] p-6 md:p-8 cursor-pointer shadow-xl hover:shadow-2xl transition-shadow duration-300 flex flex-col justify-between"
            >
              <div className="text-3xl md:text-4xl">🎨</div>
              <div>
                <h3 className="text-white text-xl md:text-2xl font-bold mb-2">My Portfolio</h3>
                <p className="text-white/80 text-sm md:text-base">
                  Explore my projects across competitions, data analysis, web development, and AI.
                </p>
                <p className="text-white/60 text-xs mt-3 font-medium uppercase tracking-wider">View My Work →</p>
              </div>
            </motion.div>

            {/* Card 2 - About Me (stays centered) */}
            <motion.div
              style={{ y: card2Y, zIndex: card2Z }}
              onClick={() => handleCardClick("About Me")}
              className="absolute w-[260px] md:w-[300px] h-[260px] md:h-[300px] rounded-2xl bg-gradient-to-br from-[#6B8F7B] to-[#B2C9B0] p-6 md:p-8 cursor-pointer shadow-xl hover:shadow-2xl transition-shadow duration-300 flex flex-col justify-between"
            >
              <div className="text-3xl md:text-4xl">👩‍💻</div>
              <div>
                <h3 className="text-white text-xl md:text-2xl font-bold mb-2">About Me</h3>
                <p className="text-white/80 text-sm md:text-base">
                  Business Analytics & Computer Science double major with a passion for tech innovation.
                </p>
                <p className="text-white/60 text-xs mt-3 font-medium uppercase tracking-wider">Get to Know Me →</p>
              </div>
            </motion.div>

            {/* Card 3 - Contact (snaps right) */}
            <motion.div
              style={{ x: card3X, scale: card3Scale, rotate: card3Rotate, zIndex: card3Z }}
              onClick={() => handleCardClick("Contact Me")}
              className="absolute w-[260px] md:w-[300px] h-[260px] md:h-[300px] rounded-2xl bg-gradient-to-br from-[#D99A3C] to-[#C4882E] p-6 md:p-8 cursor-pointer shadow-xl hover:shadow-2xl transition-shadow duration-300 flex flex-col justify-between"
            >
              <div className="text-3xl md:text-4xl">📬</div>
              <div>
                <h3 className="text-white text-xl md:text-2xl font-bold mb-2">Contact Me</h3>
                <p className="text-white/80 text-sm md:text-base">
                  Have a project in mind? I&apos;d love to hear from you. Reach out anytime!
                </p>
                <p className="text-white/60 text-xs mt-3 font-medium uppercase tracking-wider">Let&apos;s Connect →</p>
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
            className="flex flex-col items-center gap-2 text-white/60"
          >
            <span className="text-xs tracking-widest uppercase">Scroll</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
