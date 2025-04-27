import React from "react";

const Loader = () => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="w-5 h-5 border-3 border-t-transparent border-green-500 rounded-full animate-spin" />
    </div>
  );
};

export default Loader;
