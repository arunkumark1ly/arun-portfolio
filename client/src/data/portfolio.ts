import type { Experience, Project, Skill } from "@shared/schema";

export const skills: Skill[] = [
  { id: 1, name: "Ruby", category: "Technical", icon: "Gem" },
  { id: 2, name: "Ruby on Rails (v3.0-v7.2+)", category: "Technical", icon: "Gem" },
  { id: 3, name: "React / Next.js", category: "Technical", icon: "Code" },
  { id: 4, name: "Angular", category: "Technical", icon: "Code" },
  { id: 5, name: "PostgreSQL", category: "Technical", icon: "Database" },
  { id: 6, name: "MySQL", category: "Technical", icon: "Database" },
  { id: 7, name: "MongoDB", category: "Technical", icon: "Database" },
  { id: 8, name: "AWS / Heroku / Linode", category: "Technical", icon: "Cloud" },
  { id: 9, name: "Docker", category: "Technical", icon: "Container" },
  { id: 10, name: "REST API / GraphQL", category: "Technical", icon: "Globe" },
  { id: 11, name: "Sidekiq / Delayed Job", category: "Technical", icon: "Zap" },
  { id: 12, name: "ActionCable / Turbo Streams", category: "Technical", icon: "Radio" },
  { id: 13, name: "ActiveMQ / RabbitMQ / Kafka", category: "Technical", icon: "MessageSquare" },
  { id: 14, name: "JavaScript / jQuery", category: "Technical", icon: "FileCode" },
  { id: 15, name: "TailwindCSS / Sass", category: "Technical", icon: "Paintbrush" },
  { id: 16, name: "RSpec / Cucumber", category: "Technical", icon: "TestTube" },
  { id: 17, name: "Git / GitHub Actions", category: "Technical", icon: "GitBranch" },
  { id: 18, name: "Jenkins / CircleCI", category: "Technical", icon: "Settings" },
  { id: 19, name: "Redis / ElasticSearch", category: "Technical", icon: "Search" },
  { id: 20, name: "C / C++", category: "Technical", icon: "Binary" },
  { id: 21, name: "Solution Architecture (HLD/LLD)", category: "Management", icon: "Layout" },
  { id: 22, name: "Technical Leadership", category: "Management", icon: "Users" },
  { id: 23, name: "Agile/Scrum Delivery", category: "Management", icon: "Target" },
  { id: 24, name: "Stakeholder Management", category: "Management", icon: "Handshake" },
  { id: 25, name: "Release Governance", category: "Management", icon: "CheckCircle" },
  { id: 26, name: "Risk/Issue Management", category: "Management", icon: "AlertTriangle" },
  { id: 27, name: "Performance Engineering", category: "Management", icon: "Gauge" },
  { id: 28, name: "Jira / Confluence / ClickUp", category: "Management", icon: "ClipboardList" },
];

export const experience: Experience[] = [
  {
    id: 1,
    role: "Co-founder & Solution Architect",
    company: "ThinkPro Technologies",
    period: "Jan 2024 - Present",
    description:
      "Founded and lead engineering direction at ThinkPro, owning solution architecture (HLD/LLD), execution planning, and end-to-end delivery across internal and client engagements. Architected and built VoiceHunt.news, a technology news publication platform with scalable publishing workflow. Designed the platform using Ruby on Rails (CMS/backend) and React + TailwindCSS UI. Built API-driven modules for content lifecycle, listing/filtering patterns, and SEO-friendly rendering. Implemented performance practices including caching, database optimization, and improvements for high-read pages. Owned DevOps and delivery pipelines using Docker, CI/CD, and release automation. Senior Consultant at SnapCorp across performance improvements and consulting support. Mentored engineers through code reviews and architecture guidance.",
    order: 1,
  },
  {
    id: 2,
    role: "Technical Lead",
    company: "CAI Info India Pvt. Ltd.",
    period: "Feb 2020 - Mar 2023",
    description:
      "Worked as Technical Lead within a senior engineering team, collaborating with developers, leads, product stakeholders, and architects to deliver business-critical enterprise platforms. Contributed hands-on to backend engineering using Ruby on Rails, developing core modules and REST APIs. Owned technical execution across SDLC including requirements analysis, architecture discussions, delivery planning, feature delivery, integration testing, release readiness, and production support. Implemented asynchronous processing using Sidekiq/Delayed Job for reliable background execution. Improved performance through ActiveRecord query optimization, indexing strategies, and refactoring high-latency endpoints. Strengthened release stability through CI/CD pipelines (Jenkins/CircleCI), Docker containerization, and Capistrano deployment automation. Supported enterprise-grade delivery with role-based access control and environment-specific configuration management.",
    order: 2,
  },
  {
    id: 3,
    role: "Senior Software Engineer",
    company: "ZiniosEdge Information Technologies",
    period: "Apr 2018 - Jan 2020",
    description:
      "Developed and scaled a large CRM platform using Ruby on Rails, delivering new modules across customer lifecycle, workflow automation, and reporting. Built and maintained REST APIs with clean architecture and maintainable service boundaries. Integrated analytics and reporting workflows using MicroStrategy and JSReport for automated report generation. Designed and optimized database schema in PostgreSQL/MySQL, improving query performance by ~30% through indexing and query refactoring. Worked across full-stack development using JavaScript, HTML, CSS/Sass for stable UI enhancements.",
    order: 3,
  },
  {
    id: 4,
    role: "Senior Software Engineer (Remote)",
    company: "Aspire Software Consultancy",
    period: "Nov 2016 - Jan 2018",
    description:
      "Collaborated with UK-based B2B marketplace team (Rightboat) as a remote engineer. Owned full lifecycle delivery of product enhancements using Ruby on Rails, from requirement discussions to release support. Built backend workflows, optimized database interactions, and improved reliability through bug fixes and performance tuning. Worked directly with stakeholders for requirement clarity, solution design, and delivery timelines. Managed deployments and support cycles ensuring smooth releases.",
    order: 4,
  },
  {
    id: 5,
    role: "Co-founder & CTO",
    company: "Code Rabbits Technologies",
    period: "Dec 2013 - Oct 2016",
    description:
      "Founded and led engineering execution for eCommerce web/mobile solutions and an internal SaaS eCommerce platform. Designed platform architecture using Ruby on Rails, building modular components for catalog, cart, checkout, orders, and customer workflows. Owned end-to-end engineering delivery including architecture, development standards, code reviews, deployment strategy, and production stability practices. Introduced engineering best practices to improve delivery consistency and code quality.",
    order: 5,
  },
  {
    id: 6,
    role: "Senior Software Developer",
    company: "Mereo Technologies",
    period: "Oct 2012 - Aug 2013",
    description:
      "Designed and developed multiple software projects following engineering standards and architectural guidelines. Collaborated with cross-functional teams to define scope, requirements, and delivery timelines. Supported development, testing, and release activities to ensure stable delivery.",
    order: 6,
  },
  {
    id: 7,
    role: "Software Developer",
    company: "Aubev Technologies",
    period: "Dec 2010 - Sep 2012",
    description:
      "Designed, developed, tested, and maintained software solutions following established coding standards and best practices. Debugged and resolved issues through root cause analysis, improving system stability and performance. Supported implementation, testing, documentation, and release cycles across multiple projects.",
    order: 7,
  },
  {
    id: 8,
    role: "SEO Analyst",
    company: "Spoison Consulting",
    period: "Oct 2009 - Nov 2010",
    description:
      "Executed SEO and web marketing strategies including on-page/off-page optimization, link building, keyword research, competitor analysis, and traffic monitoring. Generated SEO performance reports and supported clients with web promotion and search visibility improvements.",
    order: 8,
  },
];

export const projects: Project[] = [
  {
    id: 1,
    title: "VOICEHUNT.NEWS",
    description:
      "Distributed Content & Edge-Cached Publishing Platform. Designed decoupled architecture using Rails API + Next.js SSR/ISR, enabling hybrid rendering and SEO-optimized content delivery. Implemented Edge caching + ISR revalidation using CloudFront + Lambda@Edge, with cache state persisted in DynamoDB and invalidation triggered via SQS + Lambda. Built API layer with GraphQL + REST, optimizing payload size and reducing over-fetching. Implemented backend performance optimizations using ActiveRecord scopes, query planner analysis, Redis-based fragment caching, and materialized counters. Containerized services using Docker + Nginx reverse proxy, deployed on EC2 + RDS, with static assets on S3. Implemented test strategy using RSpec (API + service layers) and Jest + React Testing Library (SSR/ISR hydration + UI regression). Observability via New Relic APM, custom metrics, slow query tracing, and memory profiling; improved cache hit ratio to 91% and reduced TTFB by 52% on high-traffic pages.",
    techStack: [
      "Ruby on Rails",
      "Next.js (SSR, ISR)",
      "PostgreSQL",
      "Redis",
      "GraphQL",
      "AWS (CloudFront, S3, SQS, DynamoDB, Lambda@Edge)",
      "Docker",
      "Nginx",
      "RSpec",
      "Jest",
      "React Testing Library",
      "New Relic"
    ],
    role: "Solution Architect",
    link: "https://voicehunt.news",
  },
  {
    id: 2,
    title: "GOEFFORTLESS.AI",
    description:
      "Hybrid Accounting & Distributed Data Sync Platform. Designed hybrid sync architecture bridging on-prem Tally DB with cloud services using a Windows-based ETL bridge. Implemented data pipelines using batch processing, delta sync, checksum validation, and idempotent writes. Built ingestion APIs using Rails + gRPC adapters, enabling high-throughput financial data processing. Implemented event-driven workflows using Kafka for downstream processing and audit trails. Designed async processing using Sidekiq + Redis, with retry policies and deduplication logic. Implemented reconciliation workflows for eventual consistency and financial data integrity.",
    techStack: ["Ruby on Rails", "React", "PostgreSQL", "GCP", "gRPC", "Windows Service (.NET)", "Kafka", "Sidekiq", "REST APIs"],
    role: "Lead Software Consultant",
    link: "https://goeffortless.ai",
  },
  {
    id: 3,
    title: "EDCAST.COM",
    description:
      "Enterprise Platform Modernization & Rails Upgrade Program. Led multi-version Rails and PostgreSQL upgrades across legacy enterprise systems. Refactored monolithic modules into service-oriented layers using PORO service objects and repository patterns. Migrated PostgreSQL schemas using zero-downtime migrations, backward-compatible constraints, and phased rollouts. Built automated regression coverage using RSpec, FactoryBot, DatabaseCleaner, and contract tests. Improved query performance using EXPLAIN ANALYZE, indexing strategies, and query refactoring.",
    techStack: ["Ruby on Rails", "PostgreSQL", "React", "RSpec", "FactoryBot", "DatabaseCleaner", "RuboCop", "Webpack"],
    role: "Lead Consultant",
    link: "https://www.edcast.com/user/login",
  },
  {
    id: 4,
    title: "TRUEPROJECTINSIGHT.COM",
    description:
      "AI-Powered Project Governance Platform. Designed domain-driven core models for large-scale project governance datasets. Implemented multi-queue Sidekiq architecture (priority queues, rate limiting, scheduled jobs, dead-letter queues). Built messaging pipelines using ActiveMQ, with message transformation and idempotent consumers. Integrated ElasticSearch for advanced search and analytics indexing. Built enterprise reporting pipelines using MicroStrategy + JSReport with scheduled and parameterized reports. Implemented CI/CD pipelines using Jenkins, with parallel test execution and artifact versioning. Monitoring via Prometheus metrics + custom job telemetry.",
    techStack: ["Ruby on Rails", "PostgreSQL", "Angular", "Sidekiq Pro", "ActiveMQ", "ElasticSearch", "MicroStrategy", "JSReport", "Jenkins", "Prometheus"],
    role: "Technical Lead",
    link: "https://trueprojectinsight.com",
  },
  {
    id: 5,
    title: "Mahindra Retail Campaign Platform",
    description:
      "High-Volume Campaign & Messaging Platform. Designed high-throughput coupon lifecycle engine with state-machine-driven workflows. Implemented async messaging using RabbitMQ + Sidekiq, decoupling campaign execution from delivery pipelines. Integrated Twilio SMS APIs with retry-safe delivery and rate-limiting logic. Built analytics pipelines aggregating campaign metrics using Redis-backed counters and batch jobs.",
    techStack: ["Ruby on Rails", "MySQL", "RabbitMQ", "Sidekiq", "Twilio API", "AWS EC2", "Redis", "REST APIs"],
    role: "Technical Lead",
    link: null,
  },
  {
    id: 6,
    title: "COMMONLIT.ORG",
    description:
      "Large-Scale EdTech Platform. Implemented authentication and authorization using Devise + Pundit RBAC. Built payment workflows using Stripe APIs with webhook-based event handling. Implemented background processing using multi-threaded job execution. Automated deployments using CircleCI, with blue-green deployment patterns on Heroku.",
    techStack: ["Ruby on Rails", "PostgreSQL", "React", "Devise", "Pundit", "Stripe API", "Heroku", "CircleCI"],
    role: "Senior Software Engineer",
    link: "https://commonlit.org",
  },
  {
    id: 7,
    title: "RIGHTBOAT.COM",
    description:
      "Distributed Marketplace Platform. Built marketplace ingestion pipelines using Nokogiri-based crawlers for external data sources. Implemented async workflows using Sidekiq + ActiveMQ for classification and enrichment pipelines. Automated deployments using Capistrano with AWS-based infrastructure.",
    techStack: ["Ruby on Rails", "MySQL", "ActiveMQ", "Sidekiq", "Nokogiri", "AWS", "Capistrano"],
    role: "Senior Software Developer",
    link: "https://rightboat.com",
  },
];
