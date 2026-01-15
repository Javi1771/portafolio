// app/layout.js
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/lib/theme";
import AntiTranslate from "@/components/AntiTranslate";

//* Métricas gratis de Vercel
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata = {
  title: "Javier – Portafolio",
  description: "Portafolio de Javier López: Ingeniero Desarrollador Full-Stack y Móvil",
  //* Favicons / PWA / Apple
  icons: {
    icon: [
      { url: "/favicon.ico" },
      //{ url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      //{ url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
    other: [{ rel: "mask-icon", url: "/safari-pinned-tab.svg", color: "#000000" }],
  },
  // manifest: "/site.webmanifest",
  // themeColor: [
  //   { media: "(prefers-color-scheme: light)", color: "#ffffff" },
  //   { media: "(prefers-color-scheme: dark)", color: "#000000" },
  // ],
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="es"
      translate="no"
      className="notranslate"
      suppressHydrationWarning
    >
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
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

        {/* 👇 Métricas de Vercel (gratis) */}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
