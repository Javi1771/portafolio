export const PROJECTS = [
  {
    id: "assembly",
    title: "Assembly Management (Software Para La Empresa SIAUMEX)",
    year: 2025,
    stack: ["Next.js", "Tailwind CSS", "Node.js API Routes", "MS SQL Server", "Importación de Excel", "JWT", "Despliegue en SmarterASP.NET", "Dark Mode", "Cifrado de Contraseñas con bcrypt"],
    category: "Freelance",
    repo: "https://github.com/Javi1771/productos_assembly", 
    site: "",            
    summary:
      "Sistema empresarial que elimina la fragmentación en el registro de productos ensamblados mediante una plataforma centralizada con validación inteligente, prevención de duplicados y gestión automatizada de módulos.\n\n" +
      "Reduce el ciclo de alta de productos en un 60% y los errores de captura en un 85% mediante sugerencias contextuales desde base de datos y persistencia de borradores.\n\n" +
      "El dashboard operativo proporciona visibilidad en tiempo real sobre cobertura modular, completitud de ensambles y rendimiento por cliente, optimizando la toma de decisiones tanto a nivel gerencial como operativo.",
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
      "Plataforma digital que transforma la captación y conversión de leads industriales mediante un hub centralizado de productos, especificaciones técnicas y canales de contacto directo.\n\n" +
      "Reduce el tiempo de respuesta a cotizaciones de 48 horas a minutos, elimina hasta un 70% de llamadas de consulta básica y aumenta la tasa de conversión mediante asesoría inmediata por WhatsApp.\n\n" +
      "La arquitectura optimizada mejora el posicionamiento SEO local y habilita métricas de conversión para decisiones de marketing basadas en datos.",
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
    stack: ["Next.js", "SQL Server", "Tailwind CSS", "Escaner Código de Barras", "Digitalización de Documentos", "SOAP Web Service", "Escaneo Facial", "Crear PDFs", "Firma Digital", "Registro en Tiempo Real", "Exportación a Excel", "Foto Digital", "Cifrado de Contraseñas con bcrypt", "Credencialización", "Node.js API Routes", "Despliegue en IIS"],
    repo: "https://github.com/Javi1771/Pandora-Pub",
    site: "",
    summary:
      "Sistema integral de salud que digitaliza end-to-end el flujo de atención médica municipal, desde el registro de beneficiarios hasta la generación de documentos oficiales.\n\n" +
      "Elimina el 95% del papeleo manual, reduce tiempos de espera promedio de 45 a 12 minutos y previene errores de duplicación mediante integración con el padrón de personal y sus beneficiarios.\n\n" +
      "La trazabilidad completa del expediente clínico digital optimiza la continuidad del cuidado, mientras que los dashboards operativos permiten asignación inteligente de recursos médicos y genera KPIs para transparencia y rendición de cuentas.",
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
      "Solución móvil de identidad digital que moderniza la interacción ciudadano-gobierno mediante registro digital y seguimiento en tiempo real de trámites.\n\n" +
      "Reduce visitas presenciales en un 65%, disminuye tiempos de respuesta de semanas a días y elimina duplicidades en el padrón ciudadano.\n\n" +
      "El sistema unificado de captura genera indicadores operativos que optimizan la asignación de recursos por departamento, mientras la visibilidad completa del estado de trámites aumenta la confianza ciudadana y disminuye quejas en un 40%.",
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
      "Sistema de captura territorial que revoluciona la recolección de incidencias mediante flujos guiados por voz con arquitectura offline-first.\n\n" +
      "Extiende la cobertura operativa a zonas sin conectividad, reduce el tiempo de registro de 15 a 3 minutos por reporte y elimina la pérdida de información al garantizar sincronización automática.\n\n" +
      "Se optimiza la asignación de brigadas y permitiendo planificación preventiva basada en patrones históricos de demanda ciudadana.",
    image: "/Banners/atencion_ciudadana.png",
    colors: {
      primary: "#43035d",
      secondary: "#8008b4",
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
      "Aplicación de gestión financiera personal que previene cargos por mora mediante alertas inteligentes y visibilidad consolidada del comportamiento crediticio.\n\n" +
      "Elimina el 100% de pagos tardíos a través de recordatorios contextuales con días de anticipación, centraliza la información dispersa de múltiples tarjetas y proporciona análisis de patrones de gasto mediante gráficas mensuales.\n\n" +
      "La autenticación con Google reduce la fricción de entrada, mientras los dashboards por tarjeta permiten identificar oportunidades de optimización de límites de crédito y estrategias de pago.",
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
      "Aplicación empresarial móvil que digitaliza la operación logística mediante integración nativa con el sistema NIMBUS corporativo.\n\n" +
      "Reduce consultas telefónicas en un 80%, elimina retrasos por información desactualizada y proporciona visibilidad en tiempo real del estado de depósitos, pedidos y rutas.\n\n" +
      "La disponibilidad cross-platform (Android/iOS) acelera la toma de decisiones en campo, optimiza tiempos de respuesta operativa y genera métricas de rendimiento logístico para mejora continua de procesos.",
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
      "Plataforma IoT que automatiza el control y monitoreo de dispositivos mediante arquitectura distribuida con ESP8266, eliminando la necesidad de infraestructura cableada tradicional.\n\n" +
      "Centraliza el control remoto de LEDs, servomotores y sensores ambientales con telemetría en tiempo real almacenada en Firebase, reduciendo tiempos de verificación manual y habilitando alertas proactivas ante anomalías térmicas.\n\n" +
      "El historial de eventos y gráficas de variables permiten análisis de patrones, mientras la arquitectura modular facilita escalabilidad horizontal para integración de sensores adicionales sin refactorización.",
    image: "/Banners/smart_led.png",
    colors: {
      primary: "#3b07fa",
      secondary: "#9618ff"
    },
    type: "Mobile Application"
  },
];