// app/contact/page.js

'use client';

import Section from "@/components/Section";
import { EMAIL, WHATSAPP, GITHUB_ACCOUNTS } from "@/data/links";

export default function ContactPage() {
  // Función para crear el enlace de WhatsApp correctamente
  const createWhatsAppLink = (message) => {
    // Asegurar que el número tenga el formato correcto
    const phoneNumber = WHATSAPP.replace(/\D/g, ''); // Remover todo excepto números
    const formattedNumber = phoneNumber.startsWith('52') ? phoneNumber : `52${phoneNumber}`;
    return `https://wa.me/${formattedNumber}?text=${encodeURIComponent(message)}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50/50 to-emerald-50/30 dark:from-gray-900 dark:via-gray-800/50 dark:to-emerald-950/20 relative overflow-hidden">
      {/* Floating background orbs */}
      <div className="absolute top-20 left-10 w-80 h-80 bg-gradient-to-br from-emerald-200/20 to-green-300/20 dark:from-emerald-500/10 dark:to-green-600/10 rounded-full blur-3xl animate-pulse motion-reduce:animate-none"></div>
      <div className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-br from-violet-200/20 to-purple-300/20 dark:from-violet-500/10 dark:to-purple-600/10 rounded-full blur-3xl animate-pulse motion-reduce:animate-none"></div>
      <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-gradient-to-br from-cyan-200/20 to-blue-300/20 dark:from-cyan-500/10 dark:to-blue-600/10 rounded-full blur-3xl animate-pulse motion-reduce:animate-none"></div>

      {/* Pattern overlay (Tailwind arbitrary values) */}
      <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05] pointer-events-none">
        <div
          className="
            absolute inset-0
            bg-[radial-gradient(circle_at_2px_2px,theme(colors.emerald.500)_1px,transparent_1px)]
            dark:bg-[radial-gradient(circle_at_2px_2px,theme(colors.emerald.400)_1px,transparent_1px)]
            bg-[length:45px_45px]
          "
        />
      </div>

      <Section
        title={
          <div className="space-y-6">
            {/* Main title with gradient and effects */}
            <div className="relative inline-block">
              <h1 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-900 via-emerald-800 to-gray-900 dark:from-white dark:via-emerald-200 dark:to-white bg-clip-text text-transparent leading-tight">
                Contacto profesional
              </h1>

              {/* Decorative elements */}
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-br from-emerald-400 to-green-500 rounded-full opacity-60 animate-bounce"></div>
              <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full opacity-40 animate-bounce"></div>

              {/* Animated underline (requires custom animate-scale-x in tailwind.config) */}
              <div className="absolute bottom-0 left-0 h-1 w-full origin-left scale-x-0 bg-gradient-to-r from-emerald-500 via-green-500 to-cyan-500 animate-scale-x"></div>
            </div>

            {/* Enhanced subtitle */}
            <div className="space-y-4">
              <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl">
                ¿Tienes un proyecto en mente? Me especializo en crear soluciones digitales que impulsan el crecimiento
              </p>

              {/* Contact stats */}
              <div className="flex flex-wrap items-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-gradient-to-r from-emerald-500 to-green-600 rounded-full animate-pulse"></div>
                  <span className="text-gray-600 dark:text-gray-400">
                    <span className="font-semibold text-gray-800 dark:text-gray-200">Respuesta</span> en 24h
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full animate-pulse"></div>
                  <span className="text-gray-600 dark:text-gray-400">
                    <span className="font-semibold text-gray-800 dark:text-gray-200">Consulta</span> gratuita
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-gradient-to-r from-violet-500 to-purple-600 rounded-full animate-pulse"></div>
                  <span className="text-gray-600 dark:text-gray-400">
                    <span className="font-semibold text-gray-800 dark:text-gray-200">Ubicado</span> en México
                  </span>
                </div>
              </div>
            </div>
          </div>
        }
        subtitle=""
        className="relative z-10"
      >
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Contact methods grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Primary contact methods */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-8 bg-gradient-to-b from-emerald-500 to-green-600 rounded-full"></div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Métodos principales
                </h3>
              </div>

              {/* WhatsApp - Enhanced */}
              <a
                href={createWhatsAppLink("Hola Javier, me interesa discutir un proyecto contigo.")}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block p-6 bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white font-semibold rounded-2xl shadow-xl shadow-emerald-500/25 hover:shadow-2xl hover:shadow-emerald-500/40 transition-all duration-500 hover:scale-105 hover:-translate-y-2 overflow-hidden"
              >
                {/* Background effects */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-transparent to-white/10 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                <div className="absolute top-2 right-2 w-3 h-3 bg-white/30 rounded-full animate-pulse"></div>

                <div className="relative flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884"></path>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold mb-1">WhatsApp</h4>
                    <p className="text-white/90 text-sm">Respuesta inmediata • Disponible 9:00 - 18:00</p>
                  </div>
                  <div className="w-6 h-6 flex items-center justify-center">
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </a>

              {/* Email - Enhanced */}
              <a
                href={`mailto:${EMAIL}?subject=Consulta sobre proyecto&body=Hola Javier,%0A%0AEstoy interesado en discutir un proyecto contigo.%0A%0ADetalles del proyecto:%0A-%0A-%0A-%0A%0ASaludos.`}
                className="group relative block p-6 bg-white/80 dark:bg-gray-800/60 border border-gray-300/50 dark:border-gray-600/50 text-gray-700 dark:text-gray-300 font-semibold rounded-2xl hover:border-violet-400/50 dark:hover:border-violet-500/50 hover:bg-violet-50/80 dark:hover:bg-violet-950/20 hover:text-violet-700 dark:hover:text-violet-300 transition-all duration-500 hover:scale-105 hover:-translate-y-2 backdrop-blur-sm shadow-lg hover:shadow-xl overflow-hidden"
              >
                {/* Background effects */}
                <div className="absolute inset-0 bg-gradient-to-r from-violet-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-2 right-2 w-2 h-2 bg-violet-400/50 rounded-full animate-pulse"></div>

                <div className="relative flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-violet-100 to-purple-100 dark:from-violet-900/50 dark:to-purple-900/50 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6 text-violet-600 dark:text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold mb-1">Email profesional</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">{EMAIL}</p>
                  </div>
                  <div className="w-6 h-6 flex items-center justify-center">
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </a>
            </div>

            {/* Contact info panel */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-8 bg-gradient-to-b from-cyan-500 to-blue-600 rounded-full"></div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Información de contacto
                </h3>
              </div>

              <div className="p-6 bg-white/60 dark:bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-gray-200/50 dark:border-gray-700/50 shadow-lg space-y-6">
                {/* Personal info */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">Desarrollador</p>
                      <p className="text-gray-900 dark:text-white font-semibold">Javier López Camacho</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-emerald-100 to-green-100 dark:from-emerald-900/50 dark:to-green-900/50 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-emerald-600 dark:text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">Ubicación</p>
                      <p className="text-gray-900 dark:text-white font-semibold">San Juan del Río, México</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-900/50 dark:to-cyan-900/50 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">Horario</p>
                      <p className="text-gray-900 dark:text-white font-semibold">Lun - Vie, 9:00 - 18:00 CST</p>
                    </div>
                  </div>
                </div>

                {/* Specialties */}
                <div className="pt-4 border-t border-gray-200/50 dark:border-gray-700/50">
                  <p className="text-sm text-gray-600 dark:text-gray-400 font-medium mb-3">Especialidades:</p>
                  <div className="flex flex-wrap gap-2">
                    {["Desarrollo Web", "Apps Móviles", "APIs", "Consultoría"].map((specialty, index) => (
                      <span
                        key={specialty}
                        className="px-3 py-1.5 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 text-gray-700 dark:text-gray-300 text-xs font-medium rounded-full"
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* GitHub accounts section */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-1 h-8 bg-gradient-to-b from-violet-500 to-purple-600 rounded-full"></div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Perfiles de GitHub
              </h3>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {GITHUB_ACCOUNTS.map((account, index) => (
                <a
                  key={account}
                  href={`https://github.com/${account}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative p-6 bg-white/80 dark:bg-gray-800/60 border border-gray-300/50 dark:border-gray-600/50 text-gray-700 dark:text-gray-300 font-semibold rounded-2xl hover:border-violet-400/50 dark:hover:border-violet-500/50 hover:bg-violet-50/80 dark:hover:bg-violet-950/20 hover:text-violet-700 dark:hover:text-violet-300 transition-all duration-500 hover:scale-105 hover:-translate-y-1 backdrop-blur-sm shadow-lg hover:shadow-xl overflow-hidden"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  {/* Background effects */}
                  <div className="absolute inset-0 bg-gradient-to-r from-violet-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-2 right-2 w-2 h-2 bg-violet-400/50 rounded-full animate-pulse"></div>

                  <div className="relative flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-6 h-6 text-gray-600 dark:text-gray-400 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold">@{account}</h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">GitHub Profile</p>
                    </div>
                    <div className="w-6 h-6 flex items-center justify-center">
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Call to action section */}
          <div className="text-center py-12 bg-gradient-to-r from-emerald-50/50 via-transparent to-cyan-50/50 dark:from-emerald-950/20 dark:via-transparent dark:to-cyan-950/20 rounded-2xl border border-emerald-200/30 dark:border-emerald-700/30">
            <div className="space-y-6">
              <div className="relative inline-block">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  ¿Listo para comenzar tu proyecto?
                </h3>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-br from-emerald-400 to-green-500 rounded-full animate-pulse"></div>
              </div>

              <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Desde aplicaciones web hasta soluciones móviles.
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href={createWhatsAppLink("Hola Javier, quiero iniciar un proyecto contigo.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white font-semibold rounded-2xl shadow-xl shadow-emerald-500/25 hover:shadow-2xl hover:shadow-emerald-500/40 transition-all duration-300 hover:scale-105"
                >
                  Empezar proyecto
                </a>
                <a
                  href={`mailto:${EMAIL}?subject=Consulta gratuita&body=Hola Javier,%0A%0AMe gustaría una consulta gratuita para mi proyecto.`}
                  className="px-8 py-4 bg-white/90 dark:bg-gray-800/60 border border-gray-300/50 dark:border-gray-600/50 text-gray-700 dark:text-gray-300 font-semibold rounded-2xl hover:border-emerald-400/50 dark:hover:border-emerald-500/50 hover:bg-emerald-50/80 dark:hover:bg-emerald-950/20 transition-all duration-300 hover:scale-105"
                >
                  Consulta gratuita
                </a>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}