"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { fundido } from "@/lib/animations";
import { proyectos } from "@/lib/content";
import { Encabezado } from "./Encabezado";
import { Foto } from "./Foto";
import { Item, Reveal } from "./Reveal";

export function Proyectos() {
  // Con ratón, la ficha se ve mientras el cursor está sobre la tarjeta; la flecha la deja fija (y es el único control en pantallas táctiles).
  const [sobre, setSobre] = useState<number | null>(null);
  const [fija, setFija] = useState<number | null>(null);
  return (
    <section id="proyectos" className="bg-background py-16 md:py-24">
      <div className="wrap">
        <Encabezado
          etiqueta="Proyectos recientes"
          titulo={
            <>
              Una selección de espacios <span className="text-[0.78em] font-light">diseñados por</span> Növo<span className="font-light"> Studio.</span>
            </>
          }
        />
        <Reveal grupo className="mt-10 grid gap-4 sm:grid-cols-2 md:mt-14 lg:grid-cols-4">
          {proyectos.map((p, i) => {
            const on = sobre === i || fija === i;
            return (
              <Item key={p.nombre} className={i % 2 === 0 ? "lg:mt-10" : ""}>
                <article className="relative isolate overflow-hidden rounded bg-primary text-on-primary" onPointerEnter={(e) => e.pointerType === "mouse" && setSobre(i)} onPointerLeave={(e) => e.pointerType === "mouse" && setSobre(null)}>
                  <Foto src={p.foto} alt={p.alt} sizes="(min-width: 1024px) 23vw, (min-width: 640px) 46vw, 92vw" className="aspect-[4/5] rounded-none" />
                  <div aria-hidden className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-primary/90 to-transparent" />
                  <h3 className="t3 absolute inset-x-0 bottom-0 p-5 md:text-lg">{p.nombre}</h3>
                  <AnimatePresence>
                    {on && (
                      <motion.div id={`ficha-${i}`} variants={fundido} initial="hidden" animate="visible" exit="hidden" className="absolute inset-0 flex flex-col justify-end bg-primary p-5">
                        <dl className="text-sm">
                          {(
                            [
                              ["Tipo", p.tipo],
                              ["Área", p.m2],
                              ["Alcance", p.alcance],
                            ] as const
                          ).map(([k, v]) => (
                            <div key={k} className="grid grid-cols-[5rem_1fr] gap-3 border-t border-on-primary/25 py-2">
                              <dt className="label pt-0.5">{k}</dt>
                              <dd>{v}</dd>
                            </div>
                          ))}
                        </dl>
                        <figure className="border-t border-on-primary/25 pt-3">
                          <blockquote className="font-semibold">“{p.cita}”</blockquote>
                          <figcaption className="mt-1 text-sm">{p.cliente}, cliente</figcaption>
                        </figure>
                      </motion.div>
                    )}
                  </AnimatePresence>
                  <button
                    type="button"
                    aria-expanded={on}
                    aria-controls={`ficha-${i}`}
                    aria-label={`${on ? "Ocultar" : "Ver"} ficha de ${p.nombre}`}
                    onClick={() => setFija(fija === i ? null : i)}
                    className="absolute right-3 top-3 flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-on-primary text-primary"
                  >
                    <svg aria-hidden viewBox="0 0 16 16" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5">
                      {on ? <path d="M4 4l8 8M12 4l-8 8" /> : <path d="M4 12L12 4M5.5 4H12v6.5" />}
                    </svg>
                  </button>
                </article>
              </Item>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
