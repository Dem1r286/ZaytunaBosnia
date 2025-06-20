import React from "react";
import { Check, ArrowDown } from "lucide-react";
import { useTranslation } from "react-i18next";

const PackageCard = ({
    nights,
    days,
    price,
    currency,
    packageType,
    buttonText,
    vipPrice,
    bgColor,
    buttonColor,
    activities
}) => {
    const { t, i18n } = useTranslation("global");
    return (
        <div className={`flex flex-col justify-center items-center shadow-xl w-[330px] xs:w-[330px] h-fit md:w-[420px] md:h-[600px] rounded-4xl text-white px-10 pb-5 hover:scale-105 transition-transform duration-300`} style={{ backgroundColor: bgColor }}>
            <h3 className="text-4xl md:text-5xl mt-6 md:mt-4" style={{ fontFamily: "'Bangers', cursive" }}>
                {nights} {t("travel-package-details.night")} / {days} {t("travel-package-details.day")}
            </h3>
            <div className="flex flex-row justify-center items-center gap-10">
                <div className="flex justify-start flex-col items-center mt-4 md:mt-6">
                    <p className="text-3xl md:text-4xl lg:text-5xl font-black">
                        {price} {currency}
                    </p>
                    <p className="text-sm md:text-lg text-black font-bold bg-white px-4 rounded-xl mt-2">{t("travel-packages-page.regular")}</p>
                </div>
                <div className="text-xs md:text-sm lg:text-md flex justify-center font-semibold items-center flex-col text-white mt-8 shadow-2xl bg-black/20 px-3 py-2 rounded-xl">
                    <p>{t("travel-packages-page.vip-available")}</p>
                    <p className="font-bold">{vipPrice}{currency}</p>
                </div>
            </div>

            <div className="my-6 md:my-10 gap-10">
                <ul className="flex flex-col gap-3">
                    {activities.map((activity, index) => (
                        <li key={index} className="flex w-full text-[10px] justify-start items-center text-sm text-white gap-3">
                            <Check className="text-black min-w-6 min-h-6 rounded-full bg-white p-1" strokeWidth={2} />
                            {activity}
                        </li>
                    ))}
                </ul>
                <div className={`${days > 5 ? "absolute" : "hidden"} flex gap-1 text-[8px] md:text-xs ml-10 pt-2`}>
                <p className="font-semibold">{t("common.read-more-button")}</p>
                <ArrowDown size={15} />
                </div>
            </div>

            <button className="text-xs mt-4 text-black py-2 rounded-2xl font-bold my-5 px-6 md:px-10" style={{ backgroundColor: buttonColor }}>
                {buttonText}
            </button>
        </div>
    );
};

export default PackageCard;