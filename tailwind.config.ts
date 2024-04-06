import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      space: ["Space Mono", "sans-serif"],
    },
    fontSize: {
      "title-lg": ["15.2rem", "1.2"],
      title: ["7rem", "1.2"],
      "head-lg": ["4.8rem", "1.2"],
      head: ["4.8rem", "1.2"],
      "h2-lg": ["3rem", "1.2"],
      h2: ["1.5rem", "1.2"],
      "p-lg": ["1.5rem", "1.2"],
      p: ["1.2rem", "1.2"],
    },
    colors: {
      background: "#FFFBF1",
      white: "#fff",
      red: "#ff0000",
      blue: "#0000ff",
      green: "#00ff00",
      stone: "#a8a29e",
      slate: "#FDF3DE",
      dark: "#0f0f0f"
    },
    spacing: {
      0: "0",
      1: "0.4rem",
      2: "0.8rem",
      4: "1.6rem",
      5: "2rem",
      8: "3.2rem",
      12: "4.8rem",
      16: "6.4rem",
      20: "8rem",
      24: "9.6rem",
      32: "12.8rem",
      38: "15.2rem",
      48: "19.2rem",
      64: "25.6rem",
      100: "40rem",
    }
  },
  plugins: [],
};
export default config;
