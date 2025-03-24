import React, { useState } from "react";
import "./Whatsapp.css";

const Whatsapp = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href="https://wa.me/38761353525"
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-container"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src="./src/assets/whatsapp.png"
        alt="WhatsApp ikona"
        className={`whatsapp-icon ${isHovered ? "rotate" : ""}`}
      />
      <div className="whatsapp-paragraph">
        <p>Contact Us</p>
      </div>
    </a>
  );
};

export default Whatsapp;
