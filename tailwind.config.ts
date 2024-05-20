import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#2621C5",
        secondary: "#322E2D",
        secondaryLight: "#707070",
        secondaryDark: "#34302D",
        white: "#FFFFFF",
        black: "#000000",
        bone: "#DCD6C8",
        boneFade: "#DCD6C800",
        navBackground: "#00000029",
        slate: "#F0F1F1",
      },
    },
  },
  plugins: [],
};
export default config;
