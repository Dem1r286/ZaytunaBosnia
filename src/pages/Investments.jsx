import React from "react";
import HowOurAgencyWork from "../components/Main/Investments page/HowOurAgencyWork";
import HeroRealEstate from "../components/Main/Investments page/HeroRealEstate";
import InvestmentSection from "../components/Main/Investments page/InvestmentSection";
import HeroAgriculture from "../components/Main/Investments page/HeroAgriculture";
import Carousel from "../components/Main/Investments page/Carousel";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import { useRef } from "react";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";


const FadeInSection = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    viewport={{ once: true, amount: 0.3 }}
  >
    {children}
  </motion.div>
);

const Investments = () => {
  const { t, i18n } = useTranslation("global");
  const investmentEducationData = [
    {
      title: t("investments.investmentEducation.waqf"),
      description: t("investments.investmentEducation.waqf-description"),
      buttonText: t("investments.investmentEducation.learn-more"),
      imageSrc: "/assets/investmentImages/education.webp",
    },
    {
      title: t("investments.investmentEducation.scholarship-grants"),
      description: t("investments.investmentEducation.scholarship-grants-description"),
      buttonText: t("investments.investmentEducation.learn-more"),
      imageSrc: "assets/investmentImages/scholarship.webp",
    },
    {
      title: t("investmentEducation.teacher-training"),
      description: t("investments.investmentEducation.teacher-training-description"),
      buttonText: t("investments.investmentEducation.learn-more"),
      imageSrc: "assets/investmentImages/teachertraining.webp",
    },
    {
      title: t("investments.investmentEducation.infrastructure-technology"),
      description: t("investments.investmentEducation.infrastructure-technology-description"),
      buttonText: t("investments.investmentEducation.learn-more"),
      imageSrc: "assets/investmentImages/infrastructure.webp",
    },
  ];


  const investmentStartupData = [
    {
      title: t("investments.investmentStartup.startup-investment"),
      description: t("investments.investmentStartup.startup-investment-description"),
      imageSrc: "assets/investmentImages/startup.webp",
    },
    {
      title: t("investments.investmentStartup.starting-new-businesses"),
      description: t("investments.investmentStartup.starting-new-businesses-description"),
      imageSrc: "assets/investmentImages/business.webp",
    },
    {
      title: t("investments.investmentStartup.legal-regulatory-guidance"),
      description: t("investments.investmentStartup.legal-regulatory-guidance-description"),
      imageSrc: "assets/investmentImages/legalguidance.webp",
    },
    {
      title: t("investments.investmentStartup.market-research-analysis"),
      description: t("investments.investmentStartup.market-research-analysis-description"),
      imageSrc: "assets/investmentImages/marketresearch.webp",
    },
  ];


  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const packageType = searchParams.get("container");

  const RealEstateRef = useRef(null);
  const EducationRef = useRef(null);
  const StartupRef = useRef(null);
  const AgricultureRef = useRef(null);

  useEffect(() => {
    if (packageType) {
      let targetRef;
      if (packageType === "real-estate") targetRef = RealEstateRef;
      if (packageType === "education") targetRef = EducationRef;
      if (packageType === "startup") targetRef = StartupRef;
      if (packageType === "agriculture") targetRef = AgricultureRef;

      if (targetRef?.current) {
        const targetPosition = targetRef.current.getBoundingClientRect().top + window.scrollY;

        window.scrollTo({ top: targetPosition, behavior: "smooth" });
      }
    }
  }, [packageType]);

  return (
    <div id="investments" className="flex justify-center items-center flex-col">
      <div
        id="real-estate" ref={RealEstateRef}
        className="bg-cover bg-center"
        style={{ backgroundImage: "url('assets/wavesinvestmentbackground.svg')" }}
      >
        <HeroRealEstate />

        <HowOurAgencyWork />

        <div className="flex justify-center items-center flex-col py-20 pb-80 w-screen gap-40 mt-30">
          <InvestmentSection
            title={t("investments.investmentServices.construction-services")}
            description={t("investments.investmentServices.construction-services-description")}
            imageSrc="assets/investmentImages/construction.webp"
            reverseLayout={true}
          />

          <InvestmentSection
            title={t("investments.investmentServices.interior-design")}
            description={t("investments.investmentServices.interior-design-description")}
            imageSrc="assets/investmentImages/interiordesign.webp"
          />

          <InvestmentSection
            title={t("investments.investmentServices.property-ownership")}
            description={t("investments.investmentServices.property-ownership-description")}
            imageSrc="assets/investmentImages/propertyownership.webp"
            reverseLayout={true}
          />
        </div>

      </div>

      <div id="education"
        style={{ backgroundImage: "url('/src/assets/background.svg')" }}
        className="flex justify-center items-center w-screen flex-col gap-60 bg-cover bg-center w-screen">

        <div id="education" ref={StartupRef}
          className="flex justify-center items-center gap-20 flex-col pt-120">
          <div className="flex flex-col text-center gap-3">
            <p className="font-black text-5xl text-center">
            {t("investments.heading-education")}
            </p>
            <p>
            {t("investments.education-subtext")}
            </p>
          </div>
          <Carousel investmentData={investmentEducationData} />
        </div>

        <div
          id="startup" ref={EducationRef}
          className="flex justify-center items-center gap-20 flex-col pb-120">
          <div className="flex flex-col text-center gap-3">
            <p className="font-black text-5xl text-center">
            {t("investments.heading-startup")}
            </p>
            <p>
            {t("investments.startup-subtext")}
            </p>
          </div>
          <Carousel investmentData={investmentStartupData} />
          <Link to="/contact">
            <button className="relative inline-block p-px font-semibold leading-6 text-white bg-[#22c55e] shadow-2xl cursor-pointer rounded-xl transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95">
              <span className="absolute inset-0 rounded-xl p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
              <span className="relative z-1 block px-4 py-2 rounded-xl">
                <div className="relative z-1 flex items-center space-x-3">
                  <span className="transition-all duration-500 group-hover:translate-x-1">
                  {t("common.contact-button")}
                  </span>
                  <svg
                    className="w-6 h-6 transition-transform duration-500 group-hover:translate-x-1"
                    data-slot="icon"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      clipRule="evenodd"
                      d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
                      fillRule="evenodd"
                    ></path>
                  </svg>
                </div>
              </span>
            </button>
          </Link>
        </div>

      </div>

      <div
        id="agriculture" ref={AgricultureRef}
        className="flex flex-col justify-center items-center bg-cover bg-center pb-100"
        style={{
          backgroundImage: "url('/src/assets/agriculturebackground.svg')",
        }}
      >
        <HeroAgriculture />
        <div className="flex flex-col gap-40">
          <InvestmentSection
            title={t("investments.investmentServices.food-production")}
              description={t("investments.investmentServices.food-production-description")}
            imageSrc="assets/investmentImages/foodproduction.webp"
            reverseLayout={true}
          />

          <InvestmentSection
            title={t("investments.investmentServices.greenhouses")}
             description={t("investments.investmentServices.greenhouses-description")}
            imageSrc="assets/investmentImages/greenhouse.webp"
            reverseLayout={false}
          />
        </div>
      </div>
    </div>
  );
};

export default Investments;
