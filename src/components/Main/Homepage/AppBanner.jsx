import React from "react";
import { useTranslation } from "react-i18next";

const AppBanner = () => {
   const { t, i18n } = useTranslation("global");
  return (
    <div id="app-banner"
      className="flex min-w-[320px] flex-col lg:flex-row items-center justify-center bg-gradient-to-r from-[#20b970] to-[#1a9b61] h-[25rem] rounded-3xl w-fit px-6 sm:px-10 lg:px-16  pb-30 lg:pb-0 lg:gap-20 mt-20"
      style={{ boxShadow: "0 0 40px rgba(0, 0, 0, 0.3)" }}>
      <img src="assets/other/phonemockup.webp" className="w-[12em] md:w-[15em] lg:w-[24em] mb-4 lg:mb-20" alt="Phone Mockup" />

      <div className="flex flex-col justify-center items-center text-center gap-3 lg:gap-5">
        <h2 className="text-white text-md md:text-2xl lg:text-3xl font-semibold">
        {t("app-banner.heading1")} <br /> {t("app-banner.heading2")}
        </h2>
        <p className="text-white text-[10px] sm:text-xs">
        {t("app-banner.subtext1")} <br />
        {t("app-banner.subtext2")} <br />
        {t("app-banner.subtext3")}
        </p>

        <div className="flex gap-6 mt-4">
          <img src="assets/icons/googleplay.webp" className="w-25 md:w-35" alt="Google Play" />
          <img src="assets/icons/appstore.webp" className="w-25 md:w-35" alt="App Store" />
        </div>
        <p className="text-white mt-2 text-xs font-semibold">*App currently down for maintenance.</p>
      </div>
    </div>
  );
};

export default AppBanner;
