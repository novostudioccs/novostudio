import type { Transition, Variants } from "framer-motion";

/** Receta de entrada por defecto (Jakub Krehel). */
export const spring: Transition = { type: "spring", duration: 0.45, bounce: 0 };

export const enter: Variants = {
  hidden: { opacity: 0, translateY: 8, filter: "blur(4px)", transition: { duration: 0 } },
  visible: { opacity: 1, translateY: 0, filter: "blur(0px)", transition: spring },
};

/** Versión para prefers-reduced-motion: sin desplazamiento ni desenfoque. */
export const enterReduced: Variants = {
  hidden: { opacity: 0, transition: { duration: 0 } },
  visible: { opacity: 1, transition: { duration: 0.2 } },
};

export const stagger = (step = 0.07, delay = 0): Variants => ({
  hidden: {},
  visible: { transition: { staggerChildren: step, delayChildren: delay } },
});

/** Paneles condicionales (menú móvil, pestañas). */
export const panel: Variants = {
  hidden: { opacity: 0, translateY: -6 },
  visible: { opacity: 1, translateY: 0, transition: spring },
  exit: { opacity: 0, translateY: -6, transition: { duration: 0.15 } },
};

/** Acordeón de preguntas. */
export const collapse: Variants = {
  hidden: { height: 0, opacity: 0 },
  visible: { height: "auto", opacity: 1, transition: spring },
  exit: { height: 0, opacity: 0, transition: { duration: 0.2 } },
};

/** Ícono + del acordeón: gira a × al abrir. */
export const giro: Variants = { cerrado: { rotate: 0 }, abierto: { rotate: 45 } };

/** Cambio de foto por fundido (pasos del proceso). */
export const fundido: Variants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.35 } } };

export const press = { whileHover: { y: -2 }, whileTap: { scale: 0.97 }, transition: spring };

export const inView = { once: true, margin: "0px 0px -12% 0px" } as const;
