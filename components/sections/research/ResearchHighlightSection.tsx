"use client";

import { Section } from "@/components/ui/Section";

export function ResearchHighlightSection() {
  return (
    <Section className="pt-6">
      <div className="mx-auto max-w-[1200px]">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-emerald-400/25 bg-emerald-500/10 text-emerald-200">
                <span className="text-sm font-semibold">🏆</span>
              </div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-200">
                1st Prize Winner • Research Symposium
              </p>
            </div>

            <h2 className="mt-4 text-2xl font-semibold tracking-tight text-slate-50 md:text-3xl">
              Integrating Operations Research Methodologies
            </h2>
            <p className="mt-3 text-sm text-slate-400 md:text-base">
              Optimizing healthcare and ERP-adjacent decision systems with
              hybrid modelling and measurable outcomes.
            </p>

            <div className="problem-box mt-6 rounded-2xl p-5">
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-emerald-200/70">
                Abstract
              </p>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">
                Built a framework combining linear programming, simulation, and
                heuristic search to reduce overhead and improve throughput under
                real-world constraints. The work closes the gap between
                theoretical optimisation and implementable system design.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {["Linear Programming", "Simulation", "Decision Modelling"].map(
                  (t) => (
                    <span
                      key={t}
                      className="rounded-full border border-slate-800/80 bg-slate-950/40 px-3 py-1 text-[0.72rem] text-slate-300"
                    >
                      {t}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>

          <div className="glass-surface card-hover glow-border relative overflow-hidden rounded-2xl p-5">
            <div className="aspect-video overflow-hidden rounded-xl border border-slate-800/70 bg-slate-950/40">
              <div className="h-full w-full bg-[radial-gradient(circle_at_20%_15%,_rgba(77,174,145,0.28),transparent_55%),radial-gradient(circle_at_75%_85%,_rgba(59,130,246,0.18),transparent_55%)]" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
            </div>
            <p className="mt-3 text-center text-[0.72rem] italic text-slate-500">
              Figure: Hybrid OR system schematic (conceptual)
            </p>
            <div className="mt-4 flex justify-center">
              <a
                href="#"
                className="btn-primary"
                data-cursor="button"
              >
                Read Full Paper
                <span className="text-base leading-none">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

