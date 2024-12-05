const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ["var(--font-baskerville)"],
        sans: ["var(--font-inter)"],
      },
      backgroundImage: {
        "gradient-radial":
          "radial-gradient(50% 50% at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        "fade-in": "fade-in 2.5s ease-in-out forwards",
        "fade-in-delay": "fade-in 4s ease-in-out forwards",
        title: "title 2.5s ease-out forwards",
        "fade-left": "fade-left 2.5s ease-in-out forwards",
        "fade-right": "fade-right 2.5s ease-in-out forwards",
        nav: "nav 2.5s ease-in-out forwards",
        navbar: "navbar 3.2s ease-in-out forwards",
        grow: "grow 2s cubic-bezier(.35,0,0,1) forwards",
      },
      keyframes: {
        "fade-in": {
          "0%": {
            opacity: "0%",
          },
          "75%": {
            opacity: "0%",
          },
          "100%": {
            opacity: "100%",
          },
        },
        "fade-in-delay": {
          "0%": {
            opacity: "0%",
          },
          "90%": {
            opacity: "0%",
          },
          "100%": {
            opacity: "100%",
          },
        },
        "fade-left": {
          "0%": {
            transform: "translateX(100%)",
            opacity: "0%",
          },

          "30%": {
            transform: "translateX(0%)",
            opacity: "100%",
          },
          "100%": {
            opacity: "0%",
          },
        },
        "fade-right": {
          "0%": {
            transform: "translateX(-100%)",
            opacity: "0%",
          },

          "30%": {
            transform: "translateX(0%)",
            opacity: "100%",
          },
          "100%": {
            opacity: "0%",
          },
        },
        title: {
          "0%": {
            "line-height": "0%",
            "letter-spacing": "0.25em",
            opacity: "0",
          },
          "25%": {
            "line-height": "0%",
            opacity: "0%",
          },
          "80%": {
            opacity: "100%",
          },

          "100%": {
            "line-height": "100%",
            opacity: "100%",
          },
        },
        nav: {
          "0%": {
            opacity: "0%",
          },
          "25%": {
            opacity: "0%",
          },
          "75%": {
            opacity: "0%",
          },
          "100%": {
            opacity: "100%",
          },
        },
        navbar: {
          "0%": {
            opacity: "0%",
          },
          "25%": {
            opacity: "0%",
          },
          "50%": {
            transform: "scaleY(0%)",
            opacity: "0%",
          },
          "100%": {
            transform: "scaleY(100%)",
            opacity: "100%",
          },
        },
        "fade-card-1": {
          "0%": {
            opacity: "0%",
          },
          "25%": {
            opacity: "0%",
          },
          "40%": {
            opacity: "100%",
          },
          "75%": {
            opacity: "100%",
          },
          "100%": {
            opacity: "100%",
          },
        },
        "fade-card-2": {
          "0%": {
            opacity: "0%",
          },
          "33%": {
            opacity: "0%",
          },
          "48%": {
            opacity: "100%",
          },
          "100%": {
            opacity: "100%",
          },
        },
        "fade-card-3": {
          "0%": {
            opacity: "0%",
          },
          "38%": {
            opacity: "0%",
          },
          "53%": {
            opacity: "100%",
          },
          "100%": {
            opacity: "100%",
          },
        },
        grow: {
          "0%": {
            "max-height": "0px",
          },
          // "60%": {
          //   "max-height": "",
          // },
          "100%": {
            "max-height": "65vh",
          },
        }
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))'
        }
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      }
    }
  },
  plugins: [
    require("tailwindcss-animate"),
    require('@codaworks/react-glow/tailwind'),
  ]
}
