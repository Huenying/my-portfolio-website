export const CATEGORIES = [
  { id: "claude-code", label: "Claude Code" },
  { id: "hackathon", label: "Hackathon Competition" },
  { id: "coursework", label: "Coursework" },
] as const;

export type CategoryId = (typeof CATEGORIES)[number]["id"];

/** Resolves the GitHub Pages base path so images load in dev and production. */
const basePath =
  process.env.NODE_ENV === "production" ? "/my-portfolio-website" : "";
const img = (name: string) => `${basePath}/projects/${name}`;

export interface ProjectImage {
  src: string;
  caption: string;
  /** When true the image spans the full row of the caption grid (e.g. .mp4 demos). */
  wide?: boolean;
}

export interface Highlight {
  text: string;
  /** Photos related to this bullet point, shown underneath it. */
  images?: ProjectImage[];
}

export interface ProjectDetails {
  role: string;
  duration: string;
  highlights: Highlight[];
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
  /** A hero image shown at the top of the reader popup. */
  cover?: ProjectImage;
  details: ProjectDetails;
}

export const PROJECTS: Project[] = [
  // ── Hackathon Competition ──────────────────────────────────────────────
  {
    id: 1,
    title: "GenAI Hackathon for SDGs",
    category: "hackathon",
    description:
      "Gold Prize (Champion) GenAI prototype for SDG 11: low-code agents, multimodal reasoning, and a Figma story.",
    image: "🏆",
    tags: ["GenAI", "System Prompting", "Figma", "Multimodal AI"],
    color: "from-[#D99A3C]/20 to-[#C4882E]/10",
    borderColor: "border-[#D99A3C]/30",
    cover: { src: img("p1-cover.png"), caption: "Cityspot" },
    details: {
      role: "UI/UX Designer, Pitching Presenter",
      duration: "Sept 2024 - Oct 2024",
      highlights: [
        {
          text: "Awarded Gold Prize (Champion) in “Inclusive City for All” track, out of 250+ participants / 61 teams from 4 universities, for a GenAI prototype addressing SDG 11.",
          images: [{ src: img("p1-gold-prize.jpg"), caption: "Gold Prize" }],
        },
        {
          text: "Engineered a low-code GenAI agent by leveraging system prompting to perform multimodal image reasoning which analyze citizen-uploaded photos with damage severity classification and autonomously generate structured report to eliminate manual interpretation and accelerating cross-departmental decision-making",
          images: [{ src: img("p1-poe-demo.png"), caption: "Poe prompting demo" }],
        },
        {
          text: "Built a Figma prototype that visualized the AI-driven workflow into an intuitive citizen interface, serving as the core storytelling asset during our pitch to effectively communicate technical value to non-technical judges and secure the champion title.",
          images: [{ src: img("p1-figma-demo.png"), caption: "Figma prototype demo" }],
        },
      ],
      outcome:
        "Won the Gold Prize (Champion) in the “Inclusive City for All” track out of 250+ participants.",
    },
  },
  {
    id: 2,
    title: "Hong Kong Techathon",
    category: "hackathon",
    description:
      "Finalist: scaling a winning POC into a multilingual severity classifier.",
    image: "🧠",
    tags: ["PyTorch", "HuggingFace", "DistilBERT", "FastAPI", "Docker"],
    color: "from-[#D99A3C]/20 to-[#C4882E]/10",
    borderColor: "border-[#D99A3C]/30",
    details: {
      role: "ML Engineer",
      duration: "Oct 2024 - Jan 2025",
      highlights: [
        {
          text: "Selected as a Finalist to scale the winning POC into a multi-modal (text + image) system for citizen damage reports.",
        },
        {
          text: "Engineered a multilingual DistilBERT text classifier (PyTorch / HuggingFace) using Random Search with 3-fold cross-validation for hyperparameter tuning, and validated it against TF-IDF / Logistic Regression baselines, ultimately achieving a final Macro F1 of 0.754, a 350%+ improvement over the baseline for classifying severity levels in user-submitted reports.",
          images: [
            { src: img("p2-best-param.png"), caption: "Best Parameter Values" },
            { src: img("p2-performance.png"), caption: "Performance Comparison" },
          ],
        },
        {
          text: "Containerized the production inference pipeline using FastAPI and Docker, exposing a RESTful API endpoint that serves the model with low-latency. Complemented the backend with a lightweight HTML/CSS/JavaScript frontend interface to validate end-to-end functionality.",
          images: [
            { src: img("p2-deploy-demo.png"), caption: "Deployment demo" },
            { src: img("p2-presentation.jpeg"), caption: "Finalist" },
          ],
        },
      ],
      outcome:
        "Finalist Team with a Text Classification model that has achieved a Macro F1 of 0.754 (a 350%+ improvement over baseline).",
    },
  },
  {
    id: 3,
    title: "Hong Kong Web3 Ideathon",
    category: "hackathon",
    description:
      "Top-8 decentralized credential platform tackling certificate fraud with an Ethereum dApp.",
    image: "⛓️",
    tags: ["Solidity", "Ethereum", "W3C DIDs", "Smart Contracts"],
    color: "from-[#D99A3C]/20 to-[#C4882E]/10",
    borderColor: "border-[#D99A3C]/30",
    cover: { src: img("p3-cover.png"), caption: "CertifySpace" },
    details: {
      role: "Team Leader",
      duration: "Nov 2024 - Mar 2025",
      highlights: [
        {
          text: "Shortlisted as one of the final top 8 teams out of 40+ submissions for a decentralized credential platform tackling certificate fraud and lengthy administrative verification delays through blockchain-backed trust.",
          images: [{ src: img("p3-finalist.jpg"), caption: "Finalist Teams" }],
        },
        {
          text: "Designed a full issuer–student–verifier workflow for an Ethereum-based dApp using Solidity smart contracts, integrating W3C DIDs and VCs to store cryptographic hashes on-chain and automate tamper-proof issuance, verification, and instant revocation.",
          images: [
            { src: img("p3-pitching.jpeg"), caption: "Pitching" },
          ],
        },
      ],
      outcome: "Top 8 finalist team with a decentralized credential platform design.",
    },
  },

  // ── Coursework ─────────────────────────────────────────────────────────
  {
    id: 4,
    title: "Real-Time Flight Information System",
    category: "coursework",
    description:
      "Live HK Airport flight display: AJAX data pipeline with a PHP proxy, plus search and time-windowing.",
    image: "✈️",
    tags: ["AJAX", "Fetch API", "PHP", "JavaScript"],
    color: "from-[#B2C9B0]/20 to-[#6B8F7B]/10",
    borderColor: "border-[#B2C9B0]/30",
    details: {
      role: "Frontend & API Developer",
      duration: "2026 · Coursework",
      highlights: [
        {
          text: "Developed a dynamic flight display application with client-side data pipeline using AJAX (Fetch API) architecture to asynchronously fetch real-time departure/arrival data from the Hong Kong Airport API via a custom PHP proxy script, successfully bypassing CORS restrictions and implemented data enrichment (Lookup) to join raw IATA airport codes with a secondary geographic dictionary (iata.json), transforming cryptic codes into fully qualified location metadata.",
          images: [{ src: img("p4-cover.png"), caption: "Flight Display" }],
        },
        {
          text: "Implemented a time-based windowing algorithm using real-time system timestamp comparisons to dynamically filter and extract the next 20 scheduled flights from the full departure/arrival datasets.Developed a case-insensitive full-text search filter to query flight records by destination/origin airport names within the current context, enabling instant retrieval without additional server requests.",
        },
      ],
      outcome: "Dynamic and real-time departure and arrival flight display platform.",
    },
  },
  {
    id: 5,
    title: "Authentication & Live Messaging Platform",
    category: "coursework",
    description:
      "Chatroom with AJAX polling, MySQL persistence, and session expiry across concurrent users.",
    image: "💬",
    tags: ["MySQL", "PHP", "AJAX", "SQL", "Sessions"],
    color: "from-[#B2C9B0]/20 to-[#6B8F7B]/10",
    borderColor: "border-[#B2C9B0]/30",
    details: {
      role: "Full-Stack Developer",
      duration: "2026 · Coursework",
      highlights: [
        {
          text: "Designed MySQL schemas for persistent user account and chat message storage; engineered an AJAX-powered email availability check to prevent duplicate registrations, validated login credentials via database queries in PHP, and implemented time-windowed SQL queries to retrieve the most recent hour of chat history on page load.",
          images: [
            { src: img("p5-login.png"), caption: "Account Registration and Login" },
            { src: img("p5-login-db.png"), caption: "Login Database Schema" },
          ],
        },
        {
          text: "Developed an incremental delta query pipeline using 5-second AJAX polling to fetch only new messages since the last poll, minimizing data transfer and database load; applied 120-second session expiration based on last-activity timestamps to terminate idle connections and maintain data integrity across concurrent users.",
          images: [
            { src: img("p5-chatroom.png"), caption: "Messaging Chatroom" },
            { src: img("p5-chatroom-db.png"), caption: "Chatroom Database Schema" },
          ],
        },
      ],
      outcome: "Real-time chatroom with secure authentication and data integrity.",
    },
  },
  {
    id: 6,
    title: "Cities Data Query Engine",
    category: "coursework",
    description:
      "66,000+ city records made queryable through a modular Node.js/Express/MongoDB REST API.",
    image: "🏙️",
    tags: ["Node.js", "Express", "MongoDB", "Mongoose", "REST API"],
    color: "from-[#B2C9B0]/20 to-[#6B8F7B]/10",
    borderColor: "border-[#B2C9B0]/30",
    details: {
      role: "Backend Engineer",
      duration: "2026 · Coursework",
      highlights: [
        {
          text: "Engineered a multi-dimensional data query pipeline using Node.js, Express.js, and Mongoose, importing a 66,000+ city record CSV dataset into a structured MongoDB collection; designed a RESTful API with modular GET route handlers supporting query parameter chaining for filtered searches by population range, country code, timezone region/area, and city name, delivering standardized JSON responses with appropriate HTTP status codes.",
          images: [
            { src: img("p6-cities.png"), caption: "Cities Data Query Engine" },
          ],
        },
      ],
      outcome: "A robust query engine for handling large-scale city datasets with flexible filtering capabilities.",
    },
  },

  // ── Claude Code (displayed: AI Tarot → 3D Escape Room → Level 1) ─────────
  {
    id: 9,
    title: "AI Tarot",
    category: "claude-code",
    description:
      "Level 3 — interactive AI tarot with MediaPipe hand gestures and a 3D card carousel.",
    image: "🔮",
    tags: ["Next.js 15", "React 19", "TypeScript", "Three.js", "MediaPipe"],
    color: "from-[#3A5A4A]/20 to-[#2E4038]/10",
    borderColor: "border-[#3A5A4A]/30",
    details: {
      role: "Solo Developer with Claude Code",
      duration: "Self-directed · Level 3",
      highlights: [
        {
          text: "A full tarot reading experience: 8 spreads organized by topic and question type (3–10 cards) across 78 unique cards, with flip-to-reveal results including upright/reversed orientation and rich card meanings.",
          images: [
            { src: img("p9-phrase0.png"), caption: "Cover Page" },
            { src: img("p9-phrase1.png"), caption: "Ask a Question" },
            { src: img("p9-phrase4a.png"), caption: "Card Reading" },
            { src: img("p9-phrase4b.png"), caption: "Flipped Card Reading" },
          ],
        },
        {
          text: "The slightly floating 3D card carousel in Three.js offers dual interaction modes: mouse control or real-time hand-gesture tracking with MediaPipe to wash, navigate, and select cards, while a gold glow highlights the selected card.",
          images: [
            { src: img("p9-wash-card.mp4"), caption: "Washing Card", wide: true },
            { src: img("p9-select-card.mp4"), caption: "Selecting Card", wide: true },
          ],
        },
      ],
      outcome: "An interactive platform offering a unique tarot reading experience.",
    },
  },
  {
    id: 8,
    title: "3D Escape Room",
    category: "claude-code",
    description:
      "Level 2 — a first-person 3D escape room built entirely from code with Three.js.",
    image: "🗝️",
    tags: ["Three.js", "Web Audio API", "Canvas 2D", "JavaScript"],
    color: "from-[#3A5A4A]/20 to-[#2E4038]/10",
    borderColor: "border-[#3A5A4A]/30",
    details: {
      role: "Solo Developer with Claude Code",
      duration: "Self-directed · Level 2",
      highlights: [
        {
          text: "First-person 3D escape room with WASD/mouse controls, click-to-focus interactions, and a multi-step puzzle chain across 8 clue points.",
          images: [
            { src: img("p8-cover.png"), caption: "Cover Page" },
            { src: img("p8-room.png"), caption: "The Escape Room Design" },
          ],
        },
        {
          text: "Fleshed out the puzzle-solving experience using attention-grabbing notifications, a 6-slot inventory with item inspection, and smooth zoom in/out to inspect the scene up close.",
          images: [
            { src: img("p8-notification.png"), caption: "Notification" },
            { src: img("p8-item-list.png"), caption: "Inventory item list" },
            { src: img("p8-zoom-out.png"), caption: "Zoom out" },
            { src: img("p8-zoom-in.png"), caption: "Zoom in" },
          ],
        },
      ],
      outcome: "A first-person 3D escape-room game in Three.js with HTML architecture.",
    },
  },
  {
    id: 7,
    title: "Learning Claude Code: Tomato Clock & Desktop Companion",
    category: "claude-code",
    description:
      "First hands-on Claude Code experience — building an Electron Pomodoro timer and a PyQt5 desktop companion to learn the workflow.",
    image: "🍅",
    tags: ["Electron", "PyQt5", "SVG Animation", "Web Audio API", "Python"],
    color: "from-[#3A5A4A]/20 to-[#2E4038]/10",
    borderColor: "border-[#3A5A4A]/30",
    details: {
      role: "Solo Developer with Claude Code",
      duration: "Self-directed · Level 1",
      highlights: [
        {
          text: "Learned to work with Claude Code as a force multiplier rather than a substitute — planning the architecture up front, breaking the project phase by phase, and reviewing every change before approving it.",
        },
        {
          text: "Tomato Clock: a frameless Electron Pomodoro timer with an animated SVG progress ring, auto-advancing work/break cycles, tray minimisation with a live countdown, customizable durations, and a warm minimal UI.",
          images: [{ src: img("p7-tomato.png"), caption: "Tomato Clock" }],
        },
        {
          text: "Desktop Companion: an always-on-top PyQt5 character with hover-triggered speech bubbles, drag-and-drop repositioning, a full reminder scheduler with custom repeat rules.",
          images: [{ src: img("p7-companion.png"), caption: "Desktop Companion", wide: true }],
        },
      ],
      outcome: "Two polished desktop apps shipped from my first Claude Code project.",
    },
  },
];
