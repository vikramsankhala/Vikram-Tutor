import Link from 'next/link';
import Navbar from '@/components/Navbar';
import styles from './page.module.css';

export default function QuickReferencePage() {
  return (
    <>
      <Navbar />
      <main className={styles.quickRefPage}>
        <h1>Quick Reference</h1>
        <p className={styles.pageDesc}>
          Cheatsheets, key facts, and exam tips from SAP Developer & DevOps Study Notes.
        </p>

        <section className={styles.section}>
          <h2>SAP Developer Key Facts</h2>
          <div className={styles.tableWrap}>
            <table className={styles.refTable}>
              <thead>
                <tr><th>Question</th><th>Answer</th></tr>
              </thead>
              <tbody>
                <tr><td>CAP handler order</td><td>BEFORE → ON → AFTER</td></tr>
                <tr><td>CAP local auth</td><td>dummy (req.user = anonymous)</td></tr>
                <tr><td>CAP CF auth</td><td>jwt / xsuaa</td></tr>
                <tr><td>managed aspect adds</td><td>createdAt, createdBy, modifiedAt, modifiedBy</td></tr>
                <tr><td>cuid aspect adds</td><td>ID : UUID (auto on CREATE)</td></tr>
                <tr><td>CSN</td><td>Core Schema Notation (Season)</td></tr>
                <tr><td>Composition vs Association</td><td>Composition = ownership; Association = reference (FK)</td></tr>
                <tr><td>RAP BDEF for auto CRUD</td><td>managed implementation in class ...</td></tr>
                <tr><td>ETag purpose</td><td>Optimistic locking</td></tr>
                <tr><td>Draft purpose</td><td>Save incomplete data before activation</td></tr>
                <tr><td>Feature Controls</td><td>Enable/disable actions per instance</td></tr>
                <tr><td>ABAP Cloud forbidden</td><td>Internal APIs; classic dynpro; direct SAP table SELECT</td></tr>
                <tr><td>Fiori Elements vs Freestyle</td><td>FE = annotation-driven; Freestyle = full custom</td></tr>
                <tr><td>OData V4 + RAP</td><td>Native draft handling</td></tr>
                <tr><td>XSUAA token</td><td>JWT</td></tr>
                <tr><td>xs-security.json</td><td>Scopes, role templates</td></tr>
                <tr><td>IAS role</td><td>Enterprise IdP hub</td></tr>
                <tr><td>Principal Propagation</td><td>Pass user identity to on-premise</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className={styles.section}>
          <h2>SAP DevOps Key Facts</h2>
          <div className={styles.tableWrap}>
            <table className={styles.refTable}>
              <thead>
                <tr><th>Question</th><th>Answer</th></tr>
              </thead>
              <tbody>
                <tr><td>mta.yaml modules vs resources</td><td>Modules = apps; Resources = services</td></tr>
                <tr><td>MTA build</td><td>mbt build -p cf</td></tr>
                <tr><td>MTA deploy</td><td>cf deploy target/myapp.mtar</td></tr>
                <tr><td>Stream CF logs</td><td>cf logs &lt;app&gt; (no --recent)</td></tr>
                <tr><td>VCAP_SERVICES</td><td>Bound service credentials at runtime</td></tr>
                <tr><td>cTMS: who creates TR</td><td>Developer</td></tr>
                <tr><td>cTMS: who imports to prod</td><td>Operations / release team</td></tr>
                <tr><td>Cloud ALM vs SolMan</td><td>Cloud ALM = SaaS; SolMan = on-premise</td></tr>
                <tr><td>ANS Subscription</td><td>Condition + Action</td></tr>
                <tr><td>CF app port</td><td>PORT env var (never hardcode)</td></tr>
                <tr><td>BREAKING CHANGE</td><td>Footer in commit → major version</td></tr>
                <tr><td>Quality gates</td><td>Tests + lint + health 200 + no critical alerts</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className={styles.section}>
          <h2>Acronym Reference</h2>
          <div className={styles.acronymGrid}>
            <span><strong>CAP</strong> Cloud Application Programming Model</span>
            <span><strong>CDS</strong> Core Data Services</span>
            <span><strong>CSN</strong> Core Schema Notation</span>
            <span><strong>RAP</strong> ABAP RESTful Application Programming Model</span>
            <span><strong>BDEF</strong> Behaviour DEFinition</span>
            <span><strong>MTA</strong> Multi-Target Application</span>
            <span><strong>HDI</strong> HANA Deployment Infrastructure</span>
            <span><strong>XSUAA</strong> Extended Services for UAA</span>
            <span><strong>JWT</strong> JSON Web Token</span>
            <span><strong>IAS</strong> Identity Authentication Service</span>
            <span><strong>ANS</strong> Alert Notification Service</span>
            <span><strong>cTMS</strong> Cloud Transport Management Service</span>
            <span><strong>ALM</strong> Application Lifecycle Management</span>
            <span><strong>AEM</strong> Advanced Event Mesh</span>
            <span><strong>MTX</strong> Multitenancy Extension</span>
            <span><strong>BAS</strong> Business Application Studio</span>
          </div>
        </section>

        <section className={styles.section}>
          <h2>Conventional Commits</h2>
          <div className={styles.tableWrap}>
            <table className={styles.refTable}>
              <thead>
                <tr><th>Prefix</th><th>Meaning</th><th>Version</th></tr>
              </thead>
              <tbody>
                <tr><td>feat:</td><td>New feature</td><td>Minor (1.x.0)</td></tr>
                <tr><td>fix:</td><td>Bug fix</td><td>Patch (1.x.1)</td></tr>
                <tr><td>chore:</td><td>Build/tooling</td><td>No bump</td></tr>
                <tr><td>refactor:</td><td>Code restructure</td><td>No bump</td></tr>
                <tr><td>BREAKING CHANGE:</td><td>Breaking API</td><td>Major (2.0.0)</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className={styles.related}>
          <Link href="/developers">SAP Developers</Link>
          <Link href="/devops">SAP DevOps</Link>
          <Link href="/topics/development-tools">SAP Development Tools</Link>
          <Link href="/topics/low-code-signavio">Low Code & Signavio</Link>
          <Link href="/sandbox">Sandbox</Link>
          <Link href="/topics/quick-reference">Quick Reference Topic</Link>
        </section>
      </main>
    </>
  );
}
