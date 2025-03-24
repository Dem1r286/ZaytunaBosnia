import React from "react";
import { motion } from "framer-motion";
import ContactForm from "../../../Contact page/components/ContactForm";
import { X } from "lucide-react";

const LeaveReview = ({ onClose }) => {
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
        className="relative flex flex-col justify-center items-center bg-white shadow-lg rounded-lg py-20 px-40 gap-20"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-8 right-8 text-white hover:text-gray-300 transition"
          onClick={onClose}
        >
          <X size={35} className="text-gray-800" />
        </button>

        <div className="flex justify-center items-center flex-col gap-2">
          <p className="font-semibold text-2xl text-gray-900">Leave a Review</p>
          <p className="text-sm text-gray-800">
            We appreciate your thoughts! Our team will check your review and share it shortly.
          </p>
        </div>
        
        <ContactForm 
          className="" 
          messagePlaceholder="Share your experience with us..." 
          messageLabel="Your Review"
          messageButton="Send Review"
        />
      </motion.div>
    </div>
  );
};

export default LeaveReview;
