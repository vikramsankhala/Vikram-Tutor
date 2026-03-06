import Link from 'next/link';
import Navbar from '@/components/Navbar';
import simpleSapData from '@/data/simpleSap.json';
import styles from './page.module.css';

export default function SimpleSapPage() {
  const categories = simpleSapData.categories;

  return (
    <>
      <Navbar />
      <main className={styles.simpleSapPage}>
        <h1>SImple SAP</h1>
        <p className={styles.pageDesc}>
          S/4HANA training and configuration guides from the SImple SAP collection.
          These modules extend and integrate with SAP BTP. Download PDFs for offline study.
        </p>

        <div className={styles.categoryList}>
          {categories.map((category) => (
            <section key={category.id} className={styles.categorySection}>
              <h2>
                <span className={styles.categoryIcon}>{category.icon}</span>
                {category.title}
              </h2>
              <div className={styles.moduleGrid}>
                {category.modules.map((module) => (
                  <div key={module.id} className={styles.moduleCard}>
                    <h3>{module.title}</h3>
                    <p className={styles.moduleDesc}>{module.description}</p>
                    <div className={styles.moduleMeta}>
                      <span>{module.pages} pages</span>
                      <span className={styles.source}>{module.source}</span>
                    </div>
                    <a
                      href={module.pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.downloadBtn}
                    >
                      📄 Download PDF
                    </a>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

        <section className={styles.btpLink}>
          <p>
            BTP extends S/4HANA. Explore how these modules connect with{' '}
            <Link href="/topics/extensibility">Extensibility & Customization</Link>.
          </p>
        </section>
      </main>
    </>
  );
}
