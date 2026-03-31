// app/about/page.js

"use client";

import Section from "@/components/Section";
import SkillCard from "@/components/SkillCard";
import HobbyCard from "@/components/HobbyCard";
import { useMemo, useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  UsersRound, GraduationCap, Paintbrush, MessagesSquare, Puzzle, Kanban,
  RefreshCw, ZoomIn, Hourglass, HeartHandshake, BrainCircuit, Award,
  Gamepad2, Box, MonitorPlay, Shirt, SprayCan, ChefHat,
  Headphones, CircuitBoard, Cpu, Clapperboard, PenLine, Bubbles,
  Rocket, MousePointerClick, TrendingUp,
} from "lucide-react";

export default function AboutPage() {
  //! Detectar si es móvil
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  //* Memoizar las habilidades interpersonales para evitar recrearlas en cada render
  const interpersonalSkills = useMemo(
    () => [
      {
        title: "Liderazgo & Colaboración",
        desc: "Experiencia liderando equipos de desarrollo y gestionando practicantes. He trabajado colaborativamente en proyectos municipales coordinando equipos de hasta 3 personas.",
        icon: UsersRound,
        gradient: "from-violet-500 to-purple-600",
        bubbleColor1: "#8b5cf6",
        bubbleColor2: "#a78bfa",
      },
      {
        title: "Aprendizaje Continuo",
        desc: "Constantemente integrando nuevas tecnologías a mi stack. Me mantengo actualizado con las últimas tendencias en desarrollo web y móvil.",
        icon: GraduationCap,
        gradient: "from-rose-500 to-orange-600",
        bubbleColor1: "#f43f5e",
        bubbleColor2: "#fb7185",
      },
      {
        title: "Creatividad & Diseño",
        desc: "Enfoque creativo en el diseño de sistemas, siempre buscando inspiración y mejorando la experiencia visual de cada interfaz que desarrollo.",
        icon: Paintbrush,
        gradient: "from-blue-500 to-cyan-600",
        bubbleColor1: "#3b82f6",
        bubbleColor2: "#60a5fa",
      },
      {
        title: "Comunicación Transparente",
        desc: "Honesto con tiempos de entrega y proactivo al comunicar desafíos durante el desarrollo. Creo en mantener expectativas realistas.",
        icon: MessagesSquare,
        gradient: "from-gray-400 to-gray-600",
        bubbleColor1: "#4b5563",
        bubbleColor2: "#6b7280",
        iconDarkClass: "dark:brightness-200",
      },
      {
        title: "Resolución de Problemas",
        desc: "Capacidad para identificar obstáculos técnicos y encontrar soluciones efectivas, adaptándome a los requerimientos de cada proyecto.",
        icon: Puzzle,
        gradient: "from-amber-500 to-yellow-600",
        bubbleColor1: "#f59e0b",
        bubbleColor2: "#fbbf24",
      },
      {
        title: "Gestión de Proyectos",
        desc: "Experiencia planificando, ejecutando y entregando proyectos completos, desde la conceptualización hasta el despliegue en producción.",
        icon: Kanban,
        gradient: "from-emerald-500 to-teal-600",
        bubbleColor1: "#10b981",
        bubbleColor2: "#34d399",
      },
      {
        title: "Adaptabilidad",
        desc: "Capaz de ajustarme rápidamente a nuevas tecnologías, equipos y metodologías de trabajo, manteniendo la productividad en entornos cambiantes.",
        icon: RefreshCw,
        gradient: "from-cyan-500 to-blue-600",
        bubbleColor1: "#06b6d4",
        bubbleColor2: "#22d3ee",
      },
      {
        title: "Atención al Detalle",
        desc: "Meticuloso en la revisión de código y diseño, asegurando que cada aspecto del proyecto cumpla con los estándares de calidad más altos.",
        icon: ZoomIn,
        gradient: "from-pink-500 to-purple-600",
        bubbleColor1: "#ec4899",
        bubbleColor2: "#f472b6",
      },
      {
        title: "Gestión del Tiempo",
        desc: "Organizado y eficiente, capaz de manejar múltiples tareas y cumplir con los plazos establecidos sin comprometer la calidad del trabajo.",
        icon: Hourglass,
        gradient: "from-purple-500 to-pink-600",
        bubbleColor1: "#a855f7",
        bubbleColor2: "#c084fc",
      },
      {
        title: "Empatía",
        desc: "Capacidad para entender las necesidades y perspectivas de los usuarios y compañeros de equipo, fomentando un ambiente de trabajo colaborativo.",
        icon: HeartHandshake,
        gradient: "from-red-500 to-orange-600",
        bubbleColor1: "#e20b0b",
        bubbleColor2: "#d33434",
      },
      {
        title: "Pensamiento Crítico",
        desc: "Analizo problemas complejos y tomo decisiones informadas basadas en datos y evidencia, buscando siempre la mejor solución posible.",
        icon: BrainCircuit,
        gradient: "from-lime-500 to-emerald-600",
        bubbleColor1: "#3aca38",
        bubbleColor2: "#6ffa60",
      },
      {
        title: "Excelencia & Presencia",
        desc: "Soy una persona con altos estándares de calidad, que valora la excelencia. Me esfuerzo por destacar en lo que hago.",
        icon: Award,
        gradient: "from-indigo-500 to-blue-600",
        bubbleColor1: "#6366f1",
        bubbleColor2: "#818cf8",
      },
    ],
    [],
  );

  //* Memoizar los hobbies para evitar recrearlos en cada render
  const hobbies = useMemo(
    () => [
      {
        title: "Gaming",
        desc: "Jugador casual de Fortnite y Minecraft. Los videojuegos me enseñan estrategia, trabajo en equipo y resolución creativa de problemas.",
        icon: Gamepad2,
        gradient: "from-purple-500 to-pink-600",
        bubbleColor1: "#a855f7",
        bubbleColor2: "#c084fc",
      },
      {
        title: "Cubos Rubik",
        desc: "Coleccionista y solucionador de cubos Rubik. Me fascina la lógica espacial y los patrones matemáticos detrás de cada giro.",
        icon: Box,
        gradient: "from-rose-500 to-orange-600",
        bubbleColor1: "#f43f5e",
        bubbleColor2: "#fb7185",
      },
      {
        title: "Anime & Comics",
        desc: "Fan del anime y los comics. Aprecio las narrativas complejas y el arte visual que estas formas de entretenimiento ofrecen.",
        icon: MonitorPlay,
        gradient: "from-blue-500 to-cyan-600",
        bubbleColor1: "#3b82f6",
        bubbleColor2: "#60a5fa",
      },
      {
        title: "Estilo Personal",
        desc: "Me gusta vestir formal, aprecio la elegancia en el día a día. Creo que la presentación personal habla de profesionalismo.",
        icon: Shirt,
        gradient: "from-gray-400 to-gray-600",
        bubbleColor1: "#4b5563",
        bubbleColor2: "#6b7280",
        iconDarkClass: "dark:brightness-200",
      },
      {
        title: "Perfumería & Etiqueta",
        desc: "Interesado en perfumería y normas de etiqueta. Valoro los detalles y la forma en que nos presentamos ante el mundo.",
        icon: SprayCan,
        gradient: "from-amber-500 to-yellow-600",
        bubbleColor1: "#f59e0b",
        bubbleColor2: "#fbbf24",
      },
      {
        title: "Cocina",
        desc: "Disfruto cocinar ocasionalmente. La cocina es como programar: seguir recetas (algoritmos) y experimentar con nuevas combinaciones.",
        icon: ChefHat,
        gradient: "from-emerald-500 to-teal-600",
        bubbleColor1: "#10b981",
        bubbleColor2: "#34d399",
      },
      {
        title: "Tecnología & Gadgets",
        desc: "Apasionado por la tecnología y los gadgets. Me encanta explorar nuevos dispositivos y entender cómo pueden mejorar nuestra vida diaria.",
        icon: CircuitBoard,
        gradient: "from-cyan-500 to-blue-600",
        bubbleColor1: "#06b6d4",
        bubbleColor2: "#22d3ee",
      },
      {
        title: "Música",
        desc: "Amante de la música, me gusta disfrutar de bastantes generos y trato de expandir mi biblioteca constantemente. La música me inspira y me ayuda a concentrarme mientras trabajo.",
        icon: Headphones,
        gradient: "from-pink-500 to-purple-600",
        bubbleColor1: "#ec4899",
        bubbleColor2: "#f472b6",
      },
      {
        title: "Limpieza & Organización",
        desc: "Me gusta mantener mi espacio limpio y organizado. Un entorno ordenado me ayuda a pensar con claridad y ser más productivo.",
        icon: Bubbles,
        gradient: "from-purple-500 to-pink-600",
        bubbleColor1: "#a855f7",
        bubbleColor2: "#c084fc",
      },
      {
        title: "Electrónica & Solución",
        desc: "Me gusta reparar o intentar solucionar fallas en dispositivos electrónicos. Disfruto el desafío de entender cómo funcionan las cosas y encontrar soluciones prácticas con lógica y paciencia.",
        icon: Cpu,
        gradient: "from-red-500 to-orange-600",
        bubbleColor1: "#e20b0b",
        bubbleColor2: "#d33434",
      },
      {
        title: "Escritura Visual",
        desc: "Valoro una escritura clara y estética, tanto digital como en físico. Uso formatos, colores y estructuras visuales para transmitir ideas con claridad y hacer que los mensajes sean fáciles de entender y atractivos de leer.",
        icon: PenLine,
        gradient: "from-lime-500 to-emerald-600",
        bubbleColor1: "#3aca38",
        bubbleColor2: "#6ffa60",
      },
      {
        title: "Películas & Series",
        desc: "Disfruto ver películas y series en mi tiempo libre. Me gusta analizar las tramas, personajes y la dirección cinematográfica.",
        icon: Clapperboard,
        gradient: "from-indigo-500 to-blue-600",
        bubbleColor1: "#6366f1",
        bubbleColor2: "#818cf8",
      },
    ],
    [],
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50/50 to-cyan-50/30 dark:from-gray-900 dark:via-gray-800/50 dark:to-cyan-950/20 relative overflow-hidden">
      {/* OPTIMIZACIÓN: Orbes solo en desktop */}
      {!isMobile && (
        <>
          <div className="absolute top-20 left-10 w-80 h-80 bg-gradient-to-br from-cyan-200/20 to-blue-300/20 dark:from-cyan-500/10 dark:to-blue-600/10 rounded-full blur-3xl motion-reduce:animate-none"></div>
          <div className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-br from-violet-200/20 to-purple-300/20 dark:from-violet-500/10 dark:to-purple-600/10 rounded-full blur-3xl motion-reduce:animate-none"></div>
          <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-gradient-to-br from-emerald-200/20 to-green-300/20 dark:from-emerald-500/10 dark:to-green-600/10 rounded-full blur-3xl motion-reduce:animate-none"></div>
        </>
      )}

      {/* OPTIMIZACIÓN: Pattern overlay solo en desktop */}
      {!isMobile && (
        <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_2px_2px,theme(colors.cyan.500)_1px,transparent_1px)] dark:bg-[radial-gradient(circle_at_2px_2px,theme(colors.cyan.400)_1px,transparent_1px)] bg-[length:42px_42px]" />
        </div>
      )}

      <Section
        title={
          <div className="space-y-6 relative">
            {/* Botón CV */}
            <div className="absolute top-0 right-0 z-10">
              <a
                href="/JavierLopezCV.pdf"
                download
                className={`group flex items-center gap-2 px-4 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 ${!isMobile && "hover:scale-105"} ${!isMobile && "backdrop-blur-sm"} border border-white/20`}
              >
                <svg
                  className={`w-5 h-5 ${!isMobile && "group-hover:animate-bounce"}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                <span className="text-sm">Descargar CV</span>
              </a>
            </div>

            {/* Título principal */}
            <div className="relative inline-block">
              <h1 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-900 via-cyan-800 to-gray-900 dark:from-white dark:via-cyan-200 dark:to-white bg-clip-text text-transparent leading-tight">
                Sobre mí
              </h1>
              <div className="absolute bottom-0 left-0 h-1 w-full origin-left scale-x-0 bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-500 animate-scale-x"></div>

              {/* OPTIMIZACIÓN: Decoraciones solo en desktop */}
              {!isMobile && (
                <>
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full opacity-60"></div>
                  <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-gradient-to-br from-violet-400 to-purple-500 rounded-full opacity-40"></div>
                </>
              )}
            </div>

            {/* Subtítulo + datos rápidos */}
            <div className="space-y-4">
              <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl">
                Desarrollador Full-Stack y Mobile con pasión por crear
                soluciones digitales que transforman ideas en realidad
              </p>

              <div className="flex flex-wrap items-center gap-4 text-sm">
                <span className="px-3 py-1.5 rounded-full bg-white/70 dark:bg-gray-800/60 border border-gray-200/60 dark:border-gray-700/60 text-gray-700 dark:text-gray-300">
                  22 años
                </span>
                <span className="px-3 py-1.5 rounded-full bg-white/70 dark:bg-gray-800/60 border border-gray-200/60 dark:border-gray-700/60 text-gray-700 dark:text-gray-300">
                  San Juan del Río, Querétaro
                </span>
                <span className="px-3 py-1.5 rounded-full bg-white/70 dark:bg-gray-800/60 border border-gray-200/60 dark:border-gray-700/60 text-gray-700 dark:text-gray-300">
                  Ingeniero en Software
                </span>
              </div>
            </div>
          </div>
        }
        subtitle=""
        className="relative z-10"
      >
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Presentación principal */}
          <motion.div
            className="grid lg:grid-cols-2 gap-12 items-start"
            initial={!isMobile ? { opacity: 0, y: 40 } : false}
            whileInView={!isMobile ? { opacity: 1, y: 0 } : false}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Columna izquierda - Quien soy */}
            <div className="space-y-6">
              <div
                className={`p-8 bg-white/60 dark:bg-gray-800/30 ${!isMobile && "backdrop-blur-sm"} rounded-2xl border border-gray-200/50 dark:border-gray-700/50 shadow-lg`}
              >
                <div className="space-y-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-1 h-8 bg-gradient-to-b from-cyan-500 to-blue-600 rounded-full"></div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      ¿Quién soy?
                    </h3>
                  </div>

                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    Soy <strong>Javier López</strong>, un desarrollador de 22
                    años apasionado por la tecnología y la creación de
                    soluciones digitales que realmente impactan.
                  </p>

                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    Me gradué como{" "}
                    <strong>
                      Ingeniero en Desarrollo y Gestión de Software
                    </strong>{" "}
                    por la Universidad Tecnológica de San Juan del Río, donde
                    desarrollé una sólida base en programación, arquitectura de
                    software y gestión de proyectos.
                  </p>

                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    Mi stack principal incluye{" "}
                    <span className="font-semibold text-black dark:text-white">
                      Next.js
                    </span>{" "}
                    para desarrollo web,{" "}
                    <span className="font-semibold text-blue-600 dark:text-blue-400">
                      Flutter
                    </span>{" "}
                    y{" "}
                    <span className="font-semibold text-cyan-600 dark:text-cyan-400">
                      React Native
                    </span>{" "}
                    para aplicaciones móviles, bases de datos con{" "}
                    <span className="font-semibold text-violet-600 dark:text-violet-400">
                      SQL Server
                    </span>{" "}
                    y{" "}
                    <span className="font-semibold text-emerald-600 dark:text-emerald-400">
                      Firebase
                    </span>
                    , además de experiencia en{" "}
                    <span className="font-semibold text-orange-600 dark:text-orange-400">
                      IoT
                    </span>
                    .
                  </p>
                </div>
              </div>
            </div>

            {/* Columna derecha - Avatar/Código */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative group">
                <div
                  className={`w-80 h-80 bg-gradient-to-br from-cyan-100 to-blue-100 dark:from-cyan-900/30 dark:to-blue-900/30 rounded-2xl border border-cyan-200/50 dark:border-cyan-700/50 flex items-center justify-center shadow-xl ${!isMobile && "group-hover:shadow-2xl"} transition-all duration-700`}
                >
                  <div className="space-y-4 text-left">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="space-y-2 text-sm font-mono">
                      <div className="text-cyan-600 dark:text-cyan-400">
                        {"const developer = {"}
                      </div>
                      <div className="ml-4 text-gray-600 dark:text-gray-400">
                        {'name: "Javier López",'}
                      </div>
                      <div className="ml-4 text-gray-600 dark:text-gray-400">
                        {"age: 22,"}
                      </div>
                      <div className="ml-4 text-gray-600 dark:text-gray-400">
                        {'role: "Full-Stack Dev",'}
                      </div>
                      <div className="ml-4 text-gray-600 dark:text-gray-400">
                        {'location: "Qro, MX",'}
                      </div>
                      <div className="ml-4 text-gray-600 dark:text-gray-400">
                        {'passion: "Web & Mobile"'}
                      </div>
                      <div className="text-cyan-600 dark:text-cyan-400">
                        {"};"}
                      </div>
                    </div>
                  </div>
                </div>

                {/* OPTIMIZACIÓN: Decoraciones solo en desktop */}
                {!isMobile && (
                  <>
                    <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full opacity-70"></div>
                    <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-br from-violet-400 to-purple-500 rounded-full opacity-60"></div>
                  </>
                )}
              </div>
            </div>
          </motion.div>

          {/* Filosofía de trabajo */}
          <motion.div
            className="text-center py-16 bg-gradient-to-r from-cyan-900/10 via-transparent to-violet-900/10 rounded-2xl border border-cyan-700/20"
            initial={!isMobile ? { opacity: 0, y: 40 } : false}
            whileInView={!isMobile ? { opacity: 1, y: 0 } : false}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-8 max-w-4xl mx-auto">
              <div className="relative inline-block">
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  Mi filosofía de desarrollo
                </h3>
                {!isMobile && (
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full"></div>
                )}
              </div>

              <div className="grid md:grid-cols-3 gap-8 text-left">
                {[
                  {
                    title: "Rendimiento",
                    desc: "Código optimizado que escala y responde rápido, priorizando la eficiencia en cada línea",
                    icon: Rocket,
                    color: "from-yellow-500 to-orange-600",
                    iconColor: "#f59e0b",
                  },
                  {
                    title: "UX Intuitiva",
                    desc: "Interfaces que los usuarios entienden naturalmente, sin necesidad de explicaciones",
                    icon: MousePointerClick,
                    color: "from-violet-500 to-purple-600",
                    iconColor: "#8b5cf6",
                  },
                  {
                    title: "Métricas Claras",
                    desc: "Datos concretos que guían decisiones y demuestran resultados medibles",
                    icon: TrendingUp,
                    color: "from-cyan-500 to-blue-600",
                    iconColor: "#06b6d4",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className={`text-center p-6 bg-white/60 dark:bg-gray-800/30 ${!isMobile && "backdrop-blur-sm"} rounded-xl border border-gray-200/50 dark:border-gray-700/50 ${!isMobile && "hover:scale-105"} transition-all duration-300`}
                  >
                    <div className="mb-4 flex justify-center">
                      <div
                        className="w-14 h-14 flex items-center justify-center rounded-xl"
                        style={{
                          backgroundColor: `${item.iconColor}28`,
                          border: `1.5px solid ${item.iconColor}90`,
                          boxShadow: `0 0 10px ${item.iconColor}45, 0 0 3px ${item.iconColor}30`,
                        }}
                      >
                        <item.icon
                          size={30}
                          strokeWidth={2}
                          color={item.iconColor}
                        />
                      </div>
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Habilidades técnicas */}
          <motion.div
            className="space-y-8"
            initial={!isMobile ? { opacity: 0, y: 40 } : false}
            whileInView={!isMobile ? { opacity: 1, y: 0 } : false}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="flex items-center gap-3">
              <div className="w-1.5 h-8 bg-gradient-to-b from-emerald-500 to-green-600 rounded-full"></div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Stack Tecnológico General
              </h3>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  name: "Frontend",
                  items: ["Next.js", "React", "Tailwind CSS", "TypeScript", "Responsive Design"],
                  color: "cyan",
                  hex1: "#06b6d4",
                  hex2: "#22d3ee",
                },
                {
                  name: "Mobile",
                  items: ["Flutter", "React Native", "Firebase", "Push Notifications", "Google Maps Platform"],
                  color: "blue",
                  hex1: "#3b82f6",
                  hex2: "#60a5fa",
                },
                {
                  name: "Backend",
                  items: ["Node.js", "SQL Server", "REST APIs", "Supabase", "Express.js"],
                  color: "violet",
                  hex1: "#8b5cf6",
                  hex2: "#a78bfa",
                },
                {
                  name: "Otros",
                  items: ["Git & GitHub", "Vercel", "Nest.js", "Manero de IA", "Principios SOLID"],
                  color: "emerald",
                  hex1: "#10b981",
                  hex2: "#34d399",
                },
              ].map((category) => (
                <div
                  key={category.name}
                  className="relative overflow-hidden p-6 rounded-xl bg-white/70 dark:bg-gray-800/70 border border-gray-200/60 dark:border-gray-700/60 shadow transition"
                >
                  {/* OPTIMIZACIÓN: Blur solo en desktop */}
                  
                    <>
                      <div
                        className="absolute -top-4 -right-4 w-20 h-20 rounded-full blur-2xl"
                        style={{
                          backgroundColor: category.hex1,
                          opacity: 0.25,
                        }}
                      />
                      <div
                        className="absolute -bottom-4 -left-4 w-16 h-16 rounded-full blur-xl"
                        style={{
                          backgroundColor: category.hex2,
                          opacity: 0.25,
                        }}
                      />
                    </>
                  

                  <div className="relative z-10">
                    <h4
                      className={`text-lg font-bold mb-4 text-${category.color}-600 dark:text-${category.color}-400`}
                    >
                      {category.name}
                    </h4>
                    <ul className="space-y-2">
                      {category.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300"
                        >
                          <div
                            className={`w-1.5 h-1.5 rounded-full bg-${category.color}-500`}
                          ></div>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Habilidades blandas - OPTIMIZADO */}
          <motion.div
            className="space-y-8"
            initial={!isMobile ? { opacity: 0, y: 40 } : false}
            whileInView={!isMobile ? { opacity: 1, y: 0 } : false}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="flex items-center gap-3">
              <div className="w-1.5 h-8 bg-gradient-to-b from-violet-500 to-purple-600 rounded-full"></div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Habilidades Interpersonales
              </h3>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {interpersonalSkills.map((skill) => (
                <SkillCard
                  key={skill.title}
                  skill={skill}
                  isMobile={isMobile}
                />
              ))}
            </div>
          </motion.div>

          {/* Más allá del código - OPTIMIZADO */}
          <motion.div
            className="space-y-8"
            initial={!isMobile ? { opacity: 0, y: 40 } : false}
            whileInView={!isMobile ? { opacity: 1, y: 0 } : false}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="flex items-center gap-3">
              <div className="w-1.5 h-8 bg-gradient-to-b from-pink-500 to-rose-600 rounded-full"></div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Más allá del código
              </h3>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {hobbies.map((hobby) => (
                <HobbyCard
                  key={hobby.title}
                  hobby={hobby}
                  isMobile={isMobile}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </Section>
    </div>
  );
}
