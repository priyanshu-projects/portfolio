import type { Metadata } from "next";
import Link from "next/link";
import { Mail, MapPin, GraduationCap, Code2, ArrowUpRight, Terminal } from "lucide-react";
import { personalInfo } from "@/lib/data";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Priyanshu — Intelligent Systems Architect, Full Stack Engineer, and machine learning practitioner.",
};

const technicalSkills = [
  {
    category: "Languages",
    items: ["Python", "TypeScript", "JavaScript", "C++", "SQL", "Bash"],
  },
  {
    category: "Frontend",
    items: ["React", "Next.js (App Router)", "Tailwind CSS", "Framer Motion", "HTML5/CSS3"],
  },
  {
    category: "Backend & Systems",
    items: ["FastAPI", "Node.js", "Express", "RESTful APIs", "WebSockets", "Server-Sent Events"],
  },
  {
    category: "AI & ML",
    items: ["PyTorch", "scikit-learn", "XGBoost", "Sentence-BERT", "FAISS", "LangChain", "RAG"],
  },
  {
    category: "Databases & Cloud",
    items: ["PostgreSQL", "MongoDB", "Redis", "Docker", "AWS", "Prisma ORM", "Linux"],
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
            Systems architect and full stack engineer focused on building resilient software, scalable data platforms, and applied machine learning systems.
          </p>
        </div>

        {/* Bio & Highlights Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Bio Column */}
          <div className="md:col-span-2 space-y-5 text-zinc-300 leading-relaxed text-sm sm:text-base">
            <p>
              Hello! I&apos;m <span className="text-white font-semibold">{personalInfo.name}</span> — an
              Intelligent Systems Architect and Full Stack Engineer based in{" "}
              <span className="text-white font-semibold">India</span>. I specialize in turning high-complexity engineering challenges into intuitive, high-performance software.
            </p>
            <p>
              My focus spans predictive machine learning engines, contextual semantic retrieval (RAG), and production full-stack systems. Whether it is fine-tuning sentence transformers for sub-5ms vector queries or optimizing PostgreSQL query plans for heavy workloads, I value deterministic reliability, clean abstraction boundaries, and elegant UX.
            </p>
            <p>
              When I&apos;m not architecting backends or training models, I explore distributed consensus algorithms, financial technology, and modern web frameworks.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-3 font-mono text-xs text-zinc-400">
              <div className="flex items-center gap-2">
                <MapPin size={14} className="text-emerald-400" />
                <span>{personalInfo.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={14} className="text-emerald-400" />
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="hover:text-emerald-400 transition-colors"
                >
                  {personalInfo.email}
                </a>
              </div>
            </div>
          </div>

          {/* Quick Metrics Cards */}
          <div className="grid grid-cols-2 md:grid-cols-1 gap-4">
            {[
              { val: "4", label: "Flagship Systems Shipped" },
              { val: "99.9%", label: "Peak Uptime Mindset" },
              { val: "<30ms", label: "p99 API Latency Standard" },
              { val: "AI/ML", label: "Applied Intelligence" },
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

        {/* Education */}
        <div className="glass-card p-8 mb-10">
          <div className="flex items-center gap-3 mb-6">
            <GraduationCap size={20} className="text-emerald-400" />
            <h2 className="font-mono text-xs uppercase tracking-wider text-emerald-400">
              // Academic Foundation
            </h2>
          </div>
          <div className="flex items-start justify-between gap-4 flex-wrap">
            <div>
              <h3 className="font-bold text-lg text-white">
                Bachelor of Technology in Computer Science & Engineering
              </h3>
              <p className="text-emerald-400 font-mono text-xs mt-1">
                Specialization in Artificial Intelligence & Machine Learning
              </p>
              <p className="text-xs text-zinc-400 mt-1">
                Core Coursework: Data Structures & Algorithms, Distributed Systems, Database Management Systems, Neural Networks.
              </p>
            </div>
            <span className="font-mono text-xs text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-md whitespace-nowrap">
              2022 – 2026
            </span>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-between glass-card p-6 border-emerald-500/20">
          <div className="flex items-center gap-3">
            <Terminal size={20} className="text-emerald-400 shrink-0" />
            <span className="text-sm text-zinc-300">
              Interested in collaborating or discussing system architecture?
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
