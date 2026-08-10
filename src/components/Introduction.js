"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import styles from "./Introduction.module.css";

export default function Introduction() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center center"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.2, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [100, 0]);

  return (
    <section id="about" className={styles.intro} ref={containerRef}>
      <div className={`container ${styles.introContainer}`}>
        <motion.div style={{ opacity, y }} className={styles.content}>
          <h2 className={styles.heading}>
            Building ideas into <br />
            <span className="text-gradient">working software.</span>
          </h2>
          
          <div className={styles.textContainer}>
            <p className={styles.text}>
              I enjoy turning complex problems into elegant, functional applications. My approach combines clean code architecture with modern, cinematic user experiences.
            </p>
            <p className={styles.text}>
              Whether it&apos;s building AI-powered detection systems, robust .NET backends, or immersive React frontends, I focus on delivering real-world value through technology.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
