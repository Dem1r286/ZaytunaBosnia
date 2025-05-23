import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const HeaderLanguage = ({ onClick })  => {
  const { i18n } = useTranslation();
  const [isClicked, setIsClicked] = useState("en");

  const handleClick = () => {
    const newLang = isClicked === "en" ? "ar" : "en";
    setIsClicked(newLang);
    i18n.changeLanguage(newLang);
    
    if (onClick) {
      onClick();
    }
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
        <p className="mr-2">{isClicked === "en" ? "Arabic" : "English"}</p>
      </button>
    </div>
  );
};

export default HeaderLanguage;
