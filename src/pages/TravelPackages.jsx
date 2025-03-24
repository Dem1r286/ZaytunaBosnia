import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import SummerPackages from "../components/Main/Travel Packages page/SummerPackages";
import WinterPackages from "../components/Main/Travel Packages page/WinterPackages";
import HoneymoonPackages from "../components/Main/Travel Packages page/HoneymoonPackages";
import { motion } from "framer-motion";

const FadeInSection = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    viewport={{ once: true, amount: 0.3 }}
  >
    {children}
  </motion.div>
);

const TravelPackages = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const packageType = searchParams.get("package");

  const winterRef = useRef(null);
  const summerRef = useRef(null);
  const honeymoonRef = useRef(null);

  useEffect(() => {
    if (packageType) {
      let targetRef;
      if (packageType === "winter") targetRef = winterRef;
      if (packageType === "summer") targetRef = summerRef;
      if (packageType === "honeymoon") targetRef = honeymoonRef;
  
      if (targetRef?.current) {
        const offset = window.innerWidth < 768 ? 300 : 500; 
        const targetPosition = targetRef.current.getBoundingClientRect().top + window.scrollY - offset;
  
        window.scrollTo({ top: targetPosition, behavior: "smooth" });
      }
    }
  }, [packageType]);
  

  return (
    <div id="travel-packages" className="flex justify-center items-center flex-col w-full mt-45 gap-30">
      <FadeInSection>
        <div className="flex justify-center items-center flex-col w-full">
          <p className="font-semibold text-4xl m-0">Dream, Discover, Depart – Travel Packages for Every Adventure!</p>
          <p className="w-[60%] text-center font-medium text-md text-gray-700 mt-2">
            Choose the perfect experience – whether it's a Summer retreat, a Winter wonderland, or a Honeymoon escape, your journey begins here!
          </p>
        </div>
      </FadeInSection>

      <div className="flex justify-center items-center flex-col gap-50 mb-40">
        <FadeInSection>
          <div ref={summerRef}>
            <SummerPackages />
          </div>
        </FadeInSection>

        <FadeInSection>
          <div ref={honeymoonRef}>
            <HoneymoonPackages />
          </div>
        </FadeInSection>

        <FadeInSection>
          <div ref={winterRef}>
            <WinterPackages />
          </div>
        </FadeInSection>
      </div>
    </div>
  );
};

export default TravelPackages;
