import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Check, Cpu, Layers } from "lucide-react";
import { GithubIcon } from "@/components/Icons";
import { projects } from "@/lib/data";

type Props = {
  params: Promise<{ slug: string }>;
};

// Generate static params for all project slugs
export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

// Generate metadata per project
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return { title: "Project Not Found" };
  return {
    title: `${project.title} | System Architecture`,
    description: project.tagline,
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  const projectIndex = projects.findIndex((p) => p.slug === slug);

  if (!project) notFound();

  const prevProject = projectIndex > 0 ? projects[projectIndex - 1] : null;
  const nextProject =
    projectIndex < projects.length - 1 ? projects[projectIndex + 1] : null;

  return (
    <div className="pt-[calc(var(--nav-h)+48px)] pb-28 px-6 relative">
      {/* Background glow */}
      <div
        className="pointer-events-none absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[350px] rounded-full blur-[140px] opacity-25"
        style={{
          background: "radial-gradient(circle, rgba(16,185,129,0.3) 0%, rgba(99,102,241,0.15) 70%, transparent 100%)",
        }}
      />

      <div className="mx-auto max-w-4xl relative z-10">
        {/* Back navigation */}
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-emerald-400 transition-colors mb-10 group"
        >
          <ArrowLeft
            size={14}
            className="group-hover:-translate-x-1 transition-transform"
          />
          &lt; Return to Projects
        </Link>

        {/* Hero Card */}
        <div className="glass-card p-8 md:p-12 mb-8 overflow-hidden relative">
          <div
            className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-70 pointer-events-none`}
          />
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-3">
              <span className="font-mono text-xs uppercase tracking-wider text-emerald-400 bg-emerald-500/10 border border-emerald-500/25 px-2.5 py-1 rounded-md">
                {project.category}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">
              {project.title}
            </h1>
            <p className="text-base sm:text-lg text-zinc-300 mb-8 leading-relaxed max-w-2xl">
              {project.tagline}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {project.tags.map((tag) => (
                <span key={tag} className="tag-badge">
                  {tag}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="flex gap-4 flex-wrap">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary !text-xs !py-2.5 !px-5 font-mono"
                >
                  <GithubIcon size={16} /> Inspect Source Code
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary !text-xs !py-2.5 !px-5 font-mono"
                >
                  Launch Live System <ArrowUpRight size={15} />
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          {project.stats.map((stat) => (
            <div key={stat.label} className="glass-card p-5 text-center">
              <div className="font-mono text-2xl sm:text-3xl font-black text-emerald-400 glow-text mb-1">
                {stat.val}
              </div>
              <div className="text-[11px] sm:text-xs font-mono text-zinc-400">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* System Overview */}
        <div className="glass-card p-8 mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Cpu size={18} className="text-emerald-400" />
            <h2 className="font-mono text-xs uppercase tracking-wider text-emerald-400">
              // System Overview
            </h2>
          </div>
          <p className="text-zinc-300 leading-relaxed text-sm sm:text-base">
            {project.description}
          </p>
        </div>

        {/* Architecture Specs */}
        {project.architecture && (
          <div className="glass-card p-8 mb-8 border-l-2 border-emerald-500">
            <div className="flex items-center gap-2 mb-4">
              <Layers size={18} className="text-emerald-400" />
              <h2 className="font-mono text-xs uppercase tracking-wider text-emerald-400">
                // Architecture & Infrastructure
              </h2>
            </div>
            <p className="text-zinc-300 leading-relaxed text-sm sm:text-base">
              {project.architecture}
            </p>
          </div>
        )}

        {/* Key Engineering Highlights */}
        <div className="glass-card p-8 mb-12">
          <h2 className="font-mono text-xs uppercase tracking-wider text-emerald-400 mb-6">
            // Engineering Highlights & Benchmarks
          </h2>
          <ul className="space-y-4">
            {project.highlights.map((point, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-md bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0 mt-0.5">
                  <Check size={13} />
                </span>
                <span className="text-zinc-300 text-sm leading-relaxed">
                  {point}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Prev / Next navigation */}
        <div className="flex justify-between gap-4 flex-wrap">
          {prevProject ? (
            <Link
              href={`/projects/${prevProject.slug}`}
              className="glass-card p-4 flex items-center gap-3 group flex-1 hover:border-emerald-500/40"
            >
              <ArrowLeft
                size={16}
                className="text-zinc-400 group-hover:text-emerald-400 group-hover:-translate-x-1 transition-all shrink-0"
              />
              <div>
                <div className="text-[11px] font-mono text-zinc-500 mb-0.5">
                  &lt; Previous Project
                </div>
                <div className="font-semibold text-sm text-zinc-200 group-hover:text-emerald-300 transition-colors">
                  {prevProject.title}
                </div>
              </div>
            </Link>
          ) : (
            <div className="flex-1" />
          )}

          {nextProject ? (
            <Link
              href={`/projects/${nextProject.slug}`}
              className="glass-card p-4 flex items-center gap-3 group flex-1 justify-end text-right hover:border-emerald-500/40"
            >
              <div>
                <div className="text-[11px] font-mono text-zinc-500 mb-0.5">
                  Next Project &gt;
                </div>
                <div className="font-semibold text-sm text-zinc-200 group-hover:text-emerald-300 transition-colors">
                  {nextProject.title}
                </div>
              </div>
              <ArrowLeft
                size={16}
                className="text-zinc-400 group-hover:text-emerald-400 group-hover:translate-x-1 transition-all rotate-180 shrink-0"
              />
            </Link>
          ) : (
            <div className="flex-1" />
          )}
        </div>
      </div>
    </div>
  );
}
