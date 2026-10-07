import { Boton } from "@/components/Boton";

export default function NoEncontrada() {
  return (
    <main className="wrap flex min-h-svh flex-col items-start justify-center gap-6 py-24">
      <h1 className="t2">
        Esta página <span className="font-light">no existe.</span>
      </h1>
      <p className="max-w-[32rem] text-foreground/80">Es posible que el enlace esté mal escrito o que la página se haya movido.</p>
      <Boton href={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/`} tono="accent">
        Volver al inicio
      </Boton>
    </main>
  );
}
