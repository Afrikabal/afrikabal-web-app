import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
     fontFamily: {
                pacifico: ['Pacifico', 'cursive'],
                lora: ['Lora', 'serif'],
            },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      screens: {
        "rs":"900px",
      }
    },
  },
  plugins: [
    
  ],
};
export default config;
