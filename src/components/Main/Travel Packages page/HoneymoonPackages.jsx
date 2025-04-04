import React from "react";
import { MousePointerClick } from "lucide-react"
import PackageCard from "./PackageCard";

const HoneymoonPackages = () => {
  return (
    <div id="honeymoon-packages" className="flex justify-start items-center">
      <div className="w-full flex flex-col gap-16">

        <div className="w-full flex flex-col items-start ml-10 justify-start">
          <div className="flex items-center gap-4">
            <span className="bg-orange-500 rounded-2xl h-[5px] w-[50px]"></span>
            <p className="text-[#22c55e] font-semibold flex items-center gap-2">
              Click a package to explore
              <MousePointerClick className="w-5 h-5 text-[#22c55e]" />
            </p>
          </div>
          <p className="font-semibold text-3xl mt-1">Honeymoon Packages</p>
        </div>

        <div className="flex justify-center items-center flex-row gap-[5vw] ml-70">
          <PackageCard
            nights={7}
            days={8}
            price={1400}
            vipPrice={1800}
            currency="€"
            bgColor={"#400d41"}
            buttonColor={"#ff6900"}
            packageType="regular"
            activities={[
              "1-day: Arrival and Accommodation",
              "2-day: Ordinary Car",
              "3-day: Travel Guide fluent in English or Arabic (depends on availability)",
              "4-day: All entrance fees for included attractions",
              "5-day: Driver (English or Arabic is not guaranteed, depending on availability)",
            ]}
            buttonText="Read More"
          />
          <PackageCard
            nights={7}
            days={8}
            price={1800}
            currency="€"
            bgColor={"#400d41"}
            buttonColor={"#ff6900"}
            packageType="vip"
            activities={[
              "1-day: Arrival and Accommodation",
              "2-day: Ordinary Car",
              "3-day: Travel Guide fluent in English or Arabic (depends on availability)",
              "4-day: All entrance fees for included attractions",
              "5-day: Driver (English or Arabic is not guaranteed, depending on availability)",
            ]}
            buttonText="Read More"
          />
        </div>
      </div>
    </div>
  );
};

export default HoneymoonPackages;
