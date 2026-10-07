"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { panel } from "@/lib/animations";
import { alcance, modalidades } from "@/lib/content";
import { Boton } from "./Boton";
import { Encabezado } from "./Encabezado";
import { Reveal } from "./Reveal";

function Marca({ si }: { si: boolean }) {
  return (
    <>
      <svg aria-hidden viewBox="0 0 20 20" className="mx-auto h-5 w-5" fill="none" stroke="currentColor" strokeWidth={si ? 2 : 1}>
        {si ? <path d="M4 10.5l4 4 8-9" /> : <path d="M7 10h6" opacity=".45" />}
      </svg>
      <span className="sr-only">{si ? "Incluido" : "No incluido"}</span>
    </>
  );
}

export function Modalidades() {
  const [activa, setActiva] = useState(2);
  const m = modalidades[activa];
  return (
    <section id="modalidades" className="bg-muted py-16 md:py-24">
      <div className="wrap">
        <Encabezado etiqueta="Modalidades" titulo={<>Tres formas <span className="font-light">de trabajar con nosotros.</span></>} />

        {/* Escritorio: tabla comparativa */}
        <Reveal className="mt-10 hidden md:mt-14 lg:block">
          <table className="w-full table-fixed border-collapse text-left">
            <caption className="sr-only">Comparación de modalidades de servicio</caption>
            <colgroup>
              <col className="w-[25%]" />
              <col />
              <col />
              <col />
            </colgroup>
            <thead>
              <tr>
                <td />
                {modalidades.map((x) => (
                  <th key={x.id} scope="col" className={`display px-6 pb-5 pt-6 text-center text-base xl:text-xl ${"destacada" in x ? "rounded-t-[1.25rem] bg-primary text-on-primary" : ""}`}>
                    {x.nombre}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {alcance.map((fila) => (
                <tr key={fila.servicio} className="border-t border-primary/25">
                  <th scope="row" className="py-4 pr-6 font-normal">
                    {fila.servicio}
                  </th>
                  {fila.incluye.map((si, i) => (
                    <td key={i} className={`px-6 py-4 ${i === 2 ? "bg-primary text-accent" : ""}`}>
                      <Marca si={si} />
                    </td>
                  ))}
                </tr>
              ))}
              <tr className="border-t border-primary align-top">
                <th scope="row" className="label py-5 pr-6">Ideal si</th>
                {modalidades.map((x, i) => (
                  <td key={x.id} className={`px-6 py-5 text-sm ${i === 2 ? "bg-primary text-on-primary" : ""}`}>{x.ideal}</td>
                ))}
              </tr>
              <tr className="border-t border-primary/25 align-top">
                <th scope="row" className="label py-5 pr-6">Cómo se cotiza</th>
                {modalidades.map((x, i) => (
                  <td key={x.id} className={`px-6 py-5 text-sm font-semibold ${i === 2 ? "bg-primary text-on-primary" : ""}`}>{x.cotiza}</td>
                ))}
              </tr>
              <tr>
                <td />
                {modalidades.map((x, i) => (
                  <td key={x.id} className={`px-6 pb-6 pt-2 ${i === 2 ? "rounded-b-[1.25rem] bg-primary" : ""}`}>
                    <Boton href="#formulario" tono={i === 2 ? "accent" : "contorno"} className="w-full">
                      {x.accion}
                    </Boton>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </Reveal>

        {/* Móvil: una modalidad a la vez */}
        <div className="mt-10 lg:hidden">
          <div role="tablist" aria-label="Modalidades" className="grid grid-cols-3 overflow-hidden rounded-full border border-primary">
            {modalidades.map((x, i) => (
              <button
                key={x.id}
                role="tab"
                type="button"
                id={`tab-${x.id}`}
                aria-selected={i === activa}
                aria-controls="panel-modalidad"
                tabIndex={i === activa ? 0 : -1}
                onClick={() => setActiva(i)}
                onKeyDown={(e) => {
                  const d = e.key === "ArrowRight" ? 1 : e.key === "ArrowLeft" ? -1 : 0;
                  if (!d) return;
                  e.preventDefault();
                  const n = (i + d + modalidades.length) % modalidades.length;
                  setActiva(n);
                  document.getElementById(`tab-${modalidades[n].id}`)?.focus();
                }}
                className={`min-h-12 cursor-pointer px-2 text-sm font-semibold transition-colors duration-200 ${i === activa ? "bg-primary text-on-primary" : ""}`}
              >
                {x.nombre}
              </button>
            ))}
          </div>
          <AnimatePresence mode="wait" initial={false}>
            <motion.div key={m.id} id="panel-modalidad" role="tabpanel" aria-labelledby={`tab-${m.id}`} variants={panel} initial="hidden" animate="visible" exit="exit" className="pt-6">
              <p className="text-lg">{m.ideal}</p>
              <ul className="mt-5">
                {alcance.map((fila) => {
                  const si = fila.incluye[activa];
                  return (
                    <li key={fila.servicio} className={`grid grid-cols-[1.75rem_1fr] items-center gap-2 border-t border-primary/25 py-3 ${si ? "" : "text-foreground/75"}`}>
                      <Marca si={si} />
                      {fila.servicio}
                    </li>
                  );
                })}
              </ul>
              <p className="border-t border-primary pt-4">
                <span className="label block">Cómo se cotiza</span>
                <span className="mt-1 block font-semibold">{m.cotiza}</span>
              </p>
              <Boton href="#formulario" tono={activa === 2 ? "accent" : "primary"} className="mt-6 w-full">
                {m.accion}
              </Boton>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
