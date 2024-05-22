import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        "3xl": "1700px",
        "4xl": "1920px",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-gradient":
          "linear-gradient(90deg, #DCD6C8 0%, rgba(220, 214, 200, 0) 100%)",
        "impressum-datenschutz-header":
          "url(../public/assets/images/impressum-datenschutz/header.png)",
        "kontakt-header": "url(../public/assets/images/kontakt/header.png)",
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
      padding: {
        "7.5": "1.875rem",
      },
    },
  },
  plugins: [
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    function ({ addComponents }) {
      addComponents({
        ".container": {
          width: "100%",
          paddingLeft: "1rem",
          paddingRight: "1rem",
          marginLeft: "auto",
          marginRight: "auto",
          "@screen sm": {
            maxWidth: "100%",
            paddingLeft: "2rem",
            paddingRight: "2rem",
          },
          "@screen md": {
            maxWidth: "100%",
          },
          "@screen lg": {
            maxWidth: "100%",
          },
          "@screen xl": {
            maxWidth: "1280px",
          },
          "@screen 2xl": {
            maxWidth: "1536px",
          },
          "@screen 4xl": {
            maxWidth: "1920px",
            paddingLeft: "11.25rem",
            paddingRight: "11.25rem",
          },
        },
      });
    },
  ],
};
export default config;
