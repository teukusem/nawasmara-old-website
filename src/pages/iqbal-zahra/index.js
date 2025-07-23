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
  title: 'Iqbal & Zahra',
  imageTogether: '/iqbal-zahra/front-image.png',
  weddingDate: '2025-09-06',
  displayDate: '6 September 2025',
  verse: {
    reference: 'QS. Ar-Rum: 21',
    text: `“Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu berpasang-pasangan dari jenismu sendiri, supaya kamu merasa tenang dan tentram kepadanya, dan dijadikan-Nya diantaramu rasa kasih dan sayang. Sesungguhnya pada yang demikian itu benar-benar terdapat tanda-tanda bagi kaum yang berfikir."`
  },
  invitationText: 'God creates everything beautiful in His time. Beautiful when He brings together and grows affection, We cordially invite you to the wedding',
  bride: {
    name: 'Raudhiatuz Zahra, S.Psi',
    photo: '/iqbal-zahra/zahra.png',
    parents: 'Putri dari Bapak Herman (Alm) dan Ibu Dra.  Mailisnar',
    instagram: {
      username: '@lizamelyaa',
      url: 'https://instagram.com/lizamelyaa'
    }
  },
  groom: {
    name: 'Muhammad Iqbal, S.E',
    photo: '/iqbal-zahra/iqbal.png',
    parents: 'Putra dari Bapak Drs. Syarifuddin (Alm) dan Ibu Syukriyah',
    instagram: {
      username: '@noopz_',
      url: 'https://instagram.com/noopz_'
    }
  },
  events: {
    holyMatrimony: {
      title: 'Marriage ceremony',
      datetime: 'Saturday, 06 September 2025 11.00 WIB'
    },
    reception: {
      title: 'Tueng Dara Baro',
      datetime: 'Saturday, 06 September 2025 11.00 WIB',
    }
  },
  venue: {
    name: 'Kediaman Lintoe Baroe',
    address: 'Dusun Tgk. Syeh, Desa Lheu Blang',
    mapUrl: 'https://maps.app.goo.gl/WPHaJCTAYfiHdHGLA?g_st=aw'
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
    message: 'Your blessing and presence at our wedding is enough for us. But if you want to give a gift, we provide Digital Envelopes to make it easier for you. Thank You',
    flowerBoard: {
      whatsappNumber: '+6282246914922',
      displayNumber: '0822-4691-4922',
      message: "Pengirim: \nUcapan:"
    },
    bank: [
      {
        name: 'Bank Mandiri',
        accountNumber: '1190007655010',
        accountOwner: 'NAUFAL AHSANUL MUHAMMAD'
      },
      {
        name: 'Bank BCA',
        accountNumber: '5460385654',
        accountOwner: 'NAUFAL AHSANUL MUHAMMAD'
      },
       {
        name: 'Bank BSI',
        accountNumber: '5688568856',
        accountOwner: 'NAUFAL AHSANUL MUHAMMAD'
      }
    ]
  },
  footer: {
    parents: {
      groom: 'Kel. Bapak Drs.Muhammad,MM <br /> &  Ibu Isnaniah Ali Hasyim, SKM',
      bride: 'Kel. Bapak Ir. Muhammad Kasim <br /> & Ibu Riana S.H.'
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
  
  // Update gift message with sender name
  const updatedDummyData = {
    ...dummyData,
    gift: {
      ...dummyData.gift,
      flowerBoard: {
        ...dummyData.gift.flowerBoard,
        message: `Pengirim: ${router.query.to || ""}\nUcapan:`
      }
    }
  };

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
          title={updatedDummyData.title}
          uuid={invitationId}
        />
      ) : (
        <>
          <FirstSection title={updatedDummyData.title} imageTogether={updatedDummyData.imageTogether} />
          <SecondSection data={updatedDummyData}/>
          {/* <div 
            key="gallery-section"
            className="force-visible"
            style={{ 
              opacity: 1, 
              transform: 'none',
              visibility: 'visible'
            }}
          >
            <GallerySection data={updatedDummyData} showVideo={true} />
          </div> */}
          <FooterSection title={updatedDummyData.title} uuid={invitationId} data={updatedDummyData} />
        </>
      )}
    </>
  );
}
