import React from "react";
import { useTranslation } from "react-i18next";

const ServiceCard = ({ url, heading, description }) => (
    <div id="services" className="flex flex-col w-[350px] h-[400px] bg-gradient-to-b from-[#155dfc] to-[#0b3ea8] 
    rounded-3xl shadow-lg justify-center items-center px-4 py-6 hover:scale-104 transition-transform duration-300">
        <img src={url} className="w-[250px] h-[200px] object-cover" alt={heading} />
        <p className="text-white font-semibold text-lg mt-4">{heading}</p>
        <p className="text-white text-sm text-center px-2 mt-2">{description}</p>
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
        <div className="flex flex-col items-center gap-20">
            <div className="flex justify-center items-center flex-col gap-4">
            <h4 className="text-4xl font-semibold">{t("services.heading")}</h4>
            <p className="text-gray-700 font-medium text-sm text-center">{t("services.text")}</p>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-10">
                {services.map((service) => (
                    <ServiceCard key={service.heading} {...service} />
                ))}
            </div>
        </div>
    );
};

export default Services;
