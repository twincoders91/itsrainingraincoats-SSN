import React from "react";

export default function Button(props) {
  const handleButtonClick = (event) => {
    props.setActiveButton(props.id);
  };

  return (
    <button className={props.className} onClick={handleButtonClick}>
      {props.children}
    </button>
  );
}
