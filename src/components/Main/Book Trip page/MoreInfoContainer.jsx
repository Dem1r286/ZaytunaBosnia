import React from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const MoreInfoContainer = ({ onClose }) => {
  const { t } = useTranslation("global");

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.8, y: 30 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="relative bg-white rounded-lg shadow-lg w-full h-full overflow-y-auto pb-20"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-gray-800 hover:text-gray-600"
          onClick={onClose}
        >
          <X size={30} />
        </button>

        {/* Content */}
        <div className="px-6 pt-20 flex flex-col items-center gap-2">
          {/* Heading */}
          <p className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 text-center">
            {t("booking-more-info.heading")}
          </p>

          {/* Subheading */}
          <p className="text-sm text-gray-800 text-center">
            {t("booking-more-info.subheading")}
          </p>

          {/* Sections */}
          <div className="w-full max-w-5xl text-left text-gray-800 space-y-6 mt-10">
            <Section
              title={t("booking-more-info.heading1")}
              items={[`${t("booking-more-info.text1")} ${t("booking-more-info.text2")}`]}
            />
            <Section
              title={t("booking-more-info.heading2")}
              items={[
                t("booking-more-info.text3"),
                t("booking-more-info.text4"),
                t("booking-more-info.text5"),
                t("booking-more-info.text6"),
                t("booking-more-info.text7"),
              ]}
            />
            <Section
              title={t("booking-more-info.heading3")}
              items={[
                t("booking-more-info.text8"),
                t("booking-more-info.text9"),
                t("booking-more-info.text10"),
                t("booking-more-info.text11"),
                t("booking-more-info.text12"),
              ]}
            />
            <Section
              title={t("booking-more-info.heading4")}
              items={[
                t("booking-more-info.text13"),
                t("booking-more-info.text14"),
                t("booking-more-info.text15"),
                t("booking-more-info.text16"),
              ]}
            />
            <Section
              title={t("booking-more-info.heading5")}
              items={[t("booking-more-info.text17"), t("booking-more-info.text18")]}
            />
            <Section
              title={t("booking-more-info.heading6")}
              items={[t("booking-more-info.text19")]}
            />
            <Section
              title={t("booking-more-info.heading7")}
              items={[t("booking-more-info.text20")]}
            />
            <Section
              title={t("booking-more-info.heading8")}
              items={[t("booking-more-info.text21"), t("booking-more-info.text22")]}
            />
          </div>

          {/* Contact Info */}
          <p className="text-sm md:text-md max-w-4xl text-gray-800 text-center font-semibold mt-10">
            {t("booking-more-info.contact")}
          </p>

          <Link
            to="/contact#contact"
            className="bg-orange-600 mt-2 py-2 px-5 text-white font-semibold rounded-xl text-sm hover:scale-105 transition-transform duration-300"
          >
            {t("common.contact-button")}
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

// Reusable Section Component
const Section = ({ title, items }) => (
  <div>
    <p className="font-semibold text-md md:text-lg mb-1">{title}</p>
    <ul className="list-disc pl-5 text-[13px] md:text-sm text-gray-600 space-y-1">
      {items.map((text, i) => (
        <li key={i}>{text}</li>
      ))}
    </ul>
  </div>
);

export default MoreInfoContainer;
