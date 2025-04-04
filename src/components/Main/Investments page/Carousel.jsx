import React, { useState } from "react";
import InvestmentSection from "./InvestmentSection";

const Carousel = ({ investmentData }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? investmentData.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === investmentData.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-full max-w-[1400px] mx-auto flex justify-center items-center">
      
      <div className="flex justify-center items-center">
        <InvestmentSection
          title={investmentData[currentIndex].title}
          description={investmentData[currentIndex].description}
          imageSrc={investmentData[currentIndex].imageSrc}
          reverseLayout={currentIndex % 2 === 0}
        />
      </div>

      <button
        className="absolute -left-[50px] top-1/2 transform -translate-y-1/2 bg-[#22c55e] text-white p-3 rounded-full hover:bg-[#16a34a] transition"
        onClick={prevSlide}
      >
        ❮
      </button>
      <button
        className="absolute -right-[50px] top-1/2 transform -translate-y-1/2 bg-[#22c55e] text-white p-3 rounded-full hover:bg-[#16a34a] transition"
        onClick={nextSlide}
      >
        ❯
      </button>
    </div>
  );
};

export default Carousel;
