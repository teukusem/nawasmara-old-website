import localFont from "next/font/local";
import { Playfair_Display, Elsie_Swash_Caps } from "next/font/google";

import "@/styles/globals.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

// const elsieSwashCaps = Elsie_Swash_Caps({
//   weight: ["400", "900"],
//   display: "swap",  
//   subsets: ["latin"],
//   variable: "--font-elwiss",
// });

const libre = localFont({
  src: [
    {
      path: "../../public/fonts/LibreCaslonText-Bold.ttf",
      weight: "bold",
      style: "normal",
    },
    {
      path: "../../public/fonts/LibreCaslonText-Italic.ttf",
      weight: "300",
      style: "italic",
    },
    {
      path: "../../public/fonts/LibreCaslonText-Regular.ttf",
      weight: "300",
      style: "normal",
    },
  ],
  variable: "--font-libre",
});

const fonts = localFont({
  src: [
    {
      path: "../../public/fonts/Bethaine.ttf",
      weight: "300",
      style: "normal",
    },
  ],
  variable: "--font-bethaine",
});


const elsieSwashCaps = localFont({
  src: [
    {
      path: "../../public/fonts/ElsieSwashCaps-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/ElsieSwashCaps-Black.ttf",
      weight: "bold",
      style: "normal",
    },
  ],
  variable: "--font-elwiss",
});

export default function App({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({ duration: 2200 });
  });
  return (
    <main
      className={`${fonts.variable} ${playfair.variable} ${libre.variable} ${elsieSwashCaps.variable}`}
    >
      <Component {...pageProps} />;
    </main>
  );
}
