import { Html, Head, Main, NextScript } from "next/document";
import { data } from "@/constants/ariefnabila";

export default function Document() {
  const { title, description } = data;

  return (
    <Html lang="en">
      <Head>
        <meta name="title" content={title} />
        <meta name="description" content={description} />
        {/*
         <!-- Chrome, Firefox OS and Opera -->
        <meta name="theme-color" content="#cccccc" />
        <!-- Windows Phone (microsoft) -->
        <meta name="msapplication-navbutton-color" content="#cccccc" />
         <!-- iOS Safari (apple) -->
        <meta name="apple-mobile-web-app-status-bar-style" content="#cccccc" /> */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Nawasmara.com" />
        <meta property="og:url" content="https://nawasmara.com" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta
          property="og:image"
          content="https://www.nawasmara.com/assets/cover2.png"
        />
        <meta property="og:locale" content="in_ID" />
        <meta
          property="twitter:card"
          content="https://www.nawasmara.com/assets/cover2.png"
        />
        <meta property="twitter:url" content="https://nawasmara.com" />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
        <meta
          property="twitter:image"
          content="https://www.nawasmara.com/assets/cover2.png"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
