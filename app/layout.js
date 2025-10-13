// app/layout.js
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/lib/theme";
import AntiTranslate from "@/components/AntiTranslate";

export const metadata = {
  title: "Javier – Portafolio",
  description: "Portafolio de Javier López: web, móvil, IoT.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" translate="no" className="notranslate" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="google" content="notranslate" />
        <meta httpEquiv="Content-Language" content="es" />
      </head>
      <body
        className="notranslate min-h-screen bg-white text-gray-900 dark:bg-black dark:text-white selection:bg-fuchsia-400/40"
        suppressHydrationWarning
      >
        {/* Bloqueo en runtime por si Chrome inyecta traducción después del render */}
        <AntiTranslate />

        <ThemeProvider>
          <Navbar />
          <main className="pt-16">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
