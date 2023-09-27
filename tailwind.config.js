/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brown: {
          600: "#1E1E1E",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        home: "url('/images/bg-home.png')",
        building: "url('/assets/building.svg')",
        std: "url('/assets/save-date.svg')",
        paperBird: "url('/assets/paper-bird.png')",
        ayat: "url('/assets/ayat.png')",
        storyOne: "url('/assets/story-1.png')",
        storyTwo: "url('/assets/story-2.png')",
        storyThree: "url('/assets/story-3.png')",
        keyboard: "url('/assets/keyboard.svg')",
        giftBox: "url('/assets/box-gift.svg')",
      },
      fontFamily: {
        libreCaslon: [
          "LibreCaslonText-Bold",
          "LibreCaslonText-Italic",
          "LibreCaslonText-Regular",
        ],
        libre: ["var(--font-libre)"],
        bethaine: ["var(--font-bethaine)"],
        playfair: ["var(--font-playfair)"],
      },
    },
  },
  plugins: [],
};
