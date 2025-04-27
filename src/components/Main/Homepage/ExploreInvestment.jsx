import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const ExploreInvestment = () => {
   const { t, i18n } = useTranslation("global");
   const Data = [
    { 
      text: t("explore-investment.list.0.text"),
      urlVideo: "assets/investmentVideos/realestate.webm", 
      id: "real-estate",
      heading: t("explore-investment.list.0.heading"),
    },
    { 
      text: t("explore-investment.list.1.text"),
      urlVideo: "assets/investmentVideos/agriculture.webm", 
      id: "agriculture",
      heading: t("explore-investment.list.1.heading"),
    },
    { 
      text: t("explore-investment.list.2.text"),
      urlVideo: "assets/investmentVideos/investment.webm", 
      id: "education",
      heading: t("explore-investment.list.2.heading"),
    },
    { 
      text: t("explore-investment.list.3.text"),
      urlVideo: "assets/investmentVideos/education.webm", 
      id: "startup",
      heading: t("explore-investment.list.3.heading"),
    }
  ];
  

  return (
    <div id="explore-investment" className="flex flex-col justify-center items-center px-30 py-20 rounded-2xl">

      <div className="flex justify-center items-center gap-10 mb-36">
        <img src="assets/icons/logo.webp" alt="Bosnia Real Estate Logo" className="w-20" />
        <h2 className="font-semibold text-3xl">
        {t("explore-investment.heading")}
        </h2>
      </div>

      <div className="flex flex-col justify-center items-center gap-[20vh]">
        {Data.map((item, idx) => (
          item.text && ( 
            <div key={idx} className={`flex ${idx % 2 === 0 ? "flex-row" : "flex-row-reverse"} justify-center gap-[10vw] items-center h-[400px]`}>

              <div className="max-w-2xl text-center">
                <div className="flex flex-col justify-center items-center gap-10">
                <p className="font-semibold text-2xl text-gray-800">{item.heading}</p>
                <p className="text-md">{item.text}</p>
                </div>
                {item.id && (
                  <Link key={idx} to={`/investments?container=${item.id}`} className="mt-10 inline-block bg-[#22c55e] text-white px-4 py-2 rounded-md hover:bg-[#1a9b61] transition">
                    Learn More
                  </Link>
                )}
              </div>
              
              {item.urlVideo && (
                <div>
                  <video autoPlay muted loop playsInline src={item.urlVideo} alt="Investment Opportunity" className="rounded-2xl max-w-[700px] max-h-[500px]">Your browser does not support the video tag.</video>
                </div>
              )}
            </div>
          )
        ))}
      </div>
    </div>
  );
};

export default ExploreInvestment;


