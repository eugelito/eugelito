/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      spacing: {
        19: "4.75rem",
      },
      fontFamily: {
        sans: [
          '"Plus Jakarta Sans"',
          "system-ui",
          "-apple-system",
          "sans-serif",
        ],
      },
      boxShadow: {
        card: "0 8px 30px rgba(36, 58, 77, 0.08), 0 1px 0 rgba(255,255,255,0.6) inset",
        "card-hover":
          "0 24px 48px rgba(36, 58, 77, 0.12), 0 0 0 1px rgba(20, 184, 166, 0.08)",
        nav:
          "0 8px 32px rgba(36, 58, 77, 0.14), 0 2px 12px rgba(36, 58, 77, 0.09), 0 1px 0 rgba(255,255,255,0.85) inset",
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};
