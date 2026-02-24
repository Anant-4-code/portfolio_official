"use client";

import { motion } from "framer-motion";

export function EngineeringHero() {
  return (
    <section className="px-4 pb-4 pt-10 sm:px-6 sm:pt-14 lg:px-8 lg:pt-16">
      <div className="mx-auto max-w-[1200px]">
        <motion.div
          initial={{ opacity: 0, y: 10, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
          className="inline-flex w-fit items-center gap-2 rounded-full border border-emerald-400/25 bg-emerald-500/10 px-3 py-1 text-[0.7rem] font-medium uppercase tracking-[0.18em] text-emerald-200"
          data-cursor="card"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-300" />
          </span>
          <span>Technical Portfolio</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1], delay: 0.1 }}
          className="mt-5 text-balance text-4xl font-semibold leading-tight tracking-tight text-slate-50 md:text-6xl"
        >
          Engineering &amp;
          <br className="hidden md:block" />
          <span className="bg-gradient-to-r from-emerald-400 via-emerald-200 to-emerald-400 bg-clip-text text-transparent">
            Software Development
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1], delay: 0.2 }}
          className="mt-4 max-w-2xl text-base text-slate-400 md:text-lg"
        >
          Full stack architecture, mobile engineering, and scalable systems —
          built with calm motion and systems-first thinking.
        </motion.p>
      </div>
    </section>
  );
}

