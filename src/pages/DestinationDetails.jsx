import React from "react";
import { useParams } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useMemo } from "react";
import { useTranslation } from "react-i18next";


const DestinationDetails = () => {
  const { t, i18n } = useTranslation("global");
  const { name } = useParams();
  const [currentIndex, setCurrentIndex] = useState(0);

  const destinationsData = {
    "sarajevo": {
      name: t("destinations.card1"),
      description: t("destination-details.description1"),
      text: t("destination-details.text1"),
      images: [
        "/assets/destinations/sarajevo.webp",
        "/assets/destinations/sarajevo.webp",
        "/assets/destinations/sarajevo.webp",
        "/assets/destinations/sarajevo.webp",
        "/assets/destinations/sarajevo.webp"
      ]
    },
    "mostar": {
      name: t("destinations.card2"),
      description: t("destination-details.description2"),
      text: t("destination-details.text2"),
      images: [
        "/assets/destinations/mostar.webp",
        "/assets/destinations/mostar.webp",
        "/assets/destinations/mostar.webp",
        "/assets/destinations/mostar.webp",
        "/assets/destinations/mostar.webp",
      ]
    },
    "blagaj-tekija": {
      name:  t("destinations.card3"),
      description: t("destination-details.description3"),
      text: t("destination-details.text3"),
      images: [
        "/assets/destinations/blagaj.webp",
        "/assets/destinations/blagaj.webp",
        "/assets/destinations/blagaj.webp",
        "/assets/destinations/blagaj.webp",
        "/assets/destinations/blagaj.webp",
      ]
    },
    "jajce-waterfall": {
      name:  t("destinations.card4"),
      description: t("destination-details.description4"),
      text: t("destination-details.text4"),
      images: [
        "/assets/destinations/jajce.webp",
        "/assets/destinations/jajce.webp",
        "/assets/destinations/jajce.webp",
        "/assets/destinations/jajce.webp",
        "/assets/destinations/jajce.webp"
      ]
    },
    "pocitelj": {
      name:  t("destinations.card5"),
      description: t("destination-details.description5"),
      text: t("destination-details.text5"),
      images: [
        "/assets/destinations/pocitelj.webp",
        "/assets/destinations/pocitelj.webp",
        "/assets/destinations/pocitelj.webp",
        "/assets/destinations/pocitelj.webp",
        "/assets/destinations/pocitelj.webp"
      ]
    },
    "konjic": {
      name: t("destinations.card6"),
      description:t("destination-details.description6"),
      text: t("destination-details.text6"),
      images: [
        "/assets/destinations/trebevic.jpg",
        "/assets/destinations/trebevic.jpg",
        "/assets/destinations/trebevic.jpg",
        "/assets/destinations/trebevic.jpg",
        "/assets/destinations/trebevic.jpg"
      ]
    },
    "jajce-mills": {
      name: t("destinations.card7"),
      description: t("destination-details.description7"),
      text:t("destination-details.text7"),
      images: [
        "/assets/destinations/jajce-mlin.webp",
        "/assets/destinations/jajce-mlin.webp",
        "/assets/destinations/jajce-mlin.webp",
        "/assets/destinations/jajce-mlin.webp",
        "/assets/destinations/jajce-mlin.webp"
      ]
    },
    "strbacki-buk": {
      name: t("destinations.card8"),
      description: t("destination-details.description8"),
      text: t("destination-details.text8"),
      images: [
        "/assets/destinations/strbackibuk.webp",
        "/assets/destinations/strbackibuk.webp",
        "/assets/destinations/strbackibuk.webp",
        "/assets/destinations/strbackibuk.webp",
        "/assets/destinations/strbackibuk.webp"
      ]
    },
    "travnik": {
      name: t("destinations.card9"),
      description: t("destination-details.description9"),
      text: t("destination-details.text9"),
      images: [
        "/assets/destinations/travnik.webp",
        "/assets/destinations/travnik.webp",
        "/assets/destinations/travnik.webp",
        "/assets/destinations/travnik.webp",
        "/assets/destinations/travnik.webp"
      ]
    },
    "bijambare": {
      name: t("destinations.card10"),
      description: t("destination-details.description10"),
      text: t("destination-details.text10"),
      images: [
        "/assets/destinations/bijambare.webp",
        "/assets/destinations/bijambare.webp",
        "/assets/destinations/bijambare.webp",
        "/assets/destinations/bijambare.webp",
        "/assets/destinations/bijambare.webp"
      ]
    },
    "bosnia-river": {
      name: t("destinations.card11"),
      description: t("destination-details.description11"),
      text: t("destination-details.text11"),
      images: [
        "/assets/destinations/vrelobosne.webp",
        "/assets/destinations/vrelobosne.webp",
        "/assets/destinations/vrelobosne.webp",
        "/assets/destinations/vrelobosne.webp",
        "/assets/destinations/vrelobosne.webp"
      ]
    },
    "kravice": {
      name: t("destinations.card12"),
      description: t("destination-details.description12"),
      text: t("destination-details.text12"),
      images: [
        "/assets/destinations/kravice.webp",
        "/assets/destinations/kravice.webp",
        "/assets/destinations/kravice.webp",
        "/assets/destinations/kravice.webp",
        "/assets/destinations/kravice.webp"
      ]
    },
    "prokosko-lake": {
      name: t("destinations.card13"),
      description: t("destination-details.description13"),
      text: t("destination-details.text13"),
      images: [
        "/assets/destinations/prokoskolake.webp",
        "/assets/destinations/prokoskolake.webp",
        "/assets/destinations/prokoskolake.webp",
        "/assets/destinations/prokoskolake.webp",
        "/assets/destinations/prokoskolake.webp"
      ]
    },
    "bjelasnica": {
      name: t("destinations.card14"),
      description: t("destination-details.description14"),
      text: t("destination-details.text14"),
      images: [
        "/assets/destinations/bjelasnica.jpg",
        "/assets/destinations/bjelasnica.jpg",
        "/assets/destinations/bjelasnica.jpg",
        "/assets/destinations/bjelasnica.jpg",
        "/assets/destinations/bjelasnica.jpg"
      ]
    },
    "trebevic": {
      name: t("destinations.card15"),
      description: t("destination-details.description15"),
      text: t("destination-details.text15"),
      images: [
        "/assets/destinations/trebevic.jpg",
        "/assets/destinations/trebevic.jpg",
        "/assets/destinations/trebevic.jpg",
        "/assets/destinations/trebevic.jpg",
        "/assets/destinations/trebevic.jpg"
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


  return (
    <div
      id="destination-details"
      className="flex justify-center items-center flex-col min-h-screen w-screen py-40">
      <h1 className="text-5xl font-bold mb-2">{destination?.name}</h1>
      <p className="text-md mb-10 ">{destination?.description}</p>


      <div className="flex justify-between items-center flex-row w-full px-30 max-w-[2000px] gap-20">
        <div className="flex justify-center items-center bg-gray-100 w-[60%] p-10 rounded-xl">
          {destination?.text
            ?.split('\n\n')
            .map((paragraph, index) => (
              <p key={index} className="text-sm tracking-wide mb-4">
                {paragraph}
              </p>
            ))}

        </div>
        <div className="flex flex-col justify-center items-center relative">
          <div className="flex overflow-hidden justify-center items-center px-4 py-10">
            <AnimatePresence mode="popLayout">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
                className="relative flex justify-center items-center w-[500px] h-[500px] shadow-lg bg-white rounded-2xl overflow-hidden"
              >
                <img
                  src={destination?.images[currentIndex]}
                  alt="destination"
                  className="object-cover w-full h-full"
                />
              </motion.div>
            </AnimatePresence>
          </div>

          <button
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className={`p-2 rounded-full bg-green-300 absolute left-0 transform -translate-x-8 top-1/2 -translate-y-1/2 ${currentIndex === 0 ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-200"
              }`}
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={nextSlide}
            disabled={currentIndex >= destination?.images.length - 1}
            className={`p-2 rounded-full bg-green-300 absolute right-0 transform translate-x-8 top-1/2 -translate-y-1/2 ${currentIndex >= destination?.images.length - 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-200"
              }`}
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>

{/* 
      <div className="flex justify-center gap-10 items-center flex-col mt-14">
        <p className="font-medium text-2xl">Top Things To Do in {destination?.name}</p>
        <div className="flex flex-wrap justify-center items-center flex-row gap-10">
          {destination?.activities?.filter(activity => activity.trim() !== "").map((activity, index) => (
            <div key={index} className="flex justify-between items-center flex-col bg-white shadow-lg rounded-lg p-4 text-center w-[150px] h-[150px] hover:scale-105 transition-transform duration-300">
              <p className="text-sm font-medium">{activity}</p>
            </div>
          ))}
        </div>
      </div> */}


      <div className="flex justify-center items-center flex-col gap-10 mt-14">
        <p className="text-2xl font-medium">{t("destination-details.more-heading")}</p>
        <div className="flex flex-wrap justify-center items-center flex-row gap-10">
          {randomDestinations.map((key) => (
            <Link
              key={key}
              to={`/destination/${key}`}
              className="relative flex items-end justify-center w-[200px] h-[250px] rounded-lg hover:scale-105 transition-transform duration-300 text-white text-center"
              style={{
                backgroundImage: `url(${destinationsData[key].images[0]})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                boxShadow: "0 0 40px rgba(0, 0, 0, 0.2)",
              }}
            >
              <div className="absolute inset-0 bg-black/10 rounded-lg"></div>
              <p className="relative z-10 text-sm font-semibold w-full bg-black/80 py-4 rounded-lg">{destinationsData[key].name}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};


export default DestinationDetails;
