'use client';

import { useState, useCallback } from 'react';
import styles from './DevelopmentSandbox.module.css';

// SAP Developer templates - JavaScript (runs in browser)
const DEVELOPER_TEMPLATES: Record<string, string> = {
  'cap-handler': `// CAP Service Handler Pattern
// Simulates a read handler for Books entity

const books = [
  { ID: 1, title: 'Getting Started with CAP', stock: 10 },
  { ID: 2, title: 'SAP BTP Developer Guide', stock: 5 },
];

// CAP-style request handler (simplified)
function handleRead(req) {
  const { query } = req;
  let result = [...books];
  
  if (query?.where) {
    const filter = query.where[2]; // e.g. ['stock', '>', 5]
    result = result.filter(b => b[filter[0]] > filter[2]);
  }
  
  return result;
}

const result = handleRead({ query: { where: ['stock', '>', 5] } });
console.log('Books with stock > 5:', result);
`,
  'cds-entity': `// CDS Entity Pattern (simplified mock)
// In real CAP: @cds.entity in .cds file

const CatalogService = {
  entities: {
    Books: {
      elements: {
        ID: { type: 'cds.Integer' },
        title: { type: 'cds.String' },
        stock: { type: 'cds.Integer' }
      }
    }
  }
};

// Simulate CDS compile output
const Books = CatalogService.entities.Books;
console.log('Entity Books:', Object.keys(Books.elements));
console.log('Elements:', Books.elements);
`,
  'destination': `// Destination Service Pattern
// Simulates fetching from a destination (mock)

async function callDestination(destName, path) {
  // In BTP: use @sap-cloud-sdk/connectivity
  // Mock response for demo
  return {
    url: \`https://\${destName}.example.com\${path}\`,
    status: 200,
    data: { message: 'Mock S/4HANA response' }
  };
}

const res = await callDestination('S4HANA', '/sap/opu/odata/sap/API_BUSINESS_PARTNER');
console.log('Destination call:', res);
`,
  'xsuaa-jwt': `// XSUAA JWT Claims (mock structure)
// In BTP: use @sap/xssec for validation

const mockJWT = {
  user_name: 'user@example.com',
  scope: ['uaa.resource', 'CatalogService.Read'],
  email: 'user@example.com',
  zid: 'sap-prod'
};

function hasScope(jwt, scope) {
  return jwt.scope && jwt.scope.includes(scope);
}

console.log('User:', mockJWT.user_name);
console.log('Has CatalogService.Read:', hasScope(mockJWT, 'CatalogService.Read'));
`,
};

// SAP DevOps templates - YAML (edit & copy)
const DEVOPS_TEMPLATES: Record<string, string> = {
  'manifest': `# Cloud Foundry manifest.yml
applications:
  - name: my-cap-app
    path: .
    buildpacks:
      - nodejs_buildpack
    memory: 256M
    instances: 1
    services:
      - my-xsuaa
      - my-destination
    env:
      NODE_ENV: production
`,
  'github-actions': `# GitHub Actions - Deploy to BTP Cloud Foundry
name: Deploy to BTP

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          
      - name: Install & Build
        run: |
          npm ci
          npm run build
          
      - name: Deploy to CF
        uses: cloudfoundry/action-cf-cli@v1
        with:
          cf_api: \$\{\{ secrets.CF_API \}\}
          cf_username: \$\{\{ secrets.CF_USERNAME \}\}
          cf_password: \$\{\{ secrets.CF_PASSWORD \}\}
          cf_org: \$\{\{ secrets.CF_ORG \}\}
          cf_space: \$\{\{ secrets.CF_SPACE \}\}
          command: push
`,
  'jenkinsfile': `// Jenkinsfile - Project Piper style
pipeline {
  agent any
  environment {
    CF_API = credentials('cf-api')
    CF_CREDENTIALS = credentials('cf-credentials')
  }
  stages {
    stage('Build') {
      steps {
        sh 'npm ci'
        sh 'npm run build'
      }
    }
    stage('Deploy') {
      steps {
        cloudFoundryDeploy(
          cloudFoundry: [credentialsId: 'cf-credentials'],
          deployTarget: 'dev'
        )
      }
    }
  }
}
`,
  'cf-commands': `# Cloud Foundry CLI - Common Commands
# Copy and run in your terminal (replace placeholders)

# Login
cf login -a https://api.cf.region.hana.ondemand.com

# Target org/space
cf target -o my-org -s dev

# Deploy app
cf push my-app -p ./dist

# Rolling deploy (zero-downtime)
cf push my-app -p ./dist --strategy rolling

# Scale
cf scale my-app -i 3 -m 512M

# View logs
cf logs my-app --recent

# List apps
cf apps
`,
};

const DEFAULT_DEVELOPER = DEVELOPER_TEMPLATES['cap-handler'];
const DEFAULT_DEVOPS = DEVOPS_TEMPLATES['manifest'];

export default function DevelopmentSandbox() {
  const [mode, setMode] = useState<'developer' | 'devops'>('developer');
  const [devCode, setDevCode] = useState(DEFAULT_DEVELOPER);
  const [devopsCode, setDevopsCode] = useState(DEFAULT_DEVOPS);
  const [output, setOutput] = useState('');
  const [copied, setCopied] = useState(false);

  const runDeveloperCode = useCallback(async () => {
    setOutput('');
    const logs: string[] = [];
    const originalLog = console.log;
    (console as any).log = (...args: unknown[]) => {
      logs.push(args.map(a => typeof a === 'object' ? JSON.stringify(a, null, 2) : String(a)).join(' '));
    };
    try {
      const fn = new Function('return (async () => { ' + devCode + ' })()');
      await fn();
      setOutput(logs.length ? logs.join('\n') : '(no output)');
    } catch (e: unknown) {
      setOutput(`Error: ${(e as Error).message}`);
    } finally {
      (console as any).log = originalLog;
    }
  }, [devCode]);

  const loadDeveloperTemplate = (key: string) => {
    if (DEVELOPER_TEMPLATES[key]) setDevCode(DEVELOPER_TEMPLATES[key]);
    setOutput('');
  };

  const loadDevopsTemplate = (key: string) => {
    if (DEVOPS_TEMPLATES[key]) setDevopsCode(DEVOPS_TEMPLATES[key]);
    setOutput('');
  };

  const copyToClipboard = useCallback(async () => {
    const code = mode === 'developer' ? devCode : devopsCode;
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, [mode, devCode, devopsCode]);

  const validateYaml = useCallback(() => {
    try {
      // Basic YAML-like validation - check for common issues
      const lines = devopsCode.split('\n');
      const hasContent = lines.some(l => l.trim().length > 0);
      if (!hasContent) {
        setOutput('Empty content.');
        return;
      }
      // Simple bracket/indent check
      const open = (devopsCode.match(/[\[{\(]/g) || []).length;
      const close = (devopsCode.match(/[\]}\)]/g) || []).length;
      if (open !== close) {
        setOutput('Warning: Possible bracket mismatch.');
      } else {
        setOutput('No obvious syntax issues. Copy to your project and deploy!');
      }
    } catch {
      setOutput('Validation complete.');
    }
  }, [devopsCode]);

  return (
    <div className={styles.sandbox}>
      <div className={styles.tabs}>
        <button
          className={`${styles.tab} ${mode === 'developer' ? styles.tabActive : ''}`}
          onClick={() => setMode('developer')}
        >
          👨‍💻 SAP Developer
        </button>
        <button
          className={`${styles.tab} ${mode === 'devops' ? styles.tabActive : ''}`}
          onClick={() => setMode('devops')}
        >
          🚀 SAP DevOps
        </button>
      </div>

      <div className={styles.toolbar}>
        {mode === 'developer' ? (
          <>
            <button onClick={runDeveloperCode} className={styles.runBtn}>▶ Run</button>
            <span className={styles.templateLabel}>Tutorials:</span>
            {Object.keys(DEVELOPER_TEMPLATES).map((k) => (
              <button key={k} onClick={() => loadDeveloperTemplate(k)} className={styles.templateBtn}>
                {k.replace(/-/g, ' ')}
              </button>
            ))}
          </>
        ) : (
          <>
            <button onClick={validateYaml} className={styles.runBtn}>✓ Validate</button>
            <span className={styles.templateLabel}>Templates:</span>
            {Object.keys(DEVOPS_TEMPLATES).map((k) => (
              <button key={k} onClick={() => loadDevopsTemplate(k)} className={styles.templateBtn}>
                {k.replace(/-/g, ' ')}
              </button>
            ))}
          </>
        )}
        <button onClick={copyToClipboard} className={styles.copyBtn}>
          {copied ? '✓ Copied!' : '📋 Copy'}
        </button>
      </div>

      <div className={styles.editorArea}>
        <div className={styles.editorPanel}>
          <div className={styles.editorHeader}>
            {mode === 'developer' ? 'JavaScript (CAP patterns)' : 'YAML / Config'}
          </div>
          <textarea
            value={mode === 'developer' ? devCode : devopsCode}
            onChange={(e) => mode === 'developer' ? setDevCode(e.target.value) : setDevopsCode(e.target.value)}
            spellCheck={false}
            className={styles.codeInput}
            placeholder={mode === 'developer' ? 'Enter JavaScript...' : 'Enter YAML or config...'}
          />
        </div>
        <div className={styles.outputPanel}>
          <div className={styles.outputHeader}>Output</div>
          <pre className={styles.outputContent}>
            {output || (mode === 'developer' ? 'Click Run to execute. Use tutorials to learn CAP patterns.' : 'Click Validate or Copy. Edit templates for your project.')}
          </pre>
        </div>
      </div>
    </div>
  );
}
