import React from "react";
import { useTranslation } from "react-i18next";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  const { t, i18n } = useTranslation("global");
  return (
    <div
      className="flex flex-col items-center justify-center w-screen h-[60vh] mt-14 bg-cover bg-center relative"
      style={{ backgroundImage: "url('assets/investmentImages/realestatebackground.webp')" }}
    >
      <h1 className="text-white text-5xl font-semibold mb-4">{t("hero.heading")}</h1>
      <h2 className="text-white text-2xl font-medium">{t("hero.heading2")}</h2>

      <div className="absolute bottom-6 animate-bounce">
        <ChevronDown className="text-white w-14 h-14" />
      </div>
    </div>
  );
};

export default Hero;
