import React from "react";
import WavesEx from "./components/WavesEx";

const Footer = () => {
  const DiscoverData = [
    "Packages",
    "Services",
    "Investments",
    "Destinations",
    "FAQ",
    "Real Estate",
    "Startup",
    "Education",
    "Agriculture",
    "Court Interpreter"
  ];
  return (
    <div
      id="footer"
      className="relative w-full text-white mt-80 flex flex-col"
    >
      <WavesEx />
      <div className="footer-content relative z-10 px-20 flex flex-row justify-center items-center pb-20 gap-[10vw]">
        <div className="flex flex-col text-center">
          <h6 className="font-semibold text-xl mb-2">Get Inspired Weekly</h6>
          <p className="text-xs font-semibold mb-4">
            Join our community and be the first to know! Get exclusive <br />{" "}
            updates, travel tips, and handpicked recommendations!
          </p>

          <div className="flex flex-row items-center justify-center">
            <input
              type="text"
              placeholder="Enter email"
              className="w-[250px] bg-white rounded-l-lg px-4 py-2 text-sm placeholder-black text-black"
            />
            <button className="w-[100px] text-white bg-gray-800 py-2 rounded-r-lg text-sm text-center">
              Subscribe
            </button>
          </div>

          <div className="mt-6">
            <p className="font-semibold text-lg">Connect With Us</p>
            <div className="flex flex-row gap-4 justify-center items-center mt-2">
              <img
                src="./src/assets/instagram.png"
                className="w-6"
                alt="Instagram"
              />
              <img
                src="./src/assets/facebook.png"
                className="w-6"
                alt="Facebook"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center flex-col gap-4">
  <div className="flex justify-center items-center flex-row gap-10 py-2">
    <p className="text-xl font-semibold">Discover</p>
  </div>
  <div className="flex flex-col items-center gap-6">

    <div className="grid grid-cols-4 gap-6">
      {DiscoverData.slice(0, 4).map((item, idx) => (
        <div
          key={idx}
          className="flex justify-center items-center bg-gray-800 shadow-xl text-white text-xs py-2 rounded-xl font-semibold w-[100px]"
        >
          <p>{item}</p>
        </div>
      ))}
    </div>

    <div className="grid grid-cols-3 gap-6">
      {DiscoverData.slice(4, 7).map((item, idx) => (
        <div
          key={idx}
          className="flex justify-center items-center bg-gray-800 shadow-xl text-white text-xs py-2 rounded-xl font-semibold w-[100px]"
        >
          <p>{item}</p>
        </div>
      ))}
    </div>

    <div className="grid grid-cols-2 gap-6">
      {DiscoverData.slice(7, 9).map((item, idx) => (
        <div
          key={idx}
          className="flex justify-center items-center bg-gray-800 shadow-xl text-white text-xs py-2 rounded-xl font-semibold w-[100px]"
        >
          <p>{item}</p>
        </div>
      ))}
    </div>

    <div className="grid grid-cols-1 gap-6">
      {DiscoverData.slice(9, 10).map((item, idx) => (
        <div
          key={idx}
          className="flex justify-center items-center bg-gray-800 shadow-xl text-white text-xs py-2 rounded-xl font-semibold px-4"
        >
          <p>{item}</p>
        </div>
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
              className="w-35"
              alt="Google Play"
            />
            <img
              src="src/assets/appstore.png"
              className="w-35"
              alt="App Store"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center gap-10 text-xs w-full py-3">
        <p>© Zaytuna Bosnia</p>
        <p>Terms Of Service</p>
        <p>Travel Policy</p>
        <p>Cookie Policy</p>
      </div>
    </div>
  );
};

export default Footer;
