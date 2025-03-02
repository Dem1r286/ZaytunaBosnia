import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="flex items-center gap-14 text-gray-900">
        <Link to="/" className="cursor-pointer">Home</Link>
        <Link to="/tour-services" className="cursor-pointer">Tour Services</Link>
        <Link to="/contact" className="cursor-pointer bg-[#21ba71] px-[10px] py-[8px] text-white rounded-xl text-sm font-medium">Book Your Trip</Link>
        <Link to="/investment" className="cursor-pointer">Investment</Link>
        <Link to="/contact" className="cursor-pointer">Contact Us</Link>
      </div>
    </div>
  );
};


const Header = () => {
  return (
    <div
      id="header"className="fixed top-0 left-0 w-screen flex flex-row items-center justify-between px-10 mt-2">
      <div id="header-logo" className="flex items-center justify-center">
        <img src="src/assets/logo.png" className="w-25 h-20" alt="Logo" />
      </div>
      <Navbar />
      <div id="header-language" className="flex items-center justify-center">
        <button className="bg-[#21ba71] text-white py-2 px-4 rounded-xl text-sm"> Language </button>
      </div>
    </div>
  );
};

export default Header;
