/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '360px',
        // => @media (min-width: 640px) { ... }

        'sm': '768px',
        // => @media (min-width: 768px) { ... }
        'md': '1024px',
        'lg': '1280px',
        // => @media (min-width: 1024px) { ... }

        'xl': '1440px',
        // => @media (min-width: 1280px) { ... }

        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        yellow: '#D4B99E',
      },
      extend: {
        fontFamily: {
          inter: ['Inter', 'sans-serif'],
        },
        fontWeight: {
          light: 400,
          bold: 700,
          extrabold: 800,
        },
      },
    },
  },
  plugins: [],
};
