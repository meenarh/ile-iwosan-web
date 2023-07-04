/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      'primary': '#F5F5F5',
      'blue': '#016FEB',
      'black': '#1E1E1E',
      'grey': '#8A8A8A',
      'white': '#FFFFFF',
      'gray': '#6E6E6E',
      'light-gray': '#FFFFFFCC',
      'deep-gray': '#565656',
      'orange': '#E18A31'
    },
    fontFamily: {
      sans: ["Satoshi", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
