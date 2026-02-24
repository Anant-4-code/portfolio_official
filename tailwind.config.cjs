/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "#020617",
        surface: {
          DEFAULT: "rgba(15,23,42,0.9)",
          soft: "rgba(15,23,42,0.7)"
        },
        accent: {
          mint: "#4DAE91",
          mintSoft: "#A5F3C6"
        }
      },
      boxShadow: {
        "soft-glow": "0 0 40px rgba(77, 174, 145, 0.35)"
      },
      transitionTimingFunction: {
        "lab-ease": "cubic-bezier(0.4, 0, 0.2, 1)"
      },
      transitionDuration: {
        250: "250ms",
        350: "350ms",
        450: "450ms"
      },
      keyframes: {
        gradientShift: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "200% 50%" }
        },
        blobDrift: {
          "0%": { transform: "translate3d(0,0,0) scale(1)" },
          "50%": { transform: "translate3d(15px,-20px,0) scale(1.05)" },
          "100%": { transform: "translate3d(0,0,0) scale(1)" }
        },
        particleFloat: {
          "0%": { transform: "translate3d(0,0,0)" },
          "50%": { transform: "translate3d(0,-12px,0)" },
          "100%": { transform: "translate3d(0,0,0)" }
        },
        cursorOuter: {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1)" }
        }
      },
      animation: {
        gradientShift: "gradientShift 6s linear infinite",
        blobDriftSlow: "blobDrift 26s ease-in-out infinite",
        particleFloatSlow: "particleFloat 22s ease-in-out infinite"
      }
    }
  },
  plugins: []
};
