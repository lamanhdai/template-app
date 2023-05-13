/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("postcss-import"),
    require("tailwindcss"),
    require("autoprefixer")
  ]
}

