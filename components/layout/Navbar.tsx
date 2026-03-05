"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/engineering", label: "Engineering" },
  { href: "/research", label: "Research" },
  { href: "/creative", label: "Creative Studio" },
  { href: "/leadership", label: "Leadership" },
  { href: "/contact", label: "Contact" }
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const navHeight = isScrolled ? "h-14" : "h-16 md:h-20";

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
        className={`sticky top-0 z-40 border-b border-slate-800/60 backdrop-blur-xl transition-all duration-250 ease-lab-ease ${navHeight}`}
        data-cursor="nav"
      >
        <div className="mx-auto flex h-full max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="flex items-center gap-2 text-sm font-semibold tracking-tight text-slate-100"
            data-cursor="link"
          >
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-500/20 text-xs font-bold text-emerald-200 ring-1 ring-emerald-400/50">
              AI
            </span>
            <span className="hidden text-xs uppercase tracking-[0.2em] text-slate-400 sm:inline">
              Lab Portfolio
            </span>
          </Link>

          <nav className="hidden items-center gap-8 text-xs font-medium text-slate-300 md:flex">
            {navLinks.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="relative py-1 text-[0.78rem] tracking-wide transition-colors duration-250 ease-lab-ease hover:text-emerald-200"
                  data-cursor="link"
                >
                  {item.label}
                  {active && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute inset-x-0 -bottom-1 h-px bg-gradient-to-r from-emerald-400 via-emerald-200 to-emerald-400"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="/webcv.pdf"
              className="hidden text-[0.78rem] font-medium text-slate-200 md:inline-flex"
              data-cursor="button"
              download
            >
              <span className="btn-muted">
                <span>Download Resume</span>
              </span>
            </a>

            <button
              type="button"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-700/80 bg-slate-900/60 text-slate-200 transition-all duration-250 ease-lab-ease hover:border-emerald-400/60 hover:bg-slate-900"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Toggle navigation"
              data-cursor="button"
            >
              <span className="relative block h-3.5 w-4">
                <span
                  className={`absolute left-0 top-0 h-[1px] w-full bg-slate-300 transition-all duration-250 ease-lab-ease ${
                    mobileOpen ? "translate-y-1.5 rotate-45" : ""
                  }`}
                />
                <span
                  className={`absolute left-0 top-1.5 h-[1px] w-3/4 bg-slate-400 transition-all duration-250 ease-lab-ease ${
                    mobileOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`absolute left-0 top-3 h-[1px] w-full bg-slate-300 transition-all duration-250 ease-lab-ease ${
                    mobileOpen ? "-translate-y-1.5 -rotate-45" : ""
                  }`}
                />
              </span>
            </button>
          </div>
        </div>
      </motion.header>

      <motion.div
        initial={false}
        animate={mobileOpen ? "open" : "closed"}
        variants={{
          open: { opacity: 1, y: 0, pointerEvents: "auto" },
          closed: { opacity: 0, y: -12, pointerEvents: "none" }
        }}
        transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
        className="fixed inset-x-0 top-16 z-30 md:hidden"
      >
        <div className="mx-4 overflow-hidden rounded-2xl border border-slate-800/90 bg-slate-950/98 p-5 shadow-2xl backdrop-blur-2xl">
          <nav className="flex flex-col gap-5 text-sm font-medium text-slate-200">
            {navLinks.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center justify-between"
                  data-cursor="link"
                >
                  <span>{item.label}</span>
                  {active && (
                    <span className="h-1 w-1 rounded-full bg-emerald-400" />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="mt-6">
            <a
              href="/webcv.pdf"
              className="block"
              data-cursor="button"
              download
            >
              <button className="btn-primary w-full text-xs" type="button">
                <span>Download Resume</span>
              </button>
            </a>
          </div>
        </div>
      </motion.div>
    </>
  );
}

