"use client";

import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CATEGORIES, PROJECTS, type Project } from "./projects";

interface ReaderMachineProps {
  hoveredProject: Project | null;
  /** True while a card is being dragged anywhere (helps guide the user). */
  isDragging: boolean;
  /** Called after the feed-in animation when a card is dropped in. */
  onRead: (project: Project) => void;
}

/** Small wrapper so every screen state animates in/out consistently. */
function ScreenContent({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.2 }}
      className="h-full flex flex-col items-center justify-center text-center gap-2.5"
    >
      {children}
    </motion.div>
  );
}

export default function ReaderMachine({
  hoveredProject,
  isDragging,
  onRead,
}: ReaderMachineProps) {
  const [isDragOver, setIsDragOver] = useState(false);
  const [scanning, setScanning] = useState<Project | null>(null);

  // Counter-based enter/leave so moving over child elements doesn't flicker the drop state.
  const dragDepth = useRef(0);

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    dragDepth.current = 0;
    setIsDragOver(false);
    const id = Number(e.dataTransfer.getData("text/plain"));
    const project = PROJECTS.find((p) => p.id === id);
    if (!project) return;

    // Play a short feed-in scan, then open the reader popup.
    setScanning(project);
    window.setTimeout(() => {
      setScanning(null);
      onRead(project);
    }, 850);
  };

  return (
    <div className="w-full max-w-[430px] mx-auto select-none">
      {/* Device */}
      <motion.div
        onDragEnter={(e) => {
          e.preventDefault();
          dragDepth.current += 1;
          setIsDragOver(true);
        }}
        onDragLeave={() => {
          dragDepth.current = Math.max(0, dragDepth.current - 1);
          if (dragDepth.current === 0) setIsDragOver(false);
        }}
        onDragOver={(e) => {
          e.preventDefault();
          e.dataTransfer.dropEffect = "copy";
        }}
        onDrop={handleDrop}
        animate={{ scale: isDragOver ? 1.02 : 1 }}
        transition={{ type: "spring", stiffness: 220, damping: 22 }}
        className={`relative rounded-[2rem] p-7 bg-gradient-to-br from-[#2E4038] to-[#16241F] shadow-2xl ring-1 ring-white/10 transition-shadow duration-300 ${
          isDragOver ? "ring-2 ring-accent shadow-accent/20" : ""
        }`}
      >
        {/* Top deck */}
        <div className="flex items-center justify-between mb-5">
          <span className="text-[10px] font-mono tracking-[0.3em] text-white/40">
            CY–3000
          </span>
          <span className="flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-widest text-white/40">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            Power
          </span>
        </div>

        {/* Card slot (widens when the reader is "open") */}
        <div className="relative mb-5 flex justify-center">
          <div
            className={`h-2.5 rounded-full bg-black/50 border border-white/10 transition-all duration-300 ${
              isDragOver || isDragging ? "w-4/5" : "w-2/3"
            }`}
          />
          <motion.div
            animate={{ opacity: isDragOver || isDragging ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="absolute -inset-x-6 -top-1 bottom-0 bg-accent/10 blur-xl rounded-full pointer-events-none"
          />
        </div>

        {/* Screen — dark LCD */}
        <div className="relative rounded-xl bg-[#0B1410] border border-white/10 overflow-hidden shadow-inner">
          <div className="relative h-64 p-5">
            <AnimatePresence mode="wait">
              {scanning ? (
                <ScreenContent key={`scan-${scanning.id}`}>
                  <motion.span
                    className="text-5xl"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ repeat: Infinity, duration: 0.7 }}
                  >
                    {scanning.image}
                  </motion.span>
                  <p className="text-white font-bold text-base leading-snug">
                    {scanning.title}
                  </p>
                  <p className="text-accent text-[11px] font-mono animate-pulse">
                    READING…
                  </p>
                </ScreenContent>
              ) : isDragOver ? (
                <ScreenContent key="drag-over">
                  <motion.span
                    className="text-5xl"
                    animate={{ scale: [1, 1.15, 1] }}
                    transition={{ repeat: Infinity, duration: 0.8 }}
                  >
                    ⬇️
                  </motion.span>
                  <p className="text-accent font-bold text-base">
                    Release to read
                  </p>
                  <p className="text-white/40 text-xs font-mono">
                    the full project story
                  </p>
                </ScreenContent>
              ) : hoveredProject ? (
                <ScreenContent key={`preview-${hoveredProject.id}`}>
                  <span className="text-5xl">{hoveredProject.image}</span>
                  <p className="text-white font-bold text-base leading-snug">
                    {hoveredProject.title}
                  </p>
                  <span className="px-2.5 py-0.5 rounded-full bg-accent/20 text-accent text-[10px] uppercase tracking-wider">
                    {CATEGORIES.find((c) => c.id === hoveredProject.category)
                      ?.label}
                  </span>
                  <p className="text-white/40 text-xs font-mono">
                    drop to read →
                  </p>
                </ScreenContent>
              ) : isDragging ? (
                <ScreenContent key="dragging">
                  <span className="text-5xl">👆</span>
                  <p className="text-white/60 text-base">
                    Drop the card in the slot
                  </p>
                </ScreenContent>
              ) : (
                <ScreenContent key="idle">
                  <motion.span
                    className="text-5xl"
                    animate={{ y: [0, -6, 0] }}
                    transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
                  >
                    🗂️
                  </motion.span>
                  <p className="text-white/70 text-base">Drag a project card here</p>
                  <p className="text-white/30 text-xs font-mono">
                    to read the full story
                  </p>
                </ScreenContent>
              )}
            </AnimatePresence>

            {/* Scan line sweeping the screen while reading */}
            {scanning && (
              <motion.div
                className="absolute inset-x-0 h-10 bg-accent/25 blur-sm pointer-events-none"
                initial={{ y: -40 }}
                animate={{ y: [0, 256, 0] }}
                transition={{ repeat: Infinity, duration: 1.4, ease: "linear" }}
              />
            )}
          </div>
        </div>

        {/* Control deck */}
        <div className="mt-5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-3.5 h-3.5 rounded-full bg-accent shadow shadow-accent/40" />
            <span className="w-3 h-3 rounded-full bg-primary-light/50" />
            <span className="w-3 h-3 rounded-full bg-secondary/60" />
          </div>
          <span className="text-[10px] font-mono tracking-widest text-white/30">
            INSERT · READ · RETURN
          </span>
        </div>
      </motion.div>

      {/* Feet */}
      <div className="flex justify-center gap-16">
        <div className="w-14 h-2.5 rounded-b-lg bg-[#16241F]" />
        <div className="w-14 h-2.5 rounded-b-lg bg-[#16241F]" />
      </div>

      {/* Helper caption */}
      <p className="mt-4 text-center text-sm text-textSecondary">
        Hover a card to preview it · drop it in to read more
      </p>
    </div>
  );
}
