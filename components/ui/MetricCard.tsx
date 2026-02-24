"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import type { Metric } from "@/data/metrics";

interface MetricCardProps {
  metric: Metric;
  index: number;
}

export function MetricCard({ metric, index }: MetricCardProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!inView) return;

    let start: number | null = null;
    const duration = 1200;
    const startValue = 0;
    const endValue = metric.value;

    const step = (timestamp: number) => {
      if (start === null) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out
      const value = Math.round(startValue + (endValue - startValue) * eased);
      setDisplayValue(value);

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    const rafId = window.requestAnimationFrame(step);
    return () => window.cancelAnimationFrame(rafId);
  }, [inView, metric.value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.4,
        ease: [0.4, 0, 0.2, 1],
        delay: index * 0.05
      }}
      className="card-hover glass-surface relative flex flex-col justify-between rounded-2xl p-4 sm:p-5"
      data-cursor="card"
    >
      <div className="flex items-baseline gap-1.5 text-2xl font-semibold tracking-tight text-emerald-100 sm:text-3xl">
        <span>{displayValue}</span>
        {metric.suffix && (
          <span className="text-base font-medium text-emerald-300/80">
            {metric.suffix}
          </span>
        )}
      </div>
      <div className="mt-3 text-xs font-medium uppercase tracking-[0.18em] text-slate-400">
        {metric.label}
      </div>
      <p className="mt-2 text-[0.74rem] leading-5 text-slate-400">
        {metric.description}
      </p>
    </motion.div>
  );
}

