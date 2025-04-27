import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useTranslation } from "react-i18next";

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
    setPhoneNumber
}) => {
    const { t, i18n } = useTranslation("global");
    return (
        <>
            <div className="flex flex-row gap-10">
                <div>
                    <label className="block font-semibold text-[13px] text-gray-800 ml-2">
                    {t("booking-page.input1")}
                    </label>
                    <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        type="text"
                        placeholder={t("contact-page.placeholder1")}
                        className="block w-72 rounded-md py-1.5 px-2 ring-1 ring-gray-300 bg-gray-100 text-gray-800 placeholder:text-sm"
                    />
                </div>

                <div>
                    <label className="block font-semibold text-[13px] text-gray-800 ml-2">
                    {t("booking-page.input2")}
                    </label>
                    <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="text"
                        placeholder={t("contact-page.placeholder2")}
                        className="block w-72 rounded-md py-1.5 px-2 ring-1 ring-gray-300 bg-gray-100 text-gray-800 placeholder:text-sm"
                    />
                </div>
            </div>

            {/* Number of Adults & Children */}
            <div className="flex flex-row gap-10">
                <div>
                    <label className="block font-semibold text-[13px] text-gray-800 ml-2">
                    {t("booking-page.input3")}
                    </label>
                    <select
                        value={numOfAdults}
                        onChange={(e) => setNumOfAdults(Number(e.target.value))}
                        className="block w-72 rounded-md py-1.5 px-2 ring-1 ring-gray-300 bg-gray-100 text-gray-800"
                    >
                        {[...Array(10)].map((_, i) => (
                            <option key={i + 1} value={i + 1}>
                                {i + 1}
                            </option>
                        ))}
                    </select>
                </div>

                <div>
                    <label className="block font-semibold text-[13px] text-gray-800 ml-2">
                    {t("booking-page.input4")}
                    </label>
                    <select
                        value={numOfChildren}
                        onChange={(e) => setNumOfChildren(Number(e.target.value))}
                        className="block w-72 rounded-md py-1.5 px-2 ring-1 ring-gray-300 bg-gray-100 text-gray-800"
                    >
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
                    {t("booking-page.input5")}
                    </label>
                    <select
                        value={travelPackage}
                        onChange={(e) => setTravelPackage(e.target.value)}
                        className="block w-72 rounded-md py-1.5 px-2 ring-1 ring-gray-300 bg-gray-100 text-gray-800 text-[15px]"
                    >
                        <option value="" disabled>
                        {t("booking-page.package-option")}
                        </option>
                        <option value="Summer Package">{t("booking-page.package-option1")}</option>
                        <option value="Winter Package">{t("booking-page.package-option2")}</option>
                        <option value="Honeymoon Package">{t("booking-page.package-option3")}</option>
                    </select>
                </div>

                <div>
                    <label className="block font-semibold text-[13px] text-gray-800 ml-2">
                    {t("booking-page.input6")}
                    </label>
                    <select
                        value={tripDuration}
                        onChange={(e) => setTripDuration(e.target.value)}
                        className="block w-72 rounded-md py-1.5 px-2 ring-1 ring-gray-300 bg-gray-100 text-gray-800 text-[15px]"
                    >
                        <option value="" disabled>
                        {t("booking-page.duration-option")}
                        </option>
                        <option value="4 nights / 5 days">{t("booking-page.duration-option1")}</option>
                        <option value="5 nights / 6 days">{t("booking-page.duration-option2")}</option>
                        <option value="7 nights / 8 days">{t("booking-page.duration-option3")}</option>
                    </select>
                </div>
            </div>

            {/* Arrival and Departure Dates */}
            <div className="flex flex-col justify-center items-center gap-6">
                {/* Row: Arrival & Departure */}
                <div className="flex gap-10">
                    <div className="flex flex-col">
                        <label className="font-semibold text-[13px] text-gray-800 ml-2">
                        {t("booking-page.input7")}
                        </label>
                        <DatePicker
                            selected={arrivalDate}
                            onChange={(date) => setArrivalDate(date)}
                            selectsStart
                            startDate={arrivalDate}
                            endDate={departureDate}
                            dateFormat="yyyy-MM-dd"
                            showTimeSelect={false}
                            minDate={new Date()}
                            className="border border-gray-300 p-2 rounded-md bg-gray-100 text-gray-800 h-[35px]"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label className="font-semibold text-[13px] text-gray-800 ml-2">
                        {t("booking-page.input8")}
                        </label>
                        <DatePicker
                            selected={departureDate}
                            onChange={(date) => setDepartureDate(date)}
                            selectsEnd
                            startDate={arrivalDate}
                            endDate={departureDate}
                            dateFormat="yyyy-MM-dd"
                            showTimeSelect={false}
                            minDate={arrivalDate || new Date()}
                            className="border border-gray-300 p-2 rounded-md bg-gray-100 text-gray-800 h-[35px]"
                        />
                    </div>
                </div>

                {/* Phone Number below */}
                <div className="flex flex-col w-full items-center">
                    <label className="block font-semibold text-[13px] text-gray-800 ml-2">
                    {t("booking-page.input9")}
                    </label>
                    <input
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        type="tel"
                        placeholder="e.g. +1 234 567 890"
                        className="block w-72 rounded-md py-1.5 px-2 ring-1 ring-gray-300 bg-gray-100 text-gray-800 placeholder:text-sm"
                    />
                </div>
            </div>
        </>
    );
};

export default BookingInputs;
