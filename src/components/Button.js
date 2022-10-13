import React from "react";
import { useRef } from "react";
import { useEffect } from "react";

export default function Button(props) {
  const buttonRef = useRef();

  useEffect(() => {
    if (props.activeButton === props.id) {
      buttonRef.current.classList.add("button-active");
    } else {
      buttonRef.current.classList.remove("button-active");
    }
  }, [props.activeButton]);
  const handleButtonClick = (event) => {
    props.setActiveButton(props.id);
  };

  return (
    <button
      className={props.className}
      onClick={handleButtonClick}
      ref={buttonRef}
    >
      {props.children}
    </button>
  );
}
