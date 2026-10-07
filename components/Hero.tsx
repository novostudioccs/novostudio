import Image from "next/image";
import type { CSSProperties } from "react";
import { ruta } from "@/lib/ruta";
import { Boton } from "./Boton";
import { Etiqueta } from "./Etiqueta";

const i = (n: number) => ({ "--i": n }) as CSSProperties;
const pilares = ["Diseño", "Obra", "Acabados"];

export function Hero() {
  return (
    <section id="inicio" className="px-[var(--marco)] pt-[var(--marco)]">
      <div className="relative isolate overflow-hidden rounded-[1.75rem] bg-primary text-on-primary">
        <Image src={ruta("/proyectos/hero.webp")} alt="Render de sala y comedor integrados, Proyecto Gallery" fill priority sizes="100vw" className="-z-20 object-cover" />
        <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-r from-primary/90 via-primary/65 to-primary/25" />
        <div aria-hidden className="absolute inset-x-0 bottom-0 -z-10 h-2/3 bg-gradient-to-t from-primary/85 to-transparent" />
        <div aria-hidden className="absolute inset-x-0 top-0 -z-10 h-1/2 bg-gradient-to-b from-primary/70 to-transparent" />

        <div className="wrap flex min-h-[min(calc(100svh-var(--nav-h)-2rem),44rem)] flex-col justify-between gap-16 py-8 md:py-12">
          <div>
            <div className="entra" style={i(0)}>
              <Etiqueta>Arquitectura, interiores y obra</Etiqueta>
            </div>
            <h1 className="entra display mt-6 text-[clamp(2rem,5.4vw,4.5rem)]" style={i(1)}>
              Revalorizamos
              <br />
              <span className="font-light">tus inmuebles.</span>
            </h1>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1fr_24rem] lg:items-end">
            <ul className="entra hidden gap-10 text-sm sm:flex" style={i(4)}>
              {pilares.map((p) => (
                <li key={p} className="flex items-center gap-2">
                  <span aria-hidden className="text-accent">+</span>
                  {p}
                </li>
              ))}
            </ul>
            <div>
              <p className="entra text-lg leading-snug md:text-xl" style={i(2)}>
                Diseño de interiores, arquitectura y ejecución de obra bajo una sola firma.
              </p>
              <div className="entra mt-6 flex flex-wrap gap-3" style={i(3)}>
                <Boton href="#formulario" tono="accent">
                  Pedir presupuesto
                </Boton>
                <Boton href="#proyectos" tono="claro">
                  Ver proyectos
                </Boton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
