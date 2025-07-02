import Head from "next/head";
import { useState } from "react";
import { useRouter } from "next/router";
import { useGlobalAudioPlayer } from "react-use-audio-player";

import { data } from "@/constants/meta";
import LandingPage from "@/components2/landing-page";
import FirstSection from "@/components2/sections/first";
import FooterSection from "@/components2/footer";
import GallerySection from "@/components2/sections/gallery";
import dynamic from "next/dynamic";

const SecondSection = dynamic(import("@/components2/sections/second"), {
  ssr: false,
});

const dummyData = {
  title: 'Naufal & Liza',
  imageTogether: '/naufal-liza/first-content.png',
  weddingDate: '2025-07-20',
  displayDate: '20 juli 2025',
  verse: {
    reference: 'QS. Ar-Rum: 21',
    text: `“Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu berpasang-pasangan dari jenismu sendiri, supaya kamu merasa tenang dan tentram kepadanya, dan dijadikan-Nya diantaramu rasa kasih dan sayang. Sesungguhnya pada yang demikian itu benar-benar terdapat tanda-tanda bagi kaum yang berfikir."`
  },
  invitationText: 'God creates everything beautiful in His time. Beautiful when He brings together and grows affection, We cordially invite you to the wedding:',
  bride: {
    name: 'Liza Melya S.E M.M',
    photo: '/naufal-liza/liza.png',
    parents: 'Anak dari Bapak Ir. Muhammad Kasim dan Ibu Riana S.H.',
    instagram: {
      username: '@lizamelyaa',
      url: 'https://instagram.com/lizamelyaa'
    }
  },
  groom: {
    name: 'Naufal ahsanul muhammad B.Ec',
    photo: '/naufal-liza/naufal.png',
    parents: 'Anak dari Bapak Drs.Muhammad,MM <br /> dan Ibu Isnaniah Ali Hasyim, SKM',
    instagram: {
      username: '@noopz_',
      url: 'https://instagram.com/noopz_'
    }
  },
  events: {
    holyMatrimony: {
      title: 'Marriage ceremony',
      datetime: 'Sunday, 20 juli 2025 10.00 WIB - 15.00 WIB'
    },
    reception: {
      title: 'Intat Linto',
      datetime: 'Sunday, 20 juli 2025 10.00 WIB - 15.00 WIB',
    }
  },
  venue: {
    name: 'Auditorium Prof. Ali Hasymi UIN Ar-Raniry',
    address: 'Kopelma Darussalam, Kec. Syiah Kuala, Kota Banda Aceh, Aceh 24352',
    mapUrl: 'https://maps.app.goo.gl/JXiPRSkvoGmmWbby7'
  },
  gallery: {
    images: [
      '/naufal-liza/gallery-1.png',
      '/naufal-liza/gallery-2.jpeg',
      '/naufal-liza/gallery-3.jpeg',
      '/naufal-liza/gallery-4.jpeg',
      '/naufal-liza/gallery-5.jpeg',
      '/naufal-liza/gallery-6.jpeg',
      '/naufal-liza/gallery-7.jpeg',
      '/naufal-liza/gallery-8.jpeg',
      '/naufal-liza/gallery-9.jpeg',
      '/naufal-liza/gallery-10.jpeg',
      '/naufal-liza/gallery-11.jpeg',
      '/naufal-liza/gallery-12.jpeg',
      '/naufal-liza/gallery-13.jpeg',
      '/naufal-liza/gallery-14.jpeg',
      '/naufal-liza/gallery-15.jpeg'
    ]
  },
  video: {
    src: '/naufal-liza/naufal-liza.mp4',
    caption: 'Naufal & Liza Prewedding'
  },
  gift: {
    message: 'Your custom gift message here',
    bank: {
      name: 'Bank Mandiri',
      accountNumber: '1190007655010',
      accountOwner: 'NAUFAL AHSANUL MUHAM'
    }
  },
  googleCalendarUrl: 'https://calendar.google.com/calendar/...'
}

export default function Home() {
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
        <title>{title}</title>
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
          <div 
            key="gallery-section"
            className="force-visible"
            style={{ 
              opacity: 1, 
              transform: 'none',
              visibility: 'visible'
            }}
          >
            <GallerySection data={dummyData} showVideo={true} />
          </div>
          <FooterSection title={dummyData.title} uuid={invitationId} />
        </>
      )}
    </>
  );
}
