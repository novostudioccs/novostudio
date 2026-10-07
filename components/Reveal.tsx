"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { enter, enterReduced, inView, stagger } from "@/lib/animations";

export function useEnter() {
  return useReducedMotion() ? enterReduced : enter;
}

/**
 * Aparece al entrar en pantalla. El HTML sale visible: solo se oculta, ya con JavaScript
 * activo, lo que está por debajo del pliegue. Si los scripts fallan, no queda nada oculto.
 * Con `grupo`, escalona a sus hijos <Item>.
 */
export function Reveal({ children, className, grupo = false }: { children: ReactNode; className?: string; grupo?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const visible = useInView(ref, inView);
  const variants = useEnter();
  const [armado, setArmado] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (el && el.getBoundingClientRect().top > window.innerHeight) setArmado(true);
  }, []);

  return (
    <motion.div ref={ref} className={className} variants={grupo ? stagger() : variants} initial={false} animate={armado && !visible ? "hidden" : "visible"}>
      {children}
    </motion.div>
  );
}

export function Item({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div className={className} variants={useEnter()}>
      {children}
    </motion.div>
  );
}
