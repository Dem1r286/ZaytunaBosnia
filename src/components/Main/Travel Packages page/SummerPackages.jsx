import React from "react";
import { ArrowDown } from "lucide-react";
import { motion } from "framer-motion";
import PackageCard from "./PackageCard";

const FadeInSection = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    viewport={{ once: true, amount: 0.3 }}
  >
    {children}
  </motion.div>
);

const SummerPackages = () => {
  return (
    <div id="summer-packages" className="flex justify-center">
      <div className="w-full flex flex-col gap-16">
        <div className="w-full flex flex-row justify-between items-center ml-10">
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-4">
              <span className="bg-orange-500 rounded-2xl h-[5px] w-[50px]"></span>
              <p className="text-[#22c55e] font-semibold">Our best seller</p>
            </div>
            <p className="font-semibold text-3xl mt-1">Summer Packages</p>
          </div>
          <FadeInSection>
            <div className="flex justify-center items-center mt-2 mr-60">
              <p className="text-lg font-semibold bg-[#22c55e] shadow-md text-white px-6 py-2 rounded-xl flex items-center gap-5">
                Your Next Adventure Awaits – Choose a Package to Begin!
                <ArrowDown size={26} />
              </p>
            </div>
          </FadeInSection>
        </div>

        <div className="flex justify-center items-center flex-row gap-[5vw]">
          <PackageCard
            nights={4}
            days={5}
            price={349}
            vipPrice={499}
            currency="€"
            height={"600px"}
            bgColor={"#dd1b1b"}
            buttonColor={"black"}
            packageType="regular"
            activities={[
              "1-day: Arrival and Accommodation",
              "2-day: Sarajevo Discovery - Tunnel of Hope, City Charms, and Trebević Adventure",
              "3-day: Herzegovina Delights - Mostar, Kravice Waterfalls, and Historic Treasures",
              "4-day: Exploration of Travnik, Jajce, and Pliva's Natural Wonders",
              "5-day: Departure",
            ]}
            buttonText="Read More"
          />
          <PackageCard
            nights={7}
            days={8}
            price={459}
            vipPrice={699}
            currency="€"
            height={"700px"}
            bgColor={"#dd1b1b"}
            buttonColor={"black"}
            packageType="regular"
            activities={[
              "1-day: Arrival and Accommodation",
              "2-day: Sarajevo Discovery - Tunnel of Hope, City Charms, and Trebevic Adventure",
              "3-day: Herzegovina Delights - Mostar, Kravice Waterfalls, and Historic Treasures",
              "4-day: Day 4: Bijambare Natural Park, Sarajevo Zoo Park, Avaz Twist Tower",
              "5-day: Relaxation Day in Sarajevo"
            ]}
            buttonText="Read More"
          />
          <PackageCard
            nights={10}
            days={11}
            price={599}
            vipPrice={899}
            currency="€"
            height={"850px"}
            bgColor={"#dd1b1b"}
            buttonColor={"black"}
            packageType="regular"
            activities={[
              "1-day: Arrival and Accommodation",
              "2-day: Sarajevo Discovery - Tunnel of Hope, City Charms, and Trebevic Adventure",
              "3-day: Herzegovina Delights - Mostar, Kravice Waterfalls, and Historic Treasures",
              "4-day: Bijambare Natural Park, Sarajevo Zoo Park, Avaz Twist Tower",
              "5-day: Travnik's Historical Charm and Vlasic Mountain Retreat",
            ]}
            buttonText="Read More"
          />
        </div>
      </div>
    </div>
  );
};

export default SummerPackages;
