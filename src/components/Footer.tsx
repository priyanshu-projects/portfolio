import Link from "next/link";
import { Mail, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";
import { personalInfo, navLinks } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.08] bg-[rgba(7,7,9,0.5)] backdrop-blur-md py-12 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-white/[0.06]">
          {/* Brand & mission */}
          <div className="max-w-md">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 font-mono text-lg font-bold tracking-tight text-white mb-2"
            >
              <span className="text-emerald-400">&lt;</span>
              <span>{personalInfo.name}</span>
              <span className="text-emerald-400">/&gt;</span>
            </Link>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Architecting intelligent software systems, automated machine learning pipelines, and scalable cloud solutions.
            </p>
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-3">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2.5 rounded-lg border border-white/[0.08] bg-white/[0.02] text-zinc-400 hover:text-emerald-400 hover:border-emerald-500/40 hover:bg-emerald-500/5 transition-all"
            >
              <GithubIcon size={18} />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2.5 rounded-lg border border-white/[0.08] bg-white/[0.02] text-zinc-400 hover:text-emerald-400 hover:border-emerald-500/40 hover:bg-emerald-500/5 transition-all"
            >
              <LinkedinIcon size={18} />
            </a>

            <a
              href={`mailto:${personalInfo.email}`}
              aria-label="Email"
              className="p-2.5 rounded-lg border border-white/[0.08] bg-white/[0.02] text-zinc-400 hover:text-emerald-400 hover:border-emerald-500/40 hover:bg-emerald-500/5 transition-all"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>

        {/* Bottom row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-500">
          <p>© {new Date().getFullYear()} {personalInfo.name}. Engineered with Next.js & TypeScript.</p>

          <nav className="flex gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-zinc-300 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
