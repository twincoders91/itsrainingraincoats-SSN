/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef } from "react";

import { capitaliseFirstLetter } from "./utility";

export default function ItemRequestItemButton(props) {
  const buttonRef = useRef();

  useEffect(() => {
    if (props.selectedItem === props.name) {
      buttonRef.current.classList.add("button-active");
    } else {
      buttonRef.current.classList.remove("button-active");
    }
  }, []);

  const handleButtonClick = () => {
    props.setSelectedItem(props.name);
  };

  return (
    <div className="col">
      <button
        className="row request-icon-button mb-1"
        ref={buttonRef}
        onClick={handleButtonClick}
        // onMouseEnter={() => {
        //   buttonRef.current.classList.add("button-hover");
        // }}
        // onMouseLeave={() => {
        //   buttonRef.current.classList.remove("button-hover");
        // }}
      >
        <img src={require(`../assets/${props.icon}`)} alt="" />
      </button>
      <span className="request-subsubtitleText request-icon-text fw-600">
        {capitaliseFirstLetter(props.name)}
      </span>
    </div>
  );
}
