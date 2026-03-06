import Link from 'next/link';
import Navbar from '@/components/Navbar';
import CalEmbed from '@/components/CalEmbed';
import styles from './page.module.css';

export default function SchedulePage() {
  return (
    <>
      <Navbar />
      <main className={styles.schedulePage}>
        <h1>Book a Session</h1>
        <p className={styles.desc}>
          Schedule a consultation or demo. Sessions use Google Meet with recording,
          live transcription, and real-time translation.
        </p>

        <section className={styles.embedSection}>
          <div className={styles.embedWrapper}>
            <CalEmbed />
          </div>
        </section>

        <section className={styles.features}>
          <h2>Video Conferencing Features</h2>
          <div className={styles.featureGrid}>
            <div className={styles.featureCard}>
              <span className={styles.icon}>📅</span>
              <h3>Calendar Integration</h3>
              <p>Cal.com syncs with Google Calendar. Bookings appear in your calendar and the host&apos;s.</p>
            </div>
            <div className={styles.featureCard}>
              <span className={styles.icon}>🎥</span>
              <h3>Recording</h3>
              <p>Google Meet records sessions to Google Drive. Host can enable recording before or during the call.</p>
            </div>
            <div className={styles.featureCard}>
              <span className={styles.icon}>📝</span>
              <h3>Transcription</h3>
              <p>Live captions (transcription) in Google Meet. Export transcripts after the meeting.</p>
            </div>
            <div className={styles.featureCard}>
              <span className={styles.icon}>🌐</span>
              <h3>Translation</h3>
              <p>Google Meet supports real-time translation of captions into 18+ languages for participants.</p>
            </div>
          </div>
        </section>

        <section className={styles.alternatives}>
          <h3>Alternative: Calendly + Zoom / Webex</h3>
          <p>
            You can also use <a href="https://calendly.com" target="_blank" rel="noopener noreferrer">Calendly</a> for scheduling.
            <a href="https://www.webex.com" target="_blank" rel="noopener noreferrer"> Webex</a> (free tier) offers recording,
            transcription, and translation (16 languages → 100+ caption languages).
          </p>
        </section>

        <Link href="/" className={styles.backLink}>← Back to Home</Link>
      </main>
    </>
  );
}
