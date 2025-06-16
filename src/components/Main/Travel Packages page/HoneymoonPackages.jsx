import React from "react";
import { MousePointerClick } from "lucide-react"
import PackageCard from "./PackageCard";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { useTranslation } from "react-i18next";

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

const HoneymoonPackages = () => {
  const { t } = useTranslation("global");
  return (
    <div id="honeymoon-packages" className="flex justify-center items-center w-screen">
      <p className="absolute left-1/2 transform -translate-x-1/2 font-bold text-sm w-fit md:text-2xl lg:text-3xl whitespace-nowrap text-center z-10 text-white bg-black p-6 rounded-xl">{t("travel-package-details.not-available")}</p>
      <div className="w-full max-w-[2000px] px-14 md:px-20 flex flex-col items-center justify-center gap-16">
        {/* Header Section */}
        <div className="w-full flex flex-col xl:flex-row justify-center items-center xl:px-20 xl:gap-20">
          <div className="flex items-start flex-col self-start">
            <div className="flex items-center gap-2 md:gap-4">
              <span className="bg-orange-500 rounded-2xl h-[4px] md:h-[5px] w-[15px] md:w-[50px]" />
              <p className="text-[#22c55e] font-semibold flex items-center gap-2">
                {t("travel-packages-page.honeymoon.subtext")}
                <MousePointerClick className="w-5 h-5 text-[#22c55e]" />
              </p>

            </div>
            <p className="font-semibold text-lg sm:text-2xl md:text-3xl lg:text-3xl md:mt-1 mb-3">
              {t("travel-packages-page.honeymoon.heading")}
            </p>
          </div>

          <FadeInSection>
            <p className="w-full text-[10px] md:text-lg font-semibold bg-[#22c55e] shadow-md text-white px-6 py-1 md:py-2 rounded-xl flex justify-center items-center gap-5 whitespace-nowrap">
              {t("travel-packages-page.honeymoon.subtext2")}
              <ArrowDown className="w-4 md:w-6" />
            </p>
          </FadeInSection>
        </div>


        <div className="flex flex-wrap justify-center items-center gap-10 blur-sm">
          {/* Package 1 */}
          <Link
            to=""
            state={{
              nights: 4,
              days: 5,
              price: 349,
              vipPrice: 499,
              currency: "€",
              activities: [
                "travel-packages-page.honeymoon.activities1.day1",
                "travel-packages-page.honeymoon.activities1.day2",
                "travel-packages-page.honeymoon.activities1.day3",
                "travel-packages-page.honeymoon.activities1.day4",
                "travel-packages-page.honeymoon.activities1.day5"
              ],
              activitiesDetails: [
                "travel-packages-page.honeymoon.activitiesDetails1.detail1",
                "travel-packages-page.honeymoon.activitiesDetails1.detail2",
                "travel-packages-page.honeymoon.activitiesDetails1.detail3",
                "travel-packages-page.honeymoon.activitiesDetails1.detail4",
                "travel-packages-page.honeymoon.activitiesDetails1.detail5"
              ]
            }}
          >
            <PackageCard
              nights={4}
              days={5}
              price={349}
              vipPrice={499}
              currency="€"
              height={"600px"}
              bgColor={"#2c2c2c"}
              buttonColor={"white"}
              packageType="regular"
              activities={[
                t("travel-packages-page.honeymoon.activities1.day1"),
                t("travel-packages-page.honeymoon.activities1.day2"),
                t("travel-packages-page.honeymoon.activities1.day3"),
                t("travel-packages-page.honeymoon.activities1.day4"),
                t("travel-packages-page.honeymoon.activities1.day5")
              ]}
              buttonText={t("common.read-more-button")}
            />
          </Link>

          {/* Package 2 */}
          <Link
            to=""
            state={{
              nights: 6,
              days: 7,
              price: 449,
              vipPrice: 599,
              currency: "€",
              activities: [
                "travel-packages-page.honeymoon.activities2.day1",
                "travel-packages-page.honeymoon.activities2.day2",
                "travel-packages-page.honeymoon.activities2.day3",
                "travel-packages-page.honeymoon.activities2.day4",
                "travel-packages-page.honeymoon.activities2.day5",
                "travel-packages-page.honeymoon.activities2.day6",
                "travel-packages-page.honeymoon.activities2.day7"
              ],
              activitiesDetails: [
                "travel-packages-page.honeymoon.activitiesDetails2.detail1",
                "travel-packages-page.honeymoon.activitiesDetails2.detail2",
                "travel-packages-page.honeymoon.activitiesDetails2.detail3",
                "travel-packages-page.honeymoon.activitiesDetails2.detail4",
                "travel-packages-page.honeymoon.activitiesDetails2.detail5",
                "travel-packages-page.honeymoon.activitiesDetails2.detail6",
                "travel-packages-page.honeymoon.activitiesDetails2.detail7"
              ]
            }}
          >
            <PackageCard
              nights={6}
              days={7}
              price={549}
              vipPrice={669}
              currency="€"
              height={"700px"}
              bgColor={"#2c2c2c"}
              buttonColor={"white"}
              packageType="regular"
              activities={[
                t("travel-packages-page.honeymoon.activities2.day1"),
                t("travel-packages-page.honeymoon.activities2.day2"),
                t("travel-packages-page.honeymoon.activities2.day3"),
                t("travel-packages-page.honeymoon.activities2.day4"),
                t("travel-packages-page.honeymoon.activities2.day5"),
              ]}
              buttonText={t("common.read-more-button")}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HoneymoonPackages;
