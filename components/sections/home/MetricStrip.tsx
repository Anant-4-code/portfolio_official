import { homeMetrics } from "@/data/metrics";
import { MetricCard } from "@/components/ui/MetricCard";
import { Section } from "@/components/ui/Section";

export function MetricStrip() {
  return (
    <Section className="pt-6 md:pt-4">
      <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
        {homeMetrics.map((metric, index) => (
          <MetricCard key={metric.id} metric={metric} index={index} />
        ))}
      </div>
    </Section>
  );
}

