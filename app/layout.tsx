import type { Metadata } from "next";
import "./globals.css";
import { ReactNode } from "react";
import { LayoutShell } from "@/components/layout/LayoutShell";

export const metadata: Metadata = {
  title: "AI Lab Portfolio – Full Stack & Research",
  description:
    "AI-integrated full stack engineering portfolio with research depth, built as a modular, animated lab interface."
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className="bg-background text-slate-100 cursor-none"
        suppressHydrationWarning
      >
        <div className="fixed inset-0 -z-10 bg-gradient-to-b from-slate-950 via-slate-950 to-slate-950" />

        {/* Radial gradient blobs */}
        <div className="pointer-events-none fixed -left-40 -top-40 -z-10 h-96 w-96 rounded-full bg-[radial-gradient(circle_at_center,_rgba(77,174,145,0.55),_transparent_70%)] opacity-70 blur-3xl animate-blobDriftSlow" />
        <div className="pointer-events-none fixed -bottom-40 right-[-120px] -z-10 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle_at_center,_rgba(59,130,246,0.5),_transparent_65%)] opacity-70 blur-3xl animate-blobDriftSlow" />

        {/* Grid + noise overlays */}
        <div className="grid-overlay" />
        <div className="noise-overlay" />

        <LayoutShell>{children}</LayoutShell>
      </body>
    </html>
  );
}
