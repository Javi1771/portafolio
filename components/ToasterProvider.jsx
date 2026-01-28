// components/ToasterProvider.jsx
"use client";

import { Toaster } from "sonner";
import { useTheme } from "@/lib/theme";

export default function ToasterProvider() {
  const { isDark } = useTheme();

  return (
    <Toaster 
      position="bottom-right"
      expand={false}
      richColors={false}
      closeButton
      duration={4000}
      theme={isDark ? "dark" : "light"} 
      toastOptions={{
        unstyled: false,
        classNames: {
          toast: 'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg',
          title: 'text-gray-900 dark:text-white font-semibold text-sm',
          description: 'text-gray-600 dark:text-gray-400 text-xs',
          actionButton: 'bg-emerald-500 text-white',
          cancelButton: 'bg-gray-200 dark:bg-gray-700',
          closeButton: 'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-400 hover:text-gray-900 dark:hover:text-white',
          error: 'border-red-200 dark:border-red-800',
          success: 'border-emerald-200 dark:border-emerald-800',
          warning: 'border-yellow-200 dark:border-yellow-800',
          info: 'border-blue-200 dark:border-blue-800',
        },
        style: {
          padding: '12px 16px',
          gap: '8px',
          fontSize: '14px',
          maxWidth: '350px',
        },
      }}
    />
  );
}