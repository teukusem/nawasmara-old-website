import { useCountdown } from "@/hooks/useCountdown";
import Image from "next/image";
import Link from "next/link";

const googleCalendar =
  "https://calendar.google.com/calendar/render?action=TEMPLATE&dates=20231013T010000Z%2F20231013T020000Z&details=%20For%20more%20info%2C%20please%20visit%20-%3E%20https%3A%2F%2Fnawasmara.com&location=Masjid%20Raya%20Baiturrahman%20Banda%20Aceh&text=Akad%20Arief%20%26%20Nabilla";

export default function SecondSection() {
  const [days, hours, minutes, seconds] = useCountdown("2023-10-13");

  return (
    <div className="">
      <div className="md:px-[30vw]">
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

        <div className="bg-ayat bg-no-repeat bg-center bg-contain min-h-[500px] text-center px-16">
          <div className="pt-44" />
          <p className="text-[#504533] text-[16px]">
            وَمِنْ اٰيٰتِهٖٓ اَنْ خَلَقَ لَكُمْ مِّنْ اَنْفُسِكُمْ اَزْوَاجًا
            لِّتَسْكُنُوْٓا اِلَيْهَا وَجَعَلَ بَيْنَكُمْ مَّوَدَّةً وَّرَحْمَةً
            ۗاِنَّ فِيْ ذٰلِكَ لَاٰيٰتٍ لِّقَوْمٍ يَّتَفَكَّرُوْنَ
          </p>
          <p className="text-[#504533] text-[12px] pt-2">
            “Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan
            pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung
            dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa
            kasih dan sayang. Sungguh, pada yang demikian itu benar-benar
            terdapat tanda-tanda (kebesaran Allah) bagi kaum yang berpikir.”
            (Qs. Ar-Rum:21)
          </p>
        </div>

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
      </div>

      {/* start save the date */}
      <div className="pb-10">
        <div className="flex items-end justify-center">
          <h1 className="text-[#504533] text-5xl font-bethaine text-center pt-36">
            Save The Date
          </h1>
          <Image src="/assets/pena.svg" alt="test" width={40} height={60} />
        </div>
        <p className="font-playfair text-center text-[#504533]">
          13 Oktober 2023
        </p>

        <div className="flex gap-8 justify-center items-center px-4 bg-std bg-no-repeat bg-center bg-contain relative min-h-[180px] pt-10 ">
          <div>
            <p className="font-libre text-[#504533] text-[32px] text-center">
              {days}
            </p>
            <p className="font-libre text-[#504533] text-[12px] text-center">
              Hari
            </p>
          </div>

          <div>
            <p className="font-libre text-[#504533] text-[32px] text-center">
              {hours}
            </p>
            <p className="font-libre text-[#504533] text-[12px] text-center">
              Jam
            </p>
          </div>

          <div>
            <p className="font-libre text-[#504533] text-[32px] text-center">
              {minutes}
            </p>
            <p className="font-libre text-[#504533] text-[12px] text-center">
              Menit
            </p>
          </div>

          <div>
            <p className="font-libre text-[#504533] text-[32px] text-center">
              {seconds}
            </p>
            <p className="font-libre text-[#504533] text-[12px] text-center">
              Detik
            </p>
          </div>
        </div>

        <button className=" mt-4 flex m-auto bg-[#504533] px-5 py-1.5 font-libre rounded-lg text-sm tracking-wide">
          <a href={googleCalendar} target="_blank">
            Add to Calendar
          </a>
        </button>
      </div>
      {/* end save the date */}

      {/* start rsvp */}
      {/* <h1 className="text-[#504533] text-5xl font-bethaine text-center pt-36">
        RSVP
      </h1>
      <Image
        src="/assets/rsvp.svg"
        alt="test2"
        width={300}
        height={300}
        className="!w-full"
      /> */}
      {/* end rsvp */}

      {/* start event detail */}
      <div className="bg-paperBird bg-no-repeat bg-contain bg-center min-h-[1550px]">
        <h1 className="text-[#504533] text-6xl font-bethaine text-center">
          <div className="pt-[600px]" />
          Wedding Day!
        </h1>

        <div className="flex flex-col md:px-[35vw] px-16">
          <div className="flex flex-col items-center text-[#504533] text-center">
            <Image src="/assets/ring.svg" alt="ring" width={70} height={70} />
            <h1 className="font-libre text-[20px]">Akad Nikah</h1>
            <p>Jumat, 13 Oktober 2023</p>
            <p>08:00 - 09:00 WIB</p>
            <p>Mesjid Raya Baiturrahman, Banda Aceh</p>
          </div>

          <div className="flex flex-col items-center text-[#504533] text-center pt-10">
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
            <button className=" mt-4 flex m-auto bg-[#504533] px-5 py-1.5 !text-white font-libre rounded-lg text-sm tracking-wide">
              <a
                href="https://maps.app.goo.gl/V1gseiETsT5RxHUKA"
                target="_blank"
              >
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
              <a
                href="https://maps.app.goo.gl/kHnAQMpugTzHvzxS6"
                target="_blank"
              >
                View Map
              </a>
            </button>
          </div>
        </div>
      </div>
      {/* end event detail */}

      {/* end our story */}
      <div className="pt-10">
        <h1 className="text-[#504533] text-6xl font-bethaine text-center">
          Our Story
        </h1>
        <div className="bg-storyOne bg-no-repeat bg-contain min-h-[500px] relative pl-32 pr-5">
          <div className="pt-[280px]" />
          <div>
            <p className="!text-[#504533] text-[16px] font-bold">First Meet</p>
            <p className="!text-[#504533] text-[14px] pt-4">
              2020 adalah tahun pertemuan pertama kami, tepatnya pada program
              kantor yang sama.
            </p>
          </div>
        </div>
        <div className="bg-storyTwo bg-no-repeat bg-contain min-h-[500px] relative pr-32 pl-4">
          <div className="pt-[270px]" />
          <div>
            <p className="!text-[#504533] text-[16px] font-bold">
              Relationship
            </p>
            <p className="!text-[#504533] text-[14px] pt-4">
              Berjalannya waktu, kami saling mengenal dan terus memupuk komitmen
              untuk masa depan. Pada awal tahun 2023, tepatnya pada 16 Februari,
              keluarga Arief berkunjung ke kediaman keluarga Nabilla dengan
              itikad baik ingin meneruskan hubungan ini ke jalan selanjutnya.
            </p>
          </div>
        </div>
        <div className="bg-storyThree bg-no-repeat bg-contain min-h-[500px] relative pl-32 pr-5">
          <div className="pt-[270px]" />
          <div>
            <p className="!text-[#504533] text-[16px] font-bold">Menikah</p>
            <p className="!text-[#504533] text-[14px] pt-4">
              Tanggal 13 Oktober 2023, dengan izin Allah kami bermaksud untuk
              menyempurnakan perjalanan kami menjadi ibadah sepanjang hidup,
              dalam ikatan pernikahan. Bismillaahirrahmaanirrahiim.
            </p>
          </div>
        </div>
      </div>
      {/* end our story */}

      {/* start wedding gift */}
      <div className="pt-20 bg-keyboard bg-start bg-no-repeat">
        <h1 className="text-[#504533] text-6xl font-bethaine text-center">
          Wedding Gift
        </h1>
        <p className="font-libre text-[#504533] text-[12px] px-8 text-center">
          Atas restu dan kedatangan kamu ke pesta pernikahan kami sudah cukup
          bagi kami. Tapi jika kamu ingin memberi hadiah, kami menyediakan
          Amplop Digital untuk memudahkan kamu. Terima kasih
        </p>
        <button className=" mt-4 flex m-auto bg-[#504533] px-5 py-1.5 font-libre rounded-lg text-sm tracking-wide">
          Kirim hadiah
        </button>
      </div>
      {/* end wedding gift */}
    </div>
  );
}
