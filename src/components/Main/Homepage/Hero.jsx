import React from "react";
import { useTranslation } from "react-i18next";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  const { t } = useTranslation("global");
  return (
    <div
      className="relative flex flex-col items-center justify-center w-screen h-[60vh] mt-14 bg-cover bg-center"
      style={{ backgroundImage: "url('assets/destinations/ai7.png')" }}
    >
      <div className="absolute inset-0 bg-black/20 z-0"></div>

      <div className="relative z-10 flex flex-col items-center text-center px-4">
        <h1
          className="text-white text-3xl md:text-4xl lg:text-[50px] font-bold mb-2"
          style={{ textShadow: "2px 2px 30px rgba(0,0,0,0.75)" }}
        >
          Bosnia Starts Here
        </h1>
        <h2
          className="text-white font-medium text-md md:text-lg lg:text-[22px] mb-10"
               style={{ textShadow: "2px 2px 30px rgba(0,0,0,0.75)" }}
        >
           <span className="font-semibold">Plan less.</span> We’ve got your hotel, driver & guide ready
        </h2>

        <Link to="/book-trip" className="group">
          <button className="relative inline-block p-px font-semibold leading-6 text-white bg-[#22c55e] shadow-2xl cursor-pointer rounded-xl transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95">
            <span className="absolute inset-0 rounded-xl p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
            <span className="relative z-1 block px-4 py-2 rounded-xl">
              <div className="relative z-1 flex items-center space-x-3">
                <span className="transition-all duration-500 group-hover:translate-x-1 text-md md:text-lg lg:text-xl">
                  {t("common.book-your-trip")}
                </span>
                <svg
                  className="w-5 h-5 md:w-6 md:h-6 transition-transform duration-500 group-hover:translate-x-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clipRule="evenodd"
                    d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
                    fillRule="evenodd"
                  ></path>
                </svg>
              </div>
            </span>
          </button>
        </Link>
      </div>

      {/* Down Arrow */}
      <div className="absolute bottom-6 animate-bounce z-10">
        <ChevronDown className="text-white w-14 h-14" />
      </div>
    </div>
  );
};

export default Hero;
