// app/page.js

"use client";
import Section from "@/components/Section";
import { PROJECTS } from "@/data/projects";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Globe, Smartphone, Database } from "lucide-react";
import Image from "next/image";

import { Nextjs } from "@/components/icons/Next";
import { Flutter } from "@/components/icons/Flutter";
import { MicrosoftSQLServer } from "@/components/icons/SqlServer";
import { Firebase } from "@/components/icons/Firebase";
import { TailwindCSS } from "@/components/icons/Tailwind";
import { GoogleMaps } from "@/components/icons/GoogleMaps";
import { ClaudeAI } from "@/components/icons/Claude";
import { Codex } from "@/components/icons/Codex";
import { Gemini } from "@/components/icons/Gemini";
import { SQLite } from "@/components/icons/SQLite";
import { GitHub } from "@/components/icons/GitHub";
import { Vercel } from "@/components/icons/Vercel";
import { Nodejs } from "@/components/icons/Node";
import { PostgreSQL } from "@/components/icons/PostgreSQL";
import { ReactNativeIcon } from "@/components/icons/ReactNative";
import { Expo } from "@/components/icons/Expo";
import { TestSprite } from "@/components/icons/TestSprite";
import { Supabase } from "@/components/icons/Supabase";
import { NestJS } from "@/components/icons/Nest";
import { Prisma } from "@/components/icons/Pisma";
import { Atlassian } from "@/components/icons/Jira";
import { Notion } from "@/components/icons/Notion";
import { DrizzleORM } from "@/components/icons/Drizzle";
import { Resend } from "@/components/icons/Resend";
import { ModelContextProtocol } from "@/components/icons/MCP";
import { MongoDB } from "@/components/icons/Mongo";
import { MySQL } from "@/components/icons/MySQL";

export default function HomePage() {
  const [selected, setSelected] = useState("Todos");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const categories = ["Todos", ...new Set(PROJECTS.map((p) => p.category))];
  const filtered =
    selected === "Todos"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === selected);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Pattern overlay - solo desktop */}
      {!isMobile && (
        <div className="absolute inset-0 opacity-[0.08] dark:opacity-[0.05]">
          <div
            className="absolute inset-0
                       bg-[radial-gradient(circle_at_2px_2px,theme(colors.indigo.400)_1px,transparent_1px)]
                       dark:bg-[radial-gradient(circle_at_2px_2px,theme(colors.indigo.200)_1px,transparent_1px)]
                       bg-[length:40px_40px]"
          />
        </div>
      )}

      {/* Floating Orbs - solo desktop */}
      {!isMobile && (
        <>
          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-violet-300/70 to-purple-400/70 dark:from-violet-200/20 dark:to-purple-300/20 rounded-full blur-2xl animate-pulse motion-reduce:animate-none" />
          <div className="absolute top-96 right-20 w-40 h-40 bg-gradient-to-br from-cyan-300/70 to-blue-400/70 dark:from-cyan-200/20 dark:to-blue-300/20 rounded-full blur-2xl animate-pulse motion-reduce:animate-none" />
          <div className="absolute bottom-40 left-1/4 w-28 h-28 bg-gradient-to-br from-emerald-300/70 to-green-400/70 dark:from-emerald-200/20 dark:to-green-300/20 rounded-full blur-2xl animate-pulse motion-reduce:animate-none" />
        </>
      )}

      {/* Hero Section - Enhanced */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
          {/* Left Column - Content */}
          <motion.div
            className="space-y-8"
            initial={!isMobile ? { opacity: 0, x: -40 } : { opacity: 0 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: isMobile ? 0.3 : 0.6 }}
          >
            <div className="space-y-6">
              <h1 className={`text-4xl lg:text-6xl font-bold leading-tight bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-white dark:via-gray-100 dark:to-white bg-clip-text text-transparent relative ${!isMobile ? "animate-gradient-x bg-[length:300%_300%]" : ""}`}>
                Javier López Camacho
                {!isMobile && <div className="absolute -top-2 -left-2 w-4 h-4 bg-gradient-to-br from-violet-400 to-purple-500 rounded-full opacity-60 animate-bounce" />}
              </h1>

              <div className="relative inline-block">
                <h2 className="text-xl lg:text-2xl font-medium text-gray-600 dark:text-gray-300 relative z-10">
                  Full-Stack Developer
                </h2>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 via-violet-500 to-purple-500 rounded-full origin-left scale-x-0 animate-scale-x" />
              </div>

              <div className="text-lg text-gray-500 dark:text-gray-400 leading-relaxed max-w-xl relative">
                Especializado en desarrollo de aplicaciones web y móviles con
                tecnologías modernas. Experiencia comprobada en proyectos para
                gobierno y sector privado.
                {!isMobile && <div className="absolute -right-4 top-2 w-2 h-2 bg-gradient-to-br from-emerald-400 to-cyan-500 rounded-full animate-pulse" />}
              </div>
            </div>

            {/* Enhanced Tech Stack */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider flex items-center gap-2">
                <div className="w-2 h-2 bg-gradient-to-r from-violet-500 to-purple-600 rounded-full" />
                Tecnologías Principales
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  { label: "Next.js",        Icon: Nextjs            },
                  { label: "Flutter",        Icon: Flutter           },
                  { label: "SQL Server",     Icon: MicrosoftSQLServer},
                  { label: "Firebase",       Icon: Firebase          },
                  { label: "Tailwind CSS",   Icon: TailwindCSS       },
                  { label: "Google Maps",    Icon: GoogleMaps        },
                  { label: "Claude CLI",     Icon: ClaudeAI          },
                  { label: "Codex CLI",      Icon: Codex             },
                  { label: "Gemini CLI",     Icon: Gemini            },
                  { label: "SQLite",         Icon: SQLite            },
                  { label: "GitHub",         Icon: GitHub            },
                  { label: "Vercel",         Icon: Vercel            },
                  { label: "Node.js",        Icon: Nodejs            },
                  { label: "PostgreSQL",     Icon: PostgreSQL        },
                  { label: "MongoDB",        Icon: MongoDB           },
                  { label: "MySQL",          Icon: MySQL             },
                ].map(({ label, Icon }, index) => (
                  <span
                    key={label}
                    className={`group relative flex items-center gap-2 px-3 py-1.5 bg-white/80 dark:bg-gray-800/80 text-gray-700 dark:text-gray-300 text-sm font-medium rounded-lg border border-gray-200/50 dark:border-gray-700/50 transition-colors duration-200 ${!isMobile ? "backdrop-blur-sm hover:border-violet-300/50 dark:hover:border-violet-500/50 hover:shadow-lg hover:shadow-violet-500/10 hover:-translate-y-0.5" : ""}`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <Icon className="w-4 h-4 shrink-0" />
                    {label}
                    <div className="absolute inset-0 bg-gradient-to-r from-violet-500/5 to-purple-500/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                  </span>
                ))}
              </div>
            </div>

            {/* Tecnologías en Aprendizaje */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider flex items-center gap-2">
                <div className="w-2 h-2 bg-gradient-to-r from-cyan-500 to-sky-600 rounded-full" />
                Tecnologías en Aprendizaje o Uso Reciente
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  { label: "React Native",  Icon: ReactNativeIcon },
                  { label: "Expo",          Icon: Expo            },
                  { label: "TestSprite",    Icon: TestSprite      },
                  { label: "Supabase",      Icon: Supabase        },
                  { label: "NestJS",        Icon: NestJS          },
                  { label: "Prisma",        Icon: Prisma          },
                  { label: "Jira",          Icon: Atlassian       },
                  { label: "Notion",        Icon: Notion          },
                  { label: "Drizzle",       Icon: DrizzleORM      },
                  { label: "Agent Skills",  Icon: Vercel          },
                  { label: "Resend",        Icon: Resend          },
                  { label: "Varios MCP",    Icon: ModelContextProtocol },
                ].map(({ label, Icon }, index) => (
                  <span
                    key={label}
                    className={`group relative flex items-center gap-2 px-3 py-1.5 bg-white/80 dark:bg-gray-800/80 text-gray-700 dark:text-gray-300 text-sm font-medium rounded-lg border border-gray-200/50 dark:border-gray-700/50 transition-colors duration-200 ${!isMobile ? "backdrop-blur-sm hover:border-blue-300/50 dark:hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10 hover:-translate-y-0.5" : ""}`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <Icon className="w-4 h-4 shrink-0" />
                    {label}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-indigo-500/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                  </span>
                ))}
              </div>
            </div>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/contact"
                className="group relative px-8 py-3 bg-gradient-to-r from-gray-900 to-gray-800 dark:from-white dark:to-gray-100 text-white dark:text-gray-900 font-semibold rounded-lg hover:shadow-xl hover:shadow-gray-900/20 dark:hover:shadow-white/20 transition-all duration-300 hover:-translate-y-1 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-purple-600 opacity-0 group-hover:opacity-10 transition-opacity" />
                <span className="relative">Contactar</span>
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </a>
              <Link
                href="/projects"
                className="group px-8 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold rounded-lg hover:border-violet-400 dark:hover:border-violet-500 hover:bg-violet-50 dark:hover:bg-violet-950/20 hover:text-violet-700 dark:hover:text-violet-300 transition-all duration-300 hover:shadow-lg hover:shadow-violet-500/10 hover:-translate-y-1 relative overflow-hidden"
              >
                <span className="relative">Ver proyectos</span>
                <div className="absolute inset-0 bg-gradient-to-r from-violet-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            </div>
          </motion.div>

          {/* Enhanced Right Column - Photo */}
          <motion.div
            className="flex justify-center lg:justify-end"
            initial={!isMobile ? { opacity: 0, x: 40 } : { opacity: 0 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: isMobile ? 0.3 : 0.6, delay: isMobile ? 0 : 0.15 }}
          >
            <div className="relative group">
              {/* Glowing border - solo desktop */}
              {!isMobile && <div className="absolute inset-0 bg-gradient-to-r from-violet-500 via-purple-500 to-cyan-500 rounded-2xl blur-sm opacity-20 group-hover:opacity-40 transition-opacity duration-500 animate-pulse" />}

              <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden bg-gray-200 dark:bg-gray-700 shadow-2xl ring-1 ring-gray-200/50 dark:ring-gray-700/50">
                <Image
                  src="/foto_perfil.jpg"
                  alt="Javier López Camacho"
                  width={400}
                  height={400}
                  className={`w-full h-full object-cover ${!isMobile ? "transition-transform duration-700 group-hover:scale-105" : ""}`}
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-white/5 dark:to-black/10" />
              </div>

              {/* Decorativos - solo desktop */}
              {!isMobile && (
                <>
                  <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-violet-100/80 to-purple-200/80 dark:from-violet-900/40 dark:to-purple-800/40 rounded-2xl -z-10 backdrop-blur-sm" />
                  <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full opacity-70 animate-bounce" />
                  <div className="absolute top-8 -right-2 w-6 h-6 bg-gradient-to-br from-emerald-400 to-green-500 rounded-full opacity-60 animate-bounce" />
                </>
              )}
            </div>
          </motion.div>
        </div>

        {/* Enhanced Professional Stats */}
        <motion.div
          className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {[
            { number: "7+", label: "Proyectos completados", color: "from-violet-500 to-purple-600" },
            { number: "2023", label: "Año en actividad", color: "from-cyan-500 to-blue-600" },
            { number: "3", label: "Áreas de especialización", color: "from-emerald-500 to-green-600" },
            { number: "100%", label: "Proyectos entregados", color: "from-rose-500 to-pink-600" },
          ].map((stat, index) => (
            <div
              key={stat.label}
              className="group relative text-center p-6 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 rounded-xl hover:border-transparent hover:shadow-xl hover:-translate-y-2 transition-all duration-500"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} rounded-xl opacity-0 group-hover:opacity-5 blur-xl transition-opacity duration-500`} />

              <div className={`text-3xl lg:text-4xl font-bold bg-gradient-to-br ${stat.color} bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300`}>
                {stat.number}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400 font-medium relative z-10">
                {stat.label}
              </div>

              <div className={`absolute top-2 right-2 w-2 h-2 bg-gradient-to-br ${stat.color} rounded-full opacity-50 group-hover:opacity-100 transition-opacity`} />
            </div>
          ))}
        </motion.div>
      </Section>

      {/* Enhanced Services Section */}
      <Section className="bg-gradient-to-br from-gray-50/80 to-violet-50/30 dark:from-gray-800/50 dark:to-violet-950/10 backdrop-blur-sm relative">
        {/* Section background decoration */}
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-gradient-to-br from-violet-200/10 to-purple-300/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-cyan-200/10 to-blue-300/10 rounded-full blur-3xl" />

        <motion.div
          className="text-center mb-16 relative z-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-gray-900 via-violet-900 to-gray-900 dark:from-white dark:via-violet-100 dark:to-white bg-clip-text text-transparent mb-4">
            Servicios
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-violet-500 to-purple-600 rounded-full mx-auto mb-6" />
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Soluciones tecnológicas integrales para el crecimiento de tu negocio
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-8 relative z-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          {[
            {
              title: "Desarrollo Web",
              description: "Aplicaciones web modernas con Next.js, React y tecnologías de vanguardia.",
              technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
              icon: Globe,
              gradient: "from-rose-500 to-fuchsia-600",
              bubbleColor1: "#f43f5e",
              bubbleColor2: "#d946ef",
            },
            {
              title: "Aplicaciones Móviles",
              description: "Apps nativas multiplataforma con Flutter o React Native para iOS y Android.",
              technologies: ["Flutter", "Dart", "React Native", "TypeScript"],
              icon: Smartphone,
              gradient: "from-indigo-500 to-cyan-500",
              bubbleColor1: "#6366f1",
              bubbleColor2: "#06b6d4",
            },
            {
              title: "Backend & Bases de Datos",
              description: "APIs robustas y sistemas de gestión de datos escalables.",
              technologies: ["SQL Server", "Firebase", "APIs REST", "Node.js"],
              icon: Database,
              gradient: "from-emerald-500 to-lime-500",
              bubbleColor1: "#10b981",
              bubbleColor2: "#84cc16",
            },
          ].map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="group relative overflow-hidden p-6 rounded-xl bg-white/70 dark:bg-gray-800/70 border border-gray-200/60 dark:border-gray-700/60 shadow hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                {/* Franja superior — única adición vs SkillCard */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${service.gradient}`} />

                {/* Gradient overlay en hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 dark:group-hover:opacity-10 transition-opacity duration-500`} />

                {/* Blobs — igual que SkillCard */}
                <div
                  className="absolute top-0 right-0 w-24 h-24 rounded-full blur-2xl translate-x-8 -translate-y-8"
                  style={{ backgroundColor: service.bubbleColor1, opacity: 0.35 }}
                />
                <div
                  className="absolute bottom-0 left-0 w-20 h-20 rounded-full blur-xl -translate-x-6 translate-y-6"
                  style={{ backgroundColor: service.bubbleColor2, opacity: 0.3 }}
                />

                <div className="relative z-10 mt-2">
                  {/* Ícono — igual que SkillCard */}
                  <div className="mb-4">
                    <div
                      className="w-12 h-12 flex items-center justify-center rounded-xl"
                      style={{
                        backgroundColor: `${service.bubbleColor1}28`,
                        border: `1.5px solid ${service.bubbleColor1}90`,
                        boxShadow: `0 0 10px ${service.bubbleColor1}45, 0 0 3px ${service.bubbleColor1}30`,
                      }}
                    >
                      <Icon size={26} strokeWidth={2} color={service.bubbleColor1} />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                    {service.description}
                  </p>

                  {/* Separador */}
                  <div className={`h-px bg-gradient-to-r ${service.gradient} opacity-20 group-hover:opacity-40 transition-opacity duration-300 mb-4`} />

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-xs font-medium rounded-full"
                        style={{
                          backgroundColor: `${service.bubbleColor1}18`,
                          border: `1px solid ${service.bubbleColor1}55`,
                          color: service.bubbleColor1,
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </motion.div>
      </Section>
    </div>
  );
}