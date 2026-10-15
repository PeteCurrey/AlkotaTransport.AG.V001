import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        alkota: {
          abyss: "#080A0E",
          plate: "#0E1218",
          graphite: "#141A23",
          border: "rgba(255, 255, 255, 0.08)",
          "border-active": "rgba(0, 240, 255, 0.3)",
          cyan: "#00F0FF",
          "cyan-glow": "rgba(0, 240, 255, 0.2)",
          amber: "#FF5500",
          "amber-glow": "rgba(255, 85, 0, 0.25)",
          emerald: "#10B981",
          slate: {
            100: "#F1F5F9",
            200: "#E2E8F0",
            300: "#CBD5E1",
            400: "#94A3B8",
            500: "#64748B",
            600: "#475569",
            700: "#334155",
            800: "#1E293B",
            900: "#0F172A",
          },
        },
      },
      fontFamily: {
        sans: [
          "var(--font-inter)",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
        display: [
          "var(--font-space-grotesk)",
          "var(--font-inter)",
          "sans-serif",
        ],
        mono: [
          "var(--font-jetbrains-mono)",
          "SFMono-Regular",
          "Menlo",
          "Monaco",
          "Consolas",
          "monospace",
        ],
      },
      backgroundImage: {
        "carbon-grid":
          "linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)",
        "radial-spotlight":
          "radial-gradient(circle at 50% -20%, rgba(0, 240, 255, 0.12), transparent 70%)",
        "radial-amber":
          "radial-gradient(circle at 80% 20%, rgba(255, 85, 0, 0.08), transparent 60%)",
      },
      boxShadow: {
        "telemetry-cyan": "0 0 25px -5px rgba(0, 240, 255, 0.3)",
        "telemetry-amber": "0 0 25px -5px rgba(255, 85, 0, 0.35)",
        "card-glass": "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
      },
    },
  },
  plugins: [],
};

export default config;
