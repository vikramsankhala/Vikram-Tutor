import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <p className={styles.credits}>
          Conceived, Designed, Developed and end-to-end deployment by{' '}
          <Link href="/about">Vikram Singh Sankhala</Link>
        </p>
        <div className={styles.contact}>
          <a href="mailto:vikramsankhala@vikrambtpcompanion.co.in">vikramsankhala@vikrambtpcompanion.co.in</a>
          <a href="https://wa.me/919819543261" target="_blank" rel="noopener noreferrer">
            WhatsApp: +91 9819543261
          </a>
        </div>
      </div>
    </footer>
  );
}
