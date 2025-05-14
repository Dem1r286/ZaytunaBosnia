import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Crown } from 'lucide-react';
import { useTranslation } from "react-i18next";

const TravelPackageDetails = () => {
  const { t } = useTranslation("global");
  const { state } = useLocation();
  const [selectedDay, setSelectedDay] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  const sourcesData = {
    "4 nights / 5 days": {
      images: [
        "/assets/destinations/mostar.webp",
        "/assets/destinations/blagaj.webp",
        "/assets/destinations/strbackibuk.webp",
        "/assets/destinations/trebevic3.webp",
        "/assets/destinations/trebevic2.webp",
        "/assets/destinations/sarajevo2.webp",
        "/assets/destinations/sarajevo3.webp",
        "/assets/destinations/vrelobosne1.webp",
        "/assets/destinations/travnik3.webp",
        "/assets/destinations/jajce4.webp",
        "/assets/destinations/trebevic.webp",
        "/assets/destinations/konjic.webp",
      ]
    },
    "6 nights / 7 days": {
      images: [
        "/assets/destinations/mostar.webp",
        "/assets/destinations/prokoskolake.webp",
        "/assets/destinations/blagaj.webp",
        "/assets/destinations/strbackibuk.webp",
        "/assets/destinations/trebevic3.webp",
        "/assets/destinations/trebevic2.webp",
        "/assets/destinations/sarajevo2.webp",
        "/assets/destinations/vrelobosne1.webp",
        "/assets/destinations/travnik3.webp",
        "/assets/destinations/sarajevo3.webp",
        "/assets/destinations/jajce4.webp",
        "/assets/destinations/trebevic.webp",
        "/assets/destinations/konjic.webp",
      ]
    },
    "7 nights / 8 days": {
      images: [
        "/assets/destinations/mostar.webp",
        "/assets/destinations/prokoskolake.webp",
        "/assets/destinations/blagaj.webp",
        "/assets/destinations/strbackibuk.webp",
        "/assets/destinations/trebevic3.webp",
        "/assets/destinations/trebevic2.webp",
        "/assets/destinations/sarajevo2.webp",
        "/assets/destinations/sarajevo3.webp",
        "/assets/destinations/vrelobosne1.webp",
        "/assets/destinations/travnik3.webp",
        "/assets/destinations/jajce4.webp",
        "/assets/destinations/trebevic.webp",
        "/assets/destinations/konjic.webp",
      ]
    },
    "9 nights / 10 days": {
      images: [
        "/assets/destinations/mostar.webp",
        "/assets/destinations/prokoskolake.webp",
        "/assets/destinations/blagaj.webp",
        "/assets/destinations/mostar2.webp",
        "/assets/destinations/strbackibuk.webp",
        "/assets/destinations/trebevic3.webp",
        "/assets/destinations/trebevic2.webp",
        "/assets/destinations/sarajevo2.webp",
        "/assets/destinations/vrelobosne1.webp",
        "/assets/destinations/travnik3.webp",
        "/assets/destinations/kravice3.webp",
        "/assets/destinations/sarajevo3.webp",
        "/assets/destinations/vrelobosne3.webp",
        "/assets/destinations/jajce4.webp",
        "/assets/destinations/zoo.webp",
        "/assets/destinations/travnik.webp",
        "/assets/destinations/pocitelj.webp",
        "/assets/destinations/trebevic.webp",
        "/assets/destinations/konjic.webp",
        "/assets/destinations/hutovoblato.webp",
      ]
    }
  };

  const { nights, days, price, vipPrice, currency, activities, activitiesDetails } = state;

  const getPackageImages = () => {
    const packageKey = `${nights} nights / ${days} days`;
    return sourcesData[packageKey]?.images || [];
  };

  const currentImages = getPackageImages();

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % currentImages.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + currentImages.length) % currentImages.length);
  };

  return (
    <div className="w-screen min-h-screen h-fit px-10 flex flex-col gap-30 items-center mt-40 max-w-[2000px] mb-30 mx-auto">
      <h1 className="font-semibold text-5xl text-center mb-10">
        {nights} {t("travel-package-details.night")} / {days} {t("travel-package-details.day")}  {t("travel-package-details.package")}
      </h1>

      <div className="w-full flex flex-row justify-center gap-30 items-start gap-10">
        {/* Tour Program Section */}
        <div className="w-1/2 flex flex-col items-center justify-center">
          <h2 className="text-3xl font-medium mb-6">{t("travel-package-details.heading1")}</h2>

          <div className="flex gap-4 flex-wrap justify-center mb-6">
            {activities.map((activity, index) => (
              <button
                key={index}
                onClick={() => setSelectedDay(index)}
                className={`px-4 py-2 rounded-full text-sm font-semibold border transition-all duration-300
                  ${selectedDay === index
                    ? "bg-green-500 text-white"
                    : "bg-white text-green-600 border-green-500"
                  }`}
              >
                {t("travel-package-details.day1")}  {index + 1}
              </button>
            ))}
          </div>

          {selectedDay !== null && (
            <div className="flex flex-col justify-start mb-20 pt-14 items-center mt-4 bg-gray-100 px-10 py-6 rounded-xl min-h-[320px] max-h-[320px] text-center">
              <p className="text-lg font-medium mb-2">{t(activities[selectedDay])}</p>
              <p className="text-sm leading-relaxed">
                {activitiesDetails ? t(activitiesDetails[selectedDay]) : "No additional details available."}
              </p>
            </div>
          )}

          <div className="flex flex-row justify-center items-center gap-14">
            <Link to="/book-trip" className="self-center text-white font-semibold bg-[#22c55e] 
            rounded-xl shadow-lg px-5 py-3 hover:scale-105 
            transition-transform duration-300">
              {t("common.book-your-trip-now")}
            </Link>
          </div>
        </div>

        {/* Image Carousel Section */}
        <div className="flex flex-col justify-center items-center relative gap-10">
          <div className="flex flex-col justify-center items-center gap-2">
            <p className="text-3xl font-medium">{t("travel-package-details.heading2")}</p>
            <p className="text-md text-center">{t("travel-package-details.subtext")}</p>
          </div>

          <div className="flex overflow-hidden justify-center items-center gap-[3vw] px-16">
            <AnimatePresence mode="popLayout">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="relative flex justify-center items-center flex-col w-[500px] h-[500px] shadow-lg bg-cover px-2 py-2 rounded-2xl bg-center"
                style={{ backgroundImage: `url(${currentImages[currentIndex]})` }}
              >
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              disabled={currentIndex === 0}
              className={`p-2 rounded-full bg-green-300 absolute left-0 top-[60%] -translate-y-1/2 ${currentIndex === 0 ? "opacity-50 cursor-not-allowed" : "hover:bg-green-400"
                }`}
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextSlide}
              disabled={currentIndex === currentImages.length - 1}
              className={`p-2 rounded-full bg-green-300 absolute right-0 top-[60%] -translate-y-1/2 ${currentIndex === currentImages.length - 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-green-400"
                }`}
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom section: Services */}
      <div className="flex justify-center items-end flex-row gap-25">
        <div className="flex justify-center items-center flex-col gap-1">
          <img src="assets/travelPackageDetails/driverservice.webp" alt="" className="w-30"></img>
          <p className="font-semibold text-[13px]">{t("travel-package-details.services.driver")}</p>
        </div>
        <div className="flex justify-center items-center flex-col gap-1">
          <img src="assets/travelPackageDetails/accommodation.webp" alt="" className="w-30"></img>
          <p className="font-semibold text-[13px]">{t("travel-package-details.services.accommodation")}</p>
        </div>
        <div className="flex justify-center items-center flex-col gap-1">
          <img src="assets/travelPackageDetails/tourguide.webp" alt="" className="w-30"></img>
          <p className="font-semibold text-[13px]">{t("travel-package-details.services.guide")}</p>
        </div>
        <div className="flex justify-center items-center flex-col gap-1">
          <img src="assets/travelPackageDetails/frommarchtonovember.webp" alt="" className="w-30"></img>
          <p className="font-semibold text-[13px]">{t("travel-package-details.services.date")}</p>
        </div>
        <div className="flex justify-center items-center flex-col gap-1">
          <img src="assets/travelPackageDetails/familyfriendly.webp" alt="" className="w-30"></img>
          <p className="font-semibold text-[13px]">{t("travel-package-details.services.family")}</p>
        </div>
        <div className="flex justify-center items-center flex-col gap-3">
          <img src="assets/travelPackageDetails/vipavailable.webp" alt="" className="w-15"></img>
          <p className="font-semibold text-[13px]">{t("travel-package-details.services.vip")}</p>
        </div>
      </div>


      {/* Price Include text only */}
      <div className="flex justify-center flex-row gap-40 bg-gray-100 py-8 rounded-xl px-20">
        <div className="flex justify-center flex-col gap-4">
          <p className="font-semibold text-xl">{t("travel-package-details.price-include.heading")}</p>
          <ul className="flex flex-col list-disc text-sm gap-3 items-start">
            <li>{t("travel-package-details.price-include.paragraph1")}</li>
            <li>{t("travel-package-details.price-include.paragraph2")}</li>
            <li>{t("travel-package-details.price-include.paragraph3")} {nights} {t("travel-package-details.price-include.paragraph4")}</li>
          </ul>
        </div>

        <div className="flex justify-center flex-col gap-4">
          <p className="font-semibold text-xl">{t("travel-package-details.price-exclude.heading")}</p>
          <ul className="flex flex-col list-disc text-sm gap-3 items-start">
            <li>{t("travel-package-details.price-exclude.paragraph1")}</li>
            <li>{t("travel-package-details.price-exclude.paragraph2")}</li>
            <li>{t("travel-package-details.price-exclude.paragraph3")}</li>
            <li>{t("travel-package-details.price-exclude.paragraph4")}</li>
          </ul>
        </div>
      </div>

      <div className="w-full flex justify-center items-center flex-row gap-20 px-40">

        <div className="flex justify-center items-center flex-col bg-gray-200 rounded-xl shadow-lg px-14 pt-6 pb-10 gap-3">
          <p className="text-lg font-semibold self-center">{t("travel-package-details.regular-package.heading")}</p>
          <ul className="flex flex-col list-disc text-sm gap-3 items-start">
            <li>{t("travel-package-details.regular-package.paragraph1")}</li>
            <li>{t("travel-package-details.regular-package.paragraph2")}</li>
            <li>{t("travel-package-details.regular-package.paragraph3")}</li>
            <li>{t("travel-package-details.regular-package.paragraph4")}</li>
            <li>{t("travel-package-details.regular-package.paragraph5")}</li>
          </ul>
          <div className="w-full flex justify-between items-center flex-row mt-6 px-10">
            <div className="flex justify-center items-center flex-col rounded-xl">
              <p className="text-4xl font-semibold">{price}{currency}</p>
              <p className="text-md mr-3">/ person</p>
            </div>
            <Link to="/book-trip">
              <button className="relative inline-block p-px font-semibold leading-6 text-white bg-[#22c55e] shadow-2xl cursor-pointer rounded-xl transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95">
                <span className="absolute inset-0 rounded-xl p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
                <span className="relative z-1 block px-4 py-2 rounded-xl">
                  <div className="relative z-1 flex items-center space-x-3">
                    <span className="transition-all duration-500 group-hover:translate-x-1">
                      {t("common.book-regular")}
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

        <div className="flex justify-center items-center flex-col bg-gray-800 text-white rounded-xl shadow-lg px-14 pt-6 pb-10 gap-3">
          <p className="text-lg font-semibold self-center flex items-center gap-2">
            {t("travel-package-details.vip-package.heading")}
          </p>
          <ul className="flex flex-col text-sm gap-3 items-start">
            <li className="flex items-start gap-2">
              <Crown className="w-4 h-4 text-yellow-500 mt-1" />
              <span>{t("travel-package-details.vip-package.paragraph1")}</span>
            </li>
            <li className="flex items-start gap-2">
              <Crown className="w-4 h-4 text-yellow-500 mt-1" />
              <span>{t("travel-package-details.vip-package.paragraph2")}</span>
            </li>
            <li className="flex items-start gap-2">
              <Crown className="w-4 h-4 text-yellow-500 mt-1" />
              <span>{t("travel-package-details.vip-package.paragraph3")}</span>
            </li>
            <li className="flex items-start gap-2">
              <Crown className="w-4 h-4 text-yellow-500 mt-1" />
              <span>{t("travel-package-details.vip-package.paragraph4")}</span>
            </li>
            <li className="flex items-start gap-2">
              <Crown className="w-4 h-4 text-yellow-500 mt-1" />
              <span>{t("travel-package-details.vip-package.paragraph5")}</span>
            </li>
          </ul>

          <div className="w-full flex justify-between items-center flex-row mt-6 px-10">
            <div className="flex justify-center items-center flex-col">
              <p className="text-4xl font-semibold">{vipPrice}{currency}</p>
              <p className="text-md mr-3">/ person</p>
            </div>
            <Link to="/book-trip">
              <button className="relative inline-block p-px font-semibold leading-6 text-white bg-[#22c55e] shadow-2xl cursor-pointer rounded-xl transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95">
                <span className="absolute inset-0 rounded-xl p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
                <span className="relative z-1 block px-4 py-2 rounded-xl">
                  <div className="relative z-1 flex items-center space-x-3">
                    <span className="transition-all duration-500 group-hover:translate-x-1">
                      {t("common.book-vip")}
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

      {/* Contact for Tailored Package */}
      <div className="w-full flex justify-center items-center flex-col text-center gap-20">
        <div className="flex justify-center items-center flex-col text-center w-[50%] gap-3">
          <p className="font-medium">{t("travel-package-details.contact-paragraph")}</p>
          <Link to="/contact#contact">
            <button className="relative inline-block p-px font-semibold leading-6 text-white bg-orange-600 shadow-2xl cursor-pointer rounded-xl transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95">
              <span className="absolute inset-0 rounded-xl p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
              <span className="relative z-1 block px-4 py-2 rounded-xl">
                <div className="relative z-1 flex items-center space-x-3">
                  <span className="transition-all duration-500 group-hover:translate-x-1">
                    {t("common.contact-button")}
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

export default TravelPackageDetails;


{/* <div
        className="flex justify-center items-center flex-col rounded-xl py-10 px-20 w-full max-w-[1200px] mx-auto"
        style={{ boxShadow: "0 0 50px rgba(0, 0, 0, 0.1)" }}
      >
        <p className="text-2xl font-medium text-center">
          Looking for Adrenaline-Packed Adventures?
        </p>
        <p className="text-center mt-2 text-[15px]">
          Whether it's white-water rafting, paragliding, zip-lining, or other thrilling activities — we’ve got you covered! We can easily include these experiences in your travel package. Just reach out to us via social media or fill out the contact form, and we’ll take care of the rest!
        </p>
        <Link to="/contact#contact">
          <button className="relative mt-10 inline-block p-px font-semibold leading-6 text-white bg-orange-600 shadow-2xl cursor-pointer rounded-xl transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95">
            <span className="absolute inset-0 rounded-xl p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
            <span className="relative z-1 block px-4 py-2 rounded-xl">
              <div className="relative z-1 flex items-center space-x-3">
                <span className="transition-all duration-500 group-hover:translate-x-1">
                  {t("common.contact-button")}
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
      </div> */}


{/* Check Other Packages */ }
{/* 
        <div className="flex justify-center items-center flex-col gap-6 mb-10 bg-gray-200 px-10 py-6 rounded-xl">
          <p className="font-medium text-md">{t("travel-package-details.other-packages-heading")}</p>
          <div className="flex justify-center items-center gap-10">
            <Link to="/travel-packages">
              <button className="relative inline-block p-px text-sm font-semibold leading-6 text-white bg-gray-700 shadow-md cursor-pointer rounded-xl transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95">
                <span className="absolute inset-0 rounded-xl p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
                <span className="relative z-1 block px-4 py-2 rounded-xl">
                  <div className="relative z-1 flex items-center space-x-3">
                    <span className="transition-all duration-500 group-hover:translate-x-1">
                      5 Nights Package
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
            <Link to="/travel-packages">
              <button className="relative inline-block p-px font-semibold text-sm leading-6 text-white bg-gray-700  shadow-md cursor-pointer rounded-xl transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95">
                <span className="absolute inset-0 rounded-xl p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
                <span className="relative z-1 block px-4 py-2 rounded-xl">
                  <div className="relative z-1 flex items-center space-x-3">
                    <span className="transition-all duration-500 group-hover:translate-x-1">
                      7 Nights Package
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
        </div> */}