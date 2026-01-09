"use client";
import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext({ isDark: true, toggle: () => {} });

export function ThemeProvider({ children }) {
  //* Inicializar con null para evitar flash durante SSR
  const [isDark, setIsDark] = useState(null);

  //? Primer useEffect: Detectar tema inicial (solo client-side)
  useEffect(() => {
    //* Verificar si hay tema guardado en localStorage
    const savedTheme = localStorage.getItem("theme");
    
    if (savedTheme) {
      //* Si existe, usar el guardado
      setIsDark(savedTheme === "dark");
    } else {
      //! Si no existe, detectar preferencia del sistema
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setIsDark(prefersDark);
    }
  }, []);

  //? Segundo useEffect: Aplicar el tema cuando cambie
  useEffect(() => {
    if (isDark === null) return; //! Evitar aplicar antes de inicializar

    const root = document.documentElement;
    if (isDark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }

    //* Guardar en localStorage
    try {
      localStorage.setItem("theme", isDark ? "dark" : "light");
    } catch (error) {
      console.error("Error saving theme to localStorage:", error);
    }
  }, [isDark]);

  //? Listener para cambios en preferencias del sistema (opcional pero recomendado)
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    
    const handleChange = (e) => {
      //! Solo actualizar si no hay tema guardado manualmente
      const savedTheme = localStorage.getItem("theme");
      if (!savedTheme) {
        setIsDark(e.matches);
      }
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const toggle = () => setIsDark((v) => !v);

  //! Evitar renderizar hasta que se determine el tema inicial
  if (isDark === null) {
    return null; 
  }

  return (
    <ThemeContext.Provider value={{ isDark, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}