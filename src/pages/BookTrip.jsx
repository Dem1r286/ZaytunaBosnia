import React, { useState } from "react";
import { motion } from "framer-motion";
import "/src/styles/BookTrip.css";
import AlertBox from "../components/layout/Footer/components/AlertBox";
import axios from "axios";
import HotelContainer from "../components/Main/Book Trip page/HotelContainer";
import ContactCustomTrip from "../components/Main/Book Trip page/ContactTailor";
import BookingSummary from "../components/Main/Book Trip page/BookingSummary";
import SpecialRequests from "../components/Main/Book Trip page/SpecialRequests";
import BookingInputs from "../components/Main/Book Trip page/BookingInputs";
import PackageOptions from "../components/Main/Book Trip page/PackageOptions";
import { useTranslation } from "react-i18next";


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
  const { t, i18n } = useTranslation("global");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [numOfAdults, setNumOfAdults] = useState(1);
  const [numOfChildren, setNumOfChildren] = useState(0);
  const [travelPackage, setTravelPackage] = useState("");
  const [tripDuration, setTripDuration] = useState("");
  const [arrivalDate, setArrivalDate] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [specialRequests, setSpecialRequests] = useState("");
  const [includeTravelGuide, setIncludeTravelGuide] = useState(false);
  const [hasBookedFlight, setHasBookedFlight] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState("regular");
  const [hotel, setHotel] = useState("Hotel Hollywood - 4 star");
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [bookingStatus, setBookingStatus] = useState(null);



  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setBookingStatus(null);

    const bookingData = {
      name,
      email,
      numOfAdults,
      numOfChildren,
      travelPackage,
      tripDuration,
      arrivalDate,
      departureDate,
      phoneNumber,
      specialRequests,
      includeTravelGuide,
      hasBookedFlight,
      selectedPackage,
      hotel,
    };

    try {
      const response = await axios.post("http://localhost:5000/booking", bookingData);


      if (response.status === 201) {
        setBookingStatus("success");
        setAlertMessage("Thank you for booking");
        [
          setName, setEmail, setNumOfAdults, setNumOfChildren,
          setTravelPackage, setTripDuration, setArrivalDate, setDepartureDate,
          setPhoneNumber, setSpecialRequests, setIncludeTravelGuide,
          setHasBookedFlight, setSelectedPackage, setHotel
        ].forEach(fn => fn(""));

      } else {
        setBookingStatus("error");
        setAlertMessage("Something went wrong. Please try again.");
      }
    } catch (error) {
      if (error.response) {
        if (error.response.status === 400) {
          setAlertMessage(error.response.data.error || "This email is already subscribed.");
        } else {
          setAlertMessage("Server error. Please try again later.");
        }
      } else {
        setAlertMessage("Network error. Please check your connection.");
      }
    }

    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 3000);
    setIsLoading(false);
  };


  return (
    <div id="book-trip" className="relative w-full min-h-screen flex flex-col justify-center items-center mt-8 mb-60">
      <div className="flex flex-col justify-center items-center gap-12">
        <FadeInSection>
          <div className="flex flex-col gap-3 items-center justify-center">
            <p className="font-semibold text-5xl">{t("booking-page.heading")}</p>
            <p className="text-md">
            {t("booking-page.subtext")}
            </p>
          </div>
        </FadeInSection>

        <FadeInSection>
          <div
            className="flex flex-row w-[1400px] h-[950px] rounded-xl shadow-xl bg-cover p-10 justify-between px-25 py-10 gap-40 items-center"
            style={{
              backgroundImage: "url(assets/other/booktripbackground.webp)",
            }}
          >
            {/* Left Section */}
            <div className="flex flex-col gap-10 justify-center items-center mt-10">
              {/* Full Name & Email */}

              <BookingInputs
                name={name}
                setName={setName}
                email={email}
                setEmail={setEmail}
                numOfAdults={numOfAdults}
                setNumOfAdults={setNumOfAdults}
                numOfChildren={numOfChildren}
                setNumOfChildren={setNumOfChildren}
                travelPackage={travelPackage}
                setTravelPackage={setTravelPackage}
                tripDuration={tripDuration}
                setTripDuration={setTripDuration}
                arrivalDate={arrivalDate}
                setArrivalDate={setArrivalDate}
                departureDate={departureDate}
                setDepartureDate={setDepartureDate}
                phoneNumber={phoneNumber}
                setPhoneNumber={setPhoneNumber}
              />

              <PackageOptions
                includeTravelGuide={includeTravelGuide}
                setIncludeTravelGuide={setIncludeTravelGuide}
                hasBookedFlight={hasBookedFlight}
                setHasBookedFlight={setHasBookedFlight}
                selectedPackage={selectedPackage}
                setSelectedPackage={setSelectedPackage}
              />

              <SpecialRequests specialRequests={specialRequests} setSpecialRequests={setSpecialRequests} />
            </div>

            {/* Right Section */}

            <div className="flex justify-between h-full pt-30 pb-2 items-center flex-col gap-10">

              <ContactCustomTrip />

              <HotelContainer hotel={hotel} setHotel={setHotel} />

              <BookingSummary
                numOfAdults={numOfAdults}
                numOfChildren={numOfChildren}
                handleSubmit={handleSubmit}
                isLoading={isLoading}
                bookingStatus={bookingStatus}
                setBookingStatus={setBookingStatus}
              />

            </div>



          </div>
        </FadeInSection>

      </div>

      {showAlert && <AlertBox message={alertMessage} />}
    </div>
  );
};

export default BookTrip;
