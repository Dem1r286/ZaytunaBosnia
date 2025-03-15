import React from "react";

const ServiceCard = ({ url, heading, description }) => (
    <div className="flex flex-col w-[350px] h-[400px] bg-gradient-to-b from-[#155dfc] to-[#0b3ea8] rounded-3xl shadow-lg justify-center items-center px-4 py-6">
        <img src={url} className="w-[250px] h-[200px] object-cover" alt={heading} />
        <p className="text-white font-semibold text-lg mt-4">{heading}</p>
        <p className="text-white text-sm text-center px-2 mt-2">{description}</p>
    </div>
);

const Services = () => {
    const services = [
        { heading: "Transportation", url: "./src/assets/transportation.png", description: "Tours for individuals or groups (private cars & buses)" },
        { heading: "Hotel & Accommodation", url: "./src/assets/hotel.png", description: "Comfortable stays for all budgets" },
        { heading: "Flight Booking", url: "./src/assets/flightbooking.png", description: "Find the best flight deals for any budget and destination with ease" },
        { heading: "Airport-Hotel Transfers", url: "./src/assets/transfer.png", description: "Seamless transfers between your hotel and the airport" },
        { heading: "Travel Guides", url: "./src/assets/travelguide.png", description: "Easily explore new destinations with our expert travel guides" },
        { heading: "Travel Advice", url: "./src/assets/traveladvice.png", description: "Get the best tips on when to visit, local services, visa requirements, and more. Feel free to ask!" },
        { heading: "Travel Insurance", url: "./src/assets/travelinsurance.png", description: "Coverage for trip cancellations, medical emergencies, and more. Travel with peace of mind!" },
    ];

    return (
        <div className="flex flex-col items-center gap-20">
            <h4 className="text-3xl font-semibold">Services</h4>
            <div className="flex flex-wrap justify-center items-center gap-10">
                {services.map((service) => (
                    <ServiceCard key={service.heading} {...service} />
                ))}
            </div>
        </div>
    );
};

export default Services;
