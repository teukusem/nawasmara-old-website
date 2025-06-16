import { useState } from 'react';

export default function LandingPage({ handleOpenInvitations, recieverName, title }) {
  const [startY, setStartY] = useState(0);
  const [currentY, setCurrentY] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const handleTouchStart = (e) => {
    setStartY(e.touches[0].clientY);
    setIsDragging(true);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    setCurrentY(e.touches[0].clientY);
  };

  const handleTouchEnd = () => {
    if (!isDragging) return;
    
    const deltaY = startY - currentY;
    const threshold = 100; // Minimum swipe distance in pixels
    
    if (deltaY > threshold) {
      handleOpenInvitations();
    }
    
    setIsDragging(false);
    setStartY(0);
    setCurrentY(0);
  };

  // Mouse events for desktop testing
  const handleMouseDown = (e) => {
    setStartY(e.clientY);
    setIsDragging(true);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    setCurrentY(e.clientY);
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    
    const deltaY = startY - currentY;
    const threshold = 100;
    
    if (deltaY > threshold) {
      handleOpenInvitations();
    }
    
    setIsDragging(false);
    setStartY(0);
    setCurrentY(0);
  };

  return (
    <div 
      className="fixed inset-0 bg-fixed bg-center bg-no-repeat bg-cover bg-naufalLiza cursor-pointer select-none"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      <div className="overflow-y-auto relative w-full h-full">
        <div className="flex flex-col min-h-screen">
          <div className="flex-shrink-0 w-full">
            <img src="/1/daun-atas.png" alt="daun" className="w-full h-auto" />
          </div>

          <div className="flex flex-col flex-1 justify-between items-center px-4 py-8">
            <div className="mb-8 text-center">
              <h1
                data-aos="fade-down"
                className="text-[#504533] text-5xl font-elwiss text-center !text-white mb-4"
              >
                {title}
              </h1>
              {recieverName.length > 1 && (
                <h1
                  data-aos="zoom-in"
                  className="text-[#504533] text-lg font-bold font-libreCaslon text-center px-12 !text-white"
                >
                  Invite You To Celebrate Our Wedding <br />
                  {recieverName}
                </h1>
              )}
            </div>

            <div className="text-center">
              <div className="pb-10">
                <h1
                  data-aos="zoom-in"
                  className="text-[#504533] text-lg font-elwiss text-center !text-[18px] leading-[15px] !text-white"
                >
                  16 December 2023 <br />
                </h1>
              </div>

              {/* Swipe up indicator */}
              <div
                data-aos="fade-up"
                className="mt-5 flex flex-col items-center text-white"
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
                <p className="text-sm font-libreCaslon tracking-wide opacity-80">
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
    </div>
  );
}
