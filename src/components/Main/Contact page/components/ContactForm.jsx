import React from "react";

const ContactForm = ({ 
    className = "", 
    messagePlaceholder = "e.g. I would like to inquire about...", 
    messageLabel = "Your Message", 
    messageButton = "Send Message" 
}) => {
    return (
        <div className={`flex justify-center items-center flex-col gap-8 ${className}`}>
            <div>
                <label htmlFor="inputname" className="block font-semibold text-[13px] ml-2 text-gray-800">
                    Your Name
                </label>
                <input
                    type="text"
                    name="inputname"
                    placeholder="e.g. John Doe"
                    className="block w-72 rounded-md py-1.5 px-2 ring-1 ring-gray-300 bg-gray-100 text-gray-800 placeholder:text-sm"
                />
            </div>

            <div>
                <label htmlFor="inputemail" className="block font-semibold text-[13px] ml-2 text-gray-800">
                    Your Email
                </label>
                <input
                    type="email"
                    name="inputemail"
                    placeholder="e.g. johndoe@example.com"
                    className="block w-72 rounded-md py-1.5 px-2 ring-1 ring-gray-300 bg-gray-100 text-gray-800 placeholder:text-sm"
                />
            </div>

            <div>
                <label htmlFor="inputmessage" className="block font-semibold text-[13px] ml-2 text-gray-800">
                    {messageLabel}
                </label>
                <textarea
                    name="inputmessage"
                    rows="4"
                    placeholder={messagePlaceholder}
                    className="block w-72 rounded-md py-1.5 px-2 ring-1 ring-gray-300 bg-gray-100 text-gray-800 resize-none placeholder:text-sm"
                ></textarea>
            </div>

            <div className="flex justify-center">
                <button className="px-3 py-2 mt-4 text-sm font-semibold text-white bg-green-500 shadow-md rounded-md 
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
        </div>
    );
};

export default ContactForm;
