import React from "react";
import { Phone, MessageCircle, FileText, Handshake, ClipboardCheck } from "lucide-react";
import { useTranslation } from "react-i18next";

const StepsCard = ({ heading, description, Icon }) => {
  return (
    <div className="flex justify-center items-center flex-col px-10 bg-[#151515] rounded-2xl gap-4 shadow-lg w-72 h-70 hover:scale-104 transition-transform duration-300">
      <div className="p-4 bg-[#22c55e] rounded-full">
        <Icon className="h-8 w-8 text-white" />
      </div>
      <h3 className="text-xl font-semibold text-white text-center">{heading}</h3>
      <p className="text-center text-white">{description}</p>
    </div>
  );
};

const HowOurAgencyWork = () => {
  const { t, i18n } = useTranslation("global");
  const steps = [
    { 
      heading: t("investments.steps.contact-us"), 
      description: t("steps.contact-description"), 
      Icon: Phone 
    },
    { 
      heading: t("investments.steps.consultation"), 
      description: t("steps.consultation-description"), 
      Icon: MessageCircle 
    },
    { 
      heading: t("investments.steps.agreement"), 
      description: t("investments.steps.agreement-description"), 
      Icon: FileText 
    },
    { 
      heading: t("investments.steps.negotiating"), 
      description: t("investments.steps.negotiating-description"), 
      Icon: Handshake 
    },
    { 
      heading: t("investments.steps.service-delivery"), 
      description: t("investments.steps.service-delivery-description"), 
      Icon: ClipboardCheck 
    }
  ];
  
  
  return (
    <div className="flex flex-col items-center pt-14 pb-24 px-5 bg-[#22c55e] w-screen gap-12 mt-20">
      <h2 className="text-3xl font-bold text-white mb-10">
      {t("investments.steps.heading")}
      </h2>
      <div className="flex justify-center items-center flex-row gap-[3vw] flex-wrap">
        {steps.map((service) => (
            <StepsCard key={service.heading} {...service} />
        ))}
      </div>
    </div>  
  );
};

export default HowOurAgencyWork;
