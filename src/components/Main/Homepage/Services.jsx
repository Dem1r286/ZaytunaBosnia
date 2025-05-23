import React from "react";
import { useTranslation } from "react-i18next";

const ServiceCard = ({ url, heading, description }) => (
    <div id="services" className="flex flex-col flex-wrap w-[270px] h-[330px] md:w-[350px] md:h-[400px] bg-gradient-to-b from-[#155dfc] to-[#0b3ea8] 
    rounded-3xl shadow-lg justify-center items-center px-4 py-6 hover:scale-104 transition-transform duration-300">
        <img src={url} className="w-[180px] h-[130px] sm:w-[200px] sm-h-[150px] md:w-[250px] md:h-[200px] object-cover" alt={heading} />
        <p className="text-white font-semibold text-md md:text-lg mt-4">{heading}</p>
        <p className="text-white text-xs md:text-sm text-center px-2 mt-2">{description}</p>
    </div>
);

const Services = () => {
    const { t, i18n } = useTranslation("global");
    const services = [
        { heading: t("services.card1-heading"), url: "assets/servicesIllustration/transportation.webp", description: t("services.card1-description") },
        { heading: t("services.card2-heading"), url: "assets/servicesIllustration/hotel.webp", description: t("services.card2-description") },
        { heading: t("services.card3-heading"), url: "assets/servicesIllustration/transfer.webp", description: t("services.card3-description") },
        { heading: t("services.card4-heading"), url: "assets/servicesIllustration/travelguide.webp", description: t("services.card4-description") },
        { heading: t("services.card5-heading"), url: "assets/servicesIllustration/traveladvice.webp", description: t("services.card5-description") }
    ];
    

    return (
        <div className="flex flex-col items-center gap-20 w-screen">
            <div className="w-screen flex justify-center items-center flex-col px-10">
            <h4 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-2 whitespace-nowrap">{t("services.heading")}</h4>
            <p className="w-full md:w-[60%] text-center font-medium text-[10px] sm:text-xs md:text-[14px] text-gray-700">{t("services.text")}</p>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-10 px-20">
                {services.map((service) => (
                    <ServiceCard key={service.heading} {...service} />
                ))}
            </div>
        </div>
    );
};

export default Services;
