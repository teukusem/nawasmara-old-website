import { useState } from 'react';
import QRCodeGenerator from "../../global/QrCodeGenerator";

export default function LandingPage({ handleOpenInvitations, recieverName, title, uuid }) {
  const [startY, setStartY] = useState(0);
  const [currentY, setCurrentY] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [hasMoved, setHasMoved] = useState(false);
  const [showQRSheet, setShowQRSheet] = useState(false);

  const handleTouchStart = (e) => {
    // Check if the touch started on a button or interactive element
    if (e.target.closest('button')) {
      return;
    }
    setStartY(e.touches[0].clientY);
    setCurrentY(e.touches[0].clientY);
    setIsDragging(true);
    setHasMoved(false);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const newY = e.touches[0].clientY;
    setCurrentY(newY);
    
    // Mark as moved if there's significant movement
    if (Math.abs(newY - startY) > 10) {
      setHasMoved(true);
    }
  };

  const handleTouchEnd = () => {
    if (!isDragging) return;
    
    const deltaY = startY - currentY;
    const threshold = 100; // Minimum swipe distance in pixels
    
    // Only trigger if user actually swiped (moved) and met the threshold
    if (hasMoved && deltaY > threshold) {
      handleOpenInvitations();
    }
    
    setIsDragging(false);
    setHasMoved(false);
    setStartY(0);
    setCurrentY(0);
  };

  // Mouse events for desktop testing
  const handleMouseDown = (e) => {
    // Check if the mouse down started on a button or interactive element
    if (e.target.closest('button')) {
      return;
    }
    setStartY(e.clientY);
    setCurrentY(e.clientY);
    setIsDragging(true);
    setHasMoved(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const newY = e.clientY;
    setCurrentY(newY);
    
    // Mark as moved if there's significant movement
    if (Math.abs(newY - startY) > 10) {
      setHasMoved(true);
    }
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    
    const deltaY = startY - currentY;
    const threshold = 100;
    
    // Only trigger if user actually moved (dragged/swiped) and met the threshold
    if (hasMoved && deltaY > threshold) {
      handleOpenInvitations();
    }
    
    setIsDragging(false);
    setHasMoved(false);
    setStartY(0);
    setCurrentY(0);
  };

  return (
    <div 
      className="fixed inset-0 bg-fixed bg-center bg-no-repeat bg-cover cursor-pointer select-none bg-naufalLiza"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      <div className="relative w-full h-full overflow-y-auto">
        <div className="flex flex-col min-h-screen">
          <div className="flex-shrink-0 w-full">
            <img src="/1/daun-atas.png" alt="daun" className="w-full h-auto" />
          </div>

          <div className="flex flex-col items-center justify-between flex-1 px-4 py-8">
            <div className="mb-8 text-center">
              <h1
                data-aos="fade-down"
                className="text-[#504533] text-5xl font-elwiss text-center mb-4"
              >
                {title}
              </h1>
              {recieverName.length > 1 && (
                <h1
                  data-aos="zoom-in"
                  className="text-[#504533] text-lg font-bold font-libreCaslon text-center px-12"
                >
                  Invite You To Celebrate Our Wedding <br />
                  <span className="font-normal">{recieverName}</span>
                </h1>
              )}
            </div>

            <div className="text-center">
              <div className="pb-10">
                <h1
                  data-aos="zoom-in"
                  className="text-[#504533] text-lg font-elwiss text-center !text-[18px] leading-[15px]"
                >
                  20 juli 2025 <br />
                </h1>
              </div>

              {/* QR Code Button */}
              <div className="flex justify-center mb-4">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowQRSheet(true);
                  }}
                  onTouchStart={(e) => e.stopPropagation()}
                  onMouseDown={(e) => e.stopPropagation()}
                  className="px-6 py-3 bg-[#507554] text-white rounded-lg font-libreCaslon text-[14px] hover:bg-[#3d5a41] transition-colors duration-300 shadow-md"
                >
                  Show QR Code
                </button>
              </div>

              {/* Swipe up indicator */}
              <div
                data-aos="fade-up"
                className="flex flex-col items-center mt-5 text-[#504533]"
              >
                <div className="mb-2">
                  <svg 
                    className="w-8 h-8 animate-bounce" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M5 15l7-7 7 7" 
                    />
                  </svg>
                </div>
                <p className="text-sm tracking-wide font-libreCaslon opacity-80">
                  Swipe up to open invitation
                </p>
              </div>
            </div>
          </div>

          <div className="flex-shrink-0 w-full rotate-180">
            <img src="/1/daun-atas.png" alt="daun" className="w-full h-auto" />
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
    </div>
  );
}
