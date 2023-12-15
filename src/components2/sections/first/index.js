import Image from "next/image";
import BackgroundVideo from "../../background-video";

export default function FirstSection() {
  return (
    <div className="md:px-[32vw]">
      <div className="flex flex-col relative p-8 bg-[#F2EDEB] text-[#504533] bg-bgPrimary2 bg-cover bg-no-repeat">
        <p
          data-aos="zoom-in"
          className="text-center text-[#507554] leading-6 h-max w-full text-[18px] font-crimson pt-10">
          WEDDING INVITATION
        </p>

        <p
          data-aos="zoom-in"
          className="text-center text-[#3C5E50] leading-6 h-max w-full text-[40px] font-elwiss pt-24">
          Win & Vania
        </p>

        <img
          data-aos="zoom-in"
          src="/1/together2.png"
          className="pt-10 w-[120vw]"
        />
      </div>
    </div>
  );
}
