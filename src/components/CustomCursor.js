"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import styles from "./CustomCursor.module.css";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [hoverText, setHoverText] = useState("");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check for mobile/touch devices
    const checkMobile = () => {
      setIsMobile(
        window.matchMedia("(max-width: 768px)").matches ||
          "ontouchstart" in window
      );
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);

    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    const handleHoverStart = (e) => {
      const target = e.target.closest("a, button, .interactive");
      if (target) {
        setIsHovering(true);
        const text = target.getAttribute("data-hover-text");
        if (text) setHoverText(text);
      }
    };

    const handleHoverEnd = () => {
      setIsHovering(false);
      setHoverText("");
    };

    window.addEventListener("mousemove", updateMousePosition);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseover", handleHoverStart);
    document.addEventListener("mouseout", handleHoverEnd);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("resize", checkMobile);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseover", handleHoverStart);
      document.removeEventListener("mouseout", handleHoverEnd);
    };
  }, [isVisible]);

  if (isMobile) return null;

  const variants = {
    default: {
      x: mousePosition.x - 10,
      y: mousePosition.y - 10,
      height: 20,
      width: 20,
      opacity: isVisible ? 1 : 0,
      backgroundColor: "rgba(255, 255, 255, 0.8)",
      mixBlendMode: "difference",
    },
    hover: {
      x: mousePosition.x - 40,
      y: mousePosition.y - 40,
      height: 80,
      width: 80,
      opacity: isVisible ? 1 : 0,
      backgroundColor: hoverText
        ? "rgba(99, 102, 241, 0.9)"
        : "rgba(255, 255, 255, 0.06)",
      border: hoverText ? "none" : "1px solid rgba(255, 255, 255, 0.15)",
      mixBlendMode: hoverText ? "normal" : "difference",
    },
  };

  return (
    <motion.div
      className={styles.cursor}
      variants={variants}
      animate={isHovering ? "hover" : "default"}
      transition={{ type: "spring", stiffness: 500, damping: 28, mass: 0.5 }}
    >
      {isHovering && hoverText && (
        <span className={styles.cursorText}>{hoverText}</span>
      )}
    </motion.div>
  );
}
