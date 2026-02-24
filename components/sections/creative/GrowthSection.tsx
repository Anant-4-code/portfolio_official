"use client";

import { Section } from "@/components/ui/Section";

function GrowthCard({
  title,
  description,
  tags
}: {
  title: string;
  description: string;
  tags: string[];
}) {
  return (
    <div
      className="glass-surface card-hover glow-border flex flex-col gap-3 rounded-2xl p-6"
      data-cursor="card"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-emerald-400/25 bg-emerald-500/10 text-emerald-200">
        <span className="text-sm font-semibold">↟</span>
      </div>
      <h3 className="text-lg font-semibold text-slate-50">{title}</h3>
      <p className="text-sm leading-relaxed text-slate-400">{description}</p>
      <div className="mt-2 flex flex-wrap gap-2">
        {tags.map((t) => (
          <span
            key={t}
            className="rounded-md border border-slate-800/80 bg-slate-950/40 px-2 py-1 text-[0.7rem] text-slate-400"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

export function GrowthSection() {
  return (
    <Section>
      <div className="mx-auto max-w-[1200px]">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-200">
          Growth
        </p>
        <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-50">
          Marketing &amp; Strategy
        </h2>
        <p className="mt-4 max-w-2xl text-sm text-slate-400">
          Data-driven content strategy and community growth loops that support
          the engineering work — without hype language.
        </p>

        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
          <GrowthCard
            title="Content Strategy"
            description="Content calendars, platform-specific narratives, and performance feedback loops focused on clarity and reach."
            tags={["SEO", "Copywriting", "Analytics"]}
          />
          <GrowthCard
            title="Community Growth"
            description="Value-first engagement systems across channels with repeatable playbooks for organic growth."
            tags={["LinkedIn", "Discord", "Twitter/X"]}
          />
        </div>

        <div className="mt-10 overflow-hidden rounded-2xl border border-slate-800/80 bg-gradient-to-br from-emerald-950/30 to-slate-950/30 p-8 md:p-10">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row md:text-left">
            <div className="max-w-xl">
              <h3 className="text-xl font-semibold text-slate-50">
                Ready to elevate your visual identity?
              </h3>
              <p className="mt-2 text-sm text-slate-400">
                If you need design systems, motion assets, or product visuals
                that feel premium and intentional — let’s build it.
              </p>
            </div>
            <button className="btn-primary" data-cursor="button">
              Start a Project
            </button>
          </div>
        </div>
      </div>
    </Section>
  );
}

