import React from 'react';
import { useTranslation } from "react-i18next";

const PackageOptions = ({
  includeTravelGuide,
  setIncludeTravelGuide,
  hasBookedFlight,
  setHasBookedFlight,
  selectedPackage,
  setSelectedPackage
}) => {
    const { t, i18n } = useTranslation("global");
  return (
    <div className="flex flex-row gap-10 justify-center items-center bg-gray-100 px-10 rounded-xl py-4">
  
      {/* Booked Flight */}
      <div className="flex flex-col justify-center items-center">
        <label className="block font-semibold text-sm text-gray-800">
        {t("booking-page.book-flight")}
        </label>
        <div className="flex gap-4 mt-2">
          <button
            className={`px-4 rounded-md font-semibold text-sm transition ${
              hasBookedFlight === true
                ? "bg-green-600 text-white"
                : "bg-gray-300 text-gray-800"
            }`}
            onClick={() => setHasBookedFlight(true)}
          >
             {t("booking-page.yes")}
          </button>
          <button
            className={`px-4 py-2 rounded-md font-semibold text-sm transition ${
              hasBookedFlight === false
                ? "bg-red-600 text-white"
                : "bg-gray-300 text-gray-800"
            }`}
            onClick={() => setHasBookedFlight(false)}
          >
            {t("booking-page.no")}
          </button>
        </div>
      </div>

      {/* Package Type */}
      <div className="flex flex-col justify-center items-center">
        <label className="block font-semibold text-sm text-gray-800 ml-2">
        {t("booking-page.package-type")}
        </label>
        <div className="flex gap-4 mt-2">
          <button
            className={`px-4 py-2 rounded-md font-semibold text-sm transition ${
              selectedPackage === "regular"
                ? "bg-blue-600 text-white"
                : "bg-gray-300 text-gray-800"
            }`}
            onClick={() => setSelectedPackage("regular")}
          >
            {t("booking-page.regular")}
          </button>
          <button
            className={`px-4 py-2 rounded-md font-semibold text-sm transition ${
              selectedPackage === "vip"
                ? "bg-yellow-500 text-white"
                : "bg-gray-300 text-gray-800"
            }`}
            onClick={() => setSelectedPackage("vip")}
          >
             {t("booking-page.vip")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PackageOptions;
