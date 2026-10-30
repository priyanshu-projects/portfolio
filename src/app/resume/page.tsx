import type { Metadata } from "next";
import { Download, FileText, ArrowUpRight, Briefcase, GraduationCap } from "lucide-react";
import { personalInfo } from "@/lib/data";

export const metadata: Metadata = {
  title: "Resume",
  description: "Professional journey, technical experience, and education of Priyanshu.",
};

const experience = [
  {
    role: "Full Stack Engineer & ML Contributor",
    company: "Sankalan Technical Team",
    date: "2025 – Present",
    bullets: [
      "Architected high-throughput registration engine handling 3,000+ live participants across 20+ simultaneous fest competitions.",
      "Implemented Redis caching and Server-Sent Events to power sub-second real-time hackathon leaderboards.",
      "Integrated automated payment reconciliation webhooks with idempotent database transactions, ensuring zero revenue loss.",
    ],
  },
  {
    role: "Intelligent Systems Developer",
    company: "Independent Research & Engineering",
    date: "2024 – 2025",
    bullets: [
      "Engineered Credit Risk Platform training gradient-boosted XGBoost classifiers on 500k+ records with 92% AUC-ROC score.",
      "Built Movie Mind Reader semantic discovery engine using Sentence-BERT and FAISS vector indexes with <5ms query lookup.",
      "Architected AuditLens RAG pipeline extracting structured GAAP audit matrices from multi-hundred-page SEC 10-K documents.",
    ],
  },
  {
    role: "Software Engineering Intern",
    company: "Systems & Infrastructure Division",
    date: "2024",
    bullets: [
      "Developed high-performance REST APIs using FastAPI and Node.js, reducing p99 latency under concurrency.",
      "Containerized microservices using Docker and orchestrated multi-container development workflows with Docker Compose.",
      "Designed normalized PostgreSQL schemas with indexing optimizations for high write-throughput workloads.",
    ],
  },
];

export default function ResumePage() {
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
        <div className="flex items-start justify-between gap-6 flex-wrap mb-14">
          <div>
            <p className="font-mono text-xs uppercase tracking-wider text-emerald-400 mb-2">
              // Career & Experience
            </p>
            <h1 className="text-4xl md:text-6xl font-black tracking-tight text-white mb-3">
              Resume
            </h1>
            <p className="text-zinc-400 text-base md:text-lg">
              Summary of professional background, engineering projects, and technical skills.
            </p>
          </div>

          <div className="flex gap-3 flex-wrap">
            <a
              href="/resume.pdf"
              download
              className="btn-primary !text-xs !py-2.5 !px-5 font-mono"
            >
              <Download size={14} />
              Download PDF
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary !text-xs !py-2.5 !px-5 font-mono"
            >
              <ArrowUpRight size={14} />
              View PDF
            </a>
          </div>
        </div>

        {/* Notice Card */}
        <div className="glass-card p-5 mb-10 flex items-center gap-4 border-l-2 border-emerald-500 bg-emerald-500/[0.02]">
          <FileText size={22} className="text-emerald-400 shrink-0" />
          <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
            A comprehensive PDF copy is available for offline review. Add your updated{" "}
            <span className="text-white font-mono bg-white/[0.06] px-1.5 py-0.5 rounded">resume.pdf</span> to{" "}
            <span className="text-white font-mono bg-white/[0.06] px-1.5 py-0.5 rounded">public/</span> to connect direct downloads.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="mb-14">
          <div className="flex items-center gap-2 mb-8">
            <Briefcase size={18} className="text-emerald-400" />
            <h2 className="font-mono text-xs uppercase tracking-wider text-emerald-400">
              // Professional Experience
            </h2>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="timeline-line" />

            <div className="space-y-6 pl-10 md:pl-12">
              {experience.map((item, i) => (
                <div key={i} className="relative">
                  {/* Glowing Node Dot */}
                  <div
                    className="absolute -left-[calc(40px+5px)] md:-left-[calc(48px+5px)] top-5 w-3.5 h-3.5 rounded-full border-2 border-emerald-400 bg-black"
                    style={{
                      boxShadow: "0 0 10px rgba(16,185,129,0.7)",
                    }}
                  />
                  <div className="glass-card p-6 md:p-7">
                    <div className="flex items-start justify-between gap-4 flex-wrap mb-4">
                      <div>
                        <h3 className="font-bold text-base md:text-lg text-white">
                          {item.role}
                        </h3>
                        <p className="font-mono text-xs sm:text-sm text-emerald-400 mt-1">
                          {item.company}
                        </p>
                      </div>
                      <span className="font-mono text-xs text-zinc-400 bg-white/[0.04] border border-white/[0.08] px-3 py-1 rounded-md whitespace-nowrap">
                        {item.date}
                      </span>
                    </div>

                    <ul className="space-y-2.5">
                      {item.bullets.map((b, j) => (
                        <li
                          key={j}
                          className="text-xs sm:text-sm text-zinc-300 flex items-start gap-2.5 leading-relaxed"
                        >
                          <span className="text-emerald-400 mt-0.5 shrink-0 font-mono">
                            ›
                          </span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div className="glass-card p-8">
          <div className="flex items-center gap-2 mb-6">
            <GraduationCap size={20} className="text-emerald-400" />
            <h2 className="font-mono text-xs uppercase tracking-wider text-emerald-400">
              // Academic Credentials
            </h2>
          </div>
          <div className="flex items-start justify-between gap-4 flex-wrap">
            <div>
              <h3 className="font-bold text-base md:text-lg text-white">
                Bachelor of Technology in Computer Science & Engineering
              </h3>
              <p className="font-mono text-xs sm:text-sm text-emerald-400 mt-1">
                Specialization in Artificial Intelligence & Machine Learning
              </p>
              <p className="text-xs text-zinc-400 mt-2">
                Focused coursework: Advanced Data Structures, Cloud Computing, High Performance Computing, Machine Learning, Operating Systems.
              </p>
            </div>
            <span className="font-mono text-xs text-zinc-400 bg-white/[0.04] border border-white/[0.08] px-3 py-1.5 rounded-md whitespace-nowrap">
              2022 – 2026
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
