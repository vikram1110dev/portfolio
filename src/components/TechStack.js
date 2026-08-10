"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import styles from "./TechStack.module.css";
import { portfolioData } from "@/data/config";

export default function TechStack() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px 0px" });
  const [activeCategory, setActiveCategory] = useState(0);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="tech-stack" className={styles.techStack} ref={containerRef}>
      <div className={`container ${styles.techContainer}`}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className={styles.header}
        >
          <h2 className={styles.heading}>TECH STACK</h2>
          <p className={styles.subheading}>Technologies I use to build robust software solutions.</p>
        </motion.div>

        <div className={styles.content}>
          <div className={styles.categories}>
            {portfolioData.skills.map((skillGroup, index) => (
              <button
                key={index}
                className={`${styles.categoryBtn} ${activeCategory === index ? styles.active : ""} interactive`}
                onClick={() => setActiveCategory(index)}
                data-hover-text="SELECT"
              >
                {skillGroup.category}
              </button>
            ))}
          </div>

          <motion.div 
            className={styles.skillsGrid}
            key={activeCategory}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {portfolioData.skills[activeCategory].items.map((skill, index) => (
              <motion.div 
                key={index} 
                className={styles.skillCard}
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className={styles.skillHeader}>
                  <div className={styles.skillGlow} />
                  <h3 className={styles.skillName}>{skill.name}</h3>
                </div>
                <p className={styles.skillDesc}>{skill.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
