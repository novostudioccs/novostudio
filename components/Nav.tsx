"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { panel } from "@/lib/animations";
import { enlaces } from "@/lib/content";
import { ruta } from "@/lib/ruta";
import { Boton } from "./Boton";

export function Nav() {
  const [abierto, setAbierto] = useState(false);

  // El menú móvil no existe desde 1024 px: si la ventana crece, se cierra y se libera el scroll.
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const alCambiar = () => mq.matches && setAbierto(false);
    mq.addEventListener("change", alCambiar);
    return () => mq.removeEventListener("change", alCambiar);
  }, []);

  useEffect(() => {
    if (!abierto) return;
    const cerrar = (e: KeyboardEvent) => e.key === "Escape" && setAbierto(false);
    const previo = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", cerrar);
    return () => {
      document.body.style.overflow = previo;
      window.removeEventListener("keydown", cerrar);
    };
  }, [abierto]);

  return (
    <header className="sticky top-[var(--marco)] z-50 mx-[var(--marco)] mt-[var(--marco)] rounded-full bg-primary text-on-primary">
      <nav aria-label="Principal" className="flex h-[var(--nav-h)] items-center justify-between gap-4 pl-6 pr-2 md:pl-8">
        <a href="#inicio" className="flex h-11 shrink-0 items-center" aria-label="Növo Studio, inicio">
          <Image src={ruta("/brand/logo-blanco.png")} alt="Növo Studio" width={1022} height={193} sizes="150px" priority className="h-6 w-auto md:h-7" />
        </a>
        <ul className="hidden items-center gap-8 text-sm lg:flex">
          {enlaces.map((e) => (
            <li key={e.href}>
              <a href={e.href} className="inline-flex min-h-11 cursor-pointer items-center underline-offset-8 transition-colors duration-200 hover:text-accent hover:underline">
                {e.texto}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-1">
          <Boton href="#formulario" tono="accent" className="!min-h-11 !px-5">
            <span className="lg:hidden">Presupuesto</span>
            <span className="hidden lg:inline">Pedir presupuesto</span>
          </Boton>
          <button
            type="button"
            className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full lg:hidden"
            aria-expanded={abierto}
            aria-controls="menu-movil"
            aria-label={abierto ? "Cerrar menú" : "Abrir menú"}
            onClick={() => setAbierto((v) => !v)}
          >
            <svg aria-hidden viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5">
              {abierto ? <path d="M5 5l14 14M19 5L5 19" /> : <path d="M3 8h18M3 16h18" />}
            </svg>
          </button>
        </div>
      </nav>
      <AnimatePresence>
        {abierto && (
          <motion.div
            id="menu-movil"
            variants={panel}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="absolute inset-x-0 top-full mt-2 max-h-[calc(100dvh-var(--nav-h)-2rem)] overflow-y-auto overscroll-contain rounded-[1.75rem] bg-primary lg:hidden"
          >
            <ul className="flex flex-col px-6 py-4">
              {enlaces.map((e) => (
                <li key={e.href} className="border-b border-on-primary/15 last:border-0">
                  <a href={e.href} onClick={() => setAbierto(false)} className="display block py-4 text-xl">
                    {e.texto}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
