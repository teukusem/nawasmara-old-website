import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  const title = "Arief & Nabila - Nawasmara.id";
  const description =
    "Hai, Kamu diundang pada acara pesta pernikahan kami - Pernikahan Arief &amp; Nabila - Sabtu, 09 Oktober 2023";
  return (
    <Html lang="en">
      <Head>
        <title>{title}</title>
        <meta name="title" content={title} />
        <meta name="description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Nawasmara.id" />
        <meta property="og:url" content="https://nawasmara.com" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta
          property="og:image"
          content="https://katsudoto.id/media/public/25047/19302/cover/thumb_md_191560_1692244782_1000_1000.jpeg"
        />
        <meta property="og:locale" content="in_ID" />
        <meta
          property="twitter:card"
          content="https://katsudoto.id/media/public/25047/19302/cover/thumb_md_191560_1692244782_1000_1000.jpeg"
        />
        <meta property="twitter:url" content="https://nawasmara.com" />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
        <meta
          property="twitter:image"
          content="https://katsudoto.id/media/public/25047/19302/cover/thumb_md_191560_1692244782_1000_1000.jpeg"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
