import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Proposal-specific color tokens (only active inside .proposal-root where CSS vars are defined)
      colors: {
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        foreground: "hsl(var(--foreground))",
        background: "hsl(var(--background))",
        border: "hsl(var(--border))",
        muted: {
          foreground: "hsl(var(--muted-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
        },
      },
    },
  },
  plugins: [],
};
export default config;
