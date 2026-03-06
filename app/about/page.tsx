import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Image from 'next/image';
import styles from './page.module.css';

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className={styles.aboutPage}>
        <h1>About</h1>

        <section className={styles.creatorSection}>
          <div className={styles.photoWrap}>
            <Image
              src="/vikram-sankhala.jpg"
              alt="Vikram Singh Sankhala"
              width={200}
              height={200}
              className={styles.photo}
              priority
            />
          </div>
          <div className={styles.creatorInfo}>
            <h2>Vikram Singh Sankhala</h2>
            <p className={styles.credits}>
              Conceived, Designed, Developed and end-to-end deployment by <strong>Vikram Singh Sankhala</strong>.
            </p>
            <p className={styles.bio}>
              Vikram Sankhala is an author and educator. His works include <em>Natural Language Processing: Lecture Notes</em>, 
              <em> Applied Analytics: Lecture Slides</em>, <em>Sales Analytics</em>, <em>Customer Analytics</em>, 
              <em> Python Step by Step</em> (Level 1–3), and <em>Data Science Step by Step</em>. 
              He has also compiled video resources for math and programming hobbyists.
            </p>
            <div className={styles.links}>
              <a href="https://www.linkedin.com/in/vikram-sankhala-772906399/" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
              <a href="https://www.goodreads.com/author/show/36475998.vikram_sankhala" target="_blank" rel="noopener noreferrer">
                Goodreads
              </a>
            </div>
          </div>
        </section>

        <section className={styles.contactSection}>
          <h3>Contact</h3>
          <p>
            <a href="mailto:vikramsankhala@vikrambtpcompanion.co.in">vikramsankhala@vikrambtpcompanion.co.in</a>
          </p>
          <p>
            <a href="https://wa.me/919819543261" target="_blank" rel="noopener noreferrer" className={styles.whatsapp}>
              WhatsApp: +91 9819543261
            </a>
          </p>
        </section>

        <section className={styles.backLink}>
          <Link href="/">← Back to Home</Link>
        </section>
      </main>
    </>
  );
}
