import React from "react";

const AlertBox = ({ message }) => {
  return (
    <div className="absolute top-[110%] w-[80%] left-1/2 transform -translate-x-1/2 text-white text-[12px] font-semibold mt-2">
      {message}
    </div>
  );
};

export default AlertBox;
