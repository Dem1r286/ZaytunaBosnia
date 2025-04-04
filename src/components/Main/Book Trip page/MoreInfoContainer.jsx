import React from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import { Link } from "react-router-dom";

const MoreInfoContainer = ({ onClose }) => {
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
        className="relative flex flex-col justify-center items-center bg-white shadow-lg rounded-lg py-20 px-20 gap-20 w-[80%] max-w-[1500px]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-8 right-8 text-white hover:text-gray-300 transition"
          onClick={onClose}
        >
          <X size={35} className="text-gray-800" />
        </button>

        <div className="flex justify-center items-center flex-col gap-2">
          <p className="font-semibold text-2xl text-gray-900">
            Booking Summary & Cost Breakdown
          </p>

          <p className="text-md text-gray-800 w-[80%] text-center">
            This section provides a detailed overview of your booking, including
            the total cost and what’s included in your trip. Here’s what you can
            expect:
          </p>

          <div className="w-[80%] text-left text-gray-800">
            <p className="font-semibold text-lg mt-4">Taxes & Fees:</p>
            <p className="text-sm text-gray-600">
              All applicable taxes and service fees are included in the total
              cost, so there are no hidden charges.
            </p>
          </div>

          <div className="w-[80%] text-left text-gray-800">
            <p className="font-semibold text-lg mt-4">Additional Costs:</p>
            <p className="text-sm text-gray-600">
              Optional excursions or add-ons like travel insurance or special
              services can be added to your booking at an extra cost. Please
              review the options and select those that suit your needs.
            </p>
          </div>

          <div className="w-[80%] text-left text-gray-800 mt-4">
            <p className="font-semibold text-lg">
              Included in the Regular Price:
            </p>
            <ul className="list-disc pl-5 text-sm text-gray-600">
              <li>Driver (English or Arabic is not guaranteed, depending on availability)</li>
              <li>Travel guide speaking English or Arabic (based on availability)</li>
              <li>Accommodation as per itinerary</li>
              <li>All entrance fees for included attractions</li>
              <li>Travel guide (with your approval) — No additional charge</li>
            </ul>
          </div>

          <div className="w-[80%] text-left text-gray-800 mt-4">
            <p className="font-semibold text-lg">Exclusions:</p>
            <ul className="list-disc pl-5 text-sm text-gray-600">
              <li>
                Visa fees, travel insurance, airport taxes, and international
                airfares
              </li>
              <li>
                Excursions, activities, and sightseeing trips not specifically
                mentioned as included
              </li>
              <li>
                Additional charges for higher-category rooms, certain hotel
                facilities, extra meals, drinks, laundry, and personal items
              </li>
            </ul>
          </div>

          <div className="w-[80%] text-left text-gray-800 mt-4">
            <p className="font-semibold text-lg">VIP Package Included:</p>
            <ul className="list-disc pl-5 text-sm text-gray-600">
              <li>Luxury accommodation as per the VIP package</li>
              <li>Higher-end transportation (premium car)</li>
              <li>Travel guide fluent in Arabic and English</li>
              <li>Driver fluent in Arabic or English</li>
              <li>
                Exclusive VIP treatment for the entire duration of the trip
              </li>
            </ul>
          </div>

          <p className="text-md text-gray-800 w-[80%] text-center mt-6 font-semibold">
          Please review the included and excluded items carefully, and feel free to ask any questions before confirming your booking. 
          If you have any special requests or need further details, don’t hesitate to contact us. We’re here to help!
          </p>

          <Link
            to="/contact#contact"
            className="bg-orange-600 w-fit h-fit mt-4 py-2 px-4 text-white font-semibold rounded-xl text-sm hover:scale-104 transition-transform duration-300"
          >
            Contact Us
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default MoreInfoContainer;
