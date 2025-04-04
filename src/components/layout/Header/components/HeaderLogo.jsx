import React from "react";
import { Link } from "react-router-dom";

const HeaderLogo = () => {
    return (
      <Link to="/" id="header-logo" className="flex items-center justify-center gap-6">
        <img src="src/assets/logo.png" className="w-13" alt="Logo" />
        <p
          className="text-xl font-semibold tracking-wider"
          style={{ fontFamily: "'Italiana', serif" }}
        >
          ZAYTUNA
        </p>
      </Link>
    );
  };

  export default HeaderLogo;