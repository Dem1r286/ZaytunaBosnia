import React from "react";

const AppBanner = () => {
  return (
    <div id="app-banner"
      className="flex items-center justify-center bg-gradient-to-r from-[#20b970] to-[#1a9b61] h-[25rem] rounded-3xl w-fit px-16 gap-20 mt-20 shadow-lg"
    >
      <img src="src/assets/phonemockup.png" className="w-[28em] mb-16" alt="Phone Mockup" />

      <div className="flex flex-col justify-center items-center text-center gap-5">
        <h2 className="text-white text-3xl font-semibold">
          Download and get <br /> your first journey with us!
        </h2>
        <p className="text-white text-xs">
          Download and get your first travel experience, you can <br />
          download on App Store and Google Play. This app <br />
          is free and very easy to use by users.
        </p>

        <div className="flex gap-6 mt-4">
          <img src="src/assets/googleplay.png" className="w-35" alt="Google Play" />
          <img src="src/assets/appstore.png" className="w-35" alt="App Store" />
        </div>
      </div>
    </div>
  );
};

export default AppBanner;
