import type { Config } from "tailwindcss";

export default {
  mode: 'jit',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container:{
        screens:{
          xs:"375px",
          sm:"640px",
          md:"768px",
          lg:"1024px",
          xl:"1140px",
          "2xl":"1140px"
        }
      },
      colors: {
        background:"#FCFCFC",
        green: "#39DB4A",
        darkGreen:"#90BD95",
        lightGreen:"#C1F1C6",
        red:"#FF6868",
        sectionBg:"#EDEAEA",
        input:"#B0BAC3",
        gray:"#4A4A4A",
        filterButton:"#EDFFEF"
      },
      fontFamily:{
        poppins:["Poppins", "serif"],
        inter:["Inter", "serif"],
        lexend:["Lexend", "serif"]
      }
    },
  },
  plugins: [],
} satisfies Config;
