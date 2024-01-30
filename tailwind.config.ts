import config from "./node_modules/next/config";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1F305E", // Dark Blue
          orange: "#FFA500", // Orange
          green: "#008000", // Green
        },
        secondary: "#282828", // Secondary (Dark Grey)
        "gray-200": "#EAECF0", // Light Grey
        "gray-300": "#D0D5DD", // Medium Grey
        "gray-500": "#667085", // Slate Grey
        "gray-600": "#475467", // Steel Grey
        "gray-700": "#344054", // Charcoal Grey
        "gray-900": "#101828", // Deep Grey
        "white-100": "#F4F4F4", // Light White
        "white-200": "#EDF0F8", // Soft White
        "black-100": "#3D4258", // Soft Black
        "neutral-black": "#23263B", // Neutral Black
      },
      boxShadow: {
        xs: "0px 1px 2px 0px rgba(16, 24, 40, 0.05)",
      },
      maxWidth: {
        "10xl": "1440px",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        spaceGrotesk: ["Space Grotesk", "sans-serif"],
      },
      borderRadius: {
        10: "10px",
      },
    },
  },
  plugins: [],
};
export default config;
