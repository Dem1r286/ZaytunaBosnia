import React from "react";
import { Link } from "react-router-dom";

const packageData = [
  { name: "Winter Package", id: "winter", image: "assets/packages/winterpackage.webp" },
  { name: "Summer Package", id: "summer", image: "assets/packages/summerpackage.webp" },
  { name: "Honeymoon Package", id: "honeymoon", image: "assets/packages/honeymoonpackage.webp" }
];

const PackageCardHomepage = () => {
  return (
    <div className="flex flex-row justify-center items-center gap-[4vw] flex-wrap">
      {packageData.map((item, idx) => (
        <Link key={idx} to={`/travel-packages?package=${item.id}`}>
          <div className="flex justify-center items-center bg-gray-800 h-[300px] w-[500px] rounded-xl shadow-lg hover:scale-105 transition-transform duration-300">
            <img src={item.image} alt={item.name} className="w-[500px] h-[300px] rounded-xl" />
          </div>
        </Link>
      ))}
    </div>
  );
};

export default PackageCardHomepage;
