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
  name: "Priyanshu Gupta",
  phone: "+91 9528279509",
  email: "guptapriyanshu9412@gmail.com",
  role: "Data Scientist & AI/ML Engineer",
  tagline: "Architecting Intelligent Systems & Scalable Solutions.",
  subTagline:
    "Data Scientist and AI/ML Engineer pursuing MSc in Computer Science at University of Delhi. Specializing in RecSys, RAG, automated MLOps pipelines, and LLM-driven auditing architectures.",
  location: "Delhi, India",
  github: "https://github.com/priyanshu-projects",
  linkedin: "https://www.linkedin.com/in/priyanshu-gupta-7a13a7251/",
  twitter: "https://x.com/priyanshu_g7",
  portfolioUrl: "https://priyanshu-projects.github.io/portfolio/",
  status: "Available for engineering roles & select contracts",
};

export const education = [
  {
    degree: "MSc. Computer Science",
    institution: "Department of Computer Science, University of Delhi",
    date: "2025 – 2027",
    details: "Advanced coursework in Machine Learning, Distributed Algorithms, Natural Language Processing, and Artificial Intelligence.",
  },
  {
    degree: "BSc. (Hons.) Computer Science",
    institution: "PGDAV College, University of Delhi",
    date: "2021 – 2024",
    details: "Core Foundation in Data Structures & Algorithms, Database Management Systems, Theory of Computation, and Operating Systems.",
  },
];

export const experience = [
  {
    role: "AI Trainer (Freelance)",
    company: "Turing & Outlier",
    date: "Sep'24 – Present",
    bullets: [
      "Evaluated 2,000+ AI responses for Meta and OpenAI projects with 95% accuracy; analyzed 1,000+ paired responses and identified quality gaps.",
      "Reviewed and refined 1,000+ prompts/responses across 5+ AI training projects spanning mathematical reasoning and SOTA evaluation, identifying 50+ model weaknesses and edge cases.",
      "Crafted 500+ solutions and designed 300+ prompts, contributing to a reported 25% improvement in query-handling efficiency and response quality.",
    ],
  },
  {
    role: "Data Analyst Intern",
    company: "HCDS Technologies, Gurgaon",
    date: "Jun'24 – Sep'24",
    bullets: [
      "Analyzed 10,000+ records using Python and created 5–6 visual reports to communicate analytical findings.",
      "Presented findings to non-technical team members and stakeholders, translating data patterns into clear, actionable business recommendations.",
      "Conducted 2 workshops for 20–30 students and supported updates to 8–10 webpages.",
    ],
  },
  {
    role: "President",
    company: "Delhi University Computer Science Society (DUCSS)",
    date: "2024 – Present",
    bullets: [
      "Led the society in organizing and conducting Sankalan 2026, the department's flagship annual technical fest.",
      "Secured ₹3 lakh sponsorship for the department's tech fest; conducted workshops on Python and Web development.",
      "Organized a departmental trekking expedition to Madhyamaheshwar temple for 72 participants.",
    ],
  },
];

export const projects: Project[] = [
  {
    slug: "movie-mind-reader",
    title: "Movie Mind Reader",
    tagline: "BERT4Rec Transformer Recommender System deployed on AWS EC2.",
    category: "RecSys / Deep Learning",
    tags: ["PyTorch", "BERT4Rec", "FastAPI", "Docker", "AWS EC2", "S3", "Streamlit", "MLflow"],
    description:
      "A deep transformer recommendation system using BERT4Rec trained on 32M movie ratings on Kaggle T4 GPUs. It outperforms traditional SVD matrix factorization, validated via MLflow tracking, and serves real-time next-movie predictions across 54K+ movies via Docker on AWS EC2.",
    architecture:
      "Bidirectional Transformer sequential recommendation architecture with automated weekly retraining triggered via GitHub Actions, Evidently AI drift detection, and Pandera schema validation.",
    highlights: [
      "Built BERT4Rec Transformer using PyTorch on 32M ratings with a Kaggle T4 GPU, achieving Precision@10: 20.57% and outperforming SVD in an MLflow-tracked comparison.",
      "Engineered weekly retraining with GitHub Actions, Evidently AI drift detection, and Pandera schema validation, enabling automated model promotion with zero manual intervention.",
      "Deployed a gamified Streamlit application on AWS EC2, backed by FastAPI + Docker + S3, delivering real-time predictions across 54K+ films.",
    ],
    stats: [
      { val: "20.57%", label: "Precision@10" },
      { val: "32M", label: "ratings trained" },
      { val: "54k+", label: "movies served" },
    ],
    githubUrl: "https://github.com/priyanshu-projects/Movie_Recommender",
    liveUrl: "http://3.111.33.59:8501",
    gradient: "from-indigo-500/20 via-purple-500/10 to-transparent",
  },
  {
    slug: "credit-risk-platform",
    title: "AI-Assisted Credit Risk Platform",
    tagline: "End-to-end credit risk scoring with XGBoost, SHAP, and Gemini Flash.",
    category: "Fintech / Explainable ML",
    tags: ["XGBoost", "SHAP", "Gemini Flash", "FastAPI", "Python", "Streamlit", "LendingClub"],
    description:
      "An end-to-end credit risk and financial document analysis platform. Evaluates borrower default risk on 391K LendingClub records using calibrated XGBoost models, generates SHAP explainability matrices, and extracts 34 financial fields from applicant documents with Gemini Flash.",
    architecture:
      "Document ingestion pipeline with 13 deterministic fraud checks, SHAP feature attribution narratives, and Gemini Flash-driven automated underwriter PDF report generation.",
    highlights: [
      "Developed an end-to-end credit risk platform using XGBoost, SHAP, and Gemini Flash, spanning automated PDF extraction to executive underwriter reports.",
      "Trained XGBoost on 391K LendingClub records, achieving ROC-AUC 0.742 with per-application granular explainability.",
      "Built automated document field extraction with 34 extracted financial fields and 13 deterministic fraud checks, followed by policy-based risk routing.",
    ],
    stats: [
      { val: "0.742", label: "ROC-AUC" },
      { val: "391k", label: "loan records" },
      { val: "34", label: "extracted fields" },
    ],
    githubUrl: "https://github.com/priyanshu-projects/credit_risk_platform",
    liveUrl: "https://creditriskplatform-6n5t5xrhu7xvboquyt8jnj.streamlit.app/Document_Extraction",
    gradient: "from-emerald-500/20 via-teal-500/10 to-transparent",
  },
  {
    slug: "auditlens",
    title: "AuditLens",
    tagline: "AI-Assisted ESG Claim Auditing over SEC 10-K Filings.",
    category: "LLM / Document Intelligence",
    tags: ["spaCy", "FinBERT", "FAISS", "Gemini", "Docker", "Azure Container Apps", "RAG"],
    description:
      "AuditLens extracts and cross-audits environmental, social, and governance (ESG) claims from corporate SEC 10-K filings against global GRI, TCFD, SASB, and ISSB regulatory standards using sentence embeddings, FAISS vector search, and Gemini reasoning chains.",
    architecture:
      "3-layer verification engine (internal filing consistency, YoY SEC EDGAR comparison, and FAISS standard grounding) deployed on Azure Container Apps with Docker and GitHub Actions CI/CD.",
    highlights: [
      "Built ESG claim extraction from SEC 10-Ks using spaCy sentence segmentation and FinBERT classification at a 0.80 confidence threshold, with SHAP token-level explainability fed into Gemini observations.",
      "Built a FAISS-based RAG system over GRI, TCFD, SASB, and ISSB standards with a custom Gemini fallback chain for structured audit observations.",
      "Engineered a 3-layer verification pipeline deployed on Azure Container Apps with automated Docker build pipelines.",
    ],
    stats: [
      { val: "0.80", label: "confidence threshold" },
      { val: "4", label: "ESG frameworks (GRI/TCFD...)" },
      { val: "Azure", label: "cloud container deployed" },
    ],
    githubUrl: "https://github.com/priyanshu-projects/Audit_lens",
    liveUrl: "https://auditlens-api.nicewave-ca0f64b6.centralindia.azurecontainerapps.io",
    gradient: "from-cyan-500/20 via-blue-500/10 to-transparent",
  },
  {
    slug: "sankalan-2026",
    title: "Sankalan 2026",
    tagline: "Official technical fest platform for Delhi University Computer Science Society.",
    category: "Full Stack / Operations",
    tags: ["Next.js", "TypeScript", "Python", "Tailwind CSS", "PostgreSQL", "Docker"],
    description:
      "The official portal and live management system for Sankalan 2026, the annual flagship fest of Delhi University Computer Science Society, supporting participant registrations, event schedules, and tech competitions.",
    architecture:
      "Full-stack Next.js web application built with responsive design, secure forms, and automated team registrations.",
    highlights: [
      "Led full lifecycle execution as Society President, orchestrating tech, sponsorships, and logistics.",
      "Secured ₹3 lakh in sponsorships and coordinated 20+ fest events.",
      "Supported registration and engagement for students across top universities nationwide.",
    ],
    stats: [
      { val: "₹3L", label: "sponsorship secured" },
      { val: "20+", label: "fest events" },
      { val: "DUCSS", label: "society led" },
    ],
    githubUrl: "https://github.com/priyanshu-projects/Sankalan-2026",
    liveUrl: "https://priyanshu-projects.github.io/portfolio/projects/sankalan-2026/",
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
  { label: "Python", category: "Languages" },
  { label: "SQL", category: "Languages" },
  { label: "PyTorch", category: "Machine Learning" },
  { label: "XGBoost", category: "Machine Learning" },
  { label: "RAG & LLMs", category: "GenAI / NLP" },
  { label: "Gemini & GPT", category: "GenAI / NLP" },
  { label: "FinBERT & spaCy", category: "GenAI / NLP" },
  { label: "FAISS Vector Search", category: "GenAI / NLP" },
  { label: "FastAPI", category: "MLOps / Backend" },
  { label: "Docker", category: "MLOps / DevOps" },
  { label: "MLflow", category: "MLOps" },
  { label: "Streamlit", category: "Deployment" },
  { label: "AWS (EC2, S3)", category: "Cloud" },
  { label: "Azure Container Apps", category: "Cloud" },
  { label: "GitHub Actions", category: "CI/CD" },
];
