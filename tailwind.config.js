const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    // your existing config
    extend: {
      colors: {
        'primary-500': '#FCD167',
        'primary-600': '#CD0300',
        'secondary-500': '#FFB620',
        'off-white': '#D0DFFF',
        'text-color': '#FAEBD7',
        'red': '#FF5A5A',
        'dark-1': '#000000',
        'dark-2': '#121417',
        'dark-3': '#101012',
        'dark-4': '#1F1F22',
        'light-1': '#FFFFFF',
        'light-2': '#FAEBD7',
        'light-3': '#7878A3',
        'light-4': '#5C5C7B',
        'highlight-dark': 'rgba(0, 0, 0, .5)',
      },
      screens: {
        'xs': '480px',

      },
      width: {
        '420': '420px',
        '465': '465px',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],

      },
      keyframes: {
        aurora: {
          from: {
            backgroundPosition: "50% 50%, 50% 50%",
          },
          to: {
            backgroundPosition: "350% 50%, 350% 50%",
          },
        },
        meteor: {
          "0%": { transform: "rotate(215deg) translateX(0)", opacity: "1" },
          "70%": { opacity: "1" },
          "100%": {
            transform: "rotate(215deg) translateX(-500px)",
            opacity: "0",
          },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        aurora: "aurora 60s linear infinite",
        first: "moveVertical 30s ease infinite",
        second: "moveInCircle 20s reverse infinite",
        third: "moveInCircle 40s linear infinite",
        fourth: "moveHorizontal 40s ease infinite",
        fifth: "moveInCircle 20s ease infinite",
        "meteor-effect": "meteor 5s linear infinite",
      },
    },
  },
  plugins: [require('tailwindcss-animate'), addVariablesForColors],
};

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
 
  addBase({
    ":root": newVars,
  });
}