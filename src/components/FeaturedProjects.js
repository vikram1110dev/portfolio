"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import styles from "./FeaturedProjects.module.css";
import { portfolioData } from "@/data/config";

// Unique gradient for each project based on its category (Light theme compatible)
const projectGradients = {
  "AI • Full Stack": ["#2563eb", "#3b82f6", "#60a5fa"],
  "AI • Full Stack • Education": ["#4f46e5", "#6366f1", "#818cf8"],
  "AI • Computer Vision": ["#0d9488", "#0f766e", "#14b8a6"],
  ".NET • Web Application": ["#d97706", "#b45309", "#f59e0b"],
};

function getGradient(category) {
  const colors = projectGradients[category] || ["#2563eb", "#3b82f6", "#60a5fa"];
  return `linear-gradient(135deg, ${colors[0]}08 0%, ${colors[1]}15 50%, ${colors[2]}05 100%)`;
}

function getAccentColor(category) {
  const colors = projectGradients[category] || ["#6366f1", "#818cf8", "#a78bfa"];
  return colors[0];
}

export default function FeaturedProjects() {
  const [filter, setFilter] = useState("All");
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px 0px" });

  const categories = [
    "All",
    "AI • Full Stack",
    "AI • Computer Vision",
    ".NET • Web Application",
  ];

  const baseProjects =
    filter === "All"
      ? [...portfolioData.projects]
      : portfolioData.projects.filter(
          (p) =>
            p.category.includes(filter) ||
            filter.includes(p.category.split(" • ")[0])
        );

  const filteredProjects = baseProjects.sort((a, b) => {
    if (a.status === "Completed" && b.status !== "Completed") return -1;
    if (a.status !== "Completed" && b.status === "Completed") return 1;
    return 0;
  });

  return (
    <section id="work" className={styles.projectsSection} ref={containerRef}>
      <div className={`container ${styles.container}`}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className={styles.header}
        >
          <span className="section-label">PORTFOLIO</span>
          <h2 className={styles.heading}>Selected Work</h2>
          <p className={styles.subheading}>
            A collection of software projects, experiments, and real-world
            applications I&apos;ve built.
          </p>
        </motion.div>

        <motion.div
          className={styles.filters}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((cat, i) => (
            <button
              key={i}
              className={`${styles.filterBtn} ${filter === cat ? styles.active : ""} interactive`}
              onClick={() => setFilter(cat)}
              data-hover-text="FILTER"
            >
              {cat}
            </button>
          ))}
        </motion.div>

        <div className={styles.grid}>
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.slug}
              className={styles.projectCard}
              initial={{ opacity: 0, y: 40 }}
              animate={
                isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }
              }
              transition={{ duration: 0.5, delay: 0.2 + index * 0.08 }}
            >
              <div
                className={styles.cardImage}
                style={{ background: getGradient(project.category) }}
              >
                {/* Project number overlay */}
                <span className={styles.projectNumber}>
                  {String(index + 1).padStart(2, "0")}
                </span>

                {/* Dot grid pattern */}
                <div className={styles.dotPattern} />

                {/* Category icon */}
                <div
                  className={styles.categoryIcon}
                  style={{
                    borderColor: getAccentColor(project.category) + "30",
                    color: getAccentColor(project.category),
                    background: "#ffffff",
                  }}
                >
                  {project.category.includes("Computer Vision") ? (
                    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke={getAccentColor(project.category)} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z"/><circle cx="12" cy="12" r="3"/>
                    </svg>
                  ) : project.category.includes("AI") ? (
                    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke={getAccentColor(project.category)} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 2a4 4 0 014 4v1a2 2 0 012 2v1a2 2 0 01-2 2h-1"/><path d="M8 10H6a2 2 0 01-2-2V7a2 2 0 012-2V4a4 4 0 014-4"/><rect x="8" y="12" width="8" height="8" rx="2"/><path d="M10 16h4"/>
                    </svg>
                  ) : project.category.includes(".NET") ? (
                    <svg viewBox="0 0 128 128" width="24" height="24"><path fill={getAccentColor(project.category)} d="M61.195 0h4.953c12.918.535 25.688 4.89 36.043 12.676 9.809 7.289 17.473 17.437 21.727 28.906 4.262 11.359 5.09 24.078 2.461 35.906-2.711 12.25-9.086 23.547-18.07 32.125-8.86 8.586-20.27 14.446-32.39 16.88-12.165 2.468-24.942 1.554-36.597-2.618-11.14-3.941-21.183-10.949-28.558-20.269C3.2 95.852-.472 85.546.053 75.108V52.672C1.16 39.727 6.86 27.206 15.948 17.87 25.092 8.347 37.376 2.242 50.32.453c3.606-.448 7.25-.527 10.875-.453z"/></svg>
                  ) : (
                    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke={getAccentColor(project.category)} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
                    </svg>
                  )}
                </div>

                <div className={styles.cardOverlay}>
                  <Link
                    href={`/projects/${project.slug}`}
                    className={`${styles.viewBtn} interactive`}
                    data-hover-text="OPEN"
                  >
                    VIEW PROJECT <ArrowUpRight size={16} />
                  </Link>
                </div>
              </div>

              <div className={styles.cardContent}>
                <div className={styles.cardMeta}>
                  <span
                    className={styles.category}
                    style={{ color: getAccentColor(project.category) }}
                  >
                    {project.category}
                  </span>
                  <span
                    className={`${styles.status} ${project.status === "Completed" ? styles.statusCompleted : styles.statusInDev}`}
                  >
                    <span className={styles.statusDot} />
                    {project.status}
                  </span>
                </div>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDesc}>{project.description}</p>
                <div className={styles.tags}>
                  {project.technologies.slice(0, 4).map((tech, i) => (
                    <span key={i} className={styles.tag}>
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className={styles.tag}>
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
