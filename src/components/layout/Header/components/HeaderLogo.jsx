import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const HeaderLogo = () => {
  const { t, i18n } = useTranslation("global");
    return (
      <Link to="/" id="header-logo" className="flex items-center justify-center gap-6">
        <img src="assets/icons/logo.webp" className="w-13" alt="Logo" />
        <p
          className="text-xl font-semibold tracking-wider"
          style={{ fontFamily: "'Italiana', serif" }}
        >
          {t("header-links.header-logo")}
        </p> 
      </Link>
    );
  };

  export default HeaderLogo;