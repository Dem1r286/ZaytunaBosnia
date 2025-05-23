import React from "react";

const InvestmentSection = ({ title, description, imageSrc }) => {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center text-white bg-[#151515] rounded-xl max-w-[1400px] mx-10 shadow-xl overflow-hidden h-fit lg:h-[500px]">
      
      {/* Text Section */}
      <div className="flex flex-col w-full lg:w-1/2 gap-6 text-center p-8 lg:p-12 justify-center h-fit lg:h-full">
        <p className="text-lg md:text-xl lg:text-2xl font-bold">{title}</p>
        <p className="text-xs md:text-sm">{description}</p>
      </div>

      {/* Image Section */}
      <div className="w-full lg:w-1/2 h-[200px] sm:h-[250px] md:h-[300px] lg:h-full flex justify-center items-center">
        <img
          src={imageSrc}
          className="w-full h-full object-cover rounded-b-xl lg:rounded-none lg:rounded-r-xl"
          alt={title}
        />
      </div>
    </div>
  );
};

export default InvestmentSection;
