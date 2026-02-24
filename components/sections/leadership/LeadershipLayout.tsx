"use client";

import { useMemo, useState } from "react";
import { Section } from "@/components/ui/Section";

type Filter = "All" | "Academic" | "Creative" | "Projects";

const leadershipRoles = [
  {
    title: "Co-Technical Head",
    org: "Lokmat Maha Marathon",
    bullets: [
      "Coordinated technical operations for a large public event.",
      "Handled real-time troubleshooting across timing and registration systems."
    ]
  },
  {
    title: "College Social Media Team Member",
    org: "Official Social Media Team",
    bullets: [
      "Contributed to Instagram and LinkedIn content for college initiatives.",
      "Designed event posters, logos and digital branding assets."
    ]
  }
];

const timelineItems: Array<{
  key: string;
  label: string;
  heading: string;
  filter: Filter;
  tiles: Array<{ value: string; caption: string }>;
}> = [
  {
    key: "internship",
    label: "Internship",
    heading: "Software Engineering Internship",
    filter: "All",
    tiles: [
      {
        value: "Intern",
        caption: "Full stack contributor on a production e-learning platform."
      },
      {
        value: "Stack",
        caption: "Worked across React, Node.js and database layers."
      }
    ]
  },
  {
    key: "creative",
    label: "Creative Experience",
    heading: "Content & Design Work",
    filter: "Creative",
    tiles: [
      {
        value: "Techy Bag",
        caption:
          "Content & thumbnail editor – 40+ performance-oriented thumbnails."
      },
      {
        value: "Snappy Mohit",
        caption:
          "Thumbnail designer & editor – 20+ thumbnails and 15+ edited videos."
      }
    ]
  },
  {
    key: "projects",
    label: "Academic & Projects",
    heading: "Notable Projects",
    filter: "Projects",
    tiles: [
      {
        value: "Research",
        caption: "1st prize award for applied optimisation work in healthcare."
      },
      {
        value: "Hackathons",
        caption:
          "Space-tech and AI hackathon projects taken to finalist rounds."
      }
    ]
  }
];

function FilterPill({
  label,
  active,
  onClick
}: {
  label: Filter;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-lg px-4 py-1.5 text-xs font-semibold transition-all duration-250 ease-lab-ease ${
        active
          ? "bg-emerald-500/20 text-emerald-100 shadow-soft-glow"
          : "text-slate-400 hover:text-slate-100"
      }`}
      data-cursor="button"
    >
      {label}
    </button>
  );
}

export function LeadershipLayout() {
  const [filter, setFilter] = useState<Filter>("All");

  const filteredTimeline = useMemo(() => {
    if (filter === "All") return timelineItems;
    return timelineItems.filter((x) => x.filter === filter || x.filter === "All");
  }, [filter]);

  return (
    <Section className="pt-6">
      <div className="mx-auto grid max-w-[1200px] gap-10 lg:grid-cols-12 lg:gap-12">
        <aside className="lg:col-span-4 lg:sticky lg:top-24 h-fit">
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-emerald-400/25 bg-emerald-500/10 text-emerald-200">
              <span className="text-sm font-semibold">⟣</span>
            </div>
            <h2 className="text-2xl font-semibold tracking-tight text-slate-50">
              Leadership Roles
            </h2>
          </div>

          <div className="space-y-6">
            {leadershipRoles.map((r) => (
              <div
                key={r.title}
                className="glass-surface card-hover glow-border relative overflow-hidden rounded-2xl p-6"
                data-cursor="card"
              >
                <div className="absolute left-0 top-0 h-full w-1 bg-emerald-400/20" />
                <p className="text-base font-semibold text-slate-50">{r.title}</p>
                <p className="mt-1 text-sm font-medium text-emerald-200">
                  {r.org}
                </p>
                <ul className="mt-4 space-y-2 text-sm text-slate-400">
                  {r.bullets.map((b) => (
                    <li key={b}>• {b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </aside>

        <div className="lg:col-span-8">
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-emerald-400/25 bg-emerald-500/10 text-emerald-200">
                <span className="text-sm font-semibold">⟠</span>
              </div>
              <h2 className="text-2xl font-semibold tracking-tight text-slate-50">
                Achievements Wall
              </h2>
            </div>

            <div className="flex w-fit items-center gap-1 rounded-xl border border-slate-800/80 bg-slate-950/40 p-1">
              {(["All", "Academic", "Creative", "Projects"] as Filter[]).map(
                (x) => (
                  <FilterPill
                    key={x}
                    label={x}
                    active={filter === x}
                    onClick={() => setFilter(x)}
                  />
                )
              )}
            </div>
          </div>

          <div className="relative space-y-12 border-l border-slate-800/80 pl-6">
            {filteredTimeline.map((item) => (
              <div key={item.key} className="relative">
                <div className="absolute -left-[13px] top-1.5 h-4 w-4 rounded-full border-4 border-slate-950 bg-emerald-400 shadow-[0_0_0_4px_rgba(77,174,145,0.18)]" />
                <div className="mb-2 flex items-center gap-3">
                  <span className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-200">
                    {item.label}
                  </span>
                  <span className="h-px flex-1 bg-slate-800/80" />
                </div>
                <h3 className="text-xl font-semibold text-slate-50">
                  {item.heading}
                </h3>

                <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {item.tiles.map((t) => (
                    <div
                      key={t.value + t.caption}
                      className="glass-surface card-hover glow-border rounded-2xl p-5"
                      data-cursor="card"
                    >
                      <div className="flex items-start justify-between">
                        <span className="text-sm font-semibold text-emerald-200">
                          ⌬
                        </span>
                        <span className="text-2xl font-semibold text-slate-50">
                          {t.value}
                        </span>
                      </div>
                      <p className="mt-2 text-sm text-slate-400">{t.caption}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

