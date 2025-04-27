import React from "react";
import { useTranslation } from "react-i18next";

const HotelContainer = ({ hotel, setHotel }) => {
  const getMapLink = (hotelName) => {
    const query = encodeURIComponent(hotelName);
    return `https://maps.google.com?q=${query}`;
  };
  const { t, i18n } = useTranslation("global");

  return (
    <div className="flex flex-col justify-center bg-gray-100 p-6 rounded-xl shadow-md w-full gap-4">
      <div className="flex justify-center items-center flex-row gap-6">
        <h2 className="text-lg font-semibold">{t("booking-page.hotel")}</h2>
        <a
          href={getMapLink(hotel)}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold bg-blue-600 text-white px-3 py-2 text-sm rounded-xl hover:bg-blue-700"
        >
          {t("booking-page.hotel-map-button")}
        </a>
      </div>

      <select
        value={hotel}
        onChange={(e) => setHotel(e.target.value)}
        className="w-full p-2 border rounded-md bg-white"
      >
        <option value="Hotel Hollywood, Sarajevo">Hotel Hollywood - ★★★★☆</option>
        <option value="Hotel Ibis, Sarajevo">Hotel Ibis - ★★★★☆</option>
        <option value="Hotel Astra, Sarajevo">Hotel Astra - ★★★★☆</option>
        <option value="Hotel Hills, Sarajevo">Hotel Hills - ★★★★★</option>
        <option value="Hotel Malak Regency, Sarajevo">Hotel Malak Regency - ★★★★★</option>
      </select>

      <div className="flex justify-center items-center flex-col">
        <p className="bg-gray-600 px-3 py-2 rounded-xl font-semibold text-white text-sm">
          359€ / Person
        </p>
      </div>
    </div>
  );
};

export default HotelContainer;
