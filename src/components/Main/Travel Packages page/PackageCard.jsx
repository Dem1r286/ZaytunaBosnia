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
        <div className={`flex flex-col justify-center items-center shadow-xl w-[420px] h-[600px] rounded-4xl text-white px-10 pb-5 hover:scale-105 transition-transform duration-300`} style={{ backgroundColor: bgColor }}>
            <h3 className="text-5xl mt-4" style={{ fontFamily: "'Bangers', cursive" }}>
                {nights} NIGHTS / {days} DAYS
            </h3>
            <div className="flex flex-row justify-center items-center">
                <div className="flex justify-start flex-col items-center mt-6 mr-10">
                    <p className="text-5xl font-black">
                        {price} {currency}
                    </p>
                    <p className="text-lg text-black font-bold bg-white px-4 rounded-xl mt-2">{packageType}</p>
                </div>
                <div className="flex justify-center font-semibold items-center flex-col text-white mt-8 shadow-2xl bg-black/20 px-3 py-2 rounded-xl">
                    <p>Vip available</p>
                    <p className="font-bold">{vipPrice}{currency}</p>
                </div>
            </div>

            <div className="my-10 gap-10">
                <ul className="flex flex-col gap-3">
                    {activities.map((activity, index) => (
                        <li key={index} className="flex w-full justify-start items-center text-sm text-white gap-3">
                            <Check className="text-black min-w-6 min-h-6 rounded-full bg-white p-1" strokeWidth={2} />
                            {activity}
                        </li>
                    ))}
                </ul>
                <div className={`${days > 5 ? "absolute" : "hidden"} flex gap-1 text-xs ml-10 pt-2`}>
                <p className="font-semibold">{t("common.read-more-button")}</p>
                <ArrowDown size={15} />
                </div>
            </div>

            <button className="mt-4 text-white py-2 rounded-2xl font-bold px-10" style={{ backgroundColor: buttonColor }}>
                {buttonText}
            </button>
        </div>
    );
};

export default PackageCard;