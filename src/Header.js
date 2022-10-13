import React from "react";
import { UilUserCircle } from "@iconscout/react-unicons";
import raincoat from "./assets/raincoat.png";

const Header = () => {
  return (
    <div className="Navbar">
      <div className="nav-middle-item">
        <img className="nav-logo-image" src={raincoat} alt="raincoatlogo" />
        <span className="nav-logo">ItsRainingRaincoats</span>
      </div>
      <div className="nav-left-item">
        <UilUserCircle className="nav-user-icon" />
      </div>
    </div>
  );
};

export default Header;
