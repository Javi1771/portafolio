// components/Navbar.jsx

"use client";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <>
      {/* Navbar - backdrop-blur solo en desktop */}
      <header className={`fixed top-0 inset-x-0 z-50 border-b border-gray-200/50 dark:border-violet-500/20 shadow-lg shadow-gray-900/10 dark:shadow-violet-500/10 ${isMobile ? "bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800" : "backdrop-blur-xl bg-white/80 dark:bg-black/20"}`}>
        {/* Gradient line - solo desktop */}
        {!isMobile && <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-violet-500/70 dark:via-violet-500/50 to-transparent animate-pulse"></div>}

        {/* Floating orbs - solo desktop */}
        {!isMobile && <div className="absolute top-0 left-10 w-32 h-16 bg-gradient-to-r from-violet-500/10 to-purple-500/10 rounded-full blur-2xl animate-pulse"></div>}
        {!isMobile && <div className="absolute top-0 right-20 w-40 h-16 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-2xl animate-pulse delay-1000"></div>}
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          {/* Enhanced Logo */}
          <Link href="/" className="group relative font-bold text-xl tracking-tight overflow-hidden">
            <div className="relative flex items-center gap-1">
              {/* Glowing background */}
              <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500/20 via-violet-500/20 to-pink-500/20 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Logo text with enhanced effects */}
              <span className="relative bg-gradient-to-r from-cyan-300 via-cyan-400 to-cyan-500 bg-clip-text text-transparent group-hover:from-cyan-200 group-hover:to-cyan-400 transition-all duration-500 drop-shadow-sm">
                Javier
              </span>
              <span className="relative bg-gradient-to-r from-pink-300 via-pink-400 to-pink-500 bg-clip-text text-transparent group-hover:from-pink-200 group-hover:to-pink-400 transition-all duration-500 drop-shadow-sm">
                Dev
              </span>
              
              {/* Decorative dots */}
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-gradient-to-r from-violet-400 to-purple-500 rounded-full opacity-60 group-hover:opacity-100 group-hover:scale-125 transition-all duration-300"></div>
              <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full opacity-40 group-hover:opacity-80 group-hover:scale-125 transition-all duration-300 delay-150"></div>
            </div>
            
            {/* Underline effect */}
            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-pink-400 group-hover:w-full transition-all duration-500"></div>
          </Link>

          {/* Enhanced Desktop Navigation */}
          <nav className="hidden md:flex gap-8 text-sm font-medium">
            {[
              { href: "/projects", text: "Proyectos", color: "from-violet-400 to-purple-500" },
              { href: "/experience", text: "Experiencia", color: "from-pink-400 to-rose-500" },
              { href: "/about", text: "Sobre mí", color: "from-cyan-400 to-blue-500" },
              { href: "/contact", text: "Contacto", color: "from-emerald-400 to-green-500" }
            ].map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                className="group relative px-4 py-2 text-gray-700 dark:text-white/80 hover:text-gray-900 dark:hover:text-white transition-all duration-300 hover:-translate-y-0.5"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Background glow on hover */}
                <div className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-10 rounded-lg transition-opacity duration-300`}></div>
                <div className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-5 rounded-lg blur-lg transition-opacity duration-300`}></div>
                
                {/* Text */}
                <span className="relative z-10 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300">
                  {item.text}
                </span>
                
                {/* Underline effect */}
                <div className={`absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r ${item.color} group-hover:w-full group-hover:left-0 transition-all duration-300`}></div>
                
                {/* Corner accent */}
                <div className={`absolute top-1 right-1 w-1 h-1 bg-gradient-to-r ${item.color} rounded-full opacity-0 group-hover:opacity-70 transition-opacity duration-300`}></div>
              </Link>
            ))}
          </nav>

          {/* Enhanced Right Section */}
          <div className="flex items-center gap-4">
            <ThemeToggle />
            
            {/* Enhanced Mobile Menu Button */}
            <button
              onClick={() => setOpen((o) => !o)}
              className="group md:hidden relative px-4 py-3 rounded-2xl bg-gray-200/60 dark:bg-gray-800/30 border border-gray-300/50 dark:border-gray-600/30 backdrop-blur-md hover:bg-gray-300/60 dark:hover:bg-gray-700/40 transition-all duration-300 hover:scale-105 overflow-hidden"
            >
              {/* Background gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-violet-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Animated hamburger icon */}
              <div className="relative w-5 h-4 flex flex-col justify-between">
                <span className={`block h-0.5 bg-gray-700 dark:bg-white rounded-full transition-all duration-300 ${
                  open ? 'rotate-45 translate-y-1.5' : ''
                }`}></span>
                <span className={`block h-0.5 bg-gray-700 dark:bg-white rounded-full transition-all duration-300 ${
                  open ? 'opacity-0' : ''
                }`}></span>
                <span className={`block h-0.5 bg-gray-700 dark:bg-white rounded-full transition-all duration-300 ${
                  open ? '-rotate-45 -translate-y-1.5' : ''
                }`}></span>
              </div>
              
              {/* Ripple effect */}
              <div className="absolute inset-0 rounded-2xl bg-gray-900/10 dark:bg-white/10 opacity-0 group-active:opacity-100 group-active:scale-95 transition-all duration-200"></div>
            </button>
          </div>
        </div>
      </header>

      {/* Overlay para cerrar menú al pulsar fuera */}
      {open && (
        <div
          className="fixed inset-0 z-30 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Enhanced Mobile Menu */}
      <div className={`fixed top-[73px] inset-x-0 z-40 md:hidden transition-all duration-500 ${
        open 
          ? 'opacity-100 translate-y-0 pointer-events-auto' 
          : 'opacity-0 -translate-y-4 pointer-events-none'
      }`}>
        {/* Backdrop */}
        <div className="absolute inset-0 bg-white dark:bg-gray-900"></div>

        {/* Menu content */}
        <div className="relative border-t border-gray-200/50 dark:border-violet-500/20 bg-white/98 dark:bg-gray-900/98 shadow-xl">
          {/* Decorative gradient line */}
          <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-violet-500/50 to-transparent"></div>
          
          <div className="max-w-7xl mx-auto px-4 py-6">
            <div className="flex flex-col gap-1">
              {[
                { href: "/projects", text: "Proyectos", color: "from-violet-400 to-purple-500" },
                { href: "/experience", text: "Experiencia", color: "from-pink-400 to-rose-500" },
                { href: "/about", text: "Sobre mí", color: "from-cyan-400 to-blue-500" },
                { href: "/contact", text: "Contacto", color: "from-emerald-400 to-green-500" }
              ].map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="group relative flex items-center gap-4 px-6 py-4 text-gray-700 dark:text-white/90 hover:text-gray-900 dark:hover:text-white transition-all duration-300 rounded-xl hover:bg-gray-100/60 dark:hover:bg-white/10 dark:hover:bg-gray-800/30"
                  style={{ 
                    animationDelay: `${index * 100}ms`,
                    animation: open ? 'slideInLeft 0.5s ease-out forwards' : 'none'
                  }}
                >
                  {/* Background gradient on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300`}></div>
                  
                  {/* Text */}
                  <span className="relative font-medium group-hover:translate-x-1 transition-transform duration-300">
                    {item.text}
                  </span>
                  
                  {/* Arrow indicator */}
                  <svg 
                    className="ml-auto w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  
                  {/* Side accent */}
                  <div className={`absolute left-0 top-1/2 -translate-y-1/2 w-1 h-0 bg-gradient-to-b ${item.color} group-hover:h-8 transition-all duration-300 rounded-r-full`}></div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-2px); }
        }
        
        /* Enhanced hover effects */
        .group:hover {
          animation: float 2s ease-in-out infinite;
        }
      `}</style>
    </>
  );
}