import { Section } from "@/components/ui/Section";

interface VideoThumbProps {
  title: string;
  role: string;
}

function VideoThumb({ title, role }: VideoThumbProps) {
  return (
    <div
      className="group relative overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-900/40 shadow-inner shadow-black/30 transition-all duration-250 ease-lab-ease hover:border-emerald-400/70 hover:bg-slate-900/90"
      data-cursor="card"
    >
      <div className="aspect-video bg-[radial-gradient(circle_at_top,_rgba(148,163,184,0.45),transparent_60%),radial-gradient(circle_at_bottom,_rgba(15,23,42,0.9),transparent_65%)]" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-70 transition-opacity duration-250 ease-lab-ease group-hover:opacity-90" />
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-80 transition-transform duration-250 ease-lab-ease group-hover:scale-105">
        <div className="flex h-12 w-12 items-center justify-center rounded-full border border-emerald-300/70 bg-slate-900/90 shadow-soft-glow">
          <div className="ml-0.5 h-4 w-4 border-l-[6px] border-l-emerald-300 border-y-[6px] border-y-transparent" />
        </div>
      </div>
      <div className="relative flex flex-col gap-1 px-4 py-3 text-[0.8rem]">
        <p className="font-medium text-slate-50">{title}</p>
        <p className="text-[0.74rem] text-slate-400">{role}</p>
      </div>
    </div>
  );
}

export function VideoSection() {
  return (
    <Section>
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-300">
            Video Systems
          </h2>
          <p className="mt-3 text-xl font-semibold tracking-tight text-slate-50 md:text-2xl">
            Editing for retention, structure and clarity.
          </p>
          <p className="mt-4 text-sm text-slate-400">
            Thumbnails, hooks and pacing are treated as part of a system that
            optimises for clarity and viewer attention, not just aesthetics.
          </p>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <VideoThumb title="Product Explainer Sequence" role="Script, structure and edit system." />
        <VideoThumb title="Technical Breakdown Episode" role="Narrative, motion design and pacing." />
        <VideoThumb title="Launch Announcement Clip" role="Hook design and asset orchestration." />
      </div>
    </Section>
  );
}

