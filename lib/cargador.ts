/** Sirve cada foto de proyecto en el ancho que pide el navegador (archivos <nombre>-<ancho>.webp). */
export default function cargador({ src, width }: { src: string; width: number }) {
  return src.includes("/proyectos/") && src.endsWith(".webp") ? src.replace(/\.webp$/, `-${width}.webp`) : src;
}
