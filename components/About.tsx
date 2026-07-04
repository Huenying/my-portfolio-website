"use client";

import { motion } from "framer-motion";

const EXPERIENCES = [
  {
    year: "2024 - Present",
    title: "Year 3 Undergraduate",
    company: "The University of Hong Kong",
    description:
      "Double majoring in Business Analytics and Computer Science. Dean's List recipient.",
    icon: "🎓",
  },
  {
    year: "2025",
    title: "Data Science Intern",
    company: "Tech Startup",
    description:
      "Built ML models for customer segmentation and predictive analytics. Reduced churn by 15%.",
    icon: "💼",
  },
  {
    year: "2024",
    title: "Web Development Freelancer",
    company: "Self-employed",
    description:
      "Designed and developed responsive websites for 5+ local small businesses using React and Next.js.",
    icon: "🖥️",
  },
  {
    year: "2023 - 2024",
    title: "Teaching Assistant",
    company: "HKU Computer Science Department",
    description:
      "TA for introductory programming courses. Led tutorials and graded assignments for 100+ students.",
    icon: "📚",
  },
];

const SKILLS = [
  { name: "Python", level: 90, color: "from-[#3A5A4A] to-[#6B8F7B]" },
  { name: "TypeScript", level: 85, color: "from-[#6B8F7B] to-[#B2C9B0]" },
  { name: "React / Next.js", level: 85, color: "from-[#3A5A4A] to-[#2E4038]" },
  { name: "SQL", level: 80, color: "from-[#D99A3C] to-[#C4882E]" },
  { name: "Machine Learning", level: 75, color: "from-[#6B8F7B] to-[#3A5A4A]" },
  { name: "Data Visualization", level: 80, color: "from-[#B2C9B0] to-[#6B8F7B]" },
  { name: "Tailwind CSS", level: 85, color: "from-[#3A5A4A] to-[#B2C9B0]" },
  { name: "Git / GitHub", level: 80, color: "from-gray-500 to-gray-700" },
];

function SkillBar({
  skill,
  index,
}: {
  skill: (typeof SKILLS)[0];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.5 }}
      className="space-y-1.5"
    >
      <div className="flex justify-between text-sm">
        <span className="font-medium text-gray-700">{skill.name}</span>
        <span className="text-textSecondary">{skill.level}%</span>
      </div>
      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.08 + 0.3, duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className={`h-full rounded-full bg-gradient-to-r ${skill.color}`}
        />
      </div>
    </motion.div>
  );
}

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-32 bg-muted/50">
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
            About Me
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-4">
            Crafting Code, <br className="hidden md:block" />
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Creating Impact
            </span>
          </h2>
          <p className="text-textSecondary max-w-2xl mx-auto">
            A passionate double-major student who loves bridging the gap between
            business strategy and technical implementation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left column - Bio & Experience */}
          <div className="space-y-10">
            {/* Bio */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white text-2xl font-bold">
                  C
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Cynthia</h3>
                  <p className="text-textSecondary text-sm">
                    BBA(BA)&BSc(CS) • Year 3 • HKU
                  </p>
                </div>
              </div>
              <p className="text-textSecondary leading-relaxed">
                I&apos;m a Year 3 undergraduate at the University of Hong Kong, pursuing
                a double major in Business Analytics and Computer Science. My
                passion lies at the intersection of data-driven decision-making and
                software engineering.
              </p>
              <br />
              <p className="text-textSecondary leading-relaxed">
                From analyzing complex datasets to building full-stack web
                applications, I thrive on turning ideas into impactful solutions.
                I&apos;m particularly fascinated by how AI and machine learning can
                transform traditional business processes.
              </p>
            </motion.div>

            {/* Experience Timeline */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-gray-900 px-1">
                Experience
              </h3>
              {EXPERIENCES.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="relative bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <span className="text-2xl flex-shrink-0">{exp.icon}</span>
                    <div>
                      <span className="text-xs font-medium text-primary uppercase tracking-wider">
                        {exp.year}
                      </span>
                      <h4 className="text-base font-bold text-gray-900 mt-0.5">
                        {exp.title}
                      </h4>
                      <p className="text-sm text-primary font-medium">
                        {exp.company}
                      </p>
                      <p className="text-textSecondary text-sm mt-1">
                        {exp.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right column - Skills */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 h-fit sticky top-28"
          >
            <h3 className="text-lg font-bold text-gray-900 mb-6">
              Skills & Expertise
            </h3>
            <div className="space-y-4">
              {SKILLS.map((skill, index) => (
                <SkillBar key={skill.name} skill={skill} index={index} />
              ))}
            </div>

            {/* Quick stats */}
            <div className="mt-8 grid grid-cols-3 gap-4 pt-6 border-t border-gray-100">
              {[
                { value: "15+", label: "Projects" },
                { value: "8+", label: "Tech Stack" },
                { value: "3", label: "Languages" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 100, delay: 0.3 }}
                    className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-xs text-textSecondary mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
