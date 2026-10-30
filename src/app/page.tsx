import Link from "next/link";
import { ArrowRight, ChevronDown, Mail, ArrowUpRight, Cpu, Layers, ShieldCheck, Sparkles, Download } from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "@/components/Icons";
import { projects, skills, personalInfo } from "@/lib/data";

export default function HomePage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-[calc(var(--nav-h)+20px)] pb-16">
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          {/* Eyebrow badge (inspired by rajan-kumar-yadav.vercel.app) */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 font-mono text-xs mb-6 backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-emerald-500/40 hover:bg-emerald-500/15 animate-[revealUp_0.6s_0.1s_both_cubic-bezier(0.16,1,0.3,1)]">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#10b981]" />
            <span className="tracking-wider uppercase font-semibold">{personalInfo.status}</span>
          </div>

          <p className="font-mono text-emerald-400 text-sm md:text-base mb-3 animate-[revealUp_0.6s_0.2s_both_cubic-bezier(0.16,1,0.3,1)]">
            &gt; Hello, I am {personalInfo.name}
          </p>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black leading-[1.08] tracking-tight mb-6 animate-[revealUp_0.6s_0.3s_both_cubic-bezier(0.16,1,0.3,1)]">
            Architecting <span className="text-gradient">Intelligent Systems</span>
            <br />& Scalable Solutions.
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed animate-[revealUp_0.6s_0.4s_both_cubic-bezier(0.16,1,0.3,1)]">
            {personalInfo.subTagline}
          </p>

          {/* Action buttons with spring lift & glow */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center animate-[revealUp_0.6s_0.5s_both_cubic-bezier(0.16,1,0.3,1)] flex-wrap">
            <Link
              href="/projects"
              className="btn-primary w-full sm:w-auto font-mono text-sm tracking-wide"
            >
              Explore Projects <ArrowRight size={16} />
            </Link>
            <a
              href={personalInfo.resumeUrl}
              download="Priyanshu_Gupta_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary w-full sm:w-auto font-mono text-sm tracking-wide"
            >
              <Download size={15} /> Download CV
            </a>
            <Link
              href="/contact"
              className="btn-secondary w-full sm:w-auto font-mono text-sm tracking-wide"
            >
              Contact <ArrowUpRight size={15} />
            </Link>
          </div>

          {/* Social icons row */}
          <div className="flex items-center justify-center gap-3 mt-10 animate-[revealUp_0.6s_0.6s_both_cubic-bezier(0.16,1,0.3,1)]">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-3 rounded-2xl border border-white/10 bg-white/[0.03] text-zinc-400 hover:text-emerald-400 hover:border-emerald-500/40 hover:bg-emerald-500/10 hover:-translate-y-1 hover:shadow-lg hover:shadow-emerald-500/10 transition-all duration-200"
            >
              <GithubIcon size={18} />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-3 rounded-2xl border border-white/10 bg-white/[0.03] text-zinc-400 hover:text-emerald-400 hover:border-emerald-500/40 hover:bg-emerald-500/10 hover:-translate-y-1 hover:shadow-lg hover:shadow-emerald-500/10 transition-all duration-200"
            >
              <LinkedinIcon size={18} />
            </a>
            <a
              href={personalInfo.twitter}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter / X"
              className="p-3 rounded-2xl border border-white/10 bg-white/[0.03] text-zinc-400 hover:text-emerald-400 hover:border-emerald-500/40 hover:bg-emerald-500/10 hover:-translate-y-1 hover:shadow-lg hover:shadow-emerald-500/10 transition-all duration-200"
            >
              <TwitterIcon size={18} />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              aria-label="Email"
              className="p-3 rounded-2xl border border-white/10 bg-white/[0.03] text-zinc-400 hover:text-emerald-400 hover:border-emerald-500/40 hover:bg-emerald-500/10 hover:-translate-y-1 hover:shadow-lg hover:shadow-emerald-500/10 transition-all duration-200"
            >
              <Mail size={18} />
            </a>
          </div>

          {/* Quick Stats Strip (inspired by rajan-kumar-yadav.vercel.app stat cards) */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-14 animate-[revealUp_0.6s_0.7s_both_cubic-bezier(0.16,1,0.3,1)]">
            {[
              { val: "4", label: "Flagship Systems", sub: "Production-ready" },
              { val: "92%", label: "Peak AUC-ROC", sub: "ML Risk Model" },
              { val: "<30ms", label: "p99 Latency", sub: "FastAPI inference" },
              { val: "99.9%", label: "Uptime Mindset", sub: "Distributed architecture" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="glass-card p-4 text-center rounded-2xl border-white/[0.06] hover:border-emerald-500/40 hover:bg-emerald-500/[0.04]"
              >
                <div className="font-mono text-2xl font-black text-emerald-400 glow-text mb-0.5">
                  {stat.val}
                </div>
                <div className="text-xs font-semibold text-white truncate">
                  {stat.label}
                </div>
                <div className="text-[10px] font-mono text-zinc-500 mt-0.5">
                  {stat.sub}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="hidden sm:flex animate-bounce-slow absolute bottom-4 left-1/2 -translate-x-1/2 flex-col items-center gap-1 text-zinc-500">
          <ChevronDown size={18} className="text-emerald-400" />
          <span className="font-mono text-[10px] tracking-widest uppercase">scroll</span>
        </div>
      </section>

      {/* ── SKILLS MARQUEE ──────────────────────────────────── */}
      <section className="py-6 border-y border-white/[0.08] overflow-hidden relative bg-black/40 backdrop-blur-md">
        <div
          className="pointer-events-none absolute left-0 top-0 bottom-0 w-28 z-10"
          style={{ background: "linear-gradient(to right, var(--bg), transparent)" }}
        />
        <div
          className="pointer-events-none absolute right-0 top-0 bottom-0 w-28 z-10"
          style={{ background: "linear-gradient(to left, var(--bg), transparent)" }}
        />

        <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
          {[...skills, ...skills].map((skill, i) => (
            <div
              key={i}
              className="flex items-center gap-2.5 px-6 py-2 whitespace-nowrap cursor-default group"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400/60 group-hover:bg-emerald-400 group-hover:shadow-[0_0_8px_#10b981] transition-all" />
              <span className="font-mono text-xs text-zinc-400 group-hover:text-emerald-300 transition-colors">
                {skill.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ── CORE PROJECTS SHOWCASE ───────────────────────────── */}
      <section className="py-24 px-6 relative">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <p className="font-mono text-xs uppercase tracking-wider text-emerald-400 mb-2 flex items-center justify-center gap-2">
              <Sparkles size={14} className="text-emerald-400" />
              // Selected Work
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4">
              Core Systems & Builds
            </h2>
            <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
              Four focused systems highlighting machine learning pipelines, semantic search, generative AI auditing, and distributed real-time infrastructure.
            </p>
          </div>

          {/* 4 Projects Grid with Smooth Lift Transitions */}
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, idx) => (
              <div
                key={project.slug}
                className="glass-card p-6 md:p-8 group flex flex-col justify-between overflow-hidden"
              >
                {/* Subtle gradient hover wash */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
                />

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <span className="pill text-xs font-mono !border-emerald-500/20 !text-emerald-400 !bg-emerald-500/10">
                      0{idx + 1} // {project.category}
                    </span>
                    <div className="flex items-center gap-2">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="GitHub Repository"
                          className="text-zinc-500 hover:text-emerald-400 hover:scale-110 transition-all p-1"
                        >
                          <GithubIcon size={16} />
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Live Demo"
                          className="text-zinc-500 hover:text-emerald-400 hover:scale-110 transition-all p-1"
                        >
                          <ArrowUpRight size={16} />
                        </a>
                      )}
                    </div>
                  </div>

                  <Link href={`/projects/${project.slug}`}>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">
                      {project.title}
                    </h3>
                  </Link>
                  <p className="text-sm text-zinc-400 mb-6 leading-relaxed">
                    {project.tagline}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.slice(0, 4).map((tag) => (
                      <span key={tag} className="tag-badge">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Stats Row */}
                  <div className="grid grid-cols-3 gap-2 py-3 px-4 rounded-2xl bg-black/40 border border-white/[0.06] mb-6">
                    {project.stats.map((stat) => (
                      <div key={stat.label} className="text-center">
                        <div className="font-mono font-bold text-base sm:text-lg text-emerald-400 glow-text">
                          {stat.val}
                        </div>
                        <div className="text-[11px] text-zinc-500 truncate">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="relative z-10 pt-3 border-t border-white/[0.06] flex items-center justify-between">
                  <span className="text-xs font-mono text-zinc-500">
                    Production Architecture
                  </span>
                  <Link
                    href={`/projects/${project.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-emerald-400 hover:text-emerald-300 transition-all hover:translate-x-1"
                  >
                    View System Specs <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/projects"
              className="btn-secondary font-mono text-xs uppercase tracking-wider"
            >
              View Full Projects Index <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── SYSTEM ARCHITECTURE PILLARS ─────────────────────── */}
      <section className="py-20 px-6 border-t border-white/[0.08] bg-black/20">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-14 max-w-xl mx-auto">
            <p className="font-mono text-xs uppercase tracking-wider text-emerald-400 mb-2">
              // Engineering Philosophy
            </p>
            <h2 className="text-2xl sm:text-3xl font-black text-white">
              Architectural Standards
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="glass-card p-6 rounded-2xl">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-4 transition-transform group-hover:scale-110">
                <Cpu size={20} />
              </div>
              <h3 className="font-bold text-white text-base mb-2">Intelligent Pipelines</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Designing end-to-end ML & RAG workflows with explainability (SHAP), strict latency budgets, and zero tolerance for hallucinations.
              </p>
            </div>

            <div className="glass-card p-6 rounded-2xl">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-4 transition-transform group-hover:scale-110">
                <Layers size={20} />
              </div>
              <h3 className="font-bold text-white text-base mb-2">High-Throughput Systems</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Decoupling services through event-driven architectures, caching layers (Redis), and connection pooling for sustained high concurrency.
              </p>
            </div>

            <div className="glass-card p-6 rounded-2xl">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-4 transition-transform group-hover:scale-110">
                <ShieldCheck size={20} />
              </div>
              <h3 className="font-bold text-white text-base mb-2">Reliability & Observability</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Production-first engineering with idempotent workflows, automated health probes, telemetry, and 99.9% uptime architecture.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── QUICK CONTACT CTA ───────────────────────────────── */}
      <section className="py-24 px-6 border-t border-white/[0.08] relative overflow-hidden">
        <div className="mx-auto max-w-2xl text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4">
            Let&apos;s Build Something <span className="text-gradient">Impactful</span>
          </h2>
          <p className="text-zinc-400 text-base mb-8 max-w-lg mx-auto leading-relaxed">
            Open to discussing scalable software architecture, ML platforms, or full-stack engineering roles.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="btn-primary font-mono text-sm tracking-wide"
            >
              Initiate Contact <Mail size={16} />
            </Link>
            <Link
              href="/resume"
              className="btn-secondary font-mono text-sm tracking-wide"
            >
              Review Resume
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
