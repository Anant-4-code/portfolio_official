"use client";

import { Section } from "@/components/ui/Section";

function FeaturedTile({
  icon,
  title
}: {
  icon: string;
  title: string;
}) {
  return (
    <div
      className="glass-surface card-hover glow-border group cursor-pointer rounded-2xl p-4"
      data-cursor="card"
    >
      <div className="relative flex h-40 w-full items-center justify-center overflow-hidden rounded-xl border border-slate-800/70 bg-slate-950/40">
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 to-transparent" />
        <div className="relative text-5xl text-emerald-300/50 transition-transform duration-450 ease-lab-ease group-hover:scale-110">
          {icon}
        </div>
        <div className="absolute bottom-3 left-4 text-sm font-semibold text-slate-50">
          {title}
        </div>
      </div>
    </div>
  );
}

export function FeaturedWorkSection() {
  return (
    <Section className="pt-4">
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-emerald-400/25 bg-emerald-500/10 text-emerald-200">
            <span className="text-sm font-semibold">▦</span>
          </div>
          <h2 className="text-2xl font-semibold tracking-tight text-slate-50">
            Featured Work
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          <FeaturedTile icon="▤" title="Graphic Design Gallery" />
          <FeaturedTile icon="⌬" title="Web Dev Work" />
          <FeaturedTile icon="⌁" title="Android Apps" />
          <FeaturedTile icon="⟡" title="Research Pubs" />
        </div>
      </div>
    </Section>
  );
}

