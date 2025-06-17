/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components2/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brown: {
          600: "#1E1E1E",
        },
        gree: {
          600: "#507643",
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
        arsellVanilla: "url('/1/bg-front.png')",
        bgPrimary2: "url('/1/bg-primary.png')",
        bgPrimary21: "url('/1/bg21.png')",
        bgPrimary22: "url('/1/bg22.png')",
        bgPrimary23: "url('/1/bg23.png')",
        theDay: "url('/1/its-the-day-bg.jpg')",
      },
      fontFamily: {
        libreCaslon: [
          "LibreCaslonText-Bold",
          "LibreCaslonText-Italic",
          "LibreCaslonText-Regular",
        ],
        libre: ["var(--font-libre)"],
        bethaine: ["var(--font-bethaine)"],
        elwiss: ["var(--font-elwiss)"],
        playfair: ["var(--font-playfair)"],
        crimson: ["var(--font-crimson)"],
      },
    },
  },
  plugins: [],
};
