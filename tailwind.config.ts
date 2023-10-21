import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      primary: "Poppins",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1240px",
    },
    extend: {
      colors: {
        primary: "#101828",
        secondary: "#7F56D9",
      },
    },
  },
  plugins: [],
};
export default config;
