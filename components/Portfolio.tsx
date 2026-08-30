"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CATEGORIES, PROJECTS, type CategoryId, type Project } from "./projects";
import ReaderMachine from "./ReaderMachine";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

type TabId = "all" | CategoryId;

/** Shortened labels for the compact tab bar (full labels live on the cards). */
const TAB_LABELS: Record<CategoryId, string> = {
  "claude-code": "Claude Code",
  hackathon: "Hackathon",
  coursework: "Coursework",
};

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState<TabId>("all");
  const [hoveredProject, setHoveredProject] = useState<Project | null>(null);
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [draggingId, setDraggingId] = useState<number | null>(null);
  const [interacted, setInteracted] = useState(false);

  const tabs = useMemo(
    () => [
      { id: "all" as const, label: "All", count: PROJECTS.length },
      ...CATEGORIES.map((c) => ({
        id: c.id,
        label: TAB_LABELS[c.id],
        count: PROJECTS.filter((p) => p.category === c.id).length,
      })),
    ],
    []
  );

  const groups = useMemo(
    () =>
      CATEGORIES.map((cat) => ({
        cat,
        projects: PROJECTS.filter((p) => p.category === cat.id),
      })).filter((g) => g.projects.length > 0),
    []
  );

  const filteredProjects = useMemo(
    () =>
      activeTab === "all"
        ? PROJECTS
        : PROJECTS.filter((p) => p.category === activeTab),
    [activeTab]
  );

  const handleDragStart = (e: React.DragEvent, project: Project) => {
    setDraggingId(project.id);
    setInteracted(true);
    e.dataTransfer.setData("text/plain", String(project.id));
    e.dataTransfer.effectAllowed = "copy";
  };

  const handleRead = (project: Project) => {
    setActiveProject(project);
    setInteracted(true);
  };

  return (
    <section id="portfolio" className="relative py-24 md:py-32 bg-muted/50">
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4">My Projects</h2>
          <p className="text-textSecondary max-w-2xl mx-auto">
            Drag a project card into the reader to explore the full story behind
            each project.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14 items-start">
          {/* Left — reader machine (sticky on desktop) */}
          <div className="lg:col-span-2 lg:sticky lg:top-24">
            <ReaderMachine
              hoveredProject={hoveredProject}
              isDragging={draggingId !== null}
              onRead={handleRead}
            />
          </div>

          {/* Right — category tabs + scrollable card list */}
          <div className="lg:col-span-3">
            {/* Category tabs */}
            <div
              role="tablist"
              aria-label="Filter projects by category"
              className="flex flex-wrap gap-2 mb-6"
            >
              {tabs.map((tab) => {
                const active = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    role="tab"
                    aria-selected={active}
                    onClick={() => setActiveTab(tab.id)}
                    className={`relative px-3.5 py-2 rounded-full text-xs font-medium transition-colors duration-300 ${
                      active
                        ? "text-white"
                        : "text-gray-600 bg-white border border-gray-200 hover:bg-gray-100"
                    }`}
                  >
                    {active && (
                      <motion.div
                        layoutId="portfolio-tab-pill"
                        className="absolute inset-0 bg-primary rounded-full shadow-lg shadow-primary/25"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                    <span className="relative">
                      {tab.label}
                      <span className={active ? "opacity-70" : "opacity-50"}>
                        {" "}
                        ({tab.count})
                      </span>
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Scrollable card area */}
            <div className="lg:max-h-[600px] overflow-y-auto pr-2 -mr-2">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-5"
                >
                  {activeTab === "all" ? (
                    groups.map((group) => (
                      <div key={group.cat.id}>
                        <div className="flex items-center gap-2 mb-3 mt-1">
                          <span className="w-2 h-2 rounded-full bg-primary" />
                          <h5 className="text-xs font-bold uppercase tracking-wider text-textSecondary">
                            {group.cat.label}
                          </h5>
                          <span className="text-xs text-textSecondary/70">
                            ({group.projects.length})
                          </span>
                        </div>
                        <div className="space-y-3">
                          {group.projects.map((project, index) => (
                            <ProjectCard
                              key={project.id}
                              project={project}
                              index={index}
                              showDragHint={
                                !interacted && index === 0 && group.cat.id === groups[0].cat.id
                              }
                              onHover={setHoveredProject}
                              onSelect={handleRead}
                              onInteract={() => setInteracted(true)}
                              onDragCardStart={handleDragStart}
                              onDragCardEnd={() => setDraggingId(null)}
                            />
                          ))}
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="space-y-3">
                      {filteredProjects.map((project, index) => (
                        <ProjectCard
                          key={project.id}
                          project={project}
                          index={index}
                          showDragHint={!interacted && index === 0}
                          onHover={setHoveredProject}
                          onSelect={handleRead}
                          onInteract={() => setInteracted(true)}
                          onDragCardStart={handleDragStart}
                          onDragCardEnd={() => setDraggingId(null)}
                        />
                      ))}
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>

      {/* Project reader popup */}
      <AnimatePresence>
        {activeProject && (
          <ProjectModal
            project={activeProject}
            onClose={() => setActiveProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
