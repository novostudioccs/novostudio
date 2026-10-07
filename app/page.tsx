import { MotionConfig } from "framer-motion";
import { Contacto } from "@/components/Contacto";
import { Faq } from "@/components/Faq";
import { Hero } from "@/components/Hero";
import { Modalidades } from "@/components/Modalidades";
import { Nav } from "@/components/Nav";
import { Nosotros } from "@/components/Nosotros";
import { Proceso } from "@/components/Proceso";
import { Proyectos } from "@/components/Proyectos";
import { Servicios } from "@/components/Servicios";

export default function Page() {
  return (
    <MotionConfig reducedMotion="user">
      <Nav />
      <main id="contenido">
        <Hero />
        <Nosotros />
        <Servicios />
        <Proceso />
        <Proyectos />
        <Modalidades />
        <Faq />
      </main>
      <Contacto />
    </MotionConfig>
  );
}
