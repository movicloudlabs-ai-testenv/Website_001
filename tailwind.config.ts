import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1280px",
      },
    },

    extend: {
      fontFamily: {
        sans: ["DM Sans", "sans-serif"],
        heading: ["Outfit", "sans-serif"],
        display: ["Playfair Display", "serif"],
      },

      colors: {
        border: "#B0E0E6",
        input: "#F8FAFC",
        ring: "#00CED1",
        background: "#FFFFFF",
        foreground: "#001F3F",
        primary: { DEFAULT: "#00CED1", foreground: "#FFFFFF" },
        secondary: { DEFAULT: "#99CC00", foreground: "#FFFFFF" },
        destructive: { DEFAULT: "#1E3A8A", foreground: "#FFFFFF" },
        muted: { DEFAULT: "#E0F7FA", foreground: "#003B5C" },
        accent: { DEFAULT: "#0077B6", foreground: "#FFFFFF" },
        popover: { DEFAULT: "#FFFFFF", foreground: "#001F3F" },
        card: { DEFAULT: "#FFFFFF", foreground: "#001F3F" },
      },

      backgroundImage: {
        "gradient-primary": "linear-gradient(to right, #00CED1, #0077B6)",
        "gradient-dark": "linear-gradient(to right, #E0F7FA, #B0E0E6)",
        "gradient-hero": "linear-gradient(135deg, #00CED1, #0077B6)",
      },

      boxShadow: {
        glow: "0 0 25px #00CED133",
        card: "0 4px 20px #0077B633",
      },

      borderRadius: {
        lg: "12px",
        md: "10px",
        sm: "8px",
      },

      keyframes: {
        "accordion-down": { from: { height: "0" }, to: { height: "var(--radix-accordion-content-height)" } },
        "accordion-up": { from: { height: "var(--radix-accordion-content-height)" }, to: { height: "0" } },
        "fade-in": { from: { opacity: "0", transform: "translateY(20px)" }, to: { opacity: "1", transform: "translateY(0)" } },
        "fade-in-up": { from: { opacity: "0", transform: "translateY(40px)" }, to: { opacity: "1", transform: "translateY(0)" } },
        "scale-in": { from: { opacity: "0", transform: "scale(0.9)" }, to: { opacity: "1", transform: "scale(1)" } },
        "slide-in-right": { from: { transform: "translateX(100%)" }, to: { transform: "translateX(0)" } },
        glow: { "0%, 100%": { boxShadow: "0 0 20px #00CED133" }, "50%": { boxShadow: "0 0 40px #00CED166" } },
        wiggle: { "0%, 100%": { transform: "rotate(-3deg)" }, "50%": { transform: "rotate(3deg)" } },
        tada: { "0%": { transform: "scale(1)" }, "10%, 20%": { transform: "scale(0.9) rotate(-3deg)" }, "30%, 50%, 70%, 90%": { transform: "scale(1.1) rotate(3deg)" }, "40%, 60%, 80%": { transform: "scale(1.1) rotate(-3deg)" }, "100%": { transform: "scale(1) rotate(0)" } },
        "slide-right": { "0%": { transform: "translateX(0)" }, "100%": { transform: "translateX(5px)" } },
        "pulse-scale": { "0%, 100%": { transform: "scale(1)" }, "50%": { transform: "scale(1.1)" } },
        shimmer: { "0%": { transform: "translateX(-100%)" }, "100%": { transform: "translateX(100%)" } },
      },

      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.6s ease-out",
        "fade-in-up": "fade-in-up 0.8s ease-out",
        "scale-in": "scale-in 0.5s ease-out",
        "slide-in-right": "slide-in-right 0.4s ease-out",
        glow: "glow 3s ease-in-out infinite",
        wiggle: "wiggle 1s ease-in-out infinite",
        tada: "tada 1s ease-in-out",
        "slide-right": "slide-right 0.5s ease-in-out alternate infinite",
        "pulse-scale": "pulse-scale 2s ease-in-out infinite",
        shimmer: "shimmer 3s linear infinite",
      },
    },
  },

  plugins: [require("tailwindcss-animate")],
} satisfies Config;
