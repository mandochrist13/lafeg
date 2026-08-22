import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    // Couleurs primaires (vert FEG)
    'bg-primary', 'bg-primary-100', 'bg-primary-700', 'bg-primary-800', 'bg-primary-900', 'bg-primary-950',
    'text-primary', 'text-primary-100', 'text-primary-700', 'text-primary-800', 'text-primary-900', 'text-primary-950',
    'border-primary', 'border-primary-800', 'hover:bg-primary', 'hover:bg-primary-800', 'hover:text-primary',
    // Couleurs bronze
    'bg-bronze-base', 'bg-bronze-light', 'bg-bronze-lighter', 'bg-bronze-medium',
    'text-bronze-base', 'text-bronze-light', 'text-bronze-lighter', 'text-bronze-medium',
    'border-bronze-base', 'border-bronze-light', 'hover:text-bronze-light', 'hover:bg-bronze-light',
    'from-bronze-lighter', 'to-bronze-medium', 'hover:from-bronze-lighter', 'hover:to-bronze-medium',
    // Animation shimmer
    'animate-shimmer',
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['var(--font-source-serif)', 'serif'],
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        // Vert FEG - Couleur dominante
        primary: {
          DEFAULT: "#063d21",
          950: "#063d21", // Vert logo principal
          900: "#063a1e", // Variante guide numérique
          800: "#005528", // Vert foncé hover
          700: "#0a7537", // Vert moyen
          100: "#e6f4ed", // Vert très clair (fonds)
        },
        // Bronze/Doré - Accent secondaire (usage ponctuel)
        bronze: {
          DEFAULT: "#b0b08b",
          base: "#b0b08b",
          light: "#dcdaa4",
          lighter: "#e6e4b4",
          medium: "#c7c7a0",
        },
        // Neutres
        neutral: {
          white: "#ffffff",
          "off-white": "#fafafa",
          900: "#1a1a1a",
          700: "#333333",
          500: "#666666",
          300: "#d4d4d4",
          100: "#f5f5f5",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
         shimmer: {
  				from: {
  					backgroundPosition: '0 0'
  				},
  				to: {
  					backgroundPosition: '-200% 0'
  				}
  			}
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        shimmer: 'shimmer 8s ease-in-out infinite',
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
}
export default config
