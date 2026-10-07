import { cifras } from "@/lib/content";
import { Boton } from "./Boton";
import { Encabezado } from "./Encabezado";
import { Foto } from "./Foto";
import { Item, Reveal } from "./Reveal";

export function Nosotros() {
  return (
    <section id="nosotros" className="bg-background py-16 md:py-24">
      <div className="wrap">
        <Encabezado
          etiqueta="Nosotros"
          titulo={
            <>
              Transformamos tu visión en espacios de alta gama, <span className="font-light text-foreground/60">funcionales y de estética depurada.</span>
            </>
          }
        >
          <div className="mt-8 grid gap-6 text-foreground/80 md:grid-cols-2 md:gap-10">
            <p>Combinamos diseño contemporáneo con la ejecución de materialidades como el microcemento y los acabados de lujo, en proyectos residenciales y corporativos.</p>
            <p>Del presupuesto a la entrega trabajas con un solo equipo. Cada decisión de diseño y de obra se evalúa por su efecto en el valor final de la propiedad.</p>
          </div>
        </Encabezado>
      </div>

      <Reveal grupo className="wrap mt-12 grid gap-4 md:mt-16 md:grid-cols-2">
        {cifras.map((c) => (
          <Item key={c.valor}>
            <article className="relative isolate flex min-h-[22rem] flex-col justify-between gap-10 overflow-hidden rounded bg-primary p-6 text-on-primary md:p-8">
              <Foto src={c.foto} alt={c.alt} sizes="(min-width: 768px) 46vw, 92vw" className="!absolute inset-0 -z-20 rounded-none" />
              <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/30" />
              <div className="max-w-[20rem]">
                <p className="display text-2xl md:text-3xl">
                  {c.valor} <span className="font-light">{c.texto}</span>
                </p>
                <p className="mt-3 text-sm">{c.detalle}</p>
              </div>
              <Boton href={c.href} tono="claro" className="w-full">
                {c.accion}
              </Boton>
            </article>
          </Item>
        ))}
      </Reveal>
    </section>
  );
}
