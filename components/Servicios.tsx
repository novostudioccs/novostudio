import { servicios } from "@/lib/content";
import { Boton } from "./Boton";
import { Encabezado } from "./Encabezado";
import { Foto } from "./Foto";
import { Item, Reveal } from "./Reveal";

export function Servicios() {
  return (
    <section id="servicios" className="bg-muted py-16 md:py-24">
      <div className="wrap">
        <Encabezado etiqueta="Servicios" titulo={<>Diseño, obra y acabados, <span className="font-light">de principio a fin.</span></>} />
        <Reveal grupo className="mt-10 grid gap-4 md:mt-14 md:grid-cols-[2fr_1fr_1fr]">
          {servicios.map((s, i) => (
            <Item key={s.titulo} className="flex flex-col overflow-hidden rounded">
              <Foto src={s.foto} alt={s.alt} sizes={i === 0 ? "(min-width: 768px) 50vw, 92vw" : "(min-width: 768px) 25vw, 92vw"} className="aspect-[4/3] rounded-none md:aspect-auto md:h-[26rem]" />
              <div className="flex-1 bg-background p-5 md:p-6">
                <p className="label">[{i + 1}]</p>
                <h3 className="t3 mt-2 md:text-base lg:text-lg">{s.titulo}</h3>
                <p className="mt-2 text-sm opacity-80">{s.texto}</p>
              </div>
            </Item>
          ))}
        </Reveal>
        <div className="mt-6 grid gap-5 border-t border-primary/25 pt-6 lg:grid-cols-12 lg:items-center lg:gap-x-8">
          <p className="text-sm text-foreground/80 lg:col-span-9">
            También: levantamiento fotográfico y planimétrico, renders 3D y video recorrido, planimetría técnica, optimización de espacios, asesoría especializada, servicios generales y mantenimiento.
          </p>
          <div className="lg:col-span-3 lg:justify-self-end">
            <Boton href="#modalidades" tono="contorno">
              Ver modalidades
            </Boton>
          </div>
        </div>
      </div>
    </section>
  );
}
