import React from "react";
import returnicon from "../assets/returnicon.png";
import { Link } from "react-router-dom";

const NavBarDonate = () => {
  return (
    <div>
      <div className="main-header-container">
        <div className="Navbar-donate">
          <div className="donate-header-box">
            <Link to="/home">
              <img
                src={returnicon}
                alt="returnicon"
                className="return-icon"
              ></img>
            </Link>
            <h1 className="donate-header-font">Donate</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBarDonate;
