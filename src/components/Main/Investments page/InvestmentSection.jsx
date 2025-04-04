import React from "react";

const InvestmentSection = ({
  title,
  description,
  imageSrc,
  reverseLayout = false,
}) => {
  return (
    <div
      className={`flex ${
        reverseLayout ? "flex-row-reverse" : "flex-row"
      } justify-between items-center text-white bg-[#151515] rounded-xl h-[500px] max-w-[1400px] w-full shadow-xl`}
    >
      {/* Text Section */}
      <div className="flex flex-col w-1/2 gap-6 text-center pb-20 px-10">
        <p className="font-bold text-[25px]">{title}</p>
        <p className="text-sm">{description}</p>
      </div>

      {/* Image Section */}
      <div className="w-1/2 flex justify-center h-full">
        <img
          src={imageSrc}
          className={`w-full h-auto object-cover ${
            reverseLayout ? "rounded-l-xl" : "rounded-r-xl"
          }`}
          alt={title}
        />
      </div>
    </div>
  );
};

export default InvestmentSection;