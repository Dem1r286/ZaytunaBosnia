import React, { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import HeaderLogo from "./components/HeaderLogo";
import HeaderLinks from "./components/HeaderLinks";
import HeaderLanguage from "./components/HeaderLanguage";
import HamburgerMenu from "./components/HamburgerMenu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [prevScrollY, setPrevScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > prevScrollY && currentScrollY > 50) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setPrevScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollY]);

  return (
    <>
      <div
        className={`fixed top-0 left-0 flex items-center justify-between w-screen px-8 z-20 py-1 bg-white transition-transform duration-300 shadow-sm ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <HeaderLogo />
        <HeaderLinks />

        <div className="hidden lg:flex">
          <HeaderLanguage />
        </div>

        <div className="flex lg:hidden items-center gap-6">
          <div className="hidden sm:flex">
            <HeaderLanguage />
          </div>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <Menu size={28} />
          </button>
        </div>
      </div>

      <HamburgerMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
    </>
  );
};

export default Header;
