import React, { useEffect } from "react";

const AlertBox = ({ message, onClose, textColor = "text-red-600" }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      if (typeof onClose === "function") {
        onClose();
      }
    }, 3000);
    return () => clearTimeout(timer);
  }, [message, onClose]);

  return (
    <div className="absolute top-full mt-2 text-center z-10 flex justify-center items-center">
      <span className={`text-[14px] font-semibold ${textColor}`}>
        {message}
      </span>
    </div>
  );
};

export default AlertBox;
