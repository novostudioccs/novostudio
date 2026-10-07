"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { fundido, spring } from "@/lib/animations";
import { fotosProceso, pasos } from "@/lib/content";
import { Encabezado } from "./Encabezado";
import { Foto } from "./Foto";

export function Proceso() {
  const [activo, setActivo] = useState(0);
  const f = fotosProceso[activo];
  return (
    <section id="proceso" className="bg-background py-16 md:py-24">
      <div className="wrap">
        <Encabezado
          etiqueta="Proceso"
          titulo={
            <>
              Cuatro pasos, <span className="font-light">del primer mensaje a la entrega.</span>
            </>
          }
        />
        <div className="mt-10 grid gap-4 md:mt-14 lg:grid-cols-2">
          <ol className="border-b border-primary/25">
            {pasos.map((p, i) => {
              const on = i === activo;
              return (
                <li key={p.titulo} className="relative border-t border-primary/25">
                  {on && <motion.span layoutId="paso-activo" transition={spring} aria-hidden className="absolute inset-0 rounded-2xl bg-primary" />}
                  <button
                    type="button"
                    aria-current={on ? "step" : undefined}
                    onClick={() => setActivo(i)}
                    onMouseEnter={() => setActivo(i)}
                    className={`relative grid min-h-11 w-full cursor-pointer grid-cols-[3.5rem_1fr] gap-2 px-4 py-6 text-left transition-colors duration-200 md:px-6 ${on ? "text-on-primary" : ""}`}
                  >
                    <span className={`label pt-1.5 ${on ? "text-accent" : ""}`}>[{String(i + 1).padStart(2, "0")}]</span>
                    <span>
                      <span className="block text-xl font-semibold">{p.titulo}</span>
                      <span className="mt-2 block text-sm opacity-80">{p.texto}</span>
                    </span>
                  </button>
                </li>
              );
            })}
          </ol>
          {/* La foto cambia con el paso activo. */}
          <div className="relative aspect-[4/3] overflow-hidden rounded bg-muted lg:aspect-auto lg:h-full lg:min-h-[26rem]">
            <AnimatePresence initial={false}>
              <motion.div key={f.foto} variants={fundido} initial="hidden" animate="visible" exit="hidden" className="absolute inset-0">
                <Foto src={f.foto} alt={f.alt} sizes="(min-width: 1024px) 45vw, 92vw" className="h-full rounded-none" />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
