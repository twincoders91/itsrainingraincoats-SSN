import React from "react";
import union from "./assets/union.png";
import irrlogo from "./assets/irrlogo.png";

const Header = () => {
  return (
    <div className="Navbar">
      <div className="nav-middle-item">
        <img className="nav-logo-image" src={irrlogo} alt="raincoatlogo" />
      </div>
      <div className="nav-left-item">
        <img src={union} className="nav-user-icon" alt="user-profile" />
      </div>
    </div>
  );
};

export default Header;
