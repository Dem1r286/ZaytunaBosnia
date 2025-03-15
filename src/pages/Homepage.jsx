import React from "react";
import { motion } from "framer-motion";
import "../styles/Home.css";
import Hero from "../components/Main/Homepage/Hero";
import AppBanner from "../components/Main/Homepage/AppBanner";
import CourtBanner from "../components/Main/Homepage/CourtBanner";
import Packages from "../components/Main/Homepage/Packages";
import Services from "../components/Main/Homepage/Services";
import Destinations from "../components/Main/Homepage/Destinations";
import ExploreInvestment from "../components/Main/Homepage/ExploreInvestment";
import Testimonials from "../components/Main/Homepage/Testimonials";


const FadeInSection = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
      className=""
    >
      {children}
    </motion.div>
  );
};

const HomePage = () => {
  return (
    <div className="flex flex-col flex-grow w-full gap-10 justify-center items-center">
      <Hero />

      <FadeInSection>
        <Services />
      </FadeInSection>

      <FadeInSection>
        <Destinations />
      </FadeInSection>

      <FadeInSection>
        <Packages />
      </FadeInSection>

      <FadeInSection>
        <CourtBanner />
      </FadeInSection>

      <FadeInSection>
        <ExploreInvestment />
      </FadeInSection>

      <FadeInSection>
        <AppBanner />
      </FadeInSection>

      <FadeInSection>
        <Testimonials />
      </FadeInSection>
    </div>
  );
};

export default HomePage;
