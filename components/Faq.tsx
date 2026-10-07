"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { collapse, giro } from "@/lib/animations";
import { preguntas } from "@/lib/content";
import { Encabezado } from "./Encabezado";
import { Foto } from "./Foto";
import { Reveal } from "./Reveal";

export function Faq() {
  const [abierta, setAbierta] = useState<number | null>(0);
  return (
    <section id="preguntas" className="bg-background py-16 md:py-24">
      <div className="wrap">
        <Encabezado etiqueta="Preguntas" titulo={<>Lo que conviene saber <span className="font-light">antes de empezar.</span></>} />
        <div className="mt-10 grid gap-8 md:mt-14 lg:grid-cols-12 lg:gap-x-8">
          <div className="hidden lg:col-span-5 lg:block">
            <Foto src="detalle-1" alt="Render de fachada interior y piscina, Proyecto La Romana" sizes="(min-width: 1024px) 40vw, 0px" className="h-full min-h-[24rem]" />
          </div>
          <Reveal className="lg:col-span-7">
          <ul className="border-b border-primary/25">
            {preguntas.map((q, i) => {
              const activa = abierta === i;
              return (
                <li key={q.p} className="border-t border-primary/25">
                  <h3>
                    <button
                      type="button"
                      aria-expanded={activa}
                      aria-controls={`r-${i}`}
                      onClick={() => setAbierta(activa ? null : i)}
                      className="grid w-full cursor-pointer grid-cols-[3.5rem_1fr_auto] items-center gap-2 min-h-11 py-5 text-left font-semibold md:text-lg"
                    >
                      <span className="label">[{String(i + 1).padStart(2, "0")}]</span>
                      {q.p}
                      <motion.svg aria-hidden viewBox="0 0 20 20" className="h-5 w-5 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.5" variants={giro} initial={false} animate={activa ? "abierto" : "cerrado"}>
                        <path d="M10 3v14M3 10h14" />
                      </motion.svg>
                    </button>
                  </h3>
                  <AnimatePresence initial={false}>
                    {activa && (
                      <motion.div id={`r-${i}`} variants={collapse} initial="hidden" animate="visible" exit="exit" className="overflow-hidden">
                        <p className="max-w-[65ch] pb-6 pl-[calc(3.5rem+0.5rem)] text-sm text-foreground/80 md:text-base">{q.r}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              );
            })}
          </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
