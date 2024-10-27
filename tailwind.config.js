/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./public/*.html"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      borderColor: {
        input: "#E5E7EB",
        primary: "#E5E7EB",
        
      },
      colors: {
        primary: {
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1A56DB",
          800: "#1e40af",
          900: "#1e3a8a",
          950: "#172554",
        },
        success: {
          light: "#DEF7EC", // Light Success
          DEFAULT: "#057A55", // Default Success (Green)
          dark: "#0E9F6E", // Dark Success
        },
        error: {
          light: "#fee2e2", // Light Error
          DEFAULT: "#ef4444", // Default Error (Red)
          dark: "#991b1b", // Dark Error
        },
        warning: {
          light: "#fef3c7", // Light Warning
          DEFAULT: "#f59e0b", // Default Warning (Yellow)
          dark: "#92400e", // Dark Warning
        },
        info: {
          light: "#dbeafe", // Light Info
          DEFAULT: "#3b82f6", // Default Info (Blue)
          dark: "#1e3a8a", // Dark Info
        },
        blue: {
          50: "#EBF5FF",
          100: "#E1EFFE",
          200: "#C3DDFD",
          300: "#A4CAFE",
          400: "#76A9FA",
          500: "#3F83F8",
          600: "#1C64F2",
          700: "#1A56DB",
          800: "#1E429F",
          900: "#233876",
        },
        gray: {
          50: "#f9fafb",
          100: "#f3f4f6",
          200: "#e5e7eb",
          300: "#d1d5db",
          400: "#9ca3af",
          500: "#6b7280",
          600: "#4b5563",
          700: "#374151",
          800: "#1f2937",
          900: "#111827",
        },
      },
    },
    fontFamily: {
      inter: ["Inter", "sans-serif"],
    },
  },
  plugins: [],
};
