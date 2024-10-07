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
                poppins: ['Poppins', 'sans-serif'],
                lora: ['Lora', 'serif'],
            },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      screens: {
        "rs":"900px",
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '0.2' },
          '50%': { opacity: '1', fontWeight: 'bold' },
        },
      },
      animation: {
        blink1: 'blink 1.4s infinite 0.2s',
        blink2: 'blink 1.4s infinite 0.4s',
        blink3: 'blink 1.4s infinite 0.6s',
      },
    },
  },
  plugins: [
    
  ],
};
export default config;
