import { revalorizacion } from "@/lib/content";
import { Encabezado } from "./Encabezado";
import { Reveal } from "./Reveal";

/** Explica el lema: lo que pierde un inmueble sin adecuar frente a uno adecuado por Növo. */
export function Revalorizacion() {
  return (
    <section id="revalorizacion" className="bg-primary py-16 text-on-primary md:py-24">
      <div className="wrap">
        <Encabezado
          etiqueta="Revalorización"
          titulo={
            <>
              El valor no lo pone <span className="font-light">solo la ubicación.</span>
            </>
          }
        >
          <p className="mt-4 max-w-[40rem] text-on-primary/80">
            Un comprador, un inquilino o un huésped evalúan cómo se ve y cómo funciona un espacio. En venta o en renta, esa diferencia se refleja en el precio y en lo rápido que se recupera la inversión.
          </p>
        </Encabezado>

        <Reveal className="mt-10 grid gap-x-8 md:mt-14 lg:grid-cols-12">
          <div className="lg:col-span-9 lg:col-start-4">
            <div className="hidden grid-cols-2 gap-8 pb-3 md:grid">
              <p className="label text-on-primary/70">Sin adecuar</p>
              <p className="label">Adecuado por Növo</p>
            </div>
            <ul className="border-b border-on-primary/25">
              {revalorizacion.map((r) => (
                <li key={r.con} className="grid gap-3 border-t border-on-primary/25 py-5 md:grid-cols-2 md:gap-8">
                  <p className="flex gap-3 text-on-primary/70">
                    <span aria-hidden className="font-semibold">−</span>
                    <span>
                      <span className="sr-only">Sin adecuar: </span>
                      {r.sin}
                    </span>
                  </p>
                  <p className="flex gap-3 font-semibold">
                    <span aria-hidden className="text-accent">+</span>
                    <span>
                      <span className="sr-only">Adecuado por Növo: </span>
                      {r.con}
                    </span>
                  </p>
                </li>
              ))}
            </ul>
            <p className="mt-6 max-w-[40rem] text-sm text-on-primary/80">Por eso evaluamos cada decisión de diseño y de obra por su efecto en el valor final del inmueble.</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
