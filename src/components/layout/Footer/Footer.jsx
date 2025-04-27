import React from "react";
import { Link } from "react-router-dom";
import Newsletter from "./components/Newsletter"; 
import WavesEx from "./components/WavesEx";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t, i18n } = useTranslation("global");
  const DiscoverData = [
    { name: t("footer.packages"), link: "/homepage#packages", isExternal: false },
    { name: t("footer.services"), link: "/homepage#services", isExternal: false },
    { name: t("footer.investments"), link: "/investments", isExternal: true },
    { name: t("footer.destinations"), link: "/homepage#destinations", isExternal: false },
    { name: t("footer.faq"), link: "/", isExternal: true },
    { name: t("footer.real-estate"), link: "/investments#real-estate", isExternal: true },
    { name: t("footer.startup"), link: "/investments#startup", isExternal: true },
    { name: t("footer.education"), link: "/investments#education", isExternal: true },
    { name: t("footer.agriculture"), link: "/investments#agriculture", isExternal: true },
    { name: t("footer.court-interpreter"), link: "/homepage#court-banner", isExternal: false },
  ];
  

  return (
    <div id="footer" className="relative w-full text-white flex flex-col z-10 mt-10">
      <WavesEx />
      <div className="footer-content relative z-10 px-20 flex flex-row justify-center items-center pb-20 gap-[10vw]">
        <Newsletter />
        <div className="flex justify-center items-center flex-col gap-4">
          <div className="flex justify-center items-center flex-row gap-10 py-2">
            <p className="text-xl font-semibold">{t("footer.discover-heading")}</p>
          </div>
          <div className="flex flex-col items-center gap-6">
            <div className="grid grid-cols-4 gap-6">
              {DiscoverData.slice(0, 4).map((item) => (
                <Link
                  key={item.name}
                  to={item.link}
                  className="flex justify-center items-center bg-gray-800 shadow-xl text-white text-xs py-2 rounded-xl font-semibold w-[100px] cursor-pointer"
                >
                  <p>{item.name}</p>
                </Link>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-6">
              {DiscoverData.slice(4, 7).map((item) => (
                <Link
                  key={item.name}
                  to={item.link}
                  className="flex justify-center items-center bg-gray-800 shadow-xl text-white text-xs py-2 rounded-xl font-semibold w-[100px] cursor-pointer"
                >
                  <p>{item.name}</p>
                </Link>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-6">
              {DiscoverData.slice(7, 9).map((item) => (
                <Link
                  key={item.name}
                  to={item.link}
                  className="flex justify-center items-center bg-gray-800 shadow-xl text-white text-xs py-2 rounded-xl font-semibold w-[100px] cursor-pointer"
                >
                  <p>{item.name}</p>
                </Link>
              ))}
            </div>

            <div className="grid grid-cols-1 gap-6">
              {DiscoverData.slice(9, 10).map((item) => (
                <Link
                  key={item.name}
                  to={item.link}
                  className="flex justify-center items-center bg-gray-800 shadow-xl text-white text-xs py-2 rounded-xl font-semibold px-4 cursor-pointer"
                >
                  <p>{item.name}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center">
          <img src="assets/icons/logowhite.webp" className="w-16 mb-4" alt="" />
          <h6 className="font-semibold text-xl mb-2">{t("footer.footer-app-heading")}</h6>
          <p className="text-xs font-semibold mb-4 text-center">
          {t("footer.footer-app-subtext1")}
            <br />
            {t("footer.footer-app-subtext2")}
          </p>
          <div className="flex gap-6 mt-4">
            <img
              src="assets/icons/googleplay.webp"
              className="w-35 cursor-pointer"
              alt="Google Play"
            />
            <img
              src="assets/icons/appstore.webp"
              className="w-35 cursor-pointer"
              alt="App Store"
            />
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center gap-10 text-xs w-full py-3">
        <p className="cursor-pointer">© {t("footer.footer-name")}</p>
        <p className="cursor-pointer">{t("footer.terms-of-service")}</p>
        <p className="cursor-pointer">{t("footer.privacy-policy")}</p>
        <p className="cursor-pointer">{t("footer.cookie-policy")}</p>
      </div>
    </div>
  );
};

export default Footer;
