import React from "react";
import { UilEstate } from "@iconscout/react-unicons";
import { UilClipboardAlt } from "@iconscout/react-unicons";
import { UilEllipsisH } from "@iconscout/react-unicons";

const NavBar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar-individual-boxes">
        <div className="navbar-icon-box">
          <UilEstate className="navbar-icon" />
        </div>
        <p className="navbar-fonts">Home</p>
      </div>
      <div className="navbar-individual-boxes">
        <div className="navbar-icon-box">
          <UilClipboardAlt className="navbar-icon" />
        </div>
        <p className="navbar-fonts">Application</p>
      </div>
      <div className="navbar-individual-boxes">
        <div className="navbar-icon-box">
          <UilEllipsisH className="navbar-icon" />
        </div>
        <p className="navbar-fonts">More</p>
      </div>
    </div>
  );
};

export default NavBar;
