import React from "react";
import { useTranslation } from "react-i18next";

const SpecialRequests = ({ specialRequests, setSpecialRequests }) => {
  const { t } = useTranslation("global");
  return (
    <div className="flex flex-col justify-center items-center text-sm">
      <label className="block font-semibold text-xs sm:text-sm text-gray-800 ml-2">
      {t("booking-page.special-requests")}
      </label>
      <textarea
        value={specialRequests}
        onChange={(e) => setSpecialRequests(e.target.value)}
        rows="3"
        placeholder= {t("booking-page.special-requests-placeholder")}
        className="block w-full rounded-xl h-[50px] py-1.5 px-2 border-1 border-gray-300 bg-white text-gray-800 placeholder:text-xs sm:placeholder:text-xs mt-2 resize-none"
        style={{ boxShadow: "0 0 30px rgba(0, 0, 0, 0.1)" }}
      ></textarea>
    </div>
  );
};

export default SpecialRequests;
