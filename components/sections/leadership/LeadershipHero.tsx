"use client";

import { motion } from "framer-motion";

export function LeadershipHero() {
  return (
    <section className="px-4 pb-4 pt-10 sm:px-6 sm:pt-14 lg:px-8 lg:pt-16">
      <div className="mx-auto max-w-[1200px]">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
          className="inline-flex w-fit items-center gap-2 rounded-full border border-emerald-400/25 bg-emerald-500/10 px-3 py-1 text-[0.7rem] font-medium uppercase tracking-[0.18em] text-emerald-200"
          data-cursor="card"
        >
          <span className="text-sm">⟟</span>
          <span>Milestones</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1], delay: 0.1 }}
          className="mt-5 text-4xl font-semibold tracking-tight text-slate-50 md:text-5xl"
        >
          Leadership &amp; Achievements
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1], delay: 0.2 }}
          className="mt-4 max-w-2xl text-base text-slate-400 md:text-lg"
        >
          A structured record of ownership: technical execution, coordination,
          and outcomes across engineering and creative work.
        </motion.p>
      </div>
    </section>
  );
}

