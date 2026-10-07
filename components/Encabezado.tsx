import type { ReactNode } from "react";
import { Etiqueta } from "./Etiqueta";
import { Reveal } from "./Reveal";

/** Cabecera común: etiqueta en la columna 1-3, titular en la 4-12. Todas las secciones cuelgan de esta retícula. */
export function Encabezado({ etiqueta, titulo, children }: { etiqueta: string; titulo: ReactNode; children?: ReactNode }) {
  return (
    <Reveal className="grid gap-x-8 gap-y-5 lg:grid-cols-12">
      <div className="lg:col-span-3 lg:pt-2.5">
        <Etiqueta>{etiqueta}</Etiqueta>
      </div>
      <div className="lg:col-span-9">
        <h2 className="t2 max-w-[56rem]">{titulo}</h2>
        {children}
      </div>
    </Reveal>
  );
}
