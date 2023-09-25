import localFont from "next/font/local";
import { Playfair_Display } from "next/font/google";

import "@/styles/globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
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

export default function App({ Component, pageProps }) {
  return (
    <main className={`${fonts.variable} ${playfair.variable}`}>
      <Component {...pageProps} />;
    </main>
  );
}
