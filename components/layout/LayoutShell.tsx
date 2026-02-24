"use client";

import { ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Cursor } from "@/components/motion/Cursor";

interface LayoutShellProps {
  children: ReactNode;
}

export function LayoutShell({ children }: LayoutShellProps) {
  const pathname = usePathname();

  return (
    <>
      <Cursor />
      <div className="relative flex min-h-screen flex-col">
        <Navbar />
        <AnimatePresence mode="wait">
          <motion.main
            key={pathname}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{
              duration: 0.35,
              ease: [0.4, 0, 0.2, 1]
            }}
            className="flex-1"
          >
            {children}
          </motion.main>
        </AnimatePresence>
        <Footer />
      </div>
    </>
  );
}
