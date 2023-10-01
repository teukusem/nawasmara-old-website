import Image from "next/image";
import Link from "next/link";

export default function FooterSection() {
  return (
    <div className="md:px-[30vw]">
      <div className="md:px-16 ">
        <div className="pt-32 bg-gradient-to-t from-[#E8DDD0]">
          {/* <div className="w-full flex m-auto">
        <Image
          src="/assets/check-it.svg"
          alt="breakout"
          height={200}
          width={200}
        />
      </div> */}
          <div className="w-full flex m-auto justify-between">
            <Image
              src="/assets/awan-footer.svg"
              alt="breakout"
              height={200}
              width={200}
            />
            <Image
              src="/assets/awan-footer2.svg"
              alt="breakout"
              height={200}
              width={200}
            />
          </div>
          <div className="bg-building bg-no-repeat bg-cover bg-center">
            <div className="w-full flex justify-between">
              <Image
                src="/assets/poon-footer.svg"
                alt="breakout"
                height={100}
                width={100}
              />
              <div className="flex flex-col !w-full text-center mt-20">
                <p className="font-libre text-[16px] text-[#504533]">
                  Wedding Invitation
                </p>
                <p className="font-bethaine text-[#504533] text-[40px] mt-5">
                  Arief & Nabilla
                </p>
                <p className="font-libre text-[16px] text-[#504533]">
                  13 . 10 . 2023
                </p>

                <p className="font-libre text-[16px] text-[#504533] mt-20">
                  by
                </p>

                <Link
                  href="https://instagram.com/nawasmara"
                  className="flex justify-center"
                >
                  <Image src="/assets/ig.svg" alt="ig" width={12} height={12} />
                  <p className="font-libre text-[16px] text-[#504533]">
                    nawasmara
                  </p>
                </Link>
              </div>
              <Image
                src="/assets/poon-footer2.svg"
                alt="breakout"
                height={100}
                width={100}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
