/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        "1/6-screen": "16.666667vh",
        "2/6-screen": "33.333333vh",
        "3/6-screen": "50vh",
        "4/6-screen": "66.666667vh",
        "5/6-screen": "83.333333vh",
      },
    },
  },
  plugins: [],
};
