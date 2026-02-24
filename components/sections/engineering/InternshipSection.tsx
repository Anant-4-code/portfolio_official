import { Section } from "@/components/ui/Section";
import { ProgressRing } from "@/components/ui/ProgressRing";

export function InternshipSection() {
  return (
    <Section id="internship" className="pt-2 pb-20">
      <div className="mb-7 flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-emerald-400/25 bg-emerald-500/10 text-emerald-200">
          <span className="text-lg font-semibold">⧉</span>
        </div>
        <h2 className="text-2xl font-semibold tracking-tight text-slate-50">
          Internship Experience
        </h2>
      </div>

      <div className="relative overflow-hidden rounded-2xl border-l-4 border-emerald-400/80 bg-slate-950/35 p-6 shadow-2xl md:p-8">
        <div className="pointer-events-none absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-emerald-400/10 to-transparent opacity-60" />

        <div className="relative z-10 mb-6 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <h3 className="text-xl font-semibold text-slate-50 md:text-2xl">
              Unified Mentor
            </h3>
            <p className="mt-1 text-sm font-medium text-emerald-200">
              Software Engineering Intern
            </p>
          </div>
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-emerald-900/40 bg-emerald-950/30 px-3 py-1 text-xs text-emerald-100">
            <span className="text-sm">▦</span>
            <span>Jun 2023 – Aug 2023</span>
          </div>
        </div>

        <div className="relative z-10 grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="md:col-span-2">
            <p className="text-sm leading-relaxed text-slate-300">
              Spearheaded front-end optimisation initiatives and backend
              integration for the primary e-learning platform. Collaborated with
              senior engineers to refactor legacy code paths and implement
              modern React patterns.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-slate-400">
              <li>• Automated deployment pipelines, reducing manual effort and release risk.</li>
              <li>• Improved query performance via indexing and predictable access paths.</li>
              <li>• Shipped incremental improvements with measurable latency gains.</li>
            </ul>
          </div>

          <div className="glass-surface card-hover rounded-2xl p-5">
            <ProgressRing
              progress={80}
              label="Load Time Improvement"
              caption="Achieved via image optimisation and code splitting."
            />
          </div>
        </div>
      </div>
    </Section>
  );
}

