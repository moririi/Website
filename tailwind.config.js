const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");
 
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        courgette: ["Courgette", "cursive"], // Add Courgette font
        extralight: ["Inter", "sans-serif"], // Extralight weight font
      },
      fontWeight: {
        extralight: "200", // Extralight weight
      },
      animation: {
        marquee: "marquee 20s linear infinite",
        "marquee-reverse": "marquee-reverse 20s linear infinite",
        aurora: "aurora 60s linear infinite",
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0%)" },
          to: { transform: "translateX(-33.33%)" }, // ✅ Moves smoothly, NO RESET
        },
        "marquee-reverse": {
          from: { transform: "translateX(-33.33%)" },
          to: { transform: "translateX(0%)" },
        },
        aurora: {
          from: {
            backgroundPosition: "50% 50%, 50% 50%",
          },
          to: {
            backgroundPosition: "350% 50%, 350% 50%",
          },
        },
      },
    },
  },
  plugins: [addVariablesForColors],
};
 
// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
 
  addBase({
    ":root": newVars,
  });
}