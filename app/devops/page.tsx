import Link from 'next/link';
import Navbar from '@/components/Navbar';
import MermaidDiagram from '@/components/MermaidDiagram';
import styles from './page.module.css';

export default function DevOpsPage() {
  return (
    <>
      <Navbar />
      <main className={styles.devopsPage}>
        <h1>SAP DevOps</h1>
        <p className={styles.pageDesc}>
          A comprehensive guide for DevOps on SAP BTP. CI/CD pipelines, build & deploy,
          monitoring, logging, scaling, and operational best practices.
        </p>

        {/* DevOps Pipeline Overview */}
        <section className={styles.section}>
          <h2>🔄 DevOps Pipeline Overview</h2>
          <div className={styles.diagramWrap}>
            <MermaidDiagram chart={`flowchart LR
    A[Code] --> B[Build]
    B --> C[Test]
    C --> D[Deploy]
    D --> E[Monitor]
    E --> F[Feedback]`} />
          </div>
        </section>

        {/* CI/CD Pipelines */}
        <section className={styles.section}>
          <h2>🚀 CI/CD Pipelines</h2>
          <div className={styles.cardGrid}>
            <div className={styles.card}>
              <h3>SAP Continuous Integration & Delivery</h3>
              <p>SAP&apos;s native CI/CD service for BTP. Automated build, test, and deploy from Git. Integrates with Cloud Foundry, ABAP Environment, and Kyma.</p>
              <ul>
                <li>Git-based triggers (GitHub, GitLab, Azure Repos)</li>
                <li>Buildpacks and Docker support</li>
                <li>Multi-environment promotion</li>
              </ul>
            </div>
            <div className={styles.card}>
              <h3>Project Piper</h3>
              <p>Open-source Jenkins-based pipelines. SAP&apos;s reference implementation for enterprise CI/CD. Extensive library of stages and steps.</p>
              <ul>
                <li>Jenkinsfile templates</li>
                <li>Cloud Foundry deploy, npm build, Maven</li>
                <li>SonarQube, OWASP, security scanning</li>
              </ul>
            </div>
            <div className={styles.card}>
              <h3>GitHub Actions / Azure DevOps</h3>
              <p>Use cloud-native pipelines. <code>cf push</code>, <code>cds build</code>, deploy to BTP. Custom workflows for CAP, Node.js, Java.</p>
              <ul>
                <li>YAML workflow definitions</li>
                <li>Secrets for credentials</li>
                <li>Matrix builds, parallel jobs</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Build & Deploy */}
        <section className={styles.section}>
          <h2>📦 Build & Deploy</h2>
          <div className={styles.tableWrap}>
            <table className={styles.refTable}>
              <thead>
                <tr>
                  <th>Runtime</th>
                  <th>Build</th>
                  <th>Deploy</th>
                  <th>Rollback</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Cloud Foundry</td>
                  <td><code>npm run build</code>, <code>mvn package</code></td>
                  <td><code>cf push</code></td>
                  <td><code>cf rollback</code></td>
                </tr>
                <tr>
                  <td>Kyma</td>
                  <td>Docker build, Helm chart</td>
                  <td><code>helm install</code>, <code>kubectl apply</code></td>
                  <td>Helm rollback</td>
                </tr>
                <tr>
                  <td>ABAP</td>
                  <td>abapGit, gCTS</td>
                  <td>Transport, ATC</td>
                  <td>Transport reversal</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Cloud Foundry Commands */}
        <section className={styles.section}>
          <h2>☁️ Cloud Foundry Operations</h2>
          <div className={styles.codeBlock}>
            <pre>{`# Login & target
cf login -a <api-endpoint>
cf target -o <org> -s <space>

# Deploy
cf push <app-name> -p ./dist
cf push --strategy rolling   # Zero-downtime

# Scale
cf scale <app> -i 3 -m 512M

# Logs & diagnostics
cf logs <app> --recent
cf env <app>
cf apps
cf services`}</pre>
          </div>
        </section>

        {/* Monitoring & Observability */}
        <section className={styles.section}>
          <h2>📊 Monitoring & Observability</h2>
          <div className={styles.cardGrid}>
            <div className={styles.card}>
              <h3>Application Monitoring (Dynatrace)</h3>
              <p>SAP&apos;s APM for BTP. End-to-end tracing, real user monitoring, custom metrics. Enable via BTP Cockpit → Services.</p>
            </div>
            <div className={styles.card}>
              <h3>Cloud Foundry Metrics</h3>
              <p>CPU, memory, disk, request count per app. View in BTP Cockpit or via <code>cf app &lt;name&gt;</code>. Export to external monitoring.</p>
            </div>
            <div className={styles.card}>
              <h3>Health Checks</h3>
              <p>Use <code>/health</code> or <code>/ready</code> endpoints. CF uses HTTP health checks. Kyma supports liveness/readiness probes.</p>
            </div>
          </div>
        </section>

        {/* Logging & Diagnostics */}
        <section className={styles.section}>
          <h2>📝 Logging & Diagnostics</h2>
          <ul className={styles.bulletList}>
            <li><strong>cf logs</strong>: Stream or tail application logs (stdout/stderr)</li>
            <li><strong>Logging service</strong>: Centralized log aggregation, Kibana dashboards</li>
            <li><strong>Structured logging</strong>: JSON format, correlation IDs for tracing</li>
            <li><strong>Log retention</strong>: Configure retention policies per space</li>
          </ul>
        </section>

        {/* Configuration & Secrets */}
        <section className={styles.section}>
          <h2>🔧 Configuration & Secrets</h2>
          <div className={styles.cardGrid}>
            <div className={styles.card}>
              <h3>Environment Variables</h3>
              <p><code>cf set-env APP KEY value</code> or in manifest.yml. Use for non-sensitive config.</p>
            </div>
            <div className={styles.card}>
              <h3>User-Provided Services</h3>
              <p><code>cf create-user-provided-service</code> for credentials. Bind to app.</p>
            </div>
            <div className={styles.card}>
              <h3>Credential Store</h3>
              <p>BTP Credential Store for secrets. SAP-managed, encrypted. Access via APIs.</p>
            </div>
          </div>
        </section>

        {/* Scaling & Resilience */}
        <section className={styles.section}>
          <h2>⚡ Scaling & Resilience</h2>
          <div className={styles.diagramWrap}>
            <MermaidDiagram chart={`flowchart TB
    A[Scaling] --> B[Horizontal]
    A --> C[Vertical]
    B --> B1[cf scale -i N]
    C --> C1[memory/disk]
    B1 --> D[Auto-scaling]`} />
          </div>
          <ul className={styles.bulletList}>
            <li><strong>Horizontal</strong>: <code>cf scale -i 3</code> — multiple instances</li>
            <li><strong>Vertical</strong>: Increase memory (-m) or disk (-k)</li>
            <li><strong>Auto-scaling</strong>: App Autoscaler service, rules based on CPU/RPM</li>
            <li><strong>Kyma</strong>: HPA (Horizontal Pod Autoscaler), resource limits</li>
          </ul>
        </section>

        {/* Release Strategies */}
        <section className={styles.section}>
          <h2>🔄 Release Strategies</h2>
          <div className={styles.cardGrid}>
            <div className={styles.card}>
              <h3>Blue-Green</h3>
              <p>Deploy new version alongside old. Switch traffic. Instant rollback by reverting route.</p>
            </div>
            <div className={styles.card}>
              <h3>Rolling</h3>
              <p><code>cf push --strategy rolling</code>. Zero-downtime. Gradual instance replacement.</p>
            </div>
            <div className={styles.card}>
              <h3>Canary</h3>
              <p>Route fraction of traffic to new version. Validate before full cutover.</p>
            </div>
          </div>
        </section>

        {/* Quick Reference */}
        <section className={styles.section}>
          <h2>📋 Quick Reference</h2>
          <div className={styles.refGrid}>
            <div className={styles.refCard}>
              <h4>CF Deploy</h4>
              <pre>{`cf push
cf push --no-route
cf map-route <app> <domain>`}</pre>
            </div>
            <div className={styles.refCard}>
              <h4>CF Scale</h4>
              <pre>{`cf scale <app> -i 2
cf scale <app> -m 1G
cf scale <app> -k 1G`}</pre>
            </div>
            <div className={styles.refCard}>
              <h4>CF Logs</h4>
              <pre>{`cf logs <app>
cf logs <app> --recent
cf logs <app> | grep ERROR`}</pre>
            </div>
            <div className={styles.refCard}>
              <h4>Useful Links</h4>
              <ul>
                <li><a href="https://project-piper.io" target="_blank" rel="noopener noreferrer">Project Piper</a></li>
                <li><a href="https://docs.cloudfoundry.org" target="_blank" rel="noopener noreferrer">Cloud Foundry Docs</a></li>
                <li><a href="https://help.sap.com/docs/BTP" target="_blank" rel="noopener noreferrer">BTP Help</a></li>
              </ul>
            </div>
          </div>
        </section>

        {/* Learning Path */}
        <section className={styles.section}>
          <h2>📚 DevOps Learning Path</h2>
          <div className={styles.steps}>
            <div className={styles.step}>
              <span className={styles.stepNum}>1</span>
              <div><strong>Manual Deploy</strong> — cf push, understand manifest.yml, bind services</div>
            </div>
            <div className={styles.step}>
              <span className={styles.stepNum}>2</span>
              <div><strong>Pipeline Basics</strong> — GitHub Actions or Jenkins, build + deploy on push</div>
            </div>
            <div className={styles.step}>
              <span className={styles.stepNum}>3</span>
              <div><strong>Multi-Environment</strong> — Dev, test, prod. Promotion workflows, secrets per env</div>
            </div>
            <div className={styles.step}>
              <span className={styles.stepNum}>4</span>
              <div><strong>Observability</strong> — Logging, metrics, alerting. Application Monitoring</div>
            </div>
          </div>
        </section>

        <section className={styles.related}>
          <h3>Related</h3>
          <div className={styles.relatedLinks}>
            <Link href="/topics/s4hana-cloud">S/4HANA Cloud</Link>
            <Link href="/topics/basis">SAP Basis</Link>
            <Link href="/topics/cicd-btp">CI/CD on BTP</Link>
            <Link href="/topics/mta-deployment">MTA & Deployment</Link>
            <Link href="/topics/transport-alm">Transport & ALM</Link>
            <Link href="/topics/monitoring-ops">Monitoring & Ops</Link>
            <Link href="/topics/architecture-patterns">Architecture Patterns</Link>
            <Link href="/quick-reference">Quick Reference</Link>
            <Link href="/developers">SAP Developers</Link>
            <Link href="/departments">Departments</Link>
          </div>
        </section>
      </main>
    </>
  );
}
