import type { Metadata } from "next";
import { Download, FileText, ArrowUpRight, Briefcase, GraduationCap, Award } from "lucide-react";
import { personalInfo, experience, education } from "@/lib/data";

export const metadata: Metadata = {
  title: "Resume",
  description: `Professional journey, technical experience, and education of ${personalInfo.name}.`,
};

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
              href="/portfolio/resume.pdf"
              download="Priyanshu_Gupta_Resume.pdf"
              className="btn-primary !text-xs !py-2.5 !px-5 font-mono"
            >
              <Download size={14} />
              Download PDF
            </a>
            <a
              href="/portfolio/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary !text-xs !py-2.5 !px-5 font-mono"
            >
              <ArrowUpRight size={14} />
              View PDF
            </a>
          </div>
        </div>

        {/* Live Resume Card */}
        <div className="glass-card p-6 mb-12 flex flex-col sm:flex-row items-center justify-between gap-4 border-l-2 border-emerald-500 bg-emerald-500/[0.03]">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center text-emerald-400 shrink-0">
              <FileText size={22} />
            </div>
            <div>
              <h3 className="text-white font-bold text-sm sm:text-base">Priyanshu_Gupta_Resume.pdf</h3>
              <p className="text-xs text-zinc-400 font-mono mt-0.5">
                Data Science & AI/ML Engineer • University of Delhi
              </p>
            </div>
          </div>
          <a
            href="/portfolio/resume.pdf"
            download="Priyanshu_Gupta_Resume.pdf"
            className="btn-primary !text-xs !py-2 !px-4 font-mono w-full sm:w-auto"
          >
            <Download size={13} /> Click to Download
          </a>
        </div>

        {/* Experience Timeline */}
        <div className="mb-14">
          <div className="flex items-center gap-2 mb-8">
            <Briefcase size={18} className="text-emerald-400" />
            <h2 className="font-mono text-xs uppercase tracking-wider text-emerald-400">
              // Professional Experience & Leadership
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
        <div className="glass-card p-8 mb-8">
          <div className="flex items-center gap-2 mb-6">
            <GraduationCap size={20} className="text-emerald-400" />
            <h2 className="font-mono text-xs uppercase tracking-wider text-emerald-400">
              // Education
            </h2>
          </div>
          <div className="space-y-6">
            {education.map((edu, idx) => (
              <div key={idx} className="flex items-start justify-between gap-4 flex-wrap pb-6 border-b border-white/[0.06] last:border-b-0 last:pb-0">
                <div>
                  <h3 className="font-bold text-base md:text-lg text-white">
                    {edu.degree}
                  </h3>
                  <p className="font-mono text-xs sm:text-sm text-emerald-400 mt-1">
                    {edu.institution}
                  </p>
                  <p className="text-xs text-zinc-400 mt-2 leading-relaxed">
                    {edu.details}
                  </p>
                </div>
                <span className="font-mono text-xs text-zinc-400 bg-white/[0.04] border border-white/[0.08] px-3 py-1.5 rounded-md whitespace-nowrap">
                  {edu.date}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Extracurriculars & Interests */}
        <div className="glass-card p-8">
          <div className="flex items-center gap-2 mb-4">
            <Award size={18} className="text-emerald-400" />
            <h2 className="font-mono text-xs uppercase tracking-wider text-emerald-400">
              // Interests & Sports
            </h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {["Cricket", "Football", "Swimming", "Badminton"].map((interest) => (
              <span key={interest} className="tag-badge !text-xs !py-1 !px-3">
                {interest}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
