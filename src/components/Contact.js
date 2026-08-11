"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, MapPin, ArrowUpRight } from "lucide-react";
import styles from "./Contact.module.css";
import { portfolioData } from "@/data/config";

const GithubIcon = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.03c3.15-.38 6.5-1.4 6.5-7.17a5.5 5.5 0 0 0-1.5-3.8c.16-.38.65-2.02-.14-4.72 0 0-1.25-.4-4.04 1.5a14 14 0 0 0-3.6-.3 14 14 0 0 0-3.6.3c-2.79-1.9-4.04-1.5-4.04-1.5-.79 2.7-.3 4.34-.14 4.72a5.5 5.5 0 0 0-1.5 3.8c0 5.76 3.35 6.78 6.5 7.16A4.8 4.8 0 0 0 5 18v4"></path>
  </svg>
);

const LinkedinIcon = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

export default function Contact() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px 0px" });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Opens the user's email client with pre-filled content
    const mailtoLink = `mailto:${portfolioData.personal.email}?subject=${encodeURIComponent(formData.subject || "Portfolio Contact")}&body=${encodeURIComponent(
      `Hi Vikram,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    )}`;
    window.open(mailtoLink, "_self");
  };

  return (
    <section id="contact" className={styles.contactSection} ref={containerRef}>
      <div className={styles.bgGlow} />
      <div className={`container ${styles.container}`}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className={styles.header}
        >
          <span className="section-label">GET IN TOUCH</span>
          <h2 className={styles.heading}>
            Let&apos;s Build <span className="text-gradient">Something.</span>
          </h2>
          <p className={styles.subheading}>
            I&apos;m open to software development opportunities, interesting
            projects, collaborations, and technical challenges.
          </p>
        </motion.div>

        <div className={styles.grid}>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={styles.contactInfo}
          >
            <div className={styles.infoCard}>
              <div className={styles.infoIcon}>
                <Mail size={20} />
              </div>
              <div>
                <h3>EMAIL</h3>
                <a
                  href={`mailto:${portfolioData.personal.email}`}
                  className="interactive"
                  data-hover-text="EMAIL"
                >
                  {portfolioData.personal.email}
                </a>
              </div>
            </div>

            <div className={styles.infoCard}>
              <div className={styles.infoIcon}>
                <MapPin size={20} />
              </div>
              <div>
                <h3>LOCATION</h3>
                <p>{portfolioData.personal.location}</p>
              </div>
            </div>

            <div className={styles.socials}>
              <a
                href={portfolioData.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.socialLink} interactive`}
                data-hover-text="GITHUB"
              >
                <GithubIcon size={20} />
                <span>GitHub</span>
                <ArrowUpRight size={14} className={styles.socialArrow} />
              </a>
              <a
                href={portfolioData.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.socialLink} interactive`}
                data-hover-text="LINKEDIN"
              >
                <LinkedinIcon size={20} />
                <span>LinkedIn</span>
                <ArrowUpRight size={14} className={styles.socialArrow} />
              </a>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className={styles.form}
            onSubmit={handleSubmit}
          >
            <p className={styles.formNote}>
              This form opens your email client with pre-filled content.
            </p>
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="interactive"
                  data-hover-text="TYPE"
                />
              </div>
              <div className={styles.formGroup}>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="interactive"
                  data-hover-text="TYPE"
                />
              </div>
            </div>
            <div className={styles.formGroup}>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                required
                value={formData.subject}
                onChange={handleChange}
                className="interactive"
                data-hover-text="TYPE"
              />
            </div>
            <div className={styles.formGroup}>
              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                required
                value={formData.message}
                onChange={handleChange}
                className="interactive"
                data-hover-text="TYPE"
              ></textarea>
            </div>

            <button
              type="submit"
              className={`${styles.submitBtn} interactive`}
              data-hover-text="SEND"
            >
              <span>SEND MESSAGE</span>
              <ArrowUpRight size={16} />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
