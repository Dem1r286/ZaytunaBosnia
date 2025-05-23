import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";


const PackageCardHomepage = () => {
  const { t } = useTranslation("global");

  const packageData = [
    { name: "Honeymoon Package", id: "honeymoon", image: t("package-images.winter") },
    { name: "Summer Package", id: "summer", image: t("package-images.summer") },
    { name: "Winter Package", id: "winter", image: t("package-images.honeymoon") },
  ];
  return (
    <div className="flex flex-col md:flex-row flex-wrap justify-center items-center gap-8 px-4 md:px-10 lg:px-20">
      {packageData.map((item, idx) => (
        <Link
          key={idx}
          to={`/travel-packages?package=${item.id}`}
          className="w-[280px] sm:w-[350px] md:w-[400px] lg:w-[480px]"
        >
          <img
            src={item.image}
            alt={item.name}
            className="rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 object-cover"
          />
        </Link>

      ))}
    </div>
  );
};

export default PackageCardHomepage;
