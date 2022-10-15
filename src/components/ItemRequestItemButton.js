import React from "react";

import { capitaliseFirstLetter } from "./utility";

export default function ItemRequestItemButton(props) {
  return (
    <div className="col">
      <button className="row request-icon-button mb-1">
        <img src={require(`../assets/${props.icon}`)} alt="" />
      </button>
      <span className="request-subsubtitleText request-icon-text fw-600">
        {capitaliseFirstLetter(props.name)}
      </span>
    </div>
  );
}
