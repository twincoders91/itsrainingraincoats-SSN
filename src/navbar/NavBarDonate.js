import React from "react";
import returnicon from "../assets/returnicon.png";

const NavBarDonate = () => {
  return (
    <div>
      <div className="main-header-container">
        <div className="Navbar-donate">
          <div className="donate-header-box">
            <img
              src={returnicon}
              alt="returnicon"
              className="return-icon"
            ></img>
            <h1 className="donate-header-font">Donate</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBarDonate;
