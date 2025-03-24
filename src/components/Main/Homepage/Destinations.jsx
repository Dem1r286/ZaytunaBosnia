import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Destinations = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleCount = 4;

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

  return (
    <div
      id="destinations"
      className="flex flex-col items-center gap-16 w-full py-10"
    >
      {/* Header Section */}
      <div className="flex justify-between items-center gap-10">
        <h5 className="text-3xl font-semibold flex-grow">Explore Destinations</h5>
        <div className="flex gap-6">
          <button
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className={`p-2 rounded-full bg-green-300 ${
              currentIndex === 0
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-gray-200"
            }`}
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            disabled={currentIndex >= sourcesData.length - visibleCount}
            className={`p-2 rounded-full bg-green-300 ${
              currentIndex >= sourcesData.length - visibleCount
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-gray-200"
            }`}
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>

      {/* Destination Cards */}
      <div className="flex overflow-hidden justify-center items-center gap-[3vw] w-full px-4">
        <AnimatePresence mode="wait" custom={currentIndex}>
          {sourcesData
            .slice(currentIndex, currentIndex + visibleCount)
            .map((item, idx) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
                className="relative flex justify-center items-center flex-col w-[350px] h-[500px] shadow-lg bg-cover px-2 py-2 rounded-2xl overflow-hidden bg-center 
                before:absolute before:inset-0 before:bg-black/20 before:brightness-80"
                style={{ backgroundImage: `url(${item.img})` }}
              >
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="relative flex justify-between items-center flex-row w-full p-4 mt-auto bg-black/60 rounded-2xl">
                  <div>
                    <p className="text-md font-semibold text-white">{item.name}</p>
                    <p className="text-white text-sm">{item.description}</p>
                  </div>
                  <a
                    href={item.url}
                    className="flex items-center justify-center text-white bg-[#22c55e] text-xs font-semibold p-2 rounded-lg"
                  >
                    Read More
                  </a>
                </div>
              </motion.div>
            ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Destinations;