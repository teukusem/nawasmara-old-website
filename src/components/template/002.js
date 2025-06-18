import Head from "next/head";
import { useState } from "react";
import { useRouter } from "next/router";
import { useGlobalAudioPlayer } from "react-use-audio-player";

//import { data } from "@/constants/meta";
import LandingPage from "@/components2/landing-page";
import FirstSection from "@/components2/sections/first";
import FooterSection from "@/components2/footer";
import dynamic from "next/dynamic";

const SecondSection = dynamic(import("@/components2/sections/second"), {
  ssr: false,
});

const dummyData = {
  meta: {
  title: "Naufal & Liza | Nawasmara.com",
  description:
    "Hai, Kamu diundang pada acara pesta pernikahan kami - Pernikahan Naufal &amp; Liza - Sabtu, 16 Juli 2025",
  },
  title: 'Naufal & Liza',
  imageTogether: '/naufal-liza/first-content.png',
  weddingDate: '2025-07-16',
  displayDate: 'July 16, 2025',
  verse: {
    reference: 'QS. Ar-Rum: 21',
    text: `“Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu berpasang-pasangan dari jenismu sendiri, supaya kamu merasa tenang dan tentram kepadanya, dan dijadikan-Nya diantaramu rasa kasih dan sayang. Sesungguhnya pada yang demikian itu benar-benar terdapat tanda-tanda bagi kaum yang berfikir."`
  },
  invitationText: 'God creates everything beautiful in His time. Beautiful when He brings together and grows affection, We cordially invite you to the wedding:',
  bride: {
    name: 'Liza',
    photo: '/naufal-liza/liza.png',
    parents: 'Daughter of Mr. and Mrs. ...',
    instagram: {
      username: 'liza.ig',
      url: 'https://instagram.com/liza'
    }
  },
  groom: {
    name: 'Naufal',
    photo: '/naufal-liza/naufal.png',
    parents: 'Son of Mr. and Mrs. ...',
    instagram: {
      username: 'naufal.ig',
      url: 'https://instagram.com/naufal.ig'
    }
  },
  events: {
    holyMatrimony: {
      title: 'Marriage ceremony',
      datetime: 'Saturday, July 16 2025, 09.30 - 10.45 WIB'
    },
    reception: {
      title: 'Reception',
      datetime: 'Saturday, July 16 2025, 12.00 - 14.00 WIB'
    }
  },
  venue: {
    name: 'Auditorium Prof. Ali Hasymi UIN Ar-Raniry',
    address: 'Full venue address here',
    mapUrl: 'https://maps.app.goo.gl/JXiPRSkvoGmmWbby7'
  },
  gallery: {
    photo: '/naufal-liza/our-group.png'
  },
  video: {
    src: '/naufal-liza/naufal-liza.mp4',
    caption: 'Naufal & Liza Prewedding'
  },
  gift: {
    message: 'Your custom gift message here',
    bank: {
      name: 'BANK BCA',
      accountNumber: '1234567890',
      accountOwner: 'Liza'
    }
  },
  googleCalendarUrl: 'https://calendar.google.com/calendar/...'
}

export default function Template002() {
  const router = useRouter();
  const { load } = useGlobalAudioPlayer();
  const [isOpenInvitation, setOpenInvitation] = useState(false);
  const { title } = data;

  const recieverName = router.query.to || "-";
  const invitationId = router.query.invitationId || "-";

  function openInvitation() {
    load("/audio/arsellvanilla.mp3", {
      autoplay: true,
    });
    setOpenInvitation(true);
  }

  return (
    <>
      <Head>
        <title>{dummyData.meta}</title>
      </Head>
      {!isOpenInvitation ? (
        <LandingPage
          to={router.query.to}
          handleOpenInvitations={openInvitation}
          recieverName={recieverName}
          title={dummyData.title}
        />
      ) : (
        <>
          <FirstSection title={dummyData.title} imageTogether={dummyData.imageTogether} />
          <SecondSection data={dummyData}/>
          <FooterSection title={dummyData.title} uuid={invitationId} />
        </>
      )}
    </>
  );
}
