import React from "react";
import { useState } from "react";
import axios from "axios";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  
    return (
        <>
        <div className="flex flex-col text-center">
          <h6 className="font-semibold text-xl mb-2">Get Inspired Weekly</h6>
          <p className="text-xs font-semibold mb-4">
            Join our community and be the first to know! Get exclusive <br />{" "}
            updates, travel tips, and handpicked recommendations!
          </p>

          <div className="flex flex-row items-center justify-center">
            <input
              type="text"
              placeholder="Enter email"
              className="w-[250px] bg-white rounded-l-lg px-4 py-2 text-sm placeholder-black text-black"
            />
            <button className="w-[100px] text-white bg-gray-800 py-2 rounded-r-lg text-sm text-center cursor-pointer">
              Subscribe
            </button>
          </div>

          <div className="mt-6">
            <p className="font-semibold text-lg">Connect With Us</p>
            <div className="flex flex-row gap-4 justify-center items-center mt-2">
              <img
                src="./src/assets/instagram.png"
                className="w-6 cursor-pointer"
                alt="Instagram"
              />
              <img
                src="./src/assets/facebook.png"
                className="w-6 cursor-pointer"
                alt="Facebook"
              />
            </div>
          </div>
        </div>
        </>
    );
}

export default Newsletter;