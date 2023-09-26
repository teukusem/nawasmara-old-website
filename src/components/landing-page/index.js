import Image from "next/image";

export default function LandingPage({ handleOpenInvitations, recieverName }) {
  // return (
  //   <div className="md:px-[30vw]">
  //     <div className="bg-[#f2edeb] bg-home bg-no-repeat bg-cover">
  // <div className="flex justify-center flex-col items-center h-screen">
  //   <h1 className="text-[#504533] text-5xl font-bold font-bethaine text-center mt-24">
  //     Arief
  //     <br />
  //     & <br />
  //     Nabilla
  //   </h1>
  //   <h1 className="text-[#504533] text-lg font-bold font-libreCaslon text-center mt-7">
  //     13 Oktober 2023 <br />
  //     Banda Aceh
  //   </h1>
  //   <button
  //     onClick={handleOpenInvitations}
  //     className="mt-5 bg-[#504533] px-5 py-1.5 font-libreCaslon rounded-lg text-md tracking-wide !text-white"
  //   >
  //     Buka Undangan
  //   </button>
  //   <h1 className="absolute bottom-[185px] text-[#504533] text-lg font-bold font-libreCaslon text-center">
  //     {recieverName}
  //   </h1>
  // </div>
  //     </div>
  //   </div>
  // );
  return (
    <div className="md:px-[30vw]">
      <div className="bg-[#f2edeb] h-screen relative">
        <div className="flex justify-between relative">
          <Image
            className="absolute"
            src="/assets/awan.svg"
            height={200}
            width={150}
            alt="awan"
          />
          <Image
            className="absolute left-[40%]"
            src="/assets/awan-2.svg"
            height={200}
            width={200}
            alt="awan-2"
          />
        </div>
        <Image
          src="/assets/landing-branch.svg"
          height={200}
          width={300}
          alt="anding-b"
        />

        <Image
          src="/assets/paper2.png"
          height={200}
          width={300}
          className="!w-full absolute top-[10%]"
          alt="paper"
        />
        <div className="flex justify-between flex-col items-center !z-[99] absolute w-full h-[30vh] md:h-[20vh]">
          <h1 className="text-[#504533] text-5xl font-bold font-bethaine text-center">
            Arief
            <br />
            & <br />
            Nabilla
          </h1>
          {recieverName.length > 1 && (
            <h1 className="text-[#504533] text-lg font-bold font-libreCaslon text-center mt-7">
              Teruntuk <br />
              {recieverName}
            </h1>
          )}

          <button
            onClick={handleOpenInvitations}
            className="mt-5 bg-[#504533] px-5 py-1.5 font-libreCaslon rounded-lg text-md tracking-wide !text-white"
          >
            Buka Undangan
          </button>
        </div>
      </div>
      {/* <div className="absolute bottom-0 md:w-[30vw] flex">
        <h1 className="text-[#504533] text-lg font-libreCaslon text-center mt-7 !text-[14px]">
          13 Oktober 2023 <br />
          Banda Aceh
        </h1>
        <Image src="/assets/check-it.svg" height={20} width={300} className="!w-full" alt="checkit0-2" />
      </div> */}
    </div>
  );
}
