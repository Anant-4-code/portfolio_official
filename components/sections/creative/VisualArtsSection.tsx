"use client";

import { Section } from "@/components/ui/Section";

function MetricTile({
  index,
  title,
  description
}: {
  index: string;
  title: string;
  description: string;
}) {
  return (
    <div
      className="glass-surface card-hover glow-border flex flex-col gap-3 rounded-2xl p-5"
      data-cursor="card"
    >
      <div className="flex items-center justify-between">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-emerald-400/25 bg-emerald-500/10 text-emerald-200">
          <span className="text-sm font-semibold">✦</span>
        </div>
        <span className="text-4xl font-semibold text-white/5">{index}</span>
      </div>
      <div>
        <p className="text-base font-semibold text-slate-50">{title}</p>
        <p className="mt-2 text-sm leading-relaxed text-slate-400">
          {description}
        </p>
      </div>
    </div>
  );
}

function GalleryTile({ label, meta }: { label: string; meta: string }) {
  return (
    <div
      className="group relative aspect-square overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-900/40 transition-all duration-350 ease-lab-ease hover:border-emerald-400/50"
      data-cursor="card"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_10%,_rgba(77,174,145,0.25),transparent_60%),radial-gradient(circle_at_80%_90%,_rgba(148,163,184,0.12),transparent_55%)] opacity-90 transition-transform duration-450 ease-lab-ease group-hover:scale-[1.03]" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent" />
      <div className="absolute bottom-4 left-4 right-4">
        <p className="text-sm font-semibold text-slate-50">{label}</p>
        <p className="mt-1 text-[0.72rem] text-slate-400">{meta}</p>
      </div>
    </div>
  );
}

export function VisualArtsSection() {
  return (
    <Section className="pt-8">
      <div className="mx-auto max-w-[1200px]">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-emerald-400/25 bg-emerald-500/10 text-emerald-200">
            <span className="text-sm font-semibold">✎</span>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-200">
              Visual Arts
            </p>
            <h2 className="mt-1 text-2xl font-semibold tracking-tight text-slate-50">
              Graphic Design &amp; Branding
            </h2>
          </div>
        </div>

        <p className="mt-4 max-w-2xl text-sm text-slate-400">
          High-conversion visuals, identity systems, and assets designed with
          hierarchy, audience targeting and performance goals.
        </p>

        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
          <MetricTile
            index="01"
            title="35+ Creatives"
            description="Social assets and ad creatives built for click-through behaviour and clarity."
          />
          <MetricTile
            index="02"
            title="Brand Identity"
            description="Complete visual language for products: logo, grid, and repeatable design rules."
          />
          <MetricTile
            index="03"
            title="Tools"
            description="Figma, Photoshop, Illustrator, Canva — with production-ready export pipelines."
          />
        </div>

        <div className="mt-4 grid grid-cols-2 gap-4 md:grid-cols-4">
          <GalleryTile label="Tech Startup Branding" meta="Identity system" />
          <GalleryTile label="Event Posters" meta="Print + digital" />
          <GalleryTile label="Social Campaigns" meta="Digital marketing" />
          <GalleryTile label="UI/UX Case Study" meta="Product design" />
        </div>
      </div>
    </Section>
  );
}

