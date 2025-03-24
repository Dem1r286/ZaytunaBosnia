import React from "react";

const CourtBanner = () => {
  return (
    <div id="court-banner" className="flex bg-blue-100 h-[25rem] rounded-3xl shadow-lg px-20 mt-20">
      <div id="court-content" className="flex justify-center gap-20 py-10">
        <div className="flex flex-col justify-center items-center text-center gap-2">
          <h3 className="text-3xl font-semibold">Do you need court interpreter?</h3>
          <p className="mb-14">
            Our team of expert court interpreters provides fast <br />
            and accurate translation for Bosnian and Arabic!
          </p>
          <div className="flex flex-row gap-14">
            <a
              href="https://wa.me/38761353525"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#22c55e] w-fit h-fit py-2 px-4 text-white font-semibold rounded-xl text-sm hover:scale-104 transition-transform duration-300"
            >
              Contact Us
            </a>

            <a
              href="https://arapskiprijevod.ba"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#22c55e] w-fit h-fit py-2 px-4 text-white font-semibold rounded-xl text-sm hover:scale-104 transition-transform duration-300"
            >
              Go To Page
            </a>
          </div>
        </div>
        <img src="./src/assets/lawyer.png" className="w-fit" alt="Lawyer Illustration" />
      </div>
    </div>
  );
};

export default CourtBanner;
