import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "nav-blue": "#75c8e5",
        "fundly-green": "#91cb55",
        "main-text": "#3d231c",
        "secondary-text": "#3d231c",
        footerBackground: "#282828",
      },
    },
  },
  plugins: [],
} satisfies Config;
