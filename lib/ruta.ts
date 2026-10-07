/** Antepone la subcarpeta del sitio (GitHub Pages lo sirve en /novostudio). */
export const ruta = (p: string) => `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${p}`;
