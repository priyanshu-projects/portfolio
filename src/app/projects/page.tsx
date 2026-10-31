import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/Icons";
import { projects, personalInfo } from "@/lib/data";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore core software systems engineered by Priyanshu: Credit Risk Platform, Movie Mind Reader, AuditLens, and Sankalan 2026.",
};

export default function ProjectsPage() {
  return (
    <div className="pt-[calc(var(--nav-h)+48px)] pb-28 px-6 relative">
      {/* Background glow */}
      <div
        className="pointer-events-none absolute top-12 left-1/2 -translate-x-1/2 w-[600px] h-[350px] rounded-full blur-[120px] opacity-20"
        style={{
          background: "radial-gradient(circle, rgba(16,185,129,0.3) 0%, rgba(99,102,241,0.1) 70%, transparent 100%)",
        }}
      />

      <div className="mx-auto max-w-6xl relative z-10">
        {/* Header */}
        <div className="mb-16">
          <p className="font-mono text-xs uppercase tracking-wider text-emerald-400 mb-2">
            // Core Portfolio
          </p>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight text-white mb-4">
            Engineering <span className="text-gradient">Projects</span>
          </h1>
          <p className="text-zinc-400 text-base md:text-lg max-w-2xl leading-relaxed">
            A curated portfolio of high-concurrency platforms, machine learning scoring engines, NLP discovery systems, and RAG architectures.
          </p>
        </div>

        {/* 4 Projects List */}
        <div className="space-y-8">
          {projects.map((project, idx) => (
            <div
              key={project.slug}
              className="glass-card p-6 md:p-10 group relative overflow-hidden"
            >
              {/* Subtle hover gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
              />

              <div className="relative z-10 flex flex-col lg:flex-row lg:items-start justify-between gap-8">
                {/* Number index */}
                <div className="font-mono text-5xl md:text-6xl font-black text-emerald-500/20 group-hover:text-emerald-500/40 select-none hidden md:block shrink-0 w-20 transition-colors">
                  {String(idx + 1).padStart(2, "0")}
                </div>

                {/* Content info */}
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3 flex-wrap">
                    <span className="font-mono text-xs text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-md">
                      {project.category}
                    </span>
                    <span className="w-1 h-1 rounded-full bg-zinc-600" />
                    <div className="flex items-center gap-2 flex-wrap">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium text-emerald-300 bg-emerald-500/15 border border-emerald-500/30 hover:bg-emerald-500/25 hover:border-emerald-400 hover:text-white transition-all shadow-[0_0_12px_rgba(16,185,129,0.15)] hover:scale-105 group/live"
                          aria-label="Live Demo"
                        >
                          <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                          </span>
                          <span>Live Demo</span>
                          <ExternalLink size={12} className="group-hover/live:translate-x-0.5 group-hover/live:-translate-y-0.5 transition-transform" />
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-mono text-zinc-400 hover:text-white bg-white/[0.04] border border-white/10 hover:border-white/20 hover:bg-white/[0.08] transition-all"
                          aria-label="GitHub Repository"
                        >
                          <GithubIcon size={13} />
                          <span>Code</span>
                        </a>
                      )}
                    </div>
                  </div>

                  <Link href={`/projects/${project.slug}`}>
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 group-hover:text-emerald-300 transition-colors">
                      {project.title}
                    </h2>
                  </Link>

                  <p className="text-zinc-400 text-sm md:text-base mb-6 max-w-3xl leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span key={tag} className="tag-badge">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Highlights Bullet summary */}
                  <div className="grid sm:grid-cols-2 gap-3 mb-6 pt-4 border-t border-white/[0.06]">
                    {project.highlights.slice(0, 2).map((highlight, hIdx) => (
                      <div key={hIdx} className="text-xs text-zinc-400 flex items-start gap-2">
                        <span className="text-emerald-400 shrink-0 font-mono">›</span>
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>

                  {/* Metrics Row */}
                  <div className="flex gap-6 flex-wrap pt-2">
                    {project.stats.map((stat) => (
                      <div key={stat.label} className="text-left">
                        <div className="font-mono font-bold text-lg md:text-xl text-emerald-400 glow-text">
                          {stat.val}
                        </div>
                        <div className="text-xs text-zinc-500">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Action button */}
                <div className="shrink-0 flex sm:flex-row lg:flex-col items-stretch lg:items-end justify-end gap-2.5">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary !text-xs !py-2.5 !px-4 font-mono group/live inline-flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(16,185,129,0.2)]"
                    >
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-300"></span>
                      </span>
                      <span>Live Demo</span>
                      <ExternalLink size={13} className="group-hover/live:translate-x-0.5 group-hover/live:-translate-y-0.5 transition-transform" />
                    </a>
                  )}
                  <Link
                    href={`/projects/${project.slug}`}
                    className="btn-secondary !text-xs !py-2.5 !px-4 font-mono group/btn inline-flex items-center justify-center gap-1.5"
                  >
                    <span>Deep Dive Specs</span>
                    <ArrowRight
                      size={13}
                      className="group-hover/btn:translate-x-1 transition-transform"
                    />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
