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

  const [days, hours, minutes, seconds] = useCountdown(data?.weddingDate || "2025-07-20");
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
          className="flex items-center justify-center py-4 md:px-16"
        >
          <img src="/1/small-leaf.svg" alt="small-leaf" />
          <span className="font-crimson text-center text-[#507554] text-[18px]s">
            {data?.displayDate || "20 juli 2025"}
          </span>
          <img
            src="/1/small-leaf.svg"
            alt="small-leaf"
            className="rotate-180"
          />
        </div>

        {/* ayat */}
        <div  data-aos="fade-up" className="flex items-center justify-center flex-col px-10 md:px-32 lg:px-64 bg-[#3C5E50] py-10 md:py-16">
          <div
            data-aos="fade-down"
            className="flex flex-col items-center justify-center"
          >
            <span className="text-white text-[16px] md:text-[20px] lg:text-[24px] font-libre">
              {data?.verse?.reference || "1 Corinthians 13 : 7"}
            </span>
            <span className="text-white text-[12px] md:text-[14px] lg:text-[16px] font-libre pt-2 text-center leading-6 md:leading-8">
              "{data?.verse?.text || "Love never gives up, never lose faith, is always helpful, and endures through every circumstance"}"
            </span>
          </div>
        </div>

        {/*   person 1   */}
        <div className="flex flex-col relative bg-[#F2EDEB] text-[#504533] bg-bgPrimary22 bg-cover bg-no-repeat max-w-4xl mx-auto">
          <div className="w-full">
            <img src="/1/daun-atas.png" alt="daun" className="w-full" />
          </div>
          <div className="relative px-8 md:px-16 lg:px-24">
            <div className="md:px-16">
              <p
                data-aos="fade-down"
                className="font-libre text-[#504533] text-[12px] md:text-[14px] lg:text-[16px] p-4 md:p-8 text-center leading-6 md:leading-8">
              
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
            <div className="flex flex-col items-center justify-center mt-4 space-y-3">
              <h1
                data-aos="fade-down"
                className="text-[#504533] text-4xl md:text-5xl lg:text-6xl font-elwiss text-center"
              >
                {data?.bride?.name || "Vania Natali"}
              </h1>
              <p className="font-libre px-[80px] md:px-[120px] lg:px-[160px] text-center text-[#B6968B] text-[12px] md:text-[14px] leading-relaxed">
                {data?.bride?.parents || "Only daughter the late (†) Mr. Lie Thian Kie and Lioe Kim Djin"}
              </p>
              <a
                target="_blank"
                rel="noopener noreferrer"
                data-aos="fade-up"
                href={data?.bride?.instagram?.url || "https://instagram.com/ms.vanili"}
                className="z-20 flex items-center justify-center px-24 cursor-pointer"
              >
                <Image src="/assets/ig.svg" alt="ig" width={12} height={20} />
                <span className="text-center text-[#B6968B] font-spanlayfair text-[12px] ml-[5px]">
                  {data?.bride?.instagram?.username || "ms.vanili"}
                </span>
              </a>
            </div>
          </div>
          <div className="flex items-center justify-center py-8">
            <h1
              data-aos="fade-up"
              className="z-10 text-[#507554] text-6xl font-elwiss text-center"
            >
              &
            </h1>
          </div>
        </div>

        {/*   person 2   */}
        <div className="flex flex-col relative p-8 md:p-16 lg:p-24 bg-[#F2EDEB] text-[#504533] bg-bgPrimary23 bg-cover bg-no-repeat h-[600px] md:h-[700px] lg:h-[800px] top-[-4px] justify-center max-w-4xl mx-auto">
          <div className="relative top-[-50px]">
            <img
              data-aos="zoom-in"
              data-aos-delay="500"
              src={data?.groom?.photo || "/1/win.png"}
              alt={data?.groom?.name || "groom"}
              className="w-full"
            />
            <div className="flex flex-col items-center justify-center mt-4 space-y-3">
              <h1
                data-aos="fade-down"
                className="text-[#504533] text-4xl md:text-5xl lg:text-6xl font-elwiss text-center"
              >
                {data?.groom?.name || "Win Iskandar"}
              </h1>
              <p 
                className="font-libre px-[80px] md:px-[120px] lg:px-[160px] text-center text-[#B6968B] text-[12px] md:text-[14px] leading-relaxed"
                dangerouslySetInnerHTML={{
                  __html: data?.groom?.parents || "First son of Mr. Iskandar Teluand mother Tan Tjun lan"
                }}
              ></p>

              <a
                target="_blank"
                rel="noopener noreferrer"
                data-aos="fade-up"
                href={data?.groom?.instagram?.url || "https://instagram.com/win.rz"}
                className="z-20 flex items-center justify-center px-24 cursor-pointer"
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
      <div className="max-w-4xl px-4 mx-auto md:px-8">
        <div className="flex flex-col items-center justify-center">
          <h1
            data-aos="fade-up"
            data-aos-delay="800"
            className="text-[#507554] text-4xl md:text-5xl lg:text-6xl font-elwiss text-center pt-24"
          >
            Save The Date
          </h1>
          <span className="font-crimson text-center text-[#231F20] text-[18px] md:text-[22px] lg:text-[26px] !leading-10">
            {data?.displayDate || "20 juli 2025"}
          </span>
        </div>

        <div
          data-aos="fade-up"
          data-aos-delay="800"
          className="relative flex items-center justify-center gap-8 md:gap-12 lg:gap-16">
          <div data-aos="fade-up" data-aos-delay="800">
            <p className="font-elwiss text-[#504533] text-[32px] md:text-[40px] lg:text-[48px] text-center font-libre">
              {days}
            </p>
            <p className="font-elwiss text-[#504533] text-[12px] md:text-[14px] lg:text-[16px] text-center font-libre">
              Days
            </p>
          </div>

          <div data-aos="fade-down" data-aos-delay="800">
            <p className="font-elwiss text-[#504533] text-[32px] md:text-[40px] lg:text-[48px] text-center font-libre">
              {hours}
            </p>
            <p className="font-elwiss text-[#504533] text-[12px] md:text-[14px] lg:text-[16px] text-center font-libre">
              Hours
            </p>
          </div>

          <div data-aos="fade-up" data-aos-delay="800">
            <p className="font-elwiss text-[#504533] text-[32px] md:text-[40px] lg:text-[48px] text-center font-libre">
              {minutes}
            </p>
            <p className="font-elwiss text-[#504533] text-[12px] md:text-[14px] lg:text-[16px] text-center font-libre">
              Minutes
            </p>
          </div>

          <div data-aos="fade-down" data-aos-delay="800">
            <p className="font-elwiss text-[#504533] text-[32px] md:text-[40px] lg:text-[48px] text-center font-libre">
              {seconds}
            </p>
            <p className="font-elwiss text-[#504533] text-[12px] md:text-[14px] lg:text-[16px] text-center font-libre">
              Seconds
            </p>
          </div>
        </div>

        <button className=" mt-4 flex m-auto bg-[#3C5E50] px-5 py-1.5 font-libre rounded-lg text-sm tracking-wide !text-white">
          <a href={data?.googleCalendarUrl || "#"} target="_blank">
            Add to Calendar
          </a>
        </button>
        <div className="w-full mt-10">
          <img src="/1/grass.jpg" alt="daun" className="w-full" />
        </div>
      </div>
      {/* end save the date */}

      <div
        style={{ paddingTop: 200, paddingBottom: 250, top: -8 }}
        className="relative max-w-4xl mx-auto bg-no-repeat bg-cover bg-theDay"
      >
        <div data-aos="fade-up" data-aos-delay="200">
          <p className="text-[#3C5E50] text-[35px] font-elwiss text-center">
            It's The Day
          </p>
        </div>
        {/* <div
          data-aos="fade-up"
          data-aos-delay="400"
          className="flex flex-col items-center text-[#504533] text-center md:px-16 pt-5"
        >
          <Image src="/1/ring.svg" alt="ring" width={70} height={70} />
          <h1 className="font-libre text-[20px] text-[#B6968B] mt-2">
            {data?.events?.holyMatrimony?.title || "Holy Matrimony"}
          </h1>
          <p className="text-[12px] font-libre text-[#444343] mt-2">
            {data?.events?.holyMatrimony?.datetime || "Sunday, 20 juli 2025, 09.30 - 10.45 WIB"}
          </p>
        </div> */}
        <div
          data-aos="fade-up"
          data-aos-delay="600"
          className="flex flex-col items-center text-[#504533] text-center md:px-16 pt-10"
        >
          <Image src="/1/cheers.svg" alt="ring" width={70} height={70} />
          <h1 className="font-libre text-[20px] md:text-[24px] text-[#B6968B] mt-2">
            {data?.events?.reception?.title || "Cia Ciu"}
          </h1>
          <p className="text-[12px] md:text-[14px] font-libre text-[#444343] mt-2">
            {data?.events?.reception?.datetime || "Sunday, 20 juli 2025, 12.00 - 14.00 WIB"}
          </p>
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay="800"
          className="flex flex-col items-center text-[#504533] text-center md:px-16  pt-10 "
        >
          <Image src="/1/place-map.svg" alt="ring" width={70} height={70} />
          <h1 className="font-libre text-[20px] md:text-[24px] text-[#B6968B] mt-2">
            {data?.venue?.name || "Royal Dynasty Restaurant"}
          </h1>
          <p className="text-[12px] md:text-[14px] font-libre text-[#444343] mt-2 px-16 max-w-md mx-auto">
            {data?.venue?.address || "Gedung Graha Sudirman Lt. 1, Jl. Jend. Sudirman No.232A, Kb. Jeruk, Andir, Kota Bandung, Jawa Barat 40181"}
          </p>
          <button className="!text-white mt-4 flex m-auto bg-[#3C5E50] px-5 py-1.5 mt-[40px] font-libre rounded-lg text-sm md:text-base tracking-wide">
            <a
              href={data?.venue?.mapUrl || "#"}
              target="_blank"
            >
              View Map
            </a>
          </button>
        </div>
      </div>


      {/* <div className="md:px-[35vw]">
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
      </div> */}

      {/* start wedding gift */}
      <div className="max-w-4xl px-4 mx-auto md:px-8">
        <div className="relative pt-20 pb-10">
          <h1
            data-aos="fade-up"
            className="text-[#507554] text-[35px] md:text-[40px] lg:text-[48px] font-elwiss text-center"
          >
            Wedding Gift
          </h1>
          <p className="font-libre text-[#504533] text-[12px] md:text-[14px] lg:text-[16px] px-8 text-center md:px-0 mt-2 max-w-2xl mx-auto">
            {data?.gift?.message || "Your blessing and presence at our wedding is enough for us. But if you want to give a gift, we provide Digital Envelopes to make it easier for you. Thank You"}
          </p>

          {/* Tab Navigation */}
          <div data-aos="fade-up" className="flex mt-8 bg-white rounded-lg border border-[#3C5E50] p-1 max-w-md mx-auto">
            <button
              onClick={() => setActiveTab("transfer")}
              className={`flex-1 py-3 px-4 rounded-md text-sm font-libre transition-all duration-300 ${
                activeTab === "transfer"
                  ? "bg-[#3C5E50] text-white shadow-md"
                  : "text-[#3C5E50] hover:bg-[#3C5E50]/10"
              }`}
            >
              Transfer Bank
            </button>
            <button
              onClick={() => setActiveTab("flower")}
              className={`flex-1 py-3 px-4 rounded-md text-sm font-libre transition-all duration-300 ${
                activeTab === "flower"
                  ? "bg-[#3C5E50] text-white shadow-md"
                  : "text-[#3C5E50] hover:bg-[#3C5E50]/10"
              }`}
            >
              Flower Board
            </button>
          </div>

          {/* Tab Content */}
          <div className="max-w-md mx-auto mt-6">
            {/* Transfer Bank Tab */}
            {activeTab === "transfer" && (
              <div
                data-aos="fade-up"
                className="border border-1 border-[#3C5E50] rounded-lg px-5 py-4 pb-8 text-[#504533]"
              >
                <div className="py-4">
                  <p className="text-[#3C5E50] text-[20px] md:text-[24px] font-libre border border-1 rounded-lg border-[#3C5E50] w-full px-3 py-3 text-center">
                    {data?.gift?.bank?.name || "BANK BCA"}
                  </p>
                </div>

                {isCopied && (
                  <div
                    className="p-4 mb-4 text-sm text-white rounded-lg bg-[#504533]"
                    role="alert"
                  >
                    <span className="font-medium">Rekening berhasil disalin !</span>
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
            )}

            {/* Flower Board Tab */}
            {activeTab === "flower" && (
              <div
                data-aos="fade-up"
                className="border border-1 border-[#25D366] rounded-lg px-5 py-6 text-center bg-gradient-to-b from-green-50 to-white"
              >
                <div className="flex flex-col items-center space-y-4">
                  {/* WhatsApp Icon */}
                  <div className="w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                    </svg>
                  </div>

                  {/* Content */}
                  <div className="space-y-3">
                    <h3 className="text-[#25D366] text-[18px] font-libre font-semibold">
                      Send Flowers via WhatsApp
                    </h3>
                    <p className="text-[#504533] text-[12px] font-libre leading-relaxed px-4">
                      Contact our florist partner to send beautiful flower arrangements for our special day
                    </p>
                    
                    {/* Phone Number Display */}
                    <div className="bg-white rounded-lg p-4 border border-[#25D366]/20">
                      <p className="text-[#25D366] text-[14px] font-libre font-medium">
                        {data?.gift?.flowerBoard?.displayNumber || "0812-3456-7890"}
                      </p>
                    </div>

                    {/* WhatsApp Button */}
                    <a
                      href={`https://wa.me/${data?.gift?.flowerBoard?.whatsappNumber || "+6281234567890"}?text=${encodeURIComponent(data?.gift?.flowerBoard?.message || "Hi, I would like to send flowers for the wedding! 🌸")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 bg-[#25D366] hover:bg-[#20B358] text-white px-6 py-3 rounded-lg font-libre text-[14px] transition-colors duration-300 shadow-lg hover:shadow-xl"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                      </svg>
                      <span>Send Message</span>
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* end wedding gift */}
    </>
  );
}
