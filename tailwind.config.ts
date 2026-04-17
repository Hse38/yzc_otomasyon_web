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
        brand: {
          950: "#060d1a",
          900: "#0a1628",
          800: "#0f2040",
          700: "#1a3a6b",
          500: "#2d8cff",
          400: "#5aa3ff",
          100: "#e6f0ff",
        },
        gray: {
          100: "#f0f4f9",
          200: "#dde5f0",
        },
      },
      borderRadius: {
        card: "12px",
        panel: "16px",
      },
      maxWidth: {
        layout: "1400px",
      },
    },
  },
  plugins: [],
};

export default config;
