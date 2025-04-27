import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const HeaderLanguage = () => {
  const { t, i18n } = useTranslation();
  const [isClicked, setIsClicked] = useState("en");

  const handleClick = (lang) => {
    setIsClicked(lang);
    i18n.changeLanguage(lang);
  };

  return (
    <div id="header-language" className="flex items-center justify-center">
      <button
        onClick={() => handleClick(isClicked === "en" ? "ar" : "en")}
        className="flex justify-center items-center gap-4 px-2 bg-[#22c55e] w-[130px] text-white font-semibold py-2 rounded-3xl text-sm hover:scale-105 transition-transform duration-300"
      >
        <div>
          <img src="assets/icons/translation.webp" alt="translation icon" className="w-6" />
        </div>
        <p className="mr-2">{isClicked === "en" ? "English" : "Arabic"}</p>
      </button>
    </div>
  );
};

export default HeaderLanguage;
