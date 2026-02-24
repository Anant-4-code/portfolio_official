"use client";

import { motion } from "framer-motion";

export function ResearchHero() {
  return (
    <section className="relative overflow-hidden px-4 pb-4 pt-12 sm:px-6 sm:pt-16 lg:px-8 lg:pt-20">
      <div className="pointer-events-none absolute inset-0 opacity-30 [mask-image:linear-gradient(to_bottom,black_35%,transparent_100%)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle,_rgba(77,174,145,0.35)_1px,transparent_1px)] [background-size:24px_24px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(77,174,145,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(77,174,145,0.06)_1px,transparent_1px)] [background-size:48px_48px]" />
      </div>
      <div className="pointer-events-none absolute right-[-120px] top-[-160px] h-[520px] w-[520px] rounded-full bg-emerald-400/10 blur-[100px]" />

      <div className="mx-auto max-w-[1200px]">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
          className="inline-flex w-fit items-center gap-2 rounded-full border border-emerald-400/25 bg-emerald-500/10 px-3 py-1 text-[0.7rem] font-medium uppercase tracking-[0.18em] text-emerald-200"
          data-cursor="card"
        >
          <span className="text-sm">⟡</span>
          <span>Research &amp; Innovation</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1], delay: 0.08 }}
          className="mt-5 text-balance text-4xl font-semibold leading-tight tracking-tight text-slate-50 md:text-6xl"
        >
          Pushing the Boundaries
          <br />
          <span className="bg-gradient-to-r from-emerald-300 via-emerald-100 to-emerald-300 bg-clip-text text-transparent">
            of AI &amp; Operations
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1], delay: 0.18 }}
          className="mt-4 max-w-2xl text-base text-slate-400 md:text-lg"
        >
          Exploration at the intersection of optimization, enterprise systems,
          and advanced AI — translated into engineering decisions and
          production-ready thinking.
        </motion.p>
      </div>
    </section>
  );
}

