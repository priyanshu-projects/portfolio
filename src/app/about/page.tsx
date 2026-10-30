import type { Metadata } from "next";
import Link from "next/link";
import { Mail, MapPin, GraduationCap, Code2, ArrowUpRight, Terminal, Phone } from "lucide-react";
import { personalInfo, education } from "@/lib/data";

export const metadata: Metadata = {
  title: "About",
  description:
    `Learn about ${personalInfo.name} — Data Scientist, AI/ML Engineer, and MSc Computer Science scholar at University of Delhi.`,
};

const technicalSkills = [
  {
    category: "Languages",
    items: ["Python", "SQL"],
  },
  {
    category: "Machine Learning",
    items: [
      "Regression",
      "Classification",
      "Random Forest",
      "KMeans Clustering",
      "Ensemble Learning",
      "XGBoost",
      "Recommender Systems (BERT4Rec, SVD)",
    ],
  },
  {
    category: "Data Science",
    items: ["Pandas", "NumPy", "Scikit-learn", "Data Visualization", "Matplotlib", "Seaborn"],
  },
  {
    category: "GenAI & NLP",
    items: ["RAG", "LLMs", "Prompt Engineering", "Gemini", "GPT", "FinBERT", "spaCy", "FAISS"],
  },
  {
    category: "MLOps & Deploy",
    items: ["MLflow", "GitHub Actions", "Docker", "FastAPI", "Streamlit", "Pandera", "Evidently AI"],
  },
  {
    category: "Cloud & Tools",
    items: ["AWS (EC2, S3)", "Azure Container Apps", "Git", "Jupyter", "VS Code", "Linux"],
  },
];

export default function AboutPage() {
  return (
    <div className="pt-[calc(var(--nav-h)+48px)] pb-28 px-6 relative">
      {/* Background glow */}
      <div
        className="pointer-events-none absolute top-10 left-1/2 -translate-x-1/2 w-[650px] h-[350px] rounded-full blur-[130px] opacity-20"
        style={{
          background: "radial-gradient(circle, rgba(16,185,129,0.3) 0%, rgba(99,102,241,0.1) 70%, transparent 100%)",
        }}
      />

      <div className="mx-auto max-w-4xl relative z-10">
        {/* Header */}
        <div className="mb-14">
          <p className="font-mono text-xs uppercase tracking-wider text-emerald-400 mb-2">
            // Profile & Background
          </p>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight text-white mb-4">
            About <span className="text-gradient">Me</span>
          </h1>
          <p className="text-zinc-400 text-base md:text-lg max-w-2xl leading-relaxed">
            Data Scientist & AI/ML Engineer pursuing MSc in Computer Science at University of Delhi, engineering end-to-end Machine Learning, Sequential Recommenders, and LLM-driven auditing architectures.
          </p>
        </div>

        {/* Bio & Highlights Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Bio Column */}
          <div className="md:col-span-2 space-y-5 text-zinc-300 leading-relaxed text-sm sm:text-base">
            <p>
              Hello! I&apos;m <span className="text-white font-semibold">{personalInfo.name}</span> — a{" "}
              <span className="text-emerald-400 font-semibold">{personalInfo.role}</span> currently pursuing my
              MSc. in Computer Science from the{" "}
              <span className="text-white font-semibold">Department of Computer Science, University of Delhi</span>.
            </p>
            <p>
              My expertise covers deep learning sequential recommenders (BERT4Rec trained on 32M records with PyTorch), automated MLOps pipelines (MLflow, Evidently AI, Pandera, GitHub Actions CI/CD), and enterprise RAG systems over regulatory SEC 10-K financial filings.
            </p>
            <p>
              I serve as the <span className="text-white font-semibold">President of the Delhi University Computer Science Society (DUCSS)</span>, where I spearheaded Sankalan 2026, secured ₹3 lakh in corporate sponsorships, and led academic technical workshops on Python and modern development.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-3 font-mono text-xs text-zinc-400 flex-wrap">
              <div className="flex items-center gap-2">
                <MapPin size={14} className="text-emerald-400 shrink-0" />
                <span>{personalInfo.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={14} className="text-emerald-400 shrink-0" />
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="hover:text-emerald-400 transition-colors"
                >
                  {personalInfo.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={14} className="text-emerald-400 shrink-0" />
                <span>{personalInfo.phone}</span>
              </div>
            </div>
          </div>

          {/* Quick Metrics Cards */}
          <div className="grid grid-cols-2 md:grid-cols-1 gap-4">
            {[
              { val: "32M", label: "Ratings Trained (BERT4Rec)" },
              { val: "2,000+", label: "Meta & OpenAI Evaluated" },
              { val: "₹3L", label: "Sponsorship Secured" },
              { val: "MSc CS", label: "University of Delhi" },
            ].map((stat) => (
              <div key={stat.label} className="glass-card p-4 text-center">
                <div className="font-mono text-xl sm:text-2xl font-black text-emerald-400 glow-text">
                  {stat.val}
                </div>
                <div className="text-[11px] font-mono text-zinc-400 mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Arsenal */}
        <div className="glass-card p-8 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <Code2 size={20} className="text-emerald-400" />
            <h2 className="font-mono text-xs uppercase tracking-wider text-emerald-400">
              // Technical Skills & Competencies
            </h2>
          </div>
          <div className="space-y-6">
            {technicalSkills.map((group) => (
              <div key={group.category} className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6">
                <span className="font-mono text-xs text-zinc-400 w-36 shrink-0 font-semibold">
                  {group.category}
                </span>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className="tag-badge">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div className="glass-card p-8 mb-10">
          <div className="flex items-center gap-3 mb-6">
            <GraduationCap size={20} className="text-emerald-400" />
            <h2 className="font-mono text-xs uppercase tracking-wider text-emerald-400">
              // Academic Foundation
            </h2>
          </div>
          <div className="space-y-6">
            {education.map((edu, idx) => (
              <div key={idx} className="flex items-start justify-between gap-4 flex-wrap pb-6 border-b border-white/[0.06] last:border-b-0 last:pb-0">
                <div>
                  <h3 className="font-bold text-base md:text-lg text-white">
                    {edu.degree}
                  </h3>
                  <p className="text-emerald-400 font-mono text-xs mt-1">
                    {edu.institution}
                  </p>
                  <p className="text-xs text-zinc-400 mt-2 leading-relaxed">
                    {edu.details}
                  </p>
                </div>
                <span className="font-mono text-xs text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-md whitespace-nowrap">
                  {edu.date}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Banner */}
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-between glass-card p-6 border-emerald-500/20">
          <div className="flex items-center gap-3">
            <Terminal size={20} className="text-emerald-400 shrink-0" />
            <span className="text-sm text-zinc-300">
              Interested in collaborating or discussing AI/ML systems?
            </span>
          </div>
          <div className="flex gap-3 w-full sm:w-auto">
            <Link
              href="/projects"
              className="btn-secondary !text-xs !py-2.5 !px-5 font-mono"
            >
              Inspect Work
            </Link>
            <Link
              href="/contact"
              className="btn-primary !text-xs !py-2.5 !px-5 font-mono"
            >
              Get in Touch <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
