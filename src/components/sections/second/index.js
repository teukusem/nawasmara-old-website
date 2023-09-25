import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
const googleCalendar =
  "https://calendar.google.com/calendar/render?action=TEMPLATE&dates=20231013T010000Z%2F20231013T020000Z&details=%20For%20more%20info%2C%20please%20visit%20-%3E%20https%3A%2F%2Fnawasmara.com&location=Masjid%20Raya%20Baiturrahman%20Banda%20Aceh&text=Akad%20Arief%20%26%20Nabilla";
const yahooCalendar =
  "https://calendar.yahoo.com/?desc=%20For%20more%20info%2C%20please%20visit%20-%3E%20https%3A%2F%2Fnawasmara.com&et=20231013T020000Z&in_loc=Masjid%20Raya%20Baiturrahman%20Banda%20Aceh&st=20231013T010000Z&title=Akad%20Arief%20%26%20Nabilla&v=60";

export default function SecondSection() {
  const router = useRouter();

  return (
    <div className="">
      <div className="flex w-full justify-center">
        <Image
          src="/assets/check-it.svg"
          alt="check-it"
          width={200}
          height={300}
        />
      </div>
      <Image
        src="/assets/branch-bird.svg"
        alt="branch-bird"
        width={600}
        height={300}
        className="!w-full"
      />
      <h1 className="font-bethaine text-[#504533] text-5xl mt-10 text-center">
        Arief & Nabilla
      </h1>
      <div className="bg-building bg-no-repeat bg-contains min-h-[520px] relative">
        <Image
          src="/assets/foto.png"
          alt="foto"
          width={300}
          height={300}
          className="!w-full bottom-0 absolute"
        />
        <Image
          className="absolute top-0 z-[-1] rotate-90"
          src="/assets/pink-flower.svg"
          alt="frame-2"
          width={200}
          height={200}
        />
        <Image
          className="absolute bottom-5 right-5 z-[-1]"
          src="/assets/pink-flower-mirror.svg"
          alt="frame-2"
          width={200}
          height={200}
        />
      </div>
      <p className="font-playfair text-center text-[#504533]">
        13 Oktober 2023
      </p>
      <Image
        src="/assets/ayat.png"
        alt="ayat"
        width={600}
        height={700}
        className="!w-full pt-20"
      />
      <div className="flex w-full justify-center pb-10">
        <Image
          src="/assets/check-it.svg"
          alt="check-it"
          width={200}
          height={300}
        />
      </div>
      <div className="flex w-full justify-center">
        <Image
          src="/assets/bismillah.svg"
          alt="check-it"
          width={200}
          height={300}
        />
      </div>
      <p className="font-libre text-[#504533] text-[12px] p-4 text-center">
        Assalamualaikum Warahmatullahi Wabarakatuh, dengan berkah dan rahmat
        dari Allah SWT, Kami dengan hormat mengundang Anda ke pernikahan:
      </p>
      <div className="bg-building bg-no-repeat bg-contains relative">
        <Image
          src="/assets/nabilla.png"
          alt="foto"
          width={250}
          height={200}
          className="!w-full "
        />
      </div>
      <h1 className="text-[#504533] text-5xl font-bethaine text-center">
        Nabilla Maharani
      </h1>
      <p className="font-libre text-[#504533] text-[12px] text-center mx-10">
        Putri kedua dari Bapak Fazli Usman (alm)
      </p>
      <p className="font-libre text-[#504533] text-[12px] text-center mx-10 pb-2">
        Dan ibu Cut Meutia
      </p>
      <Link
        href="https://instagram.com/nmnabilla"
        className="flex justify-center"
      >
        <Image src="/assets/ig.svg" alt="ig" width={12} height={12} />
        <p className="font-libre text-[#504533] text-[12px] text-center underline ml-2 underline-offset-4">
          @nmnabilla
        </p>
      </Link>

      <h1 className="text-[#504533] text-5xl font-bethaine text-center py-[100px]">
        &
      </h1>

      <div className="bg-building bg-no-repeat bg-contains relative">
        <Image
          src="/assets/arief.png"
          alt="foto"
          width={250}
          height={200}
          className="!w-full "
        />
      </div>
      <h1 className="text-[#504533] text-5xl font-bethaine text-center">
        Arief Ramadhana
      </h1>
      <p className="font-libre text-[#504533] text-[12px] text-center mx-10">
        Putra ketiga dari Bapak Tarmizi
      </p>
      <p className="font-libre text-[#504533] text-[12px] text-center mx-10 pb-2">
        Dan Ibu Jasmaniah
      </p>
      <Link
        href="https://instagram.com/ariefrmdh"
        className="flex justify-center"
      >
        <Image src="/assets/ig.svg" alt="ig" width={12} height={12} />
        <p className="font-libre text-[#504533] text-[12px] text-center underline ml-2 underline-offset-4">
          @ariefrmdh
        </p>
      </Link>

      <div className="flex items-end justify-center">
        <h1 className="text-[#504533] text-5xl font-bethaine text-center pt-36">
          Save The Date
        </h1>
        <Image src="/assets/pena.svg" alt="test" width={40} height={60} />
      </div>
      <p className="font-playfair text-center text-[#504533]">
        13 Oktober 2023
      </p>
      <div className="flex">
        <Image
          src="/assets/save-date.svg"
          alt="test"
          width={40}
          height={60}
          className="!w-full"
        />
      </div>
      <button className="flex m-auto bg-[#504533] px-5 py-1.5 font-libre rounded-lg text-sm tracking-wide">
        <a href={googleCalendar} target="_blank">
          Add to Calendar
        </a>
      </button>

      <h1 className="text-[#504533] text-5xl font-bethaine text-center pt-36">
        RSVP
      </h1>
      <Image
          src="/assets/rsvp.svg"
          alt="test2"
          width={300}
          height={300}
          className="!w-full"
        />
    </div>
  );
}
