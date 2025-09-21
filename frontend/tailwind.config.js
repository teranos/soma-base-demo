/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        soma: {
          teal: "#22E1FF",
          lime: "#B4FF3B",
          slate: "#101426"
        }
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        mono: ["IBM Plex Mono", "monospace"]
      },
      boxShadow: {
        glow: "0 0 30px rgba(34, 225, 255, 0.18)"
      }
    }
  },
  safelist: ["text-soma-teal", "text-soma-lime", "bg-soma-teal", "bg-soma-lime"],
  plugins: []
};