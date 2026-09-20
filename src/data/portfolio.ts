export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  location?: string;
  highlights: string[];
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export interface EducationItem {
  degree: string;
  field?: string;
  institution: string;
  period: string;
}

export interface Certification {
  name: string;
  issuer?: string;
  url?: string;
  vendor?: 'microsoft' | 'databricks' | 'cncf' | 'edx' | 'maven' | 'credly';
}

export interface Publication {
  title: string;
  url?: string;
  venue?: string;
}

export interface Highlight {
  title: string;
  description: string;
  tech: string[];
}

export const profile = {
  name: 'Tamer Abdulghani',
  title: 'AI Architect',
  tagline:
    'Designing enterprise-grade AI platforms, agentic architectures, and secure cloud-native systems.',
  location: 'Paris, France',
  github: 'https://github.com/tamer-abdulghani',
  linkedin: 'https://www.linkedin.com/in/tamer-abdulghani',
  credentials: ['MSc · Innovative Information Systems', 'Azure Solutions Architect Expert', 'CKAD'],
  bio: `More than twelve years across software engineering and system architecture, with a focus on enterprise AI and GenAI platform development. I hold a Master of Science in Innovative Information Systems from Université Toulouse 1 Capitole.

My work spans agentic AI architectures, AI governance frameworks, and Azure AI/MLOps implementations — always grounded in scalable software engineering, DevSecOps discipline, and cloud-native design.`,
};

export const skills: SkillGroup[] = [
  {
    category: 'AI & GenAI',
    items: [
      'Azure OpenAI',
      'Semantic Kernel',
      'Agentic AI',
      'RAG',
      'AI Governance',
      'MLOps',
      'MLflow',
    ],
  },
  {
    category: 'Cloud & Platform',
    items: ['Azure', 'Kubernetes', 'AKS', 'Databricks', 'Data Lake', 'Cosmos DB', 'Azure Functions'],
  },
  {
    category: 'Software Engineering',
    items: ['C#', '.NET', 'Python', 'Java', 'TypeScript', 'React', 'ASP.NET MVC'],
  },
  {
    category: 'Data & Big Data',
    items: ['Apache Spark', 'Scala', 'Cassandra', 'MongoDB', 'Elasticsearch', 'SQL Server'],
  },
  {
    category: 'DevSecOps',
    items: [
      'GitHub Actions',
      'Azure DevOps',
      'Docker',
      'Terraform',
      'Zero-Trust',
      'Security Scanning',
    ],
  },
  {
    category: 'Languages',
    items: [
      'Arabic (native)',
      'English (professional)',
      'French (professional working)',
      'Turkish (limited)',
    ],
  },
];

export const highlights: Highlight[] = [
  {
    title: 'GenAI Hub — Enterprise AI Platform',
    description:
      'Owner of the architectural direction of AllianzGI’s AI platform. Golden-pathway templates for RAG and agentic AI, embedded governance, security scanning, and compliance controls.',
    tech: ['Azure OpenAI', 'Semantic Kernel', 'Kubernetes', 'React', 'Flask'],
  },
  {
    title: 'Enterprise MLOps Reference Framework',
    description:
      'Designed and implemented an enterprise MLOps framework across Azure Databricks, Data Lake, MLflow, and GitHub Enterprise — adopted by teams across the organization.',
    tech: ['Azure Databricks', 'MLflow', 'Data Lake', 'GitHub Enterprise'],
  },
  {
    title: 'AI Governance & DevSecOps',
    description:
      'Zero-trust principles, automated guardrails, resilience testing, observability, and FinOps for cloud-native AI environments — balancing innovation with enterprise risk management.',
    tech: ['DevSecOps', 'CI/CD', 'FinOps', 'Compliance'],
  },
];

export const experience: ExperienceItem[] = [
  {
    role: 'VP · AI Architect',
    company: 'Allianz Global Investors',
    period: 'Feb 2025 — Present',
    location: 'Paris, France',
    highlights: [
      'Own the architectural direction of AllianzGI’s AI Platform and GenAI Hub, driving the technical roadmap.',
      'Enable enterprise AI adoption through stakeholder engagement, knowledge-sharing forums, and communities of practice.',
      'Develop golden-pathway application templates for RAG and agentic AI, with built-in governance and security controls.',
      'Provide technical leadership to internal AI teams, offshore developers, and interns; conduct interviews and L3 escalations.',
      'Implement AI governance and security frameworks applying zero-trust principles to enterprise AI deployments.',
      'Research emerging AI trends — agentic frameworks, coding agents, DevOps agents — and translate them into enterprise standards.',
    ],
  },
  {
    role: 'AVP · Cloud Solution Architect',
    company: 'Allianz Global Investors',
    period: 'Oct 2023 — Feb 2025',
    location: 'Paris, France',
    highlights: [
      'Implemented GenAI use-cases across the company using Azure OpenAI, Azure AI Search, Azure Functions, and Cosmos DB.',
      'Contributor to defining the GenAI strategy and target operating model.',
      'Delivered production Semantic Kernel implementations.',
    ],
  },
  {
    role: 'AVP · Senior Software Engineer',
    company: 'Allianz Global Investors',
    period: 'Jun 2022 — Oct 2023',
    location: 'Paris, France',
    highlights: [
      'Defined enterprise-wide SDLC standards (collaboration workflow, release, and test management).',
      'Designed the enterprise MLOps reference framework on Azure Databricks, Data Lake, MLflow, and GitHub Enterprise.',
      'Built a centralized enterprise data-delivery service adopted across Azure data solutions.',
      'Contributed to centralized xOps reusable workflows used by enterprise teams.',
    ],
  },
  {
    role: 'Senior Software Engineer — Allianz Global Investors',
    company: 'Capgemini',
    period: 'Oct 2020 — Jun 2022',
    location: 'Toulouse, France',
    highlights: [
      'Cloud Center of Excellence: MLOps platform with Azure Databricks, MLflow, and Azure DevOps.',
      'Data release pipelines with Azure Data Factory and Databricks; microservices deployed on Kubernetes.',
      'Hybrid cloud: on-premise integration with Azure DevOps and GitHub Enterprise self-hosted runners.',
      'Onboarded containerized Windows/Linux workloads to AKS via Azure DevOps and GitHub Actions.',
    ],
  },
  {
    role: 'Software Engineer — Airbus',
    company: 'Capgemini',
    period: 'Oct 2019 — Oct 2020',
    location: 'Toulouse, France',
    highlights: [
      'Delivered Airbus PCs XCheck, File Transfer Service (FTS+), Workstation Monitoring (AWM), and Tools Compliance Platform.',
    ],
  },
  {
    role: 'Big Data Engineer',
    company: 'Gisaïa',
    period: 'May 2018 — Sep 2019',
    location: 'Toulouse, France',
    highlights: [
      'Designed data pipelines to ingest, enrich, and store Geo Big Data with Apache Spark, Java/Scala, Cassandra, Dataproc, and Docker.',
      'Automated GCP deployments with bash and Python CLIs (Dataproc, Elasticsearch, ScyllaDB).',
    ],
  },
  {
    role: 'Software Engineer',
    company: 'Tursys Travel Technologies',
    period: 'Dec 2014 — Aug 2017',
    location: 'Istanbul, Turkey',
    highlights: [
      'Built B2C airline solutions and B2B/B2S platforms with ASP.NET MVC, MS SQL, Web API, and Redis.',
      'Developed a ticket-generation solution based on templates using MongoDB.',
      'Built a real-time chat and notification platform with SignalR, and a localization platform for the project.',
    ],
  },
  {
    role: 'Value Added Services Engineer',
    company: 'MTN Syria',
    period: 'Jun 2014 — Nov 2014',
    location: 'Damascus, Syria',
    highlights: [
      'Administered telecom platforms: SMSC, MMSC, CBS, Voice Mail, Voice SMS, Anti-Spam, ADD.',
      'Automated archiving, backups, and reporting with Linux bash scripting; maintained Oracle, SQL Server, MySQL.',
    ],
  },
  {
    role: 'Teaching Assistant',
    company: 'Vocational High School',
    period: 'Oct 2012 — Dec 2013',
    location: 'Damascus, Syria',
    highlights: [
      'Lectured in algorithms and programming (C#, VB.Net, Pascal, Delphi); ran the lab as professional trainer.',
      'Contributed to a collaborative grading system in C# and SQL Server.',
    ],
  },
];

export const education: EducationItem[] = [
  {
    degree: 'Master 2IS',
    field: 'Innovative Information Systems',
    institution: 'Université Toulouse 1 Capitole',
    period: '2017 — 2019',
  },
  {
    degree: 'Diploma',
    field: 'Management, Department of Training Management',
    institution: 'Damascus University',
    period: '2013 — 2014',
  },
  {
    degree: 'Bachelor of Information Technology Engineering',
    field: 'Software Engineering and Information Systems',
    institution: 'Damascus University',
    period: '2007 — 2013',
  },
];

export const certifications: Certification[] = [
  {
    name: 'Azure Solutions Architect Expert',
    issuer: 'Microsoft',
    vendor: 'microsoft',
    url: 'https://learn.microsoft.com/en-us/users/tamer-abdulghani/credentials/606295308acfb318',
  },
  {
    name: 'Certified Kubernetes Application Developer (CKAD)',
    issuer: 'CNCF · Linux Foundation',
    vendor: 'cncf',
    url: 'https://www.credly.com/badges/4a832812-18ee-4019-b2dc-500f31f9e2b7',
  },
  {
    name: 'Azure Administrator Associate',
    issuer: 'Microsoft',
    vendor: 'microsoft',
    url: 'https://learn.microsoft.com/api/credentials/share/en-us/tamer-abdulghani/A678B06114FD2CC5?sharingId',
  },
  {
    name: 'Generative AI Fundamentals',
    issuer: 'Databricks Academy',
    vendor: 'databricks',
    url: 'https://credentials.databricks.com/43a397ef-735a-4346-a093-7c4ace9eab09',
  },
  {
    name: 'LLM102x · Large Language Models: Foundation Models from the Ground Up',
    issuer: 'edX',
    vendor: 'edx',
    url: 'https://courses.edx.org/certificates/38bb07a44eda4461bcd0d7726641f400',
  },
  {
    name: 'LLM101x · Large Language Models: Application through Production',
    issuer: 'edX',
    vendor: 'edx',
    url: 'https://courses.edx.org/certificates/7865104049194d4793a9d3f877b6d21f',
  },
  {
    name: 'AI Software Development: From First Prompt to Production Code',
    issuer: 'Maven',
    vendor: 'maven',
    url: 'https://maven.com/wrap-up/b26bdae8',
  },
  {
    name: 'Microsoft Certified Professional (MCPS)',
    issuer: 'Microsoft',
    vendor: 'microsoft',
  },
  {
    name: 'Programming in HTML5 with JavaScript and CSS3',
    issuer: 'Microsoft',
    vendor: 'microsoft',
  },
];

export const publications: Publication[] = [
  {
    title: 'Browsing Information Retrieval System Results',
    url: 'https://hal.science/hal-02319694v1',
    venue: 'HAL · Open Archive',
  },
];
