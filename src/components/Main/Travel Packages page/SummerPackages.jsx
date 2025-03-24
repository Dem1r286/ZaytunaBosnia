import React from "react";
import { ArrowDown } from "lucide-react"; 
import PackageCards from "../Homepage/Packages/components/PackageCard";
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

const SummerPackages = () => {
  return (
    <div id="summer-packages" className="flex justify-center w-full">
      <div className="w-full flex flex-col gap-16">

        <div className="w-full flex flex-row justify-between items-center ml-10">
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-4">
              <span className="bg-orange-500 rounded-2xl h-[5px] w-[50px]"></span>
              <p className="text-[#22c55e] font-semibold">Our best seller</p>
            </div>
            <p className="font-semibold text-3xl mt-1">Summer Packages</p>
          </div>
            <FadeInSection>
          <div className="flex justify-center items-center mt-2 mr-60">
            <p className="text-lg font-semibold bg-[#22c55e] shadow-md text-white px-6 py-2 rounded-xl flex items-center gap-5">
              Your Next Adventure Awaits – Choose a Package to Begin!
              <ArrowDown size={26} /> 
            </p>
          </div>
            </FadeInSection>
        </div>

        <div className="flex justify-center">
          <PackageCards />
        </div>

      </div>
    </div>
  );
};

export default SummerPackages;

