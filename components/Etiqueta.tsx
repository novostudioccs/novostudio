export function Etiqueta({ children }: { children: string }) {
  return <p className="label inline-flex rounded-full border border-current px-3.5 py-1.5">{children}</p>;
}
