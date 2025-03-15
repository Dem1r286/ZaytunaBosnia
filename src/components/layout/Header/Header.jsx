import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import WavesEx from "../Footer/components/WavesEx";

const HeaderLinks = () => {
  return (
    <div className="hidden lg:flex justify-center items-center">
      <div className="flex items-center gap-14 text-gray-900">
        <Link to="/" className="cursor-pointer">
          Home
        </Link>
        <Link to="/tour-services" className="cursor-pointer">
          Tour Packages
        </Link>
        <Link
          to="/contact"
          className="cursor-pointer bg-orange-600 px-[10px] py-[8px] text-white rounded-xl text-sm font-medium"
        >
          Book Your Trip
        </Link>
        <Link to="/investment" className="cursor-pointer">
          Investment
        </Link>
        <Link to="/contact" className="cursor-pointer">
          Contact Us
        </Link>
      </div>
    </div>
  );
};

const HamburgerMenu = ({ isMenuOpen, setIsMenuOpen }) => {
  const customWaveStyles = [
    { height: "7rem", opacity: 0.6, color: "#374151", options: { amplitude: 20, speed: 0.2, points: 6 } },
    { height: "6rem", opacity: 0.8, color: "#374151", options: { amplitude: 20, speed: 0.1, points: 5 } },
    { height: "4rem", opacity: 1, color: "#374151", options: { amplitude: 20, speed: 0.1, points: 5 } },
  ];

  return (
    <div
      className={`fixed top-0 right-0 w-full h-[fit] bg-gray-900 bg-opacity-90 flex flex-col items-center justify-between text-white text-lg transition-transform duration-300 ${
        isMenuOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="w-full flex items-center justify-between px-8 py-4">
        <img src="src/assets/logowhite.png" className="w-16" alt="Logo" />

        <button onClick={() => setIsMenuOpen(false)} className="text-white">
          <X size={32} />
        </button>
      </div>

      <div className="flex flex-col items-center gap-4 mb-40">
        <div className="flex sm:hidden mb-4">
        <HeaderLanguage />
        </div>
        <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
        <Link to="/tour-services" onClick={() => setIsMenuOpen(false)}>Tour Packages</Link>
        <Link to="/contact" onClick={() => setIsMenuOpen(false)}>Book Your Trip</Link>
        <Link to="/investment" onClick={() => setIsMenuOpen(false)}>Investment</Link>
        <Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact Us</Link>
      </div>
      <div className="absolute bottom-0 w-full">
        <WavesEx customStyles={customWaveStyles} />
      </div>
    </div>
  );
};


const HeaderLogo = () => {
  return (
    <div id="header-logo" className="flex items-center justify-center gap-6">
      <img src="src/assets/logo.png" className="w-18" alt="Logo" />
      <p
        className="text-xl font-semibold tracking-wider"
        style={{ fontFamily: "'Italiana', serif" }}
      >
        ZAYTUNA
      </p>
    </div>
  );
};

const HeaderLanguage = () => {
  return (
    <div id="header-language" className="flex items-center">
      <button className="bg-[#20b970] text-white font-semibold py-2 px-4 rounded-xl text-sm">
        Language
      </button>
    </div>
  );
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 flex w-full flex-row items-center bg-white shadow justify-between px-8 z-10">
      <HeaderLogo />
      <HeaderLinks />

      <div className="hidden lg:flex">
        <HeaderLanguage />
      </div>
      <div
        id="hamburger-language-container"
        className="flex lg:hidden items-center justify-center gap-6"
      >
        <div className="hidden sm:flex">
          <HeaderLanguage />
        </div>
        <div id="hamburger-button" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <Menu size={28} />
        </div>
      </div>

      <HamburgerMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
    </div>
  );
};

export default Header;
