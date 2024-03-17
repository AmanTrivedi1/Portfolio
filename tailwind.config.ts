import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryBlack: "#0e100f",
        primaryCream: "#FFFFE3",
        primaryBorder: "#323228",
        primaryPurple: "#A374FF",
        primaryOrange: "#FFD074",
        primaryCyan: "#17F1D1",
        primaryBlackCard: "#191917",
        primaryPink: "#FEC5FB",
        primaryDarkOrange: "#FF8709",
        primaryBlue: "#00B5CF",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
