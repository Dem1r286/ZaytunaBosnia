import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import InvestmentSection from "./InvestmentSection";

const FadeInSection = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
    >
      {children}
    </motion.div>
  );
};

const HeroAgriculture = () => {
  return (
    <div
      className="flex w-screen h-screen flex-col items-center bg-cover bg-center bg-fixed py-40 mb-120"
      style={{ backgroundImage: "url('/src/assets/agriculture.jpg')" }}
    >
      <FadeInSection>
        <div className="flex justify-center items-center flex-col rounded-xl w-full px-10 gap-30">
          <p className="font-black text-5xl text-white text-center">
            Growing the Future: Invest in Bosnia’s Agriculture
          </p>
          <div className="flex justify-center items-center flex-row bg-black/50 rounded-2xl py-15 px-20 gap-15">
            <div className="flex justify-center items-center flex-col gap-10">
              <p className="text-lg text-gray-200 text-center max-w-xl">
                Bosnia offers fertile lands and the ideal climate for
                agricultural investments. Whether you're interested in organic
                farming, livestock, or large-scale food production, we provide
                expert guidance and resources.
              </p>
              <Link to="/contact">
                <button className="relative inline-block p-px font-semibold leading-6 text-white bg-[#22c55e] shadow-2xl cursor-pointer rounded-xl transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95">
                  <span className="absolute inset-0 rounded-xl p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
                  <span className="relative z-1 block px-4 py-2 rounded-xl">
                    <div className="relative z-1 flex items-center space-x-3">
                      <span className="transition-all duration-500 group-hover:translate-x-1">
                        Contact Us
                      </span>
                      <svg
                        className="w-6 h-6 transition-transform duration-500 group-hover:translate-x-1"
                        data-slot="icon"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          clipRule="evenodd"
                          d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
                          fillRule="evenodd"
                        ></path>
                      </svg>
                    </div>
                  </span>
                </button>
              </Link>
            </div>
            <div className="flex justify-center items-center w-1/2">
              <img
                src="src/assets/agriculture.svg"
                className="max-w-[450px] "
                alt="Logo"
              />
            </div>
          </div>
        </div>
      </FadeInSection>
      <div className="mt-70">
        <FadeInSection>
          <InvestmentSection
            title="Livestock Farming"
            description=" Livestock farming in Bosnia and Herzegovina offers strong growth and sustainability prospects, 
          supported by diverse topography and deep-rooted traditions. The sector spans cattle, poultry, and swine production, 
          meeting local and regional demand for meat and dairy. Rising interest in organic and eco-conscious methods 
          aligns with global trends for ethical, sustainable farming. Investors can benefit by adopting modern techniques, 
          improving animal welfare, and meeting international standards. Additionally, export potential to European markets
           enhances economic opportunities. Beyond financial gains, investing in this sector boosts regional food security 
           and promotes responsible farming."
            buttonText="Contact Us"
            imageSrc="src/assets/livestock.jpg"
          />
        </FadeInSection>
      </div>
    </div>
  );
};

export default HeroAgriculture;
