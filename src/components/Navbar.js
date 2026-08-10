"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";
import { portfolioData } from "@/data/config";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
      <div className={`container ${styles.navContainer}`}>
        <Link href="/" className={styles.logo}>
          {portfolioData.personal.name}
        </Link>
        <div className={styles.links}>
          <Link href="#work" className="interactive" data-hover-text="VIEW">Work</Link>
          <Link href="#about" className="interactive" data-hover-text="ABOUT">About</Link>
          <a href={portfolioData.personal.resume} target="_blank" rel="noopener noreferrer" className="interactive" data-hover-text="DOWNLOAD">Resume</a>
          <Link href="#contact" className="interactive" data-hover-text="CONNECT">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
