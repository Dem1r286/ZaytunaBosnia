import React from "react";
import { motion } from "framer-motion";
import ContactContainer from "../components/Main/Contact page/ContactContainer";

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

const Contact = () => {
  return (
    <div className="flex flex-col justify-center items-center mb-60">
      <FadeInSection>
        <ContactContainer />
      </FadeInSection>
    </div>
  );
};

export default Contact;
