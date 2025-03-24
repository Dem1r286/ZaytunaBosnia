import React, { useState } from "react";
import axios from "axios";
import { Mail, MessageCircle } from "lucide-react";
import ContactForm from "./components/ContactForm";

const ContactContainer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  return (
    <div className="flex justify-center items-center flex-col gap-20 h-[80vh] mt-20">
      <div className="flex justify-center items-center flex-col text-center gap-3">
        <h5 className="text-5xl font-semibold">Let's Connect</h5>
        <p className="w-[60%] text-center font-medium text-sm text-gray-700">
          Have questions or need more information? We're here to help! Whether
          you're looking for travel recommendations, personalized trip planning,
          or exciting investment opportunities, our team is ready to assist you.
          Let’s connect and turn your dreams into reality!
        </p>
      </div>

      <div
        className="flex justify-between px-20 items-center shadow-xl flex-row rounded-2xl h-[50vh] bg-cover gap-70"
        style={{ backgroundImage: "url('/src/assets/wave.svg')" }}
      >
        <div className="flex justify-center items-center flex-row">
          <div className="flex flex-col gap-8 justify-center items-center">
            <div className="flex flex-col justify-center items-center">
              <p className="font-semibold text-[28px]">Get In Touch</p>
              <p className="text-sm">
                Fill out the form below, and we'll get back to you as soon as
                possible!
              </p>
            </div>
            <div>
              <ContactForm />
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center gap-14 mb-10">
          <img
            src="./src/assets/contactform1.png"
            alt="Contact"
            className="w-[400px] mr-4"
          />
          <div className="flex justify-center items-center gap-4 flex-col">
            <p className="font-semibold text-sm text-center text-white">
              You can also reach us directly via email <br /> or WhatsApp for a
              faster response.
            </p>
            <div className="flex flex-row justify-center items-center gap-4">
              <button className="w-40 px-4 py-2 text-sm font-semibold bg-white shadow-md rounded-md flex items-center justify-center gap-2 transition-transform duration-300 hover:scale-105 active:scale-95">
                <MessageCircle className="w-5 h-5 text-green-500" />
                <span>WhatsApp</span>
              </button>
              <button className="w-40 px-4 py-2 text-sm font-semibold bg-white shadow-md rounded-md flex items-center justify-center gap-2 transition-transform duration-300 hover:scale-105 active:scale-95">
                <Mail className="w-5 h-5 text-red-500" />
                <span>Gmail</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactContainer;
