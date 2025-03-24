import React, { useState } from "react";
import { Menu } from "lucide-react";
import HeaderLogo from "./components/HeaderLogo";
import HeaderLinks from "./components/HeaderLinks";
import HeaderLanguage from "./components/HeaderLanguage";
import HamburgerMenu from "./components/HamburgerMenu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div className="fixed top-0 left-0 w-full flex items-center bg-white shadow justify-between px-8 z-20">
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
