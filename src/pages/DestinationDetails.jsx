import React from "react";
import { useParams } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";


const DestinationDetails = () => {
  const { t } = useTranslation("global");
  const { name } = useParams();
  const [currentIndex, setCurrentIndex] = useState(0);

  const destinationsData = {
    "sarajevo": {
      name: t("destinations.card1"),
      description: t("destination-details.description1"),
      heading: t("destination-details.heading1"),
      text1: t("destination-details.text1-1"),
      text2: t("destination-details.text1-2"),
      text3: t("destination-details.text1-3"),
      text4: t("destination-details.text1-4"),
      images: [
        "/assets/destinations/sarajevo.webp",
        "/assets/destinations/sarajevo1.webp",
        "/assets/destinations/sarajevo2.webp",
        "/assets/destinations/sarajevo3.webp",
        "/assets/destinations/sarajevo4.webp"
      ]
    },
    "mostar": {
      name: t("destinations.card2"),
      description: t("destination-details.description2"),
      heading: t("destination-details.heading2"),
      text1: t("destination-details.text2-1"),
      text2: t("destination-details.text2-2"),
      text3: t("destination-details.text2-3"),
      text4: t("destination-details.text2-4"),
      images: [
        "/assets/destinations/mostar.webp",
        "/assets/destinations/mostar1.webp",
        "/assets/destinations/mostar2.webp",
        "/assets/destinations/mostar3.webp",
        "/assets/destinations/mostar4.webp",
      ]
    },
    "blagaj-tekija": {
      name: t("destinations.card3"),
      description: t("destination-details.description3"),
      heading: t("destination-details.heading3"),
      text1: t("destination-details.text3-1"),
      text2: t("destination-details.text3-2"),
      text3: t("destination-details.text3-3"),
      text4: t("destination-details.text3-4"),
      images: [
        "/assets/destinations/blagaj.webp",
        "/assets/destinations/blagaj1.webp",
        "/assets/destinations/blagaj2.webp",
        "/assets/destinations/blagaj3.webp",
        "/assets/destinations/blagaj4.webp",
      ]
    },
    "jajce-waterfall": {
      name: t("destinations.card4"),
      description: t("destination-details.description4"),
      heading: t("destination-details.heading4"),
      text1: t("destination-details.text4-1"),
      text2: t("destination-details.text4-2"),
      text3: t("destination-details.text4-3"),
      text4: t("destination-details.text4-4"),
      images: [
        "/assets/destinations/jajce.webp",
        "/assets/destinations/jajce1.webp",
        "/assets/destinations/jajce2.webp",
        "/assets/destinations/jajce3.webp",
        "/assets/destinations/jajce4.webp"
      ]
    },
    "pocitelj": {
      name: t("destinations.card5"),
      description: t("destination-details.description5"),
      heading: t("destination-details.heading5"),
      text1: t("destination-details.text5-1"),
      text2: t("destination-details.text5-2"),
      text3: t("destination-details.text5-3"),
      text4: t("destination-details.text5-4"),
      images: [
        "/assets/destinations/pocitelj.webp",
        "/assets/destinations/pocitelj1.webp",
        "/assets/destinations/pocitelj2.webp",
        "/assets/destinations/pocitelj3.webp"
      ]
    },
    "konjic": {
      name: t("destinations.card6"),
      description: t("destination-details.description6"),
      heading: t("destination-details.heading6"),
      text1: t("destination-details.text6-1"),
      text2: t("destination-details.text6-2"),
      text3: t("destination-details.text6-3"),
      text4: t("destination-details.text6-4"),
      images: [
        "/assets/destinations/konjic.webp",
        "/assets/destinations/konjic1.webp",
        "/assets/destinations/konjic2.webp",
        "/assets/destinations/konjic3.webp",
        "/assets/destinations/konjic4.webp"
      ]
    },
    "jajce-mills": {
      name: t("destinations.card7"),
      description: t("destination-details.description7"),
      heading: t("destination-details.heading7"),
      text1: t("destination-details.text7-1"),
      text2: t("destination-details.text7-2"),
      text3: t("destination-details.text7-3"),
      text4: t("destination-details.text7-4"),
      images: [
        "/assets/destinations/jajce-mlin.webp",
        "/assets/destinations/jajcemlin2.webp",
        "/assets/destinations/jajcemlin3.webp"
      ]
    },
    "strbacki-buk": {
      name: t("destinations.card8"),
      description: t("destination-details.description8"),
      heading: t("destination-details.heading8"),
      text1: t("destination-details.text8-1"),
      text2: t("destination-details.text8-2"),
      text3: t("destination-details.text8-3"),
      text4: t("destination-details.text8-4"),
      images: [
        "/assets/destinations/strbackibuk.webp",
        "/assets/destinations/strbackibuk1.webp",
        "/assets/destinations/strbackibuk2.webp",
        "/assets/destinations/strbackibuk3.webp"
      ]
    },
    "travnik": {
      name: t("destinations.card9"),
      description: t("destination-details.description9"),
      heading: t("destination-details.heading9"),
      text1: t("destination-details.text9-1"),
      text2: t("destination-details.text9-2"),
      text3: t("destination-details.text9-3"),
      text4: t("destination-details.text9-4"),
      images: [
        "/assets/destinations/travnik.webp",
        "/assets/destinations/travnik1.webp",
        "/assets/destinations/travnik2.webp",
        "/assets/destinations/travnik3.webp",
        "/assets/destinations/travnik4.webp"
      ]
    },
    "bijambare": {
      name: t("destinations.card10"),
      description: t("destination-details.description10"),
      heading: t("destination-details.heading10"),
      text1: t("destination-details.text10-1"),
      text2: t("destination-details.text10-2"),
      text3: t("destination-details.text10-3"),
      text4: t("destination-details.text10-4"),
      images: [
        "/assets/destinations/bijambare.webp",
        "/assets/destinations/bijambare1.webp",
        "/assets/destinations/bijambare2.webp",
        "/assets/destinations/bijambare3.webp"
      ]
    },
    "bosnia-river": {
      name: t("destinations.card11"),
      description: t("destination-details.description11"),
      heading: t("destination-details.heading11"),
      text1: t("destination-details.text11-1"),
      text2: t("destination-details.text11-2"),
      text3: t("destination-details.text11-3"),
      text4: t("destination-details.text11-4"),
      images: [
        "/assets/destinations/vrelobosne.webp",
        "/assets/destinations/vrelobosne1.webp",
        "/assets/destinations/vrelobosne2.webp",
        "/assets/destinations/vrelobosne3.webp",
        "/assets/destinations/vrelobosne4.webp"
      ]
    },
    "kravice": {
      name: t("destinations.card12"),
      description: t("destination-details.description12"),
      heading: t("destination-details.heading12"),
      text1: t("destination-details.text12-1"),
      text2: t("destination-details.text12-2"),
      text3: t("destination-details.text12-3"),
      text4: t("destination-details.text12-4"),
      images: [
        "/assets/destinations/kravice.webp",
        "/assets/destinations/kravice2.webp",
        "/assets/destinations/kravice3.webp",
        "/assets/destinations/kravice4.webp",
        "/assets/destinations/kravice5.webp"
      ]
    },
    "prokosko-lake": {
      name: t("destinations.card13"),
      description: t("destination-details.description13"),
      heading: t("destination-details.heading13"),
      text1: t("destination-details.text13-1"),
      text2: t("destination-details.text13-2"),
      text3: t("destination-details.text13-3"),
      text4: t("destination-details.text13-4"),
      images: [
        "/assets/destinations/prokoskolake.webp",
        "/assets/destinations/prokosko1.webp",
        "/assets/destinations/prokosko2.webp",
        "/assets/destinations/prokosko3.webp",
        "/assets/destinations/prokosko4.webp"
      ]
    },
    "bjelasnica": {
      name: t("destinations.card14"),
      description: t("destination-details.description14"),
      heading: t("destination-details.heading14"),
      text1: t("destination-details.text14-1"),
      text2: t("destination-details.text14-2"),
      text3: t("destination-details.text14-3"),
      text4: t("destination-details.text14-4"),
      images: [
        "/assets/destinations/bjelasnica.webp",
        "/assets/destinations/bjelasnica1.webp",
        "/assets/destinations/bjelasnica2.webp",
        "/assets/destinations/bjelasnica3.webp",
        "/assets/destinations/bjelasnica4.webp"
      ]
    },
    "trebevic": {
      name: t("destinations.card15"),
      description: t("destination-details.description15"),
      heading: t("destination-details.heading15"),
      text1: t("destination-details.text15-1"),
      text2: t("destination-details.text15-2"),
      text3: t("destination-details.text15-3"),
      text4: t("destination-details.text15-4"),
      images: [
        "/assets/destinations/trebevic.webp",
        "/assets/destinations/trebevic1.webp",
        "/assets/destinations/trebevic2.webp",
        "/assets/destinations/trebevic3.webp",
        "/assets/destinations/trebevic4.webp"
      ]
    }
  };


  const destination = destinationsData[name];

  const nextSlide = () => {
    if (currentIndex < destination?.images.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const randomDestinations = useMemo(() => {
    return Object.keys(destinationsData)
      .filter((key) => key !== name)
      .sort(() => Math.random() - 0.5)
      .slice(0, 4);
  }, [name]);

  useEffect(() => {
    setCurrentIndex(0);
  }, [name]);

  return (
    <div
      id="destination-details"
      className="flex justify-center items-center flex-col min-h-screen w-screen py-30 lg:py-40">
      <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-center mb-1 lg:mb-2">{destination?.name}</h1>
      <p className="text-[10px] sm:text-sm md:text-[14px] mb-10 px-10 text-center">{destination?.description}</p>


      <div className="flex justify-between items-center flex-col lg:flex-row w-full px-10 lg:px-30 max-w-[2000px] gap-10 lg:gap-20">
        <div className="flex justify-center flex-col items-center bg-gray-100 w-full lg:w-[60%] p-10 rounded-xl">
          {destination?.heading
            ?.split('\n\n')
            .map((paragraph, index) => (
              <p key={index} className="text-sm sm:text-md lg:text-xl font-medium tracking-wide mb-4 text-center">
                {paragraph}
              </p>
            ))}

          {destination?.text1
            ?.split('\n\n')
            .map((paragraph, index) => (
              <p key={index} className="text-xs lg:text-sm tracking-wide mb-4">
                {paragraph}
              </p>
            ))}

          {destination?.text2
            ?.split('\n\n')
            .map((paragraph, index) => (
              <p key={index} className="text-xs lg:text-sm tracking-wide mb-4 font-semibold">
                {paragraph}
              </p>
            ))}

          {destination?.text3
            ?.split('\n\n')
            .map((paragraph, index) => (
              <p key={index} className="text-xs lg:text-sm tracking-wide mb-4">
                {paragraph}
              </p>
            ))}

          {destination?.text4
            ?.split('\n\n')
            .map((paragraph, index) => (
              <p key={index} className="text-xs lg:text-sm tracking-wide mb-4">
                {paragraph}
              </p>
            ))}
        </div>

         <Link to="/book-trip">
        <button className="relative inline-block p-px font-semibold mt-10 leading-6 text-white bg-[#22c55e] shadow-2xl cursor-pointer rounded-xl transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95">
          <span className="absolute inset-0 rounded-xl p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
          <span className="relative z-1 block px-4 py-2 rounded-xl">
            <div className="relative z-1 flex items-center space-x-3">
              <span className="transition-all duration-500 group-hover:translate-x-1 text-lg">
                {t("common.book-your-trip")}
              </span>
              <svg
                className=":w-6 h-6 transition-transform duration-500 group-hover:translate-x-1"
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

        <div className="flex flex-col justify-center items-center relative">
          <div className="flex overflow-hidden justify-center items-center px-4 pt-6 pb-4">
            <AnimatePresence mode="popLayout">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
                className="relative flex justify-center items-center flex-col w-[250px] h-[250px] md:w-[350px] md:h-[350px] lg:w-[450px] lg:h-[450px] shadow-lg bg-cover rounded-2xl bg-center"
              >
                <img
                  src={destination?.images[currentIndex]}
                  alt="destination"
                  className="object-cover w-full h-full rounded-2xl"
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons at Bottom */}
          <div className="flex justify-center gap-6">
            <button
              onClick={prevSlide}
              disabled={currentIndex === 0}
              className={`p-2 rounded-full bg-green-300 ${currentIndex === 0 ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-200"}`}
            >
              <ChevronLeft className="w-5 md:w-6" />
            </button>
            <button
              onClick={nextSlide}
              disabled={currentIndex >= destination?.images.length - 1}
              className={`p-2 rounded-full bg-green-300 ${currentIndex >= destination?.images.length - 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-200"}`}
            >
              <ChevronRight className="w-5 md:w-6" />
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap justify-center items-center flex-col gap-10 mt-14">
        <p className="text-2xl font-medium">{t("destination-details.more-heading")}</p>
        <div className="flex flex-wrap justify-center items-center flex-row gap-4 md:gap-10">
          {randomDestinations.map((key) => (
            <Link
              key={key}
              to={`/destination/${key}`}
              className="relative flex items-end justify-center w-[100px] h-[120px] rounded-lg hover:scale-105 transition-transform duration-300 text-white text-center"
              style={{
                backgroundImage: `url(${destinationsData[key].images[0]})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                boxShadow: "0 0 40px rgba(0, 0, 0, 0.2)",
              }}
            >
              <div className="absolute inset-0 bg-black/10 rounded-lg"></div>
              <p className="hidden relative z-10 text-sm font-semibold w-full bg-black/80 py-4 rounded-lg">{destinationsData[key].name}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};


export default DestinationDetails;
