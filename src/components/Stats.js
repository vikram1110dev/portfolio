"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import styles from "./Stats.module.css";
import { portfolioData } from "@/data/config";

function AnimatedCounter({ target, suffix = "", duration = 2000 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px 0px" });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isInView, target, duration]);

  return (
    <span ref={ref} className={styles.number}>
      {count}
      {suffix}
    </span>
  );
}

export default function Stats() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, {
    once: true,
    margin: "-100px 0px",
  });

  const stats = portfolioData.stats || [
    { number: 6, suffix: "+", label: "Projects Built" },
    { number: 5, suffix: "+", label: "Technologies" },
    { number: 1, suffix: "", label: "Internship" },
    { number: 4, suffix: "", label: "Years of Learning" },
  ];

  return (
    <section className={styles.statsSection} ref={containerRef}>
      <div className={styles.bgLine} />
      <div className={`container ${styles.container}`}>
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            className={styles.statItem}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <AnimatedCounter
              target={stat.number}
              suffix={stat.suffix}
              duration={1500 + index * 200}
            />
            <span className={styles.label}>{stat.label}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
