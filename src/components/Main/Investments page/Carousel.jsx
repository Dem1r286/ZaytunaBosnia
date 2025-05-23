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
    <div className="w-full max-w-[1400px] mx-auto flex flex-col items-center">
      {/* Carousel Section */}
      <div className="flex justify-center items-center w-full">
        <InvestmentSection
          title={investmentData[currentIndex].title}
          description={investmentData[currentIndex].description}
          imageSrc={investmentData[currentIndex].imageSrc}
        />
      </div>

      {/* Buttons Below */}
      <div className="mt-6 flex gap-14">
        <button
          className="bg-[#22c55e] text-white p-3 rounded-full hover:bg-[#16a34a] transition"
          onClick={prevSlide}
        >
          ❮
        </button>
        <button
          className="bg-[#22c55e] text-white p-3 rounded-full hover:bg-[#16a34a] transition"
          onClick={nextSlide}
        >
          ❯
        </button>
      </div>
    </div>
  );
};

export default Carousel;
