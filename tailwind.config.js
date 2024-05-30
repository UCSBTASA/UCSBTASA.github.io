module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      sm: "0.8rem",
      md: "0.9rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.563rem",
      "3xl": "1.953rem",
      "4xl": "2.441rem",
      "5xl": "3.052rem",
    },
    screen: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        pink: "rgb(254, 191, 207)",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        bebas: ["Bebas Neue", "sans-serif"],
        synonym: ["Synonym", "sans-serif"],
        amulya: ["Amulya", "sans-serif"],
        satoshi: ["Satoshi", "sans-serif"],
        raleway: ["Raleway", "sans-serif"],
        jacques: ['"Jacques Francois"', 'serif'], 
      },
    },
  },
  plugins: [],
};
