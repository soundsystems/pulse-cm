/** @type {import('tailwindcss').Config} */
module.exports = {

  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'baby':'#818D9A',
        'amethyst': '#8E819A',
        'oyster':'#9A8E81',
        'rose': '#9A8281',
        'cream': '#FEF8DD',
        'lightrose': '#FCF6F9',
          'sage': {
            100: '#AAB89F',
            200:  '#9FB8A0',
            300:  '#829B83',
        

      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
};
