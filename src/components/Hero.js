"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import styles from "./Hero.module.css";
import { portfolioData } from "@/data/config";

// A simple rotating 3D node component
function AbstractNode(props) {
  const meshRef = useRef();
  
  useFrame((state, delta) => {
    meshRef.current.rotation.x += delta * 0.2;
    meshRef.current.rotation.y += delta * 0.3;
  });

  return (
    <mesh ref={meshRef} {...props}>
      <icosahedronGeometry args={[1, 1]} />
      <meshStandardMaterial color="var(--color-accent)" wireframe transparent opacity={0.3} />
    </mesh>
  );
}

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={containerRef} className={styles.hero}>
      <div className={styles.canvasContainer}>
        <Canvas camera={{ position: [0, 0, 5] }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} color="#3b82f6" />
          <AbstractNode position={[2, 1, -2]} scale={1.5} />
          <AbstractNode position={[-3, -1, -5]} scale={2} />
        </Canvas>
      </div>

      <motion.div 
        className={`container ${styles.content}`}
        style={{ y, opacity }}
      >
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className={styles.eyebrow}
        >
          {portfolioData.personal.title.toUpperCase()} • BUILDER • TECHNOLOGY ENTHUSIAST
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className={styles.title}
        >
          Hi, I&apos;m {portfolioData.personal.name.split(' ')[0]}.<br />
          <span className="text-gradient">{portfolioData.personal.subtitle}</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className={styles.description}
        >
          {portfolioData.personal.description}
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className={styles.ctas}
        >
          <a href="#work" className={`${styles.btn} ${styles.btnPrimary} interactive`} data-hover-text="VIEW">
            EXPLORE MY WORK
          </a>
          <a href={portfolioData.personal.resume} target="_blank" rel="noopener noreferrer" className={`${styles.btn} ${styles.btnSecondary} interactive`} data-hover-text="DOWNLOAD">
            VIEW RESUME
          </a>
        </motion.div>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className={styles.scrollIndicator}
        style={{ opacity }}
      >
        <span className={styles.scrollText}>SCROLL TO EXPLORE</span>
        <div className={styles.scrollLine}>
          <motion.div 
            className={styles.scrollDot}
            animate={{ y: [0, 24, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
