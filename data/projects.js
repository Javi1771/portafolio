export const PROJECTS = [
  {
    id: "assembly",
    title: "Assembly Management (Software Para La Empresa SIAUMEX)",
    year: 2025,
    stack: ["Next.js", "Tailwind CSS", "Node.js API Routes", "MS SQL Server", "Importación de Excel", "JWT", "Despliegue en SmarterASP.NET", "Dark Mode"],
    category: "Freelance",
    repo: "https://github.com/Javi1771/productos_assembly", 
    site: "",            
    summary:
      "La plataforma Assembly Management agiliza y transparenta el alta y mantenimiento de productos ensamblados: centraliza el registro de Assembly (Item consecutivo automático) y la captura/edición de módulos Hose Cut, Sleeve/Guard, Crimp A, Collar A, Crimp B, Collar B y Packaging, actualizando la columna Adds según reglas por posición.\n" +
      "Reduce retrabajo y errores: valida campos (numéricos, mayúsculas), sugiere ejemplos desde BD, persiste borradores locales y evita duplicados al editar. La navegación usa un token URL-safe del Item para no exponer IDs en la ruta y permite volver al flujo principal conservando contexto.\n" +
      "Incluye un Dashboard operativo con totales, promedio de módulos por assembly, porcentaje con al menos un módulo y completitud 7/7, cobertura por módulo, top clientes y recientes con búsqueda, filtros y paginación. Para administración y calidad brinda indicadores en tiempo real; para el equipo de piso, formularios minimalistas con encabezados degradados, validaciones claras y guardado rápido.",
    image: "/Banners/assembly.png",
    colors: {
      primary: "#4F46E5",   
      secondary: "#aa12ff"  
    },
    type: "Web Application"
  },
  {
    id: "motores-jordan",
    title: "Motores Jordan (Página Web Para La Empresa Motores Jordan)",
    year: 2025,
    category: "Freelance",
    stack: ["Next.js", "Tailwind CSS", "Envios de WhatsApp", "Envios de Email", "Despliegue en Vercel"],
    repo: "https://github.com/Javi1771/motoresjordan",
    site: "https://motoresjordanmx.com/",
    summary:
      "La landing de Motores Jordan impacta al captar y convertir mejor la demanda industrial: centraliza marcas y líneas de producto (motores, bombas y reductores), ubicación de sucursales y contacto directo por WhatsApp, todo en una experiencia rápida, responsiva y clara.\n"+
      "Esto reduce tiempos de cotización, disminuye llamadas y correos de ida y vuelta, y mejora la certeza del cliente al ofrecer especificaciones y opciones a un clic, con asesoría inmediata desde el canal que ya utiliza WhatsApp.\n"+
      "Para la empresa, unifica la captación de prospectos, habilita métricas (Analytics/Ads) y fortalece el SEO local. Para las y los clientes, entrega una experiencia simple, accesible y confiable: encuentran la sucursal más cercana y solicitan asesoría técnica en segundos sin fricción.",
    image: "/Banners/motores_jordan.png",
    colors: {
      primary: "#b5181f",
      secondary: "#350609",
    },
    type: "Website"
  },
  {
    id: "pandora",
    title: "Pandora – Servicio Médico Municipal",
    year: 2025,
    category: "Municipio",
    stack: ["Next.js", "SQL Server", "Tailwind CSS", "Escaner Código de Barras", "Digitalización de Documentos", "SOAP Web Service", "Escaneo Facial", "Crear PDFs", "Firma Digital", "Registro en Tiempo Real", "Exportación a Excel", "Foto Digital", "Credencialización", "Node.js API Routes", "Despliegue en IIS"],
    repo: "https://github.com/Javi1771/Pandora-Pub",
    site: "",
    summary:
      "La plataforma Pandora – Servicio Médico Municipal impacta al agilizar y transparentar la atención de salud del Ayuntamiento: unifica en una sola web el padrón de beneficiarios, expediente clínico, consultas, recetas, órdenes de laboratorio, incapacidades, resurtimientos y credencialización con captura de foto y firma. Todo queda trazable y disponible para el equipo médico, capturistas y Recursos Humanos.\n"+
      "Esto reduce tiempos de espera y filas, elimina papelería duplicada y oficios manuales, y ofrece visibilidad en tiempo real del estado de atenciones, estudios y medicamentos. Pandora mantiene diagnósticos y notas más precisas, generando además comprobantes y documentos en PDF cuando se requieren.\n"+
      "Para la administración, Pandora centraliza datos, evita errores de captura (con integración al padrón de personal), y produce indicadores operativos para optimizar recursos y rendir cuentas. Para las y los usuarios, brinda una experiencia simple, accesible y confiable, con información clara de su atención y documentos digitalizados, fortaleciendo la calidad del servicio médico municipal.",
    image:
      "/Banners/pandora.png",
    colors: {
      primary: "#1c4ce1",
      secondary: "#3fcfb5",
    },
    type: "Web Application"
  },
  {
    id: "cus-movil",
    title: "CUS Móvil – Clave Única Sanjuanense",
    year: 2025,
    category: "Municipio",
    stack: ["Flutter", "API Next.js", "API PHP", "Cloudinary", "Geolocalización", "Google Maps", "Google Climate"],
    repo: "https://github.com/Javi1771/Cus-Movil-Pub",
    site: "",
    summary:
      "La aplicación móvil CUS Móvil impacta al agilizar y transparentar la relación ciudadanía–Gobierno: habilita el registro digital de usuarios (trabajadores del Ayuntamiento, ciudadanos y empresas) y el seguimiento en tiempo real de sus trámites.\n" + 
      "\n Esto reduce tiempos de atención, disminuye filas, llamadas y visitas presenciales, y mejora la certidumbre al dar visibilidad clara del avance y requisitos pendientes.\n" +
      "\n Para la administración, unifica la captura de datos, evita duplicidades, y genera indicadores operativos para optimizar procesos y rendir cuentas; para las y los usuarios, ofrece una experiencia simple, accesible y trazable, fortaleciendo la confianza en los servicios municipales.",
    image: "/Banners/cus_movil.png",
    colors: {
      primary: "#045ea0",
      secondary: "#39b0f7",
    },
    type: "Mobile Application"
  },
  {
    id: "atencion-ciudadana",
    title: "Atención Ciudadana – Intake por Voz",
    year: 2025,
    category: "Municipio",
    stack: ["Flutter", "TTS/STT", "Voice Forms", "API PHP", "SQLite", "offline‑first"],
    repo: "https://github.com/Javi1771/atencion-ciudadana-pub",
    site: "",
    summary:
      "Con esta app los trabajadores comunitarios del municipio pueden tomar incidencias y solicitudes directamente en colonias mediante un flujo guiado por voz, offline-first con sincronización posterior: registra la persona afectada, descripción y secretaría responsable, generando evidencia trazable y priorizable. \n"+
      "Con ello se acortan tiempos de respuesta, se reduce el papeleo y las visitas a ventanilla, se amplía la cobertura en zonas con conectividad limitada y se habilitan indicadores por colonia, tipo de incidencia y tiempos de resolución, fortaleciendo la planeación operativa, la transparencia y la rendición de cuentas.",
    image: "/Banners/atencion_ciudadana.png",
    colors: {
      primary: "#680691",
      secondary: "#43035d",
    },
    type: "Mobile Application"
  },
  {
    id: "finmaster",
    title: "FinMaster – Gestión de Tarjetas de Crédito",
    year: 2024,
    category: "Personal",
    stack: ["Flutter", "Firebase", "Push Notifications", "Google Sign-In", "Google Sign-Up", "Gráficas"],
    repo: "https://github.com/Javi1771/finmaster",
    site: "",
    summary:
      "La aplicación FinMaster impacta al ordenar y anticipar tus finanzas personales: centraliza las fechas de corte y de pago de cada tarjeta, envía recordatorios inteligentes con días de anticipación y permite iniciar sesión con Google para un acceso rápido y seguro. Además, registra tu gasto mensual por tarjeta para dar visibilidad en tiempo real de próximos compromisos y hábitos de consumo.\n"+
      "Esto reduce comisiones por pago tardío, elimina hojas de cálculo y notas dispersas, y mejora la certidumbre financiera al mostrar cuánto, cuándo y en qué gastaste, con alertas oportunas para no olvidar pagos y mantener tus finanzas bajo control.\n"+
      "Para las y los usuarios, unifica la información, evita duplicidades y genera indicadores y gráficas por tarjeta y por mes; ofrece una experiencia simple, accesible y trazable para planear mejor, tomar decisiones informadas y pagar a tiempo sin estrés.",
    image: "/Banners/finmaster.png",
    colors: {
      primary: "#191e2a",
      secondary: "#d1d1d1"
    },
    type: "Mobile Application"
  },
  {
    id: "nimbus",
    title: "Nimbus - Gestión de Viajes (App Para La Empresa SINE)",
    year: 2023,
    stack: ["Flutter", "API", "SOAP", "Geolocalización", "Google Maps", "Google Places", "Push Notifications", "Despliegue en Play Store"],
    category: "Empresarial Estadias",
    repo: "https://github.com/JavierUTSJR/sine_nimbus",
    site: "",
    summary:
      "La aplicación Nimbus Móvil impacta al agilizar y transparentar la operación logística de la empresa: conecta con el API de NIMBUS para habilitar el acceso en tiempo real a información clave de depósitos y logística desde Android y iOS.\n"+
      "Esto reduce tiempos de consulta, disminuye llamadas, correos y visitas presenciales, y mejora la certidumbre operativa al dar visibilidad clara del estado de movimientos, pedidos y tareas, directamente en el dispositivo móvil.\n"+
      "Para la organización, unifica la consulta de datos, evita duplicidades y genera indicadores operativos para optimizar rutas, inventarios y recursos; para las y los usuarios, ofrece una experiencia simple, accesible y trazable, fortaleciendo la toma de decisiones y la eficiencia del día a día.",
    image: "/Banners/nimbus.png",
    colors: {
      primary: "#b0b0b0",
      secondary: "#3404ef"
    },
    type: "Mobile Application"
  },
  {
    id: "smart-led",
    title: "Smart LED – Control y Monitoreo IoT",
    year: 2023,
    category: "Personal",
    stack: ["Flutter", "Arduino IDE", "Firebase", "WS2812B", "DHT11", "Push Notifications", "IoT", "Wi-Fi", "Bluetooth", "ESP8266"],
    repo: "https://github.com/JavierUTSJR/smart_led",
    site: "",
    summary:
      "La solución Smart LED impacta al digitalizar y automatizar el control y monitoreo IoT: con ESP8266 permite encender/apagar LEDs (incluida tira WS2812B), mover servomotores y leer temperatura/humedad (DHT11) vía Wi-Fi, registrando estado y hora en Firebase para visualizar todo en tiempo real. Además, envía notificaciones cuando hay cambios (por ejemplo, al encender/apagar o superar umbrales de temperatura).\n"+
      "Esto reduce desplazamientos y pruebas manuales, evita cableado/interruptores redundantes y mejora la certidumbre con historial y gráficas de variables ambientales, junto con alertas oportunas para reaccionar a tiempo.\n"+
      "Para quien administra, centraliza configuración y telemetría, evita duplicidades y habilita métricas para decidir mejor; para las y los usuarios, ofrece una experiencia simple, accesible y trazable, con control seguro desde el móvil  y una arquitectura modular lista para escalar a más sensores y actuadores.",
    image: "/Banners/smart_led.png",
    colors: {
      primary: "#3b07fa",
      secondary: "#9618ff"
    },
    type: "Mobile Application"
  },
];
