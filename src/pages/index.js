import Head from "next/head";
import { useEffect } from "react";
import { useGlobalAudioPlayer } from "react-use-audio-player";

import BackgroundVideo from "@/components/background-video";
import { data } from "@/constants/ariefnabila";

export default function Home() {
  const { load } = useGlobalAudioPlayer();
  const { title } = data;

  useEffect(() => {
    load("/audio/soundtrack.mp3", {
      autoplay: true,
    });
  }, []);

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div>
        <BackgroundVideo />
      </div>
    </>
  );
}
