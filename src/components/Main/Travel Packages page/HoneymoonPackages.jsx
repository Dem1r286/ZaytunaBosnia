import React from "react";
import { MousePointerClick } from "lucide-react"
import PackageCard from "./PackageCard";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const HoneymoonPackages = () => {
  const { t, i18n } = useTranslation("global");
  return (
    <div id="honeymoon-packages" className="flex justify-start items-center">
      <div className="w-full flex flex-col gap-16">

        <div className="w-full flex flex-col items-start ml-10 justify-start">
          <div className="flex items-center gap-4">
            <span className="bg-orange-500 rounded-2xl h-[5px] w-[50px]"></span>
            <p className="text-[#22c55e] font-semibold flex items-center gap-2">
              {t("travel-packages-page.honeymoon.subtext")}
              <MousePointerClick className="w-5 h-5 text-[#22c55e]" />
            </p>
          </div>
          <p className="font-semibold text-3xl mt-1">{t("travel-packages-page.honeymoon.heading")}</p>
        </div>

        <div className="flex justify-center items-center flex-row gap-[5vw] ml-70">

          {/* Package 1 */}
          <Link
            to="/travel-package-details"
            state={{
              nights: 7,
              days: 8,
              price: 1400,
              vipPrice: 1600,
              currency: "€",
              activities: [
                t("travel-packages-page.honeymoon.activities1.day1"),
                t("travel-packages-page.honeymoon.activities1.day2"),
                t("travel-packages-page.honeymoon.activities1.day3"),
                t("travel-packages-page.honeymoon.activities1.day4"),
                t("travel-packages-page.honeymoon.activities1.day5"),
                t("travel-packages-page.honeymoon.activities1.day6"),
                t("travel-packages-page.honeymoon.activities1.day7"),
                t("travel-packages-page.honeymoon.activities1.day8"),
              ],
              activitiesDetails: [
                t("travel-packages-page.honeymoon.activitiesDetails1.detail1"),
                t("travel-packages-page.honeymoon.activitiesDetails1.detail2"),
                t("travel-packages-page.honeymoon.activitiesDetails1.detail3"),
                t("travel-packages-page.honeymoon.activitiesDetails1.detail4"),
                t("travel-packages-page.honeymoon.activitiesDetails1.detail5"),
                t("travel-packages-page.honeymoon.activitiesDetails1.detail6"),
                t("travel-packages-page.honeymoon.activitiesDetails1.detail7"),
                t("travel-packages-page.honeymoon.activitiesDetails1.detail8"),
              ]
            }}
          >
            <PackageCard
              nights={7}
              days={8}
              price={1400}
              vipPrice={1600}
              currency="€"
              bgColor={"#400d41"}
              buttonColor={"#ff6900"}
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
            to="/travel-package-details"
            state={{
              nights: 10,
              days: 11,
              price: 1800,
              vipPrice: 2000,
              currency: "€",
              activities: [
                t("travel-packages-page.honeymoon.activities1.day1"),
                t("travel-packages-page.honeymoon.activities1.day2"),
                t("travel-packages-page.honeymoon.activities1.day3"),
                t("travel-packages-page.honeymoon.activities1.day4"),
                t("travel-packages-page.honeymoon.activities1.day5"),
                t("travel-packages-page.honeymoon.activities1.day6"),
                t("travel-packages-page.honeymoon.activities1.day7"),
                t("travel-packages-page.honeymoon.activities1.day8"),
                t("travel-packages-page.honeymoon.activities1.day9"),
                t("travel-packages-page.honeymoon.activities1.day10"),
                t("travel-packages-page.honeymoon.activities1.day11"),
              ],
              activitiesDetails: [
                t("travel-packages-page.honeymoon.activitiesDetails1.detail1"),
                t("travel-packages-page.honeymoon.activitiesDetails1.detail2"),
                t("travel-packages-page.honeymoon.activitiesDetails1.detail3"),
                t("travel-packages-page.honeymoon.activitiesDetails1.detail4"),
                t("travel-packages-page.honeymoon.activitiesDetails1.detail5"),
                t("travel-packages-page.honeymoon.activitiesDetails1.detail6"),
                t("travel-packages-page.honeymoon.activitiesDetails1.detail7"),
                t("travel-packages-page.honeymoon.activitiesDetails1.detail8"),
                t("travel-packages-page.honeymoon.activitiesDetails1.detail9"),
                t("travel-packages-page.honeymoon.activitiesDetails1.detail10"),
                t("travel-packages-page.honeymoon.activitiesDetails1.detail11"),
              ]
            }}
          >
            <PackageCard
              nights={10}
              days={11}
              price={1800}
              vipPrice={2000}
              currency="€"
              bgColor={"#400d41"}
              buttonColor={"#ff6900"}
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
        </div>
      </div>
    </div>
  );
};

export default HoneymoonPackages;
