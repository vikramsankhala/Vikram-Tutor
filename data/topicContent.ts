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
  's4hana-cloud': {
    title: 'S/4HANA Cloud',
    sections: [
      {
        title: 'Overview',
        content: 'SAP S/4HANA Cloud Public Edition is SAP\'s cloud-native ERP. Unlike on-premise S/4HANA, it follows a strict upgrade and configuration model: no direct system modifications. Configuration is done via SAP Central Business Configuration (CBC), and customisation uses extensibility tools that preserve the Clean Core.',
      },
      {
        title: 'Deployment Options',
        content: `flowchart TB
    subgraph Landscapes["S/4HANA Cloud Landscapes"]
      A[2-System Landscape]
      B[3-System Landscape]
    end
    A --> A1[Production]
    A --> A2[Quality]
    B --> B1[Production]
    B --> B2[Test]
    B --> B3[Development]
    B3 --> B3a[Starter System]`,
        type: 'diagram',
      },
      {
        title: '2-System Landscape',
        content: '• Production + Quality systems\n• Configuration managed via SAP Central Business Configuration (CBC)\n• Configuration deployed to Quality first, then transported to Production\n• Some system-specific settings can be modified directly in Production\n• Suitable for simpler implementations with limited development needs',
      },
      {
        title: '3-System Landscape',
        content: '• Production + Test + Development systems\n• Development system includes a Starter System for initial project phases (SAP Activate)\n• CBC business instance integrated with Development system\n• Configuration deployed to Development, then transported through Test to Production\n• Enables developer extensibility (ABAP Environment, side-by-side on BTP)\n• Enhanced quality assurance through separation of environments\n• Change logging, tracking, and solution lifecycle management',
      },
      {
        title: 'Starter System',
        content: '• Provisioned as part of 3-system landscape initial setup\n• Designed for initial project phases (SAP Activate methodology)\n• Supports scoping, configuration, and key user extensibility\n• Used for deploying preconfigured reference content and fine-tuning\n• Typically operational only during implementation; Production/Test/Dev remain for ongoing use',
      },
      {
        title: 'Configuration: SAP Central Business Configuration (CBC)',
        content: '• CBC replaces the legacy "Manage Your Solution" app\n• New clients are automatically linked to CBC upon onboarding\n• Configuration performed through CBC workspaces connected to deployment systems\n• Activities categorised by go-live relevance: Mandatory, Recommended, Optional',
      },
      {
        title: 'Configuration Process',
        content: `flowchart LR
    A[Select Scope] --> B[Organisational Structure]
    B --> C[Product-Specific Values]
    C --> D[Mark Completed]
    D --> E[Transport to Target]`,
        type: 'diagram',
      },
      {
        title: 'Configuration Steps',
        content: '1. Select scope and organisational structure\n2. Enter product-specific configuration values based on gathered requirements\n3. Mark activities as "Completed" once finalised\n4. Transport changes automatically to deployment targets (Quality, Test, Production)\n\nConfiguration is transported, not manually re-entered in each system.',
      },
      {
        title: 'Transporting Business Configuration',
        content: '• Configuration changes are transported from source to target systems\n• Transport routes define the flow: Dev → Test → Prod (3-system) or Quality → Prod (2-system)\n• Product-specific configuration values (e.g. FI, SD, MM settings) are versioned and transported\n• Prevents configuration drift and ensures consistency across environments',
      },
      {
        title: 'Customisation: Extensibility Options',
        content: `flowchart TB
    subgraph InApp["In-App Extensibility"]
      I1[Key User]
      I2[Developer]
    end
    subgraph SideBySide["Side-by-Side"]
      S1[BTP Apps]
      S2[ABAP Environment]
    end
    subgraph KeyUser["Key User (No Code)"]
      K1[Personalisation]
      K2[Custom Fields]
    end
    subgraph Developer["Developer Extensions"]
      D1[Custom Logic]
      D2[Custom UI]
      D3[New Fields]
    end`,
        type: 'diagram',
      },
      {
        title: 'Key User Extensibility',
        content: '• No coding required\n• Personalisation via Fiori apps (e.g. hide fields, add columns)\n• Custom fields and logic via adaptation tools\n• Available in 2-system and 3-system landscapes\n• Changes are tenant-specific and upgrade-stable',
      },
      {
        title: 'Developer Extensibility (In-App)',
        content: '• ABAP Environment (Embedded Steampunk) in 3-system landscapes only\n• Custom code, CDS views, logic, and UI extensions\n• Runs inside the S/4HANA Cloud tenant\n• Must follow ABAP Cloud restrictions (released APIs only)\n• RAP for OData services and Fiori Elements',
      },
      {
        title: 'Side-by-Side Extensibility',
        content: '• Custom applications built on SAP BTP\n• ABAP Environment (standalone) or Cloud Foundry (CAP, Node.js, Java)\n• Clean Core: S/4HANA core unchanged; extensions communicate via APIs and events\n• Lifecycle stability: upgrades do not affect BTP extensions\n• Event-driven integration via SAP Event Mesh',
      },
      {
        title: 'Choosing the Right Extension Type',
        content: '• Key User: Quick UI changes, simple fields, no transport needed\n• In-App Developer: Complex logic, S/4 data access, 3-system landscape required\n• Side-by-Side: New business processes, independent apps, maximum flexibility',
      },
      {
        title: 'SAP Activate & Implementation',
        content: '• SAP Activate methodology guides implementation\n• Discovery, Prepare, Explore, Realise, Deploy, Run phases\n• Fit-to-Standard workshops: scope and configuration\n• Best Practices content available in CBC for rapid deployment\n• Starter system supports Explore and early Realise phases',
      },
      {
        title: 'Quick Reference',
        content: '• 2-System: Prod + Quality; CBC config; Quality → Prod transport\n• 3-System: Prod + Test + Dev; Dev extensibility; Dev → Test → Prod transport\n• CBC: Central configuration; workspaces; Mandatory/Recommended/Optional\n• Key User: No code; Fiori personalisation; tenant-specific\n• Developer: ABAP Cloud; RAP; 3-system only\n• Side-by-Side: BTP; Clean Core; API/Event integration',
      },
    ],
  },
  'abap': {
    title: 'ABAP',
    sections: [
      {
        title: 'What is ABAP?',
        content: 'ABAP (Advanced Business Application Programming) is SAP\'s primary programming language for building business applications. It runs on the SAP NetWeaver Application Server and powers S/4HANA, ECC, and custom developments. ABAP supports both procedural and object-oriented programming.',
      },
      {
        title: 'ABAP Environments',
        content: `flowchart LR
    A[ABAP] --> B[On-Premise]
    A --> C[ABAP Cloud]
    B --> B1[S/4HANA, ECC]
    C --> C1[BTP ABAP Env]
    C --> C2[S/4HANA Cloud]`,
        type: 'diagram',
      },
      {
        title: 'Classic ABAP vs ABAP Cloud',
        content: 'Classic ABAP: Full access to SAP internals; Dynpro screens; direct table access; function modules; BAPIs.\n\nABAP Cloud: Restricted to released APIs (C1/C2); no classic Dynpro; no direct SAP table SELECT; CDS, RAP, released classes only. Use for cloud-ready, upgrade-stable code.',
      },
      {
        title: 'ABAP Dictionary (SE11)',
        content: '• Tables: Transparent tables, pooled, clustered\n• Data Elements: Semantic types with domain\n• Domains: Technical type, value range, fixed values\n• Structures: Field groupings\n• Table Types: For internal tables\n• Views: Database views, maintenance views, help views',
      },
      {
        title: 'Internal Tables',
        content: '• Standard: Linear access, APPEND, READ TABLE\n• Sorted: Binary search, unique/non-unique key\n• Hashed: Key-based access, unique key\n• SELECT ... INTO TABLE @data(itab): Populate from DB\n• LOOP AT itab, READ TABLE, MODIFY, DELETE',
      },
      {
        title: 'Open SQL',
        content: '• SELECT FROM dbtab: Single, for all entries, joins\n• INSERT, UPDATE, MODIFY, DELETE\n• Host variables: @variable, @(expression)\n• CDS views: SELECT FROM cdv_entity\n• Avoid SELECT *; use field list; use UP TO n rows',
      },
      {
        title: 'ABAP Objects',
        content: '• Classes: CLASS ... ENDCLASS\n• Methods: Instance, static\n• Visibility: PUBLIC, PROTECTED, PRIVATE\n• Inheritance: INHERITING FROM\n• Interfaces: INTERFACES\n• Reference variables: DATA ref TYPE REF TO class',
      },
      {
        title: 'Key ABAP Constructs',
        content: '• DATA, CONSTANTS, PARAMETERS\n• IF, CASE, LOOP, WHILE\n• Function modules: CALL FUNCTION\n• BAPIs: Business Application Programming Interfaces\n• ALV: ABAP List Viewer for reports\n• Message: MESSAGE ... TYPE \'E\'',
      },
      {
        title: 'Development Tools',
        content: '• ABAP Development Tools (ADT): Eclipse-based IDE\n• SAP Business Application Studio: Browser-based, for BTP\n• Transaction SE80: Classic ABAP Workbench\n• Transaction SE24: Class Builder\n• abapGit: Version control for ABAP',
      },
      {
        title: 'Quick Reference',
        content: '• Classic: Full access; Dynpro; direct tables\n• Cloud: Released APIs only; CDS; RAP\n• Internal tables: STANDARD, SORTED, HASHED\n• Open SQL: SELECT FROM, host vars @\n• See RAP & ABAP Cloud topic for RAP-specific content',
      },
    ],
  },
  'basis': {
    title: 'SAP Basis',
    sections: [
      {
        title: 'What is SAP Basis?',
        content: 'SAP Basis is the technical foundation of SAP systems. It covers system administration, user management, transport, performance tuning, database administration, and infrastructure. Basis administrators ensure SAP systems run reliably and securely.',
      },
      {
        title: 'Basis Components',
        content: `flowchart TB
    A[Basis] --> B[User & Auth]
    A --> C[Transport]
    A --> D[Performance]
    A --> E[Jobs & Spool]
    B --> B1[SU01, PFCG]
    C --> C1[STMS, SE09]
    D --> D1[ST05, ST12]
    E --> E1[SM37, SP01]`,
        type: 'diagram',
      },
      {
        title: 'User Management',
        content: '• SU01: User maintenance (create, lock, unlock)\n• SU53: Authorization check (why access denied)\n• PFCG: Role maintenance (transaction, authorization objects)\n• SU24: Authorization object default values\n• User types: Dialog, System, Service, Communication',
      },
      {
        title: 'Authorization',
        content: '• Authorization objects: S_TCODE, S_TABU_DIS, etc.\n• Roles: Collection of authorizations\n• Composite roles: Group of single roles\n• Profile generator: Generates authorization profiles from roles\n• SU53: Authorization trace for troubleshooting',
      },
      {
        title: 'Transport System',
        content: '• STMS: Transport Management System\n• SE09/SE10: Transport Organizer (change requests)\n• Development → Consolidation → Import\n• Transport route: Dev → QA → Prod\n• R3TR (repository), CUST (customizing)',
      },
      {
        title: 'Background Jobs',
        content: '• SM37: Job overview (active, finished, cancelled)\n• SM36: Create job\n• Job steps: ABAP program, external command, external program\n• Start condition: Date/time, event, after job\n• Spool: SM37 → Output, SP01 for spool requests',
      },
      {
        title: 'Performance & Monitoring',
        content: '• ST05: SQL trace (expensive statements)\n• ST12: ABAP trace (runtime analysis)\n• ST22: ABAP dump analysis\n• SM21: System log\n• AL08: User list; SM50: Work processes',
      },
      {
        title: 'Locks & Enqueues',
        content: '• SM12: Lock overview (who holds what)\n• Enqueue: Logical lock (LUW scope)\n• Deadlock: Circular wait; system resolves automatically\n• COMMIT WORK: Release locks',
      },
      {
        title: 'Database & System',
        content: '• DB02: Database overview\n• ST04: Database performance (HANA, Oracle, etc.)\n• SM51: Application servers\n• RZ10: System parameters (instance profile)\n• Logon load balancing: Message server',
      },
      {
        title: 'Cloud Relevance',
        content: '• On-premise: Full Basis control (STMS, SU01, SM37)\n• S/4HANA Cloud: SAP-managed; limited admin access\n• BTP: No Basis; use BTP Cockpit, Cloud Foundry, IAS\n• Hybrid: Cloud Connector, destination config for connectivity',
      },
      {
        title: 'Quick Reference',
        content: '• SU01: Users | PFCG: Roles | SU53: Auth check\n• STMS: Transport | SE09: Change requests\n• SM37: Jobs | SP01: Spool | SM12: Locks\n• ST05: SQL trace | ST22: Dumps',
      },
    ],
  },
  'ai-development': {
    title: 'AI Development in SAP',
    sections: [
      {
        title: 'Overview',
        content: 'SAP\'s AI strategy spans embedded intelligence in business applications, custom ML development on BTP, and generative AI via Joule. Developers can build AI-powered solutions using SAP AI Core (custom ML), SAP AI Business Services (pre-built APIs), and integrate with SAP applications through a unified platform.',
      },
      {
        title: 'AI Development Stack',
        content: `flowchart TB
    subgraph Build["Build AI"]
      A[AI Core]
      B[AI Business Services]
      C[Joule]
    end
    subgraph Integrate["Integrate"]
      D[S/4HANA]
      E[SuccessFactors]
      F[Custom Apps]
    end
    A --> D
    B --> D
    B --> E
    C --> D
    C --> E
    C --> F`,
        type: 'diagram',
      },
      {
        title: 'SAP AI Core',
        content: '• ML lifecycle: Train, deploy, serve custom models\n• Scenarios: Pre-built templates (image classification, regression, etc.)\n• Artifacts: Store datasets, models, executables\n• Deployments: REST endpoints for inference\n• Runs on Kubernetes; integrates with BTP subaccount\n• Python-based; use SAP AI Launchpad or APIs',
      },
      {
        title: 'AI Core Concepts',
        content: '• Scenario: Defines input/output schema and execution flow\n• Execution: Training run or deployment\n• Artifact: Dataset, model, or Docker image\n• Resource Group: Billing and quota boundary\n• OAuth2 for API access; bind AI Core to app',
      },
      {
        title: 'SAP AI Business Services',
        content: '• Pre-built AI APIs; no model training required\n• Document Information Extraction: Extract fields from invoices, receipts\n• Business Entity Recognition: Identify companies, products, locations in text\n• Document Classification: Categorise documents\n• Image Classification, Object Detection\n• Translation, Sentiment Analysis\n• Consume via REST API; enable in BTP Cockpit',
      },
      {
        title: 'Joule – SAP Business AI',
        content: '• AI copilot embedded in SAP applications (S/4HANA, SuccessFactors, etc.)\n• Natural language interface: Ask questions, get answers from business context\n• Proactive suggestions: Recommendations based on user role and data\n• Cross-application: Works across SAP Cloud solutions\n• For end users; developers extend via Joule APIs and embeddings',
      },
      {
        title: 'Generative AI in SAP',
        content: '• Joule uses large language models (LLMs) for conversational AI\n• SAP Build Code: AI-assisted development (code generation, explanations)\n• SAP Build Process Automation: AI in workflows (document processing, decisions)\n• Integration with external LLMs via BTP (e.g. Azure OpenAI, Google)\n• Responsible AI: Data stays in tenant; enterprise governance',
      },
      {
        title: 'SAP Build & AI',
        content: '• SAP Build Apps: AI-assisted app design, formula suggestions\n• SAP Build Process Automation: AI for document extraction, RPA, decisions\n• SAP Build Code: AI for CAP, Fiori, ABAP code generation\n• SAP Build Work Zone: Joule integration in workspaces',
      },
      {
        title: 'HANA ML & Datasphere AI',
        content: '• HANA ML (PAL, APL): Predictive algorithms in-database\n• PAL: Predictive Analysis Library (clustering, regression, classification)\n• APL: Automated Predictive Library (auto feature engineering)\n• Datasphere: AI capabilities in data flows, story augmentation\n• SAC: Predictive analytics, Smart Predict',
      },
      {
        title: 'Integration Patterns',
        content: `flowchart LR
    A[App] --> B[AI Business Service]
    A --> C[AI Core Deployment]
    A --> D[Joule API]
    B --> E[Pre-built Model]
    C --> F[Custom Model]
    D --> G[LLM]`,
        type: 'diagram',
      },
      {
        title: 'Building an AI-Powered App',
        content: '1. Enable AI service in BTP subaccount (AI Core or AI Business Services)\n2. Create destination or bind service to app\n3. Call REST API with OAuth2 token\n4. For AI Core: Create scenario, train, deploy, call deployment endpoint\n5. For AI Business Services: Call service URL with document/text payload\n6. Handle response; integrate into business flow',
      },
      {
        title: 'Responsible AI',
        content: '• Data residency: Customer data stays in tenant/region\n• Transparency: Explainability for model decisions where applicable\n• Bias: Monitor and mitigate in training data\n• Governance: Approval workflows for AI use cases\n• SAP AI Ethics policy; compliance with regulations',
      },
      {
        title: 'Quick Reference',
        content: '• AI Core: Custom ML; scenarios; train → deploy → REST\n• AI Business Services: Pre-built APIs; Document IE, BER, etc.\n• Joule: Copilot; embedded in SAP apps\n• Build: AI-assisted development (Apps, Code, Process Automation)\n• HANA ML: PAL, APL; in-database predictive',
      },
    ],
  },
  'development-tools': {
    title: 'SAP Development Tools',
    sections: [
      {
        title: 'Overview',
        content: 'SAP provides a range of development tools for cloud and on-premise: browser-based IDEs (BAS), desktop IDEs (Eclipse/ADT, VS Code), low-code platforms (SAP Build), and classic ABAP tools. Choose based on your stack (CAP, RAP, Fiori, Integration) and deployment target (BTP, S/4HANA).',
      },
      {
        title: 'Tool Landscape',
        content: `flowchart TB
    subgraph Cloud["Cloud IDEs"]
      A[BAS]
      B[SAP Build]
    end
    subgraph Desktop["Desktop IDEs"]
      C[Eclipse/ADT]
      D[VS Code]
    end
    subgraph Classic["Classic (On-Prem)"]
      E[SE80]
      F[SE24]
    end
    A --> G[CAP, ABAP, Fiori]
    C --> H[ABAP, RAP]
    D --> I[CAP, Fiori]
    B --> J[Apps, Code, Process]`,
        type: 'diagram',
      },
      {
        title: 'SAP Business Application Studio (BAS)',
        content: '• Browser-based IDE; no local install\n• Access: BTP Cockpit → Services → SAP Business Application Studio\n• Dev spaces: Pre-configured (CAP, Full-Stack, Fiori, ABAP)\n• Terminal, Git, npm, MTA build\n• Connect to Cloud Foundry, ABAP Environment, Git repos\n• Extensions: CAP, Fiori, ABAP, MTA',
      },
      {
        title: 'BAS Dev Space Types',
        content: '• SAP CAP: Node.js, Java, cds CLI, HANA tools\n• SAP Full-Stack: CAP + Fiori + UI5 tooling\n• SAP Fiori: Fiori elements, freestyle, annotations\n• SAP ABAP: ABAP Development Tools for cloud\n• Basic: Minimal; add extensions as needed',
      },
      {
        title: 'ABAP Development Tools (ADT)',
        content: '• Eclipse-based IDE for ABAP development\n• Use with: ABAP Environment (BTP), S/4HANA Cloud, S/4HANA on-premise\n• Features: CDS views, RAP, class builder, debugger, refactoring\n• Can run inside BAS (ABAP dev space) or standalone Eclipse\n• Transport: gCTS for cloud; classic transport for on-premise',
      },
      {
        title: 'VS Code & SAP Extensions',
        content: '• SAP CAP: cds init, cds watch, CDS syntax highlighting\n• SAP Fiori: Fiori tools, annotations, preview\n• SAP CDS Language Support: CDL validation\n• Use for local CAP development; deploy via cf push or MTA\n• Lightweight alternative to BAS for CAP-only workflows',
      },
      {
        title: 'cds CLI (CAP Command Line)',
        content: '• cds init: Create new CAP project\n• cds add: Add features (hana, mta, multitenancy)\n• cds watch: Run locally with hot reload\n• cds build: Build for production\n• cds deploy: Deploy to SQLite, HANA, PostgreSQL\n• cds compile: Compile CDS to CSN\n• npm install -g @sap/cds-dk',
      },
      {
        title: 'SAP Build Family',
        content: '• SAP Build Apps: Visual app builder; no-code/low-code; mobile & web\n• SAP Build Code: AI-assisted code generation for CAP, Fiori, ABAP\n• SAP Build Process Automation: Workflows, RPA, forms, decisions\n• SAP Build Work Zone: Launchpad, sites, Joule integration\n• Access via BTP Cockpit or build.sap.com',
      },
      {
        title: 'SAP Fiori Tools',
        content: '• Fiori elements: Annotations in CDS; minimal UI code\n• Application Modeler: Visual page design\n• Guided Development: Step-by-step app creation\n• Annotations language support in BAS/VS Code\n• Preview: Local and deployed OData services',
      },
      {
        title: 'SAP Mobile Development Kit (MDK)',
        content: '• Cross-platform native mobile apps (iOS, Android)\n• MDK client: Runtime for offline-capable apps\n• SAP Build Apps: Can generate MDK-style apps\n• Metadata-driven; define UI and logic declaratively',
      },
      {
        title: 'Integration & API Tools',
        content: '• SAP Integration Suite: CPI design time (web-based integration flows)\n• API Management: API design, developer portal\n• OpenAPI/Swagger support\n• Event Mesh: Configuration in BTP Cockpit',
      },
      {
        title: 'AI & Data Tools',
        content: '• SAP AI Launchpad: Manage AI Core scenarios, executions, deployments\n• SAP Datasphere: Data builder, flows, stories\n• SAP Analytics Cloud: Story design, planning',
      },
      {
        title: 'Version Control & Transport',
        content: '• abapGit: Git for ABAP (Eclipse plugin); push ABAP to GitHub/GitLab\n• gCTS: Git-enabled Change and Transport System (S/4HANA Cloud, ABAP Environment)\n• Cloud Transport Management: For BTP apps (MTA)\n• Classic: SE09/SE10, STMS for on-premise',
      },
      {
        title: 'CLI Tools',
        content: '• cf: Cloud Foundry CLI (cf login, cf push, cf apps)\n• mbt: MTA build tool (mbt build -p cf)\n• cds: CAP CLI\n• kubectl: For Kyma deployment',
      },
      {
        title: 'Classic ABAP Tools (On-Premise)',
        content: '• SE80: Object Navigator, package builder\n• SE24: Class Builder\n• SE11: ABAP Dictionary\n• SE37: Function Builder\n• SE38/SE80: Program/Report editor\n• Transaction-based; not available in S/4HANA Cloud',
      },
      {
        title: 'Choosing the Right Tool',
        content: '• CAP on BTP: BAS or VS Code + cds CLI\n• RAP/ABAP Cloud: ADT in Eclipse or BAS\n• No-code apps: SAP Build Apps\n• Integration: Integration Suite (CPI)\n• AI/ML: AI Launchpad, AI Core APIs\n• On-premise ABAP: Eclipse/ADT or SE80',
      },
      {
        title: 'Quick Reference',
        content: '• BAS: Browser IDE; dev spaces; CAP, ABAP, Fiori\n• ADT: Eclipse; ABAP, RAP\n• cds: cds init, watch, deploy, add\n• Build: Apps, Code, Process Automation, Work Zone\n• abapGit/gCTS: Git for ABAP',
      },
    ],
  },
  'low-code-signavio': {
    title: 'Low Code, No Code & Signavio',
    sections: [
      {
        title: 'Overview',
        content: 'SAP offers a spectrum from no-code (citizen developers) to low-code (professional developers) for building apps, automating processes, and managing business transformation. SAP Build covers apps and process automation; SAP Signavio provides process intelligence and modeling. Together they enable rapid delivery with minimal coding.',
      },
      {
        title: 'Low Code vs No Code',
        content: 'No-code: Visual builders; no programming; business users (e.g. SAP Build Apps, Process Automation workflows)\n\nLow-code: Visual + limited code; faster than full-code; developers (e.g. Fiori Elements, CPI, SAP Build Code)\n\nFull-code: CAP, RAP, ABAP; maximum flexibility',
      },
      {
        title: 'SAP Build Apps Overview',
        content: `flowchart LR
    A[Build Apps] --> B[Visual Builder]
    A --> C[Pre-built UI]
    A --> D[Connectivity]
    B --> E[Mobile & Web]
    C --> E
    D --> F[SAP, Non-SAP]`,
        type: 'diagram',
      },
      {
        title: 'SAP Build Apps',
        content: '• No-code/low-code app builder\n• Drag-and-drop UI components; logic with formulas\n• Pre-built integrations: S/4HANA, SuccessFactors, OData, REST\n• Mobile and web deployment\n• AI-assisted features: Joule for formula suggestions, design guidance\n• Access: build.sap.com or BTP Cockpit',
      },
      {
        title: 'SAP Build Process Automation',
        content: '• Process Builder: Drag-and-drop workflows\n• Generative AI (Joule): Create workflows from natural language\n• Robotic Process Automation (RPA): Attended and unattended bots\n• Automation Recorder: Record user actions to create bots quickly\n• Integration with SAP and non-SAP systems',
      },
      {
        title: 'Process Automation Capabilities',
        content: '• Workflows: Human tasks, approvals, multi-step processes\n• Business Rules: Decision tables, flowcharts\n• Intelligent Document Processing: Extract data from invoices, receipts (templates or LLM)\n• Forms: Digital forms for data capture\n• Content Store: Hundreds of pre-built automation packages',
      },
      {
        title: 'SAP Build Code',
        content: '• AI-assisted code generation for developers\n• Generates CAP, Fiori, ABAP from natural language\n• Explains and refactors existing code\n• Bridges low-code and full-code; accelerates developer productivity',
      },
      {
        title: 'Other Low-Code Options',
        content: '• Fiori Elements: Annotation-driven; minimal UI code; 80% of Fiori use cases\n• Integration Suite (CPI): Visual integration flows; no coding for standard flows\n• SAP Mobile Development Kit (MDK): Metadata-driven mobile apps',
      },
      {
        title: 'SAP Signavio Process Transformation Suite',
        content: `flowchart TB
    subgraph Signavio["SAP Signavio"]
      A[Process Intelligence]
      B[Process Manager]
      C[Collaboration Hub]
    end
    A --> D[Process Mining]
    B --> E[BPMN Modeling]
    C --> F[Process Governance]
    D --> G[Build Process Automation]`,
        type: 'diagram',
      },
      {
        title: 'SAP Signavio Process Intelligence',
        content: '• AI-powered process mining\n• Uses event log data from SAP and non-SAP systems\n• Discovers actual process execution (as-is vs as-designed)\n• Identifies bottlenecks, inefficiencies, compliance gaps\n• Automated recommendations for improvement\n• Links to SAP Build Process Automation: pre-built workflows from recommendations',
      },
      {
        title: 'SAP Signavio Process Manager',
        content: '• BPMN 2.0 process modeling\n• Process design, simulation, governance\n• Collaborative editing; version control\n• Export BPMN to SAP Build Process Automation: Import models directly for automation\n• Process repository: Single source of truth',
      },
      {
        title: 'SAP Signavio Process Collaboration Hub',
        content: '• 360-degree process visibility\n• Single source of truth for process documentation\n• Audience-specific home pages (Finance, HR, etc.)\n• Comments, feedback, approvals\n• Step-by-step walk-throughs for training',
      },
      {
        title: 'Signavio & Build Integration',
        content: '• Process Intelligence recommendations → Pre-built workflows in Build Process Automation\n• BPMN models from Signavio → Import into Build for execution\n• Close the loop: Discover → Design → Automate → Monitor',
      },
      {
        title: 'SAP LeanIX (Enterprise Architecture)',
        content: '• Enterprise architecture management\n• Application portfolio management\n• Technology landscape visibility\n• Complements Signavio for transformation planning',
      },
      {
        title: 'Choosing the Right Approach',
        content: '• Citizen developer, simple app: SAP Build Apps\n• Workflow, approvals, RPA: SAP Build Process Automation\n• Process discovery, optimization: SAP Signavio Process Intelligence\n• Process modeling, governance: SAP Signavio Process Manager\n• Integration: Integration Suite (CPI)\n• Custom logic: CAP, RAP, ABAP',
      },
      {
        title: 'Quick Reference',
        content: '• Build Apps: No-code apps; visual builder; mobile & web\n• Build Process Automation: Workflows, RPA, IDP, rules\n• Build Code: AI-assisted code generation\n• Signavio Intelligence: Process mining; recommendations\n• Signavio Manager: BPMN; export to Build\n• Signavio Hub: Process collaboration',
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
  'cap-framework': {
    title: 'CAP Framework',
    sections: [
      {
        title: 'What is CAP?',
        content: 'CAP (Cloud Application Programming Model) is a framework of tools, languages, and libraries for building enterprise-grade services and apps on SAP BTP. It provides opinionated defaults for best practices while remaining open for customisation.',
      },
      {
        title: 'CAP Components',
        content: 'CDS (Core Data Services): Universal modelling — CDL → CSN → OData/SQL/GraphQL\nService SDKs: @sap/cds (Node.js), com.sap.cds (Java)\nDevelopment Tools: BAS, VS Code, cds CLI\nDatabase: HANA Cloud, PostgreSQL, SQLite (dev)\nFrontend: SAP Fiori/UI5, Vue.js, React, Angular',
      },
      {
        title: 'Project Structure',
        content: 'db/ — CDS data models (schema.cds)\nsrv/ — Service definitions + handlers (catalog-service.cds, .js)\napp/ — Frontend apps (Fiori, UI5)\npackage.json — Dependencies + cds config\n.cdsrc.json — CAP profiles\nmta.yaml — MTA deployment descriptor',
      },
      {
        title: 'CDS Concepts',
        content: 'Entity: Database table (entity Books { title: String; })\nAspect: Reusable mixin (cuid, managed)\nAssociation: FK relationship (author: Association to Authors)\nComposition: Ownership, deep ops (items: Composition of OrderItems)\nProjection: Subset for service (entity Books as projection on bookshop.Books)\nlocalized: Auto-creates _texts companion table',
      },
      {
        title: 'Handler Order',
        content: 'BEFORE → ON → AFTER. Multiple handlers chain in registration order. req.reject() or req.error() stops the chain.',
      },
      {
        title: 'CAP Auth Strategies',
        content: 'dummy: Local dev, req.user = anonymous\nmocked: .cdsrc.json users for testing\njwt/xsuaa: Production, XSUAA validates token\nias: IAS-only flows without XSUAA mapping',
      },
      {
        title: 'CAP Multitenancy (MTX)',
        content: 'cds-mtxs: SaaS multitenancy. Each tenant gets isolated HDI container. Onboarding auto-creates tenant DB. t0 = provider tenant.',
      },
    ],
  },
  'rap-abap-cloud': {
    title: 'RAP & ABAP Cloud',
    sections: [
      {
        title: 'RAP Architecture Layers',
        content: 'Data Model: CDS View Entity (interface view)\nBO Projection: CDS Projection View for use case\nBehaviour Definition (BDEF): Declares CRUD, actions, validations\nBehaviour Implementation: ABAP local classes\nService Definition: Exposes projection as OData\nService Binding: Binds to OData V2/V4',
      },
      {
        title: 'Managed vs Unmanaged',
        content: 'Managed: Framework auto-handles CRUD via persistent table. Use for standard DB persistence.\nUnmanaged: Developer writes all CRUD logic. Use for custom storage, external systems.',
      },
      {
        title: 'BDEF Keywords',
        content: 'lock master: Pessimistic locking\netag master: Optimistic locking via ETag\ndraft determine action: Draft capability\ndetermination: Auto-calculate on save\nvalidation: Check before save\nfeature control: Dynamic enable/disable per instance',
      },
      {
        title: 'ABAP Cloud Restrictions',
        content: 'FORBIDDEN: SAP internal APIs, classic Dynpro, direct SAP table SELECT\nALLOWED: Released APIs (C1/C2), cl_http_client, IF_ABAP_BEHV\nReleased: IF_WEB_HTTP_CLIENT, CL_BCS_MAIL, CL_ABAP_CONTEXT_INFO',
      },
    ],
  },
  'fiori-ui5': {
    title: 'SAP Fiori & UI5',
    sections: [
      {
        title: 'Fiori Application Types',
        content: 'Fiori Elements: Template apps from OData + annotations; minimal code; 80% of use cases\nFreestyle SAPUI5: Full custom UI5; total control\nSAP Build Apps: No-code drag-and-drop\nMDK: Cross-platform native mobile',
      },
      {
        title: 'Floor Plans',
        content: 'List Report + Object Page: @UI.LineItem, @UI.FieldGroup — most common\nWorklist: Task list\nOverview Page: Dashboard with KPI, table, chart\nAnalytical List Page: Chart + table, filter bar\nFlexible Column Layout: Side-by-side list and detail\nWizard: Multi-step flows',
      },
      {
        title: 'SAPUI5 Lifecycle',
        content: 'onInit: Controller instantiated, init models\nonBeforeRendering: Pre-render prep\nonAfterRendering: DOM ready, focus management\nonRouteMatched: Navigation, load entity\nonExit: Cleanup, detach listeners',
      },
      {
        title: 'OData V2 vs V4',
        content: 'V4: Preferred for new Fiori Elements; native draft; streamlined JSON\nV2: Older apps; limited lambda filters',
      },
    ],
  },
  'btp-security': {
    title: 'BTP Security',
    sections: [
      {
        title: 'XSUAA',
        content: 'OAuth2 auth service in BTP CF. Issues JWT with user identity, scopes, tenant. xs-security.json defines scopes, role templates. Role Collections assigned to users.',
      },
      {
        title: 'xs-security.json',
        content: 'xsappname, tenant-mode (dedicated|shared)\nscopes: $XSAPPNAME.read, .write, .admin\nrole-templates: Viewer, Editor, Admin with scope-references',
      },
      {
        title: 'IAS',
        content: 'Application IdP hub. Corporate IdPs federate into IAS. SSO across SAP apps. Token transformation (SAML → OIDC). User provisioning via SCIM.',
      },
      {
        title: 'Destination Service',
        content: 'getDestination({ destinationName }). executeHttpRequest(destination, { method, url }). Cloud Connector creates tunnel for on-premise.',
      },
      {
        title: 'Principal Propagation',
        content: 'Pass logged-in user identity through to on-premise backend via Cloud Connector.',
      },
    ],
  },
  'cicd-btp': {
    title: 'CI/CD on BTP',
    sections: [
      {
        title: 'Pipeline Options',
        content: 'SAP CI/CD Service: SAP-managed, predefined stages, minutes setup\nProject Piper: Jenkins, high flexibility, hours setup\nGitHub Actions: Cloud-native, high flexibility\nCustom: Full control, days setup',
      },
      {
        title: 'Pipeline Stages',
        content: 'Build → Unit Tests → Lint → Malware Scan → Integration Tests → Acceptance Tests → Deploy → Release',
      },
      {
        title: 'Quality Gates',
        content: 'Tests pass + lint clean + health check 200 OK + no critical alerts',
      },
    ],
  },
  'mta-deployment': {
    title: 'MTA & Deployment',
    sections: [
      {
        title: 'mta.yaml',
        content: 'modules = deployable units (apps, DB deployers). resources = backing services (HANA, XSUAA, Destination). requires = dependency. provides = exposes property (e.g. srv-url) for others via ~{}.',
      },
      {
        title: 'MBT Commands',
        content: 'mbt build -p cf: Build .mtar for Cloud Foundry\nmbt build -p kyma: Build for Kyma\nmbt build -t ./target: Output directory\ncf deploy target/myapp.mtar: Deploy MTA',
      },
      {
        title: 'CF CLI',
        content: 'cf login, cf target -o -s\ncf deploy, cf apps, cf app <name>\ncf logs <name> --recent, cf scale -i 3 -m 512M\ncf env: VCAP_SERVICES with bound credentials',
      },
      {
        title: 'VCAP_SERVICES',
        content: 'Auto-injected by CF. Contains xsuaa credentials (clientid, url), hana (host, schema, user, password). Access via process.env.VCAP_SERVICES.',
      },
    ],
  },
  'transport-alm': {
    title: 'Transport & ALM',
    sections: [
      {
        title: 'Cloud Transport Management (cTMS)',
        content: 'Transport Node: Deployment target (subaccount + space)\nTransport Route: Dev → Test → QA → Prod\nTransport Request: Container for .mtar artifacts\nTransport Action: Import into next node\nAudit Trail: Who, what, when\nApproval Workflow: Operator approves before import',
      },
      {
        title: 'Separation of Concerns',
        content: 'Developers create transport requests via pipeline. Central operations approves and imports to Test/Production. Prevents unauthorised production changes.',
      },
      {
        title: 'SAP Cloud ALM',
        content: 'Implementation: Scope, tasks, test mgmt, deployment\nOperations: Health monitoring, integration monitoring, alert inbox\nTransport Management: cTMS integration, approval workflows\nCloud ALM = SaaS for cloud; SolMan = on-premise for hybrid',
      },
    ],
  },
  'monitoring-ops': {
    title: 'Monitoring & Ops',
    sections: [
      {
        title: 'Alert Notification Service (ANS)',
        content: 'Event → Condition (filter) → Action (email, Slack, PagerDuty). Subscription = condition + action pair.',
      },
      {
        title: 'Application Logging',
        content: 'cds.log(\'bookshop\'). info, warn, error. Structured JSON. Correlation ID for tracing. Ingested by BTP Application Logging.',
      },
      {
        title: 'Monitoring Services',
        content: 'ANS: Configurable conditions → actions\nApplication Logging: Kibana, full-text search\nCF Metrics: CPU, memory, autoscaler\nCloud ALM Health: Cross-service health\nDynatrace: Full-stack APM, traces\nAudit Log: Security events, compliance',
      },
    ],
  },
  'architecture-patterns': {
    title: 'Architecture Patterns',
    sections: [
      {
        title: 'Event-Driven',
        content: 'Event Producer → Event Mesh → Event Consumer. Topic: sap/s4/beh/salesorder/v1/... CloudEvents format. Queue for at-least-once delivery.',
      },
      {
        title: 'Side-by-Side Extension',
        content: 'S/4 Business Event → Event Mesh → CAP/Kyma. Extension logic on BTP. HANA Cloud for data. Fiori tile. S/4 via Destination APIs only. Clean Core.',
      },
      {
        title: 'Architecture Decision Guide',
        content: 'New SaaS: CAP + HANA + cds-mtxs + CF\nExtend S/4: RAP + Embedded Steampunk + Fiori Elements\nReal-time integration: CPI + Event Mesh\nNo-code mobile: SAP Build Apps + MDK\nServerless: Kyma Function + Event Mesh trigger',
      },
    ],
  },
  'quick-reference': {
    title: 'Quick Reference',
    sections: [
      {
        title: 'CAP Key Facts',
        content: 'Handler order: BEFORE → ON → AFTER\nLocal auth: dummy (anonymous)\nCF auth: jwt/xsuaa\nmanaged adds: createdAt, createdBy, modifiedAt, modifiedBy\ncuid adds: ID : UUID\nCSN = Core Schema Notation\nComposition = ownership; Association = reference',
      },
      {
        title: 'RAP Key Facts',
        content: 'BDEF: managed implementation in class ...\nETag: Optimistic locking\nDraft: Save incomplete data\nFeature Controls: Enable/disable per instance\nABAP Cloud: No internal APIs, no classic dynpro, no direct SAP table SELECT',
      },
      {
        title: 'DevOps Key Facts',
        content: 'mta.yaml: modules = apps; resources = services\nmbt build -p cf; cf deploy target/*.mtar\ncf logs <app> (no --recent for stream)\nVCAP_SERVICES: Bound credentials\ncTMS: Developer creates TR; Ops imports to prod',
      },
      {
        title: 'Conventional Commits',
        content: 'feat: Minor bump | fix: Patch | chore: No bump | BREAKING CHANGE: Major bump',
      },
    ],
  },
};
