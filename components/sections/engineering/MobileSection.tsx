"use client";

import { Section } from "@/components/ui/Section";
import { mobileProjects } from "@/data/projects";
import { TechTag } from "@/components/ui/TechTag";

function PhoneMock({ backgroundImage }: { backgroundImage?: string }) {
  return (
    <div className="relative w-full max-w-[220px] aspect-[9/16] overflow-hidden rounded-2xl border-4 border-slate-800 shadow-2xl">
      <div
        className="absolute inset-0"
        style={{ backgroundImage: backgroundImage ?? undefined }}
      />
      <div className="absolute left-1/2 top-0 h-4 w-1/2 -translate-x-1/2 rounded-b-xl bg-slate-900" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
    </div>
  );
}

export function MobileSection() {
  return (
    <Section id="mobile" className="pt-2">
      <div className="mb-7 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-emerald-400/25 bg-emerald-500/10 text-emerald-200">
            <span className="text-lg font-semibold">⌁</span>
          </div>
          <h2 className="text-2xl font-semibold tracking-tight text-slate-50">
            Mobile Development
          </h2>
        </div>
        <span className="rounded-md border border-emerald-900/40 bg-emerald-950/30 px-2 py-1 text-[0.7rem] font-medium tracking-wide text-emerald-200/80">
          Kotlin Native
        </span>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {mobileProjects.map((p) => (
          <article
            key={p.id}
            className="glass-surface card-hover glow-border flex flex-col gap-6 rounded-2xl p-6 md:flex-row md:items-center"
            data-cursor="card"
          >
            <div className="flex w-full justify-center md:w-1/3">
              <PhoneMock backgroundImage={p.heroImage} />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-slate-50">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">
                {p.solution}
              </p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {p.tech.slice(0, 4).map((t) => (
                  <TechTag key={t} label={t} />
                ))}
              </div>
              <div className="mt-4 flex items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  {(p.links ?? []).slice(0, 1).map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      className="text-sm font-medium text-emerald-200 transition-colors duration-250 ease-lab-ease hover:text-emerald-100"
                      data-cursor="link"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
                {(p.links ?? []).slice(1, 2).map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-gradient-to-r from-white/12 via-white/6 to-transparent px-3 py-1.5 text-xs font-semibold text-emerald-200 shadow-sm backdrop-blur-md transition-all duration-250 ease-lab-ease hover:border-emerald-400/35 hover:text-emerald-100 hover:shadow-md hover:shadow-emerald-500/20"
                    data-cursor="button"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span>{link.label}</span>
                    <span className="text-base leading-none">↗</span>
                  </a>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

