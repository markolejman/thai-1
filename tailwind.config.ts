import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand palette
        "bright-snow": "#F8F9FA",
        platinum: "#E9ECEF",
        "pale-slate-light": "#CED4DA",
        "alabaster-grey": "#DEE2E6",
        "pale-slate": "#ADB5BD",
        // Thai accent
        "thai-gold": "#C9A84C",
        "thai-red": "#9B2335",
        "thai-dark": "#1A1A1A",
        "thai-text": "#2D2D2D",
      },
      fontFamily: {
        mono: ["Roboto Mono", "monospace"],
        sans: ["Roboto", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "3px",
        sm: "2px",
        md: "3px",
        lg: "4px",
      },
    },
  },
  plugins: [],
};

export default config;
