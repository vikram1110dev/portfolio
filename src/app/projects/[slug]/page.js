import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import styles from "./page.module.css";
import { portfolioData } from "@/data/config";

const GithubIcon = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.03c3.15-.38 6.5-1.4 6.5-7.17a5.5 5.5 0 0 0-1.5-3.8c.16-.38.65-2.02-.14-4.72 0 0-1.25-.4-4.04 1.5a14 14 0 0 0-3.6-.3 14 14 0 0 0-3.6.3c-2.79-1.9-4.04-1.5-4.04-1.5-.79 2.7-.3 4.34-.14 4.72a5.5 5.5 0 0 0-1.5 3.8c0 5.76 3.35 6.78 6.5 7.16A4.8 4.8 0 0 0 5 18v4"></path>
  </svg>
);

// Generate static params for all projects
export function generateStaticParams() {
  return portfolioData.projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const project = portfolioData.projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className={styles.projectPage}>
      <div className={styles.heroSection}>
        <div className={styles.heroBackground}>
          <div className={styles.overlay} />
        </div>

        <div className={`container ${styles.heroContent}`}>
          <Link
            href="/#work"
            className={`${styles.backBtn} interactive`}
            data-hover-text="BACK"
          >
            <ArrowLeft size={16} /> BACK TO PROJECTS
          </Link>

          <div className={styles.meta}>
            <span className={styles.category}>{project.category}</span>
            <span className={styles.year}>{project.year}</span>
            <span
              className={`${styles.status} ${project.status === "Completed" ? styles.statusCompleted : styles.statusInDev}`}
            >
              {project.status}
            </span>
          </div>

          <h1 className={styles.title}>{project.title}</h1>
          <p className={styles.description}>{project.description}</p>
        </div>
      </div>

      <div className={`container ${styles.detailsContainer}`}>
        <div className={styles.sidebar}>
          <div className={styles.infoBlock}>
            <h3>ROLE</h3>
            <p>{project.role}</p>
          </div>
          <div className={styles.infoBlock}>
            <h3>STATUS</h3>
            <p>{project.status}</p>
          </div>
          <div className={styles.infoBlock}>
            <h3>TECHNOLOGIES</h3>
            <div className={styles.tags}>
              {project.technologies.map((tech, i) => (
                <span key={i} className={styles.tag}>
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div className={styles.links}>
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.linkBtn} interactive`}
                data-hover-text="CODE"
              >
                <GithubIcon size={18} /> VIEW SOURCE
              </a>
            )}
            {project.liveDemo && (
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.linkBtn} interactive`}
                data-hover-text="LIVE"
              >
                <ExternalLink size={18} /> LIVE DEMO
              </a>
            )}
            {!project.github && !project.liveDemo && (
              <p className={styles.noLinks}>
                Source code and demo links coming soon.
              </p>
            )}
          </div>
        </div>

        <div className={styles.mainContent}>
          <section className={styles.contentSection}>
            <h2>THE PROBLEM</h2>
            <p>{project.problem}</p>
          </section>

          <section className={styles.contentSection}>
            <h2>THE SOLUTION</h2>
            <p>{project.solution}</p>
          </section>

          <section className={styles.contentSection}>
            <h2>KEY FEATURES</h2>
            <div className={styles.featuresList}>
              {project.features.map((feature, i) => (
                <div key={i} className={styles.featureItem}>
                  <div className={styles.featureNumber}>
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3>{feature.name}</h3>
                  <p>{feature.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section className={styles.contentSection}>
            <h2>ARCHITECTURE</h2>
            <div className={styles.architectureBox}>
              {project.architecture.split(" → ").map((node, index, arr) => (
                <span key={index} className={styles.archNode}>
                  {node}
                  {index < arr.length - 1 && <ArrowRightIcon />}
                </span>
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

function ArrowRightIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ margin: "0 10px", color: "var(--color-text-dim)" }}
    >
      <line x1="5" y1="12" x2="19" y2="12"></line>
      <polyline points="12 5 19 12 12 19"></polyline>
    </svg>
  );
}
