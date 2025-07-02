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
          {/* <Image
            className="fcloud01 absolute"
            src="/assets/awan.svg"
            height={200}
            width={150}
            alt="awan"
          /> */}
          <Image
            className="fcloud02 absolute"
            src="/assets/awan-2.svg"
            height={200}
            width={200}
            alt="awan-2"
          />
          <Image
            className="fcloud01 absolute"
            src="/assets/awan-2.svg"
            height={200}
            width={200}
            alt="awan-2"
          />
        </div>
        <div>
          <Image
            data-aos="fade-right"
            src="/assets/landing-branch.svg"
            height={200}
            width={300}
            alt="anding-b"
          />
        </div>
        <div className="flex justify-between !w-full absolute top-[10%]">
          <Image
            data-aos="zoom-in"
            src="/assets/poon1.svg"
            height={100}
            width={200}
            alt="paper"
          />
          <Image
            data-aos="zoom-in"
            src="/assets/poon2.svg"
            height={100}
            width={200}
            alt="paper"
          />
        </div>
        <div className="flex w-full absolute justify-center top-[22%]">
          <Image
            data-aos="zoom-in"
            src="/assets/paper-awan.svg"
            height={200}
            width={300}
            alt="paper"
          />
        </div>

        <div className="flex flex-col absolute justify-between w-full top-[30vh] min-h-[40vh]">
          <div>
            <h1
              data-aos="fade-down"
              className="text-[#504533] text-5xl font-bold font-bethaine text-center"
            >
              Arief
            </h1>
            <h1
              data-aos="zoom-in"
              className="text-[#504533] text-5xl font-bold font-bethaine text-center"
            >
              &
            </h1>

            
            <h1
              data-aos="fade-up"
              className="text-[#504533] text-5xl font-bold font-bethaine text-center"
            >
              Nabilla
            </h1>

            
            <h1
              data-aos="zoom-in"
              className="text-[#504533] text-lg font-libreCaslon text-center !text-[14px]"
            >
              13 Oktober 2023 <br />
              Banda Aceh
            </h1>
            
            {recieverName.length > 1 && (
              <h1
                data-aos="zoom-in"
                className="text-[#504533] text-lg font-bold font-libreCaslon text-center px-12"
              >
                Teruntuk <br />
                {recieverName}
              </h1>
            )}
          </div>

          <div className="m-auto">
            <button
              data-aos="fade-up"
              onClick={handleOpenInvitations}
              className="mt-5 bg-[#504533] px-5 py-1.5 font-libreCaslon rounded-lg text-md tracking-wide !text-white"
            >
              Buka Undangan
            </button>
          </div>
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
