export type Metric = {
  id: string;
  label: string;
  value: number;
  suffix?: string;
  description: string;
};

export const homeMetrics: Metric[] = [
  {
    id: "projects",
    label: "Production-Level Projects",
    value: 12,
    suffix: "+",
    description: "Deployed systems across full stack, not demo apps."
  },
  {
    id: "research",
    label: "Research Award",
    value: 1,
    suffix: "st",
    description: "Prize for applied optimization in healthcare systems."
  },
  {
    id: "hackathons",
    label: "Hackathons",
    value: 4,
    suffix: "+",
    description: "AI, space-tech and systems-focused builds under pressure."
  },
  {
    id: "internship",
    label: "Internship Months",
    value: 6,
    suffix: "+",
    description: "Real-world engineering experience shipping production work."
  }
];

