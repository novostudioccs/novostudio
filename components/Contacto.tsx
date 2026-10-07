"use client";

import Image from "next/image";
import { useRef, useState, type FormEvent } from "react";
import { correo, enlaces, instagram, whatsapp } from "@/lib/content";
import { ruta } from "@/lib/ruta";
import { Foto } from "./Foto";
import { Reveal } from "./Reveal";

type Errores = { nombre?: string; correo?: string; servicio?: string; otro?: string; mensaje?: string };

const servicios = [
  "Diseño de interiores",
  "Diseño arquitectónico",
  "Remodelación o ejecución de obra",
  "Diseño + obra",
  "Renders 3D y recorrido en video",
  "Acabados especiales",
  "Asesoría",
  "Otro",
];

const base = "mt-1.5 w-full rounded-xl border bg-background px-4 py-3 text-base placeholder:text-foreground/70";
const enlacePie = "link inline-flex min-h-11 cursor-pointer items-center";

function Campo({ id, etiqueta, error, opcional, area, ...props }: { id: string; etiqueta: string; error?: string; opcional?: boolean; area?: boolean } & React.InputHTMLAttributes<HTMLInputElement>) {
  const clase = `${base} ${error ? "border-destructive" : "border-primary/60"}`;
  const comun = { id, name: id, "aria-invalid": !!error, "aria-describedby": error ? `${id}-error` : undefined, className: clase };
  return (
    <div>
      <label htmlFor={id} className="text-sm font-semibold">
        {etiqueta} {opcional && <span className="font-normal text-foreground/75">(opcional)</span>}
      </label>
      {area ? <textarea rows={4} maxLength={1000} placeholder={props.placeholder} aria-required={props["aria-required"]} {...comun} /> : <input maxLength={120} {...props} {...comun} />}
      {error && (
        <p id={`${id}-error`} className="mt-1.5 text-sm font-semibold text-destructive">
          {error}
        </p>
      )}
    </div>
  );
}

export function Contacto() {
  const [errores, setErrores] = useState<Errores>({});
  const [enviado, setEnviado] = useState(false);
  const [servicio, setServicio] = useState("");
  const form = useRef<HTMLFormElement>(null);

  function enviar(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    const v = (k: string) => String(d.get(k) ?? "").trim();
    // Segundo clic tras enviar: el formulario ya está vacío, no hay nada que validar.
    if (enviado && !v("nombre") && !v("mensaje") && !v("correo") && !v("telefono")) return;
    const err: Errores = {};
    if (!v("nombre")) err.nombre = "Escribe tu nombre.";
    if (v("correo") && !/^[^\s@.]+(\.[^\s@.]+)*@[^\s@.]+(\.[^\s@.]+)+$/.test(v("correo"))) err.correo = "Revisa el correo: debe tener el formato nombre@dominio.com.";
    if (!v("servicio")) err.servicio = "Selecciona el servicio que necesitas.";
    if (v("servicio") === "Otro" && !v("otro")) err.otro = "Describe el servicio que buscas.";
    if (!v("mensaje")) err.mensaje = "Cuéntanos qué espacio es y qué necesitas.";
    setErrores(err);
    setEnviado(false);
    const primero = Object.keys(err)[0];
    if (primero) {
      form.current?.querySelector<HTMLElement>(`#${primero}`)?.focus();
      return;
    }
    const pedido = v("servicio") === "Otro" ? v("otro") : v("servicio");
    const texto = [`Hola, soy ${v("nombre")}.`, `Servicio: ${pedido}`, v("mensaje"), v("telefono") && `Teléfono: ${v("telefono")}`, v("correo") && `Correo: ${v("correo")}`].filter(Boolean).join("\n");
    const url = whatsapp(texto);
    const ventana = window.open(url, "_blank");
    if (ventana) ventana.opener = null;
    else window.location.href = url; // ventana emergente bloqueada: se abre en la misma pestaña
    e.currentTarget.reset();
    setServicio("");
    setEnviado(true);
  }

  return (
    <footer id="contacto">
      <section className="bg-muted py-16 md:py-24">
        <div className="wrap grid gap-4 lg:grid-cols-2">
          <div className="relative">
            <Foto src="contacto" alt="Render de terraza con piscina y jardín tropical" sizes="(min-width: 1024px) 45vw, 92vw" className="aspect-[4/3] lg:aspect-auto lg:h-full lg:min-h-[30rem]" />
            <p className="t3 absolute bottom-0 left-0 max-w-[24rem] rounded-bl rounded-tr bg-background p-5">Cada proyecto empieza con una conversación.</p>
          </div>
          <Reveal className="rounded bg-background p-6 md:p-10">
            <h2 id="formulario" className="t2 md:text-3xl">Cuéntanos <span className="font-light">sobre tu espacio.</span></h2>
            <p className="mt-4 text-foreground/80">Respondemos de lunes a viernes, de 8:00 a. m. a 5:00 p. m.</p>
            <form ref={form} onSubmit={enviar} onInput={(e) => { const id = (e.target as HTMLElement).id as keyof Errores; if (errores[id]) setErrores({ ...errores, [id]: undefined }); if (enviado) setEnviado(false); }} noValidate className="mt-8 grid gap-4">
              <Campo id="nombre" etiqueta="Nombre" autoComplete="name" aria-required error={errores.nombre} />
              <div className="grid gap-4 sm:grid-cols-2">
                <Campo id="telefono" etiqueta="Teléfono" type="tel" autoComplete="tel" opcional />
                <Campo id="correo" etiqueta="Correo" type="email" autoComplete="email" opcional error={errores.correo} />
              </div>
              <div>
                <label htmlFor="servicio" className="text-sm font-semibold">
                  Servicio que necesitas
                </label>
                <select
                  id="servicio"
                  name="servicio"
                  value={servicio}
                  onChange={(e) => setServicio(e.target.value)}
                  aria-required
                  aria-invalid={!!errores.servicio}
                  aria-describedby={errores.servicio ? "servicio-error" : undefined}
                  className={`${base} min-h-12 cursor-pointer ${errores.servicio ? "border-destructive" : "border-primary/60"}`}
                >
                  <option value="">Selecciona una opción</option>
                  {servicios.map((x) => (
                    <option key={x} value={x}>
                      {x}
                    </option>
                  ))}
                </select>
                {errores.servicio && (
                  <p id="servicio-error" className="mt-1.5 text-sm font-semibold text-destructive">
                    {errores.servicio}
                  </p>
                )}
              </div>
              {servicio === "Otro" && <Campo id="otro" etiqueta="¿Qué servicio buscas?" aria-required placeholder="Descríbelo en pocas palabras" error={errores.otro} />}
              <Campo id="mensaje" etiqueta="Mensaje" aria-required area placeholder="¿Qué espacio es y qué necesitas?" error={errores.mensaje} />
              <button type="submit" className="mt-2 min-h-12 cursor-pointer rounded-full bg-accent px-6 py-3 text-sm font-semibold text-on-accent transition-colors duration-200 hover:bg-accent/90">
                Enviar por WhatsApp
              </button>
              <p role="status" className="min-h-5 text-sm font-semibold">
                {enviado ? "Se abrió WhatsApp con tu mensaje listo para enviar." : ""}
              </p>
            </form>
            <p className="text-sm text-foreground/80">
              Planos, levantamientos y fotos:{" "}
              <a className={enlacePie} href={`mailto:${correo}`}>
                {correo}
              </a>
            </p>
          </Reveal>
        </div>
      </section>

      <div className="bg-muted px-[var(--marco)] pb-[var(--marco)]">
      <div className="rounded-[1.75rem] bg-primary py-12 text-on-primary">
        <div className="wrap grid gap-10 md:grid-cols-[2fr_1fr_1fr]">
          <div>
            <Image src={ruta("/brand/logo-blanco.png")} alt="Növo Studio" width={1022} height={193} sizes="180px" loading="lazy" className="h-8 w-auto" />
            <p className="mt-4 font-display text-xs font-extrabold uppercase tracking-[0.02em]">Revalorizamos tus inmuebles.</p>
            <p className="mt-3 max-w-[26rem] text-sm">Arquitectura, interiorismo y ejecución de obra. Proyectos residenciales y corporativos en toda Venezuela.</p>
          </div>
          <nav aria-label="Secciones">
            <ul className="text-sm">
              {enlaces.map((e) => (
                <li key={e.href}>
                  <a href={e.href} className={enlacePie}>
                    {e.texto}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <address className="flex flex-col items-start text-sm not-italic">
            <a href={whatsapp()} target="_blank" rel="noopener noreferrer" className={enlacePie}>
              WhatsApp +58 424 803 0669
            </a>
            <a href={`mailto:${correo}`} className={`${enlacePie} [overflow-wrap:anywhere]`}>
              {correo}
            </a>
            <a href={instagram.url} target="_blank" rel="noopener noreferrer" className={enlacePie}>
              Instagram {instagram.usuario}
            </a>
          </address>
        </div>
        <p className="wrap mt-10 text-xs">© 2026 Növo Studio</p>
      </div>
      </div>
    </footer>
  );
}
