import Link from 'next/link';
import Navbar from '@/components/Navbar';
import styles from './page.module.css';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className={styles.home}>
        <section className={styles.hero}>
          <h1>SAP BTP Companion</h1>
          <p className={styles.heroDesc}>
            Your comprehensive guide to SAP Business Technology Platform.
            Think of BTP as a company—every service has a department. Master
            architecture, application development, integration, data & analytics,
            and more.
          </p>
          <div className={styles.heroStats}>
            <div className={styles.stat}>
              <span className={styles.statVal}>8</span>
              <span className={styles.statLabel}>Core Topics</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statVal}>5</span>
              <span className={styles.statLabel}>Departments</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statVal}>3</span>
              <span className={styles.statLabel}>Roles</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statVal}>5</span>
              <span className={styles.statLabel}>S/4HANA PDFs</span>
            </div>
          </div>
        </section>

        <section className={styles.features}>
          <h2>What&apos;s Inside</h2>
          <div className={styles.featureGrid}>
            <Link href="/developers" className={styles.featureCard}>
              <span className={styles.cardIcon}>👨‍💻</span>
              <h3>SAP Developers</h3>
              <p>
                Tools, frameworks, APIs, security, CI/CD. CAP, RAP, Cloud Foundry,
                BAS, and quick reference for BTP development.
              </p>
            </Link>
            <Link href="/devops" className={styles.featureCard}>
              <span className={styles.cardIcon}>🚀</span>
              <h3>SAP DevOps</h3>
              <p>
                CI/CD pipelines, build & deploy, monitoring, logging, scaling.
                Project Piper, Cloud Foundry ops, and release strategies.
              </p>
            </Link>
            <Link href="/topics" className={styles.featureCard}>
              <span className={styles.cardIcon}>📚</span>
              <h3>Topic Notes</h3>
              <p>
                In-depth coverage of Core Fundamentals, Application Development,
                Integration, Data & Analytics, Security, Extensibility, DevOps,
                and Real-World Scenarios.
              </p>
            </Link>
            <Link href="/departments" className={styles.featureCard}>
              <span className={styles.cardIcon}>🏢</span>
              <h3>Departments</h3>
              <p>
                Explore the five BTP departments: App Development, Integration,
                Data & Analytics, AI & Automation, and Security & Connectivity.
              </p>
            </Link>
            <Link href="/roles" className={styles.featureCard}>
              <span className={styles.cardIcon}>👤</span>
              <h3>Roles & Mindset</h3>
              <p>
                Understand the BTP mindset. Developer, consultant, or BTP
                engineer—each designs how an enterprise runs.
              </p>
            </Link>
            <Link href="/sandbox" className={styles.featureCard}>
              <span className={styles.cardIcon}>🧪</span>
              <h3>Development Sandbox</h3>
              <p>
                Run JavaScript CAP patterns and edit DevOps YAML in your browser.
                Tutorials for SAP Developers and SAP DevOps.
              </p>
            </Link>
            <Link href="/schedule" className={styles.featureCard}>
              <span className={styles.cardIcon}>📅</span>
              <h3>Book a Session</h3>
              <p>
                Schedule a consultation. Calendar + Google Meet with recording,
                transcription, and real-time translation.
              </p>
            </Link>
            <Link href="/register" className={styles.featureCard}>
              <span className={styles.cardIcon}>📥</span>
              <h3>Study Notes Download</h3>
              <p>
                Register to download SAP Developer & DevOps Study Notes (docx).
                CAP, RAP, Fiori, CI/CD, MTA, and more.
              </p>
            </Link>
            <Link href="/quick-reference" className={styles.featureCard}>
              <span className={styles.cardIcon}>📋</span>
              <h3>Quick Reference</h3>
              <p>
                Cheatsheets, key facts, acronyms. CAP, RAP, DevOps exam tips
                from SAP Developer & DevOps Study Notes.
              </p>
            </Link>
            <Link href="/library" className={styles.featureCard}>
              <span className={styles.cardIcon}>📖</span>
              <h3>Resource Library</h3>
              <p>
                Quick-reference summaries, service catalogs, and architecture
                patterns. Filter by topic.
              </p>
            </Link>
            <Link href="/summary-section" className={styles.featureCard}>
              <span className={styles.cardIcon}>📄</span>
              <h3>Summary Section</h3>
              <p>
                S/4HANA training PDFs: FI (Asset Accounting, Vendor Integration,
                FI–MM), PS, and SD. Download for offline study.
              </p>
            </Link>
          </div>
        </section>

        <section className={styles.topicsPreview}>
          <h2>Topics at a Glance</h2>
          <div className={styles.topicPills}>
            {[
              { id: 'cap-framework', title: 'CAP', priority: 'pillHighest' },
              { id: 'rap-abap-cloud', title: 'RAP', priority: 'pillHighest' },
              { id: 'fiori-ui5', title: 'Fiori', priority: 'pillHigh' },
              { id: 'btp-security', title: 'Security', priority: 'pillHigh' },
              { id: 'cicd-btp', title: 'CI/CD', priority: 'pillHigh' },
              { id: 'mta-deployment', title: 'MTA', priority: 'pillHigh' },
              { id: 'transport-alm', title: 'Transport', priority: 'pillMedium' },
              { id: 'monitoring-ops', title: 'Monitoring', priority: 'pillMedium' },
              { id: 'architecture-patterns', title: 'Architecture', priority: 'pillMedium' },
              { id: 'quick-reference', title: 'Quick Ref', priority: 'pillHigh' },
            ].map((t) => (
              <Link
                key={t.id}
                href={`/topics/${t.id}`}
                className={`${styles.pill} ${styles[t.priority]}`}
              >
                {t.title}
              </Link>
            ))}
          </div>
        </section>

        <section className={styles.cta}>
          <Link href="/topics" className={styles.ctaBtn}>
            Start Learning →
          </Link>
          <p className={styles.creditsNote}>
            By <Link href="/about">Vikram Singh Sankhala</Link>
          </p>
        </section>
      </main>
    </>
  );
}
