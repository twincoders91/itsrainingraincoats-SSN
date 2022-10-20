import React from "react";
import home from "../assets/homeunfilled2.svg";
import applicationunfilled from "../assets/applicationunfilled.svg";
import moredots from "../assets/moredots.png";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navbar-container mt-4">
      <div className="navbar-individual-boxes">
        <div className="navbar-icon-box">
          <Link to="/home">
            <img src={home} className="navbar-icon-home" alt="navbaricons" />
          </Link>
        </div>
        <p className="navbar-fonts">Home</p>
      </div>
      <div className="navbar-individual-boxes">
        <div className="navbar-icon-box">
          <Link to="/donate-application">
            <img
              src={applicationunfilled}
              className="navbar-icon"
              alt="navbaricons"
            />
          </Link>
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
