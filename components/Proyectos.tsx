"use client";

import { useState } from "react";
import { proyectos } from "@/lib/content";
import { Encabezado } from "./Encabezado";
import { Foto } from "./Foto";
import { PanelProyecto } from "./PanelProyecto";
import { Item, Reveal } from "./Reveal";

export function Proyectos() {
  const [abierto, setAbierto] = useState<number | null>(null);
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
          {proyectos.map((p, i) => (
            <Item key={p.id} className={i % 2 === 0 ? "lg:mt-10" : ""}>
              <button
                type="button"
                aria-haspopup="dialog"
                onClick={() => setAbierto(i)}
                className="group relative isolate block w-full cursor-pointer overflow-hidden rounded bg-primary text-left text-on-primary"
              >
                <Foto src={p.foto} alt={p.alt} sizes="(min-width: 1024px) 23vw, (min-width: 640px) 46vw, 92vw" className="aspect-[4/5] rounded-none transition-transform duration-500 group-hover:scale-[1.03]" />
                <span aria-hidden className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-primary/90 to-transparent" />
                <span className="absolute inset-x-0 bottom-0 p-5">
                  <span className="t3 block md:text-lg">{p.nombre}</span>
                  <span className="mt-1 block text-sm">Ver proyecto</span>
                </span>
                <span aria-hidden className="absolute right-3 top-3 flex h-11 w-11 items-center justify-center rounded-full bg-on-primary text-primary transition-colors duration-200 group-hover:bg-accent">
                  <svg viewBox="0 0 16 16" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M4 12L12 4M5.5 4H12v6.5" />
                  </svg>
                </span>
              </button>
            </Item>
          ))}
        </Reveal>
      </div>
      {abierto !== null && <PanelProyecto p={proyectos[abierto]} alCerrar={() => setAbierto(null)} />}
    </section>
  );
}
