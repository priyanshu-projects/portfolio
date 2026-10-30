export type Project = {
  slug: string;
  title: string;
  tagline: string;
  category: string;
  tags: string[];
  description: string;
  architecture?: string;
  highlights: string[];
  stats: { val: string; label: string }[];
  githubUrl?: string;
  liveUrl?: string;
  gradient: string;
};

export const personalInfo = {
  name: "Priyanshu",
  role: "Intelligent Systems Architect & Full Stack Engineer",
  tagline: "Architecting Intelligent Systems & Scalable Solutions.",
  subTagline:
    "Bridging the gap between product velocity and system performance. Specializing in high-performance full-stack applications, autonomous AI workflows, and distributed infrastructure.",
  email: "priyanshu.dev@outlook.com",
  location: "India / Remote",
  github: "https://github.com/priyanshu-projects",
  linkedin: "https://linkedin.com/in/priyanshu",
  twitter: "https://x.com/priyanshu",
  status: "Available for engineering roles & select contracts",
};

export const projects: Project[] = [
  {
    slug: "credit-risk-platform",
    title: "Credit Risk Platform",
    tagline: "ML-powered real-time risk scoring engine for financial institutions.",
    category: "Fintech / Machine Learning",
    tags: ["Python", "XGBoost", "FastAPI", "React", "PostgreSQL", "Docker"],
    description:
      "An enterprise machine learning pipeline and analytics platform designed to evaluate loan default probabilities in real time. It processes multi-source applicant data through feature engineering pipelines and outputs calibrated probability scores alongside SHAP-based feature importance explainability.",
    architecture:
      "Event-driven microservices architecture utilizing FastAPI for sub-30ms p99 inference, PostgreSQL with connection pooling for transactional auditing, and a Next.js/React command dashboard for risk underwriters.",
    highlights: [
      "Trained gradient-boosted XGBoost classifiers across 500k+ historical credit profiles, achieving a 92% AUC-ROC score.",
      "Engineered low-latency FastAPI inference service maintaining sub-30ms p99 response times under sustained concurrency.",
      "Integrated SHAP (SHapley Additive exPlanations) enabling non-technical compliance auditors to inspect every scoring decision.",
      "Designed automated model drift detection and retraining trigger pipelines based on KS-statistic thresholds.",
    ],
    stats: [
      { val: "92%", label: "AUC-ROC" },
      { val: "<30ms", label: "p99 latency" },
      { val: "500k+", label: "training records" },
    ],
    githubUrl: "https://github.com/priyanshu-projects/credit_risk_platform",
    liveUrl: "",
    gradient: "from-emerald-500/20 via-teal-500/10 to-transparent",
  },
  {
    slug: "movie-mind-reader",
    title: "Movie Mind Reader",
    tagline: "Contextual NLP-driven semantic recommendation engine.",
    category: "NLP / Semantic Search",
    tags: ["Python", "Sentence-BERT", "FAISS", "React", "Flask", "Vector DB"],
    description:
      "A semantic discovery engine that maps natural language human moods, nuanced emotional cues, and plot descriptions to cinematic matches. Instead of rigid genre tags, it translates descriptive queries into 768-dimensional dense vectors to search high-dimensional space in sub-millisecond speeds.",
    architecture:
      "Dual-encoder transformer pipeline leveraging Sentence-BERT embeddings indexed via FAISS vector indexes with Inverted File with Product Quantization (IVFPQ), orchestrated with Flask backends and a modern reactive UI.",
    highlights: [
      "Fine-tuned Sentence-BERT on large-scale paired cinematic review datasets for nuanced emotional and semantic alignment.",
      "Vectorized and indexed 50,000+ movie synopses using FAISS, reducing query lookups to sub-5ms across large clusters.",
      "Built fluid interactive interface featuring dynamic mood sliders, query vector previews, and cinematic discovery cards.",
      "Optimized Docker containerization with ONNX runtime acceleration, cutting cold start times to under 2 seconds.",
    ],
    stats: [
      { val: "50k+", label: "films indexed" },
      { val: "<5ms", label: "vector retrieval" },
      { val: "87%", label: "accuracy rating" },
    ],
    githubUrl: "https://github.com/priyanshu-projects/Movie_Recommender",
    liveUrl: "",
    gradient: "from-indigo-500/20 via-purple-500/10 to-transparent",
  },
  {
    slug: "auditlens",
    title: "AuditLens",
    tagline: "Automated SEC financial filing analysis powered by LLMs.",
    category: "LLM / Document Intelligence",
    tags: ["Python", "LangChain", "GPT-4", "FastAPI", "React", "FAISS"],
    description:
      "AuditLens transforms complex SEC 10-K and financial statements into verified audit summaries and risk matrices. Utilizing retrieval-augmented generation (RAG) and domain-specific validation rules, it highlights compliance red flags, hidden covenants, and fiscal anomalies in seconds.",
    architecture:
      "Hierarchical document chunking pipeline with vector retrieval over SEC 10-K filings, strict prompt boundary fences, and JSON Schema validation to eliminate hallucination and ensure GAAP alignment.",
    highlights: [
      "Architected specialized RAG pipeline querying tabular and unstructured narrative sections of multi-hundred-page SEC filings.",
      "Reduced manual audit review cycle times by 60% during comparative trial testing with accounting teams.",
      "Enforced strict deterministic JSON schemas with post-validation guards against GAAP and regulatory standards.",
      "Built side-by-side verification interface where auditors can view AI findings linked directly to source paragraph citations.",
    ],
    stats: [
      { val: "60%", label: "time saved" },
      { val: "10-K", label: "SEC filings" },
      { val: "0%", label: "hallucination rate" },
    ],
    githubUrl: "https://github.com/priyanshu-projects/Audit_lens",
    liveUrl: "",
    gradient: "from-cyan-500/20 via-blue-500/10 to-transparent",
  },
  {
    slug: "sankalan-2026",
    title: "Sankalan 2026",
    tagline: "High-concurrency event registration and live fest operations platform.",
    category: "Full Stack / Distributed Systems",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Redis", "AWS"],
    description:
      "The mission-critical event management and operational infrastructure for Sankalan 2026. Built to handle heavy burst traffic during registrations, live team hackathons, real-time leaderboards, automated ticketing with encrypted QR codes, and seamless payment gateway reconciliation.",
    architecture:
      "Next.js App Router deployed with Redis caching layers, PostgreSQL with Prisma ORM for relational consistency, WebSockets/Server-Sent Events for live scoreboards, and AWS S3 for digital badge generation.",
    highlights: [
      "Engineered multi-tenant registration infrastructure supporting 3,000+ active participants across 20+ simultaneous events.",
      "Integrated secure payment reconciliation using webhooks and idempotency keys to ensure zero double-charges.",
      "Delivered real-time live scoreboards and leaderboard updates powered by Redis sorted sets and Server-Sent Events.",
      "Maintained 99.9% uptime throughout high-traffic flash registration windows without service degradation.",
    ],
    stats: [
      { val: "3k+", label: "participants" },
      { val: "20+", label: "fest events" },
      { val: "99.9%", label: "peak uptime" },
    ],
    githubUrl: "https://github.com/priyanshu-projects/Sankalan-2026",
    liveUrl: "https://sankalan2026.yourdomain.com",
    gradient: "from-emerald-500/20 via-cyan-500/10 to-transparent",
  },
];

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Resume", href: "/resume" },
  { label: "Contact", href: "/contact" },
];

export const skills = [
  { label: "React / Next.js", category: "Frontend" },
  { label: "TypeScript", category: "Languages" },
  { label: "Python", category: "Languages" },
  { label: "FastAPI", category: "Backend" },
  { label: "Node.js", category: "Backend" },
  { label: "PostgreSQL", category: "Database" },
  { label: "MongoDB", category: "Database" },
  { label: "Redis", category: "Database" },
  { label: "Docker", category: "DevOps" },
  { label: "AWS", category: "DevOps" },
  { label: "PyTorch", category: "AI / ML" },
  { label: "LangChain", category: "AI / ML" },
  { label: "Tailwind CSS", category: "Frontend" },
  { label: "C++", category: "Languages" },
  { label: "Linux", category: "Systems" },
];
