import Link from 'next/link';
import Navbar from '@/components/Navbar';
import styles from './page.module.css';

const departments = [
  {
    id: 'app-development',
    title: 'App Development',
    tagline: 'You build the logic',
    icon: '⚙️',
    services: [
      { name: 'ABAP Environment', desc: 'S/4 extensions' },
      { name: 'Cloud Foundry / Kyma', desc: 'Applications & microservices' },
      { name: 'SAP Build Apps', desc: 'No-code apps' },
    ],
    outcome: 'You create behavior here.',
    topicId: 'application-development',
  },
  {
    id: 'integration',
    title: 'Integration',
    tagline: 'You make systems talk',
    icon: '🔗',
    services: [
      { name: 'Integration Suite (CPI)', desc: 'Process integration' },
      { name: 'API Management', desc: 'API gateway' },
      { name: 'Event Mesh', desc: 'Event-driven' },
    ],
    outcome: 'You create communication here.',
    topicId: 'integration',
  },
  {
    id: 'data-analytics',
    title: 'Data & Analytics',
    tagline: 'You make sense of data',
    icon: '📊',
    services: [
      { name: 'HANA Cloud', desc: 'In-memory database' },
      { name: 'Datasphere', desc: 'Data warehouse' },
      { name: 'Analytics Cloud', desc: 'BI & planning' },
    ],
    outcome: 'You create decisions here.',
    topicId: 'data-analytics',
  },
  {
    id: 'ai-automation',
    title: 'AI & Automation',
    tagline: 'You remove manual work',
    icon: '🤖',
    services: [
      { name: 'Build Process Automation', desc: 'Workflows' },
      { name: 'AI Core', desc: 'ML models' },
      { name: 'Joule', desc: 'AI copilot' },
    ],
    outcome: 'You create intelligence here.',
    topicId: 'application-development',
  },
  {
    id: 'security-connectivity',
    title: 'Security & Connectivity',
    tagline: 'You make it usable in enterprise',
    icon: '🔐',
    services: [
      { name: 'Destination Service', desc: 'Connectivity config' },
      { name: 'Cloud Connector', desc: 'On-premise tunnel' },
      { name: 'IAS / XSUAA', desc: 'Identity & auth' },
    ],
    outcome: 'You create trust here.',
    topicId: 'security-governance',
  },
];

export default function DepartmentsPage() {
  return (
    <>
      <Navbar />
      <main className={styles.departmentsPage}>
        <h1>BTP Departments</h1>
        <p className={styles.pageDesc}>
          Think of SAP BTP as a company. Not a platform. Every service has a department.
        </p>
        <div className={styles.departmentGrid}>
          {departments.map((dept) => (
            <div key={dept.id} className={styles.departmentCard}>
              <div className={styles.departmentHeader}>
                <span className={styles.deptIcon}>{dept.icon}</span>
                <div>
                  <h2>{dept.title}</h2>
                  <p className={styles.tagline}>{dept.tagline}</p>
                </div>
              </div>
              <ul className={styles.serviceList}>
                {dept.services.map((svc, i) => (
                  <li key={i}>
                    <strong>{svc.name}</strong> → {svc.desc}
                  </li>
                ))}
              </ul>
              <p className={styles.outcome}>{dept.outcome}</p>
              <Link href={`/topics/${dept.topicId}`} className={styles.learnLink}>
                Learn more →
              </Link>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
