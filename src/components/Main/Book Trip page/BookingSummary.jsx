import React, { useState, useEffect } from "react";
import MoreInfoContainer from "./MoreInfoContainer";
import Loader from "../../../../Loader";
import { Check, XCircle } from "lucide-react";
import { useTranslation } from "react-i18next";
import AlertBox from "../../layout/Footer/components/AlertBox";

const BookingSummary = ({
  totalPrice,
  handleSubmit,
  isLoading,
  bookingStatus,
  setBookingStatus,
  childrenAges,
  groupSize,
  alertMessage
}) => {
  const [hovered, setHovered] = useState(false);
  const [isMoreInfoOpen, setIsMoreInfoOpen] = useState(false);
  const { t } = useTranslation("global");

  /* 👉 count children per discount tier */
  const [childSummary, setChildSummary] = useState({
    infant: 0,  // 0–3 yrs, free
    half: 0,    // 4–10 yrs, 50 %
    threeQ: 0   // 11–13 yrs, 75 %
  });

  const groupDiscount = groupSize >= 6 ? 20 : groupSize >= 4 ? 10 : 0;

  useEffect(() => {
    const counts = { infant: 0, half: 0, threeQ: 0 };
    childrenAges.forEach((a) => {
      const age = parseInt(a);
      if (isNaN(age)) return;
      if (age <= 3) counts.infant += 1;
      else if (age <= 10) counts.half += 1;
      else if (age <= 13) counts.threeQ += 1;
    });
    setChildSummary(counts);
  }, [childrenAges]);

  /* status-icon timeout */
  useEffect(() => {
    if (!bookingStatus) return;
    const timer = setTimeout(() => setBookingStatus(null), 3000);
    return () => clearTimeout(timer);
  }, [bookingStatus, setBookingStatus]);


  return (
    <div className="relative flex justify-center items-center flex-col w-full">
      {/* Booking Summary */}
      <div className="flex w-full flex-col rounded-xl pt-3 pb-4 mb-10"
       style={{ boxShadow: "0 0 50px rgba(0, 0, 0, 0.1)" }}>
        <p className="font-semibold text-md md:text-lg mb-4 text-center">
          {t("booking-page.booking-summary")}
        </p>

        <div className="flex justify-between items-start gap-20 w-full px-6 text-xs md:text-sm">
          {/* left labels */}
          <div className="flex flex-col gap-1">
            <p>{t("booking-page.accommodation")}</p>
            <p>{t("booking-page.travel-guide")}</p>
            <p>{t("booking-page.driver")}</p>
            {(childSummary.infant > 0 || childSummary.half > 0 || childSummary.threeQ > 0) && (
              <>
                <p>{childSummary.infant > 0 && t("booking-page.infant")}</p>
                <p>{childSummary.half > 0 && t("booking-page.child1")}</p>
                <p>{childSummary.threeQ > 0 && t("booking-page.child2")}</p>
              </>
            )}
            <p>{t("booking-page.group-discount")}</p>
            <p className="font-semibold">{t("booking-page.total")}</p>
          </div>

          {/* right values */}
          <div className="flex flex-col items-end gap-1">
            <p>{t("booking-page.included")}</p>
            <p>{t("booking-page.included")}</p>
            <p>{t("booking-page.included")}</p>
            {childSummary.infant > 0 && (
              <p className="font-semibold">100% <span className="font-normal">{t("booking-page.off")}</span></p>
            )}

            {childSummary.half > 0 && (
              <p className="font-semibold">50% <span className="font-normal">{t("booking-page.off")}</span></p>
            )}

            {childSummary.threeQ > 0 && (
              <p className="font-semibold">25% <span className="font-normal">{t("booking-page.off")}</span></p>
            )}

            <p className="font-semibold text-red-500">
              {groupDiscount}%
            </p>
            <p className="font-semibold">{totalPrice.toFixed(0)}€</p>
          </div>
        </div>
      </div>

      {/* Submit + More-info buttons */}
      <div className="flex flex-col justify-center items-center mt-4 relative">
        <div className="flex justify-center items-center flex-row gap-4">
          <div className="w-6 h-6">
            {isLoading ? (
              <Loader />
            ) : bookingStatus === "success" ? (
              <Check className="text-green-500" />
            ) : bookingStatus === "error" ? (
              <XCircle className="text-red-500" />
            ) : null}
          </div>

          <button
            onClick={handleSubmit}
            className="w-[200px] h-[45px] md:w-[220px] md:h-[50px] text-sm md:text-md lg:text-[15px] rounded-[12px] bg-[#22c55e] relative overflow-hidden shadow-md active:scale-95 transition-all"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <span
              className={`absolute left-[-50px] w-[40px] h-[27px] rounded-full flex items-center justify-center transition-all ${hovered ? "translate-x-[58px]" : ""
                }`}
            >
              <svg viewBox="0 0 24 24" width="22" height="22" fill="white">
                <path d="M20.285 5.295a1 1 0 0 0-1.41-.01L9 14.84 5.125 11.23a1 1 0 1 0-1.25 1.56l4.5 4a1 1 0 0 0 1.36-.08l10-10.33a1 1 0 0 0 .01-1.42Z" />
              </svg>
            </span>
            <p
              className={`text-white font-semibold text-md transition-all ${hovered ? "translate-x-[10px]" : ""
                }`}
            >
              {t("booking-page.button1")}
            </p>
          </button>

          <button
            className="text-[11px] md:text-xs bg-blue-600 whitespace-nowrap text-white font-semibold px-2 py-1 rounded-xl hover:scale-104 transition-transform"
            onClick={() => setIsMoreInfoOpen(true)}
          >
            {t("booking-page.button2")}
          </button>
        </div>
        <AlertBox
          message={alertMessage}
          textColor={bookingStatus === "success" ? "text-green-600" : "text-red-600"}
        />
      </div>

      {isMoreInfoOpen && <MoreInfoContainer onClose={() => setIsMoreInfoOpen(false)} />}
    </div>
  );
};

export default BookingSummary;
