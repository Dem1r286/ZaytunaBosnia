import React from "react";

const HeaderLanguage = () => {
    return (
      <div id="header-language" className="flex items-center justify-center">
        <button className="flex justify-center items-center gap-4 px-2 bg-[#22c55e] text-white font-semibold py-2 rounded-3xl text-sm hover:scale-104 transition-transform duration-300">
          <div className="">
          <img src="./src/assets/translation.png" alt="" className="w-6"></img>
          </div>
          <p className="mr-2">English</p>
        </button>
      </div>
    );
  };

export default HeaderLanguage;
  