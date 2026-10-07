"use client";

import { useEffect } from "react";

/**
 * La página siempre abre arriba: los enlaces internos desplazan sin dejar "#seccion" en la dirección,
 * así al recargar o compartir el enlace no se abre a mitad de página.
 */
export function Inicio() {
  useEffect(() => {
    const alClic = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const a = (e.target as HTMLElement).closest<HTMLAnchorElement>('a[href^="#"]');
      const id = a?.getAttribute("href")?.slice(1);
      const destino = id ? document.getElementById(id) : null;
      if (!destino) return;
      e.preventDefault();
      const suave = !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      destino.scrollIntoView({ behavior: suave ? "smooth" : "auto", block: "start" });
      if (!destino.hasAttribute("tabindex")) destino.setAttribute("tabindex", "-1");
      destino.focus({ preventScroll: true });
    };
    document.addEventListener("click", alClic);
    return () => document.removeEventListener("click", alClic);
  }, []);
  return null;
}

/** Se ejecuta antes de pintar: quita el "#seccion" heredado y desactiva la restauración de scroll del navegador. */
export const guionInicio =
  "try{history.scrollRestoration='manual';if(location.hash){history.replaceState(null,'',location.pathname+location.search)}scrollTo(0,0)}catch(e){}";
