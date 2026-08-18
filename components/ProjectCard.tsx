"use client";

import { motion } from "framer-motion";
import { CATEGORIES, type Project } from "./projects";

interface ProjectCardProps {
  project: Project;
  index: number;
  /** Shows a one-time "drag me" hint on the first card until the user interacts. */
  showDragHint: boolean;
  onHover: (project: Project | null) => void;
  onSelect: (project: Project) => void;
  onInteract: () => void;
  onDragCardStart: (e: React.DragEvent, project: Project) => void;
  onDragCardEnd: () => void;
}

export default function ProjectCard({
  project,
  index,
  showDragHint,
  onHover,
  onSelect,
  onInteract,
  onDragCardStart,
  onDragCardEnd,
}: ProjectCardProps) {
  const categoryLabel = CATEGORIES.find((c) => c.id === project.category)?.label;

  return (
    <motion.div
      role="button"
      tabIndex={0}
      aria-label={`Read about ${project.title}`}
      draggable
      onDragStartCapture={(e) => onDragCardStart(e, project)}
      onDragEndCapture={onDragCardEnd}
      onMouseEnter={() => onHover(project)}
      onMouseLeave={() => onHover(null)}
      onClick={() => {
        onInteract();
        onSelect(project);
      }}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onInteract();
          onSelect(project);
        }
      }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      whileHover={{ y: -3 }}
      whileTap={{ scale: 0.98 }}
      className={`group cursor-grab active:cursor-grabbing rounded-2xl border ${project.borderColor} ${project.color} bg-white p-4 shadow-sm hover:shadow-lg transition-shadow duration-300 select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40`}
    >
      {/* Row 1: emoji + title + category pill */}
      <div className="flex items-center gap-3 mb-2">
        <span className="text-2xl flex-shrink-0">{project.image}</span>
        <h4 className="font-bold text-gray-900 text-sm flex-1 min-w-0 truncate group-hover:text-primary transition-colors">
          {project.title}
        </h4>
        <span className="flex-shrink-0 px-2 py-0.5 rounded-full bg-primary/10 text-primary text-[10px] font-medium uppercase tracking-wider">
          {categoryLabel}
        </span>
      </div>

      {/* Row 2: one-line description */}
      <p className="text-textSecondary text-xs leading-relaxed line-clamp-1 mb-2.5">
        {project.description}
      </p>

      {/* Row 3: skill tags + drag hint */}
      <div className="flex items-center justify-between gap-2">
        <div className="flex flex-wrap gap-1.5 min-w-0">
          {project.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 bg-gray-100 rounded-full text-[10px] font-medium text-gray-600"
            >
              {tag}
            </span>
          ))}
        </div>
        {showDragHint ? (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, x: [0, -5, 5, 0] }}
            transition={{
              opacity: { delay: 1.6, duration: 0.3 },
              x: { delay: 2, duration: 0.9, ease: "easeInOut" },
            }}
            className="flex-shrink-0 text-[10px] font-medium text-primary"
          >
            ⇢ drag me
          </motion.span>
        ) : (
          <span className="flex-shrink-0 text-[10px] font-medium text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity">
            ⠿ drag
          </span>
        )}
      </div>
    </motion.div>
  );
}
