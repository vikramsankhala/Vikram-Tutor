export const topicContent: Record<string, {
  title: string;
  sections: { title: string; content: string; type?: 'formula' | 'diagram' | 'example' }[];
}> = {
  'core-fundamentals': {
    title: 'Core Fundamentals',
    sections: [
      {
        title: 'What is SAP BTP?',
        content: 'SAP Business Technology Platform (BTP) is SAP\'s enterprise platform for building, extending, and integrating applications. It\'s not a single product—it\'s a unified platform that combines database and data management, analytics, application development, integration, and AI services.',
      },
      {
        title: 'Architecture Overview',
        content: `flowchart TB
    subgraph BTP["SAP BTP"]
      A[Application Development]
      B[Integration]
      C[Data & Analytics]
      D[AI & Automation]
      E[Security & Connectivity]
    end
    A --> F[Cloud Foundry / Kyma]
    A --> G[ABAP Environment]
    B --> H[Integration Suite]
    C --> I[HANA Cloud]
    C --> J[Datasphere]`,
        type: 'diagram',
      },
      {
        title: 'Key Capabilities',
        content: '• Database & Data Management: SAP HANA Cloud, SAP Datasphere\n• Analytics: SAP Analytics Cloud (SAC)\n• Application Development: SAP Build, CAP, RAP\n• Integration: Integration Suite, API Management, Event Mesh\n• AI & Automation: SAP AI Core, Joule, Build Process Automation\n• Security: Identity Authentication Service, Cloud Connector, Destination Service',
      },
      {
        title: 'Deployment Model',
        content: '• Cloud Foundry: Polyglot runtime for microservices\n• Kyma: Kubernetes-based for containerized workloads\n• ABAP Environment: SAP\'s enterprise language for S/4 extensions\n• Neo: Legacy environment (being phased out)',
      },
    ],
  },
  'application-development': {
    title: 'Application Development',
    sections: [
      {
        title: 'You Build the Logic',
        content: 'Application Development is where you create behavior. SAP BTP enables you to build cloud-native applications, extend SAP solutions, and develop custom applications using modern frameworks.',
      },
      {
        title: 'Development Options',
        content: `flowchart LR
    A[App Development] --> B[ABAP Environment]
    A --> C[Cloud Foundry / Kyma]
    A --> D[SAP Build Apps]
    B --> B1[S/4 Extensions]
    C --> C1[Microservices]
    D --> D1[No-code Apps]`,
        type: 'diagram',
      },
      {
        title: 'ABAP Environment',
        content: '• Extend S/4HANA with ABAP Cloud\n• SAP-managed runtime, always up-to-date\n• RAP (Restful ABAP Programming) for OData services\n• Side-by-side extensions with clean separation',
      },
      {
        title: 'Cloud Foundry / Kyma',
        content: '• Polyglot: Node.js, Java, Python, Go\n• SAP Cloud Application Programming Model (CAP)\n• Microservices architecture\n• Container-based deployment with Kubernetes (Kyma)',
      },
      {
        title: 'SAP Build Apps',
        content: '• Low-code/no-code platform\n• Visual app builder\n• Pre-built integrations\n• Mobile and web deployment',
      },
      {
        title: 'CAP (Cloud Application Programming Model)',
        content: '• Domain-driven design\n• CDS (Core Data Services) for data modeling\n• Automatic service provisioning\n• Built-in OData and REST support',
      },
    ],
  },
  'integration': {
    title: 'Integration',
    sections: [
      {
        title: 'You Make Systems Talk',
        content: 'Integration is where you create communication. SAP BTP provides tools to connect SAP and non-SAP systems, expose APIs, and enable event-driven architectures.',
      },
      {
        title: 'Integration Services',
        content: `flowchart LR
    A[Integration Suite] --> B[CPI]
    A --> C[API Management]
    A --> D[Event Mesh]
    B --> B1[Process Integration]
    C --> C1[API Gateway]
    D --> D1[Event-Driven]`,
        type: 'diagram',
      },
      {
        title: 'Integration Suite (CPI)',
        content: '• SAP Cloud Integration (formerly CPI)\n• Pre-built connectors: S/4HANA, SuccessFactors, Salesforce\n• Integration flows with visual designer\n• Support for REST, SOAP, OData, IDoc',
      },
      {
        title: 'API Management',
        content: '• Central API gateway\n• API design and lifecycle management\n• Rate limiting and throttling\n• Developer portal for API consumers',
      },
      {
        title: 'Event Mesh',
        content: '• Publish-subscribe messaging\n• Decoupled, event-driven architecture\n• Real-time event propagation\n• SAP Event Mesh for SAP and non-SAP events',
      },
    ],
  },
  'data-analytics': {
    title: 'Data & Analytics',
    sections: [
      {
        title: 'You Make Sense of Data',
        content: 'Data & Analytics is where you create decisions. SAP BTP provides a unified data landscape with in-memory processing, data warehousing, and business intelligence.',
      },
      {
        title: 'Data & Analytics Stack',
        content: `flowchart TB
    A[Data & Analytics] --> B[HANA Cloud]
    A --> C[Datasphere]
    A --> D[Analytics Cloud]
    B --> B1[In-Memory DB]
    C --> C1[Data Warehouse]
    D --> D1[BI & Planning]`,
        type: 'diagram',
      },
      {
        title: 'SAP HANA Cloud',
        content: '• In-memory database\n• High-performance analytics\n• Multi-model: relational, document, graph\n• Spatial and text analytics',
      },
      {
        title: 'SAP Datasphere',
        content: '• Data warehouse cloud (formerly DWC)\n• Unified data landscape\n• Business semantics layer\n• Connect to SAP and non-SAP sources',
      },
      {
        title: 'SAP Analytics Cloud',
        content: '• Business intelligence and planning\n• Predictive analytics\n• Story design and dashboards\n• Integration with S/4HANA, SuccessFactors',
      },
    ],
  },
  'security-governance': {
    title: 'Security & Governance',
    sections: [
      {
        title: 'You Make It Usable in Enterprise',
        content: 'Security & Connectivity is where you create trust. SAP BTP provides identity management, secure connectivity to on-premise systems, and destination management.',
      },
      {
        title: 'Security Services',
        content: `flowchart LR
    A[Security] --> B[Destination Service]
    A --> C[Cloud Connector]
    A --> D[IAS / XSUAA]
    B --> B1[Connectivity]
    C --> C1[On-Premise]
    D --> D1[Identity]`,
        type: 'diagram',
      },
      {
        title: 'Destination Service',
        content: '• Central configuration for destinations\n• Connect to SAP and non-SAP systems\n• OAuth, Basic Auth, Client Certificates\n• Used by applications to reach backend systems',
      },
      {
        title: 'Cloud Connector',
        content: '• Secure tunnel from BTP to on-premise\n• Reverse proxy for SAP systems\n• No firewall changes needed on-premise\n• Supports HTTP, RFC, ODBC',
      },
      {
        title: 'IAS / XSUAA',
        content: '• Identity Authentication Service (IAS): User identity for SAP apps\n• XSUAA: Application-level auth in Cloud Foundry\n• OAuth 2.0 / OpenID Connect\n• Role-based access control',
      },
    ],
  },
  'extensibility': {
    title: 'Extensibility & Customization',
    sections: [
      {
        title: 'Extending SAP Solutions',
        content: 'BTP enables you to extend SAP S/4HANA and SuccessFactors without modifying the core. Use side-by-side extensions, key user extensions, or in-app extensions.',
      },
      {
        title: 'Extension Patterns',
        content: `flowchart TB
    A[Extensibility] --> B[Side-by-Side]
    A --> C[Key User]
    A --> D[In-App]
    B --> B1[BTP Apps]
    C --> C1[Personalization]
    D --> D1[Embedded]`,
        type: 'diagram',
      },
      {
        title: 'S/4HANA Extensions',
        content: '• Side-by-side: ABAP Environment, Cloud Foundry apps\n• Key User: Personalization via Fiori\n• Developer: Custom fields, logic, UI\n• Integration with FI, SD, MM, PS modules',
      },
      {
        title: 'SuccessFactors Extensions',
        content: '• Integration Center for integrations\n• Extensibility framework\n• Custom objects and workflows\n• Integration with BTP services',
      },
    ],
  },
  'operations-devops': {
    title: 'Operations & DevOps',
    sections: [
      {
        title: 'Running Applications on BTP',
        content: 'Operations & DevOps covers CI/CD pipelines, monitoring, logging, and scaling applications deployed on SAP BTP.',
      },
      {
        title: 'DevOps Capabilities',
        content: `flowchart LR
    A[DevOps] --> B[CI/CD]
    A --> C[Monitoring]
    A --> D[Logging]
    B --> B1[Build & Deploy]
    C --> C1[Health]
    D --> D1[Diagnostics]`,
        type: 'diagram',
      },
      {
        title: 'CI/CD Pipelines',
        content: '• SAP Continuous Integration and Delivery (CI/CD)\n• GitHub Actions, Jenkins integration\n• Automated build and deploy\n• Blue-green deployments',
      },
      {
        title: 'Monitoring & Logging',
        content: '• Application Monitoring (Dynatrace)\n• Cloud Foundry metrics and logs\n• Application logs (stdout/stderr)\n• Alerting and dashboards',
      },
      {
        title: 'Scaling',
        content: '• Horizontal scaling: instances\n• Vertical scaling: memory/CPU\n• Auto-scaling policies\n• Kyma: Kubernetes-based scaling',
      },
    ],
  },
  'real-world-scenarios': {
    title: 'Real-World Scenarios',
    sections: [
      {
        title: 'Hybrid & Multi-Cloud',
        content: 'SAP BTP supports hybrid landscapes—connecting cloud applications with on-premise SAP systems. Multi-cloud strategies allow integration with AWS, Azure, and GCP.',
      },
      {
        title: 'Integration Patterns',
        content: `flowchart TB
    A[Real-World] --> B[Hybrid]
    A --> C[Multi-Cloud]
    A --> D[Non-SAP]
    B --> B1[Cloud + On-Prem]
    C --> C1[AWS/Azure/GCP]
    D --> D1[Third-Party]`,
        type: 'diagram',
      },
      {
        title: 'Hybrid Landscapes',
        content: '• Cloud Connector for on-premise connectivity\n• SAP BTP Connectivity Service\n• Secure connectivity to S/4HANA on-premise\n• Integration with legacy systems',
      },
      {
        title: 'Non-SAP Integration',
        content: '• Open connectors for Salesforce, Microsoft 365\n• Generic REST/HTTP adapters\n• Custom connectors\n• Event-driven integration with external systems',
      },
    ],
  },
};
