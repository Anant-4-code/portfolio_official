"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface ProgressRingProps {
  size?: number;
  strokeWidth?: number;
  progress: number; // 0-100
  label: string;
  caption: string;
}

export function ProgressRing({
  size = 120,
  strokeWidth = 8,
  progress,
  label,
  caption
}: ProgressRingProps) {
  const center = size / 2;
  const radius = center - strokeWidth;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference * (1 - progress / 100);
  const ref = useRef<SVGCircleElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div className="glass-surface card-hover flex flex-col items-center gap-3 rounded-2xl p-5">
      <div className="relative">
        <svg width={size} height={size}>
          <circle
            cx={center}
            cy={center}
            r={radius}
            stroke="rgba(30,64,175,0.6)"
            strokeWidth={strokeWidth}
            fill="transparent"
          />
          <motion.circle
            ref={ref}
            cx={center}
            cy={center}
            r={radius}
            stroke="url(#progress-gradient)"
            strokeWidth={strokeWidth}
            fill="transparent"
            strokeDasharray={circumference}
            strokeDashoffset={circumference}
            animate={inView ? { strokeDashoffset: offset } : undefined}
            transition={{
              duration: 1.5,
              ease: [0.16, 1, 0.3, 1]
            }}
            strokeLinecap="round"
          />
          <defs>
            <linearGradient id="progress-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#4DAE91" />
              <stop offset="100%" stopColor="#A5F3C6" />
            </linearGradient>
          </defs>
        </svg>
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center text-sm font-semibold text-emerald-100">
          {Math.round(progress)}%
        </div>
      </div>
      <div className="text-xs font-medium uppercase tracking-[0.18em] text-slate-400">
        {label}
      </div>
      <p className="text-[0.74rem] text-slate-400">{caption}</p>
    </div>
  );
}

