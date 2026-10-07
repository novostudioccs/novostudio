"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { press } from "@/lib/animations";

const tonos = {
  primary: "bg-primary text-on-primary hover:bg-primary/90",
  accent: "bg-accent text-on-accent hover:bg-accent/90",
  contorno: "border border-current hover:bg-primary hover:text-on-primary",
  claro: "bg-on-primary text-primary hover:bg-on-primary/90",
};

export function Flecha() {
  return (
    <svg aria-hidden viewBox="0 0 16 16" className="h-4 w-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M2 8h11M9 4l4 4-4 4" />
    </svg>
  );
}

export function Boton({ href, children, tono = "primary", className = "" }: { href: string; children: ReactNode; tono?: keyof typeof tonos; className?: string }) {
  const externo = href.startsWith("http");
  return (
    <motion.a
      href={href}
      {...(externo ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...press}
      className={`inline-flex min-h-12 cursor-pointer items-center justify-between gap-3 rounded-full px-6 py-3 text-sm font-semibold transition-colors duration-200 ${tonos[tono]} ${className}`}
    >
      {children}
      <Flecha />
    </motion.a>
  );
}
