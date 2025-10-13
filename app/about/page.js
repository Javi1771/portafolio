// app/about/page.js

'use client';

import Section from "@/components/Section";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50/50 to-cyan-50/30 dark:from-gray-900 dark:via-gray-800/50 dark:to-cyan-950/20 relative overflow-hidden">
      {/* Orbes flotantes */}
      <div className="absolute top-20 left-10 w-80 h-80 bg-gradient-to-br from-cyan-200/20 to-blue-300/20 dark:from-cyan-500/10 dark:to-blue-600/10 rounded-full blur-3xl animate-pulse motion-reduce:animate-none"></div>
      <div className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-br from-violet-200/20 to-purple-300/20 dark:from-violet-500/10 dark:to-purple-600/10 rounded-full blur-3xl animate-pulse motion-reduce:animate-none"></div>
      <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-gradient-to-br from-emerald-200/20 to-green-300/20 dark:from-emerald-500/10 dark:to-green-600/10 rounded-full blur-3xl animate-pulse motion-reduce:animate-none"></div>

      {/* Patrón de fondo */}
      <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]">
        <div
          className="
            absolute inset-0
            bg-[radial-gradient(circle_at_2px_2px,theme(colors.cyan.500)_1px,transparent_1px)]
            dark:bg-[radial-gradient(circle_at_2px_2px,theme(colors.cyan.400)_1px,transparent_1px)]
            bg-[length:42px_42px]
          "
        />
      </div>

      <Section
        title={
          <div className="space-y-6 relative">
            {/* Botón CV */}
            <div className="absolute top-0 right-0 z-10">
              <a
                href="/JavierLopezCV.pdf"
                download
                className="group flex items-center gap-2 px-4 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 backdrop-blur-sm border border-white/20"
              >
                <svg
                  className="w-5 h-5 group-hover:animate-bounce"
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
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full opacity-60 animate-bounce"></div>
              <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-gradient-to-br from-violet-400 to-purple-500 rounded-full opacity-40 animate-bounce"></div>
              <div className="absolute bottom-0 left-0 h-1 w-full origin-left scale-x-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-500 animate-scale-x"></div>
            </div>

            {/* Subtítulo + datos rápidos */}
            <div className="space-y-4">
              <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl">
                Desarrollador Full-Stack y Mobile con pasión por crear soluciones digitales que transforman ideas en realidad
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
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Columna izquierda - Quien soy */}
            <div className="space-y-6">
              <div className="p-8 bg-white/60 dark:bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-gray-200/50 dark:border-gray-700/50 shadow-lg">
                <div className="space-y-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-1 h-8 bg-gradient-to-b from-cyan-500 to-blue-600 rounded-full"></div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">¿Quién soy?</h3>
                  </div>

                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    Soy <strong>Javier López</strong>, un desarrollador de 22 años apasionado por la tecnología y la creación de soluciones digitales que realmente impactan.
                  </p>

                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    Me gradué como <strong>Ingeniero en Desarrollo y Gestión de Software</strong> por la Universidad Tecnológica de San Juan del Río, donde desarrollé una sólida base en programación, arquitectura de software y gestión de proyectos.
                  </p>

                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    Mi stack principal incluye <span className="font-semibold text-cyan-600 dark:text-cyan-400">Next.js</span> para desarrollo web, <span className="font-semibold text-blue-600 dark:text-blue-400">Flutter</span> para aplicaciones móviles, bases de datos con <span className="font-semibold text-violet-600 dark:text-violet-400">SQL Server</span> y <span className="font-semibold text-emerald-600 dark:text-emerald-400">Firebase</span>, además de experiencia en <span className="font-semibold text-orange-600 dark:text-orange-400">IoT</span>.
                  </p>
                </div>
              </div>
            </div>

            {/* Columna derecha - Avatar/Código */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative group">
                <div className="w-80 h-80 bg-gradient-to-br from-cyan-100 to-blue-100 dark:from-cyan-900/30 dark:to-blue-900/30 rounded-2xl border border-cyan-200/50 dark:border-cyan-700/50 flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all duration-700">
                  <div className="space-y-4 text-left">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="space-y-2 text-sm font-mono">
                      <div className="text-cyan-600 dark:text-cyan-400">{"const developer = {"}</div>
                      <div className="ml-4 text-gray-600 dark:text-gray-400">{"name: \"Javier López\","}</div>
                      <div className="ml-4 text-gray-600 dark:text-gray-400">{"age: 22,"}</div>
                      <div className="ml-4 text-gray-600 dark:text-gray-400">{"role: \"Full-Stack Dev\","}</div>
                      <div className="ml-4 text-gray-600 dark:text-gray-400">{"location: \"Qro, MX\","}</div>
                      <div className="ml-4 text-gray-600 dark:text-gray-400">{"passion: \"Web & Mobile\""}</div>
                      <div className="text-cyan-600 dark:text-cyan-400">{"};"}</div>
                    </div>
                  </div>
                </div>

                <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full opacity-70 animate-bounce"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-br from-violet-400 to-purple-500 rounded-full opacity-60 animate-bounce"></div>
              </div>
            </div>
          </div>

          {/* Filosofía de trabajo */}
          <div className="text-center py-16 bg-gradient-to-r from-cyan-50/50 via-transparent to-violet-50/50 dark:from-cyan-950/20 dark:via-transparent dark:to-violet-950/20 rounded-2xl border border-cyan-200/30 dark:border-cyan-700/30">
            <div className="space-y-8 max-w-4xl mx-auto">
              <div className="relative inline-block">
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  Mi filosofía de desarrollo
                </h3>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full animate-pulse"></div>
              </div>

              <div className="grid md:grid-cols-3 gap-8 text-left">
                {[
                  {
                    title: "Rendimiento",
                    desc: "Código optimizado que escala y responde rápido, priorizando la eficiencia en cada línea",
                    icon: "⚡",
                    color: "from-yellow-500 to-orange-600"
                  },
                  {
                    title: "UX Intuitiva",
                    desc: "Interfaces que los usuarios entienden naturalmente, sin necesidad de explicaciones",
                    icon: "🎨",
                    color: "from-violet-500 to-purple-600"
                  },
                  {
                    title: "Métricas Claras",
                    desc: "Datos concretos que guían decisiones y demuestran resultados medibles",
                    icon: "📊",
                    color: "from-cyan-500 to-blue-600"
                  }
                ].map((item) => (
                  <div
                    key={item.title}
                    className="text-center p-6 bg-white/60 dark:bg-gray-800/30 backdrop-blur-sm rounded-xl border border-gray-200/50 dark:border-gray-700/50 hover:scale-105 transition-all duration-300"
                  >
                    <div className={`text-4xl mb-4 bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>
                      {item.icon}
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
          </div>

          {/* Habilidades técnicas */}
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <div className="w-1.5 h-8 bg-gradient-to-b from-emerald-500 to-green-600 rounded-full"></div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Stack Tecnológico</h3>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { name: "Frontend", items: ["Next.js", "React", "Tailwind CSS", "TypeScript"], color: "cyan" },
                { name: "Mobile", items: ["Flutter", "Dart", "Firebase", "Push Notifications"], color: "blue" },
                { name: "Backend", items: ["Node.js", "SQL Server", "REST APIs", "SOAP"], color: "violet" },
                { name: "Otros", items: ["IoT (ESP8266)", "Git", "Vercel", "Azure"], color: "emerald" }
              ].map((category) => (
                <div
                  key={category.name}
                  className="p-6 rounded-xl bg-white/70 dark:bg-gray-800/70 border border-gray-200/60 dark:border-gray-700/60 shadow hover:shadow-lg transition"
                >
                  <h4 className={`text-lg font-bold mb-4 text-${category.color}-600 dark:text-${category.color}-400`}>
                    {category.name}
                  </h4>
                  <ul className="space-y-2">
                    {category.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                        <div className={`w-1.5 h-1.5 rounded-full bg-${category.color}-500`}></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}