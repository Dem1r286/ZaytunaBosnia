import React, { useEffect } from "react";

const AlertBox = ({ message, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);
    return () => clearTimeout(timer); 
  }, [message, onClose]);

  return (
    <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-black text-[12px] font-semibold px-4 py-2 rounded-md">
      {message}
    </div>
  );
};

export default AlertBox;
