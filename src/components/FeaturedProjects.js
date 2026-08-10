"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import styles from "./FeaturedProjects.module.css";
import { portfolioData } from "@/data/config";

export default function FeaturedProjects() {
  const [filter, setFilter] = useState("All");
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px 0px" });

  const categories = ["All", "AI • Full Stack", "AI • Computer Vision", ".NET • Web Application"];

  const baseProjects = filter === "All" 
    ? [...portfolioData.projects] 
    : portfolioData.projects.filter(p => p.category.includes(filter) || filter.includes(p.category.split(' • ')[0]));

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
          <h2 className={styles.heading}>SELECTED WORK</h2>
          <p className={styles.subheading}>A collection of software projects, experiments, and real-world applications I&apos;ve built.</p>
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
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.6, delay: 0.2 + (index * 0.1) }}
            >
              <div className={styles.cardImage}>
                {/* Fallback gradient if no image */}
                <div className={styles.imagePlaceholder} />
                
                <div className={styles.cardOverlay}>
                  <Link href={`/projects/${project.slug}`} className={`${styles.viewBtn} interactive`} data-hover-text="OPEN">
                    VIEW PROJECT <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
              
              <div className={styles.cardContent}>
                <div className={styles.cardMeta}>
                  <span className={styles.category}>{project.category}</span>
                  <span className={styles.status}>{project.status}</span>
                </div>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDesc}>{project.description}</p>
                <div className={styles.tags}>
                  {project.technologies.slice(0, 4).map((tech, i) => (
                    <span key={i} className={styles.tag}>{tech}</span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className={styles.tag}>+{project.technologies.length - 4}</span>
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
