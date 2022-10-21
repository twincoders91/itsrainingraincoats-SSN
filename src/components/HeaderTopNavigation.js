import React from "react";

import { capitaliseFirstLetter } from "./utility";
import { ReactComponent as Left } from "../assets/left.svg";
import { ReactComponent as Home } from "../assets/home.svg";

export default function HeaderTopNavigation(props) {
  const handleBackClick = () => {
    props.setCurrentPage(props.pageHistory[0]);
    const pageHistory = props.pageHistory;
    pageHistory.splice(0, 1);
    props.setPageHistory(pageHistory);
  };
  const handleHomeClick = () => {
    props.setDisplayModal(true);
  };

  return (
    <div className="row header-container">
      {props.pageHistory[0] === "home" ? null : (
        <Left className="cursor" onClick={handleBackClick} />
      )}
      <p className="header-titleText">{capitaliseFirstLetter(props.text)}</p>
      {props.home && (
        <Home
          className="cursor"
          style={{ alignSelf: "center" }}
          onClick={handleHomeClick}
        />
      )}
    </div>
  );
}
