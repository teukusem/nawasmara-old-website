/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import { useCountdown } from "@/hooks/useCountdown";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

import { useGlobalAudioPlayer } from "react-use-audio-player";

const VideoPlayer = ({ src, width, height, onPlay, onPause }) => {
  useEffect(() => {
    const videoElement = document.getElementById("video-player"); // Add an id attribute to the video element

    // Event listener for the "play" event
    const handlePlay = () => {
      if (onPlay && typeof onPlay === "function") {
        onPlay();
      }
    };

    // Event listener for the "pause" event
    const handlePause = () => {
      if (onPause && typeof onPause === "function") {
        onPause();
      }
    };

    // Add event listeners for the "play" and "pause" events
    videoElement.addEventListener("play", handlePlay);
    videoElement.addEventListener("pause", handlePause);

    // Clean up the event listeners when the component unmounts
    return () => {
      videoElement.removeEventListener("play", handlePlay);
      videoElement.removeEventListener("pause", handlePause);
    };
  }, [onPlay, onPause]);

  return (
    <video id="video-player" width={width} height={height} controls>
      <source src={src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default function SecondSection({ data }) {
  const { togglePlayPause } = useGlobalAudioPlayer();

  const [days, hours, minutes, seconds] = useCountdown(data?.weddingDate || "2023-12-16");
  const [showGift, setShowGift] = useState(false);
  const [isCopied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState("transfer");

  const handleVideoPause = () => {
    togglePlayPause();
  };

  const handleVideoPlay = () => {
    togglePlayPause();
  };

  return (
    <>
      <div className="">
        {/* date */}
        <div
          data-aos="fade-up"
          className="flex justify-center items-center py-4 md:px-16"
        >
          <img src="/1/small-leaf.svg" alt="small-leaf" />
          <span className="font-crimson text-center text-[#507554] text-[18px]s">
            {data?.displayDate || "December 16, 2023"}
          </span>
          <img
            src="/1/small-leaf.svg"
            alt="small-leaf"
            className="rotate-180"
          />
        </div>

        {/* ayat */}
        <div  data-aos="fade-up" className="flex items-center justify-center flex-col px-10 bg-[#3C5E50] py-10">
          <div
            data-aos="fade-down"
            className="flex flex-col justify-center items-center"
          >
            <span className="text-white text-[16px] font-libre">
              {data?.verse?.reference || "1 Corinthians 13 : 7"}
            </span>
            <span className="text-white text-[12px] font-libre pt-2 text-center leading-6">
              "{data?.verse?.text || "Love never gives up, never lose faith, is always helpful, and endures through every circumstance"}"
            </span>
          </div>
        </div>

        {/*   person 1   */}
        <div className="flex flex-col relative bg-[#F2EDEB] text-[#504533] bg-bgPrimary22 bg-cover bg-no-repeat">
          <div className="w-full">
            <img src="/1/daun-atas.png" alt="daun" className="w-full" />
          </div>
          <div className="relative px-8">
            <div className="md:px-16">
              <p
                data-aos="fade-down"
                className="font-libre text-[#504533] text-[12px] p-4 text-center leading-6"
              >
                {data?.invitationText || "God creates everything beautiful in His time. Beautiful when He brings together and grows affection, We cordially invite you to the wedding:"}
              </p>
            </div>
            <img
              data-aos="zoom-in"
              data-aos-delay="500"
              src={data?.bride?.photo || "/1/vania.png"}
              alt={data?.bride?.name || "bride"}
              className="w-full"
            />
            <div className="flex justify-center">
              <h1
                data-aos="fade-down"
                className="absolute bottom-[10px] text-[#507554] text-4xl font-elwiss text-center"
              >
                {data?.bride?.name || "Vania Natali"}
              </h1>
              <p className="font-libre absolute bottom-[-40px] px-[80px] text-center text-[#B6968B] text-[12px]">
                {data?.bride?.parents || "Only daughter the late (†) Mr. Lie Thian Kie and Lioe Kim Djin"}
              </p>
              <a
                target="_blank"
                data-aos="fade-up"
                href={data?.bride?.instagram?.url || "https://instagram.com/ms.vanili"}
                className="flex justify-center absolute bottom-[-70px] px-24"
              >
                <Image src="/assets/ig.svg" alt="ig" width={12} height={20} />
                <span className="text-center text-[#B6968B] font-spanlayfair text-[12px] ml-[5px]">
                  {data?.bride?.instagram?.username || "ms.vanili"}
                </span>
              </a>
            </div>
          </div>
          <h1
            data-aos="fade-up"
            className="z-10 text-[#507554] text-6xl font-elwiss text-center pt-[150px]"
          >
            &
          </h1>
        </div>

        {/*   person 2   */}
        <div className="flex flex-col relative p-8 bg-[#F2EDEB] text-[#504533] bg-bgPrimary23 bg-cover bg-no-repeat h-[600px] top-[-4px] justify-center">
          <div className="relative top-[-50px]">
            <img
              data-aos="zoom-in"
              data-aos-delay="500"
              src={data?.groom?.photo || "/1/win.png"}
              alt={data?.groom?.name || "groom"}
              className="w-full"
            />
            <div className="flex justify-center">
              <h1
                data-aos="fade-down"
                className="absolute bottom-[10px] text-[#507554] text-4xl font-elwiss text-center"
              >
                {data?.groom?.name || "Win Iskandar"}
              </h1>
              <p className="font-libre absolute bottom-[-40px] px-[80px] text-center text-[#B6968B] text-[12px]">
                {data?.groom?.parents || "First son of Mr. Iskandar Teluand mother Tan Tjun lan"}
              </p>

              <a
                target="_blank"
                data-aos="fade-up"
                href={data?.groom?.instagram?.url || "https://instagram.com/win.rz"}
                className="flex justify-center absolute bottom-[-70px] px-24"
              >
                <Image src="/assets/ig.svg" alt="ig" width={12} height={20} />
                <span className="text-center text-[#B6968B] font-spanlayfair text-[12px] ml-[5px]">
                  {data?.groom?.instagram?.username || "win.rz"}
                </span>
              </a>
            </div>
          </div>
        </div>

        <div className="relative w-full">
          <img
            src="/1/daun-atas.png"
            alt="daun"
            className="w-full rotate-180 absolute top-[-100px]"
          />
        </div>
      </div>

      {/* start save the date */}
      <div className="">
        <div className="flex flex-col justify-center items-center">
          <h1
            data-aos="fade-up"
            data-aos-delay="800"
            className="text-[#507554] text-4xl font-elwiss text-center pt-24"
          >
            Save The Date
          </h1>
          <span className="font-crimson text-center text-[#231F20] text-[18px] !leading-10">
            {data?.displayDate || "December 16, 2023"}
          </span>
        </div>

        <div
          data-aos="fade-up"
          data-aos-delay="800"
          className="flex relative gap-8 justify-center items-center"
        >
          <div data-aos="fade-up" data-aos-delay="800">
            <p className="font-elwiss text-[#504533] text-[32px] text-center font-libre">
              {days}
            </p>
            <p className="font-elwiss text-[#504533] text-[12px] text-center font-libre">
              Days
            </p>
          </div>

          <div data-aos="fade-down" data-aos-delay="800">
            <p className="font-elwiss text-[#504533] text-[32px] text-center font-libre">
              {hours}
            </p>
            <p className="font-elwiss text-[#504533] text-[12px] text-center font-libre">
              Hours
            </p>
          </div>

          <div data-aos="fade-up" data-aos-delay="800">
            <p className="font-elwiss text-[#504533] text-[32px] text-center font-libre">
              {minutes}
            </p>
            <p className="font-elwiss text-[#504533] text-[12px] text-center font-libre">
              Minutes
            </p>
          </div>

          <div data-aos="fade-down" data-aos-delay="800">
            <p className="font-elwiss text-[#504533] text-[32px] text-center font-libre">
              {seconds}
            </p>
            <p className="font-elwiss text-[#504533] text-[12px] text-center font-libre">
              Seconds
            </p>
          </div>
        </div>

        <button className=" mt-4 flex m-auto bg-[#3C5E50] px-5 py-1.5 font-libre rounded-lg text-sm tracking-wide !text-white">
          <a href={data?.googleCalendarUrl || "#"} target="_blank">
            Add to Calendar
          </a>
        </button>
        <div className="mt-10 w-full">
          <img src="/1/grass.jpg" alt="daun" className="w-full" />
        </div>
      </div>
      {/* end save the date */}

      <div
        style={{ paddingTop: 200, paddingBottom: 250, top: -8 }}
        className="relative bg-no-repeat bg-cover bg-theDay"
      >
        <div data-aos="fade-up" data-aos-delay="200">
          <p className="text-[#3C5E50] text-[35px] font-elwiss text-center">
            It's The Day
          </p>
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay="400"
          className="flex flex-col items-center text-[#504533] text-center md:px-16 pt-5"
        >
          <Image src="/1/ring.svg" alt="ring" width={70} height={70} />
          <h1 className="font-libre text-[20px] text-[#B6968B] mt-2">
            {data?.events?.holyMatrimony?.title || "Holy Matrimony"}
          </h1>
          <p className="text-[12px] font-libre text-[#444343] mt-2">
            {data?.events?.holyMatrimony?.datetime || "Saturday, December 16 2023, 09.30 - 10.45 WIB"}
          </p>
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay="600"
          className="flex flex-col items-center text-[#504533] text-center md:px-16 pt-10"
        >
          <Image src="/1/cheers.svg" alt="ring" width={70} height={70} />
          <h1 className="font-libre text-[20px] text-[#B6968B] mt-2">
            {data?.events?.reception?.title || "Cia Ciu"}
          </h1>
          <p className="text-[12px] font-libre text-[#444343] mt-2">
            {data?.events?.reception?.datetime || "Saturday, December 16 2023, 12.00 - 14.00 WIB"}
          </p>
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay="800"
          className="flex flex-col items-center text-[#504533] text-center md:px-16  pt-10 "
        >
          <Image src="/1/place-map.svg" alt="ring" width={70} height={70} />
          <h1 className="font-libre text-[20px] text-[#B6968B] mt-2">
            {data?.venue?.name || "Royal Dynasty Restaurant"}
          </h1>
          <p className="text-[12px] font-libre text-[#444343] mt-2 px-16">
            {data?.venue?.address || "Gedung Graha Sudirman Lt. 1, Jl. Jend. Sudirman No.232A, Kb. Jeruk, Andir, Kota Bandung, Jawa Barat 40181"}
          </p>
          <button className="!text-white mt-4 flex m-auto bg-[#3C5E50] px-5 py-1.5 mt-[40px] font-libre rounded-lg text-sm tracking-wide">
            <a
              href={data?.venue?.mapUrl || "#"}
              target="_blank"
            >
              View Map
            </a>
          </button>
        </div>
      </div>

      <div className="md:px-[35vw]"  data-aos="fade-up" data-aos-delay="800">
        <div className="relative pt-20 pb-10 md:px-16">
          <h1
            data-aos="fade-up"
            data-aos-delay="800"
            className="text-[#507554] text-[35px] font-elwiss text-center"
          >
            Our Gallery
          </h1>
          <div data-aos="zoom-in" className="px-4 mt-8">
            <img
              src={data?.gallery?.photo || "/1/our-gallery.jpg"}
              alt="Gallery image"
              layout="fill" // Fill the parent container
              objectFit="cover" // Maintain aspect ratio and cover the container
            />
          </div>
        </div>
      </div>

      <div className="md:px-[35vw]">
        <div className="relative pt-20 pb-10 md:px-16">
          <h1
            data-aos="fade-up"
            className="text-[#507554] text-[35px] font-elwiss text-center"
          >
            Our Footage
          </h1>
          <div data-aos="zoom-in" className="px-4 mt-8">
            <div>
              <VideoPlayer
                src={data?.video?.src || "/video/win-vania.mp4"}
                width={640}
                height={360}
                onPlay={handleVideoPlay}
                onPause={handleVideoPause}
              />
            </div>
          </div>
          <div className="flex justify-center pt-5 w-100">
            <p className="w-100 stext-center text-[#3C5E50] font-playfair text-[12px]">
              {data?.video?.caption || "Win & Vania Prewedding"}
            </p>
          </div>
        </div>
      </div>

      {/* start wedding gift */}
      <div className="md:px-[35vw]">
        <div className="relative pt-20 pb-10 md:px-16">
          <h1
            data-aos="fade-up"
            className="text-[#507554] text-[35px] font-elwiss text-center"
          >
            Wedding Gift
          </h1>
          <p className="font-libre text-[#504533] text-[12px] px-8 text-center md:px-0 mt-2">
            {data?.gift?.message || "Your blessing and presence at our wedding is enough for us. But if you want to give a gift, we provide Digital Envelopes to make it easier for you. Thank You"}
          </p>

          <div
            data-aos="fade-up"
            className="border border-1 border-[#3C5E50] rounded-lg px-5 py-4 pb-8 mx-4 mt-12 text-[#504533]"
          >
            <div className="py-4">
              <p className="text-[#3C5E50] text-[20px] font-libre border border-1 rounded-lg border-[#3C5E50] w-full px-3 py-3">
                {data?.gift?.bank?.name || "BANK BCA"}
              </p>
            </div>

            {isCopied && (
              <div
                class="p-4 mb-4 text-sm text-white rounded-lg bg-[#504533]  text-white"
                role="alert"
              >
                <span class="font-medium">Rekening berhasil disalin !</span>
              </div>
            )}

            <div className="px-4 py-4 bg-white rounded-lg">
              <p className="font-libre text-[#9FAA8A] text-[14px]">
                Account Number
              </p>
              <div className="flex justify-between">
                <p className="font-libre text-[#9FAA8A] text-[14px]">
                  {data?.gift?.bank?.accountNumber || "8380177421"}
                </p>

                <CopyToClipboard
                  text={data?.gift?.bank?.accountNumber || "8380177421"}
                  onCopy={() => {
                    setCopied(true);
                    setTimeout(() => setCopied(false), 2000);
                  }}
                >
                  <Image
                    src="/assets/copy.svg"
                    alt="copy"
                    height={25}
                    width={25}
                  />
                </CopyToClipboard>
              </div>

              <p className="font-libre text-[#9FAA8A] text-[14px] pt-2">
                Account Owner
              </p>
              <p className="font-libre text-[#9FAA8A] text-[14px]">
                {data?.gift?.bank?.accountOwner || "Vania Natali"}
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* end wedding gift */}
    </>
  );
}
