import React, { useState, useEffect } from "react";
import MoreInfoContainer from "./MoreInfoContainer";
import Loader from "../../../../Loader";
import { Check, XCircle } from "lucide-react";
import { useTranslation } from "react-i18next";

const BookingSummary = ({ numOfAdults, numOfChildren, handleSubmit, isLoading, bookingStatus, setBookingStatus }) => {
  const [hovered, setHovered] = useState(false);
  const [isMoreInfoOpen, setIsMoreInfoOpen] = useState(false);
  const { t, i18n } = useTranslation("global");

  const getPrice = (numOfAdults) => {
    const pricePerAdult = 359;
    return pricePerAdult * numOfAdults;
  };

  const totalPrice = getPrice(numOfAdults);

  useEffect(() => {
    if (bookingStatus) {
      const timer = setTimeout(() => {
        setBookingStatus(null);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [bookingStatus, setBookingStatus]);

  return (
    <div className="flex justify-center items-center flex-col">
      {/* Booking Summary */}
      <div className="flex justify-between items-center w-full flex-col bg-gray-100 rounded-xl pt-3 pb-4 mb-10 shadow-md">
        <p className="font-semibold text-lg mb-4">{t("booking-page.booking-summary")}</p>

        <div className="flex justify-between items-center gap-20 w-full px-6 text-sm">
          <div className="flex flex-col items-start gap-1">
            <p>{`359€ x ${numOfAdults} Adult${numOfAdults > 1 ? "s" : ""}`}</p>
            {numOfChildren > 0 && (
              <p>{`359€ x ${numOfChildren} Child${numOfChildren > 1 ? "ren" : ""}`}</p>
            )}
            <p>Accommodation</p>
            <p>Travel Guide</p>
            <p>Entrance Fees</p>
            <p className="font-semibold">Total</p>
          </div>

          <div className="flex flex-col items-end gap-1">
            <p>{`${359 * numOfAdults}€`}</p>
            {numOfChildren > 0 && <p>{`${359 * numOfChildren}€`}</p>}
            <p>included</p>
            <p>included</p>
            <p>included</p>
            <p className="font-semibold">{totalPrice + (numOfChildren > 0 ? 359 * numOfChildren : 0)}€</p>
          </div>
        </div>

      </div>

      <div className="flex justify-center items-center">
        <div className="flex flex-row justify-center items-center gap-6 ml-10">
          <div className="w-6 h-6 flex-shrink-0">
            {isLoading ? (
              <Loader />
            ) : bookingStatus === "success" ? (
              <Check className="text-green-500 w-6 h-6" />
            ) : bookingStatus === "error" ? (
              <XCircle className="text-red-500 w-6 h-6" />
            ) : null}
          </div>

          <button
            onClick={handleSubmit}
            className="w-[180px] h-[40px] rounded-[12px] border-none bg-[#22c55e] flex items-center justify-center cursor-pointer transition-all duration-500 overflow-hidden shadow-md relative active:scale-95"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <span
              className={`absolute left-[-50px] w-[30px] h-[30px] bg-transparent rounded-full flex items-center justify-center overflow-hidden z-10 transition-all duration-500 ${hovered ? "translate-x-[58px] rounded-[40px]" : ""}`}
            >
              <svg
                viewBox="0 0 24 24"
                width="18px"
                height="18px"
                fill="white"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M20.285 5.295a1 1 0 0 0-1.41-.01L9 14.84 5.125 11.23a1 1 0 1 0-1.25 1.56l4.5 4a1 1 0 0 0 1.36-.08l10-10.33a1 1 0 0 0 .01-1.42Z" />
              </svg>
            </span>
            <p
              className={`h-full w-fit flex items-center justify-center text-white font-semibold text-sm z-0 transition-all duration-500 ${hovered ? "translate-x-[10px]" : ""}`}
            >
              {t("booking-page.button1")}
            </p>
          </button>

          <button
            className="text-xs bg-blue-600 text-white font-semibold px-2 py-1 rounded-xl hover:scale-104 transition-transform duration-300"
            onClick={() => setIsMoreInfoOpen(true)}
          >
            {t("booking-page.button2")}
          </button>

          {isMoreInfoOpen && <MoreInfoContainer onClose={() => setIsMoreInfoOpen(false)} />}
        </div>
      </div>

      <p className="text-sm text-gray-600 text-center mt-2">
      {t("booking-page.button-subtext")}
      </p>
    </div>
  );
};

export default BookingSummary;
