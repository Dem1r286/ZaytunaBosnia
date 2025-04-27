import React from "react";
import { useTranslation } from "react-i18next";

const SpecialRequests = ({ specialRequests, setSpecialRequests }) => {
  const { t, i18n } = useTranslation("global");
  return (
    <div className="flex flex-col justify-center items-center w-full">
      <label className="block font-semibold text-sm text-gray-800 ml-2">
      {t("booking-page.special-requests")}
      </label>
      <textarea
        value={specialRequests}
        onChange={(e) => setSpecialRequests(e.target.value)}
        rows="3"
        placeholder= {t("booking-page.special-requests-placeholder")}
        className="block w-[90%] rounded-xl h-[50px] py-1.5 px-2 ring-1 ring-gray-300 bg-gray-100 text-gray-800 placeholder:text-sm mt-2 resize-none"
      ></textarea>
    </div>
  );
};

export default SpecialRequests;
