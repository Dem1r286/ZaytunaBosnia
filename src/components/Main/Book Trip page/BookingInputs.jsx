import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useTranslation } from "react-i18next";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect } from "react";

const BookingInputs = ({
    name,
    setName,
    email,
    setEmail,
    numOfAdults,
    setNumOfAdults,
    numOfChildren,
    setNumOfChildren,
    travelPackage,
    setTravelPackage,
    tripDuration,
    setTripDuration,
    arrivalDate,
    setArrivalDate,
    departureDate,
    setDepartureDate,
    phoneNumber,
    setPhoneNumber,
    setTotalPrice,
    childrenAges,
    setChildrenAges,
    errors,
    setErrors
}) => {
    const { t } = useTranslation("global");
    const [price, setPrice] = useState(0);
    const [carouselStartIndex, setCarouselStartIndex] = useState(0);

    const priceMap = {
        "4 nights / 5 days": 359,
        "6 nights / 7 days": 549,
        "7 nights / 8 days": 669,
        "9 nights / 10 days": 859
    };

    const useIsMobile = () => {
        const [isMobile, setIsMobile] = useState(
            typeof window !== "undefined" && window.innerWidth < 640
        );

        useEffect(() => {
            const handleResize = () => {
                setIsMobile(window.innerWidth < 640);
            };
            window.addEventListener("resize", handleResize);
            return () => window.removeEventListener("resize", handleResize);
        }, []);

        return isMobile;
    };

    const handleTripDuration = (e) => {
        const selectedDuration = e.target.value;
        setTripDuration(selectedDuration);
        const updatedPrice = priceMap[selectedDuration];
        setPrice(updatedPrice);
        setTotalPrice(updatedPrice);
    };

    const handleNumOfChildrenChange = (e) => {
        const count = Number(e.target.value);
        setNumOfChildren(count);
        setChildrenAges(Array(count).fill(""));
        setCarouselStartIndex(0);
    };

    const handleChildAgeChange = (index, value) => {
        const updatedAges = [...childrenAges];
        updatedAges[index] = value;
        setChildrenAges(updatedAges);

        setErrors((prevErrors) => ({
            ...prevErrors,
            childrenAges: prevErrors.childrenAges?.map((err, i) =>
                i === index ? "" : err
            )
        }));
    };

    const isAnyChildAgeEmpty = childrenAges.some(age => age === "");
    const isMobile = useIsMobile();
    const maxVisible = isMobile ? 1 : 3;
    const canScrollLeft = carouselStartIndex > 0;
    const canScrollRight =
        Array.isArray(childrenAges) &&
        carouselStartIndex + maxVisible < childrenAges.length;

    const scrollLeft = () => {
        if (canScrollLeft) setCarouselStartIndex((prev) => prev - 1);
    };

    const scrollRight = () => {
        if (canScrollRight) setCarouselStartIndex((prev) => prev + 1);
    };

    const handleInputChange = (field, value) => {
        if (field === "name") setName(value);
        if (field === "email") setEmail(value);
        if (field === "phoneNumber") setPhoneNumber(value);

        setErrors((prevErrors) => ({
            ...prevErrors,
            [field]: ""
        }));
    };

    return (
        <>
            {/* Name & Email */}
            <div className="flex flex-col justify-center items-center gap-6 px-10 pt-6 pb-10 rounded-xl"
                style={{ boxShadow: "0 0 80px rgba(0, 0, 0, 0.1)" }}>
                <p className="font-semibold text-md md:text-lg text-center">Your Details 👤</p>
                <div className="flex flex-col sm:flex-row justify-center items-center gap-5 sm:gap-10">
                    <div>
                        <label className="block font-semibold text-[11px] md:text-[13px] text-gray-800 ml-2">
                            {t("booking-page.input1")}
                        </label>
                        <input
                            value={name}
                            onChange={(e) => handleInputChange("name", e.target.value)}
                            type="text"
                            placeholder={t("contact-page.placeholder1")}
                            className={`block w-58 lg:w-63 h-7 md:h-8 lg:h-9 text-xs md:text-[13px] lg:text-[14px] placeholder:text-[11px] placeholder:md:text-sm rounded-md py-1.5 px-2 ring-1 ${errors?.name ? "ring-red-500" : "ring-gray-300"
                                } bg-gray-100 text-gray-800`}
                            required
                        />
                    </div>

                    <div>
                        <label className="block font-semibold text-[11px] md:text-[13px] text-gray-800 ml-2">
                            {t("booking-page.input2")}
                        </label>
                        <input
                            value={email}
                            onChange={(e) => handleInputChange("email", e.target.value)}
                            type="text"
                            placeholder={t("contact-page.placeholder2")}
                            className={`block w-58 lg:w-63 h-7 md:h-8 lg:h-9 text-xs md:text-[13px] lg:text-[14px] placeholder:text-[11px] placeholder:md:text-sm rounded-md py-1.5 px-2 ring-1 ${errors?.email ? "ring-red-500" : "ring-gray-300"
                                } bg-gray-100 text-gray-800 placeholder:text-sm`}
                            required
                        />
                    </div>
                </div>

                <div>
                    <label className="text-left font-semibold self-start text-[11px] md:text-[13px] text-gray-800 ml-2">
                        {t("booking-page.input9")}
                    </label>
                    <input
                        value={phoneNumber}
                        onChange={(e) => handleInputChange("phoneNumber", e.target.value)}
                        type="tel"
                        placeholder="e.g. +1 234 567 890"
                        className={`block w-58 lg:w-63 h-7 md:h-8 lg:h-9 text-xs md:text-[13px] lg:text-[14px] placeholder:text-[11px] placeholder:md:text-sm rounded-md py-1.5 px-2 ring-1 ${errors?.phoneNumber ? "ring-red-500" : "ring-gray-300"
                            } bg-gray-100 text-gray-800 placeholder:text-sm`}
                        required
                    />
                </div>
            </div>



            <div className="flex flex-col gap-6 rounded-xl px-10 pt-6 pb-10 rounded-xl"
                style={{ boxShadow: "0 0 80px rgba(0, 0, 0, 0.1)" }}>
                {/* Travel Package & Duration */}
                <p className="font-semibold text-md md:text-lg text-center">Travel Details ✈</p>
                <div className="flex flex-col sm:flex-row justify-between items-center gap-5 sm:gap-10">
                    <div>
                        <label className="block font-semibold text-[11px] md:text-[13px] text-gray-800 ml-2">
                            {t("booking-page.input5")}
                        </label>
                        <select
                            value={travelPackage}
                            onChange={(e) => {
                                setTravelPackage(e.target.value);
                                setErrors((prev) => ({ ...prev, travelPackage: "" }));
                            }}
                            className="block w-58 lg:w-63 h-7 md:h-8 lg:h-9 text-xs md:text-[13px] lg:text-[14px] placeholder:text-[11px] placeholder:md:text-sm rounded-md py-1.5 px-2 ring-1 ring-gray-300 bg-gray-100 text-gray-800"
                            required
                        >
                            <option value="" disabled>
                                {t("booking-page.package-option")}
                            </option>
                            <option value="Summer Package">{t("booking-page.package-option1")}</option>
                            <option value="Winter Package" disabled>
                                {t("booking-page.package-option2")}
                            </option>
                            <option value="Honeymoon Package" disabled>
                                {t("booking-page.package-option3")}
                            </option>
                        </select>
                    </div>

                    <div>
                        <label className="block font-semibold text-[11px] md:text-[13px] text-gray-800 ml-2">
                            {t("booking-page.input6")}
                        </label>
                        <select
                            value={tripDuration}
                            onChange={handleTripDuration}
                            className="block w-58 lg:w-63 h-7 md:h-8 lg:h-9 text-xs md:text-[13px] lg:text-[14px] placeholder:text-[11px] placeholder:md:text-sm rounded-md py-1.5 px-2 ring-1 ring-gray-300 bg-gray-100 text-gray-800"
                            required
                        >
                            <option value="" disabled>
                                {t("booking-page.duration-option")}
                            </option>
                            <option value="4 nights / 5 days">{t("booking-page.duration-option1")}</option>
                            <option value="6 nights / 7 days">{t("booking-page.duration-option2")}</option>
                            <option value="7 nights / 8 days">{t("booking-page.duration-option3")}</option>
                            <option value="9 nights / 10 days">{t("booking-page.duration-option4")}</option>
                        </select>
                    </div>
                </div>

                {/* Number of Adults & Children */}
                <div className="flex flex-col sm:flex-row gap-5 sm:gap-10">
                    <div>
                        <label className="block font-semibold text-[11px] md:text-[13px] text-gray-800 ml-2">
                            {t("booking-page.input3")}
                        </label>
                        <select
                            value={numOfAdults}
                            onChange={(e) => {
                                setNumOfAdults(Number(e.target.value));
                                setErrors((prev) => ({ ...prev, numOfAdults: "" }));
                            }}
                            className={`block w-58 lg:w-63 h-7 md:h-8 lg:h-9 text-xs md:text-[13px] lg:text-[14px] placeholder:text-[11px] placeholder:md:text-sm rounded-md py-1.5 px-2 ring-1 ${errors?.numOfAdults ? "ring-red-500" : "ring-gray-300"
                                } bg-gray-100 text-gray-800 placeholder:text-sm`}
                        >
                            {[...Array(8)].map((_, i) => (
                                <option key={i + 1} value={i + 1}>
                                    {i + 1}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div>
                        <label className="block font-semibold text-[11px] md:text-[13px] text-gray-800 ml-2">
                            {t("booking-page.input4")}
                        </label>
                        <select
                            value={numOfChildren}
                            onChange={handleNumOfChildrenChange}
                            className={`block w-58 lg:w-63 h-7 md:h-8 lg:h-9 text-xs md:text-[13px] lg:text-[14px] placeholder:text-[11px] placeholder:md:text-sm rounded-md py-1.5 px-2 ring-1 ${errors?.numOfChildren ? "ring-red-500" : "ring-gray-300"
                                } bg-gray-100 text-gray-800 placeholder:text-sm`}
                        >
                            {[...Array(8)].map((_, i) => (
                                <option key={i} value={i}>
                                    {i}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

                {childrenAges.length > 0 && (
                    <div
                        className={`w-full flex justify-center items-center gap-4 overflow-hidden pb-5 pt-3 rounded-xl ${isAnyChildAgeEmpty ? "ring-1 ring-red-500" : "ring-1 ring-gray-200"
                            } bg-gray-100`}
                    >
                        <button
                            onClick={scrollLeft}
                            disabled={!canScrollLeft}
                            className={`p-1 pt-6 text-gray-600 ${!canScrollLeft ? "opacity-30 cursor-not-allowed" : ""
                                }`}
                        >
                            <ChevronLeft />
                        </button>

                        <div className="flex gap-4 overflow-hidden p-2 text-sm">
                            {childrenAges
                                .slice(carouselStartIndex, carouselStartIndex + maxVisible)
                                .map((age, index) => {
                                    const globalIndex = carouselStartIndex + index;
                                    return (
                                        <div key={globalIndex} className="flex flex-col min-w-[120px]">
                                            <label className="font-semibold text-[11px] md:text-[13px] text-gray-800 ml-2">
                                                {t("booking-page.child-age")} {globalIndex + 1}
                                            </label>
                                            <select
                                                value={age}
                                                onChange={(e) =>
                                                    handleChildAgeChange(globalIndex, e.target.value)
                                                }
                                                className={`block w-full max-w-[120px] rounded-md py-1.5 px-2 ring-1 ${errors?.childrenAges?.[globalIndex]
                                                    ? "ring-red-500"
                                                    : "ring-gray-500"
                                                    } bg-gray-100 text-gray-800`}
                                            >
                                                <option value="">--</option>
                                                {[...Array(18).keys()].map((n) => (
                                                    <option key={n} value={n}>
                                                        {n}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                    );
                                })}
                        </div>

                        <button
                            onClick={scrollRight}
                            disabled={!canScrollRight}
                            className={`p-1 pt-6 text-gray-800 ${!canScrollRight ? "opacity-30 cursor-not-allowed" : ""
                                }`}
                        >
                            <ChevronRight />
                        </button>
                    </div>
                )}



                {/* Arrival, Departure Dates & Phone */}
                <div className="flex flex-col justify-center items-center gap-6">
                    <div className="flex flex-col sm:flex-row gap-5 sm:gap-10">
                        <div className="flex flex-col">
                            <label className="font-semibold text-[11px] md:text-[13px] text-gray-800 ml-2">
                                {t("booking-page.input7")}
                            </label>
                            <DatePicker
                                selected={arrivalDate}
                                onChange={(date) => {
                                    const formattedDate = new Date(date.toISOString().split("T")[0]);
                                    setArrivalDate(formattedDate);
                                    setErrors((prev) => ({ ...prev, arrivalDate: "" }));
                                }}
                                selectsStart
                                startDate={arrivalDate}
                                endDate={departureDate}
                                dateFormat="yyyy-MM-dd"
                                minDate={new Date()}
                                className={`block w-58 lg:w-63 h-7 md:h-8 lg:h-9 text-xs md:text-[13px] lg:text-[14px] placeholder:text-[11px] placeholder:md:text-sm rounded-md py-1.5 px-2 h-[35px] ring-1 ${errors?.arrivalDate ? "ring-red-500" : "ring-gray-100"
                                    } bg-gray-100 text-gray-800 placeholder:text-sm`}
                                required
                            />
                        </div>

                        <div className="flex flex-col">
                            <label className="font-semibold text-[11px] md:text-[13px] text-gray-800 ml-2">
                                {t("booking-page.input8")}
                            </label>
                            <DatePicker
                                selected={departureDate}
                                onChange={(date) => {
                                    const formattedDate = new Date(date.toISOString().split("T")[0]);
                                    setDepartureDate(formattedDate);
                                    setErrors((prev) => ({ ...prev, departureDate: "" }));
                                }}
                                selectsEnd
                                startDate={arrivalDate}
                                endDate={departureDate}
                                dateFormat="yyyy-MM-dd"
                                minDate={arrivalDate || new Date()}
                                className={`block w-58 lg:w-63 h-7 md:h-8 lg:h-9 text-xs md:text-[13px] lg:text-[14px] placeholder:text-[11px] placeholder:md:text-sm rounded-md py-1.5 h-[35px] px-2 ring-1 ${errors?.departureDate ? "ring-red-500" : "ring-gray-100"
                                    } bg-gray-100 text-gray-800 placeholder:text-sm`}
                                required
                            />
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default BookingInputs;
