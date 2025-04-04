import React from "react";
import { Phone, MessageCircle, FileText, Handshake, ClipboardCheck } from "lucide-react";

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
  const steps = [
    { 
      heading: "Contact Us", 
      description: "Get in touch with us to discuss your needs and expectations.", 
      Icon: Phone 
    },
    { 
      heading: "Consultation", 
      description: "We consult with you to understand your goals and provide solutions.", 
      Icon: MessageCircle 
    },
    { 
      heading: "Agreement", 
      description: "We finalize the details and get an agreement in place for your project.", 
      Icon: FileText 
    },
    { 
      heading: "Negotiating", 
      description: "We act as a middleman, negotiating and securing agreements with various service providers.", 
      Icon: Handshake 
    },
    { 
      heading: "Service Delivery", 
      description: "We deliver your requested services with excellence, on time.", 
      Icon: ClipboardCheck 
    }
  ];
  
  return (
    <div className="flex flex-col items-center pt-14 pb-24 px-5 bg-[#22c55e] w-screen gap-12 mt-20">
      <h2 className="text-3xl font-bold text-white mb-10">
        How Our Agency Works
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
