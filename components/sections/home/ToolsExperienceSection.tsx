"use client";

import { Section } from "@/components/ui/Section";

function ToolGrid({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="glass-surface card-hover glow-border rounded-2xl p-6">
      <h3 className="text-base font-semibold text-slate-50">{title}</h3>
      <div className="mt-4 grid grid-cols-3 gap-3">
        {items.map((x) => (
          <div
            key={x}
            className="flex aspect-square items-center justify-center rounded-lg border border-slate-800/70 bg-slate-950/40 text-xs text-slate-300 transition-colors duration-250 ease-lab-ease hover:border-emerald-400/40 hover:bg-emerald-950/20"
            data-cursor="card"
          >
            {x}
          </div>
        ))}
      </div>
    </div>
  );
}

function Pill({ text }: { text: string }) {
  return (
    <span className="rounded-full border border-slate-800/70 bg-slate-950/40 px-3 py-1 text-xs text-slate-300">
      {text}
    </span>
  );
}

function ExperienceItem({
  title,
  org,
  period,
  description,
  active
}: {
  title: string;
  org: string;
  period: string;
  description: string;
  active?: boolean;
}) {
  return (
    <div className={`relative flex items-start gap-4 ${active ? "is-active" : ""}`}>
      <div
        className={`z-10 mt-1 flex h-10 w-10 items-center justify-center rounded-full border border-emerald-900/60 bg-slate-950/70 ${
          active ? "bg-emerald-500/20 border-emerald-400/60" : ""
        }`}
      >
        <span className={`text-sm ${active ? "text-emerald-100" : "text-emerald-300/70"}`}>◆</span>
      </div>
      <div className="glass-surface card-hover glow-border flex-1 rounded-2xl p-5">
        <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-semibold text-slate-50">{title}</p>
          <time className="text-xs text-slate-500">{period}</time>
        </div>
        <p className="mt-1 text-sm font-medium text-emerald-200">{org}</p>
        <p className="mt-2 text-sm leading-relaxed text-slate-400">{description}</p>
      </div>
    </div>
  );
}

export function ToolsExperienceSection() {
  return (
    <Section className="pt-4 pb-24">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-8 lg:grid-cols-12">
        <div className="flex flex-col gap-6 lg:col-span-4">
          <ToolGrid title="Tech Tools" items={["VS Code", "Git", "Docker", "Figma", "Postman", "Linux"]} />

          <div className="glass-surface card-hover glow-border rounded-2xl p-6">
            <h3 className="text-base font-semibold text-slate-50">Dev Stack</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {["React", "Next.js", "Node.js", "Python", "TypeScript", "Tailwind", "PostgreSQL"].map((x) => (
                <Pill key={x} text={x} />
              ))}
            </div>
          </div>

          <div className="glass-surface card-hover glow-border rounded-2xl p-6">
            <h3 className="text-base font-semibold text-slate-50">Design Tools</h3>
            <div className="mt-4 flex h-20 items-center justify-center rounded-xl border border-slate-800/70 bg-slate-950/40 text-sm text-slate-500">
              Illustrative Graphic
            </div>
          </div>
        </div>

        <div className="glass-surface relative overflow-hidden rounded-2xl p-8 lg:col-span-8">
          <div className="pointer-events-none absolute right-0 top-0 h-64 w-64 rounded-full bg-emerald-400/10 blur-3xl" />
          <div className="mb-8 flex items-center justify-between">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-50">
              Experience
            </h2>
            <button
              className="text-sm font-medium text-emerald-200 transition-colors duration-250 ease-lab-ease hover:text-slate-50"
              data-cursor="link"
            >
              View Full Resume <span className="ml-1">↗</span>
            </button>
          </div>

          <div className="relative space-y-8">
            <div className="absolute left-5 top-0 hidden h-full w-px bg-gradient-to-b from-transparent via-emerald-900/40 to-transparent md:block" />

            <ExperienceItem
              title="Intern Full Stack Engineer"
              org="Unified Mentor"
              period="May 2025 – Aug 2025"
              description="Leading scalable architectures and AI-integrated services. Improved system latency by 40%."
              active
            />
            <ExperienceItem
              title="Freelance Graphic Designer"
              org="Freelance"
              period="2024 - Present"
              description="Graphic design for YouTube channels and social media platforms."
            />
            <ExperienceItem
              title="Web developer Freelance"
              org="Freelance"
              period="2024 - Present"
              description="Built interactive web experiences with WebGL/Three.js in a design-led production workflow."
            />
          </div>
        </div>
      </div>
    </Section>
  );
}

