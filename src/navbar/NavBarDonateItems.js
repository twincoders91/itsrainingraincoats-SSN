import React from "react";
import { Link } from "react-router-dom";

import homeunfilled from "../assets/homeunfilled.svg";
import returnicon from "../assets/returnicon.png";

const NavBarDonateItems = (props) => {
  const { donateCategoryPopulate } = props;

  return (
    <div>
      <div className="main-header-container">
        <div className="Navbar-donate">
          <div className="donate-header-box">
            <Link to="/donate">
              <img
                src={returnicon}
                alt="returnicon"
                className="return-icon"
              ></img>
            </Link>
            <h1 className="donate-header-font">{`Donate ${donateCategoryPopulate.title}`}</h1>
          </div>
        </div>
        <div>
          <img
            src={homeunfilled}
            className="nav-user-icon"
            alt="user-profile"
          />
        </div>
      </div>
    </div>
  );
};

export default NavBarDonateItems;
