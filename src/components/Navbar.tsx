"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { navLinks, personalInfo } from "@/lib/data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || menuOpen
            ? "bg-[rgba(7,7,9,0.85)] border-b border-white/[0.08] backdrop-blur-xl shadow-lg shadow-black/25"
            : "bg-transparent"
        }`}
        style={{ height: "var(--nav-h)" }}
      >
        <div
          className="mx-auto px-6 h-full flex items-center justify-between"
          style={{ maxWidth: "1200px" }}
        >
          {/* Brand Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 group font-mono text-lg font-bold tracking-tight transition-transform duration-200 hover:scale-105"
          >
            <span className="text-emerald-400 group-hover:glow-text transition-all">&lt;</span>
            <span className="text-white group-hover:text-emerald-300 transition-colors">{personalInfo.name}</span>
            <span className="text-emerald-400 group-hover:glow-text transition-all">/&gt;</span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-white/[0.03] p-1.5 rounded-full border border-white/[0.08] backdrop-blur-md shadow-inner">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-200 ${
                    isActive
                      ? "bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 shadow-[0_0_14px_rgba(16,185,129,0.25)] scale-[1.02]"
                      : "text-zinc-400 hover:text-white hover:bg-white/[0.06] hover:scale-105"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Actions: Resume & Contact (styled as interactive pill buttons) */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/resume"
              className="btn-secondary !py-2 !px-4 !text-xs font-mono tracking-wide"
            >
              Resume
            </Link>
            <Link
              href="/contact"
              className="btn-primary !py-2 !px-4 !text-xs font-mono tracking-wide"
            >
              Contact <ArrowUpRight size={13} />
            </Link>
          </div>

          {/* Mobile hamburger toggle */}
          <button
            className="md:hidden text-zinc-300 hover:text-white p-2 rounded-xl border border-white/10 bg-white/[0.04] transition-all hover:bg-white/[0.08] active:scale-95"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Dropdown */}
      <div
        className={`fixed top-[var(--nav-h)] left-0 right-0 z-40 bg-[rgba(7,7,9,0.97)] border-b border-white/[0.08] backdrop-blur-2xl flex flex-col gap-4 px-6 py-6 transition-all duration-300 cubic-bezier(0.16,1,0.3,1) ${
          menuOpen
            ? "opacity-100 pointer-events-auto translate-y-0 shadow-2xl"
            : "opacity-0 pointer-events-none -translate-y-4"
        }`}
      >
        <nav className="flex flex-col gap-2">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
                  isActive
                    ? "bg-emerald-500/15 text-emerald-400 border border-emerald-500/30"
                    : "text-zinc-400 hover:text-white hover:bg-white/[0.04]"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="pt-3 border-t border-white/[0.08] flex gap-3">
          <Link
            href="/resume"
            className="btn-secondary flex-1 !py-2.5 !text-xs font-mono"
          >
            Resume
          </Link>
          <Link
            href="/contact"
            className="btn-primary flex-1 !py-2.5 !text-xs font-mono"
          >
            Contact
          </Link>
        </div>
      </div>
    </>
  );
}
