import React, { useState } from "react";
import axios from "axios";
import AlertBox from "../../../layout/Footer/components/AlertBox";
import Loader from "../../../../../Loader";
import { Check, XCircle } from "lucide-react";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const ContactForm = () => {
  const { t, i18n } = useTranslation("global");
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [contactStatus, setContactStatus] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (contactStatus) {
      const timer = setTimeout(() => {
        setContactStatus(null);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [contactStatus, setContactStatus]);



  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setShowAlert(false);
    setContactStatus("");

    try {
      const response = await axios.post("http://localhost:5000/send-email", formData);

      if (response.status === 201) {
        setAlertMessage("Message sent successfully!");
        setShowAlert(true);
        setFormData({ name: "", email: "", message: "" });
        setContactStatus("success");
      } else {
        throw new Error("Unexpected response");
      }
    } catch (error) {
      setAlertMessage("Something went wrong. Please try again.");
      setShowAlert(true);
      setContactStatus("error");
      console.error("Send email error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="flex justify-center items-center flex-col gap-8">
        <div>
          <label htmlFor="name" className="block font-semibold text-[13px] ml-2 text-gray-800">
          {t("contact-page.input1")}
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder={t("contact-page.placeholder1")}
            className="block w-72 rounded-md py-1.5 px-2 ring-1 ring-gray-300 bg-gray-100 text-gray-800 placeholder:text-sm"
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="block font-semibold text-[13px] ml-2 text-gray-800">
          {t("contact-page.input2")}
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder={t("contact-page.placeholder2")}
            className="block w-72 rounded-md py-1.5 px-2 ring-1 ring-gray-300 bg-gray-100 text-gray-800 placeholder:text-sm"
            required
          />
        </div>

        <div>
          <label htmlFor="message" className="block font-semibold text-[13px] ml-2 text-gray-800">
          {t("contact-page.input3")}
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            placeholder={t("contact-page.placeholder3")}
            className="block w-72 rounded-md py-1.5 px-2 ring-1 ring-gray-300 bg-gray-100 text-gray-800 resize-none placeholder:text-sm"
            required
          ></textarea>
        </div>

        <div className="flex justify-center items-center flex-row w-full ml-10">
          <div className="flex justify-center items-center flex-col">
          <button
            type="submit"
            className="px-3 py-2 mt-4 text-sm font-semibold text-white bg-green-500 shadow-md rounded-md flex items-center gap-1 transition-transform duration-300 hover:scale-105 active:scale-95"
          >
            <span> {t("contact-page.button1")}</span>
            <svg
              className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clipRule="evenodd"
                d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
                fillRule="evenodd"
              />
            </svg>
          </button>
          {showAlert && <AlertBox message={alertMessage} onClose={() => setShowAlert(false)} />}
          </div>
          <div className="w-6 h-6 flex-shrink-0 ml-6 mt-4">
            {isLoading ? (
              <Loader />
            ) : contactStatus === "success" ? (
              <Check className="text-green-500 w-5 h-5" />
            ) : contactStatus === "error" ? (
              <XCircle className="text-red-500 w-5 h-5" />
            ) : null}
          </div>
        </div>
      </form>
    </>
  );
};

export default ContactForm;
