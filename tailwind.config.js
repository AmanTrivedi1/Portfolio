module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      primary: "Playfair Display",
      secondary: "Mulish",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1192px",
    },
    extend: {
      colors: {
        primary: "#040D12",
        grey: "#484B4B",
        text: "#5C8374",
        accent: "#EEF7F9",
      },
    },
  },
  plugins: [],
};
