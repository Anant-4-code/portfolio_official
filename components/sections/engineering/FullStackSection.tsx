"use client";

import { Section } from "@/components/ui/Section";
import { engineeringProjects } from "@/data/projects";
import { TechTag } from "@/components/ui/TechTag";

export function FullStackSection() {
  return (
    <Section id="fullstack" className="pt-10 md:pt-14">
      <div className="mb-7 flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-emerald-400/25 bg-emerald-500/10 text-emerald-200">
          <span className="text-lg font-semibold">⟠</span>
        </div>
        <h2 className="text-2xl font-semibold tracking-tight text-slate-50">
          Full Stack Projects
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {engineeringProjects.map((project) => (
          <article
            key={project.id}
            className="group relative flex flex-col overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-950/35 shadow-2xl transition-all duration-350 ease-lab-ease hover:border-emerald-400/40 glow-border"
            data-cursor="card"
            onMouseMove={(event) => {
              const target = event.currentTarget;
              const rect = target.getBoundingClientRect();
              const x = ((event.clientX - rect.left) / rect.width) * 100;
              const y = ((event.clientY - rect.top) / rect.height) * 100;
              target.style.setProperty("--spotlight-x", `${x}%`);
              target.style.setProperty("--spotlight-y", `${y}%`);
            }}
          >
            <div className="spotlight-mask" />

            <div className="relative h-48 w-full overflow-hidden">
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
              <div
                className="h-full w-full transition-transform duration-450 ease-lab-ease group-hover:scale-[1.03]"
                style={{
                  backgroundImage: project.heroImage ?? undefined
                }}
              />

              {project.badges?.length ? (
                <div className="absolute right-4 top-4 z-20 flex gap-2">
                  {project.badges.slice(0, 2).map((b) => (
                    <span
                      key={b}
                      className="rounded-md border border-white/10 bg-black/40 px-2 py-1 text-[0.68rem] font-medium tracking-wide text-slate-100 backdrop-blur-md"
                    >
                      {b}
                    </span>
                  ))}
                </div>
              ) : null}
            </div>

            <div className="flex flex-1 flex-col p-6">
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-slate-50 transition-colors duration-250 ease-lab-ease group-hover:text-emerald-200">
                  {project.title}
                </h3>
                {project.subtitle ? (
                  <p className="mt-1 text-[0.82rem] text-slate-400">
                    {project.subtitle}
                  </p>
                ) : null}

                <div className="problem-box mt-4 rounded-xl p-4">
                  <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-emerald-200/70">
                    Problem Statement
                  </p>
                  <p className="mt-1 text-[0.82rem] leading-relaxed text-slate-200/90">
                    {project.problem}
                  </p>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-slate-400">
                  {project.solution}
                </p>
              </div>

              <div className="mt-auto border-t border-white/5 pt-4">
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.slice(0, 6).map((tech) => (
                    <TechTag key={tech} label={tech} />
                  ))}
                </div>

                <div className="mt-4 flex items-center justify-between text-sm">
                  <div className="flex items-center gap-4">
                    {(project.links ?? []).slice(0, 1).map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        className="text-slate-400 transition-colors duration-250 ease-lab-ease hover:text-slate-100"
                        data-cursor="link"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                  {(project.links ?? []).slice(1, 2).map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      className="inline-flex items-center gap-1 font-medium text-emerald-200 transition-colors duration-250 ease-lab-ease hover:text-emerald-100"
                      data-cursor="link"
                    >
                      <span>{link.label}</span>
                      <span className="text-base leading-none">↗</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

