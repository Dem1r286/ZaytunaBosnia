import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const AboutUs = () => {
  const { t } = useTranslation("global");
  return (
    <div id="about-us" className="flex justify-center items-center flex-col gap-5 md:gap-10 mb-6 md:mb-0">
      <div className="flex justify-center items-center flex-col">
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-1 md:mb-2 text-center whitespace-nowrap">{t("about-us.heading")}</h3>
        <span className="bg-[#22c55e] rounded-2xl h-[5px] w-1/3 md:mt-3"></span>
      </div>
      <div className="flex justify-center items-center flex-col gap-5 md:gap-10 px-10">
        <p className="w-screen text-[10px] sm:text-xs md:text-[14px] text-center px-10 md:px-20 max-w-[1800px]">
          {t("about-us.text1")} <span className="font-semibold">{t("about-us.text2")}</span>, {t("about-us.text3")} {" "}
          <span className="font-semibold">{t("about-us.text4")}</span>
        </p>
        <Link to="/contact">
          <button className="relative inline-block p-px font-semibold leading-6 text-white bg-[#22c55e] shadow-2xl cursor-pointer rounded-xl transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95">
            <span className="absolute inset-0 rounded-xl p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
            <span className="relative z-1 block px-4 py-2 rounded-xl">
              <div className="relative z-1 flex items-center space-x-3">
                <span className="transition-all duration-500 group-hover:translate-x-1 text-xs sm:text-sm md:text-md lg:text-[17px]">
                  {t("common.contact-button")}
                </span>
                <svg
                  className="w-4 h-4 md:w-6 md:h-6 transition-transform duration-500 group-hover:translate-x-1"
                  data-slot="icon"
                  aria-hidden="true"
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
    </div>
  );
};

export default AboutUs;
