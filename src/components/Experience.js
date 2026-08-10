"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import styles from "./Experience.module.css";
import { portfolioData } from "@/data/config";

export default function Experience() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px 0px" });

  return (
    <section id="experience" className={styles.experienceSection} ref={containerRef}>
      <div className={`container ${styles.container}`}>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.heading}>EXPERIENCE</h2>
          
          <div className={styles.timeline}>
            {portfolioData.experience.map((exp, index) => (
              <motion.div 
                key={index} 
                className={styles.timelineItem}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
              >
                <div className={styles.timelineDot} />
                <div className={styles.timelineContent}>
                  <div className={styles.meta}>
                    <span className={styles.date}>{exp.date}</span>
                    <span className={styles.location}>{exp.location}</span>
                  </div>
                  <h3 className={styles.title}>{exp.title}</h3>
                  <h4 className={styles.company}>{exp.company}</h4>
                  <ul className={styles.descriptionList}>
                    {exp.description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h2 className={styles.heading}>EDUCATION</h2>
          
          <div className={styles.timeline}>
            {portfolioData.education.map((edu, index) => (
              <motion.div 
                key={index} 
                className={styles.timelineItem}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.5, delay: 0.4 + (index * 0.1) }}
              >
                <div className={styles.timelineDot} />
                <div className={styles.timelineContent}>
                  <div className={styles.meta}>
                    <span className={styles.date}>{edu.date}</span>
                    <span className={styles.location}>{edu.location}</span>
                  </div>
                  <h3 className={styles.title}>{edu.degree}</h3>
                  <h4 className={styles.company}>{edu.institution}</h4>
                  <p className={styles.score}>{edu.score}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
