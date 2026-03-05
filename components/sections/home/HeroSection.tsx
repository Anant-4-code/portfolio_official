"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { TypingText } from "@/components/ui/TypingText";
import { MagneticButton } from "@/components/motion/MagneticButton";

const heroWords = ["Full", "Stack", "Engineer", "for", "Intelligent", "Systems."];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08
    }
  }
};

const wordVariants = {
  hidden: { opacity: 0, y: 18, letterSpacing: "0.12em" },
  visible: {
    opacity: 1,
    y: 0,
    letterSpacing: "0.04em",
    transition: {
      duration: 0.35,
      ease: [0.4, 0, 0.2, 1]
    }
  }
};

export function HeroSection() {
  return (
    <section className="px-4 pb-6 pt-12 sm:px-6 sm:pt-16 lg:flex lg:items-center lg:gap-12 lg:px-8 lg:pt-20">
      
      {/* LEFT CONTENT */}
      <div className="flex-1">

        {/* Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
          className="inline-flex items-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-500/5 px-3 py-1 text-[0.7rem] font-medium uppercase tracking-[0.16em] text-emerald-200 glass-surface"
          data-cursor="card"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-soft-glow" />
          <span>Available for AI & Full Stack Work</span>
        </motion.div>

        {/* Heading */}
        <motion.div
          className="mt-6 space-y-5"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h1 className="text-balance text-3xl font-semibold leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
            {heroWords.map((word, index) => {
              const isHighlight = word === "Intelligent";
              return (
                <motion.span
                  key={word + index}
                  variants={wordVariants}
                  className={`inline-block pr-1 ${
                    isHighlight
                      ? "bg-gradient-to-r from-emerald-400 via-emerald-200 to-emerald-400 bg-clip-text text-transparent animate-gradientShift"
                      : ""
                  }`}
                >
                  {word}
                </motion.span>
              );
            })}
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.2 }}
            className="text-sm text-slate-300 sm:text-base"
          >
            I architect scalable web systems, integrate AI where it matters,
            and design interfaces that behave like tools — not decoration.
          </motion.p>
        </motion.div>

        {/* Typing Line */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.3 }}
          className="mt-6 text-xs text-slate-400 sm:text-sm"
        >
          <TypingText text="Full Stack Engineer | AI & Systems Researcher | Creative Technologist" />
        </motion.div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.4 }}
          className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
        >
         <MagneticButton>
            <Link
              href="/engineering"
              className="btn-primary group inline-flex items-center gap-2"
              data-cursor="button"
            >
              <span>View Engineering Systems</span>
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-400/20 text-[0.6rem] text-emerald-100 transition-transform duration-200 group-hover:translate-x-[3px]">
                →
              </span>
            </Link>
          </MagneticButton>

          <motion.a
            whileTap={{ scale: 0.96 }}
            whileHover={{ scale: 1.03 }}
            href="/webcv.pdf"
            download
            className="btn-muted"
          >
            Download Resume
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.5 }}
          className="mt-4 flex flex-wrap gap-2"
        >
          <motion.a
            whileTap={{ scale: 0.96 }}
            whileHover={{ scale: 1.03 }}
            href="mailto:anantrai0809@gmail.com"
            className="btn-muted"
            data-cursor="link"
          >
            anantrai0809@gmail.com
          </motion.a>

          <motion.a
            whileTap={{ scale: 0.96 }}
            whileHover={{ scale: 1.03 }}
            href="https://www.linkedin.com/feed/"
            target="_blank"
            rel="noreferrer"
            className="btn-muted"
            data-cursor="link"
          >
            LinkedIn
          </motion.a>

          <motion.a
            whileTap={{ scale: 0.96 }}
            whileHover={{ scale: 1.03 }}
            href="https://github.com/Anant-4-code"
            target="_blank"
            rel="noreferrer"
            className="btn-muted"
            data-cursor="link"
          >
            GitHub
          </motion.a>
        </motion.div>
      </div>

      {/* RIGHT IMAGE SECTION */}
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.45, delay: 0.2 }}
        className="mt-12 flex flex-1 justify-center lg:mt-0"
      >
        <motion.div
          className="relative h-56 w-56 overflow-hidden rounded-full border border-emerald-400/40 bg-slate-900 shadow-soft-glow sm:h-64 sm:w-64 md:h-72 md:w-72"
          data-cursor="card"
          animate={{ y: [0, -8, 0] }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {/* Profile Image */}
          <Image
            src="/a.jpeg" // Put image in /public folder
            alt="Anant Rai"
            fill
            priority
            className="object-cover"
          />

          Gradient Overlay
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/30 to-slate-900/80" />

          {/* Text Overlay */}
          <div className="absolute inset-x-6 bottom-8 flex flex-col gap-1 text-left text-xs">
            {/* <span className="text-[0.65rem] uppercase tracking-[0.2em] text-slate-300">
              Systems Profile
            </span> */}
            {/* <span className="text-sm font-medium text-emerald-50">
              AI-Integrated Full Stack Engineer
            </span> */}
            {/* <span className="text-[0.7rem] text-slate-300">
              Scalable architectures, research-backed decisions, and
              production-ready execution.
            </span> */}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}