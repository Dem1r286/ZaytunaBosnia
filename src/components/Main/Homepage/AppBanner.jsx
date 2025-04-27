import React from "react";
import { useTranslation } from "react-i18next";

const AppBanner = () => {
   const { t, i18n } = useTranslation("global");
  return (
    <div id="app-banner"
      className="flex items-center justify-center bg-gradient-to-r from-[#20b970] to-[#1a9b61] h-[25rem] rounded-3xl w-fit px-16 gap-20 mt-20"
      style={{ boxShadow: "0 0 40px rgba(0, 0, 0, 0.2)" }}>
      <img src="assets/other/phonemockup.webp" className="w-[28em] mb-16" alt="Phone Mockup" />

      <div className="flex flex-col justify-center items-center text-center gap-5">
        <h2 className="text-white text-3xl font-semibold">
        {t("app-banner.heading1")} <br /> {t("app-banner.heading2")}
        </h2>
        <p className="text-white text-xs">
        {t("app-banner.subtext1")} <br />
        {t("app-banner.subtext2")} <br />
        {t("app-banner.subtext3")}
        </p>

        <div className="flex gap-6 mt-4">
          <img src="assets/icons/googleplay.webp" className="w-35" alt="Google Play" />
          <img src="assets/icons/appstore.webp" className="w-35" alt="App Store" />
        </div>
      </div>
    </div>
  );
};

export default AppBanner;
