import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Newsletter from "./components/Newsletter";
import WavesEx from "./components/WavesEx";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation("global");
  const navigate = useNavigate();
  const location = useLocation();

  const DiscoverData = [
    { name: t("footer.packages"), link: "/#packages" },
    { name: t("footer.services"), link: "/#services" },
    { name: t("footer.investments"), link: "/investments#real-estate" },
    { name: t("footer.destinations"), link: "/#destinations" },
    { name: t("footer.contact"), link: "/contact" },
    { name: t("footer.real-estate"), link: "/investments#real-estate" },
    { name: t("footer.startup"), link: "/investments#startup" },
    { name: t("footer.education"), link: "/investments#education" },
    { name: t("footer.agriculture"), link: "/investments#agriculture" },
    { name: t("footer.court-interpreter"), link: "/#court-banner" },
  ];

  const handleNavigation = (link) => {
    const [path, hash] = link.split("#");

    const offsetHashes = ["court-banner", "services", "packages", "destinations", "startup"];
    const offset = 300;

    const scrollToHash = () => {
      if (hash) {
        const element = document.getElementById(hash);
        if (element) {
          const topPos = element.getBoundingClientRect().top + window.pageYOffset;

          window.scrollTo({
            top: topPos - (offsetHashes.includes(hash) ? offset : 0),
            behavior: "smooth",
          });
        }
      }
    };

    if (location.pathname !== path) {
      navigate(path);
      setTimeout(scrollToHash, 300);
    } else {
      scrollToHash();
    }
  };



  return (
    <div id="footer" className="relative w-full text-white flex flex-col z-10 pt-10">
      <WavesEx />
      <div className="footer-content relative z-10 px-20 flex flex-col-reverse lg:flex-row justify-center items-center mt-10 md:mt-40 pb-10 md:pb-20 gap-[10vw]">
        <Newsletter />

        <div className="flex justify-center items-center flex-col gap-4">
          <div className="flex justify-center items-center flex-row gap-10 py-2">
            <p className="font-semibold text-md sm:text-lg md:text-xl mb-1 md:mb-2">{t("footer.discover-heading")}</p>
          </div>

          <div className="flex flex-col items-center gap-6 w-screen md:w-fit min-w-[300px]">
            <div className="grid grid-cols-4 gap-3 sm:gap-6">
              {DiscoverData.slice(0, 4).map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavigation(item.link)}
                  className="flex justify-center items-center bg-gray-800 shadow-xl text-white text-[9px] md:text-xs py-1.5 md:py-2 rounded-xl font-semibold w-[70px] sm:w-[80px] md:w-[100px]  cursor-pointer hover:scale-105 transition-transform duration-300"
                >
                  {item.name}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-3 sm:gap-6">
              {DiscoverData.slice(4, 7).map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavigation(item.link)}
                  className="flex justify-center items-center bg-gray-800 shadow-xl text-white text-[9px] md:text-xs py-1.5 md:py-2 rounded-xl font-semibold w-[70px] sm:w-[80px] md:w-[100px]  cursor-pointer hover:scale-105 transition-transform duration-300"
                >
                  {item.name}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-3 sm:gap-6">
              {DiscoverData.slice(7, 9).map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavigation(item.link)}
                  className="flex justify-center items-center bg-gray-800 shadow-xl text-white text-[9px] md:text-xs py-1.5 md:py-2 rounded-xl font-semibold w-[70px] sm:w-[80px] md:w-[100px] cursor-pointer hover:scale-105 transition-transform duration-300"
                >
                  {item.name}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 gap-3 sm:gap-6">
              {DiscoverData.slice(9, 10).map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavigation(item.link)}
                  className="flex justify-center items-center bg-gray-800 shadow-xl text-white text-[9px] md:text-xs py-1.5 md:py-2 rounded-xl font-semibold  px-4 cursor-pointer hover:scale-105 transition-transform duration-300"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="hidden 2xl:flex flex flex-col justify-center items-center mt-10">
          <p
            className="text-3xl font-black tracking-wider mb-5"
            style={{ fontFamily: "'Italiana', serif" }}
          >
            {t("header-links.header-logo")}
          </p>
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

      <div className="flex justify-center items-center gap-5 md:gap-10 text-[8px] md:text-xs w-full py-3">
        <p className="cursor-pointer">© {t("footer.footer-name")}</p>
        <p className="cursor-pointer">{t("footer.terms-of-service")}</p>
        <p className="cursor-pointer">{t("footer.privacy-policy")}</p>
        <p className="cursor-pointer">{t("footer.cookie-policy")}</p>
      </div>
    </div>
  );
};

export default Footer;
