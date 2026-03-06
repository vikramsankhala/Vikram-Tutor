import Link from 'next/link';
import Navbar from '@/components/Navbar';
import MermaidDiagram from '@/components/MermaidDiagram';
import styles from './page.module.css';

export default function DevelopersPage() {
  return (
    <>
      <Navbar />
      <main className={styles.developersPage}>
        <h1>SAP Developers</h1>
        <p className={styles.pageDesc}>
          A comprehensive guide for developers building on SAP BTP. Tools, frameworks,
          APIs, security, CI/CD, and quick reference.
        </p>

        {/* Development Environments */}
        <section className={styles.section}>
          <h2>🛠️ Development Environments</h2>
          <div className={styles.cardGrid}>
            <div className={styles.card}>
              <h3>SAP Business Application Studio (BAS)</h3>
              <p>Browser-based IDE for BTP development. Supports CAP, ABAP, Fiori, and full-stack development. Access via BTP Cockpit → Services → SAP Business Application Studio.</p>
              <ul>
                <li>Pre-configured dev spaces (CAP, Full-Stack, Fiori)</li>
                <li>Terminal, Git, extensions</li>
                <li>Connect to Cloud Foundry, ABAP</li>
              </ul>
            </div>
            <div className={styles.card}>
              <h3>ABAP Environment</h3>
              <p>Cloud ABAP for S/4HANA extensions. Use ABAP Development Tools (ADT) in Eclipse or BAS. RAP for OData services, CDS views, and business logic.</p>
              <ul>
                <li>ABAP Cloud (restricted syntax)</li>
                <li>RAP: CDS, behavior definitions, projections</li>
                <li>Side-by-side extensions</li>
              </ul>
            </div>
            <div className={styles.card}>
              <h3>Cloud Foundry / Kyma</h3>
              <p>Polyglot runtimes. Deploy Node.js, Java, Python, Go. Use CAP, Spring Boot, or custom stacks. Kyma adds Kubernetes for containers.</p>
              <ul>
                <li>cf push for Cloud Foundry</li>
                <li>kubectl for Kyma</li>
                <li>Buildpacks or Dockerfile</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Developer Journey */}
        <section className={styles.section}>
          <h2>📐 Developer Journey</h2>
          <div className={styles.diagramWrap}>
            <MermaidDiagram chart={`flowchart LR
    A[Choose Stack] --> B[ABAP/RAP]
    A --> C[CAP/CF]
    A --> D[SAP Build]
    B --> E[ADT/BAS]
    C --> F[BAS/VS Code]
    D --> G[Build Apps]
    E --> H[Deploy to BTP]
    F --> H
    G --> H`} />
          </div>
        </section>

        {/* Languages & Frameworks */}
        <section className={styles.section}>
          <h2>⚙️ Languages & Frameworks</h2>
          <div className={styles.tableWrap}>
            <table className={styles.refTable}>
              <thead>
                <tr>
                  <th>Stack</th>
                  <th>Language</th>
                  <th>Use Case</th>
                  <th>Runtime</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>RAP</td><td>ABAP</td><td>S/4 extensions, OData</td><td>ABAP Environment</td></tr>
                <tr><td>CAP</td><td>Node.js / Java</td><td>Microservices, APIs</td><td>Cloud Foundry</td></tr>
                <tr><td>CAP</td><td>Java</td><td>Enterprise Java apps</td><td>Cloud Foundry</td></tr>
                <tr><td>Custom</td><td>Python, Go</td><td>ML, utilities</td><td>Cloud Foundry / Kyma</td></tr>
                <tr><td>SAP Build Apps</td><td>Visual</td><td>No-code apps</td><td>BTP</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* CAP Quick Reference */}
        <section className={styles.section}>
          <h2>📦 CAP (Cloud Application Programming Model)</h2>
          <div className={styles.codeBlock}>
            <pre>{`# Create new CAP project
cds init my-app

# Add CDS model (srv/cat-service.cds)
service CatalogService {
  entity Books as projection on my.Books;
}

# Run locally
cds watch

# Deploy to Cloud Foundry
cf push`}</pre>
          </div>
          <ul className={styles.bulletList}>
            <li><strong>CDS</strong>: Core Data Services for data model and services</li>
            <li><strong>cds deploy</strong>: Deploy to SQLite, HANA, PostgreSQL</li>
            <li><strong>@sap/cds</strong>: Node.js runtime; <code>com.sap.cds</code> for Java</li>
          </ul>
        </section>

        {/* APIs & OData */}
        <section className={styles.section}>
          <h2>🔌 APIs & OData</h2>
          <div className={styles.cardGrid}>
            <div className={styles.card}>
              <h3>OData V2 / V4</h3>
              <p>CAP and RAP expose OData automatically. Consume from Fiori, external apps, or API Management.</p>
              <code>/odata/v4/catalog/Books</code>
            </div>
            <div className={styles.card}>
              <h3>REST</h3>
              <p>CAP supports custom handlers. Use @path, @get, @post. OpenAPI spec generated.</p>
              <code>@get(&apos;/books/:id&apos;)</code>
            </div>
            <div className={styles.card}>
              <h3>Consuming S/4HANA</h3>
              <p>Use Destination Service + Cloud Connector. Call OData, RFC via destination. Configure in BTP Cockpit.</p>
            </div>
          </div>
        </section>

        {/* Security for Developers */}
        <section className={styles.section}>
          <h2>🔐 Security for Developers</h2>
          <div className={styles.cardGrid}>
            <div className={styles.card}>
              <h3>XSUAA</h3>
              <p>Application-level auth in Cloud Foundry. Bind xsuaa service; use @sap/xssec or passport. JWT validation.</p>
            </div>
            <div className={styles.card}>
              <h3>Destination Service</h3>
              <p>Connect to S/4HANA, HANA, external APIs. No hardcoded URLs. Use @sap-cloud-sdk or axios with destination.</p>
            </div>
            <div className={styles.card}>
              <h3>Approuter</h3>
              <p>Central entry point for multi-app UIs. Handles login, session, static files. Use @sap/approuter.</p>
            </div>
          </div>
        </section>

        {/* CI/CD */}
        <section className={styles.section}>
          <h2>🚀 CI/CD & DevOps</h2>
          <ul className={styles.bulletList}>
            <li><strong>Project Piper</strong>: SAP&apos;s pipeline templates (Jenkins)</li>
            <li><strong>GitHub Actions</strong>: cf push, npm run build, deploy</li>
            <li><strong>Cloud Foundry</strong>: <code>cf push</code>, <code>cf set-env</code>, blue-green</li>
            <li><strong>ABAP</strong>: abapGit, gCTS for transport</li>
          </ul>
        </section>

        {/* Quick Reference */}
        <section className={styles.section}>
          <h2>📋 Quick Reference</h2>
          <div className={styles.refGrid}>
            <div className={styles.refCard}>
              <h4>Cloud Foundry CLI</h4>
              <pre>{`cf login
cf target -o <org> -s <space>
cf push
cf logs <app> --recent`}</pre>
            </div>
            <div className={styles.refCard}>
              <h4>CAP Commands</h4>
              <pre>{`cds init
cds watch
cds deploy --to sqlite
cds build`}</pre>
            </div>
            <div className={styles.refCard}>
              <h4>Useful Links</h4>
              <ul>
                <li><a href="https://cap.cloud.sap/docs" target="_blank" rel="noopener noreferrer">CAP Documentation</a></li>
                <li><a href="https://help.sap.com/docs/BTP" target="_blank" rel="noopener noreferrer">BTP Help</a></li>
                <li><a href="https://developers.sap.com" target="_blank" rel="noopener noreferrer">SAP Developers</a></li>
              </ul>
            </div>
          </div>
        </section>

        {/* Learning Path */}
        <section className={styles.section}>
          <h2>📚 Learning Path</h2>
          <div className={styles.steps}>
            <div className={styles.step}>
              <span className={styles.stepNum}>1</span>
              <div>
                <strong>BTP Trial</strong> — Create account, explore cockpit, deploy sample app
              </div>
            </div>
            <div className={styles.step}>
              <span className={styles.stepNum}>2</span>
              <div>
                <strong>CAP Basics</strong> — CDS, services, local run, deploy to CF
              </div>
            </div>
            <div className={styles.step}>
              <span className={styles.stepNum}>3</span>
              <div>
                <strong>Security</strong> — XSUAA, destinations, connect to S/4
              </div>
            </div>
            <div className={styles.step}>
              <span className={styles.stepNum}>4</span>
              <div>
                <strong>RAP (optional)</strong> — ABAP Cloud, CDS, behavior, Fiori
              </div>
            </div>
          </div>
        </section>

        <section className={styles.related}>
          <h3>Related</h3>
          <div className={styles.relatedLinks}>
            <Link href="/topics/cap-framework">CAP Framework</Link>
            <Link href="/topics/development-tools">SAP Development Tools</Link>
            <Link href="/topics/low-code-signavio">Low Code & Signavio</Link>
            <Link href="/topics/abap">ABAP</Link>
            <Link href="/topics/rap-abap-cloud">RAP & ABAP Cloud</Link>
            <Link href="/topics/fiori-ui5">Fiori & UI5</Link>
            <Link href="/topics/btp-security">BTP Security</Link>
            <Link href="/topics/ai-development">AI Development</Link>
            <Link href="/topics/s4hana-cloud">S/4HANA Cloud</Link>
            <Link href="/quick-reference">Quick Reference</Link>
            <Link href="/departments">Departments</Link>
          </div>
        </section>
      </main>
    </>
  );
}
