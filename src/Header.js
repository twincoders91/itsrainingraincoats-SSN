import React from "react";
import union from "./assets/union.svg";
import irrlogo from "./assets/irrlogo.svg";

const Header = () => {
  // should header have 2 views, generic and top navigation?

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
