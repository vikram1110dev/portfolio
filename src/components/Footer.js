import styles from "./Footer.module.css";
import { portfolioData } from "@/data/config";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.container}`}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <h3>{portfolioData.personal.name.toUpperCase()}</h3>
            <p className={styles.brandTitle}>
              {portfolioData.personal.title.toUpperCase()}
            </p>
            <div className={styles.availability}>
              <span className={styles.availDot} />
              Open to opportunities
            </div>
          </div>

          <div className={styles.links}>
            <a href="#work" className="interactive" data-hover-text="GO">
              Work
            </a>
            <a href="#about" className="interactive" data-hover-text="GO">
              About
            </a>
            <a
              href={portfolioData.personal.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="interactive"
              data-hover-text="GO"
            >
              Resume
            </a>
            <a href="#contact" className="interactive" data-hover-text="GO">
              Contact
            </a>
          </div>
        </div>

        <div className={styles.divider} />

        <div className={styles.bottom}>
          <p>
            &copy; {year} {portfolioData.personal.name}. All rights reserved.
          </p>
          <p className={styles.tagline}>
            DESIGNED & BUILT WITH PASSION.
          </p>
        </div>
      </div>
    </footer>
  );
}
