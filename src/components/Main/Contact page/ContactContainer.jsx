import React, { useState } from "react";
import { Mail, MessageCircle } from "lucide-react";
import ContactForm from "./components/ContactForm";
import { useTranslation } from "react-i18next";

const ContactContainer = () => {
   const { t, i18n } = useTranslation("global");
  return (
    <div className="flex justify-center items-center flex-col gap-20 h-[80vh] mt-20">
      <div className="flex justify-center items-center flex-col text-center gap-3">
        <h5 className="text-5xl font-semibold">{t("contact-page.heading")}</h5>
        <p className="w-[60%] text-center font-medium text-sm text-gray-700">
        {t("contact-page.subtext")}
        </p>
      </div>

      <div
        className="flex justify-between px-20 items-center shadow-xl flex-row rounded-2xl h-[50vh] bg-cover gap-70"
        style={{ backgroundImage: "url('/src/assets/wave.svg')" }}
      >
        <div className="flex justify-center items-center flex-row">
          <div className="flex flex-col gap-8 justify-center items-center">
            <div className="flex flex-col justify-center items-center">
              <p className="font-semibold text-[28px]">{t("contact-page.heading2")}</p>
              <p className="text-sm">
              {t("contact-page.subtext2")}
              </p>
            </div>
            <div>
              <ContactForm />
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center gap-14 mb-10">
          <img
            src="assets/other/contactformillustration.webp"
            alt="Contact"
            className="w-[400px] mr-4"
          />
          <div className="flex justify-center items-center gap-4 flex-col">
            <p className="font-semibold text-sm text-center text-white">
            {t("contact-page.subtext3")}<br /> {t("contact-page.subtext4")}
            </p>
            <div className="flex flex-row justify-center items-center gap-4">
            <a
                href={`https://wa.me/+38762360677`}
                className="w-40 px-4 py-2 text-sm font-semibold bg-white shadow-md rounded-md flex items-center justify-center gap-2 transition-transform duration-300 hover:scale-105 active:scale-95"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-5 h-5 text-green-500" />
                <span>{t("contact-page.button2")}</span>
              </a>
              <a
                href={`mailto:zaytunabosnia@gmail.com`}
                className="w-40 px-4 py-2 text-sm font-semibold bg-white shadow-md rounded-md flex items-center justify-center gap-2 transition-transform duration-300 hover:scale-105 active:scale-95"
              >
                <Mail className="w-5 h-5 text-red-500" />
                <span>{t("contact-page.button3")}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactContainer;
