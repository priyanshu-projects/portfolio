import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { personalInfo } from "@/lib/data";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${personalInfo.name} | Intelligent Systems Architect`,
    template: `%s | ${personalInfo.name}`,
  },
  description: `${personalInfo.tagline} ${personalInfo.subTagline}`,
  keywords: [
    personalInfo.name,
    "Intelligent Systems Architect",
    "Full Stack Engineer",
    "Machine Learning",
    "Next.js",
    "FastAPI",
    "System Architecture",
    "Distributed Systems",
  ],
  authors: [{ name: personalInfo.name }],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: `${personalInfo.name} Portfolio`,
    title: `${personalInfo.name} | Intelligent Systems Architect`,
    description: personalInfo.tagline,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="antialiased min-h-screen flex flex-col bg-[var(--bg)] text-[var(--text)] selection:bg-emerald-500/20 selection:text-white relative">
        {/* Persistent Floating Background Orbs & Grid (inspired by rajan-kumar-yadav.vercel.app) */}
        <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
          <div className="bg-orb bg-orb-1" />
          <div className="bg-orb bg-orb-2" />
          <div className="bg-orb bg-orb-3" />
          <div className="bg-noise" />
        </div>

        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
