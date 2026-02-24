"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface SectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
}

export function Section({ id, children, className }: SectionProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
      className={`px-4 py-16 sm:px-6 md:py-20 lg:px-8 lg:py-28 ${className ?? ""}`}
    >
      {children}
    </motion.section>
  );
}

