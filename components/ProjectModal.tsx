"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { CATEGORIES, type Project } from "./projects";

// Title bar + text colours keep the site theme; everything else is restored
// to the "reader window — paper" design from reader-window-paper.html.
const C = {
  // — kept: title bar + text colours —
  moss: "#3A5A4A", // title bar background + body text
  ink: "#1A2D28", // titles
  cream: "#F4F1EA", // title-bar dots & close button
  mossDim: "rgba(26,45,40,0.55)", // small label text
  // — restored from reader-window-paper.html —
  paper: "#f9f6ee", // window background
  paper2: "#f1ece0", // reading pane background
  border: "#ddd3bf", // borders / dashed pane border
  borderSoft: "#e7dfcc", // title bar divider + corner fold
  accent: "#c99a6b", // warm tan accent (bullets, outcome label, footer dot)
  accentSoft: "rgba(201,154,107,0.35)", // category pill background
};

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  // Lock page scroll + close on Escape while the modal is open.
  useEffect(() => {
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  const categoryLabel = CATEGORIES.find((c) => c.id === project.category)?.label;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      onClick={onClose}
      className="fixed inset-0 z-[60] flex items-center justify-center bg-[#1A2D28]/55 backdrop-blur-sm p-4"
      role="dialog"
      aria-modal="true"
      aria-label={project.title}
    >
      {/* Paper window */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 8 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.97, y: 4 }}
        transition={{ duration: 0.3, ease: [0.2, 0.9, 0.25, 1.1] }}
        onClick={(e) => e.stopPropagation()}
        className="relative flex flex-col overflow-hidden rounded-[20px] font-mono"
        style={{
          background: C.paper,
          border: `1px solid ${C.border}`,
          boxShadow:
            "0 24px 50px -20px rgba(120,105,75,0.28), 0 6px 16px -8px rgba(120,105,75,0.16)",
          width: "min(800px, 100%, calc((100vh - 2rem) * 4 / 3))",
          aspectRatio: "4 / 3",
        }}
      >
        {/* Title bar — solid moss green (kept) */}
        <div
          className="flex flex-shrink-0 items-center justify-between px-6 py-4 border-b"
          style={{
            background: C.moss,
            borderColor: C.borderSoft,
          }}
        >
          <div className="flex gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-accent opacity-80" />
            <span className="w-2.5 h-2.5 rounded-full" style={{ background: C.cream }} />
            <span className="w-2.5 h-2.5 rounded-full" style={{ background: C.cream }} />
          </div>

          {/* Close — the marker box in the top-right corner */}
          <button
            onClick={onClose}
            aria-label="Close"
            title="Close"
            className="group w-5 h-5 rounded-[5px] border-[1.5px] border-[#F4F1EA]/60 hover:border-[#F4F1EA] flex items-center justify-center transition-colors"
          >
            <svg
              className="w-3 h-3 text-[#F4F1EA]/75 group-hover:text-[#F4F1EA] transition-colors"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={3}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Reading pane — dashed border + corner fold, scrollable */}
        <div
          className="relative flex-1 min-h-0 mx-[16px] my-[16px] rounded-[14px] border border-dashed overflow-y-auto"
          style={{ background: C.paper2, borderColor: C.border }}
        >
          <div className="p-6 pb-12 space-y-5">
            {/* Header */}
            <div className="flex items-start gap-4">
              <span className="text-4xl flex-shrink-0">{project.image}</span>
              <div className="min-w-0">
                <h3
                  className="text-[18px] font-bold leading-snug"
                  style={{ color: C.ink }}
                >
                  {project.title}
                </h3>
                <span
                  className="inline-block mt-1.5 px-2.5 py-0.5 rounded-full text-[11px] uppercase tracking-wider"
                  style={{ background: C.accentSoft, color: C.moss }}
                >
                  {categoryLabel}
                </span>
              </div>
            </div>

            {/* Role / duration */}
            <div className="grid grid-cols-2 gap-4 text-[12px]">
              <div>
                <p
                  className="uppercase tracking-wider mb-1"
                  style={{ color: C.mossDim }}
                >
                  Role
                </p>
                <p className="font-medium leading-snug" style={{ color: C.moss }}>
                  {project.details.role}
                </p>
              </div>
              <div>
                <p
                  className="uppercase tracking-wider mb-1"
                  style={{ color: C.mossDim }}
                >
                  Duration
                </p>
                <p className="font-medium leading-snug" style={{ color: C.moss }}>
                  {project.details.duration}
                </p>
              </div>
            </div>

            {/* What I did */}
            <div>
              <p
                className="text-[12px] uppercase tracking-wider mb-2"
                style={{ color: C.mossDim }}
              >
                What I did
              </p>
              <ul className="space-y-2">
                {project.details.highlights.map((item, i) => (
                  <li
                    key={i}
                    className="flex gap-2 text-[13px] leading-relaxed"
                    style={{ color: C.moss }}
                  >
                    <span className="flex-shrink-0" style={{ color: C.accent }}>
                      —
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Outcome */}
            <div
              className="rounded-xl border p-4"
              style={{ background: C.paper, borderColor: C.border }}
            >
              <p
                className="text-[11px] uppercase tracking-wider mb-1"
                style={{ color: C.accent }}
              >
                Outcome
              </p>
              <p className="text-[13px] leading-relaxed" style={{ color: C.moss }}>
                {project.details.outcome}
              </p>
            </div>

            {/* Skills */}
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 rounded-full text-[11px]"
                  style={{
                    background: C.paper,
                    color: C.moss,
                    border: `1px solid ${C.border}`,
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer strip — from the demo */}
        <div className="flex flex-shrink-0 items-center justify-between px-6 pt-3 pb-4">
          <span
            className="w-10 h-[2px] rounded-[2px]"
            style={{ background: C.border }}
          />
          <span
            className="w-2 h-2 rounded-full"
            style={{ background: C.accent, opacity: 0.7 }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
}
