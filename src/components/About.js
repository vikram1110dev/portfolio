"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import styles from "./About.module.css";
import { portfolioData } from "@/data/config";

const exploringItems = [
  "Advanced React",
  "Next.js",
  "AI Engineering",
  "System Design",
  "Cloud Architecture",
];

export default function About() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, {
    once: true,
    margin: "-100px 0px",
  });

  return (
    <section id="about" className={styles.aboutSection} ref={containerRef}>
      <div className={`container ${styles.container}`}>
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
          transition={{ duration: 0.7 }}
          className={styles.content}
        >
          <span className="section-label">ABOUT ME</span>
          <h2 className={styles.heading}>Who I Am</h2>

          <div className={styles.story}>
            {portfolioData.about.story.map((paragraph, i) => (
              <motion.p
                key={i}
                className={styles.text}
                initial={{ opacity: 0, y: 15 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }
                }
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              >
                {paragraph}
              </motion.p>
            ))}
          </div>

          <div className={styles.learning}>
            <h3 className={styles.subheading}>CURRENTLY EXPLORING</h3>
            <div className={styles.tags}>
              {exploringItems.map((item, i) => (
                <motion.span
                  key={i}
                  className={styles.tag}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={
                    isInView
                      ? { opacity: 1, scale: 1 }
                      : { opacity: 0, scale: 0.8 }
                  }
                  transition={{ duration: 0.3, delay: 0.5 + i * 0.08 }}
                  whileHover={{ scale: 1.05, borderColor: "var(--color-accent)" }}
                >
                  {item}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={
            isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
          }
          transition={{ duration: 0.8, delay: 0.3 }}
          className={styles.visual}
        >
          <div className={styles.visualContainer}>
            {/* Orbital rings */}
            <div className={`${styles.orbit} ${styles.orbit1}`} />
            <div className={`${styles.orbit} ${styles.orbit2}`} />
            <div className={`${styles.orbit} ${styles.orbit3}`} />

            {/* Central glow */}
            <div className={styles.glow} />

            {/* Core */}
            <div className={styles.core}>
              <span className={styles.coreTitle}>SOFTWARE</span>
              <span className={styles.coreSub}>DEVELOPMENT</span>
            </div>

            {/* Floating nodes */}
            <div className={`${styles.node} ${styles.node1}`}>
              <span className={styles.nodeIcon}>
                <svg viewBox="0 0 128 128" width="16" height="16"><path fill="#0074BD" d="M47.617 98.12s-4.767 2.774 3.397 3.71c9.892 1.13 14.947.968 25.845-1.092 0 0 2.871 1.795 6.873 3.351-24.439 10.47-55.308-.607-36.115-5.969z"/><path fill="#EA2D2E" d="M69.802 61.271c6.025 6.935-1.58 13.17-1.58 13.17s15.289-7.891 8.269-17.777c-6.559-9.215-11.587-13.792 15.635-29.58 0 .001-42.731 10.67-22.324 34.187z"/></svg>
              </span> Java
            </div>
            <div className={`${styles.node} ${styles.node2}`}>
              <span className={styles.nodeIcon}>
                <svg viewBox="0 0 128 128" width="16" height="16"><path fill="#3776AB" d="M63.391 1.988c-4.222.02-8.252.379-11.8 1.007-10.45 1.846-12.346 5.71-12.346 12.837v9.411h24.693v3.137H29.977c-7.176 0-13.46 4.313-15.426 12.521-2.268 9.405-2.368 15.275 0 25.096 1.755 7.311 5.947 12.519 13.124 12.519h8.491V67.234c0-8.151 7.051-15.34 15.426-15.34h24.665c6.866 0 12.346-5.654 12.346-12.548V15.833c0-6.693-5.646-11.72-12.346-12.837-4.244-.706-8.645-1.027-12.866-1.008z"/><path fill="#FFD43B" d="M91.682 28.38v10.966c0 8.5-7.208 15.655-15.426 15.655H51.591c-6.756 0-12.346 5.783-12.346 12.549v23.515c0 6.691 5.818 10.628 12.346 12.547 7.816 2.297 15.312 2.713 24.665 0 6.216-1.801 12.346-5.423 12.346-12.547v-9.412H63.938v-3.138h37.012c7.176 0 9.852-5.005 12.348-12.519 2.578-7.735 2.467-15.174 0-25.096-1.774-7.145-5.161-12.521-12.348-12.521h-9.268z"/></svg>
              </span> Python
            </div>
            <div className={`${styles.node} ${styles.node3}`}>
              <span className={styles.nodeIcon}>
                <svg viewBox="0 0 128 128" width="16" height="16"><circle cx="64" cy="64" r="11.4" fill="#61DAFB"/><path fill="#61DAFB" d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3C8.2 50 1.4 56.6 1.4 64s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8z"/></svg>
              </span> React
            </div>
            <div className={`${styles.node} ${styles.node4}`}>
              <span className={styles.nodeIcon}>
                <svg viewBox="0 0 128 128" width="16" height="16"><path fill="#512BD4" d="M61.195 0h4.953c12.918.535 25.688 4.89 36.043 12.676 9.809 7.289 17.473 17.437 21.727 28.906 4.262 11.359 5.09 24.078 2.461 35.906-2.711 12.25-9.086 23.547-18.07 32.125-8.86 8.586-20.27 14.446-32.39 16.88-12.165 2.468-24.942 1.554-36.597-2.618-11.14-3.941-21.183-10.949-28.558-20.269C3.2 95.852-.472 85.546.053 75.108V52.672C1.16 39.727 6.86 27.206 15.948 17.87 25.092 8.347 37.376 2.242 50.32.453c3.606-.448 7.25-.527 10.875-.453z"/></svg>
              </span> .NET
            </div>
            <div className={`${styles.node} ${styles.node5}`}>
              <span className={styles.nodeIcon}>
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#8b5cf6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M12 2a4 4 0 014 4v1a2 2 0 012 2v1a2 2 0 01-2 2h-1"/><path d="M8 10H6a2 2 0 01-2-2V7a2 2 0 012-2V4a4 4 0 014-4"/><rect x="8" y="12" width="8" height="8" rx="2"/></svg>
              </span> AI
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
