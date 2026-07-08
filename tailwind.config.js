/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      colors: {
        brand: {
          50:  "#f0f9ff",
          100: "#e0f2fe",
          400: "#38bdf8",
          500: "#0ea5e9",
          600: "#0284c7",
        },
        accent: {
          400: "#a78bfa",
          500: "#8b5cf6",
        },
        surface: {
          900: "#0b111e",
          800: "#111827",
          700: "#1e2d3d",
        },
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "glow-pulse": "glowPulse 3s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        glowPulse: {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "1" },
        },
      },
      backgroundImage: {
        "hero-gradient": "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(56,189,248,0.12) 0%, transparent 70%)",
      },
    },
  },
  plugins: [],
};

