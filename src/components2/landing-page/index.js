import Image from "next/image";

export default function LandingPage({ handleOpenInvitations, recieverName }) {
  return (
    // <div className="md:px-[30vw]">
    <div className="bg-arsellVanilla bg-cover bg-fixed bg-no-repeat h-screen relative">
      <div className="flex flex-col absolute justify-between items-center w-full h-full">
        <div className="w-full">
          <img src="/1/daun-atas.png" alt="daun" className="w-full" />
        </div>

        <div className="flex flex-col h-full items-center justify-between">
          <div>
            <h1
              data-aos="fade-down"
              className="text-[#504533] text-5xl font-elwiss text-center !text-white"
            >
              Win & Vania
            </h1>
            {recieverName.length > 1 && (
              <h1
                data-aos="zoom-in"
                className="text-[#504533] text-lg font-bold font-libreCaslon text-center px-12 !text-white"
              >
                Teruntuk <br />
                {recieverName}
              </h1>
            )}
          </div>

          <div>
            <div className="pb-10">
              <h1
                data-aos="zoom-in"
                className="text-[#504533] text-lg font-elwiss text-center !text-[18px] leading-[15px] !text-white"
              >
                15 December 2023 <br />
              </h1>
            </div>

            <button
              data-aos="fade-up"
              onClick={handleOpenInvitations}
              className="mt-5 bg-[#507643] px-6 py-2 font-libreCaslon rounded-lg text-md tracking-wide !text-white"
            >
              Buka Undangan
            </button>
          </div>
        </div>

        <div className="w-full rotate-180">
          <img src="/1/daun-atas.png" alt="daun" className="w-full" />
        </div>
      </div>
    </div>
  );
}
