import Image from "next/image";
import { ruta } from "@/lib/ruta";

export function Foto({ src, alt, sizes, className = "", priority = false, contener = false }: { src: string; alt: string; sizes: string; className?: string; priority?: boolean; contener?: boolean }) {
  return (
    <div className={`relative overflow-hidden rounded bg-muted ${className}`}>
      <Image src={ruta(`/proyectos/${src}.webp`)} alt={alt} fill sizes={sizes} {...(priority ? { priority: true } : { loading: "lazy" as const })} className={contener ? "object-contain" : "object-cover"} />
    </div>
  );
}
