import React from "react";
import { Link } from "react-router-dom";
import PackageCardHomepage from "./components/PackageCardHomepage";
import { useTranslation } from "react-i18next";

const Packages = () => {
   const { t } = useTranslation("global");
  return (
    <div id="packages" className="flex justify-center items-center flex-col gap-20 px-20 w-screen">
      <div className="w-screen flex justify-center flex-col items-center px-10">
        <h4 className="text-2xl sm:text-3xl md:text-4xl  font-semibold mb-2 whitespace-nowrap">{t("travel-packages-homepage.heading")}</h4>
        <p className="w-full md:w-[60%] text-center font-medium text-[10px] sm:text-xs md:text-[14px] text-gray-700">
        {t("travel-packages-homepage.text")}
        </p>
      </div>
    
      <PackageCardHomepage />

      <div className="flex items-center justify-center">
        <div className="relative group">
          <Link to="/travel-packages">
            <button className="relative inline-block p-px font-semibold leading-6 text-white bg-[#22c55e] shadow-2xl cursor-pointer rounded-xl transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95">
              <span className="absolute inset-0 rounded-xl p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
              <span className="relative z-1 block px-6 py-3 rounded-xl bg-[#22c55e]">
                <div className="relative z-1 flex items-center space-x-2">
                  <span className="transition-all duration-500 group-hover:translate-x-1 text-xs sm:text-sm md:text-md lg:text-[17px]">
                  {t("travel-packages-homepage.button")}
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
    </div>
  );
};

export default Packages;
