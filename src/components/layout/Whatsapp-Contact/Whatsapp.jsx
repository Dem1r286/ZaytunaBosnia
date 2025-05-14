import React, { useState } from "react";
import "./Whatsapp.css";
import { useTranslation } from "react-i18next";

const Whatsapp = () => {
  const [isHovered, setIsHovered] = useState(false);
  const { t, i18n } = useTranslation("global");

  return (
    <a
      href="https://wa.me/38762360677"
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-container"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src="assets/icons/whatsapp.webp"
        alt="WhatsApp ikona"
        className={`whatsapp-icon ${isHovered ? "rotate" : ""}`}
      />
      <div className="whatsapp-paragraph">
        <p>{t("common.contact-button")}</p>
      </div>
    </a>
  );
};

export default Whatsapp;
