/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        outfit: "Outfit",
        young: "Young-Serif",
      },
      colors: {
        "nutmeg":"hsl(14, 45%, 36%)",
        "raspberry":"hsl(332, 51%, 32%)",
        "white":"sl(0, 0%, 100%)",
        "rose":"hsl(330, 100%, 98%)",
        "eggshell":"hsl(30, 54%, 90%)",
        "lightGrey":"hsl(30, 18%, 87%)",
        "brown":" hsl(30, 10%, 34%)",
        "charcoal":" hsl(24, 5%, 18%)"
      },
      fontSize: {
        "fs":"16px"
      },
      fontWeight: {
        "fw-400":400,
        "fw-600":600,
        "fw-700":700
      }
    },
  },
  plugins: [require("tailwindcss")],
};
