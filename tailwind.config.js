/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Poppins", "sans"], // Add Poppins to the default sans-serif fonts
    },
    extend: {
      fontSize: {
        "70px": "10px",
        "16px": "16px",
        "14px": "14px",
        "18px": "18px",
        logo: "40px",
        "13px": "13px",
        "20px": "20px",
        "28px": "28px",
        "24px": "24px",
        "30px": "30px",
      },
      colors: {
        whiteColor: "#FFFFFF",
        brandRed: "#FF0000",
        blackColor: "#000000",
        brandYellow: "#FFF112",
        offCoffee: "#EFC5A7",
        brandOrange: "#F6BD60",
        brandGreen: "#84A59D",
        lightGrey: "#F2F2F2",
        deepGrey: "#CEC1B4",
      },
    },
  },
  daisyui: {
    base: false,
  },
  plugins: [require("tailwind-scrollbar-hide"), require("daisyui")],
};
