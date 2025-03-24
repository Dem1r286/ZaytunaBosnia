import React from "react";
import { MousePointerClick } from "lucide-react"; // Import the click icon
import PackageCards from "../Homepage/Packages/components/PackageCard";

const HoneymoonPackages = () => {
  return (
    <div id="honeymoon-packages" className="flex justify-center items-center w-full">
      <div className="w-full flex flex-col gap-16">

        <div className="w-full flex flex-col items-start ml-10">
          <div className="flex items-center gap-4">
            <span className="bg-orange-500 rounded-2xl h-[5px] w-[50px]"></span>
            <p className="text-[#22c55e] font-semibold flex items-center gap-2">
              Click a package to explore
              <MousePointerClick className="w-5 h-5 text-[#22c55e]" />
            </p>
          </div>
          <p className="font-semibold text-3xl mt-1">Honeymoon Packages</p>
        </div>

        <div className="flex justify-center items-center">
          <PackageCards />
        </div>
      </div>
    </div>
  );
};

export default HoneymoonPackages;
