import type { Metadata } from "next";
import localFont from "next/font/local";
import { ruta } from "@/lib/ruta";
import "./globals.css";

const display = localFont({
  src: "./fonts/Montserrat.woff2",
  variable: "--font-display",
  weight: "100 900",
  display: "swap",
});
const body = localFont({
  src: "./fonts/Satoshi.woff2",
  variable: "--font-body",
  weight: "300 900",
  display: "swap",
});

const sitio = process.env.NEXT_PUBLIC_SITE_URL;

export const metadata: Metadata = {
  ...(sitio ? { metadataBase: new URL(sitio) } : {}),
  alternates: { canonical: ruta("/") },
  openGraph: {
    url: ruta("/"),
    title: "Növo Studio | Revalorizamos tus inmuebles",
    description: "Revalorizamos tus inmuebles: diseño de interiores, arquitectura y ejecución de obra bajo una sola firma.",
    siteName: "Növo Studio",
    locale: "es_VE",
    type: "website",
    images: [{ url: ruta("/proyectos/compartir.jpg"), width: 1200, height: 630, alt: "Proyecto La Romana, Növo Studio" }],
  },
  title: "Növo Studio | Revalorizamos tus inmuebles",
  description:
    "Revalorizamos tus inmuebles: diseño de interiores, arquitectura y ejecución de obra en Venezuela. Presupuesto de diseño en 2 a 4 horas.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${display.variable} ${body.variable}`}>
      <body>
        <a href="#contenido" className="skip">
          Saltar al contenido
        </a>
        {children}
      </body>
    </html>
  );
}
