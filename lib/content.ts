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

export type Proyecto = {
  id: string;
  nombre: string;
  foto: string;
  alt: string;
  resumen: string;
  descripcion: string[];
  ficha: [string, string][];
  galeria: { alt: string; vertical?: boolean }[];
  cita: string;
  cliente: string;
};

/** Las imágenes de la galería son /proyectos/g-<id>-<n>.webp, en el orden de `galeria`. */
export const proyectos: Proyecto[] = [
  {
    id: "romana",
    nombre: "Proyecto La Romana",
    foto: "la-romana",
    alt: "Render de fachada de vivienda de tres niveles con jardineras",
    resumen: "Vivienda de tres niveles, por fuera y por dentro.",
    descripcion: [
      "Una vivienda de tres niveles resuelta como un solo proyecto: la fachada, los exteriores y los espacios interiores se diseñaron con el mismo lenguaje.",
      "Hacia la calle, volúmenes horizontales con jardineras y celosías verticales dan privacidad sin cerrar la casa. Hacia adentro, el área social se abre a la terraza, la parrillera y la piscina, de modo que la sala y el comedor se prolongan al exterior.",
    ],
    ficha: [
      ["Tipo", "Residencial"],
      ["Área", "700 m²"],
      ["Ubicación", "Los Naranjos, Caracas"],
      ["Alcance", "Fachadas e interiores"],
      ["Espacios", "Fachada y acceso, terraza con parrillera, piscina, sala y comedor"],
      ["Materialidad", "Revestimiento texturizado, celosías verticales, madera en plafones"],
    ],
    galeria: [
      { alt: "Fachada principal con jardineras y portones" },
      { alt: "Fachada vista en ángulo, con el estacionamiento techado" },
      { alt: "Acceso principal con escalera iluminada" },
      { alt: "Fachada interior y piscina" },
      { alt: "Terraza techada con comedor exterior" },
      { alt: "Área de descanso junto a la piscina" },
      { alt: "Sala con sofá en L y mueble de TV" },
      { alt: "Comedor con lámpara de esferas y vista al jardín" },
    ],
    cita: "Gracias, ya recibí el correo. ¡Muy bello todo! 💕",
    cliente: "P. I.",
  },
  {
    id: "gallery",
    nombre: "Proyecto Gallery",
    foto: "gallery",
    alt: "Render de sala con mueble de TV y pufs verdes",
    resumen: "Un apartamento existente, puesto al día.",
    descripcion: [
      "Modernización completa de los interiores de un apartamento existente. El reto era actualizar la vivienda sin perder su amplitud.",
      "Se integraron la sala y el comedor en un solo espacio social, se ordenaron los almacenajes en muebles a toda altura y se trabajó una paleta clara con acentos en madera, piedra y cobre. El recibidor, el family room y el estudio siguen la misma línea.",
    ],
    ficha: [
      ["Tipo", "Residencial"],
      ["Área", "500 m²"],
      ["Ubicación", "Las Mercedes, Caracas"],
      ["Alcance", "Modernización de interiores"],
      ["Espacios", "Sala, comedor, recibidor, family room, estudio y terraza"],
      ["Materialidad", "Madera en plafones, piedra natural, carpintería a medida"],
    ],
    galeria: [
      { alt: "Sala principal con biblioteca iluminada" },
      { alt: "Comedor para diez puestos con lámpara de aros" },
      { alt: "Comedor y sala integrados, con vista al jardín" },
      { alt: "Recibidor con lámparas de cobre" },
      { alt: "Family room con mueble de TV" },
      { alt: "Family room visto desde el sofá" },
      { alt: "Estudio con escritorio y repisas" },
      { alt: "Terraza con barra y comedor exterior" },
    ],
    cita: "¡Me encantó el resultado!",
    cliente: "C. V.",
  },
  {
    id: "o602",
    nombre: "Proyecto Oficina 602",
    foto: "oficina-602",
    alt: "Render de oficina con escritorio, butaca y panel de madera",
    resumen: "Una oficina que recibe como una sala.",
    descripcion: [
      "Diseño de interiores y arquitectura de una oficina corporativa. La distribución ordena el recorrido desde la recepción hasta las oficinas privadas y la sala de reuniones.",
      "Las divisiones de vidrio mantienen la luz natural en toda la planta, y los paneles de madera, la iluminación indirecta y el mobiliario de líneas curvas le dan a la oficina la calidez de un espacio residencial.",
    ],
    ficha: [
      ["Tipo", "Corporativo"],
      ["Área", "180 m²"],
      ["Ubicación", "Las Mercedes, Caracas"],
      ["Alcance", "Interiores y arquitectura"],
      ["Espacios", "Recepción, sala de espera, sala de reuniones y oficinas privadas"],
      ["Materialidad", "Paneles de madera, divisiones de vidrio, iluminación indirecta"],
    ],
    galeria: [
      { alt: "Recepción con panel de madera y lámpara de esferas" },
      { alt: "Sala de espera con espejo orgánico" },
      { alt: "Pasillo de acceso con divisiones de vidrio" },
      { alt: "Sala de reuniones con vista a la ciudad" },
      { alt: "Oficina privada con escritorio y sofá" },
      { alt: "Oficina con área de estar" },
      { alt: "Vestíbulo con cuadro y puf" },
      { alt: "Oficinas vistas a través del vidrio" },
    ],
    cita: "Gracias, de verdad quedó increíble 🔥🔥",
    cliente: "R. C.",
  },
  {
    id: "aura",
    nombre: "Proyecto Aura",
    foto: "aura-portada",
    alt: "Render de sala de doble altura con pared de TV, mueble bajo y pufs",
    resumen: "Una sala de doble altura, renovada.",
    descripcion: [
      "Remodelación de una sala de doble altura. La intervención aprovecha la altura del espacio con un plafón que baña de luz indirecta las paredes.",
      "La pared del televisor se revistió con textura y se resolvió con un mueble bajo a medida; el mobiliario oscuro contrasta con el piso y las superficies claras.",
    ],
    ficha: [
      ["Tipo", "Residencial"],
      ["Área", "80 m²"],
      ["Ubicación", "Valle Arriba, Caracas"],
      ["Alcance", "Remodelación de sala"],
      ["Espacios", "Sala de doble altura y área de TV"],
      ["Materialidad", "Revestimiento texturizado, mueble a medida, iluminación indirecta"],
    ],
    galeria: [
      { alt: "Vista general de la sala con la pared del televisor", vertical: true },
      { alt: "Pared del televisor con mueble bajo y butaca", vertical: true },
      { alt: "Sala con sofá, butaca y vista a la ciudad", vertical: true },
    ],
    cita: "¡Wao, un cambio total! 😍",
    cliente: "D. M.",
  },
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
