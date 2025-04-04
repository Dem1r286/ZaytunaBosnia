import React, { useState } from "react";
import axios from "axios";
import AlertBox from "./AlertBox";

const Newsletter = () => {
  const [formEmail, setFormEmail] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const handleChange = (e) => {
    setFormEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!formEmail) {
      setAlertMessage("Please enter a valid email.");
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 3000);
      return;
    }
  
    try {
      const response = await axios.post("http://localhost:5000/subscribe", {
        email: formEmail,
      });
  
  
      if (response.status === 201) { 
        setAlertMessage("Thank you for subscribing!");
        setFormEmail("");
      } else {
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
  };
  

  return (
    <div className="flex flex-col justify-center items-center gap-4 mt-6">
      <div className="flex justify-center items-center flex-col text-center">
        <h6 className="font-semibold text-xl mb-2">Get Inspired Weekly</h6>
        <p className="text-xs font-semibold mb-4">
          Join our community and be the first to know! Get exclusive <br /> 
          updates, travel tips, and handpicked recommendations!
        </p>

        <div className="relative flex flex-col items-center">
          <div className="flex">
            <input
              type="email"
              placeholder="Enter email"
              className="w-[250px] bg-white rounded-l-lg px-4 py-2 text-sm placeholder-black text-black"
              value={formEmail}
              onChange={handleChange}
            />
            <button
              className="w-[100px] text-white bg-gray-800 py-2 rounded-r-lg text-sm text-center cursor-pointer"
              onClick={handleSubmit}
            >
              Subscribe
            </button>
          </div>
          {showAlert && <AlertBox message={alertMessage} />}
        </div>
      </div>

      <div className="mt-6">
        <p className="font-semibold text-lg">Connect With Us</p>
        <div className="flex flex-row gap-4 justify-center items-center mt-2">
          <a
            href="https://www.instagram.com/zaytuna_bosnia/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/src/assets/instagram.png"
              className="w-6 cursor-pointer"
              alt="Instagram"
            />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61554220794223"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/src/assets/facebook.png"
              className="w-6 cursor-pointer"
              alt="Facebook"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
