import React from "react";
import { useTranslation } from "react-i18next";

const HotelContainer = ({ hotel, setHotel, tripDuration, packagePrice }) => {
  const { t } = useTranslation("global");

  const getMapLink = (hotelName) => {
    const firstHotel = hotelName.split("&")[0].trim();
    const query = encodeURIComponent(firstHotel);
    return `https://maps.google.com?q=${query}`;
  };

  const isShortTrip = tripDuration === "4 nights / 5 days";

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
        className="w-full p-2 border rounded-md bg-white font-medium"
      >
        <option value="Hotel Krone & Hotel Luna">
          {isShortTrip ? t("booking-page.hotel-short1") : t("booking-page.hotel1")}
        </option>
        <option value="Hotel Ibis & Hotel Lobby">
          {isShortTrip ? t("booking-page.hotel-short2") : t("booking-page.hotel2")}
        </option>
        <option value="Hotel Hills & Hotel Kostelski Buk">
          {isShortTrip ? t("booking-page.hotel-short3") : t("booking-page.hotel3")}
        </option>
        <option value="Hotel Malak Regency & Hotel Kostelski Buk">
          {isShortTrip ? t("booking-page.hotel-short4") : t("booking-page.hotel4")}
        </option>
      </select>

      <div className="flex justify-center items-center flex-col">
        <p className="bg-[#1e2939] px-3 py-2 rounded-xl font-semibold text-white text-md">
          {packagePrice}€ {t("booking-page.price-person")}
        </p>
        <p className="text-xs mt-2 text-center text-gray-600">
          {t("booking-page.price-explanation")}
        </p>
      </div>
    </div>
  );
};

export default HotelContainer;
