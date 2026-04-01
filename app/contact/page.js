// app/contact/page.js

"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { sileo } from "sileo";
import Section from "@/components/Section";
import { GITHUB_ACCOUNTS, LINKEDIN } from "@/data/links";
import { GitHub } from "@/components/icons/GitHub";
import { LinkedIn } from "@/components/icons/LinkedIn";

export default function ContactPage() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        sileo.success({
          title: '¡Mensaje enviado!',
          description: 'Te responderé lo antes posible. Gracias por contactarme.',
          duration: 5000,
        });

        //* Resetear el formulario
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        sileo.error({
          title: 'Error al enviar',
          description: data.error || 'Por favor intenta nuevamente.',
          duration: 5000,
        });
      }
    } catch (error) {
      console.error('Error:', error);
      sileo.error({
        title: 'Error de conexión',
        description: 'Verifica tu conexión a internet e intenta nuevamente.',
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50/50 to-emerald-50/30 dark:from-gray-900 dark:via-gray-800/50 dark:to-emerald-950/20 relative overflow-hidden">
      {/* Floating background orbs */}
      <div className="absolute top-20 left-10 w-80 h-80 bg-gradient-to-br from-emerald-200/20 to-green-300/20 dark:from-emerald-500/10 dark:to-green-600/10 rounded-full blur-3xl animate-pulse motion-reduce:animate-none"></div>
      <div className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-br from-violet-200/20 to-purple-300/20 dark:from-violet-500/10 dark:to-purple-600/10 rounded-full blur-3xl animate-pulse motion-reduce:animate-none"></div>
      <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-gradient-to-br from-cyan-200/20 to-blue-300/20 dark:from-cyan-500/10 dark:to-blue-600/10 rounded-full blur-3xl animate-pulse motion-reduce:animate-none"></div>

      {/* Pattern overlay */}
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

              {/* Animated underline */}
              <div className="absolute bottom-0 left-0 h-1 w-full origin-left scale-x-0 bg-gradient-to-r from-emerald-500 via-green-500 to-cyan-500 animate-scale-x"></div>
            </div>

            {/* Enhanced subtitle */}
            <div className="space-y-4">
              <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl">
                ¿Tienes un proyecto en mente? Me especializo en crear soluciones
                digitales que impulsan el crecimiento
              </p>

              {/* Contact stats */}
              <div className="flex flex-wrap items-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-gradient-to-r from-emerald-500 to-green-600 rounded-full animate-pulse"></div>
                  <span className="text-gray-600 dark:text-gray-400">
                    <span className="font-semibold text-gray-800 dark:text-gray-200">
                      Respuesta
                    </span>{" "}
                    en 24h
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full animate-pulse"></div>
                  <span className="text-gray-600 dark:text-gray-400">
                    <span className="font-semibold text-gray-800 dark:text-gray-200">
                      Consulta
                    </span>{" "}
                    gratuita
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-gradient-to-r from-violet-500 to-purple-600 rounded-full animate-pulse"></div>
                  <span className="text-gray-600 dark:text-gray-400">
                    <span className="font-semibold text-gray-800 dark:text-gray-200">
                      Ubicado
                    </span>{" "}
                    en México
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
          {/* Call to action section */}
          <motion.div
            className="text-center py-12 bg-gradient-to-r from-emerald-50/50 via-transparent to-cyan-50/50 dark:from-emerald-950/20 dark:via-transparent dark:to-cyan-950/20 rounded-2xl border border-emerald-200/30 dark:border-emerald-700/30"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-6">
              <div className="relative inline-block">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  ¿Listo para comenzar tu proyecto?
                </h3>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-br from-emerald-400 to-green-500 rounded-full animate-pulse"></div>
              </div>

              <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Disponible para proyectos freelance y contrataciones. Desde aplicaciones web hasta soluciones móviles.
              </p>
            </div>
          </motion.div>

          {/* Contact methods grid */}
          <motion.div
            className="grid lg:grid-cols-2 gap-8 items-start"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {/* Contact Form */}
            <div className="space-y-6 h-full flex flex-col">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-8 bg-gradient-to-b from-emerald-500 to-green-600 rounded-full"></div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Envíame un correo
                </h3>
              </div>

              {/* Card wrapper para el formulario */}
              <div className="flex-1 p-6 bg-white/60 dark:bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-gray-200/50 dark:border-gray-700/50 shadow-lg flex flex-col">
                <form onSubmit={handleSubmit} className="space-y-5 flex-1 flex flex-col">
                  {/* Name Field */}
                  <div className="group">
                    <label
                      htmlFor="name"
                      className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      <svg 
                        className="w-4 h-4 text-emerald-600 dark:text-emerald-400" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" 
                        />
                      </svg>
                      Nombre completo
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        disabled={isSubmitting}
                        className="w-full pl-11 pr-4 py-3 bg-white/80 dark:bg-gray-800/60 border-2 border-gray-300/50 dark:border-gray-600/50 rounded-xl focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400 focus:border-emerald-500 dark:focus:border-emerald-400 transition-all duration-300 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 disabled:opacity-50 disabled:cursor-not-allowed group-hover:border-gray-400 dark:group-hover:border-gray-500"
                        placeholder="Juan Pérez"
                      />
                      <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500 group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors">
                        <svg 
                          className="w-5 h-5" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={2} 
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" 
                          />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Email Field */}
                  <div className="group">
                    <label
                      htmlFor="email"
                      className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      <svg 
                        className="w-4 h-4 text-emerald-600 dark:text-emerald-400" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" 
                        />
                      </svg>
                      Correo electrónico
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        disabled={isSubmitting}
                        className="w-full pl-11 pr-4 py-3 bg-white/80 dark:bg-gray-800/60 border-2 border-gray-300/50 dark:border-gray-600/50 rounded-xl focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400 focus:border-emerald-500 dark:focus:border-emerald-400 transition-all duration-300 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 disabled:opacity-50 disabled:cursor-not-allowed group-hover:border-gray-400 dark:group-hover:border-gray-500"
                        placeholder="tu@email.com"
                      />
                      <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500 group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors">
                        <svg 
                          className="w-5 h-5" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={2} 
                            d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" 
                          />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Subject Field */}
                  <div className="group">
                    <label
                      htmlFor="subject"
                      className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      <svg 
                        className="w-4 h-4 text-emerald-600 dark:text-emerald-400" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" 
                        />
                      </svg>
                      Asunto
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        disabled={isSubmitting}
                        className="w-full pl-11 pr-4 py-3 bg-white/80 dark:bg-gray-800/60 border-2 border-gray-300/50 dark:border-gray-600/50 rounded-xl focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400 focus:border-emerald-500 dark:focus:border-emerald-400 transition-all duration-300 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 disabled:opacity-50 disabled:cursor-not-allowed group-hover:border-gray-400 dark:group-hover:border-gray-500"
                        placeholder="Consulta sobre proyecto"
                      />
                      <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500 group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors">
                        <svg 
                          className="w-5 h-5" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={2} 
                            d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" 
                          />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Message Field */}
                  <div className="flex-1 flex flex-col group">
                    <label
                      htmlFor="message"
                      className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      <svg 
                        className="w-4 h-4 text-emerald-600 dark:text-emerald-400" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" 
                        />
                      </svg>
                      Mensaje
                    </label>
                    <div className="relative flex-1 flex">
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        disabled={isSubmitting}
                        className="flex-1 w-full pl-11 pr-4 py-3 bg-white/80 dark:bg-gray-800/60 border-2 border-gray-300/50 dark:border-gray-600/50 rounded-xl focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400 focus:border-emerald-500 dark:focus:border-emerald-400 transition-all duration-300 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 resize-none disabled:opacity-50 disabled:cursor-not-allowed min-h-[120px] group-hover:border-gray-400 dark:group-hover:border-gray-500"
                        placeholder="Cuéntame sobre tu proyecto o idea..."
                      />
                      <div className="absolute left-3 top-3 text-gray-400 dark:text-gray-500 group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors">
                        <svg 
                          className="w-5 h-5" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={2} 
                            d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" 
                          />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group relative w-full p-4 bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white font-semibold rounded-xl shadow-xl shadow-emerald-500/25 hover:shadow-2xl hover:shadow-emerald-500/40 transition-all duration-500 hover:scale-[1.02] overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                  >
                    {/* Background effects */}
                    <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-transparent to-white/10 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                    
                    {/* Sparkle effect en las esquinas */}
                    <div className="absolute top-0 right-0 w-8 h-8 bg-white/20 rounded-full blur-xl group-hover:scale-150 transition-transform duration-500"></div>
                    <div className="absolute bottom-0 left-0 w-8 h-8 bg-white/20 rounded-full blur-xl group-hover:scale-150 transition-transform duration-500 delay-100"></div>

                    <div className="relative flex items-center justify-center gap-3">
                      {isSubmitting ? (
                        <>
                          <svg
                            className="w-5 h-5 animate-spin"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            />
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            />
                          </svg>
                          <span>Enviando...</span>
                        </>
                      ) : (
                        <>
                          <span>Enviar mensaje</span>
                          <svg
                            className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                            />
                          </svg>
                        </>
                      )}
                    </div>
                  </button>
                </form>
              </div>
            </div>

            {/* Contact info panel */}
            <div className="space-y-6 h-full flex flex-col">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-8 bg-gradient-to-b from-cyan-500 to-blue-600 rounded-full"></div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Información de contacto
                </h3>
              </div>

              <div className="flex-1 p-6 bg-white/60 dark:bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-gray-200/50 dark:border-gray-700/50 shadow-lg space-y-6 flex flex-col">
                <div className="space-y-4 flex-1">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                      <svg className="w-5 h-5 text-emerald-600 dark:text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                      <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">Horario</p>
                      <p className="text-gray-900 dark:text-white font-semibold">Lun - Sab, 9:00 - 18:00 CST</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-100 to-fuchsia-100 dark:from-purple-900/50 dark:to-fuchsia-900/50 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21h18M9 8h1m-1 4h1m4-4h1m-1 4h1M5 21V5a2 2 0 012-2h10a2 2 0 012 2v16"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">Modalidad</p>
                    <p className="text-gray-900 dark:text-white font-semibold">Remoto · Híbrido (según proyecto y ubicación)</p>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-200/50 dark:border-gray-700/50">
                  <p className="text-sm text-gray-600 dark:text-gray-400 font-medium mb-3">Especialidades:</p>
                  <div className="flex flex-wrap gap-2">
                    {["Desarrollo Web", "Apps Móviles", "APIs", "Consultoría", "UI/UX", "Bases de Datos"].map((specialty) => (
                      <span key={specialty} className="px-3 py-1.5 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 text-gray-700 dark:text-gray-300 text-xs font-medium rounded-full">
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>

                <a href={LINKEDIN.startsWith('http') ? LINKEDIN : `https://${LINKEDIN}`} target="_blank" rel="noopener noreferrer" className="group relative block p-6 bg-white/80 dark:bg-gray-800/60 border border-gray-300/50 dark:border-gray-600/50 text-gray-700 dark:text-gray-300 font-semibold rounded-2xl hover:border-blue-400/50 dark:hover:border-blue-500/50 hover:bg-blue-50/80 dark:hover:bg-blue-950/20 hover:text-blue-700 dark:hover:text-blue-300 transition-all duration-500 hover:scale-105 hover:-translate-y-2 backdrop-blur-sm shadow-lg hover:shadow-xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-900/50 dark:to-cyan-900/50 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <LinkedIn className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold mb-1">LinkedIn</h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">Perfil profesional</p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </motion.div>

          {/* GitHub accounts section */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="flex items-center gap-3">
              <div className="w-1 h-8 bg-gradient-to-b from-violet-500 to-purple-600 rounded-full"></div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Perfil de GitHub</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {GITHUB_ACCOUNTS.map((account) => (
                <a key={account} href={`https://github.com/${account}`} target="_blank" rel="noopener noreferrer" className="group relative p-6 bg-white/80 dark:bg-gray-800/60 border border-gray-300/50 dark:border-gray-600/50 text-gray-700 dark:text-gray-300 font-semibold rounded-2xl hover:border-violet-400/50 dark:hover:border-violet-500/50 hover:bg-violet-50/80 dark:hover:bg-violet-950/20 hover:text-violet-700 dark:hover:text-violet-300 transition-all duration-500 hover:scale-105 hover:-translate-y-1 backdrop-blur-sm shadow-lg hover:shadow-xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-violet-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <GitHub className="w-6 h-6 text-gray-600 dark:text-gray-400 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold">@{account}</h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">GitHub Profile</p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </Section>
    </div>
  );
}