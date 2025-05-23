import React from "react";
import { Mail, MessageCircle } from "lucide-react";
import ContactForm from "./components/ContactForm";
import { useTranslation } from "react-i18next";

const ContactContainer = () => {
  const { t } = useTranslation("global");
  return (
    <div className="flex justify-center items-center flex-col gap-20 mt-20 pt-10 md:pt-16 px-10">
      <div className="flex justify-center items-center flex-col text-center gap-3">
        <h5 className="text-3xl md:text-5xl font-semibold">{t("contact-page.heading")}</h5>
        <p className="w-[100%] md:w-[60%] text-center font-medium text-[10px] sm:text-xs md:text-sm text-gray-700">
          {t("contact-page.subtext")}
        </p>
      </div>

      <div
        className="flex justify-between px-6 sm:px-16 md:px-20 items-center min-h-[500px] h-fit flex-col xl:flex-row py-10 md:py-20 rounded-2xl bg-cover gap-20 xl:gap-70
             bg-[url('assets/other/wave-haikei.svg')] xl:bg-[url('assets/other/contactbackground.svg')] shadow-[0_0_40px_rgba(0,0,0,0.2)]">
        <div className="flex justify-center items-center flex-row">
          <div className="flex flex-col gap-8 justify-center items-center">
            <div className="flex flex-col justify-center items-center">
              <p className="font-semibold text-[20px] md:text-[28px]">{t("contact-page.heading2")}</p>
              <p className="text-xs md:text-sm text-center">
                {t("contact-page.subtext2")}
              </p>
            </div>
            <div>
              <ContactForm />
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center mb-10">
          <img
            src="/assets/other/contactformillustration.webp"
            alt="Contact"
            className="w-[250px] md:w-[300px] lg:w-[300px] xl:w-[350px] mr-4 object-contain mb-4"
          />
          <div className="flex justify-center items-center gap-10 flex-col">
            <p className="font-semibold text-[10px] sm:text-xs md:text-sm text-center text-white">
              {t("contact-page.subtext3")}<br /> {t("contact-page.subtext4")}
            </p>
            <div className="flex flex-row justify-center items-center gap-4">
              <a
                href={`https://wa.me/+38762360677`}
                className="w-30 sm:w-40 px-4 py-2 text-xs md:text-sm font-semibold bg-white shadow-md rounded-md flex items-center justify-center gap-2 transition-transform duration-300 hover:scale-105 active:scale-95"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-3 h-3 sm:w-5 sm:h-5 text-green-500" />
                <span>{t("contact-page.button2")}</span>
              </a>
              <a
                href={`mailto:zaytunabosnia@gmail.com`}
                className="w-30 sm:w-40 px-4 py-2 text-xs md:text-sm font-semibold bg-white shadow-md rounded-md flex items-center justify-center gap-2 transition-transform duration-300 hover:scale-105 active:scale-95"
              >
                <Mail className="w-3 h-3 sm:w-5 sm:h-5 text-red-500" />
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
