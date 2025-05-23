import React from "react";
import { useTranslation } from "react-i18next";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  const { t, i18n } = useTranslation("global");
  return (
    <div
      className="flex flex-col items-center justify-center w-screen h-[60vh] mt-14 bg-cover bg-center relative"
      style={{ backgroundImage: "url('assets/destinations/ai.png')" }}
    >
      <h1 className="text-white text-5xl font-semibold mb-4">{t("hero.heading")}</h1>
      <h2 className="text-white text-2xl font-medium">{t("hero.heading2")}</h2>

      <div className="relative group mt-20 backdrop-blur-md">
          <Link to="/book-trip">
            <button className="relative inline-block p-px font-semibold leading-6 text-white bg-[#22c55e] shadow-2xl cursor-pointer rounded-xl transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95">
              <span className="absolute inset-0 rounded-xl p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
              <span className="relative z-1 block px-6 py-3 rounded-xl bg-[#22c55e]">
                <div className="relative z-1 flex items-center space-x-2">
                  <span className="transition-all duration-500 group-hover:translate-x-1 text-lg">
                  {t("common.book-your-trip")}
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

      <div className="absolute bottom-6 animate-bounce">
        <ChevronDown className="text-white w-14 h-14" />
      </div>
    </div>
  );
};

export default Hero;
