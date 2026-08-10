"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import styles from "./About.module.css";
import { portfolioData } from "@/data/config";

export default function About() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px 0px" });

  return (
    <section id="about" className={styles.aboutSection} ref={containerRef}>
      <div className={`container ${styles.container}`}>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.6 }}
          className={styles.content}
        >
          <h2 className={styles.heading}>WHO I AM</h2>
          
          <div className={styles.story}>
            {portfolioData.about.story.map((paragraph, i) => (
              <p key={i} className={styles.text}>{paragraph}</p>
            ))}
          </div>

          <div className={styles.learning}>
            <h3 className={styles.subheading}>CURRENTLY EXPLORING</h3>
            <div className={styles.tags}>
              {["Advanced React", "Next.js 14", "AI Engineering", "System Design", "Cloud"].map((item, i) => (
                <span key={i} className={styles.tag}>{item}</span>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className={styles.visual}
        >
          {/* Abstract 3D constellation representation or just a clean cinematic visual */}
          <div className={styles.visualContainer}>
            <div className={styles.glow} />
            <div className={styles.core}>SOFTWARE<br/>DEVELOPMENT</div>
            
            <div className={`${styles.node} ${styles.node1}`}>Java</div>
            <div className={`${styles.node} ${styles.node2}`}>Python</div>
            <div className={`${styles.node} ${styles.node3}`}>React</div>
            <div className={`${styles.node} ${styles.node4}`}>.NET</div>
            <div className={`${styles.node} ${styles.node5}`}>AI</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
