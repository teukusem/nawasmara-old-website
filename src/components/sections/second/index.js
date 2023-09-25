import Image from "next/image";

export default function SecondSection() {
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
      <Image
        src="/assets/foto.png"
        alt="2-people"
        width={300}
        height={300}
        className="!w-full"
      />
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
      <div className="flex w-full justify-center">
        <Image
          src="/assets/check-it.svg"
          alt="check-it"
          width={200}
          height={300}
        />
      </div>
    </div>
  );
}
