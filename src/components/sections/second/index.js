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
      <div className="flex w-full justify-center">
        <Image
          src="/assets/check-it.svg"
          alt="check-it"
          width={200}
          height={300}
        />
      </div>{" "}
      <div className="flex w-full justify-center">
        <Image
          src="/assets/bismillah.svg"
          alt="check-it"
          width={200}
          height={300}
        />
      </div>
    </div>
  );
}
