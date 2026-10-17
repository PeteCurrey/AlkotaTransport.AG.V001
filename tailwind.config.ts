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
          obsidian: "#080808",
          surface: "#0F0F12",
          elevated: "#16161A",
          border: "#1C1C20",
          "border-subtle": "#161619",
          "border-strong": "#2A2A30",
          ivory: "#F7F6F3",
          silver: "#949490",
          muted: "#5A5A56",
          accent: "#1D6AF5",
          "accent-hover": "#2B77FF",
          "accent-dim": "rgba(29, 106, 245, 0.08)",
          // Aliases for backward compatibility during component migration
          abyss: "#080808",
          plate: "#0F0F12",
          graphite: "#16161A",
          cyan: "#1D6AF5",
          "cyan-glow": "rgba(29, 106, 245, 0.15)",
          amber: "#1D6AF5",
          "amber-glow": "rgba(29, 106, 245, 0.15)",
          emerald: "#22C55E",
          slate: {
            100: "#F7F6F3",
            200: "#E5E5E3",
            300: "#C2C2BE",
            400: "#949490",
            500: "#6B6B67",
            600: "#4A4A46",
            700: "#2E2E2B",
            800: "#1A1A18",
            900: "#0F0F0E",
          },
        },
      },
      fontFamily: {
        display: [
          "var(--font-cormorant)",
          "Cormorant Garamond",
          "Georgia",
          "serif",
        ],
        sans: [
          "var(--font-inter)",
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
        mono: [
          "var(--font-jetbrains-mono)",
          "JetBrains Mono",
          "SFMono-Regular",
          "Menlo",
          "Monaco",
          "Consolas",
          "monospace",
        ],
      },
      backgroundImage: {
        "studio-radial":
          "radial-gradient(circle at 50% 20%, rgba(29, 106, 245, 0.04), transparent 75%)",
        "radial-spotlight":
          "radial-gradient(circle at 50% -20%, rgba(29, 106, 245, 0.06), transparent 70%)",
      },
      boxShadow: {
        "telemetry-cyan": "0 0 20px -5px rgba(29, 106, 245, 0.2)",
        "telemetry-amber": "0 0 20px -5px rgba(29, 106, 245, 0.2)",
        "subtle": "0 2px 8px 0 rgba(0, 0, 0, 0.4)",
        "accent-glow": "0 4px 20px -2px rgba(29, 106, 245, 0.25)",
      },
    },
  },
  plugins: [],
};

export default config;
