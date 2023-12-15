import Image from "next/image";
import Link from "next/link";

export default function FooterSection() {
  return (
    <>
      <div className="bg-[#F4EFEC]">
        <div className="relative w-100">
          <div style={{top: -60}} className="text-with-background">
            {/* <div className="background-image">
              <Image
                src="/1/footer-bg.png"
                alt="Background Image"
                layout="fill"
                objectFit="cover"
              />
            </div> */}
            <div className="text mt-16">
              <p className="text-center font-libre text-[16px] text-[#B6968B]">
                Wedding Invitation
              </p>
              <p className="font-elwiss text-center text-[#507554] text-[40px]">
                Win & Vania
              </p>
              <p className="text-center font-libre text-[16px] text-[#B6968B]">
                16 . 12 . 2023
              </p>
            </div>
          </div>
        </div>
        <div className="w-full flex m-auto justify-between"></div>
        <div className="bg-no-repeat bg-cover bg-center">
          <div className="w-full flex justify-between">
            <Image
              src="/1/footer-bottom.jpg"
              alt="breakout"
              height={100}
              width={1000}
            />
          </div>
        </div>
      </div>
      <style>
        {`
          .text-with-background {
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            height: 300px; /* Set the desired height */
          }
          
          .background-image {
            position: absolute;
            width: 100%;
            height: 60%;
            z-index: 0;
          }
          
          .text {
            z-index: 1;
            text-align: center;
            padding: 20px;
          }
        `}
      </style>
    </>
  );
}
