/**
 * Central portfolio data for Abhay Deep, taken from his resume.
 * Every fact on the site comes from this file. Update it here and the whole site follows.
 * Layout based on a template by Sushmita Dasari.
 */

export type Palette = { from: string; via: string; to: string; accent: string };

export const profile = {
  fullName: 'Abhay Deep',
  displayName: 'Abhay Deep',
  firstName: 'ABHAY',
  seriesTag: 'THE SERIES',
  /** Fictional studio card shown at the very start of the opening sequence. */
  originalLabel: 'AN ABHAY DEEP ORIGINAL',
  role: 'Java Backend Engineer',
  tagline: ['Java', 'Spring Boot', 'Microservices'],
  intro:
    'Software Engineer with 2+ years of experience building scalable Java backend systems with Spring Boot, Microservices, Kafka and AWS. Skilled in REST APIs, distributed systems and software engineering best practices.',
  location: 'Pune, Maharashtra',
  availability: 'Open to Java backend roles · Pune / remote',
  email: 'abhay14d@gmail.com',
  links: {
    linkedin: 'https://www.linkedin.com/in/abhay-deep-324a05242/',
    github: 'https://github.com/Abhaydeep1410',
  },
  resumePdf: '/assets/Abhay_Deep_Resume.pdf',
  portrait: {
    src: '/assets/portrait-720.webp',
    srcSet: '/assets/portrait-420.webp 420w, /assets/portrait-720.webp 720w, /assets/portrait-1100.webp 1100w',
    alt: 'Portrait of Abhay Deep',
  },
  interests: ['Distributed Systems', 'System Design (LLD / HLD)', 'Cloud (AWS)'],
};

export const education = [
  {
    school: 'Ajay Kumar Garg Engineering College',
    place: 'Ghaziabad, Uttar Pradesh',
    degree: 'B.Tech — Computer Science (Graduated with Honours)',
    period: 'Aug 2020 – Jul 2024',
    score: 'CGPA 8.9',
  },
];

export const experience = [
  {
    company: 'Accenture',
    role: 'Software Engineer',
    place: 'Pune, Maharashtra',
    period: 'Jul 2024 – Present',
    points: [
      'Developed 3 Spring Boot microservices and 30+ REST APIs for a UK banking client’s business and corporate card servicing platform using Oracle Database.',
      'Developed frontend features using React and implemented security using Spring Security, JWT, OAuth2, and mTLS.',
      'Integrated Kafka for asynchronous communication across microservices.',
      'Resolved production issues, optimized API response times, and deployed applications on OpenShift using Docker, GitLab CI, and Jenkins.',
      'Developed unit and integration tests using JUnit and Mockito, maintaining 85%+ code coverage.',
    ],
  },
  {
    company: 'Newgen Software',
    role: 'Software Engineer Intern',
    place: 'Noida, Uttar Pradesh',
    period: 'Jan 2024 – Jun 2024',
    points: [
      'Developed backend features using Java, Spring Boot, and SQL for a Saudi Arabian banking client.',
      'Refactored monolithic modules into microservices, improving response time by 25%.',
      'Designed and documented REST APIs following OpenAPI standards for service integration.',
      'Contributed to AWS-based deployments and integration of microservices.',
    ],
  },
];

export type Metric = { value: string; label: string };

export type Project = {
  id: string;
  title: string;
  year: string;
  genre: string;
  logline: string;
  stack: string[];
  build: string[];
  features: string[];
  metrics: Metric[];
  /** Omit when the repository isn't public — the GitHub button is hidden instead of linking to a 404. */
  github?: string;
  palette: Palette;
  motif: 'shield' | 'flow' | 'tenants';
};

export const projects: Project[] = [
  {
    id: 'medishop',
    title: 'MediShop',
    year: '2025',
    genre: 'Microservices • E-commerce • Kafka',
    logline: 'A distributed medical e-commerce platform built on Spring Boot microservices and event-driven communication.',
    stack: ['Java', 'Spring Boot', 'React', 'MySQL', 'AWS', 'Docker', 'Kafka', 'Generative AI'],
    build: [
      'Built a distributed medical e-commerce platform with 2 Spring Boot microservices exposing 20+ REST APIs.',
      'Implemented Spring Cloud Gateway, Eureka, Config Server, JWT authentication, and Redis caching.',
      'Integrated Kafka for event-driven communication and automated deployments using Docker and GitHub Actions CI/CD.',
    ],
    features: [
      'Spring Cloud Gateway, Eureka & Config Server',
      'JWT authentication',
      'Redis caching',
      'Kafka event-driven communication',
      'Dockerized CI/CD with GitHub Actions',
    ],
    metrics: [
      { value: '2', label: 'Spring Boot microservices' },
      { value: '20+', label: 'REST APIs' },
    ],
    palette: { from: '#06202a', via: '#0f4c5c', to: '#060b16', accent: '#2dd4bf' },
    motif: 'flow',
  },
  {
    id: 'specit',
    title: 'SpecIt',
    year: '2025',
    genre: 'AI • Spec-driven development • Workflow',
    logline: 'An AI-powered platform that turns feature specifications into structured execution plans and parallelizable subtasks.',
    stack: ['Java', 'Spring Boot', 'React', 'PostgreSQL', 'Docker', 'AI APIs'],
    build: [
      'Engineered an AI-powered spec-driven development platform that converts feature specifications into structured execution plans and parallelizable subtasks.',
      'Designed a multi-stage workflow (Spec → Plan → Tasks) to automate feature breakdown, task generation, and development planning.',
      'Built reusable AI skills/prompts and implemented task orchestration, REST APIs, and persistence using Spring Boot, PostgreSQL, and Docker.',
    ],
    features: [
      'Spec → Plan → Tasks workflow',
      'Parallelizable subtask generation',
      'Reusable AI skills and prompts',
      'Task orchestration and REST APIs',
    ],
    metrics: [{ value: '3', label: 'workflow stages' }],
    palette: { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' },
    motif: 'shield',
  },
];

export type Achievement = {
  id: string;
  title: string;
  org: string;
  detail: string;
  laurel: string;
  link?: string;
};

const ACH_DRIVE = 'https://drive.google.com/drive/folders/1XFzjqkrweKtelLg_aSQKi13H3PXKqBIA?usp=sharing';
const CERT_DRIVE = 'https://drive.google.com/drive/folders/1-giJNpH_Fls5zdzg4zw21DnZYMVVlDmy?usp=sharing';

export const achievements: Achievement[] = [
  {
    id: 'leetcode',
    title: 'LeetCode Knight',
    org: 'LeetCode',
    detail: 'Solved 800+ DSA problems and earned the Knight badge.',
    laurel: 'Knight',
    link: ACH_DRIVE,
  },
  {
    id: 'codekaze',
    title: 'AIR 660',
    org: 'CodeKaze',
    detail: 'Secured an All India Rank of 660 in the CodeKaze coding contest.',
    laurel: 'AIR 660',
    link: ACH_DRIVE,
  },
  {
    id: 'honours',
    title: 'Silver Medal',
    org: 'AKTU University',
    detail: 'Graduated B.Tech with Honours and secured 3rd rank in the university.',
    laurel: 'Silver Medal',
    link: ACH_DRIVE,
  },
  {
    id: 'nptel',
    title: 'Top 5% Nationwide',
    org: 'NPTEL · IIT Madras',
    detail: 'Ranked in the top 5% nationwide in NPTEL IIT Madras examinations.',
    laurel: 'Top 5%',
    link: ACH_DRIVE,
  },
];

export type Certification = { issuer: string; name: string; link: string };

export const certifications: Certification[] = [
  { issuer: 'AWS', name: 'AWS Certified Cloud Practitioner', link: CERT_DRIVE },
  { issuer: 'Microsoft', name: 'Azure Fundamentals (AZ-900)', link: CERT_DRIVE },
  { issuer: 'Microsoft', name: 'Azure AI Fundamentals (AI-900)', link: CERT_DRIVE },
  { issuer: 'Google Cloud', name: 'Cloud Digital Leader', link: CERT_DRIVE },
  { issuer: 'Anthropic', name: 'Claude Certified Developer / Associate', link: CERT_DRIVE },
];

export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };

export const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    title: 'Languages',
    subtitle: 'Java is the primary language',
    skills: [
      { name: 'Java', mono: 'Jv', note: 'Primary' },
      { name: 'C++', mono: 'C+' },
      { name: 'JavaScript', mono: 'JS' },
      { name: 'SQL', mono: 'SQ' },
      { name: 'Python', mono: 'Py' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend',
    subtitle: 'The Spring ecosystem',
    skills: [
      { name: 'Spring Boot', mono: 'Sb' },
      { name: 'Spring MVC', mono: 'Sm' },
      { name: 'Spring Security', mono: 'Ss' },
      { name: 'Spring Data JPA', mono: 'Jp' },
      { name: 'Hibernate', mono: 'Hb' },
    ],
  },
  {
    id: 'architecture',
    title: 'Architecture',
    subtitle: 'Systems that scale',
    skills: [
      { name: 'Microservices', mono: 'Ms' },
      { name: 'Distributed Systems', mono: 'Ds' },
      { name: 'Kafka', mono: 'Kf' },
      { name: 'Redis', mono: 'Rd' },
      { name: 'REST APIs', mono: 'Rs' },
      { name: 'OpenAPI / Swagger', mono: 'Oa' },
      { name: 'Design Patterns', mono: 'Dp' },
      { name: 'LLD / HLD', mono: 'Hl' },
    ],
  },
  {
    id: 'cloud',
    title: 'Cloud & DevOps',
    subtitle: 'Ship it and run it',
    skills: [
      { name: 'AWS', mono: 'Aw' },
      { name: 'Docker', mono: 'Dk' },
      { name: 'OpenShift', mono: 'Os' },
      { name: 'Git', mono: 'Gt' },
      { name: 'GitLab', mono: 'Gl' },
      { name: 'GitHub Actions', mono: 'Ga' },
      { name: 'Jenkins', mono: 'Jn' },
      { name: 'CI/CD', mono: 'CI' },
      { name: 'Linux', mono: 'Lx' },
    ],
  },
  {
    id: 'data',
    title: 'Databases & Cache',
    subtitle: 'Where the data lives',
    skills: [
      { name: 'MySQL', mono: 'My' },
      { name: 'PostgreSQL', mono: 'Pg' },
      { name: 'Oracle Database', mono: 'Or' },
    ],
  },
  {
    id: 'quality',
    title: 'Testing & Security',
    subtitle: 'Trust, verified',
    skills: [
      { name: 'JUnit', mono: 'Ju' },
      { name: 'Mockito', mono: 'Mk' },
      { name: 'JWT', mono: 'Jw' },
      { name: 'OAuth2', mono: 'O2' },
    ],
  },
];

/** Where each skill appears on the resume (shown when a skill card is hovered or tapped). */
export const skillEvidence: Record<string, string[]> = {
  Java: ['Accenture', 'Newgen Software', 'MediShop', 'SpecIt'],
  'C++': ['800+ DSA problems solved'],
  SQL: ['Newgen Software'],
  'Spring Boot': ['Accenture', 'Newgen Software', 'MediShop', 'SpecIt'],
  'Spring Security': ['Accenture'],
  Microservices: ['Accenture', 'Newgen Software', 'MediShop'],
  Kafka: ['Accenture', 'MediShop'],
  Redis: ['MediShop'],
  'REST APIs': ['Accenture', 'Newgen Software', 'MediShop', 'SpecIt'],
  'OpenAPI / Swagger': ['Newgen Software'],
  AWS: ['Newgen Software', 'MediShop', 'AWS Certified Cloud Practitioner'],
  Docker: ['Accenture', 'MediShop', 'SpecIt'],
  OpenShift: ['Accenture'],
  GitLab: ['Accenture'],
  'GitHub Actions': ['MediShop'],
  Jenkins: ['Accenture'],
  'CI/CD': ['Accenture', 'MediShop'],
  PostgreSQL: ['SpecIt'],
  MySQL: ['MediShop'],
  'Oracle Database': ['Accenture'],
  JUnit: ['Accenture'],
  Mockito: ['Accenture'],
  JWT: ['Accenture', 'MediShop'],
  OAuth2: ['Accenture'],
};

export type Episode = {
  code: string;
  title: string;
  /** Optional one-line context shown in the detail overlay (company · place, etc.). */
  subtitle?: string;
  /** Optional bullet list shown under "What I did" in the detail overlay. */
  details?: string[];
  description: string;
  tags: string[];
  runtime: string;
  palette: Palette;
};

export type Season = {
  number: number;
  title: string;
  period: string;
  synopsis: string;
  episodes: Episode[];
};

const teal: Palette = { from: '#06202a', via: '#0f4c5c', to: '#060b16', accent: '#2dd4bf' };
const amber: Palette = { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' };
const ocean: Palette = { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' };
const violet: Palette = { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' };
const jade: Palette = { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' };

export const seasons: Season[] = [
  {
    number: 1,
    title: 'The Foundation',
    period: '2020 – 2024',
    synopsis: 'B.Tech in Computer Science at Ajay Kumar Garg Engineering College, Ghaziabad.',
    episodes: [
      {
        code: 'S01 E01',
        title: 'B.Tech, Computer Science',
        subtitle: 'Ajay Kumar Garg Engineering College · Ghaziabad, Uttar Pradesh',
        details: ['B.Tech in Computer Science, Aug 2020 – Jul 2024.', 'Finished with a CGPA of 8.9.', 'Graduated with Honours.'],
        description: 'Four years at AKGEC, finishing with an 8.9 CGPA and graduating with Honours.',
        tags: ['Computer Science', 'Honours'],
        runtime: 'Aug 2020 – Jul 2024',
        palette: ocean,
      },
      {
        code: 'S01 E02',
        title: 'Top of the Class',
        subtitle: 'AKTU University · NPTEL IIT Madras',
        details: ['Silver Medal for securing 3rd rank in AKTU University.', 'Ranked in the top 5% nationwide in NPTEL IIT Madras examinations.'],
        description: 'Silver Medal for 3rd rank in AKTU University, and top 5% nationwide in NPTEL IIT Madras exams.',
        tags: ['AKTU', 'NPTEL'],
        runtime: '2020 – 2024',
        palette: amber,
      },
    ],
  },
  {
    number: 2,
    title: 'Going Professional',
    period: '2024 – Present',
    synopsis: 'From a banking-software internship to shipping microservices for a UK banking client.',
    episodes: [
      {
        code: 'S02 E01',
        title: 'The Internship',
        subtitle: `${experience[1].role} · ${experience[1].company} · ${experience[1].place}`,
        details: experience[1].points,
        description: 'Backend features for a Saudi Arabian banking client; refactored monolith modules into microservices for a 25% faster response time.',
        tags: ['Java', 'Spring Boot', 'AWS'],
        runtime: 'Jan 2024 – Jun 2024 · Newgen Software',
        palette: violet,
      },
      {
        code: 'S02 E02',
        title: 'Banking at Scale',
        subtitle: `${experience[0].role} · ${experience[0].company} · ${experience[0].place}`,
        details: experience[0].points,
        description: '3 Spring Boot microservices and 30+ REST APIs for a UK banking client’s corporate card servicing platform.',
        tags: ['Kafka', 'Spring Security', 'OpenShift'],
        runtime: 'Jul 2024 – Present · Accenture',
        palette: teal,
      },
    ],
  },
  {
    number: 3,
    title: 'Side Projects',
    period: '2025',
    synopsis: 'Two projects built to explore distributed systems and AI-assisted development.',
    episodes: [
      {
        code: 'S03 E01',
        title: 'MediShop',
        subtitle: 'Personal project',
        details: projects[0].build,
        description: 'A distributed medical e-commerce platform with Kafka, Redis and a Spring Cloud stack.',
        tags: ['Microservices', 'Kafka', 'Docker'],
        runtime: '2025',
        palette: jade,
      },
      {
        code: 'S03 E02',
        title: 'SpecIt',
        subtitle: 'Personal project',
        details: projects[1].build,
        description: 'An AI-powered Spec → Plan → Tasks workflow for spec-driven development.',
        tags: ['AI APIs', 'PostgreSQL', 'Spring Boot'],
        runtime: '2025',
        palette: violet,
      },
    ],
  },
];

export type TopPick = { label: string; title: string; detail: string; palette: Palette };

export const topPicks: TopPick[] = [
  { label: 'Primary language', title: 'Java', detail: 'Spring Boot • Microservices • Kafka', palette: amber },
  { label: 'Current role', title: 'Accenture', detail: 'Software Engineer • UK banking client', palette: teal },
  { label: 'At scale', title: '30+ REST APIs', detail: '3 Spring Boot microservices in production', palette: ocean },
  { label: 'The AI Original', title: 'SpecIt', detail: 'Spec → Plan → Tasks', palette: violet },
  { label: 'The distributed Original', title: 'MediShop', detail: 'Gateway • Eureka • Kafka • Redis', palette: jade },
  { label: 'Problems solved', title: '800+', detail: 'DSA problems • LeetCode Knight', palette: teal },
  { label: 'Contest rank', title: 'AIR 660', detail: 'CodeKaze', palette: amber },
  { label: 'Code quality', title: '85%+', detail: 'Test coverage with JUnit & Mockito', palette: ocean },
  { label: 'Cloud credential', title: 'AWS Certified', detail: 'Cloud Practitioner', palette: jade },
  { label: 'Academic high', title: 'Silver Medal', detail: '3rd rank in AKTU • 8.9 CGPA', palette: violet },
];

/** Slides for the "▶ Play Intro" cinematic sequence. */
export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };

export const introSlides: IntroSlide[] = [
  {
    kicker: 'Education',
    title: 'B.Tech · Computer Science',
    lines: ['Ajay Kumar Garg Engineering College, Ghaziabad', 'Aug 2020 – Jul 2024 · Graduated with Honours'],
    chips: ['CGPA 8.9'],
  },
  {
    kicker: 'Skills',
    title: 'Java first.',
    lines: ['Spring Boot · Microservices · Kafka · Redis', 'AWS · Docker · OpenShift · Jenkins'],
    chips: ['Java', 'Spring Boot', 'Kafka', 'AWS', 'Docker', 'PostgreSQL'],
  },
  {
    kicker: 'Experience',
    title: 'Banking at scale',
    lines: ['Software Engineer · Accenture · Jul 2024 – Present', '3 microservices · 30+ REST APIs · 85%+ test coverage'],
  },
  {
    kicker: 'Projects',
    title: 'Two Originals',
    lines: ['MediShop — distributed e-commerce on Spring Cloud and Kafka', 'SpecIt — AI-powered Spec → Plan → Tasks workflow'],
  },
  {
    kicker: 'Achievements',
    title: 'Top Moments',
    lines: ['LeetCode Knight · 800+ DSA problems', 'AIR 660 — CodeKaze', 'Silver Medal — AKTU University'],
  },
  {
    kicker: 'Certified',
    title: 'Cloud & AI',
    lines: ['AWS Cloud Practitioner · Azure AZ-900 & AI-900', 'Google Cloud Digital Leader · Claude Certified Developer'],
  },
];

export type ProfileId = 'abhay' | 'recruiter' | 'developer' | 'creative';
export type SectionId = 'about' | 'journey' | 'originals' | 'picks' | 'skills' | 'moments' | 'story';

export const viewerProfiles: {
  id: ProfileId;
  name: string;
  blurb: string;
  color: string;
  order: SectionId[];
}[] = [
  {
    id: 'abhay',
    name: 'Abhay',
    blurb: 'The full series, in order',
    color: '#0d9488',
    order: ['about', 'journey', 'originals', 'picks', 'skills', 'moments', 'story'],
  },
  {
    id: 'recruiter',
    name: 'Recruiter',
    blurb: 'Experience, projects & skills first',
    color: '#4cc9ff',
    order: ['about', 'journey', 'originals', 'skills', 'moments', 'story', 'picks'],
  },
  {
    id: 'developer',
    name: 'Developer',
    blurb: 'Projects, stack & GitHub first',
    color: '#46e3a8',
    order: ['originals', 'skills', 'journey', 'moments', 'about', 'picks', 'story'],
  },
  {
    id: 'creative',
    name: 'Creative',
    blurb: 'The story arc & highlights first',
    color: '#ffb547',
    order: ['journey', 'picks', 'originals', 'moments', 'about', 'skills', 'story'],
  },
];

export const sectionMeta: Record<SectionId, { nav: string; card: string; meta: string; palette: Palette }> = {
  about: { nav: 'About', card: 'About Me', meta: 'The Pilot • Education & experience', palette: violet },
  journey: { nav: 'Experience', card: 'Experience', meta: 'Education & career timeline', palette: amber },
  originals: { nav: 'Projects', card: 'Projects', meta: `${projects.length} projects • 2025`, palette: teal },
  picks: { nav: 'Highlights', card: 'Highlights', meta: 'Key numbers', palette: jade },
  skills: { nav: 'Skills', card: 'My Skills', meta: `${skillCategories.length} Categories`, palette: ocean },
  moments: { nav: 'Achievements', card: 'Achievements', meta: `${achievements.length} Moments • ${certifications.length} Certifications`, palette: teal },
  story: { nav: 'Resume', card: 'Resume', meta: 'View & download', palette: violet },
};
