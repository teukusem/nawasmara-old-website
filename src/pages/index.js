import Head from "next/head";
import { useEffect } from "react";
import { useGlobalAudioPlayer } from "react-use-audio-player";

import BackgroundVideo from "@/components/background-video";
import { data } from "@/constants/ariefnabila";

export default function Home() {
  const { load } = useGlobalAudioPlayer();
  const { title } = data;

  useEffect(() => {
    const timer = setTimeout(() => {
      load("/audio/soundtrack.mp3", {
        autoplay: true,
      });
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div>
        <BackgroundVideo id="backgroundMusic" />
      </div>
    </>
  );
}
