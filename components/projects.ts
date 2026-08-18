export const CATEGORIES = [
  { id: "competition", label: "Competition Project" },
  { id: "data-analysis", label: "Data Analysis Project" },
  { id: "web-dev", label: "Web Development Project" },
  { id: "ai-dev", label: "AI Development Project" },
] as const;

export type CategoryId = (typeof CATEGORIES)[number]["id"];

export interface ProjectDetails {
  role: string;
  duration: string;
  highlights: string[];
  outcome: string;
}

export interface Project {
  id: number;
  title: string;
  category: CategoryId;
  description: string;
  image: string;
  tags: string[];
  color: string;
  borderColor: string;
  details: ProjectDetails;
}

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "FinTech Innovation Challenge",
    category: "competition",
    description:
      "AI-powered financial literacy platform that won 2nd place in the university-wide competition.",
    image: "📊",
    tags: ["Python", "Machine Learning", "Team Leadership"],
    color: "from-[#3A5A4A]/20 to-[#2E4038]/10",
    borderColor: "border-[#3A5A4A]/30",
    details: {
      role: "Team Lead & ML Developer",
      duration: "Jan 2025 – Mar 2025",
      highlights: [
        "Designed an AI-powered financial literacy platform with a conversational budgeting assistant.",
        "Built the ML recommendation engine that personalized savings goals from user spending patterns.",
        "Led a team of 4, splitting work across frontend, backend, model, and pitch deck.",
      ],
      outcome:
        "Placed 2nd out of 32 teams in the university-wide FinTech competition.",
    },
  },
  {
    id: 2,
    title: "HK Housing Market Analysis",
    category: "data-analysis",
    description:
      "Deep-dive into Hong Kong property trends from 10+ years of transactional data.",
    image: "🏠",
    tags: ["Python", "Pandas", "Tableau", "SQL"],
    color: "from-[#B2C9B0]/20 to-[#6B8F7B]/10",
    borderColor: "border-[#B2C9B0]/30",
    details: {
      role: "Data Analyst",
      duration: "Sep 2024 – Dec 2024",
      highlights: [
        "Cleaned and modeled 10+ years of HK property transactional data using Pandas.",
        "Built interactive Tableau dashboards visualizing district-level price trends.",
        "Identified supply/demand drivers and presented findings to faculty and peers.",
      ],
      outcome:
        "Produced a data-driven report that was featured in a class showcase.",
    },
  },
  {
    id: 3,
    title: "E-Commerce Platform",
    category: "web-dev",
    description:
      "Full-stack storefront with real-time inventory and payment integration for a local retailer.",
    image: "🛒",
    tags: ["React", "Next.js", "Node.js", "MongoDB"],
    color: "from-[#6B8F7B]/20 to-[#3A5A4A]/10",
    borderColor: "border-[#6B8F7B]/30",
    details: {
      role: "Full-Stack Developer",
      duration: "Jun 2024 – Sep 2024",
      highlights: [
        "Built a full-stack storefront with real-time inventory management using React and Node.",
        "Integrated payment processing and order-tracking flows end to end.",
        "Shipped a responsive, mobile-first UI tailored to the client's brand.",
      ],
      outcome:
        "Launched for a local retail business and used daily for online orders.",
    },
  },
  {
    id: 4,
    title: "AI-Powered Chat Assistant",
    category: "ai-dev",
    description:
      "Context-aware customer-service chatbot built on LLMs, hitting 85% resolution in pilot.",
    image: "🤖",
    tags: ["Python", "LangChain", "OpenAI", "FastAPI"],
    color: "from-[#D99A3C]/20 to-[#C4882E]/10",
    borderColor: "border-[#D99A3C]/30",
    details: {
      role: "AI Engineer",
      duration: "Feb 2025 – Apr 2025",
      highlights: [
        "Built a context-aware customer service chatbot on LLMs with LangChain.",
        "Engineered retrieval and prompt chains for accurate product-specific answers.",
        "Ran a pilot with real customer queries to measure resolution rates.",
      ],
      outcome:
        "Reached 85% first-contact resolution in pilot testing.",
    },
  },
  {
    id: 5,
    title: "Data Science Hackathon",
    category: "competition",
    description:
      "Traffic-flow optimization model from real-time sensor data, built in 48 hours.",
    image: "🏆",
    tags: ["Python", "Scikit-learn", "Time Series", "API"],
    color: "from-[#3A5A4A]/20 to-[#2E4038]/10",
    borderColor: "border-[#3A5A4A]/30",
    details: {
      role: "Data Scientist",
      duration: "48-hour hackathon · Oct 2024",
      highlights: [
        "Built a traffic-flow optimization model from real-time sensor data.",
        "Designed features and trained a gradient-boosting pipeline in under 24 hours.",
        "Prototyped a live API and dashboard for the judges.",
      ],
      outcome: "Won the Best Innovation Award.",
    },
  },
  {
    id: 6,
    title: "Customer Churn Prediction",
    category: "data-analysis",
    description:
      "End-to-end ML pipeline forecasting telecom customer churn at 92% accuracy.",
    image: "📈",
    tags: ["Python", "XGBoost", "Feature Engineering", "SHAP"],
    color: "from-[#B2C9B0]/20 to-[#6B8F7B]/10",
    borderColor: "border-[#B2C9B0]/30",
    details: {
      role: "ML Engineer",
      duration: "Jan 2025 – Feb 2025",
      highlights: [
        "Built an end-to-end churn prediction pipeline with XGBoost.",
        "Engineered features from call logs, billing, and support tickets.",
        "Used SHAP to explain top churn drivers to stakeholders.",
      ],
      outcome:
        "Achieved 92% accuracy, giving the retention team actionable drivers.",
    },
  },
  {
    id: 7,
    title: "Portfolio Website Builder",
    category: "web-dev",
    description:
      "Drag-and-drop portfolio builder with live preview and one-click deploy, used by 200+ students.",
    image: "🌐",
    tags: ["React", "TypeScript", "Tailwind CSS", "Firebase"],
    color: "from-[#6B8F7B]/20 to-[#3A5A4A]/10",
    borderColor: "border-[#6B8F7B]/30",
    details: {
      role: "Frontend Developer",
      duration: "Mar 2025 – Jun 2025",
      highlights: [
        "Built a drag-and-drop portfolio builder with real-time preview.",
        "Created a customizable template system in React and TypeScript.",
        "Added one-click deployment via Firebase Hosting.",
      ],
      outcome: "Adopted by 200+ students.",
    },
  },
  {
    id: 8,
    title: "Computer Vision Object Detection",
    category: "ai-dev",
    description:
      "Real-time warehouse inventory detection with YOLOv8, cutting manual counting by 75%.",
    image: "👁️",
    tags: ["Python", "YOLOv8", "OpenCV", "PyTorch"],
    color: "from-[#D99A3C]/20 to-[#C4882E]/10",
    borderColor: "border-[#D99A3C]/30",
    details: {
      role: "Computer Vision Engineer",
      duration: "Sep 2024 – Nov 2024",
      highlights: [
        "Implemented real-time object detection with YOLOv8.",
        "Fine-tuned the model on warehouse inventory imagery.",
        "Built a counting pipeline with a simple results dashboard.",
      ],
      outcome:
        "Reduced manual counting time by 75% in a warehouse pilot.",
    },
  },
];
