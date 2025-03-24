import React from "react";
import WavesEx from "./components/WavesEx";
import { Link } from "react-scroll";
import Newsletter from "./components/Newsletter";

const Footer = () => {
  const DiscoverData = [
    { name: "Packages", link: "packages" },
    { name: "Services", link: "services" },
    { name: "Investments", link: "investments" },
    { name: "Destinations", link: "destinations" },
    { name: "FAQ", link: "faq" },
    { name: "Real Estate", link: "real-estate" },
    { name: "Startup", link: "startup" },
    { name: "Education", link: "education" },
    { name: "Agriculture", link: "agriculture" },
    { name: "Court Interpreter", link: "court-banner" }
  ];
  return (
    <div id="footer" className="relative w-full text-white mt-80 flex flex-col">
      <WavesEx />
      <div className="footer-content relative z-10 px-20 flex flex-row justify-center items-center pb-20 gap-[10vw]">
        <Newsletter />

        <div className="flex justify-center items-center flex-col gap-4">
          <div className="flex justify-center items-center flex-row gap-10 py-2">
            <p className="text-xl font-semibold">Discover</p>
          </div>
          <div className="flex flex-col items-center gap-6">
            <div className="grid grid-cols-4 gap-6">
              {DiscoverData.slice(0, 4).map((item) => (
                <Link
                  smooth={true}
                  offset={-300}
                  duration={300}
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
                  smooth={true}
                  offset={-300}
                  duration={300}
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
                  smooth={true}
                  offset={-300}
                  duration={300}
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
                  smooth={true}
                  offset={-300}
                  duration={300}
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
          <img src="./src/assets/logowhite.png" className="w-16 mb-4" alt="" />
          <h6 className="font-semibold text-xl mb-2">
            Don't have the app yet?
          </h6>
          <p className="text-xs font-semibold mb-4 text-center">
            Download now and explore the best destinations, hidden
            <br></br> gems, and easily book and schedule your travel!
          </p>
          <div className="flex gap-6 mt-4">
            <img
              src="src/assets/googleplay.png"
              className="w-35 cursor-pointer"
              alt="Google Play"
            />
            <img
              src="src/assets/appstore.png"
              className="w-35 cursor-pointer"
              alt="App Store"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center gap-10 text-xs w-full py-3">
        <p className="cursor-pointer">© Zaytuna Bosnia</p>
        <p className="cursor-pointer">Terms Of Service</p>
        <p className="cursor-pointer">Travel Policy</p>
        <p className="cursor-pointer">Cookie Policy</p>
      </div>
    </div>
  );
};

export default Footer;
