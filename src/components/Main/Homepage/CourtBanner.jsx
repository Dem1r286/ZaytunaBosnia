import React from "react";
import { useTranslation } from "react-i18next";

const CourtBanner = () => {
  const { t, i18n } = useTranslation("global");
  return (
    <div
  id="court-banner"
  className="flex bg-white h-[25rem] rounded-3xl px-20 mt-20"
  style={{ boxShadow: "0 0 50px rgba(0, 0, 0, 0.1)" }}>
      <div id="court-content" className="flex justify-center gap-20 py-10">
        <div className="flex flex-col justify-center items-center text-center gap-2">
          <h3 className="text-3xl font-semibold">{t("court-banner.heading")}</h3>
          <p className="mb-14">
          {t("court-banner.text1")} <br />
          {t("court-banner.text2")}
          </p>
          <div className="flex flex-row gap-14">
            <a
              href="https://wa.me/38761353525"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#22c55e] w-fit h-fit py-2 px-4 text-white font-semibold rounded-xl text-sm hover:scale-104 transition-transform duration-300"
            >
             {t("common.contact-button")}
            </a>

            <a
              href="https://arapskiprijevod.ba"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#22c55e] w-fit h-fit py-2 px-4 text-white font-semibold rounded-xl text-sm hover:scale-104 transition-transform duration-300"
            >
              {t("court-banner.button1")}
            </a>
          </div>
        </div>
        <img src="assets/other/courtinterpreter.png" className="w-fit" alt="Court Interpreter Illustration" />
      </div>
    </div>
  );
};

export default CourtBanner;