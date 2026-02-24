"use client";

import { motion } from "framer-motion";

export function CreativeHero() {
  return (
    <section className="px-4 pb-4 pt-10 sm:px-6 sm:pt-14 lg:px-8 lg:pt-16">
      <div className="mx-auto max-w-[1200px]">
        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1] }}
          className="text-4xl font-semibold tracking-tight text-slate-50 md:text-5xl"
        >
          Creative Studio
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1], delay: 0.12 }}
          className="mt-4 max-w-2xl text-base text-slate-400 md:text-lg"
        >
          Design and motion treated like engineering: structured, measurable, and
          built to support outcomes.
        </motion.p>
      </div>
    </section>
  );
}

