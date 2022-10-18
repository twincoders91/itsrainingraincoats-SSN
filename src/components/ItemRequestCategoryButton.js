import React, { useRef } from "react";

export default function ItemRequestCategoryButton(props) {
  const buttonRef = useRef();

  const handleButtonClick = () => {
    props.setCurrentPage("category");
    props.setCategory(props.category);
    props.setPageHistory((prevState) => ["addItem", ...prevState]);
  };

  return (
    <div className="col">
      <button
        className="row request-icon-button mb-1"
        ref={buttonRef}
        onClick={handleButtonClick}
        onMouseEnter={() => {
          buttonRef.current.classList.add("button-active");
        }}
        onMouseLeave={() => {
          buttonRef.current.classList.remove("button-active");
        }}
      >
        <img src={require(`../assets/${props.icon}`)} alt="" />
      </button>
      <span className="request-subsubtitleText request-icon-text fw-600">
        {props.name}
      </span>
    </div>
  );
}
