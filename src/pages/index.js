import Head from "next/head";
import { useState } from "react";
import { useRouter } from "next/router";
import { useGlobalAudioPlayer } from "react-use-audio-player";

import { data } from "@/constants/ariefnabila";
import LandingPage from "@/components/landing-page";
import FirstSection from "@/components/sections/first";
import SecondSection from "@/components/sections/second";

export default function Home() {
  const router = useRouter();
  const { load } = useGlobalAudioPlayer();
  const [isOpenInvitation, setOpenInvitation] = useState(false);
  const { title } = data;

  const recieverName = router.query.to || "Rijalul";

  function openInvitation() {
    load("/audio/soundtrack.mp3", {
      autoplay: true,
    });
    setOpenInvitation(true);
  }

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      {!isOpenInvitation ? (
        <LandingPage
          handleOpenInvitations={openInvitation}
          recieverName={recieverName}
        />
      ) : (
        <>
          <FirstSection />
          <SecondSection />
        </>
      )}
    </>
  );
}
