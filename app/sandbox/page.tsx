import Link from 'next/link';
import Navbar from '@/components/Navbar';
import DevelopmentSandbox from '@/components/DevelopmentSandbox';
import styles from './page.module.css';

export default function SandboxPage() {
  return (
    <>
      <Navbar />
      <main className={styles.sandboxPage}>
        <h1>Development Sandbox</h1>
        <p className={styles.pageDesc}>
          Experiment with SAP Developer and SAP DevOps tutorials. Run JavaScript patterns
          in your browser or edit YAML templates. No installation required.
        </p>
        <div className={styles.sandboxWrapper}>
          <DevelopmentSandbox />
        </div>
        <div className={styles.sandboxTips}>
          <h3>SAP Developer</h3>
          <ul>
            <li><strong>CAP Handler</strong> — Simulates a read handler pattern for OData entities.</li>
            <li><strong>CDS Entity</strong> — Mock CDS entity structure (elements, types).</li>
            <li><strong>Destination</strong> — Async pattern for calling S/4HANA via Destination Service.</li>
            <li><strong>XSUAA JWT</strong> — Mock JWT claims and scope checking.</li>
          </ul>
          <h3>SAP DevOps</h3>
          <ul>
            <li><strong>manifest.yml</strong> — Cloud Foundry app manifest. Edit and deploy with <code>cf push</code>.</li>
            <li><strong>GitHub Actions</strong> — Deploy-to-BTP workflow. Add secrets in repo settings.</li>
            <li><strong>Jenkinsfile</strong> — Project Piper–style pipeline. Adapt for your Jenkins.</li>
            <li><strong>CF Commands</strong> — Common Cloud Foundry CLI commands. Copy to terminal.</li>
          </ul>
          <p className={styles.tipNote}>
            Copy code to SAP Business Application Studio or your local project to use in real BTP apps.
          </p>
        </div>
        <div className={styles.related}>
          <Link href="/developers">SAP Developers Guide</Link>
          <Link href="/devops">SAP DevOps Guide</Link>
        </div>
      </main>
    </>
  );
}
