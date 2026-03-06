import Link from 'next/link';
import Navbar from '@/components/Navbar';
import topicsData from '@/data/topics.json';
import styles from './page.module.css';

export default function TopicsPage() {
  const topics = topicsData.topics;

  return (
    <>
      <Navbar />
      <main className={styles.topicsPage}>
        <h1>Study Topics</h1>
        <p className={styles.pageDesc}>
          Explore all SAP BTP topics with detailed notes, architecture diagrams,
          and service catalogs.
        </p>
        <div className={styles.topicGrid}>
          {topics.map((topic: { id: string; title: string; shortDesc: string; priority: string; icon: string }) => (
            <Link key={topic.id} href={`/topics/${topic.id}`} className={styles.topicCard}>
              <span className={styles.topicIcon}>{topic.icon}</span>
              <h3>{topic.title}</h3>
              <p>{topic.shortDesc}</p>
              <div className={styles.topicMeta}>
                <span className={`${styles.priority} ${topic.priority === 'highest' ? styles.priorityHighest : topic.priority === 'high' ? styles.priorityHigh : styles.priorityMedium}`}>
                  {topic.priority}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </>
  );
}
