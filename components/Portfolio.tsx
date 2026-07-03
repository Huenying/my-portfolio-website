"use client";

import { useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";

const CATEGORIES = [
  { id: "all", label: "All Projects" },
  { id: "competition", label: "Competition" },
  { id: "data-analysis", label: "Data Analysis" },
  { id: "web-dev", label: "Web Development" },
  { id: "ai-dev", label: "AI Development" },
];

const PROJECTS = [
  {
    id: 1,
    title: "FinTech Innovation Challenge",
    category: "competition",
    description:
      "Led a team of 4 to develop an AI-powered financial literacy platform. Won 2nd place in the university-wide FinTech competition.",
    image: "📊",
    tags: ["Python", "Machine Learning", "Team Leadership"],
    color: "from-violet-500/20 to-purple-500/10",
    borderColor: "border-violet-500/30",
  },
  {
    id: 2,
    title: "HK Housing Market Analysis",
    category: "data-analysis",
    description:
      "Comprehensive analysis of Hong Kong's property market trends using 10+ years of transactional data. Built interactive dashboards for visualization.",
    image: "🏠",
    tags: ["Python", "Pandas", "Tableau", "SQL"],
    color: "from-blue-500/20 to-cyan-500/10",
    borderColor: "border-blue-500/30",
  },
  {
    id: 3,
    title: "E-Commerce Platform",
    category: "web-dev",
    description:
      "Full-stack e-commerce platform with real-time inventory management, payment integration, and responsive design. Built for a local retail business.",
    image: "🛒",
    tags: ["React", "Next.js", "Node.js", "MongoDB"],
    color: "from-emerald-500/20 to-teal-500/10",
    borderColor: "border-emerald-500/30",
  },
  {
    id: 4,
    title: "AI-Powered Chat Assistant",
    category: "ai-dev",
    description:
      "Developed a context-aware chatbot using LLMs for customer service automation. Achieved 85% resolution rate in pilot testing.",
    image: "🤖",
    tags: ["Python", "LangChain", "OpenAI", "FastAPI"],
    color: "from-orange-500/20 to-amber-500/10",
    borderColor: "border-orange-500/30",
  },
  {
    id: 5,
    title: "Data Science Hackathon",
    category: "competition",
    description:
      "Won Best Innovation Award at a 48-hour data science hackathon. Built a predictive model for traffic flow optimization using real-time sensor data.",
    image: "🏆",
    tags: ["Python", "Scikit-learn", "Time Series", "API"],
    color: "from-pink-500/20 to-rose-500/10",
    borderColor: "border-pink-500/30",
  },
  {
    id: 6,
    title: "Customer Churn Prediction",
    category: "data-analysis",
    description:
      "Built a machine learning pipeline to predict customer churn for a telecom company. Achieved 92% accuracy with feature engineering.",
    image: "📈",
    tags: ["Python", "XGBoost", "Feature Engineering", "SHAP"],
    color: "from-indigo-500/20 to-violet-500/10",
    borderColor: "border-indigo-500/30",
  },
  {
    id: 7,
    title: "Portfolio Website Builder",
    category: "web-dev",
    description:
      "A drag-and-drop portfolio builder with customizable templates, real-time preview, and one-click deployment. Used by 200+ students.",
    image: "🌐",
    tags: ["React", "TypeScript", "Tailwind CSS", "Firebase"],
    color: "from-sky-500/20 to-blue-500/10",
    borderColor: "border-sky-500/30",
  },
  {
    id: 8,
    title: "Computer Vision Object Detection",
    category: "ai-dev",
    description:
      "Real-time object detection system using YOLOv8 for warehouse inventory management. Reduced manual counting time by 75%.",
    image: "👁️",
    tags: ["Python", "YOLOv8", "OpenCV", "PyTorch"],
    color: "from-red-500/20 to-rose-500/10",
    borderColor: "border-red-500/30",
  },
];

const OVERLAY_PROJECTS = PROJECTS.slice(0, 4);

function ProjectSlide({
  project,
  index,
  scrollProgress,
}: {
  project: (typeof PROJECTS)[0];
  index: number;
  scrollProgress: any;
}) {
  const progressStart = index / OVERLAY_PROJECTS.length;
  const progressEnd = (index + 1) / OVERLAY_PROJECTS.length;

  const y = useTransform(
    scrollProgress,
    [progressStart, progressEnd],
    ["100%", "0%"]
  );
  const opacity = useTransform(
    scrollProgress,
    [progressStart - 0.1, progressStart, progressEnd],
    [0, 1, 1]
  );
  const scale = useTransform(
    scrollProgress,
    [progressStart, progressEnd],
    [0.8, 1]
  );

  return (
    <motion.div
      style={{ y, opacity, scale }}
      className="sticky top-24 h-[70vh] min-h-[500px] w-full rounded-3xl overflow-hidden"
    >
      <div
        className={`w-full h-full rounded-3xl border ${project.borderColor} ${project.color} bg-white/80 backdrop-blur-sm p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 md:gap-12 shadow-lg`}
      >
        {/* Project image/icon area */}
        <div className="w-full md:w-1/2 h-48 md:h-full flex items-center justify-center">
          <div className="text-[8rem] md:text-[12rem] leading-none select-none">
            {project.image}
          </div>
        </div>

        {/* Project info */}
        <div className="w-full md:w-1/2 space-y-4 md:space-y-6">
          <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium uppercase tracking-wider">
            {CATEGORIES.find((c) => c.id === project.category)?.label}
          </div>
          <h3 className="text-2xl md:text-4xl font-bold text-gray-900">
            {project.title}
          </h3>
          <p className="text-textSecondary text-sm md:text-base leading-relaxed">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-gray-100 rounded-full text-xs font-medium text-gray-600"
              >
                {tag}
              </span>
            ))}
          </div>
          <motion.button
            whileHover={{ x: 5 }}
            className="inline-flex items-center gap-2 text-primary font-medium text-sm group"
          >
            View Project
            <svg
              className="w-4 h-4 transition-transform group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}

export default function Portfolio() {
  const [activeCategory, setActiveCategory] =
    useState<string>("all");
  const sectionRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  const filteredProjects =
    activeCategory === "all"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeCategory);

  // Scroll animation for overlay cards
  const { scrollYProgress } = useScroll({
    target: overlayRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 30,
    damping: 20,
    restDelta: 0.001,
  });

  return (
    <section
      id="portfolio"
      ref={sectionRef}
      className="relative py-24 md:py-32"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/3 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <span className="text-sm uppercase tracking-[0.3em] text-primary font-medium">
            My Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-4">
            Featured Projects
          </h2>
          <p className="text-textSecondary max-w-2xl mx-auto">
            A collection of projects spanning competitions, data analysis, web
            development, and AI — each one a learning journey.
          </p>
        </motion.div>

        {/* Overlapping cards showcase */}
        <div ref={overlayRef} className="relative mb-24" style={{ height: `${OVERLAY_PROJECTS.length * 100}vh` }}>
          <div className="sticky top-0 h-screen flex items-center py-24">
            <div className="w-full space-y-6">
              {OVERLAY_PROJECTS.map((project, index) => (
                <ProjectSlide
                  key={project.id}
                  project={project}
                  index={index}
                  scrollProgress={smoothProgress}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === cat.id
                  ? "bg-primary text-white shadow-lg shadow-primary/25"
                  : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Grid projects */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className={`group rounded-2xl border ${project.borderColor} ${project.color} bg-white/60 backdrop-blur-sm p-6 md:p-8 cursor-pointer transition-shadow duration-300 hover:shadow-xl`}
            >
              <div className="flex items-start justify-between mb-4">
                <span className="text-4xl">{project.image}</span>
                <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                  {CATEGORIES.find((c) => c.id === project.category)?.label}
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-textSecondary text-sm leading-relaxed mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 bg-gray-100/80 rounded-full text-xs font-medium text-gray-500"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
