import React from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";


const MoreInfoContainer = ({ onClose }) => {
  const { t } = useTranslation("global");
  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-50 w-screen h-screen bg-black/50"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.8, y: 30 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="relative flex flex-col justify-center items-center bg-white shadow-lg rounded-lg px-20 py-14 gap-20 w-screen h-screen"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-8 right-8 text-white hover:text-gray-300 transition"
          onClick={onClose}
        >
          <X size={35} className="text-gray-800" />
        </button>

        <div className="flex justify-center items-center flex-col gap-2 max-w-[1700px]">
          <p className="font-semibold text-2xl text-gray-900">
            {t("booking-more-info.heading")}
          </p>

          <p className="text-md text-gray-800 w-[80%] text-center">
            {t("booking-more-info.subheading")}
          </p>

          <div className="w-[80%] text-left text-gray-800">
            <p className="font-semibold text-lg mt-4">{t("booking-more-info.heading1")}</p>
            <p className="text-sm text-gray-600">
              {t("booking-more-info.text1")}
              {" "}<span className="font-semibold">{t("booking-more-info.text2")}</span>
            </p>
          </div>

          <div className="w-[80%] text-left text-gray-800 mt-4">
            <p className="font-semibold text-lg">
              {t("booking-more-info.heading2")}
            </p>
            <ul className="list-disc pl-5 text-sm text-gray-600">
              <li>{t("booking-more-info.text3")}</li>
              <li>{t("booking-more-info.text4")}</li>
              <li>{t("booking-more-info.text5")}</li>
              <li>{t("booking-more-info.text6")}</li>
              <li>{t("booking-more-info.text7")}</li>
            </ul>
          </div>

          <div className="w-[80%] text-left text-gray-800 mt-4">
            <p className="font-semibold text-lg">{t("booking-more-info.heading3")}</p>
            <ul className="list-disc pl-5 text-sm text-gray-600">
              <li>{t("booking-more-info.text8")}</li>
              <li>{t("booking-more-info.text9")}</li>
              <li>{t("booking-more-info.text10")}</li>
              <li>{t("booking-more-info.text11")}</li>
              <li>
                {t("booking-more-info.text12")}
              </li>
            </ul>
          </div>

          <div className="w-[80%] text-left text-gray-800 mt-4">
            <p className="font-semibold text-lg">{t("booking-more-info.heading4")}</p>
            <ul className="list-disc pl-5 text-sm text-gray-600">
              <li>I{t("booking-more-info.text13")}</li>
              <li>{t("booking-more-info.text14")}</li>
              <li>{t("booking-more-info.text15")}</li>
              <li>{t("booking-more-info.text16")}</li>
            </ul>
          </div>

          <div className="w-[80%] text-left text-gray-800 mt-4">
            <p className="font-semibold text-lg">{t("booking-more-info.heading5")}</p>
            <ul className="list-disc pl-5 text-sm text-gray-600">
              <li>{t("booking-more-info.text17")}</li>
              <li>{t("booking-more-info.text18")}</li>
            </ul>
          </div>

          <div className="w-[80%] text-left text-gray-800 mt-4">
            <p className="font-semibold text-lg">{t("booking-more-info.heading6")}</p>
            <p className="text-sm text-gray-600">
                 <li>{t("booking-more-info.text19")}</li>
            </p>
          </div>


          <div className="w-[80%] text-left text-gray-800 mt-4">
            <p className="font-semibold text-lg">{t("booking-more-info.heading7")}</p>
            <p className="text-sm text-gray-600">
                 <li>{t("booking-more-info.text20")}</li>
            </p>
          </div>

          <div className="w-[80%] text-left text-gray-800 mt-4">
            <p className="font-semibold text-lg">{t("booking-more-info.heading8")}</p>
            <p className="text-sm text-gray-600">
                <li>{t("booking-more-info.text21")}</li>
            </p>
              <p className="text-sm text-gray-600 mt-2">
                <li>{t("booking-more-info.text22")}</li>
            </p>
          </div>


          <p className="text-md text-gray-800 w-[80%] text-center mt-6 font-semibold">
            {t("booking-more-info.contact")}
          </p>

          <Link
            to="/contact#contact"
            className="bg-orange-600 w-fit h-fit mt-4 py-2 px-4 text-white font-semibold rounded-xl text-sm hover:scale-104 transition-transform duration-300"
          >
            {t("common.contact-button")}
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default MoreInfoContainer;