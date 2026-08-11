"use client";

import { useRef, useMemo } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import styles from "./Hero.module.css";
import { portfolioData } from "@/data/config";

// Floating particles field
function ParticleField() {
  const pointsRef = useRef();
  const count = 200;

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return pos;
  }, []);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.02;
      pointsRef.current.rotation.x = state.clock.elapsedTime * 0.01;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        color="#6366f1"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
}

// Rotating wireframe icosahedron
function AbstractNode(props) {
  const meshRef = useRef();

  useFrame((state, delta) => {
    meshRef.current.rotation.x += delta * 0.15;
    meshRef.current.rotation.y += delta * 0.2;
  });

  return (
    <mesh ref={meshRef} {...props}>
      <icosahedronGeometry args={[1, 1]} />
      <meshStandardMaterial
        color="#6366f1"
        wireframe
        transparent
        opacity={0.15}
      />
    </mesh>
  );
}

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={containerRef} className={styles.hero} id="hero">
      {/* 3D Canvas Background */}
      <div className={styles.canvasContainer}>
        <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
          <ambientLight intensity={0.3} />
          <pointLight position={[10, 10, 10]} intensity={0.5} color="#6366f1" />
          <pointLight position={[-10, -5, 5]} intensity={0.3} color="#22d3ee" />
          <ParticleField />
          <AbstractNode position={[3, 1.5, -3]} scale={1.8} />
          <AbstractNode position={[-4, -1, -6]} scale={2.5} />
          <AbstractNode position={[0, -3, -4]} scale={1.2} />
        </Canvas>
      </div>

      {/* Gradient overlay */}
      <div className={styles.gradientOverlay} />

      {/* Content */}
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
          <span className={styles.eyebrowDot} />
          {portfolioData.personal.title.toUpperCase()} • BUILDER • PROBLEM
          SOLVER
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className={styles.title}
        >
          Hi, I&apos;m{" "}
          <span className="text-gradient">
            {portfolioData.personal.name.split(" ")[0]}
          </span>
          .
          <br />
          <span className={styles.subtitle}>
            {portfolioData.personal.subtitle}
          </span>
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
          <a
            href="#work"
            className={`${styles.btn} ${styles.btnPrimary} interactive`}
            data-hover-text="VIEW"
          >
            <span className={styles.btnText}>EXPLORE MY WORK</span>
            <span className={styles.btnGlow} />
          </a>
          <a
            href={portfolioData.personal.resume}
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.btn} ${styles.btnSecondary} interactive`}
            data-hover-text="DOWNLOAD"
          >
            VIEW RESUME
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className={styles.scrollIndicator}
        style={{ opacity }}
      >
        <span className={styles.scrollText}>SCROLL</span>
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
