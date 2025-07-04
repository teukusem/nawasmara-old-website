import Image from "next/image";
import { useState } from "react";
import QRCodeGenerator from "../../global/QrCodeGenerator";

export default function FooterSection({title, uuid, data}) {
  const [showQRSheet, setShowQRSheet] = useState(false);

  return (
    <>
      <div className="bg-[#F4EFEC]">
        <div className="relative w-100">
          <div style={{ top: -60 }} className="text-with-background">
            <div className="mt-16 text">
                 {/* <p
                data-aos="fade-up"
                className="text-center font-libre text-[16px] text-[#B6968B]"
              >
                20 . 07 . 2025
              </p>
               */}
              <p
                // data-aos="fade-up"
                className="text-center font-libre text-[16px] text-[#B6968B] mb-3"
              >
                Wedding Invitation
              </p>
              <p
                data-aos="fade-up"
                className="font-elwiss text-center text-[#507554] text-[40px]"
              >
                {title}
              </p>
                {/* <p
                className="text-center font-libre text-[16px]   text-[#507554]"
              >
               Kami yang berbahagia,
              </p> */}
              <div >
                <div className="grid max-w-xl grid-cols-2 grid-rows-1 gap-3 mx-auto">
                  {/* Groom Parents - Top Row */}
                  <div className="text-center">
                    <div 
                      className="font-libre text-[#B6968B] text-[10px] md:text-[12px] leading-tight"
                      dangerouslySetInnerHTML={{
                        __html: data?.footer?.parents?.groom || ""
                      }}
                    ></div>
                  </div>
                  
                  {/* Bride Parents - Top Row */}
                  <div className="text-center">
                    <div 
                      className="font-libre text-[#B6968B] text-[10px] md:text-[12px] leading-tight"
                      dangerouslySetInnerHTML={{
                        __html: data?.footer?.parents?.bride || ""
                      }}
                    ></div>
                  </div>
                  
                </div>
              </div>
           
              {/* QR Code Button */}
              <div className="flex justify-center mt-6">
                <button
                  onClick={() => setShowQRSheet(true)}
                  className="px-6 py-3 bg-[#507554] text-white rounded-lg font-libre text-[14px] hover:bg-[#3d5a41] transition-colors duration-300 shadow-md"
                >
                  Show QR Code
                </button>
              </div>

            
            </div>
          </div>
        </div>
        <div className="flex justify-between w-full m-auto"></div>
        <div className="bg-center bg-no-repeat bg-cover">
          <div data-aos="fade-up" className="flex justify-between w-full">
            <Image
              src="/1/footer-bottom.jpg"
              alt="breakout"
              height={100}
              width={1000}
            />
          </div>
        </div>
      </div>

      {/* Bottom Sheet for QR Code */}
      {showQRSheet && (
        <div className="fixed inset-0 z-50 flex items-end justify-center">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black bg-opacity-50"
            onClick={() => setShowQRSheet(false)}
          ></div>
          
          {/* Bottom Sheet */}
          <div className="relative w-full max-w-md p-6 mb-0 bg-white shadow-2xl rounded-t-3xl animate-slide-up">
            {/* Handle */}
            <div className="w-12 h-1 mx-auto mb-4 bg-gray-300 rounded-full"></div>
            
            {/* Header */}
            <div className="flex items-center justify-center mb-4">
              <h3 className="text-lg text-center font-semibold text-[#507554]">Wedding Invitation QR Code</h3>
            </div>
            
            {/* QR Code Generator */}
            <div className="flex justify-center">
              <QRCodeGenerator uuid={uuid} size={200} />
            </div>
          </div>
        </div>
      )}

      <style>
        {`
          .text-with-background {
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            height: 400px; /* Increased height to accommodate parents section */
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
          
          @keyframes slide-up {
            from {
              transform: translateY(100%);
            }
            to {
              transform: translateY(0);
            }
          }
          
          .animate-slide-up {
            animation: slide-up 0.3s ease-out;
          }
        `}
      </style>
    </>
  );
}
