import React from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import HeaderLanguage from "./HeaderLanguage";
import WavesEx from "../../Footer/components/WavesEx";
import { useTranslation } from "react-i18next";

const HamburgerMenu = ({ isMenuOpen, setIsMenuOpen }) => {
  const { t } = useTranslation("global");
  const customWaveStyles = [
    { height: "10rem", opacity: 0.6, color: "#22c55e", options: { amplitude: 20, speed: 0.2, points: 6 } },
    { height: "8rem", opacity: 0.8, color: "#22c55e", options: { amplitude: 20, speed: 0.1, points: 5 } },
    { height: "5rem", opacity: 1, color: "#22c55e", options: { amplitude: 20, speed: 0.1, points: 5 } },
  ];

  return (
    <div className={`fixed inset-0 z-50 bg-gray-900 bg-opacity-90 flex flex-col items-center justify-between text-white text-lg transition-transform duration-300 ${isMenuOpen ? "translate-x-0" : "translate-x-full"
      }`}>
      <div className="w-full flex items-center justify-between px-8 py-6">
        <div className="flex items-center justify-center gap-4">
          <img src="assets/icons/logoround.webp" className="w-10" alt="Logo" />
          <p
            className="text-xl font-semibold tracking-wider"
            style={{ fontFamily: "'Italiana', serif" }}
          >
            {t("header-links.header-logo")}
          </p>
        </div>

        <button onClick={() => setIsMenuOpen(false)} className="text-white">
          <X size={38} />
        </button>
      </div>

      <div className="flex flex-col items-center gap-10 mb-40">
        <div className="flex sm:hidden mb-4">
          <HeaderLanguage onClick={() => setIsMenuOpen(false)} />
        </div>
        <Link to="/" onClick={() => setIsMenuOpen(false)}>{t("header-links.link1")}</Link>
        <Link to="/travel-packages" onClick={() => setIsMenuOpen(false)}>{t("header-links.link2")}</Link>
        <Link to="/book-trip" onClick={() => setIsMenuOpen(false)}>{t("common.book-your-trip")}</Link>
        <Link to="/investments" onClick={() => setIsMenuOpen(false)}>{t("header-links.link3")}</Link>
        <Link to="/contact" onClick={() => setIsMenuOpen(false)}>{t("common.contact-button")}</Link>
      </div>
      <div className="absolute bottom-0 w-full">
        <WavesEx customStyles={customWaveStyles} />
      </div>
      <div></div>
    </div>
  );
};


export default HamburgerMenu;