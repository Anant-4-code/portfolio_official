"use client";

import { Section } from "@/components/ui/Section";

function StatTile({
  label,
  value,
  caption
}: {
  label: string;
  value: string;
  caption: string;
}) {
  return (
    <div className="glass-surface card-hover glow-border rounded-2xl p-5">
      <p className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-slate-400">
        {label}
      </p>
      <p className="mt-2 text-2xl font-semibold text-slate-50">{value}</p>
      <p className="mt-1 text-xs text-slate-400">{caption}</p>
    </div>
  );
}

export function HackathonSection() {
  return (
    <Section className="pt-4">
      <div className="mx-auto max-w-[1200px]">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-50 md:text-3xl">
          ISRO Hackathon Achievement
        </h2>
        <div className="mt-2 h-1 w-20 rounded-full bg-gradient-to-r from-emerald-300 to-emerald-500" />

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="md:col-span-2 overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-950/35 shadow-2xl">
            <div className="relative h-48">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,_rgba(77,174,145,0.28),transparent_60%),radial-gradient(circle_at_75%_85%,_rgba(59,130,246,0.18),transparent_55%)]" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/35 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <p className="text-lg font-semibold text-slate-50">
                  Cosmic Knowledge Retrieval System
                </p>
                <p className="text-sm text-slate-400">
                  Knowledge Graph + Multi-agent RAG + GNN signals
                </p>
              </div>
            </div>
            <div className="p-6">
              <p className="text-sm leading-relaxed text-slate-300">
                Designed a retrieval-augmented pipeline for unstructured mission
                data. Used graph structure to ground retrieval and keep responses
                consistent under ambiguity, then layered reasoning signals to
                improve relevance.
              </p>

              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
                {[
                  { k: "Tech", v: "Knowledge Graphs" },
                  { k: "Model", v: "RAG Pipeline" },
                  { k: "Algorithm", v: "GNNs" }
                ].map((x) => (
                  <div
                    key={x.k}
                    className="rounded-xl border border-slate-800/80 bg-slate-950/40 p-4 transition-colors duration-250 ease-lab-ease hover:border-emerald-400/40"
                    data-cursor="card"
                  >
                    <p className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-slate-500">
                      {x.k}
                    </p>
                    <p className="mt-2 text-sm font-semibold text-slate-50">
                      {x.v}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="rounded-2xl bg-gradient-to-br from-emerald-900/40 to-emerald-500/20 p-6 text-center shadow-2xl">
              <p className="text-4xl font-semibold text-slate-50">Top 5</p>
              <p className="mt-2 text-sm text-emerald-100/80">
                National Finalists
              </p>
            </div>
            <StatTile
              label="Dataset Size"
              value="2.5 TB+"
              caption="Unstructured mission logs"
            />
            <StatTile
              label="Latency"
              value="< 150ms"
              caption="Query response time"
            />
          </div>
        </div>
      </div>
    </Section>
  );
}

