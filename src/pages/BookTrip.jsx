import React, { useState } from "react";
import { motion } from "framer-motion";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "/src/styles/BookTrip.css";
import { Link } from "react-router-dom";
import MoreInfoContainer from "../components/Main/Book Trip page/MoreInfoContainer";

const FadeInSection = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
    >
      {children}
    </motion.div>
  );
};

const BookTrip = () => {
  const [arrivalDate, setArrivalDate] = useState(null);
  const [departureDate, setDepartureDate] = useState(null);
  const [selectedPackage, setSelectedPackage] = useState("regular");
  const [hasBookedFlight, setHasBookedFlight] = useState(null);
  const [includeTravelGuide, setIncludeTravelGuide] = useState(null);
  const [isMoreInfoOpen, setIsMoreInfoOpen] = useState(false);
  const [hovered, setHovered] = useState(false);

  return (
    <div className="relative w-full min-h-screen flex flex-col justify-center items-center mt-8 mb-60">
      <div className="flex flex-col justify-center items-center gap-12">
        <FadeInSection>
          <div className="flex flex-col gap-3 items-center justify-center">
            <p className="font-semibold text-5xl">Booking Form</p>
            <p className="text-md">
              Secure your trip in just a few steps. Pick your package, select
              your dates, and get ready for an amazing adventure!
            </p>
          </div>
        </FadeInSection>

        <FadeInSection>
          <div
            className="flex flex-row w-[1400px] h-[950px] rounded-xl shadow-xl bg-cover p-10 justify-between px-25 py-10 gap-40 items-center"
            style={{
              backgroundImage: "url('/src/assets/booktriptopwave.svg')",
            }}
          >
            {/* Left Section */}
            <div className="flex flex-col gap-10 justify-center items-center mt-10">
              {/* Full Name & Email */}

              <div className="flex flex-row gap-10">
                <div>
                  <label className="block font-semibold text-[13px] text-gray-800 ml-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. John Doe"
                    className="block w-72 rounded-md py-1.5 px-2 ring-1 ring-gray-300 bg-gray-100 text-gray-800 placeholder:text-sm"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-[13px] text-gray-800 ml-2">
                    Email
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. johndoe@email.com"
                    className="block w-72 rounded-md py-1.5 px-2 ring-1 ring-gray-300 bg-gray-100 text-gray-800 placeholder:text-sm"
                  />
                </div>
              </div>

              {/* Number of Adults & Children */}

              <div className="flex flex-row gap-10">
                <div>
                  <label className="block font-semibold text-[13px] text-gray-800 ml-2">
                    Number of Adults
                  </label>
                  <select className="block w-72 rounded-md py-1.5 px-2 ring-1 ring-gray-300 bg-gray-100 text-gray-800">
                    {[...Array(10)].map((_, i) => (
                      <option key={i + 1} value={i + 1}>
                        {i + 1}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block font-semibold text-[13px] text-gray-800 ml-2">
                    Number of Children
                  </label>
                  <select className="block w-72 rounded-md py-1.5 px-2 ring-1 ring-gray-300 bg-gray-100 text-gray-800">
                    {[...Array(11)].map((_, i) => (
                      <option key={i} value={i}>
                        {i}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Travel Package & Duration */}

              <div className="flex flex-row gap-10">
                <div>
                  <label className="block font-semibold text-[13px] text-gray-800 ml-2">
                    Select Travel Package
                  </label>
                  <select className="block w-72 rounded-md py-1.5 px-2 ring-1 ring-gray-300 bg-gray-100 text-gray-800 text-[15px]">
                    <option value="" disabled selected>
                      Select a package
                    </option>
                    <option value="standard">Summer Package</option>
                    <option value="premium">Winter Package</option>
                    <option value="luxury">Honeymoon Package</option>
                  </select>
                </div>

                <div>
                  <label className="block font-semibold text-[13px] text-gray-800 ml-2">
                    Select Trip Duration
                  </label>
                  <select className="block w-72 rounded-md py-1.5 px-2 ring-1 ring-gray-300 bg-gray-100 text-gray-800 text-[15px]">
                    <option value="" disabled selected>
                      Choose duration
                    </option>
                    <option value="5">5 Nights / 6 Days</option>
                    <option value="7">7 Nights / 8 Days</option>
                    <option value="10">10 Nights / 11 Days</option>
                  </select>
                </div>
              </div>

              {/* Arrival and Departure */}
              <div className="flex flex-col justify-center items-center gap-3">
                <div className="flex gap-10">
                  <div className="flex flex-col">
                    <label className="font-semibold text-[13px] text-gray-800 ml-2">
                      Arrival Date
                    </label>
                    <DatePicker
                      selected={arrivalDate}
                      onChange={(date) => setArrivalDate(date)}
                      selectsStart
                      startDate={arrivalDate}
                      endDate={departureDate}
                      minDate={new Date()}
                      className="border border-gray-300 p-2 rounded-md bg-gray-100 text-gray-800 h-[35px]"
                    />
                  </div>

                  <div className="flex flex-col">
                    <label className="font-semibold text-[13px] text-gray-800 ml-2">
                      Departure Date
                    </label>
                    <DatePicker
                      selected={departureDate}
                      onChange={(date) => setDepartureDate(date)}
                      selectsEnd
                      startDate={arrivalDate}
                      endDate={departureDate}
                      minDate={arrivalDate || new Date()}
                      className="border border-gray-300 p-2 rounded-md bg-gray-100 text-gray-800 h-[35px]"
                    />
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <div>
                  <label className="block font-semibold text-[13px] text-gray-800 ml-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="e.g. +1 234 567 890"
                    className="block w-72 rounded-md py-1.5 px-2 ring-1 ring-gray-300 bg-gray-100 text-gray-800 placeholder:text-sm"
                  />
                </div>
              </div>

              {/* Package Type & Booked Flight */}

              <div className="flex flex-row gap-10 justify-center items-center bg-gray-100 w-[110%] rounded-xl py-4">
                <div className="flex flex-col justify-center items-center">
                  <label className="block font-semibold text-sm text-gray-800 ml-2">
                    Include travel guide?
                  </label>
                  <div className="flex gap-4 mt-2">
                    <button
                      className={`px-4 rounded-md font-semibold text-sm transition ${
                        includeTravelGuide === true
                          ? "bg-green-600 text-white"
                          : "bg-gray-300 text-gray-800"
                      }`}
                      onClick={() => setIncludeTravelGuide(true)}
                    >
                      Yes
                    </button>
                    <button
                      className={`px-4 py-2 rounded-md font-semibold text-sm transition ${
                        includeTravelGuide === false
                          ? "bg-red-600 text-white"
                          : "bg-gray-300 text-gray-800"
                      }`}
                      onClick={() => setIncludeTravelGuide(false)}
                    >
                      No
                    </button>
                  </div>
                </div>

                <div className="flex flex-col justify-center items-center">
                  <label className="block font-semibold text-sm text-gray-800">
                    Do you have a flight booked?
                  </label>
                  <div className="flex gap-4 mt-2">
                    <button
                      className={`px-4 rounded-md font-semibold text-sm transition ${
                        hasBookedFlight === true
                          ? "bg-green-600 text-white"
                          : "bg-gray-300 text-gray-800"
                      }`}
                      onClick={() => setHasBookedFlight(true)}
                    >
                      Yes
                    </button>
                    <button
                      className={`px-4 py-2 rounded-md font-semibold text-sm transition ${
                        hasBookedFlight === false
                          ? "bg-red-600 text-white"
                          : "bg-gray-300 text-gray-800"
                      }`}
                      onClick={() => setHasBookedFlight(false)}
                    >
                      No
                    </button>
                  </div>
                </div>

                <div className="flex flex-col justify-center items-center">
                  <label className="block font-semibold text-sm text-gray-800 ml-2">
                    Package type
                  </label>
                  <div className="flex gap-4 mt-2">
                    <button
                      className={`px-4 py-2 rounded-md font-semibold text-sm transition ${
                        selectedPackage === "regular"
                          ? "bg-blue-600 text-white"
                          : "bg-gray-300 text-gray-800"
                      }`}
                      onClick={() => setSelectedPackage("regular")}
                    >
                      Regular
                    </button>
                    <button
                      className={`px-4 py-2 rounded-md font-semibold text-sm transition ${
                        selectedPackage === "vip"
                          ? "bg-yellow-500 text-white"
                          : "bg-gray-300 text-gray-800"
                      }`}
                      onClick={() => setSelectedPackage("vip")}
                    >
                      VIP
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-center items-center w-full">
                <label className="block font-semibold text-sm text-gray-800 ml-2">
                  Special Requests (e.g. wheelchair access, dietary needs)
                </label>
                <textarea
                  rows="3"
                  placeholder="Enter any special requests..."
                  className="block w-[90%] rounded-xl h-[50px] py-1.5 px-2 ring-1 ring-gray-300 bg-gray-100 text-gray-800 placeholder:text-sm mt-2 resize-none"
                ></textarea>
              </div>
            </div>

            {/* Right Section */}

            <div className="flex justify-between h-full pt-30 pb-2 items-center flex-col gap-10">
              {/* Contact Custom Trip */}
              <div className="flex justify-center items-center flex-col gap-4">
                <p className="text-center text-[15px] font-semibold">
                  Looking for a custom trip? Contact us, and we'll tailor the
                  perfect journey just for you.
                </p>

                <Link
                  to="/contact#contact"
                  className="bg-orange-600 w-fit h-fit py-2 px-4 text-white font-semibold rounded-xl text-sm hover:scale-104 transition-transform duration-300"
                >
                  Contact Us
                </Link>
              </div>

              <div className="flex flex-col justify-center bg-gray-100 p-6 rounded-xl shadow-md w-full gap-4">
                <div className="flex justify-center items-center flex-row gap-6">
                  <h2 className="text-lg font-semibold">Choose Hotel</h2>
                  {/* Check on Map Button */}
                  <a
                    href="https://maps.google.com?q=Grand+Palace+Hotel+Berlin"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold bg-blue-600 text-white px-3 py-2 text-sm rounded-xl hover:bg-blue-700"
                  >
                    View on Map
                  </a>
                </div>

                {/* Hotel Dropdown */}
                <select className="w-full p-2 border rounded-md bg-white">
                  <option value="hotel1">Hotel Hollywood - ★★★★☆</option>
                  <option value="hotel2">Hotel Ibis - ★★★★☆</option>
                  <option value="hotel3">Hotel Hills - ★★★★★</option>
                  <option value="hotel3">Hotel Malak Regency - ★★★★★</option>
                </select>

                <div className="flex justify-center items-center flex-col">
                  <p className="bg-gray-600 px-3 py-2 rounded-xl font-semibold text-white text-sm">
                    459€ / Person
                  </p>
                </div>
              </div>

              <div className="flex justify-center items-center flex-col">
                {/* Booking Summary */}
                <div className="flex justify-between items-center w-full flex-col bg-gray-100 rounded-xl pt-3 pb-4 mb-10 shadow-md">
                  <p className="font-semibold text-lg mb-4">Booking Summary</p>

                  <div className="flex justify-between items-center gap-20 w-full px-6 text-sm">
                    <div className="flex flex-col items-start gap-1">
                      <p>359€ x 3 Person</p>
                      <p>Custom Hotel / person</p>
                      <p>Travel guide</p>
                      <p className="font-semibold">Total</p>
                    </div>

                    <div className="flex flex-col items-end gap-1">
                      <p>1077€</p>
                      <p>+ 70€</p>
                      <p>50€</p>
                      <p className="font-semibold">1100€</p>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center items-center">
                  <div className="flex flex-row justify-center items-center gap-6 ml-25">
                    <button
                      className="w-[180px] h-[40px] rounded-[12px] border-none bg-[#22c55e] flex items-center justify-center cursor-pointer transition-all duration-500 overflow-hidden shadow-md relative active:scale-95"
                      onMouseEnter={() => setHovered(true)}
                      onMouseLeave={() => setHovered(false)}
                    >
                      <span
                        className={`absolute left-[-50px] w-[30px] h-[30px] bg-transparent rounded-full flex items-center justify-center overflow-hidden z-10 transition-all duration-500 ${
                          hovered ? "translate-x-[58px] rounded-[40px]" : ""
                        }`}
                      >
                        <svg
                          viewBox="0 0 24 24"
                          width="18px"
                          height="18px"
                          fill="white"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M20.285 5.295a1 1 0 0 0-1.41-.01L9 14.84 5.125 11.23a1 1 0 1 0-1.25 1.56l4.5 4a1 1 0 0 0 1.36-.08l10-10.33a1 1 0 0 0 .01-1.42Z" />
                        </svg>
                      </span>
                      <p
                        className={`h-full w-fit flex items-center justify-center text-white font-semibold text-sm z-0 transition-all duration-500 ${
                          hovered ? "translate-x-[10px]" : ""
                        }`}
                      >
                        Confirm Booking
                      </p>
                    </button>

                    <button className="text-xs bg-blue-600 text-white font-semibold px-2 py-1 rounded-xl hover:scale-104 transition-transform duration-300"
                      onClick = {() => setIsMoreInfoOpen(true)} 
                    >
                      More Info
                    </button>

                        {isMoreInfoOpen && <MoreInfoContainer onClose={() => setIsMoreInfoOpen(false)} />}
  

                  </div>
                </div>

                <p className="text-sm text-gray-600 text-center mt-2">
                  You will receive a confirmation email shortly with your
                  booking details.
                </p>
              </div>
            </div>
          </div>
        </FadeInSection>
      </div>
    </div>
  );
};

export default BookTrip;
