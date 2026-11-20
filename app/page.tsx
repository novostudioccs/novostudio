import { MotionConfig } from "framer-motion";
import { Contacto } from "@/components/Contacto";
import { Faq } from "@/components/Faq";
import { Hero } from "@/components/Hero";
import { Inicio } from "@/components/Inicio";
import { Modalidades } from "@/components/Modalidades";
import { Nav } from "@/components/Nav";
import { Nosotros } from "@/components/Nosotros";
import { Obra } from "@/components/Obra";
import { Proceso } from "@/components/Proceso";
import { Proyectos } from "@/components/Proyectos";
import { Revalorizacion } from "@/components/Revalorizacion";
import { Servicios } from "@/components/Servicios";

export default function Page() {
  return (
    <MotionConfig reducedMotion="user">
      <Inicio />
      <Nav />
      <main id="contenido">
        <Hero />
        <Nosotros />
        <Revalorizacion />
        <Servicios />
        <Proceso />
        <Obra />
        <Proyectos />
        <Modalidades />
        <Faq />
      </main>
      <Contacto />
    </MotionConfig>
  );
}
