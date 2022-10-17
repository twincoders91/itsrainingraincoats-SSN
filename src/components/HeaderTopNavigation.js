import React from "react";
import { NavLink } from "react-router-dom";

import { capitaliseFirstLetter } from "./utility";
import { ReactComponent as Left } from "../assets/left.svg";
import { ReactComponent as Home } from "../assets/home.svg";

export default function HeaderTopNavigation(props) {
  const handleBackClick = () => {
    props.setCurrentPage(props.previousPage);
  };

  return (
    <div className="row header-container">
      {props.previousPage === "home" ? (
        <NavLink to="/home" className="row">
          <Left className="cursor" />
        </NavLink>
      ) : (
        <Left className="cursor" onClick={handleBackClick} />
      )}
      <p className="header-titleText">{capitaliseFirstLetter(props.text)}</p>
      <NavLink to="/home" className="row">
        <Home className="cursor" style={{ alignSelf: "center" }} />
      </NavLink>
    </div>
  );
}
