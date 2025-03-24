import React from "react";
import { Link } from "react-router-dom";
import PackageCards from "./components/PackageCard";

const Packages = () => {
  return (
    <div id="packages" className="flex justify-center items-center flex-col gap-20">
      <div className="flex justify-center flex-col items-center">
        <h4 className="text-4xl font-semibold mb-4">Travel Packages</h4>
        <p className="w-[60%] text-center font-medium text-sm text-gray-700">
          Discover exclusive travel packages for every season and occasion. From cozy winter retreats to romantic honeymoons, we have the perfect trip—or a custom-tailored experience designed to fit your needs.
        </p>
      </div>
    
      <PackageCards />

      <div className="flex items-center justify-center">
        <div className="relative group">
          <Link to="/travel-packages">
            <button className="relative inline-block p-px font-semibold leading-6 text-white bg-[#22c55e] shadow-2xl cursor-pointer rounded-xl transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95">
              <span className="absolute inset-0 rounded-xl p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
              <span className="relative z-1 block px-6 py-3 rounded-xl bg-[#22c55e]">
                <div className="relative z-1 flex items-center space-x-2">
                  <span className="transition-all duration-500 group-hover:translate-x-1">
                    See All Packages
                  </span>
                  <svg
                    className="w-6 h-6 transition-transform duration-500 group-hover:translate-x-1"
                    data-slot="icon"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      clipRule="evenodd"
                      d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
                      fillRule="evenodd"
                    ></path>
                  </svg>
                </div>
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Packages;
