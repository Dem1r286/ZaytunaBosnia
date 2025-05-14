import React from "react";
import { motion } from "framer-motion";
import "../styles/Home.css";
import Hero from "../components/Main/Homepage/Hero";
import AppBanner from "../components/Main/Homepage/AppBanner";
import CourtBanner from "../components/Main/Homepage/CourtBanner";
import Packages from "../components/Main/Homepage/Packages/Packages";
import Services from "../components/Main/Homepage/Services";
import Destinations from "../components/Main/Homepage/Destinations";
import ExploreInvestment from "../components/Main/Homepage/ExploreInvestment";
import Testimonials from "../components/Main/Homepage/Testimonials/Testimonials";
import AboutUs from "../components/Main/Homepage/AboutUs";


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
    <div id="homepage" className="flex flex-col flex-grow w-full justify-center items-center gap-20 mb-60">

      <Hero />

      <FadeInSection>
        <AboutUs />
      </FadeInSection>

      <FadeInSection>
        <Packages />
      </FadeInSection>

      <FadeInSection>
        <Services />
      </FadeInSection>

      <FadeInSection>
        <Destinations />
      </FadeInSection>

      <FadeInSection>
        <CourtBanner />
      </FadeInSection>

      <FadeInSection>
        <ExploreInvestment />
      </FadeInSection>

      <FadeInSection>
        <Testimonials />
      </FadeInSection>

      <FadeInSection>
        <AppBanner />
      </FadeInSection>
    </div>
  );
};

export default HomePage;
