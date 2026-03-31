// components/Experience.jsx
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Briefcase,
  GraduationCap,
  Smartphone,
  Code,
  Building2,
  ChevronDown,
  Calendar,
  MapPin,
  Users,
  Landmark,
} from "lucide-react";

const experiences = [
  {
    id: "trinium",
    company: "Trinium",
    role: "Co-fundador & Desarrollador Full-Stack",
    type: "startup",
    period: "Ene 2026 - Mar 2026",
    location: "Remoto",
    description:
      "Startup fundada junto a 2 socios para desarrollar software a medida para comunidades y pequeñas organizaciones",
    projects: [
      {
        name: "Hydra – Control de Socios del Pozo de Agua",
        tech: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS"],
        highlights: [
          "ERP comunitario con más de 10 módulos para asociaciones de agua",
          "Lecturas de medidores offline-first con sincronización automática",
          "Recibos, tickets, caja y corte diario automático",
          "REST API con JWT para portal ciudadano externo",
          "Importación masiva desde Excel para migración de datos históricos",
        ],
      },
    ],
    collaboration: {
      icon: Users,
      text: "Proyecto desarrollado en equipo junto a 2 socios dentro de nuestra startup Trinium",
    },
    icon: Landmark,
    gradient: "from-cyan-500 to-blue-600",
  },
  {
    id: "siaumex",
    company: "SIAUMex",
    role: "Desarrollador Full-Stack Freelance",
    type: "freelance",
    period: "Sep 2025 - Dic 2025",
    location: "Remoto",
    description:
      "Desarrollo de software de gestión empresarial para procesos de ensamblaje",
    projects: [
      {
        name: "Assembly",
        tech: ["Next.js", "SQL Server", "Node.js"],
        highlights: [
          "Sistema completo de gestión de ensamblaje",
          "Arquitectura modular y escalable",
          "Integración con bases de datos empresariales",
        ],
      },
    ],
    icon: Code,
    gradient: "from-orange-500 to-amber-600",
  },
  {
    id: "jordan",
    company: "Motores Jordan",
    role: "Desarrollador Web & Consultor IT Freelance",
    type: "freelance",
    period: "Jun 2025 - Ago 2025",
    location: "Remoto",
    description: "Desarrollo web y consultoría en infraestructura digital",
    projects: [
      {
        name: "Landing Page & Migración IT",
        tech: ["Next.js", "Squarespace", "Google Workspace"],
        highlights: [
          "Diseño y desarrollo de landing page corporativa",
          "Migración exitosa de dominio a Squarespace",
          "Configuración y migración de correos a Google Workspace",
          "Resolución de problemas de infraestructura de correo",
        ],
      },
    ],
    icon: Building2,
    gradient: "from-amber-500 to-yellow-600",
  },
  {
    id: "municipio-contract",
    company: "Municipio de San Juan del Río",
    role: "Desarrollador Full-Stack & Mobile",
    type: "contract",
    period: "Ene 2025 - Oct 2025",
    location: "San Juan del Río, Querétaro",
    description:
      "Desarrollo de sistemas gubernamentales web y móviles en nómina oficial",
    projects: [
      {
        name: "Pandora (Finalización)",
        tech: ["Next.js", "SQL Server", "Node.js"],
        highlights: [
          "Completé el sistema de servicio médico municipal",
          "Optimización y deployment a producción",
          "Gestión de equipo de desarrollo",
        ],
      },
      {
        name: "Cus Móvil",
        tech: ["Flutter", "Firebase", "Node.js"],
        highlights: [
          "Aplicación móvil para servicios municipales",
          "Integración con sistemas gubernamentales",
          "Aplicación no publicada en tiendas",
        ],
      },
      {
        name: "Atención Ciudadana",
        tech: ["Flutter", "Firebase", "SQL Server"],
        highlights: [
          "App móvil para reportes ciudadanos",
          "Aplicación de gestión interna para atención de reportes",
          "Panel administrativo web integrado",
        ],
      },
    ],
    collaboration: {
      icon: Users,
      text: "Colaboré con otros desarrolladores en sus proyectos, brindando soporte técnico y mentoría",
    },
    icon: Briefcase,
    gradient: "from-green-500 to-emerald-600",
  },
  {
    id: "municipio-internship",
    company: "Municipio de San Juan del Río",
    role: "Desarrollador Full-Stack (Estadías de Ingeniería)",
    type: "internship",
    period: "Oct 2024 - Ene 2025",
    location: "San Juan del Río, Querétaro",
    description: "Estadías profesionales de último cuatrimestre de ingeniería",
    projects: [
      {
        name: "Pandora (Desarrollo Inicial)",
        tech: ["Next.js", "SQL Server", "Tailwind CSS"],
        highlights: [
          "Desarrollo del sistema de servicio médico desde cero",
          "Trabajo colaborativo con 2 compañeros de equipo",
          "Arquitectura base y módulos principales",
          "Diseño de base de datos y APIs",
        ],
      },
    ],
    icon: GraduationCap,
    gradient: "from-blue-500 to-cyan-600",
  },
  {
    id: "sine",
    company: "SINE Tecnologías",
    role: "Desarrollador Mobile (Estadías de TSU)",
    type: "internship",
    period: "May 2023 - Ago 2023",
    location: "San Juan del Río, Querétaro",
    description: "Primera experiencia profesional durante estadías de TSU",
    projects: [
      {
        name: "Nimbus",
        tech: ["Flutter", "Google Play"],
        highlights: [
          "Aplicación móvil publicada en Google Play Store",
          "Desarrollo colaborativo con un compañero",
          "Primera experiencia con Flutter",
          "Ciclo completo: desarrollo, testing y publicación",
        ],
      },
    ],
    icon: Smartphone,
    gradient: "from-violet-500 to-purple-600",
  },
];

const ExperienceCard = ({ experience, isExpanded, onToggle }) => {
  const Icon = experience.icon;
  const CollabIcon = experience.collaboration?.icon;

  const typeColors = {
    internship: "from-blue-500/20 to-purple-500/20 border-blue-500/30",
    contract: "from-green-500/20 to-emerald-500/20 border-green-500/30",
    freelance: "from-orange-500/20 to-amber-500/20 border-orange-500/30",
    startup: "from-cyan-500/20 to-blue-500/20 border-cyan-500/30",
  };

  const typeLabels = {
    internship: "Estadías",
    contract: "Contrato",
    freelance: "Freelance",
    startup: "Startup",
  };

  return (
    <motion.div
      layout
      className={`group relative backdrop-blur-xl bg-white/70 dark:bg-gray-800/70 
        border border-gray-200 dark:border-gray-700/50 rounded-2xl p-6 cursor-pointer 
        transition-all duration-500 hover:shadow-2xl hover:shadow-violet-500/20 
        hover:scale-[1.02] hover:border-violet-500/50 dark:hover:border-violet-500/50 overflow-hidden`}
      onClick={onToggle}
    >
      {/* Gradient overlay on hover */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${typeColors[experience.type]} 
        opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`}
      />

      {/* Decorative gradient blobs */}
      <div
        className={`absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br ${experience.gradient} 
        rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
      />
      <div
        className={`absolute -bottom-10 -left-10 w-24 h-24 bg-gradient-to-br ${experience.gradient} 
        rounded-full blur-2xl opacity-0 group-hover:opacity-15 transition-opacity duration-500`}
      />

      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-start gap-4">
          <div
            className={`p-3 rounded-xl bg-gradient-to-br ${experience.gradient} 
            shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300`}
          >
            <Icon className="w-6 h-6 text-white" />
          </div>

          <div className="flex-1">
            <div className="flex items-start justify-between gap-2">
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {experience.company}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mt-1">
                  {experience.role}
                </p>
              </div>
              <motion.div
                animate={{ rotate: isExpanded ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="flex-shrink-0"
              >
                <ChevronDown
                  className="w-5 h-5 text-gray-500 dark:text-gray-400 
                  group-hover:text-violet-500 dark:group-hover:text-violet-400 transition-colors"
                />
              </motion.div>
            </div>

            {/* Meta Info */}
            <div className="flex flex-wrap gap-4 mt-3 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span>{experience.period}</span>
              </div>
              <div className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                <span>{experience.location}</span>
              </div>
              <div
                className={`px-3 py-1 rounded-full text-xs font-medium
                bg-gradient-to-r ${experience.gradient} text-white shadow-md`}
              >
                {typeLabels[experience.type]}
              </div>
            </div>

            <p className="text-sm text-gray-600 dark:text-gray-400 mt-3 leading-relaxed">
              {experience.description}
            </p>
          </div>
        </div>

        {/* Expanded Content */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="mt-6 pt-6 border-t border-gray-700/50 dark:border-gray-700/50 space-y-6">
                {/* Projects */}
                {experience.projects.map((project, idx) => (
                  <div key={idx} className="space-y-3">
                    <h4 className="font-semibold text-lg text-gray-900 dark:text-white flex items-center gap-2">
                      <div
                        className={`w-2 h-2 rounded-full bg-gradient-to-r ${experience.gradient}`}
                      />
                      {project.name}
                    </h4>

                    {/* Tech Stack */}
                    {project.tech && (
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, techIdx) => (
                          <span
                            key={techIdx}
                            className={`px-3 py-1 rounded-full text-xs font-medium
                bg-gradient-to-r ${experience.gradient} text-white shadow-md`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Highlights */}
                    <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                      {project.highlights.map((highlight, hIdx) => (
                        <li key={hIdx} className="flex items-start gap-2">
                          <span
                            className={`bg-gradient-to-r ${experience.gradient} bg-clip-text text-transparent mt-1 font-bold`}
                          >
                            ▸
                          </span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}

                {/* Collaboration badge */}
                {experience.collaboration && (
                  <div
                    className={`flex items-start gap-3 p-4 rounded-xl 
                    bg-gradient-to-r ${experience.gradient} bg-opacity-10 
                    border border-current border-opacity-20`}
                  >
                    <CollabIcon
                      className={`w-5 h-5 flex-shrink-0 mt-0.5 
                      bg-gradient-to-r ${experience.gradient} bg-clip-text text-transparent`}
                    />
                    <p className="text-sm text-white dark:text-gray-200 leading-relaxed">
                      {experience.collaboration.text}
                    </p>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Corner decorative dots */}
      <div
        className={`absolute top-3 right-3 w-2 h-2 bg-gradient-to-br ${experience.gradient} 
        rounded-full opacity-50 group-hover:opacity-100 transition-opacity`}
      />
      <div
        className={`absolute bottom-3 left-3 w-1.5 h-1.5 bg-gradient-to-br ${experience.gradient} 
        rounded-full opacity-30 group-hover:opacity-70 transition-opacity`}
      />
    </motion.div>
  );
};

export default function Experience() {
  const [expandedId, setExpandedId] = useState(null);

  return (
    <div className="relative py-20 overflow-hidden">
      {/* Background decorations matching other pages */}
      <div className="absolute top-0 left-10 w-80 h-80 bg-gradient-to-br from-violet-200/20 to-purple-300/20 dark:from-violet-500/10 dark:to-purple-600/10 rounded-full blur-3xl animate-pulse motion-reduce:animate-none" />
      <div className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-br from-cyan-200/20 to-blue-300/20 dark:from-cyan-500/10 dark:to-blue-600/10 rounded-full blur-3xl animate-pulse motion-reduce:animate-none" />
      <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-gradient-to-br from-emerald-200/20 to-green-300/20 dark:from-emerald-500/10 dark:to-green-600/10 rounded-full blur-3xl animate-pulse motion-reduce:animate-none" />

      {/* Pattern overlay */}
      <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_2px_2px,theme(colors.violet.500)_1px,transparent_1px)] dark:bg-[radial-gradient(circle_at_2px_2px,theme(colors.violet.400)_1px,transparent_1px)] bg-[length:48px_48px]" />
      </div>

      <section className="relative z-10 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header with enhanced styling - Estilo como Stack Tecnológico */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8 mb-16"
          >
            {/* Title section */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-8 bg-gradient-to-b from-rose-500 to-rose-600 rounded-full" />
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Experiencia Profesional
                </h3>
              </div>
            </div>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line - enhanced */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2">
              <div className="absolute inset-0 bg-gradient-to-b from-violet-500/50 via-purple-500/30 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-b from-violet-500/50 via-purple-500/30 to-transparent blur-sm" />
            </div>

            {/* Experience Cards */}
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative ${
                    index % 2 === 0
                      ? "md:pr-[calc(50%+2rem)]"
                      : "md:pl-[calc(50%+2rem)]"
                  }`}
                >
                  {/* Enhanced Timeline Dot */}
                  <div className="hidden md:block absolute top-8 left-1/2 -translate-x-1/2 z-20">
                    <div
                      className={`w-5 h-5 rounded-full bg-gradient-to-br ${exp.gradient} 
                      border-4 border-white dark:border-gray-900 shadow-lg shadow-violet-500/50`}
                    />
                    <div
                      className={`absolute inset-0 rounded-full bg-gradient-to-br ${exp.gradient} 
                      blur-md opacity-50 animate-pulse`}
                    />
                  </div>

                  <ExperienceCard
                    experience={exp}
                    isExpanded={expandedId === exp.id}
                    onToggle={() =>
                      setExpandedId(expandedId === exp.id ? null : exp.id)
                    }
                  />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Enhanced Current Status */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-gradient-to-r from-violet-500/20 via-purple-500/20 to-cyan-500/20 blur-xl rounded-full" />
              <div
                className="relative flex items-center gap-3 px-8 py-4 rounded-full
                bg-gradient-to-r from-white/80 to-white/60 dark:from-gray-800/80 dark:to-gray-800/60 
                border border-violet-200/50 dark:border-violet-700/50
                backdrop-blur-md shadow-xl"
              >
                <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-violet-500 to-purple-600 animate-pulse" />
                <span className="text-sm font-semibold bg-gradient-to-r from-violet-600 to-purple-600 dark:from-violet-400 dark:to-purple-400 bg-clip-text text-transparent">
                  Actualmente buscando nuevas oportunidades
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
