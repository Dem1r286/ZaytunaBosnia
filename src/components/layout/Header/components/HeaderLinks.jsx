import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const HeaderLinks = () => {
  const { t } = useTranslation("global");
    return (
      <div className="hidden xl:flex justify-center items-center mr-8">
        <div className="flex items-center gap-14 text-gray-900">
          <Link to="/" className="cursor-pointer">
          {t("header-links.link1")}
          </Link>
          <Link to="/travel-packages" className="cursor-pointer">
          {t("header-links.link2")}
          </Link>
          <Link
            to="/book-trip"
            className="cursor-pointer bg-[#22c55e] px-[12px] py-[8px] text-white rounded-xl text-sm font-semibold hover:scale-104 transition-transform duration-300"
          >
            {t("common.book-your-trip")}
          </Link>
          <Link to="/investments" className="cursor-pointer">
          {t("header-links.link3")}
          </Link>
          <Link to="/contact" className="cursor-pointer">
          {t("common.contact-button")}
          </Link>
        </div>
      </div>
    );
  };

  export default HeaderLinks;