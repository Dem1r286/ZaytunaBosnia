import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const AboutUs = () => {
  const { t, i18n } = useTranslation("global");
  return (
    <div id="about-us" className="flex justify-center items-center flex-col gap-10">
      <div className="flex justify-center items-center flex-col">
        <h3 className="font-semibold text-4xl relative text-center">{t("about-us.heading")}</h3>
        <span className="bg-[#22c55e] rounded-2xl h-[5px] w-1/3 mt-3"></span>
      </div>
      <div className="flex justify-center items-center flex-col gap-10">
        <p className="text-md text-center max-w-[70%]">
        {t("about-us.text1")} <span className="font-semibold">{t("about-us.text2")}</span>, {t("about-us.text3")} {" "}
          <span className="font-semibold">{t("about-us.text4")}</span>
        </p>
        <Link to="contact">
            <button className="relative inline-block p-px font-semibold leading-6 text-white bg-[#22c55e] shadow-2xl cursor-pointer rounded-xl transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95">
              <span className="absolute inset-0 rounded-xl p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
              <span className="relative z-1 block px-4 py-2 rounded-xl">
                <div className="relative z-1 flex items-center space-x-3">
                  <span className="transition-all duration-500 group-hover:translate-x-1">
                  {t("common.contact-button")}
                  </span>
                  <svg
                    className="w-6 h-6 transition-transform duration-500 group-hover:translate-x-1"
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
