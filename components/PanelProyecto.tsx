"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { fundido } from "@/lib/animations";
import type { Proyecto } from "@/lib/content";
import { Etiqueta } from "./Etiqueta";
import { Foto } from "./Foto";

const control = "flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-on-primary text-primary transition-colors duration-200 hover:bg-accent";

/** Panel de detalle de un proyecto: galería, descripción, ficha técnica y testimonio. */
export function PanelProyecto({ p, alCerrar }: { p: Proyecto; alCerrar: () => void }) {
  const ref = useRef<HTMLDialogElement>(null);
  const [i, setI] = useState(0);
  const total = p.galeria.length;
  const ir = (d: number) => setI((n) => (n + d + total) % total);
  const g = p.galeria[i];

  useEffect(() => {
    const d = ref.current;
    if (!d) return;
    if (!d.open) d.showModal();
    const previo = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previo;
    };
  }, []);

  function alFormulario() {
    ref.current?.close();
    requestAnimationFrame(() => document.getElementById("formulario")?.scrollIntoView({ behavior: "smooth", block: "start" }));
  }

  return (
    <dialog
      ref={ref}
      aria-labelledby="panel-titulo"
      onClose={alCerrar}
      onClick={(e) => e.target === ref.current && ref.current?.close()}
      onKeyDown={(e) => {
        if (e.key === "ArrowRight") ir(1);
        if (e.key === "ArrowLeft") ir(-1);
      }}
      className="entra m-auto max-h-[calc(100dvh-1rem)] w-[min(76rem,calc(100vw-1rem))] max-w-none overflow-y-auto overscroll-contain rounded-[1.75rem] bg-background p-0 text-foreground backdrop:bg-primary/75"
    >
      <div className="grid lg:grid-cols-[3fr_2fr]">
        {/* Galería */}
        <div className="min-w-0 bg-primary text-on-primary">
          <div className="p-3 lg:sticky lg:top-0">
          <div className="relative aspect-[4/3] overflow-hidden rounded bg-primary lg:aspect-[16/11]">
            <AnimatePresence initial={false}>
              <motion.div key={i} variants={fundido} initial="hidden" animate="visible" exit="hidden" className="absolute inset-0">
                <Foto src={`g-${p.id}-${i + 1}`} alt={g.alt} sizes="(min-width: 1024px) 45rem, 96vw" contener={g.vertical} priority className="h-full rounded-none bg-primary" />
              </motion.div>
            </AnimatePresence>
            {total > 1 && (
              <>
                <button type="button" aria-label="Imagen anterior" onClick={() => ir(-1)} className={`${control} absolute left-3 top-1/2 -translate-y-1/2`}>
                  <svg aria-hidden viewBox="0 0 16 16" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M14 8H3M7 4L3 8l4 4" />
                  </svg>
                </button>
                <button type="button" aria-label="Imagen siguiente" onClick={() => ir(1)} className={`${control} absolute right-3 top-1/2 -translate-y-1/2`}>
                  <svg aria-hidden viewBox="0 0 16 16" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M2 8h11M9 4l4 4-4 4" />
                  </svg>
                </button>
              </>
            )}
          </div>
          <p aria-live="polite" className="flex items-baseline justify-between gap-4 px-2 pt-3 text-sm">
            <span>{g.alt}</span>
            <span className="label shrink-0">
              {i + 1} / {total}
            </span>
          </p>
          <ul className="sin-barra flex gap-2 overflow-x-auto px-1 pb-1 pt-3">
            {p.galeria.map((x, n) => (
              <li key={n} className="shrink-0">
                <button
                  type="button"
                  aria-label={`Ver imagen ${n + 1}: ${x.alt}`}
                  aria-current={n === i}
                  onClick={() => setI(n)}
                  className={`block cursor-pointer overflow-hidden rounded-lg border-2 transition-opacity duration-200 ${n === i ? "border-accent" : "border-transparent opacity-60 hover:opacity-100"}`}
                >
                  <Foto src={`g-${p.id}-${n + 1}`} alt="" sizes="96px" className="h-14 w-20 rounded-none" />
                </button>
              </li>
            ))}
          </ul>
          </div>
        </div>

        {/* Información */}
        <div className="relative min-w-0 p-6 md:p-10">
          <form method="dialog" className="absolute right-4 top-4">
            <button type="submit" aria-label="Cerrar" className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-primary text-on-primary transition-colors duration-200 hover:bg-accent hover:text-on-accent">
              <svg aria-hidden viewBox="0 0 16 16" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M4 4l8 8M12 4l-8 8" />
              </svg>
            </button>
          </form>

          <Etiqueta>{p.ficha[0][1]}</Etiqueta>
          <h2 id="panel-titulo" className="t2 mt-5 pr-12 md:text-3xl">
            {p.nombre}
          </h2>
          <p className="mt-3 text-lg font-semibold">{p.resumen}</p>
          {p.descripcion.map((t) => (
            <p key={t} className="mt-4 text-foreground/80">
              {t}
            </p>
          ))}

          <h3 className="label mt-10">Ficha técnica</h3>
          <dl className="mt-3 border-b border-primary/25 text-sm">
            {p.ficha.map(([k, v]) => (
              <div key={k} className="grid grid-cols-[7rem_1fr] gap-3 border-t border-primary/25 py-3">
                <dt className="label pt-0.5">{k}</dt>
                <dd>{v}</dd>
              </div>
            ))}
          </dl>

          <figure className="mt-8 rounded bg-muted p-5">
            <blockquote className="text-lg font-semibold">“{p.cita}”</blockquote>
            <figcaption className="mt-1 text-sm text-foreground/80">{p.cliente}, cliente</figcaption>
          </figure>

          <button type="button" onClick={alFormulario} className="mt-8 inline-flex min-h-12 w-full cursor-pointer items-center justify-between gap-3 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-on-accent transition-colors duration-200 hover:bg-accent/90">
            Quiero un proyecto así
            <svg aria-hidden viewBox="0 0 16 16" className="h-4 w-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M2 8h11M9 4l4 4-4 4" />
            </svg>
          </button>
        </div>
      </div>
    </dialog>
  );
}
