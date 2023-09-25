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
    </div>
  );
}
