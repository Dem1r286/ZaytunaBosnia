import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Destinations = () => {
  const { t, i18n } = useTranslation("global");
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleCount = 4;

  const sourcesData = [
    { img: "assets/destinations/sarajevo.webp", name: t("destinations.card1"), id: "sarajevo", url: "" },
    { img: "assets/destinations/mostar.webp", name: t("destinations.card2"), id: "mostar", url: "" },
    { img: "assets/destinations/blagaj.webp", name: t("destinations.card3"), id: "blagaj-tekija", url: "" },
    { img: "assets/destinations/jajce.webp", name: t("destinations.card4"), id: "jajce-waterfall", url: "" },
    { img: "assets/destinations/pocitelj.webp", name: t("destinations.card5"), id: "pocitelj", url: "" },
    { img: "assets/destinations/konjic.webp", name: t("destinations.card6"), id: "konjic", url: "" },
    { img: "assets/destinations/jajce-mlin.webp", name:  t("destinations.card7"), id: "jajce-mills", url: "" },
    { img: "assets/destinations/strbackibuk.webp", name:  t("destinations.card8"), id: "strbacki-buk", url: "" },
    { img: "assets/destinations/travnik.webp", name:  t("destinations.card9"), id: "travnik", url: "" },
    { img: "assets/destinations/bijambare.webp", name: t("destinations.card10"), id: "bijambare", url: "" },
    { img: "assets/destinations/vrelobosne.webp", name:  t("destinations.card11"), id: "bosnia-river", url: "" },
    { img: "assets/destinations/kravice.webp", name:  t("destinations.card12"), id: "kravice", url: "" },
    { img: "assets/destinations/prokoskolake.webp", name:  t("destinations.card13"), id: "prokosko-lake", url: "" },
    { img: "assets/destinations/bjelasnica.webp", name:  t("destinations.card14"), id: "bjelasnica", url: "" },
    { img: "assets/destinations/trebevic.webp", name: t("destinations.card15"), id: "trebevic", url: "" },
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

  return (
    <div
      id="destinations"
      className="flex flex-col items-center gap-16 w-full py-10"
    >
      {/* Header Section */}
      <div className="flex justify-between items-center gap-10">
        <h5 className="text-3xl font-semibold flex-grow">{t("destinations.heading")}</h5>
        <div className="flex gap-6">
          <button
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className={`p-2 rounded-full bg-green-300 ${currentIndex === 0
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-gray-200"
              }`}
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            disabled={currentIndex >= sourcesData.length - visibleCount}
            className={`p-2 rounded-full bg-green-300 ${currentIndex >= sourcesData.length - visibleCount
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-gray-200"
              }`}
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>

      {/* Destination Cards */}
      <div className="flex overflow-hidden justify-center items-center gap-[3vw] w-full px-4 py-10">
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
                className="relative flex justify-center items-center flex-col w-[350px] h-[500px] shadow-lg bg-cover px-2 py-2 rounded-2xl overflow-hidden bg-center hover:scale-105 transition-transform duration-300"
                style={{ backgroundImage: `url(${item.img})` }}
              >
                <Link to={`/destination/${item.id}`} className="absolute inset-0 flex flex-col justify-center items-center bg-black/20 rounded-2xl">
                  <div className="relative flex justify-between items-center w-full py-5 px-4 mt-auto bg-black/70">
                    <p className="text-md font-semibold text-white">{item.name}</p>
                    <p className="text-white bg-[#22c55e] text-xs font-semibold p-2 rounded-lg hover:scale-105 transition-transform duration-300">
                    {t("common.read-more-button")}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Destinations;
