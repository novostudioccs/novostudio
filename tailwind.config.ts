import type { Config } from "tailwindcss";

// Todos los valores salen de design-system/novo-studio/MASTER.md (vía variables en app/globals.css).
const token = (name: string) => `rgb(var(${name}) / <alpha-value>)`;

const config: Config = {
  content: ["./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      primary: token("--color-primary"),
      "on-primary": token("--color-on-primary"),
      accent: token("--color-accent"),
      "on-accent": token("--color-on-accent"),
      muted: token("--color-muted"),
      background: token("--color-background"),
      foreground: token("--color-foreground"),
      border: token("--color-border"),
      destructive: token("--color-destructive"),
    },
    fontFamily: {
      display: ["var(--font-display)", "sans-serif"],
      sans: ["var(--font-body)", "sans-serif"],
    },
    extend: {
      borderRadius: { DEFAULT: "var(--radius)" },
      maxWidth: { page: "90rem" },
    },
  },
  plugins: [],
};
export default config;
