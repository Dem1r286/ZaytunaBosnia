import React from "react";
import { Heart } from "lucide-react"; 
import PackageCard from "./PackageCard";

const WinterPackages = () => {
  return (
    <div id="winter-packages" className="flex justify-center items-center">
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

     
        <div className="flex justify-center items-center flex-row gap-[5vw]">
          <PackageCard
            nights={5}
            days={6}
            price={349}
            vipPrice={499}
            currency="€"
            bgColor={"#004aad"}
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
            price={459}
            vipPrice={699}
            currency="€"
            bgColor={"#004aad"}
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
            nights={10}
            days={11}
            price={655}
            vipPrice={899}
            currency="€"
            bgColor={"#004aad"}
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
        </div>
      </div>
    </div>
  );
};

export default WinterPackages;
