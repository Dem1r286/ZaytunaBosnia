import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const ContactCustomTrip = () => {
   const { t, i18n } = useTranslation("global");
    return  (
        <div className="flex justify-center items-center flex-col gap-4">
          <p className="text-center text-[15px] font-semibold">
          {t("booking-page.contact-tailor")}
          </p>

          <Link
            to="/contact#contact"
            className="bg-orange-600 w-fit h-fit py-2 px-4 text-white font-semibold rounded-xl text-sm hover:scale-104 transition-transform duration-300"
          >
            {t("common.contact-button")}
          </Link>
        </div>
    );
}

export default ContactCustomTrip;