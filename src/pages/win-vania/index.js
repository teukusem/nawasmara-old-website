import Head from "next/head";
import { useState } from "react";
import { useRouter } from "next/router";
import { useGlobalAudioPlayer } from "react-use-audio-player";

import { data } from "@/constants/meta";
import LandingPage from "@/components2/landing-page";
import FirstSection from "@/components2/sections/first";
import FooterSection from "@/components2/footer";
import dynamic from "next/dynamic";

const SecondSection = dynamic(import("@/components2/sections/second"), {
  ssr: false,
});

export default function Home() {
  const router = useRouter();
  const { load } = useGlobalAudioPlayer();
  const [isOpenInvitation, setOpenInvitation] = useState(false);
  const { title } = data;

  const recieverName = router.query.to || "-";

  function openInvitation() {
    load("/audio/arsellvanilla.mp3", {
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
          to={router.query.to}
          handleOpenInvitations={openInvitation}
          recieverName={recieverName}
        />
      ) : (
        <>
          <FirstSection />
          <SecondSection />
          <FooterSection />
        </>
      )}
    </>
  );
}
