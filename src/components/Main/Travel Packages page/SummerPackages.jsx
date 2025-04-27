import React from "react";
import { ArrowDown } from "lucide-react";
import { motion } from "framer-motion";
import PackageCard from "./PackageCard";
import { Link } from "react-router-dom";
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

const SummerPackages = () => {
  const { t, i18n } = useTranslation("global");
  return (
    <div id="summer-packages" className="flex justify-center">
      <div className="w-full flex flex-col gap-16">
        <div className="w-full flex flex-row justify-between items-center ml-10">
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-4">
              <span className="bg-orange-500 rounded-2xl h-[5px] w-[50px]"></span>
              <p className="text-[#22c55e] font-semibold">{t("travel-packages-page.summer.subtext")}</p>
            </div>
            <p className="font-semibold text-3xl mt-1">{t("travel-packages-page.summer.heading")}</p>
          </div>
          <FadeInSection>
            <div className="flex justify-center items-center mt-2 mr-60">
              <p className="text-lg font-semibold bg-[#22c55e] shadow-md text-white px-6 py-2 rounded-xl flex items-center gap-5">
                {t("travel-packages-page.summer.subtext2")}
                <ArrowDown size={26} />
              </p>
            </div>
          </FadeInSection>
        </div>

        <div className="flex justify-center items-center flex-row gap-[5vw]">
          {/* Package 1 */}
          <Link
            to="/travel-package-details"
            state={{
              nights: 4,
              days: 5,
              price: 349,
              vipPrice: 499,
              currency: "€",
              activities: [
                t("travel-packages-page.summer.activities1.day1"),
                t("travel-packages-page.summer.activities1.day2"),
                t("travel-packages-page.summer.activities1.day3"),
                t("travel-packages-page.summer.activities1.day4"),
                t("travel-packages-page.summer.activities1.day5")
              ],
              activitiesDetails: [
                t("travel-packages-page.summer.activitiesDetails1.detail1"),
                t("travel-packages-page.summer.activitiesDetails1.detail2"),
                t("travel-packages-page.summer.activitiesDetails1.detail3"),
                t("travel-packages-page.summer.activitiesDetails1.detail4"),
                t("travel-packages-page.summer.activitiesDetails1.detail5")
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
              bgColor={"#dd1b1b"}
              buttonColor={"black"}
              packageType="regular"
              activities={[
                t("travel-packages-page.summer.activities1.day1"),
                t("travel-packages-page.summer.activities1.day2"),
                t("travel-packages-page.summer.activities1.day3"),
                t("travel-packages-page.summer.activities1.day4"),
                t("travel-packages-page.summer.activities1.day5")
              ]}
              buttonText={t("common.read-more-button")}
            />
          </Link>

          {/* Package 2 */}
          <Link
            to="/travel-package-details"
            state={{
              nights: 5,
              days: 6,
              price: 449,
              vipPrice: 599,
              currency: "€",
              activities: [
                t("travel-packages-page.summer.activities2.day1"),
                t("travel-packages-page.summer.activities2.day2"),
                t("travel-packages-page.summer.activities2.day3"),
                t("travel-packages-page.summer.activities2.day4"),
                t("travel-packages-page.summer.activities2.day5"),
                t("travel-packages-page.summer.activities2.day6")
              ],
              activitiesDetails: [
                t("travel-packages-page.summer.activitiesDetails2.detail1"),
                t("travel-packages-page.summer.activitiesDetails2.detail2"),
                t("travel-packages-page.summer.activitiesDetails2.detail3"),
                t("travel-packages-page.summer.activitiesDetails2.detail4"),
                t("travel-packages-page.summer.activitiesDetails2.detail5"),
                t("travel-packages-page.summer.activitiesDetails2.detail6"),
              ]
            }}
          >
            <PackageCard
              nights={5}
              days={6}
              price={449}
              vipPrice={599}
              currency="€"
              height={"700px"}
              bgColor={"#dd1b1b"}
              buttonColor={"black"}
              packageType="regular"
              activities={[
                t("travel-packages-page.summer.activities2.day1"),
                t("travel-packages-page.summer.activities2.day2"),
                t("travel-packages-page.summer.activities2.day3"),
                t("travel-packages-page.summer.activities2.day4"),
                t("travel-packages-page.summer.activities2.day5")
              ]}
              buttonText={t("common.read-more-button")}
            />
          </Link>

          {/* Package 3 */}
          <Link
            to="/travel-package-details"
            state={{
              nights: 7,
              days: 8,
              price: 670,
              vipPrice: 799,
              currency: "€",
              activities: [
                t("travel-packages-page.summer.activities3.day1"),
                t("travel-packages-page.summer.activities3.day2"),
                t("travel-packages-page.summer.activities3.day3"),
                t("travel-packages-page.summer.activities3.day4"),
                t("travel-packages-page.summer.activities3.day5"),
                t("travel-packages-page.summer.activities3.day6"),
                t("travel-packages-page.summer.activities3.day7"),
                t("travel-packages-page.summer.activities3.day8")
              ],
              activitiesDetails: [
                t("travel-packages-page.summer.activitiesDetails3.detail1"),
                t("travel-packages-page.summer.activitiesDetails3.detail2"),
                t("travel-packages-page.summer.activitiesDetails3.detail3"),
                t("travel-packages-page.summer.activitiesDetails3.detail4"),
                t("travel-packages-page.summer.activitiesDetails3.detail5"),
                t("travel-packages-page.summer.activitiesDetails3.detail6"),
                t("travel-packages-page.summer.activitiesDetails3.detail7"),
                t("travel-packages-page.summer.activitiesDetails3.detail8"),
              ]
            }}
          >
            <PackageCard
              nights={7}
              days={8}
              price={670}
              vipPrice={799}
              currency="€"
              height={"850px"}
              bgColor={"#dd1b1b"}
              buttonColor={"black"}
              packageType="regular"
              activities={[
                t("travel-packages-page.summer.activities3.day1"),
                t("travel-packages-page.summer.activities3.day2"),
                t("travel-packages-page.summer.activities3.day3"),
                t("travel-packages-page.summer.activities3.day4"),
                t("travel-packages-page.summer.activities3.day5")
              ]}
              buttonText={t("common.read-more-button")}
            />
          </Link>

        </div>
      </div>
    </div>
  );
};

export default SummerPackages;
