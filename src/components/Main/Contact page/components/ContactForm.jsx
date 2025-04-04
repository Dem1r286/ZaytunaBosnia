import React, { useState } from "react";

const ContactForm = ({ 
    className = "", 
    messagePlaceholder = "e.g. I would like to inquire about...", 
    messageLabel = "Your Message", 
    messageButton = "Send Message" 
}) => {
    // State for form inputs
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });
    
    // State for success/error messages
    const [status, setStatus] = useState("");

    // Handle input change
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent page reload

        try {
            const response = await fetch("http://localhost:5000/send-email", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const data = await response.json();
            if (response.ok) {
                setStatus("Message sent successfully!");
                setFormData({ name: "", email: "", message: "" }); // Clear form
            } else {
                setStatus("Failed to send message.");
            }
        } catch (error) {
            console.error("Error:", error);
            setStatus("Error sending message.");
        }
    };

    return (
        <form 
            className={`flex justify-center items-center flex-col gap-8 ${className}`}
            onSubmit={handleSubmit}
        >
            <div>
                <label htmlFor="name" className="block font-semibold text-[13px] ml-2 text-gray-800">
                    Your Name
                </label>
                <input
                    type="text"
                    name="name"
                    placeholder="e.g. John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    className="block w-72 rounded-md py-1.5 px-2 ring-1 ring-gray-300 bg-gray-100 text-gray-800 placeholder:text-sm"
                    required
                />
            </div>

            <div>
                <label htmlFor="email" className="block font-semibold text-[13px] ml-2 text-gray-800">
                    Your Email
                </label>
                <input
                    type="email"
                    name="email"
                    placeholder="e.g. johndoe@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="block w-72 rounded-md py-1.5 px-2 ring-1 ring-gray-300 bg-gray-100 text-gray-800 placeholder:text-sm"
                    required
                />
            </div>

            <div>
                <label htmlFor="message" className="block font-semibold text-[13px] ml-2 text-gray-800">
                    {messageLabel}
                </label>
                <textarea
                    name="message"
                    rows="4"
                    placeholder={messagePlaceholder}
                    value={formData.message}
                    onChange={handleChange}
                    className="block w-72 rounded-md py-1.5 px-2 ring-1 ring-gray-300 bg-gray-100 text-gray-800 resize-none placeholder:text-sm"
                    required
                ></textarea>
            </div>

            <div className="flex justify-center">
                <button 
                    type="submit"
                    className="px-3 py-2 mt-4 text-sm font-semibold text-white bg-green-500 shadow-md rounded-md 
                                   flex items-center gap-1 transition-transform duration-300 hover:scale-105 active:scale-95">
                    <span>{messageButton}</span>
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

            {/* Show Success/Error Message */}
            {status && <p className="text-sm mt-2 text-gray-800">{status}</p>}
        </form>
    );
};

export default ContactForm;
