import React, { useContext } from "react";
import { NavLink } from "react-router-dom";

import union from "./assets/union.svg";
import irrlogo from "./assets/irrlogo.svg";
import Context from "./context/context";

const Header = () => {
  // should header have 2 views, generic and top navigation?

  const context = useContext(Context);

  // logout function: when user clicks button to logout, clear all localStorage and setLogOut true
  const logout = () => {
    localStorage.clear();
    context.setUserId("");
    context.setPersona("");
    context.setRefreshToken("");
    context.setIsLoggedIn(false);
  };

  return (
    <div className="Navbar">
      <div className="nav-middle-item">
        <img className="nav-logo-image" src={irrlogo} alt="raincoatlogo" />
      </div>
      <div className="nav-left-item">
        <NavLink to="/">
          <img
            src={union}
            className="nav-user-icon"
            alt="user-profile"
            onClick={logout}
          />
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
