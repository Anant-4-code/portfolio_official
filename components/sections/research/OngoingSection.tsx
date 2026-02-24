"use client";

import { Section } from "@/components/ui/Section";

function InvestigationCard({
  title,
  period,
  description
}: {
  title: string;
  period: string;
  description: string;
}) {
  return (
    <div
      className="glass-surface card-hover glow-border cursor-pointer rounded-2xl p-6"
      data-cursor="card"
    >
      <div className="flex items-start justify-between">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-emerald-400/25 bg-emerald-500/10 text-emerald-200">
          <span className="text-sm font-semibold">⟢</span>
        </div>
        <span className="text-xs font-medium text-slate-500">{period}</span>
      </div>
      <h4 className="mt-4 text-base font-semibold text-slate-50">{title}</h4>
      <p className="mt-2 text-sm leading-relaxed text-slate-400">
        {description}
      </p>
    </div>
  );
}

export function OngoingSection() {
  return (
    <Section className="pt-4">
      <div className="mx-auto max-w-[1200px]">
        <h3 className="text-2xl font-semibold tracking-tight text-slate-50">
          Ongoing Investigations
        </h3>

        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
          <InvestigationCard
            title="Federated Learning in Edge IoT"
            period="2023 – Present"
            description="Decentralized training strategies to preserve privacy for distributed sensor networks."
          />
          <InvestigationCard
            title="Genetic Algorithms for UI Layouts"
            period="2024 – Present"
            description="Evolutionary optimisation for responsive layout generation aligned with user behaviour signals."
          />
        </div>
      </div>
    </Section>
  );
}

