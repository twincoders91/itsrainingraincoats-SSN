import React from "react";
import home from "../assets/homeunfilled.png";
import applicationunfilled from "../assets/applicationunfilled.png";
import moredots from "../assets/moredots.png";

const NavBar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar-individual-boxes">
        <div className="navbar-icon-box">
          <img src={home} className="navbar-icon" alt="navbaricons" />
        </div>
        <p className="navbar-fonts">Home</p>
      </div>
      <div className="navbar-individual-boxes">
        <div className="navbar-icon-box">
          <img
            src={applicationunfilled}
            className="navbar-icon"
            alt="navbaricons"
          />
        </div>
        <p className="navbar-fonts">Application</p>
      </div>
      <div className="navbar-individual-boxes">
        <div className="navbar-icon-box">
          <img src={moredots} className="navbar-icon" alt="navbaricons" />
        </div>
        <p className="navbar-fonts">More</p>
      </div>
    </div>
  );
};

export default NavBar;
