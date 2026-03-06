import Navbar from '@/components/Navbar';
import styles from './page.module.css';

const roles = [
  {
    title: 'Developer',
    icon: '👨‍💻',
    focus: 'Builds a feature',
    desc: 'Developers focus on implementing specific functionality. They work with CAP, RAP, or Cloud Foundry to build applications, extensions, or integrations. Their scope is typically a single feature or module.',
  },
  {
    title: 'Consultant',
    icon: '📋',
    focus: 'Configures a module',
    desc: 'Consultants configure and customize SAP modules. They work with business processes, Fiori apps, and integration flows. Their scope is typically a business area or module like FI, SD, or SuccessFactors.',
  },
  {
    title: 'BTP Engineer',
    icon: '🏗️',
    focus: 'Designs how an enterprise runs',
    desc: 'BTP engineers think at the architecture level. They design how applications, integrations, data, and security work together across the enterprise. Once this clicks, the platform stops looking huge and starts looking logical.',
  },
];

export default function RolesPage() {
  return (
    <>
      <Navbar />
      <main className={styles.rolesPage}>
        <h1>Roles & Mindset</h1>
        <div className={styles.mindsetBlock}>
          <p className={styles.mindsetQuote}>
            SAP BTP is not one skill. It&apos;s architecture thinking.
          </p>
          <p className={styles.mindsetSub}>
            Once this clicks, the platform stops looking huge and starts looking logical.
          </p>
        </div>
        <div className={styles.roleGrid}>
          {roles.map((role) => (
            <div key={role.title} className={styles.roleCard}>
              <span className={styles.roleIcon}>{role.icon}</span>
              <h2>{role.title}</h2>
              <p className={styles.roleFocus}>{role.focus}</p>
              <p className={styles.roleDesc}>{role.desc}</p>
            </div>
          ))}
        </div>
        <section className={styles.ctaSection}>
          <h3>Ready to dive deeper?</h3>
          <p>Explore topics and departments to build your BTP architecture thinking.</p>
        </section>
      </main>
    </>
  );
}
