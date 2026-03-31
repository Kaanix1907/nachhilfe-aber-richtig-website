import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#25abd6",
        secondary: "#655c9e",
        accent: "#00aa00",
        dark: "#444444",
      },
      fontFamily: {
        heading: ["BioRhyme", "serif"],
        body: ["Cabin", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
