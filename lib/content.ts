export const whatsapp = (texto = "Hola, quiero pedir un presupuesto.") =>
  `https://wa.me/584248030669?text=${encodeURIComponent(texto)}`;

export const correo = "novostudioccs@gmail.com";
export const instagram = { usuario: "@el_novostudio", url: "https://www.instagram.com/el_novostudio/" };

export const enlaces = [
  { href: "#servicios", texto: "Servicios" },
  { href: "#proceso", texto: "Proceso" },
  { href: "#proyectos", texto: "Proyectos" },
  { href: "#modalidades", texto: "Modalidades" },
  { href: "#preguntas", texto: "Preguntas" },
];

export const cifras = [
  { valor: "+100", texto: "proyectos de diseño de interiores exitosos", detalle: "En espacios residenciales y corporativos.", foto: "cifra-1", alt: "Render de comedor redondo con muro de ladrillo", accion: "Ver proyectos", href: "#proyectos" },
  { valor: "+5", texto: "años de experiencia en el mercado", detalle: "Diseñando y ejecutando obra en Venezuela.", foto: "cifra-2", alt: "Render de casa de ladrillo con terraza y jardín", accion: "Conocer el proceso", href: "#proceso" },
];

/** Una imagen por paso del proceso, en el mismo orden que `pasos`. */
export const fotosProceso = [
  { foto: "paso-1", alt: "Render de sala con sofá en L y mueble de TV" },
  { foto: "paso-2", alt: "Render de sala de reuniones con mesa blanca" },
  { foto: "paso-3", alt: "Render de terraza con cocina exterior y comedor" },
  { foto: "paso-4", alt: "Render de terraza con comedor exterior terminado" },
];

export const servicios = [
  { titulo: "Diseño arquitectónico e interior", texto: "Distribución, materialidades y renders para decidir antes de invertir.", foto: "servicio-diseno", alt: "Render de comedor con lámpara de esferas y vista al jardín" },
  { titulo: "Gerencia y ejecución de obra", texto: "Dirección y ejecución de la obra hasta la entrega.", foto: "servicio-obra", alt: "Render de acceso principal con escalera iluminada y jardineras" },
  { titulo: "Acabados especiales", texto: "Microcemento, porcelanato, vinil y piedra sinterizada.", foto: "servicio-acabados", alt: "Render de muro con paneles y pieza de madera listonada" },
] as const;

export const pasos = [
  { titulo: "Cuéntanos tu espacio", texto: "Nos escribes por WhatsApp y envías planos, levantamientos o fotos. Si no tienes planos, hacemos el levantamiento." },
  { titulo: "Recibe tu presupuesto", texto: "Para un proyecto de diseño, en 2 a 4 horas. Para una obra, agendamos primero una visita técnica." },
  { titulo: "Diseñamos y ejecutamos", texto: "Renders y planimetría para aprobar cada decisión; después, la ejecución de la obra." },
  { titulo: "Recibe el espacio terminado", texto: "Entregamos la obra concluida, con los acabados suministrados e instalados." },
];

export const proyectos = [
  { nombre: "Proyecto La Romana", foto: "la-romana", alt: "Render de fachada de vivienda de tres niveles con jardineras", tipo: "Residencial", m2: "700 m²", alcance: "Fachadas e interiores", cita: "Gracias, ya recibí el correo. ¡Muy bello todo! 💕", cliente: "P. I." },
  { nombre: "Proyecto Gallery", foto: "gallery", alt: "Render de sala con mueble de TV y pufs verdes", tipo: "Residencial", m2: "500 m²", alcance: "Modernización de interiores", cita: "¡Me encantó el resultado!", cliente: "C. V." },
  { nombre: "Proyecto Oficina 602", foto: "oficina-602", alt: "Render de oficina con escritorio, butaca y panel de madera", tipo: "Corporativo", m2: "180 m²", alcance: "Interiores y arquitectura", cita: "Gracias, de verdad quedó increíble 🔥🔥", cliente: "R. C." },
  { nombre: "Proyecto Aura", foto: "aura-tv", alt: "Render de sala con televisor, mueble bajo y butaca clara", tipo: "Residencial", m2: "80 m²", alcance: "Remodelación de sala", cita: "¡Wao, un cambio total! 😍", cliente: "D. M." },
];

export const modalidades = [
  {
    id: "diseno",
    nombre: "Diseño",
    ideal: "Quieres definir el proyecto antes de construir.",
    cotiza: "Presupuesto en 2 a 4 horas.",
    accion: "Pedir presupuesto",
    mensaje: "Hola, quiero un presupuesto de diseño.",
  },
  {
    id: "obra",
    nombre: "Obra",
    ideal: "Ya tienes proyecto y necesitas quien lo ejecute.",
    cotiza: "Visita técnica y luego presupuesto.",
    accion: "Agendar visita",
    mensaje: "Hola, quiero agendar una visita para una obra.",
  },
  {
    id: "integral",
    nombre: "Diseño + Obra",
    ideal: "Quieres resolver todo con una sola firma.",
    cotiza: "Primero el diseño; la obra, tras la visita técnica.",
    accion: "Empezar mi proyecto",
    mensaje: "Hola, quiero diseño y obra con Növo Studio.",
    destacada: true,
  },
] as const;

/** Qué incluye cada modalidad, en el orden de `modalidades`. */
export const alcance: { servicio: string; incluye: [boolean, boolean, boolean] }[] = [
  { servicio: "Levantamiento fotográfico y planimétrico", incluye: [true, false, true] },
  { servicio: "Diseño arquitectónico e interior", incluye: [true, false, true] },
  { servicio: "Renders 3D y video recorrido", incluye: [true, false, true] },
  { servicio: "Planimetría técnica", incluye: [true, false, true] },
  { servicio: "Gerencia y ejecución de obra", incluye: [false, true, true] },
  { servicio: "Suministro e instalación de acabados", incluye: [false, true, true] },
  { servicio: "Un solo responsable de principio a fin", incluye: [false, false, true] },
];

export const preguntas = [
  {
    p: "¿Cuánto cuesta un proyecto?",
    r: "El presupuesto es gratis. Cada inmueble es distinto, por eso no publicamos tarifas: si es un proyecto de diseño, lo recibes en 2 a 4 horas; si es una obra, primero agendamos una visita.",
  },
  {
    p: "¿Cuánto tarda un proyecto?",
    r: "Los tiempos se adaptan a cada proyecto. Te indicamos el plazo estimado junto con el presupuesto, según el alcance y el tamaño del espacio.",
  },
  {
    p: "¿Qué necesito enviar para el presupuesto?",
    r: `Planos, levantamientos o fotos del espacio, al correo ${correo}. Si no tienes planos ni conoces el metraje, nosotros hacemos el levantamiento.`,
  },
  { p: "¿Hacen solo el diseño o también la obra?", r: "Ambas. Puedes contratar el diseño, la obra o las dos con el mismo equipo." },
  { p: "¿En qué ciudades trabajan?", r: "Atendemos proyectos en toda Venezuela. Si tu inmueble está en otro país, escríbenos y evaluamos el caso." },
  { p: "¿Trabajan proyectos corporativos?", r: "Sí. Diseñamos y ejecutamos espacios residenciales y corporativos." },
  { p: "¿Cuál es el horario de atención?", r: "Lunes a viernes, de 8:00 a. m. a 5:00 p. m." },
];
