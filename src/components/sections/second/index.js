/* eslint-disable @next/next/no-img-element */
import { useCountdown } from "@/hooks/useCountdown";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

const googleCalendar =
  "https://calendar.google.com/calendar/render?action=TEMPLATE&dates=20231013T010000Z%2F20231013T020000Z&details=%20For%20more%20info%2C%20please%20visit%20-%3E%20https%3A%2F%2Fnawasmara.com&location=Masjid%20Raya%20Baiturrahman%20Banda%20Aceh&text=Akad%20Arief%20%26%20Nabilla";

export default function SecondSection() {
  const [days, hours, minutes, seconds] = useCountdown("2025-07-20");
  const [showGift, setShowGift] = useState(false);
  const [isCopied, setCopied] = useState(false);

  return (
    <>
      <div className="md:px-[30vw]">
        {/* date */}
        <div
          data-aos="fade-up"
          className="md:px-16 flex items-center justify-center py-2"
        >
          <img src="/1/small-leaf.svg" alt="small-leaf" />
          <span className="font-crimson text-center text-[#507554] text-[18px] !leading-10">
            20 juli 2025
          </span>
          <img
            src="/1/small-leaf.svg"
            alt="small-leaf"
            className="rotate-180"
          />
        </div>

        {/* ayat */}
        <div
          className="flex items-center justify-center flex-col px-10 bg-[#3C5E50] py-10"
          data-aos="fade-up"
        >
          <span className="text-white text-[16px] font-libre">
            1 Corinthians 13 : 7
          </span>
          <span className="text-white text-[12px] font-libre pt-2 text-center leading-6">
            “Love never gives up, never lose faith, is always helpful, and
            endures through every circumstance”
          </span>
        </div>

        {/*   person 1   */}
        <div className="flex flex-col relative bg-[#F2EDEB] text-[#504533] bg-bgPrimary22 bg-cover bg-no-repeat h-[80vh]">
          <div className="w-full">
            <img src="/1/daun-atas.png" alt="daun" className="w-full" />
          </div>
          <div className="px-8 relative">
            <div className="md:px-16">
              <p
                data-aos="fade-down"
                className="font-libre text-[#504533] text-[12px] p-4 text-center leading-6"
              >
                God creates everything beautiful in His time. Beautiful when He
                brings together and grows affection, We cordially invite you to
                the wedding:
              </p>
            </div>
            <img
              data-aos="zoom-in"
              src="/1/vania.png"
              alt="vania"
              className="w-full"
            />
            <div className="flex justify-center">
              <h1
                data-aos="fade-down"
                className="absolute bottom-[10px] text-[#507554] text-4xl font-elwiss text-center"
              >
                Vania Natali
              </h1>
              <p className="absolute bottom-[-50px] px-24 text-center text-[#B6968B] text-[14px]">
                Only daughter the late (†) Mr. Lie Thian Kie and Lioe Kim Djin
              </p>

              <a
                target="_blank"
                data-aos="fade-up"
                href="https://instagram.com/ms.vanili"
                className="flex justify-center absolute bottom-[-70px] px-24 underline underline-offset-6"
              >
                <Image src="/assets/ig.svg" alt="ig" width={12} height={20} />
                <p className="text-center text-[#B6968B] font-playfair text-[12px]">
                  ms.vanili
                </p>
              </a>
            </div>
          </div>
          <h1
            data-aos="fade-up"
            className="z-10 text-[#507554] text-6xl font-elwiss text-center pt-[180px]"
          >
            &
          </h1>
        </div>

        {/*   person 2   */}
        <div className="flex flex-col relative p-8 bg-[#F2EDEB] text-[#504533] bg-bgPrimary23 bg-cover bg-no-repeat h-[80vh] top-[-4px] justify-center">
          <div className="relative">
            <img
              data-aos="zoom-in"
              src="/1/win.svg"
              alt="vania"
              className="w-full"
            />
            <div className="flex justify-center">
              <h1
                data-aos="fade-down"
                className="absolute bottom-[10px] text-[#507554] text-4xl font-elwiss text-center"
              >
                Win Iskandar
              </h1>
              <p className="absolute bottom-[-50px] px-24 text-center text-[#B6968B] text-[14px]">
                First son of Mr. Iskandar Teluand mother Tan Tjun lan
              </p>

              <a
                target="_blank"
                data-aos="fade-up"
                href="https://instagram.com/win.rz"
                className="flex justify-center absolute bottom-[-70px] px-24 underline underline-offset-6"
              >
                <Image src="/assets/ig.svg" alt="ig" width={12} height={20} />
                <p className="text-center text-[#B6968B] font-playfair text-[12px]">
                  win.rz
                </p>
              </a>
            </div>
          </div>
        </div>

        <div className="w-full relative">
          <img
            src="/1/daun-atas.png"
            alt="daun"
            className="w-full rotate-180 absolute top-[-100px]"
          />
        </div>
      </div>

      {/* start save the date */}
      <div className="">
        <div className="flex flex-col items-center justify-center">
          <h1
            data-aos="fade-up"
            className="text-[#507554] text-4xl font-elwiss text-center pt-24"
          >
            Save The Date
          </h1>
          <span className="font-crimson text-center text-[#507554] text-[18px] !leading-10">
            20 juli 2025
          </span>
        </div>

        <div
          data-aos="fade-up"
          className="flex gap-8 justify-center items-center relative"
        >
          <div data-aos="fade-up">
            <p className="font-elwiss text-[#504533] text-[32px] text-center">
              {days}
            </p>
            <p className="font-elwiss text-[#504533] text-[12px] text-center">
              Days
            </p>
          </div>

          <div data-aos="fade-down">
            <p className="font-elwiss text-[#504533] text-[32px] text-center">
              {hours}
            </p>
            <p className="font-elwiss text-[#504533] text-[12px] text-center">
              Hours
            </p>
          </div>

          <div data-aos="fade-up">
            <p className="font-elwiss text-[#504533] text-[32px] text-center">
              {minutes}
            </p>
            <p className="font-elwiss text-[#504533] text-[12px] text-center">
              Minutes
            </p>
          </div>

          <div data-aos="fade-down">
            <p className="font-elwiss text-[#504533] text-[32px] text-center">
              {seconds}
            </p>
            <p className="font-elwiss text-[#504533] text-[12px] text-center">
              Seconds
            </p>
          </div>
        </div>

        <button className=" mt-4 flex m-auto bg-[#3C5E50] px-5 py-1.5 font-libre rounded-lg text-sm tracking-wide !text-white">
          <a href={googleCalendar} target="_blank">
            Add to Calendar
          </a>
        </button>
        <div className="w-full">
          {/* <img src="/1/rumah.png" alt="daun" className="w-full" />
        <img src="/1/poon.png" alt="daun" className="w-full" className="h-max" /> */}

          <img src="/1/grass.png" alt="daun" className="w-full" />
        </div>
      </div>
      {/* end save the date */}

      {/* start event detail */}
      <h1 className="text-[#504533] text-6xl font-bethaine text-center">
        Wedding Day!
      </h1>

      <div className="flex flex-col md:px-[35vw] px-16">
        <div className="flex flex-col items-center text-[#504533] text-center md:px-16">
          <Image src="/assets/ring.svg" alt="ring" width={70} height={70} />
          <h1 className="font-libre text-[20px]">Akad Nikah</h1>
          <p>Jumat, 13 Oktober 2023</p>
          <p>08:00 - 09:00 WIB</p>
          <p>Mesjid Raya Baiturrahman, Banda Aceh</p>
        </div>

        <div className="flex flex-col items-center text-[#504533] text-center pt-10 md:px-16">
          <Image src="/assets/cheers.svg" alt="ring" width={70} height={70} />
          <h1 className="font-libre text-[20px] text-[#504533]">Resepsi</h1>
          <p className="!text-[#89565C] text-[16px] font-bold">
            Preh Linto Baro:
          </p>
          <p>Sabtu, 14 Oktober 2023</p>
          <p>11.00 - 13.00 WIB</p>
          <p>
            Jl. H. Bintang No. 152, Merpati V, Blang Oi, Meuraxa, Banda Aceh
          </p>
          <button className=" mt-4 flex m-auto !text-white bg-[#504533] px-5 py-1.5 !text-white font-libre rounded-lg text-sm tracking-wide">
            <a href="https://maps.app.goo.gl/V1gseiETsT5RxHUKA" target="_blank">
              View Map
            </a>
          </button>
          <p className="!text-[#89565C] text-[16px] font-bold pt-10">
            Preh Dara Baro:
          </p>
          <p>Kamis, 19 Oktober 2023 </p>
          <p>11.00-13.00 WIB </p>
          <p>
            Jl. Mutiara 14 No. 1, Komplek Mutiara Indah, Alue Awe, Lhokseumawe
          </p>
          <button className="!text-white mt-4 flex m-auto bg-[#504533] px-5 py-1.5 font-libre rounded-lg text-sm tracking-wide">
            <a href="https://maps.app.goo.gl/kHnAQMpugTzHvzxS6" target="_blank">
              View Map
            </a>
          </button>
        </div>
      </div>
      {/* end event detail */}

      {/* end our story */}
      <div className="pt-10 md:px-[35vw]">
        <h1 className="text-[#504533] text-6xl font-bethaine text-center">
          Our Story
        </h1>
        <div className="bg-storyOne bg-no-repeat bg-contain min-h-[500px] relative pl-32 pr-5">
          <div className="pt-[300px]" />
          <div className="md:mr-14">
            <p className="!text-[#504533] text-[16px] font-bold">First Meet</p>
            <p className="!text-[#504533] text-[14px] pt-2">
              2020 adalah tahun pertemuan pertama kami, tepatnya pada program
              kantor yang sama.
            </p>
          </div>
        </div>
        <div className="bg-storyTwo bg-no-repeat bg-contain min-h-[500px] relative pr-32 pl-4">
          <div className="pt-[265px]" />
          <div className="md:mr-16">
            <p className="!text-[#504533] text-[16px] font-bold">
              Relationship
            </p>
            <p className="!text-[#504533] text-[14px] pt-2">
              Berjalannya waktu, kami saling mengenal dan terus memupuk komitmen
              untuk masa depan. Pada awal tahun 2023, tepatnya pada 16 Februari,
              keluarga Arief berkunjung ke kediaman keluarga Nabilla dengan
              itikad baik ingin meneruskan hubungan ini ke jalan selanjutnya.
            </p>
          </div>
        </div>
        <div className="bg-storyThree bg-no-repeat bg-contain min-h-[500px] relative pl-32 pr-5">
          <div className="pt-[260px]" />
          <div className="md:mr-14 md:pt-6">
            <p className="!text-[#504533] text-[16px] font-bold">Menikah</p>
            <p className="!text-[#504533] text-[14px] pt-2">
              Tanggal 13 Oktober 2023, dengan izin Allah kami bermaksud untuk
              menyempurnakan perjalanan kami menjadi ibadah sepanjang hidup,
              dalam ikatan pernikahan.
            </p>
            <p className="!text-[#504533] text-[14px] pt-2">
              Bismillaahirrahmaanirrahiim.
            </p>
          </div>
        </div>
      </div>
      {/* end our story */}

      {/* start wedding gift */}
      <div className="md:px-[35vw]">
        <div className="pt-20 bg-keyboard bg-start bg-no-repeat relative pb-10 md:px-16">
          <h1 className="text-[#504533] text-6xl font-bethaine text-center">
            Wedding Gift
          </h1>
          <p className="font-libre text-[#504533] text-[12px] px-8 text-center md:px-0">
            Atas restu dan kedatangan kamu ke pesta pernikahan kami sudah cukup
            bagi kami. Tapi jika kamu ingin memberi hadiah, kami menyediakan
            Amplop Digital untuk memudahkan kamu. Terima kasih
          </p>
          <button
            onClick={() => setShowGift((prev) => !prev)}
            className=" mt-4 flex m-auto bg-[#504533] px-5 py-1.5 font-libre rounded-lg text-sm tracking-wide"
          >
            Kirim hadiah
          </button>
          {showGift && (
            <div className="border border-1 border-[#504533] rounded-lg px-8 py-4 mx-4 mt-4 text-[#504533]">
              <div className="py-4">
                <Image src="assets/bca.svg" alt="bca" height={80} width={80} />
              </div>
              {isCopied && (
                <div
                  class="p-4 mb-4 text-sm text-white rounded-lg bg-[#504533]  text-white"
                  role="alert"
                >
                  <span class="font-medium">Rekening berhasil disalin !</span>
                </div>
              )}
              <div className="bg-white rounded-lg px-4 py-2">
                <p className="font-libre text-[12px] pt-2">Nomor Rekening</p>
                <div className="flex justify-between">
                  <p>1280496037</p>

                  <CopyToClipboard
                    text="1280496037"
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

                <p className="font-libre text-[12px] pt-2">Pemilik Rekening</p>
                <p>Arief Ramadhana</p>
              </div>
              <div className="py-4">
                <Image
                  src="/assets/linkaja.png"
                  alt="linkaja"
                  height={100}
                  width={100}
                />
                <Image
                  src="/assets/nabilla-linkaja.png"
                  alt="linkaja"
                  height={200}
                  width={300}
                  className=""
                />
              </div>
            </div>
          )}
          <div className="flex justify-center absolute left-[50%]">
            <Image
              alt="box-gift"
              src="/assets/box-gift.svg"
              width={200}
              height={200}
            />
          </div>
        </div>
      </div>
      {/* end wedding gift */}
    </>
  );
}
