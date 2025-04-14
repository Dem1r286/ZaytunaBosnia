import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Crown } from 'lucide-react';

const FadeInSection = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
    >
      {children}
    </motion.div>
  );
};

const TravelPackageDetails = () => {
  const { state } = useLocation();
  const [selectedDay, setSelectedDay] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleCount = 1;

  const sourcesData = [
    { img: "./src/assets/destinations/sarajevo.jpg", name: "Sarajevo", description: "Description of Sarajevo", url: "" },
    { img: "./src/assets/destinations/mostar.jpg", name: "Mostar", description: "Description of Mostar", url: "" },
    { img: "./src/assets/destinations/blagaj.jpg", name: "Blagaj Tekija", description: "Description of Blagaj Tekija", url: "" },
    { img: "./src/assets/destinations/jajce.jpg", name: "Jajce Waterfall", description: "Description of Jajce", url: "" },
    { img: "./src/assets/destinations/pocitelj.jpg", name: "Počitelj", description: "Description of Počitelj", url: "" },
    { img: "./src/assets/destinations/jajce-mlin.jpg", name: "Jajce Mlinčići", description: "Description of Jajce Mlincici", url: "" },
    { img: "./src/assets/destinations/strbackibuk.jpg", name: "Štrbački buk", description: "Description of Štrbački buk", url: "" },
    { img: "./src/assets/destinations/travnik.jpg", name: "Travnik", description: "Description of Travnik", url: "" },
    { img: "./src/assets/destinations/bijambare.jpg", name: "Bijambare Cave", description: "Description of Travnik", url: "" },
    { img: "./src/assets/destinations/vrelobosne.jpg", name: "Vrelo Bosne", description: "Description of Travnik", url: "" },
    { img: "./src/assets/destinations/kravice.jpg", name: "Kravice Waterfall", description: "Description of Travnik", url: "" },
    { img: "./src/assets/destinations/prokoskolake.jpg", name: "Prokoško Lake", description: "Description of Travnik", url: "" },
  ];

  const nextSlide = () => {
    if (currentIndex < sourcesData.length - visibleCount) {
      setCurrentIndex(currentIndex + visibleCount);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - visibleCount);
    }
  };

  if (!state) {
    return <div>No package selected.</div>;
  }

  const { nights, days, price, vipPrice, currency, activities, activitiesDetails } = state;

  return (
    <div className="w-screen min-h-screen h-fit px-10 flex flex-col gap-30 items-center mt-40 max-w-[2000px] mb-30 mx-auto">
      <h1 className="font-semibold text-5xl text-center mb-10">
        {nights} Nights / {days} Days Package
      </h1>

      {/* Top section: Tour Program + Price Include Title */}
      <div className="w-full flex flex-row justify-center gap-30 items-start gap-10">

        {/* Tour Program */}
        <div className="w-1/2 flex flex-col items-center justify-center">
          <h2 className="text-3xl font-medium mb-6">Tour Program</h2>

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
                Day {index + 1}
              </button>
            ))}
          </div>

          {selectedDay !== null && (
            <div className="flex flex-col justify-start mb-20 pt-14 items-center mt-4 bg-gray-100 px-10 py-6 rounded-xl min-h-[320px] max-h-[320px] text-center">
              <p className="text-lg font-medium mb-2">{activities[selectedDay]}</p>
              <p className="text-sm leading-relaxed">{activitiesDetails ? activitiesDetails[selectedDay] : "No additional details available."}</p>
            </div>
          )}

          <div className="flex flex-row justify-center items-center gap-14">
            <Link to="/book-trip" className="self-center text-white font-semibold bg-[#22c55e] 
            rounded-xl shadow-lg px-5 py-3 hover:scale-105 
            transition-transform duration-300">
              Book Your Trip Now
            </Link>
          </div>
        </div>

        {/* What Will You See */}
        <div className="flex flex-col justify-center items-center relative gap-10">
          <div className="flex flex-col justify-center items-center gap-2">
            <p className="text-3xl font-medium">What Will You See</p>
            <p className="text-md">Discover stunning destinations, each offering unique sights and experiences</p>
          </div>
          <div className="flex overflow-hidden justify-center items-center gap-[3vw] px-4">
            <AnimatePresence mode="popLayout" custom={currentIndex}>
              {sourcesData
                .slice(currentIndex, currentIndex + visibleCount)
                .map((item, idx) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.3 }}
                    className="relative flex justify-center items-center flex-col w-[500px] h-[500px] shadow-lg bg-cover px-2 py-2 rounded-2xl bg-center"
                    style={{ backgroundImage: `url(${item.img})` }}
                  />
                ))}
            </AnimatePresence>
          </div>

          {/* Navigation buttons outside the carousel */}
          <button
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className={`p-2 rounded-full bg-green-300 absolute left-6 mt-10 transform -translate-x-8 top-1/2 -translate-y-1/2 ${currentIndex === 0 ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-200"}`}
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            disabled={currentIndex >= sourcesData.length - visibleCount}
            className={`p-2 rounded-full bg-green-300 absolute right-6 mt-10 transform translate-x-8 top-1/2 -translate-y-1/2 ${currentIndex >= sourcesData.length - visibleCount ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-200"}`}
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>


      {/* Bottom section: Services */}
      <div className="flex justify-center items-end flex-row gap-25">
        <div className="flex justify-center items-center flex-col gap-1">
          <img src="src/assets/TravelPackageDetailsImages/driverservice.png" alt="" className="w-30"></img>
          <p className="font-semibold text-[13px]">Driver Services</p>
        </div>
        <div className="flex justify-center items-center flex-col gap-1">
          <img src="src/assets/TravelPackageDetailsImages/accommodation.png" alt="" className="w-30"></img>
          <p className="font-semibold text-[13px]">Accommodation</p>
        </div>
        <div className="flex justify-center items-center flex-col gap-1">
          <img src="src/assets/TravelPackageDetailsImages/tourguide.png" alt="" className="w-30"></img>
          <p className="font-semibold text-[13px]">Tour Guide</p>
        </div>
        <div className="flex justify-center items-center flex-col gap-1">
          <img src="src/assets/TravelPackageDetailsImages/frommarchtonovember.png" alt="" className="w-30"></img>
          <p className="font-semibold text-[13px]">From March to November</p>
        </div>
        <div className="flex justify-center items-center flex-col gap-1">
          <img src="src/assets/TravelPackageDetailsImages/familyfriendly.png" alt="" className="w-30"></img>
          <p className="font-semibold text-[13px]">Family Friendly</p>
        </div>
        <div className="flex justify-center items-center flex-col gap-3">
          <img src="src/assets/TravelPackageDetailsImages/vipavailable.png" alt="" className="w-15"></img>
          <p className="font-semibold text-[13px]">Vip Available</p>
        </div>
      </div>

      {/* Price Include text only */}
      <div className="flex justify-center flex-row gap-40 bg-gray-100 py-8 rounded-xl px-20">
        <div className="flex justify-center flex-col gap-4">
          <p className="font-semibold text-xl">Price Includes</p>
          <ul className="flex flex-col list-disc text-sm gap-3 items-start">
            <li>Transportation provided in a modern, air-conditioned vehicle (car/van/bus) with all fees included (fuel, tolls, parking). Airport transfers are also included.</li>
            <li>Experienced driver (English or Arabic is not guaranteed, depending on availability), available during daily tours, with a maximum of 8 hours per day.</li>
            <li>Accommodation for {nights} nights, including obligatory service charges and taxes levied by the hotel. The type of the accommodation (hotel or villa) will be determined based on the group size.</li>
          </ul>
        </div>

        <div className="flex justify-center flex-col gap-4">
          <p className="font-semibold text-xl">Price Excludes</p>
          <ul className="flex flex-col list-disc text-sm gap-3 items-start">
            <li>Visa fees or travel insurance</li>
            <li>International airfares and airport taxes</li>
            <li>Excursions, activities, and sightseeing trips that are not specifically mentioned as included.</li>
            <li>Additional charges imposed by hotels for the use of the higher-category rooms, certain facilities, extra meals, drinks, laundry, and personal items. This includes any applicable taxes or service charges.</li>
          </ul>
        </div>
      </div>

      <div className="w-full flex justify-center items-center flex-row gap-20 px-40">

        <div className="flex justify-center items-center flex-col bg-gray-200 rounded-xl shadow-lg px-14 pt-6 pb-10 gap-3">
          <p className="text-lg font-semibold self-center">Regular Package</p>
          <ul className="flex flex-col list-disc text-sm gap-3 items-start">
            <li>Accommodation as per itinerary (3 or 4 star hotel)</li>
            <li>Ordinary transportation</li>
            <li>Travel guide speaking English or Arabic (based on availability)</li>
            <li>Driver (English or Arabic is not guaranteed, depending on availability)</li>
            <li>All entrance fees for included attractions</li>
          </ul>
          <div className="w-full flex justify-between items-center flex-row mt-6 px-10">
            <div className="flex justify-center items-center flex-col rounded-xl">
              <p className="text-4xl font-semibold">{price}{currency}</p>
              <p className="text-md mr-3">/ person</p>
            </div>
            <Link to="/contact#contact">
              <button className="relative inline-block p-px font-semibold leading-6 text-white bg-[#22c55e] shadow-2xl cursor-pointer rounded-xl transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95">
                <span className="absolute inset-0 rounded-xl p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
                <span className="relative z-1 block px-4 py-2 rounded-xl">
                  <div className="relative z-1 flex items-center space-x-3">
                    <span className="transition-all duration-500 group-hover:translate-x-1">
                      Book Regular
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
            What Does the VIP Package Get You?
          </p>
          <ul className="flex flex-col text-sm gap-3 items-start">
            <li className="flex items-start gap-2">
              <Crown className="w-4 h-4 text-yellow-500 mt-1" />
              <span>Luxury accommodation as per the VIP package (5 star hotel)</span>
            </li>
            <li className="flex items-start gap-2">
              <Crown className="w-4 h-4 text-yellow-500 mt-1" />
              <span>Luxury transportation</span>
            </li>
            <li className="flex items-start gap-2">
              <Crown className="w-4 h-4 text-yellow-500 mt-1" />
              <span>Travel guide fluent in Arabic and English</span>
            </li>
            <li className="flex items-start gap-2">
              <Crown className="w-4 h-4 text-yellow-500 mt-1" />
              <span>Driver fluent in Arabic or English</span>
            </li>
            <li className="flex items-start gap-2">
              <Crown className="w-4 h-4 text-yellow-500 mt-1" />
              <span>Exclusive VIP treatment for the entire duration of the trip</span>
            </li>
          </ul>

          <div className="w-full flex justify-between items-center flex-row mt-6 px-10">
            <div className="flex justify-center items-center flex-col">
              <p className="text-4xl font-semibold">{vipPrice}{currency}</p>
              <p className="text-md mr-3">/ person</p>
            </div>
            <Link to="/contact#contact">
              <button className="relative inline-block p-px font-semibold leading-6 text-white bg-[#22c55e] shadow-2xl cursor-pointer rounded-xl transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95">
                <span className="absolute inset-0 rounded-xl p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
                <span className="relative z-1 block px-4 py-2 rounded-xl">
                  <div className="relative z-1 flex items-center space-x-3">
                    <span className="transition-all duration-500 group-hover:translate-x-1">
                      Book VIP
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


      <div className="w-full flex justify-center items-center flex-col text-center gap-20">
      <div className="flex justify-center items-center flex-col text-center w-1/2 gap-3">
        <p>Can’t find a package that fits your needs? No worries — just reach out to us and we’ll tailor something just for you!</p>
        <Link to="/contact#contact">
          <button className="relative inline-block p-px font-semibold leading-6 text-white bg-orange-600 shadow-2xl cursor-pointer rounded-xl transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95">
            <span className="absolute inset-0 rounded-xl p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
            <span className="relative z-1 block px-4 py-2 rounded-xl">
              <div className="relative z-1 flex items-center space-x-3">
                <span className="transition-all duration-500 group-hover:translate-x-1">
                  Contact Us
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

        <div className="flex justify-center items-center flex-col gap-6 mb-10 bg-gray-200 px-10 py-6 rounded-xl">
          <p className="font-medium text-md">Check other packages</p>
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
        </div>
      </div>
    </div>
  );
};

export default TravelPackageDetails;

