import Image from "next/image";
import Link from "next/link";

export default function FooterSection() {
  return (
    <>
      <div className="md:px-[30vw]">
        footer start
        <div className="md:px-16 ">
          <div className="bg-[#F4EFEC]">
            <div className="relative w-100">
              <div className="text-with-background">
                <div className="background-image">
                  <Image
                    src="/1/footer-bg.png"
                    alt="Background Image"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="text">
                  <p className="text-center font-libre text-[16px] text-[#504533]">
                    Wedding Invitation
                  </p>
                  <p className="text-center font-bethaine text-[#504533] text-[40px] mt-5">
                    Win & Vania
                  </p>
                  <p className="text-center font-libre text-[16px] text-[#504533]">
                    16 . 12 . 2023
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full flex m-auto justify-between"></div>
            <div className="bg-no-repeat bg-cover bg-center">
              <div className="w-full flex justify-between">
                <Image
                  src="/1/footer-bottom.svg"
                  alt="breakout"
                  
                  height={100}
                  width={1000}
                />
              </div>
            </div>
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
