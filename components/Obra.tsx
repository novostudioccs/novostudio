import { obraAura, obraBano } from "@/lib/content";
import { Encabezado } from "./Encabezado";
import { Foto } from "./Foto";
import { Item, Reveal } from "./Reveal";

function Secuencia({ titulo, detalle, pasos, columnas, formato = "aspect-[9/16]" }: { titulo: string; detalle: string; pasos: { foto: string; texto: string }[]; columnas: string; formato?: string }) {
  return (
    <div className="mt-12 md:mt-16">
      <div className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-2 border-t border-primary/25 pt-5">
        <h3 className="display text-lg md:text-xl">{titulo}</h3>
        <p className="text-sm text-foreground/70">{detalle}</p>
      </div>
      {/* En el teléfono la secuencia se desliza de lado; en pantallas grandes se ve completa. */}
      <Reveal grupo className={`sin-barra -mx-4 mt-6 flex snap-x snap-mandatory gap-3 overflow-x-auto px-4 md:mx-0 md:grid md:overflow-visible md:px-0 ${columnas}`}>
        {pasos.map((p, i) => (
          <Item key={p.foto} className="w-[62%] shrink-0 snap-start sm:w-[40%] md:w-auto">
            <figure>
              <Foto src={p.foto} alt={p.texto} sizes="(min-width: 768px) 16vw, 62vw" className={formato} />
              <figcaption className="mt-3 grid grid-cols-[2rem_1fr] gap-1 text-sm">
                <span className="label pt-0.5 text-accent">{String(i + 1).padStart(2, "0")}</span>
                <span className="text-foreground/80">{p.texto}</span>
              </figcaption>
            </figure>
          </Item>
        ))}
      </Reveal>
    </div>
  );
}

export function Obra() {
  return (
    <section id="obra" className="bg-muted py-16 md:py-24">
      <div className="wrap">
        <Encabezado
          etiqueta="Obra"
          titulo={
            <>
              Lo que diseñamos, <span className="font-light">lo construimos.</span>
            </>
          }
        >
          <p className="mt-4 max-w-[40rem] text-foreground/80">
            Coordinamos cada actividad con especialistas técnicos y cuadrillas capacitadas, bajo supervisión directa de nuestros arquitectos. Así, lo que apruebas en el diseño es exactamente lo que recibes.
          </p>
        </Encabezado>

        <Secuencia titulo="De la demolición a la entrega" detalle="Remodelación completa de un baño" pasos={obraBano} columnas="md:grid-cols-6" />
        <Secuencia titulo="Proyecto Aura en obra" detalle="Valle Arriba, Caracas" pasos={obraAura} columnas="md:grid-cols-4" formato="aspect-[9/16] md:aspect-[3/4]" />
      </div>
    </section>
  );
}
