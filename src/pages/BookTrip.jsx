import React, { useState, useEffect } from "react";
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

const FadeInSection = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    viewport={{ once: true, amount: 0.3 }}
  >
    {children}
  </motion.div>
);

const BookTrip = () => {
  const { t } = useTranslation("global");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [numOfAdults, setNumOfAdults] = useState(1);
  const [numOfChildren, setNumOfChildren] = useState(0);
  const [travelPackage, setTravelPackage] = useState("Summer Package");
  const [tripDuration, setTripDuration] = useState("7 nights / 8 days");
  const [arrivalDate, setArrivalDate] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [specialRequests, setSpecialRequests] = useState("");
  const [hasBookedFlight, setHasBookedFlight] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState("regular");
  const [hotel, setHotel] = useState("Hotel Krone & Hotel Luna");
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [bookingStatus, setBookingStatus] = useState(null);
  const [totalPrice, setTotalPrice] = useState(0);
  const [childrenAges, setChildrenAges] = useState([]);
  const [groupSize, setGroupSize] = useState(0);
  const [packagePrice, setPackagePrice] = useState(0);
  const [isMdUp, setIsMdUp] = useState(false);

  useEffect(() => {
    const fixedPriceMap = {
      "4 nights / 5 days": {
        "Hotel Krone & Hotel Luna": 339,
        "Hotel Ibis & Hotel Lobby": 359,
        "Hotel Hills & Hotel Kostelski Buk": 439,
        "Hotel Malak Regency & Hotel Kostelski Buk": 469,
      },
      "6 nights / 7 days": {
        "Hotel Krone & Hotel Luna": 549,
        "Hotel Ibis & Hotel Lobby": 599,
        "Hotel Hills & Hotel Kostelski Buk": 639,
        "Hotel Malak Regency & Hotel Kostelski Buk": 689,
      },
      "7 nights / 8 days": {
        "Hotel Krone & Hotel Luna": 669,
        "Hotel Ibis & Hotel Lobby": 719,
        "Hotel Hills & Hotel Kostelski Buk": 759,
        "Hotel Malak Regency & Hotel Kostelski Buk": 799,
      },
      "9 nights / 10 days": {
        "Hotel Krone & Hotel Luna": 859,
        "Hotel Ibis & Hotel Lobby": 899,
        "Hotel Hills & Hotel Kostelski Buk": 949,
        "Hotel Malak Regency & Hotel Kostelski Buk": 999,
      },
    };

    const basePrice = fixedPriceMap[tripDuration]?.[hotel] || 0;

    let adultCount = numOfAdults;
    let totalChildPrice = 0;

    childrenAges.forEach((ageStr) => {
      const age = parseInt(ageStr);
      if (isNaN(age)) return;
      if (age <= 3) {
        totalChildPrice += 0;
      } else if (age <= 10) {
        totalChildPrice += basePrice * 0.5;
      } else if (age <= 13) {
        totalChildPrice += basePrice * 0.75;
      } else {
        adultCount += 1;
      }
    });

    const calculatedGroupSize = adultCount + childrenAges.filter(age => parseInt(age) < 18).length;
    setGroupSize(calculatedGroupSize);

    let groupDiscount = 0;
    if (calculatedGroupSize >= 6) groupDiscount = 20;
    else if (calculatedGroupSize >= 4) groupDiscount = 10;

    const adultTotal = adultCount * basePrice;
    let total = adultTotal + totalChildPrice;

    if (groupDiscount > 0) {
      total -= (total * groupDiscount) / 100;
    }

    setTotalPrice(total);
    setPackagePrice(basePrice);

  }, [numOfAdults, childrenAges, selectedPackage, tripDuration, hotel]);

  const handleSubmit = async (e) => {
    e.preventDefault(); // Move this here
    setIsSubmitted(true);

    const newErrors = {};

    // Validation checks
    if (!name.trim()) newErrors.name = true;
    if (!email.trim()) newErrors.email = true;
    if (!travelPackage) newErrors.travelPackage = true;
    if (!tripDuration) newErrors.tripDuration = true;
    if (!arrivalDate) newErrors.arrivalDate = true;
    if (!departureDate) newErrors.departureDate = true;
    if (!phoneNumber.trim()) newErrors.phoneNumber = true;

    setErrors(newErrors);
    console.log("Validation Errors:", newErrors);

    if (Object.keys(newErrors).length > 0) return;

    // Prevent form submission
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
      hasBookedFlight,
      selectedPackage,
      hotel,
      childrenAges,
      totalPrice
    };

    console.log("Booking Data:", bookingData); // Debug log for data being submitted

    try {
      const response = await axios.post("http://localhost:5000/confirm-request", bookingData);

      if (response.status === 200 || response.status === 201) {
        setBookingStatus("success");
        setAlertMessage("Please check your email and click the confirmation link to validate your booking");
        setShowAlert(true);

        // Reset form data
        [
          [setName, ""],
          [setEmail, ""],
          [setNumOfAdults, 1],
          [setNumOfChildren, 0],
          [setTravelPackage, "Summer Package"],
          [setTripDuration, "7 nights / 8 days"],
          [setArrivalDate, ""],
          [setDepartureDate, ""],
          [setPhoneNumber, ""],
          [setSpecialRequests, ""],
          [setHasBookedFlight, false],
          [setSelectedPackage, "regular"],
          [setHotel, "Hotel Krone & Hotel Luna"],
          [setChildrenAges, []],
        ].forEach(([fn, val]) => fn(val));
      } else {
        setBookingStatus("error");
        setAlertMessage("Something went wrong. Please try again");
      }
    } catch (error) {
      if (error.response?.status === 400) {
        setAlertMessage(error.response.data.error || "This email is already subscribed");
      } else {
        setAlertMessage("Server or network error. Please try again later.");
      }
    }

    setTimeout(() => setShowAlert(false), 3000);
    setIsLoading(false);
  };

  useEffect(() => {
    function checkWidth() {
      setIsMdUp(window.innerWidth >= 768);
    }
    checkWidth();
    window.addEventListener("resize", checkWidth);
    return () => window.removeEventListener("resize", checkWidth);
  }, []);

  return (
    <div id="book-trip" className="relative w-full flex flex-row justify-center items-center mt-25 mx-20">
      <div className="flex flex-col justify-center items-center gap-12">
        <FadeInSection>
          <div className="flex flex-col gap-1 md:gap-3 items-center justify-center">
            <p className="font-semibold text-2xl sm:text-3xl md:text-4xl xl:text-5xl">{t("booking-page.heading")}</p>
            <p className="px-40 text-xs md:text-sm lg:text-md text-center text-md">{t("booking-page.subtext")}</p>
          </div>
        </FadeInSection>

        <FadeInSection>
          <div
            className="flex flex-col xl:flex-row h-fit rounded-xl shadow-xl bg-cover p-10 justify-between px-30 py-20 gap-20 xl:gap-30 items-center bg-center"
            style={{
              boxShadow: "0 0 50px rgba(0, 0, 0, 0.1)",
              backgroundImage: isMdUp
                ? "url(assets/other/wavebooking.svg)"
                :  "url(assets/other/bookingsmallscreen.svg)"
            }}
          >

            {/* Left Section */}
            <div className="flex flex-col gap-8 justify-center items-center pt-10 xl:pt-0">
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
                childrenAges={childrenAges}
                setChildrenAges={setChildrenAges}
                errors={errors}
                setErrors={setErrors}
              />

              <PackageOptions
                hasBookedFlight={hasBookedFlight}
                setHasBookedFlight={setHasBookedFlight}
                selectedPackage={selectedPackage}
                setSelectedPackage={setSelectedPackage}
              />
            </div>

            {/* Right Section */}
            <div className="flex justify-center justify-center items-center flex-col gap-10 mb-20 md:mb-0">
              <SpecialRequests
                specialRequests={specialRequests}
                setSpecialRequests={setSpecialRequests}
              />
              <HotelContainer
                hotel={hotel}
                setHotel={setHotel}
                tripDuration={tripDuration}
                packagePrice={packagePrice}
              />
              <BookingSummary
                numOfAdults={numOfAdults}
                numOfChildren={numOfChildren}
                totalPrice={totalPrice}
                handleSubmit={handleSubmit}
                isLoading={isLoading}
                bookingStatus={bookingStatus}
                setBookingStatus={setBookingStatus}
                childrenAges={childrenAges || []}
                groupSize={groupSize}
                alertMessage={alertMessage}
                showAlert={showAlert}
              />
            </div>
          </div>
        </FadeInSection>
      </div>
    </div>
  );
};

export default BookTrip;
