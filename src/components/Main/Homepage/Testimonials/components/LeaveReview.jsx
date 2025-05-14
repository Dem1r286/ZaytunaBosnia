import React from "react";
import { motion } from "framer-motion";
import { X, Check, XCircle } from "lucide-react";
import Loader from "../../../../../../Loader";
import { useState, useEffect } from "react";
import axios from "axios";
import AlertBox from "../../../../layout/Footer/components/AlertBox";
import { useTranslation } from "react-i18next";

const LeaveReview = ({ onClose }) => {
  const { t } = useTranslation("global");
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
      const response = await axios.post("http://localhost:5000/leave-review", formData);

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
    <div
      className="fixed inset-0 flex items-center justify-center z-50 w-screen h-screen bg-black/50"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.8, y: 30 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="relative flex flex-col justify-center items-center bg-white shadow-lg rounded-lg pt-20 pb-25 px-40 gap-20"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-8 right-8 text-white hover:text-gray-300 transition"
          onClick={onClose}
        >
          <X size={35} className="text-gray-800" />
        </button>

        <div className="flex justify-center items-center flex-col gap-2">
          <p className="font-semibold text-2xl text-gray-900">{t("leave-review.heading")}</p>
          <p className="text-sm text-gray-800">
            {t("leave-review.subheading")}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex justify-center items-center flex-col gap-8">
          <div>
            <label htmlFor="name" className="block font-semibold text-[13px] ml-2 text-gray-800">
              {t("leave-review.input1")}
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder={t("leave-review.placeholder1")}
              className="block w-72 rounded-md py-1.5 px-2 ring-1 ring-gray-300 bg-gray-100 text-gray-800 placeholder:text-sm"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block font-semibold text-[13px] ml-2 text-gray-800">
              {t("leave-review.input2")}
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder={t("leave-review.placeholder3")}
              className="block w-72 rounded-md py-1.5 px-2 ring-1 ring-gray-300 bg-gray-100 text-gray-800 placeholder:text-sm"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block font-semibold text-[13px] ml-2 text-gray-800">
              {t("leave-review.input3")}
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              placeholder={t("leave-review.placeholder2")}
              className="block w-72 rounded-md py-1.5 px-2 ring-1 ring-gray-300 bg-gray-100 text-gray-800 resize-none placeholder:text-sm"
              required
            ></textarea>
          </div>

          <div className="relative flex justify-center items-center flex-row w-full ml-10">
            <div className="flex justify-center items-center gap-2 flex-col">
              <AlertBox message={alertMessage} textColor="text-black" />
              <button
                type="submit"
                className="px-3 py-2 mt-4 text-sm font-semibold text-white bg-green-500 shadow-md rounded-md flex items-center gap-1 transition-transform duration-300 hover:scale-105 active:scale-95"
              >
                <span>{t("leave-review.button-review")}</span>
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
      </motion.div>
    </div>
  );
};

export default LeaveReview;
