import React from "react";
import { Heart } from "lucide-react"; 
import PackageCards from "../Homepage/Packages/components/PackageCard";

const WinterPackages = () => {
  return (
    <div id="winter-packages" className="flex justify-center items-center w-full">
      <div className="w-full flex flex-col gap-16">

        <div className="w-full flex flex-col items-start ml-10">
          <div className="flex items-center gap-4">
            <span className="bg-orange-500 rounded-2xl h-[5px] w-[50px]"></span>
            <p className="text-[#22c55e] font-semibold flex items-center gap-2">
              Perfect for Couples <Heart className="w-5 h-5 text-green-500" />
            </p>
          </div>
          <p className="font-semibold text-3xl mt-1">Winter Packages</p>
        </div>

        <div className="flex justify-center items-center">
          <PackageCards />
        </div>
      </div>
    </div>
  );
};

export default WinterPackages;
