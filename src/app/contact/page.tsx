"use client";

import { useState } from "react";
import { Mail, Check, Copy, Send, Sparkles, MapPin, Clock, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "@/components/Icons";
import { personalInfo } from "@/lib/data";

export default function ContactPage() {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personalInfo.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // fallback
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setFormSubmitted(true);
  };

  return (
    <div className="pt-[calc(var(--nav-h)+48px)] pb-28 px-6 relative">
      {/* Background glow orb */}
      <div
        className="pointer-events-none absolute top-10 left-1/2 -translate-x-1/2 w-[550px] h-[350px] rounded-full blur-[120px] opacity-25"
        style={{
          background: "radial-gradient(circle, rgba(16,185,129,0.3) 0%, rgba(99,102,241,0.15) 70%, transparent 100%)",
        }}
      />

      <div className="mx-auto max-w-5xl relative z-10">
        {/* Header */}
        <div className="mb-14 text-center max-w-2xl mx-auto">
          <p className="font-mono text-xs uppercase tracking-wider text-emerald-400 mb-3 flex items-center justify-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
            // Let&apos;s Connect
          </p>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight text-white mb-4">
            Get in <span className="text-gradient">Touch</span>
          </h1>
          <p className="text-zinc-400 text-base md:text-lg leading-relaxed">
            Have a project in mind, an engineering problem to discuss, or looking for an intelligent systems architect? I&apos;d love to hear from you.
          </p>
        </div>

        {/* Fast Email Copy Banner */}
        <div className="glass-card p-6 md:p-8 mb-12 flex flex-col sm:flex-row items-center justify-between gap-6 border-emerald-500/20 bg-emerald-500/[0.03]">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center text-emerald-400 shrink-0">
              <Mail size={22} />
            </div>
            <div>
              <div className="text-xs font-mono text-zinc-400 mb-0.5">Direct Communication</div>
              <div className="text-lg md:text-xl font-bold font-mono text-white select-all">
                {personalInfo.email}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={handleCopyEmail}
              className={`flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all ${
                copied
                  ? "bg-emerald-500 text-black shadow-[0_0_20px_rgba(16,185,129,0.4)]"
                  : "bg-white/[0.06] hover:bg-white/[0.1] text-zinc-200 border border-white/10"
              }`}
            >
              {copied ? (
                <>
                  <Check size={16} /> Copied to Clipboard
                </>
              ) : (
                <>
                  <Copy size={16} /> Copy Address
                </>
              )}
            </button>
            <a
              href={`mailto:${personalInfo.email}`}
              className="btn-primary !text-xs !py-2.5 !px-5 font-mono"
            >
              Compose <ArrowUpRight size={14} />
            </a>
          </div>
        </div>

        {/* Two Column Layout: Form & Meta info */}
        <div className="grid md:grid-cols-5 gap-8">
          {/* Contact Form */}
          <div className="md:col-span-3 glass-card p-8">
            <h2 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
              <Sparkles size={18} className="text-emerald-400" />
              Send a Message
            </h2>
            <p className="text-sm text-zinc-400 mb-6">
              Drop a note and I will get back to you within 24 hours.
            </p>

            {formSubmitted ? (
              <div className="py-12 text-center rounded-xl border border-emerald-500/30 bg-emerald-500/[0.05] p-6">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center mb-3">
                  <Check size={24} />
                </div>
                <h3 className="text-lg font-bold text-white mb-1">Message Received!</h3>
                <p className="text-sm text-zinc-400 max-w-sm mx-auto mb-6">
                  Thank you for reaching out, {formData.name || "there"}. I&apos;ll review your note and respond promptly.
                </p>
                <button
                  onClick={() => {
                    setFormSubmitted(false);
                    setFormData({ name: "", email: "", subject: "", message: "" });
                  }}
                  className="text-xs font-mono text-emerald-400 hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-zinc-400 mb-1.5">
                      Your Name <span className="text-emerald-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Turing"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg bg-black/40 border border-white/10 text-white placeholder-zinc-600 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-zinc-400 mb-1.5">
                      Email Address <span className="text-emerald-400">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="alex@domain.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg bg-black/40 border border-white/10 text-white placeholder-zinc-600 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-zinc-400 mb-1.5">
                    Subject
                  </label>
                  <input
                    type="text"
                    placeholder="Project Inquiry / Engineering Collaboration"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg bg-black/40 border border-white/10 text-white placeholder-zinc-600 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-zinc-400 mb-1.5">
                    Message <span className="text-emerald-400">*</span>
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell me about your project, timeline, or requirements..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg bg-black/40 border border-white/10 text-white placeholder-zinc-600 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 text-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-lg text-sm font-semibold bg-emerald-500 hover:bg-emerald-400 text-black shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-all font-mono"
                >
                  <Send size={15} /> Transmit Message
                </button>
              </form>
            )}
          </div>

          {/* Quick Info & Socials Sidebar */}
          <div className="md:col-span-2 space-y-6">
            {/* Status card */}
            <div className="glass-card p-6 border-l-2 border-emerald-500">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="font-mono text-xs uppercase tracking-wider text-emerald-400 font-semibold">
                  Current Status
                </span>
              </div>
              <p className="text-sm font-medium text-white mb-3">
                {personalInfo.status}
              </p>
              <div className="space-y-2 pt-2 border-t border-white/[0.06] text-xs text-zinc-400">
                <div className="flex items-center gap-2">
                  <MapPin size={14} className="text-emerald-400 shrink-0" />
                  <span>{personalInfo.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail size={14} className="text-emerald-400 shrink-0" />
                  <span>{personalInfo.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={14} className="text-emerald-400 shrink-0" />
                  <span>Phone: {personalInfo.phone}</span>
                </div>
              </div>
            </div>

            {/* Social channels */}
            <div className="glass-card p-6">
              <h3 className="font-mono text-xs uppercase tracking-wider text-zinc-400 mb-4">
                // Network & Profiles
              </h3>
              <div className="space-y-3">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-lg bg-white/[0.02] border border-white/[0.06] hover:border-emerald-500/40 hover:bg-emerald-500/5 text-zinc-300 hover:text-white transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <GithubIcon size={18} className="text-zinc-400 group-hover:text-emerald-400" />
                    <span className="text-sm font-medium">GitHub</span>
                  </div>
                  <ArrowUpRight size={14} className="text-zinc-500 group-hover:text-emerald-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>

                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-lg bg-white/[0.02] border border-white/[0.06] hover:border-emerald-500/40 hover:bg-emerald-500/5 text-zinc-300 hover:text-white transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <LinkedinIcon size={18} className="text-zinc-400 group-hover:text-emerald-400" />
                    <span className="text-sm font-medium">LinkedIn</span>
                  </div>
                  <ArrowUpRight size={14} className="text-zinc-500 group-hover:text-emerald-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>

                <a
                  href={personalInfo.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-lg bg-white/[0.02] border border-white/[0.06] hover:border-emerald-500/40 hover:bg-emerald-500/5 text-zinc-300 hover:text-white transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <TwitterIcon size={18} className="text-zinc-400 group-hover:text-emerald-400" />
                    <span className="text-sm font-medium">Twitter / X</span>
                  </div>
                  <ArrowUpRight size={14} className="text-zinc-500 group-hover:text-emerald-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
