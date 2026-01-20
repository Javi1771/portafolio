// app/page.js

"use client";
import Section from "@/components/Section";
import { PROJECTS } from "@/data/projects";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

export default function HomePage() {
  const [selected, setSelected] = useState("Todos");
  const categories = ["Todos", ...new Set(PROJECTS.map((p) => p.category))];
  const filtered =
    selected === "Todos"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === selected);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Subtle Background Pattern - More visible in light mode */}
      <div className="absolute inset-0 opacity-[0.08] dark:opacity-[0.05]">
        <div
          className="absolute inset-0
                     bg-[radial-gradient(circle_at_2px_2px,theme(colors.indigo.400)_1px,transparent_1px)]
                     dark:bg-[radial-gradient(circle_at_2px_2px,theme(colors.indigo.200)_1px,transparent_1px)]
                     bg-[length:40px_40px]"
        />
      </div>

      {/* Floating Orbs - More visible in light mode */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-violet-300/70 to-purple-400/70 dark:from-violet-200/20 dark:to-purple-300/20 rounded-full blur-2xl animate-pulse motion-reduce:animate-none" />
      <div className="absolute top-96 right-20 w-40 h-40 bg-gradient-to-br from-cyan-300/70 to-blue-400/70 dark:from-cyan-200/20 dark:to-blue-300/20 rounded-full blur-2xl animate-pulse motion-reduce:animate-none" />
      <div className="absolute bottom-40 left-1/4 w-28 h-28 bg-gradient-to-br from-emerald-300/70 to-green-400/70 dark:from-emerald-200/20 dark:to-green-300/20 rounded-full blur-2xl animate-pulse motion-reduce:animate-none" />

      {/* Hero Section - Enhanced */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              {/* Animated gradient text */}
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-white dark:via-gray-100 dark:to-white bg-clip-text text-transparent animate-gradient-x bg-[length:300%_300%] relative">
                Javier López Camacho
                <div className="absolute -top-2 -left-2 w-4 h-4 bg-gradient-to-br from-violet-400 to-purple-500 rounded-full opacity-60 animate-bounce" />
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
                <div className="absolute -right-4 top-2 w-2 h-2 bg-gradient-to-br from-emerald-400 to-cyan-500 rounded-full animate-pulse" />
              </div>
            </div>

            {/* Enhanced Tech Stack */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider flex items-center gap-2">
                <div className="w-2 h-2 bg-gradient-to-r from-violet-500 to-purple-600 rounded-full" />
                Tecnologías Principales
              </h3>
              <div className="flex flex-wrap gap-3">
                {["Next.js", "Flutter", "SQL Server", "Firebase", "Firestore", "Tailwind CSS", "Google Maps Plattform", "Cloude AI", "Chat GPT", "SQLite", "GitHub", "Vercel", "Node.js", "PostgreSQL"].map(
                  (tech, index) => (
                    <span
                      key={tech}
                      className="group relative px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm text-gray-700 dark:text-gray-300 text-sm font-medium rounded-lg border border-gray-200/50 dark:border-gray-700/50 hover:border-violet-300/50 dark:hover:border-violet-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-violet-500/10 hover:-translate-y-0.5"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      {tech}
                      <div className="absolute inset-0 bg-gradient-to-r from-violet-500/5 to-purple-500/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                    </span>
                  )
                )}
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
          </div>

          {/* Enhanced Right Column - Photo */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative group">
              {/* Glowing border effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-violet-500 via-purple-500 to-cyan-500 rounded-2xl blur-sm opacity-20 group-hover:opacity-40 transition-opacity duration-500 animate-pulse" />

              <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden bg-gray-200 dark:bg-gray-700 shadow-2xl ring-1 ring-gray-200/50 dark:ring-gray-700/50">
                <Image
                  src="/foto_perfil.jpg"
                  alt="Javier López Camacho"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-white/5 dark:to-black/10" />
              </div>

              {/* Enhanced decorative elements */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-violet-100/80 to-purple-200/80 dark:from-violet-900/40 dark:to-purple-800/40 rounded-2xl -z-10 backdrop-blur-sm" />
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full opacity-70 animate-bounce" />
              <div className="absolute top-8 -right-2 w-6 h-6 bg-gradient-to-br from-emerald-400 to-green-500 rounded-full opacity-60 animate-bounce" />
            </div>
          </div>
        </div>

        {/* Enhanced Professional Stats */}
        <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-6">
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
        </div>
      </Section>

      {/* Enhanced Services Section */}
      <Section className="bg-gradient-to-br from-gray-50/80 to-violet-50/30 dark:from-gray-800/50 dark:to-violet-950/10 backdrop-blur-sm relative">
        {/* Section background decoration */}
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-gradient-to-br from-violet-200/10 to-purple-300/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-cyan-200/10 to-blue-300/10 rounded-full blur-3xl" />

        <div className="text-center mb-16 relative z-10">
          <h2 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-gray-900 via-violet-900 to-gray-900 dark:from-white dark:via-violet-100 dark:to-white bg-clip-text text-transparent mb-4">
            Servicios
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-violet-500 to-purple-600 rounded-full mx-auto mb-6" />
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Soluciones tecnológicas integrales para el crecimiento de tu negocio
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative z-10">
          {[
            {
              title: "Desarrollo Web",
              description: "Aplicaciones web modernas con Next.js, React y tecnologías de vanguardia.",
              technologies: ["Next.js", "React", "TypeScript"],
              gradient: "from-fuchsia-700 to-purple-600",
              icon: "🌐",
            },
            {
              title: "Aplicaciones Móviles",
              description: "Apps nativas multiplataforma con Flutter para iOS y Android.",
              technologies: ["Flutter", "Dart", "Firebase"],
              gradient: "from-cyan-500 to-blue-600",
              icon: "📱",
            },
            {
              title: "Backend & Bases de Datos",
              description: "APIs robustas y sistemas de gestión de datos escalables.",
              technologies: ["SQL Server", "Firebase", "APIs REST"],
              gradient: "from-emerald-500 to-green-600",
              icon: "🗄️",
            },
          ].map((service, index) => (
            <div
              key={service.title}
              className="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-gray-200/50 dark:border-gray-700/50 hover:border-transparent hover:shadow-2xl hover:-translate-y-3 transition-all duration-500"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
              <div className={`absolute -inset-1 bg-gradient-to-br ${service.gradient} rounded-xl opacity-0 group-hover:opacity-20 blur-lg transition-opacity duration-500`} />

              <div className={`relative w-14 h-14 bg-gradient-to-br ${service.gradient} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <span className="text-2xl" aria-hidden="true">{service.icon}</span>
              </div>

              <h3 className={`text-xl font-semibold bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent mb-4 relative z-10`}>
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed relative z-10">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-2 relative z-10">
                {service.technologies.map((tech, techIndex) => (
                  <span
                    key={tech}
                    className={`px-3 py-1 bg-gradient-to-r ${service.gradient} bg-opacity-10 text-white dark:text-gray-300 text-xs font-medium rounded-full border-opacity-20 hover:border-opacity-40 transition-all duration-300`}
                    style={{ animationDelay: `${index * 200 + techIndex * 100}ms` }}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className={`absolute top-4 right-4 w-3 h-3 bg-gradient-to-br ${service.gradient} rounded-full opacity-30 group-hover:opacity-70 transition-opacity`} />
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}