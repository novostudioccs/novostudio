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
  galeria: { src: string; alt: string; vertical?: boolean }[];
  cita: string;
  cliente: string;
};

/** Cada imagen de la galería indica su archivo en /proyectos (sin el ancho ni la extensión). */
export const proyectos: Proyecto[] = [
  {
    id: "romana",
    nombre: "Proyecto La Romana",
    foto: "la-romana",
    alt: "Render de fachada de vivienda de tres niveles con jardineras",
    resumen: "Una casa pensada para vivirse hacia adentro y hacia afuera.",
    descripcion: [
      "Diseño integral de una vivienda familiar, de la fachada a los interiores, concebido como un solo proyecto para que toda la casa hable el mismo lenguaje.",
      "Las áreas sociales se abren a la terraza y la piscina, convirtiendo el exterior en el lugar natural para recibir y compartir. El resultado es una casa con presencia propia, cómoda en el día a día y pensada para ganar valor con el tiempo.",
    ],
    ficha: [
      ["Tipo", "Residencial"],
      ["Área", "700 m²"],
      ["Ubicación", "Los Naranjos, Caracas"],
      ["Alcance", "Fachadas e interiores"],
      ["Espacios", "Fachada y acceso, terraza con parrillera, piscina, sala, comedor y habitación infantil"],
      ["Materialidad", "Revestimiento texturizado, celosías verticales, madera en plafones"],
    ],
    galeria: [
      { src: "g-romana-1", alt: "Fachada principal con jardineras y portones" },
      { src: "g-romana-2", alt: "Fachada vista en ángulo, con el estacionamiento techado" },
      { src: "g-romana-15", alt: "Fachada lateral con jardineras y vista a la piscina" },
      { src: "g-romana-3", alt: "Acceso principal con escalera iluminada" },
      { src: "g-romana-4", alt: "Fachada interior y piscina" },
      { src: "g-romana-5", alt: "Terraza techada con comedor exterior" },
      { src: "g-romana-16", alt: "Parrillera y comedor exterior bajo la terraza" },
      { src: "g-romana-6", alt: "Área de descanso junto a la piscina" },
      { src: "g-romana-7", alt: "Sala con sofá en L y mueble de TV" },
      { src: "g-romana-8", alt: "Comedor con lámpara de esferas y vista al jardín" },
      { src: "g-romana-9", alt: "Habitación infantil con cabecero de madera y vista a la ciudad" },
      { src: "g-romana-13", alt: "Habitación infantil: escritorio flotante junto a la cama", vertical: true },
    ],
    cita: "Gracias, ya recibí el correo. ¡Muy bello todo! 💕",
    cliente: "P. I.",
  },
  {
    id: "gallery",
    nombre: "Proyecto Gallery",
    foto: "gallery",
    alt: "Render de sala con mueble de TV y pufs verdes",
    resumen: "Un apartamento existente, renovado para vivirlo de otra manera.",
    descripcion: [
      "Modernización de los interiores de un apartamento con años de uso, llevándolo a un lenguaje contemporáneo sin perder su amplitud.",
      "Las áreas sociales se integraron para generar espacios de encuentro familiar, y cada ambiente se resolvió con orden y calidez. El inmueble se siente nuevo, se disfruta más y se posiciona mejor en su mercado.",
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
      { src: "g-gallery-1", alt: "Sala principal con biblioteca iluminada" },
      { src: "g-gallery-3", alt: "Comedor y sala integrados, con vista al jardín" },
      { src: "g-gallery-2", alt: "Comedor para diez puestos con lámpara de aros" },
      { src: "g-gallery-4", alt: "Recibidor con lámparas de cobre" },
      { src: "g-gallery-9", alt: "Recibidor con mesa redonda y espejos" },
      { src: "g-gallery-10", alt: "Repisas iluminadas con consola de piedra" },
      { src: "g-gallery-5", alt: "Family room con mueble de TV" },
      { src: "g-gallery-6", alt: "Family room visto desde el sofá" },
      { src: "g-gallery-7", alt: "Estudio con escritorio y repisas" },
      { src: "g-gallery-8", alt: "Terraza con barra y comedor exterior" },
      { src: "g-gallery-11", alt: "Terraza con comedor redondo" },
      { src: "g-gallery-12", alt: "Jardín y terraza vistos desde afuera" },
    ],
    cita: "¡Me encantó el resultado!",
    cliente: "C. V.",
  },
  {
    id: "o602",
    nombre: "Proyecto Oficina 602",
    foto: "oficina-602",
    alt: "Render de oficina con escritorio, butaca y panel de madera",
    resumen: "Una oficina que transmite confianza desde la entrada.",
    descripcion: [
      "Diseño de interiores y arquitectura de una oficina corporativa, pensada para que quien llega perciba orden, solidez y cuidado por el detalle.",
      "La distribución acompaña el recorrido de clientes y equipo, con ambientes luminosos y la calidez de un espacio residencial. Un lugar donde da gusto trabajar y recibir, y que respalda la imagen de la empresa.",
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
      { src: "g-o602-1", alt: "Recepción con panel de madera y lámpara de esferas" },
      { src: "g-o602-12", alt: "Recepción vista desde la sala de espera" },
      { src: "g-o602-2", alt: "Sala de espera con espejo orgánico" },
      { src: "g-o602-7", alt: "Vestíbulo con cuadro y puf" },
      { src: "g-o602-9", alt: "Vestíbulo con paneles y acceso al pasillo" },
      { src: "g-o602-3", alt: "Pasillo con divisiones de vidrio" },
      { src: "g-o602-10", alt: "Pasillo hacia el ventanal" },
      { src: "g-o602-8", alt: "Oficinas vistas a través del vidrio" },
      { src: "g-o602-11", alt: "Oficinas acristaladas vistas en ángulo" },
      { src: "g-o602-5", alt: "Oficina privada con escritorio y sofá" },
      { src: "g-o602-6", alt: "Oficina con área de estar" },
      { src: "g-o602-4", alt: "Sala de reuniones con vista a la ciudad" },
    ],
    cita: "Gracias, de verdad quedó increíble 🔥🔥",
    cliente: "R. C.",
  },
  {
    id: "aura",
    nombre: "Proyecto Aura",
    foto: "aura-portada",
    alt: "Render de sala de doble altura con pared de TV, mueble bajo y pufs",
    resumen: "Espacios sociales renovados para disfrutar en familia.",
    descripcion: [
      "Modernización de los interiores de un apartamento, con foco en los espacios donde la familia se reúne: la sala, la cocina y el salón de juegos.",
      "Cada ambiente se transformó en un punto de encuentro contemporáneo, cómodo para el día a día y listo para recibir. Una vivienda actualizada que se vive más y vale más.",
    ],
    ficha: [
      ["Tipo", "Residencial"],
      ["Área", "750 m²"],
      ["Ubicación", "Valle Arriba, Caracas"],
      ["Alcance", "Modernización de interiores"],
      ["Espacios", "Sala de doble altura, cocina y salón de juegos con bar y cava"],
      ["Materialidad", "Revestimiento texturizado, carpintería a medida, piso de madera, iluminación indirecta"],
    ],
    galeria: [
      { src: "g-aura-1", alt: "Vista general de la sala con la pared del televisor", vertical: true },
      { src: "g-aura-2", alt: "Pared del televisor con mueble bajo y butaca", vertical: true },
      { src: "g-aura-3", alt: "Sala con sofá, butaca y vista a la ciudad", vertical: true },
      { src: "g-aura-5", alt: "Cocina con mesa auxiliar y gabinetes de madera" },
      { src: "g-aura-6", alt: "Cocina con columna de hornos y nevera panelada" },
      { src: "g-aura-7", alt: "Cocina en L con ventana corrida" },
      { src: "g-aura-8", alt: "Mesón de cocina con gabinetes superiores iluminados" },
      { src: "g-aura-11", alt: "Salón de juegos con mesa de billar y ventanal" },
      { src: "g-aura-12", alt: "Salón de juegos: cava de vinos y área de TV" },
      { src: "g-aura-14", alt: "Barra del bar con repisas iluminadas" },
      { src: "g-aura-16", alt: "Barra del bar vista desde arriba, con la nevera de bebidas" },
      { src: "g-aura-15", alt: "Área de TV del salón de juegos" },
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
