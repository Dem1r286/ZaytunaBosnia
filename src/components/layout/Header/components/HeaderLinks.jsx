import React from "react";
import { Link } from "react-router-dom";


const HeaderLinks = () => {
    return (
      <div className="hidden lg:flex justify-center items-center mr-8">
        <div className="flex items-center gap-14 text-gray-900">
          <Link to="/" className="cursor-pointer">
            Home
          </Link>
          <Link to="/travel-packages" className="cursor-pointer">
            Travel Packages
          </Link>
          <Link
            to="/book-trip"
            className="cursor-pointer bg-[#22c55e] px-[12px] py-[8px] text-white rounded-xl text-sm font-semibold hover:scale-104 transition-transform duration-300"
          >
            Book Your Trip
          </Link>
          <Link to="/investments" className="cursor-pointer">
            Investments
          </Link>
          <Link to="/contact" className="cursor-pointer">
            Contact Us
          </Link>
        </div>
      </div>
    );
  };

  export default HeaderLinks;