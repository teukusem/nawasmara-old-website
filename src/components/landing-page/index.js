export default function LandingPage({ handleOpenInvitations, recieverName }) {
  return (
    <div className="md:px-[30vw]">
      <div className="bg-[#f2edeb] bg-home bg-no-repeat bg-cover">
        <div className="flex justify-center flex-col items-center h-screen">
          <h1 className="text-[#504533] text-5xl font-bold font-bethaine text-center mt-24">
            Arief
            <br />
            & <br />
            Nabilla
          </h1>
          <h1 className="text-[#504533] text-lg font-bold font-libreCaslon text-center mt-7">
            13 Oktober 2023 <br />
            Banda Aceh
          </h1>
          <button
            onClick={handleOpenInvitations}
            className="mt-5 bg-[#504533] px-5 py-1.5 font-libreCaslon rounded-lg text-md tracking-wide !text-white"
          >
            Buka Undangan
          </button>
          <h1 className="absolute bottom-[185px] text-[#504533] text-lg font-bold font-libreCaslon text-center">
            {recieverName}
          </h1>
        </div>
      </div>
    </div>
  );
}
