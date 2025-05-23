import React from "react";
import { Heart } from "lucide-react";
import PackageCard from "./PackageCard";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const WinterPackages = () => {
  const { t, i18n } = useTranslation("global");
  return (
    <div id="winter-packages" className="flex justify-center items-center">
       <p className="absolute left-1/2 transform -translate-x-1/2 font-bold text-sm w-fit md:text-2xl lg:text-3xl whitespace-nowrap text-center z-10 text-white bg-black p-6 rounded-xl">{t("travel-package-details.not-available")}</p>
      <div className="w-full flex flex-col gap-16">

        <div className="w-full flex flex-col items-start ml-10">
          <div className="flex items-center gap-4">
            <span className="bg-orange-500 rounded-2xl h-[5px] w-[50px]"></span>
            <p className="text-[#22c55e] font-semibold flex items-center gap-2">
              {t("travel-packages-page.winter.subtext")} <Heart className="w-5 h-5 text-green-500" />
            </p>
          </div>
          <p className="font-semibold text-3xl mt-1">{t("travel-packages-page.winter.heading")}</p>
        </div>


        <div className="flex flex-wrap justify-center items-center gap-10 w-screen mx-auto blur-sm">

          {/* Package 1 */}
          <Link
            // to="/travel-package-details" 
            state={{
              nights: 3,
              days: 4,
              price: 349,
              vipPrice: 499,
              currency: "€",
              activities: [
                t("travel-packages-page.winter.activities1.day1"),
                t("travel-packages-page.winter.activities1.day2"),
                t("travel-packages-page.winter.activities1.day3"),
                t("travel-packages-page.winter.activities1.day4")
              ],
              activitiesDetails: [
                t("travel-packages-page.winter.activitiesDetails1.detail1"),
                t("travel-packages-page.winter.activitiesDetails1.detail2"),
                t("travel-packages-page.winter.activitiesDetails1.detail3"),
                t("travel-packages-page.winter.activitiesDetails1.detail4")
              ]
            }}
          >
            <PackageCard
              nights={3}
              days={4}
              price={349}
              vipPrice={499}
              currency="€"
              bgColor={"#2c2c2c"}
              buttonColor={"white"}
              packageType="regular"
              activities={[
                t("travel-packages-page.winter.activities1.day1"),
                t("travel-packages-page.winter.activities1.day2"),
                t("travel-packages-page.winter.activities1.day3"),
                t("travel-packages-page.winter.activities1.day4")
              ]}
              buttonText={t("common.read-more-button")}
            />
          </Link>


          {/* Package 2 */}
          <Link
            // to="/travel-package-details"
            state={{
              nights: 4,
              days: 5,
              price: 349,
              vipPrice: 499,
              currency: "€",
              activities: [
                t("travel-packages-page.winter.activities2.day1"),
                t("travel-packages-page.winter.activities2.day2"),
                t("travel-packages-page.winter.activities2.day3"),
                t("travel-packages-page.winter.activities2.day4"),
                t("travel-packages-page.winter.activities2.day5")
              ],
              activitiesDetails: [
                t("travel-packages-page.winter.activitiesDetails2.detail1"),
                t("travel-packages-page.winter.activitiesDetails2.detail2"),
                t("travel-packages-page.winter.activitiesDetails2.detail3"),
                t("travel-packages-page.winter.activitiesDetails2.detail4"),
                t("travel-packages-page.winter.activitiesDetails2.detail5")
              ]
            }}
          >
            <PackageCard
              nights={4}
              days={5}
              price={349}
              vipPrice={499}
              currency="€"
              bgColor={"#2c2c2c"}
              buttonColor={"white"}
              packageType="regular"
              activities={[
                t("travel-packages-page.winter.activities2.day1"),
                t("travel-packages-page.winter.activities2.day2"),
                t("travel-packages-page.winter.activities2.day3"),
                t("travel-packages-page.winter.activities2.day4"),
                t("travel-packages-page.winter.activities2.day5")
              ]}
              buttonText={t("common.read-more-button")}
            />
          </Link>

          {/* Package 3 */}
          <Link
            // to="/travel-package-details"
            state={{
              nights: 4,
              days: 5,
              price: 349,
              vipPrice: 499,
              currency: "€",
              activities: [
                t("travel-packages-page.winter.activities3.day1"),
                t("travel-packages-page.winter.activities3.day2"),
                t("travel-packages-page.winter.activities3.day3"),
                t("travel-packages-page.winter.activities3.day4"),
                t("travel-packages-page.winter.activities3.day5"),
                t("travel-packages-page.winter.activities3.day6")
              ],
              activitiesDetails: [
                t("travel-packages-page.winter.activitiesDetails3.detail1"),
                t("travel-packages-page.winter.activitiesDetails3.detail2"),
                t("travel-packages-page.winter.activitiesDetails3.detail3"),
                t("travel-packages-page.winter.activitiesDetails3.detail4"),
                t("travel-packages-page.winter.activitiesDetails3.detail5"),
                t("travel-packages-page.winter.activitiesDetails3.detail6"),
              ]
            }}
          >
            <PackageCard
              nights={5}
              days={6}
              price={349}
              vipPrice={499}
              currency="€"
              bgColor={"#2c2c2c"}
              buttonColor={"white"}
              packageType="regular"
              activities={[
                t("travel-packages-page.winter.activities3.day1"),
                t("travel-packages-page.winter.activities3.day2"),
                t("travel-packages-page.winter.activities3.day3"),
                t("travel-packages-page.winter.activities3.day4"),
                t("travel-packages-page.winter.activities3.day5")
              ]}
              buttonText={t("common.read-more-button")}
            />
          </Link>

        </div>
      </div>
    </div>
  );
};

export default WinterPackages;
