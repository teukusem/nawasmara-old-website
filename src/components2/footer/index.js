import Image from "next/image";
import { useState } from "react";
import QRCodeGenerator from "../../global/QrCodeGenerator";

export default function FooterSection({title, uuid}) {
  const [showQRSheet, setShowQRSheet] = useState(false);

  return (
    <>
      <div className="bg-[#F4EFEC]">
        <div className="relative w-100">
          <div style={{ top: -60 }} className="text-with-background">
            <div className="mt-16 text">
              <p
                data-aos="fade-up"
                className="text-center font-libre text-[16px] text-[#B6968B]"
              >
                Wedding Invitation
              </p>
              <p
                data-aos="fade-up"
                className="font-elwiss text-center text-[#507554] text-[40px]"
              >
                {title}
              </p>
              <p
                data-aos="fade-up"
                className="text-center font-libre text-[16px] text-[#B6968B]"
              >
                16 . 12 . 2023
              </p>
              
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
        <div className="flex justify-between m-auto w-full"></div>
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
        <div className="flex fixed inset-0 z-50 justify-center items-end">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black bg-opacity-50"
            onClick={() => setShowQRSheet(false)}
          ></div>
          
          {/* Bottom Sheet */}
          <div className="relative p-6 mb-0 w-full max-w-md bg-white rounded-t-3xl shadow-2xl animate-slide-up">
            {/* Handle */}
            <div className="mx-auto mb-4 w-12 h-1 bg-gray-300 rounded-full"></div>
            
            {/* Header */}
            <div className="flex justify-center items-center mb-4">
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
