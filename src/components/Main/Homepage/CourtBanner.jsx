import React from "react";

const CourtBanner = () => {
  return (
    <div className="flex bg-blue-100 h-[25rem] rounded-3xl shadow-lg">
      <div
        id="court-content"
        className="flex justify-center gap-20 py-10 px-20">
        <div className="flex flex-col justify-center items-center text-center gap-2">
          <h3 className="text-3xl font-semibold">
            Do you need court interpreter?
          </h3>
          <p className="mb-14"> Our team of expert court interpreters provides fast <br></br> and accurate translation for Bosnian and Arabic!
          </p>
          <div className="flex flex-row gap-14">
          <button className="bg-[#20b970] w-fit h-fit py-2 px-4 text-white font-semibold rounded-xl text-sm">Contact Us</button>
          <button className="bg-[#20b970] w-fit h-fit py-2 px-4 text-white font-semibold rounded-xl text-sm">Go To Page</button>
          </div>
        </div>
        <img src="./src/assets/lawyer.png" className="w-fit" alt="" />
      </div>
    </div>
  );
};

export default CourtBanner;

