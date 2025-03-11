/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit",
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        gabarito: ["Gabarito", "sans-serif"],
        thunder:["Thunder"]
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
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
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
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
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
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
    
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      transitionTimingFunction: {
        "custom-ease": "cubic-bezier(0.65, 0.05, 0.36, 1)",
      },
   
    },
    colors: {
      yellow: "#FFC506",
      red: "#C5261F",
      brown: "#BB6400",
      white: "#ffffff",
      offWhite: "#eeeeee",
      black: "#000000",
      grey:"#202020",
      gold:"#FFD475",
      "gold-900":"#C19535",
      "yellow-opacity": "rgba(255, 197, 6, 0.4)",
      "yellow-opacity0.8": "rgba(255, 197, 6, 0.8)",
      "yellow-opacity0.2": "rgba(255, 197, 6, 0.2)",
      "red-opacity0.2":"rgba(197, 38, 31, 0.6)"
    },
    screens: {
      xs: "0px",
      sm: "640px",
      md: "886px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      "3xl": "1700px",
      "4xl":"2000px"
    },
  },
  plugins: [require("tailwind-scrollbar"), require("tailwindcss-animate")],
};
