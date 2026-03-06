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
            <Link href="/library" className={styles.featureCard}>
              <span className={styles.cardIcon}>📖</span>
              <h3>Resource Library</h3>
              <p>
                Quick-reference summaries, service catalogs, and architecture
                patterns. Filter by topic.
              </p>
            </Link>
            <Link href="/simple-sap" className={styles.featureCard}>
              <span className={styles.cardIcon}>📄</span>
              <h3>SImple SAP</h3>
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
              { id: 'core-fundamentals', title: 'Core Fundamentals', priority: 'pillHighest' },
              { id: 'application-development', title: 'App Development', priority: 'pillHighest' },
              { id: 'integration', title: 'Integration', priority: 'pillHigh' },
              { id: 'data-analytics', title: 'Data & Analytics', priority: 'pillHigh' },
              { id: 'security-governance', title: 'Security', priority: 'pillHigh' },
              { id: 'extensibility', title: 'Extensibility', priority: 'pillHigh' },
              { id: 'operations-devops', title: 'DevOps', priority: 'pillMedium' },
              { id: 'real-world-scenarios', title: 'Real-World', priority: 'pillMedium' },
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
        </section>
      </main>
    </>
  );
}
