import React from "react";

export default function ItemRequestCategoryButton(props) {
  const handleButtonClick = () => {
    props.setCurrentPage(props.category);
    props.setCategoryItems([...props.items]);
  };

  return (
    <div className="col">
      <button
        className="row request-icon-button mb-1"
        onClick={handleButtonClick}
      >
        <img src={require(`../assets/${props.icon}`)} alt="" />
      </button>
      <span className="request-subsubtitleText request-icon-text fw-600">
        {props.name}
      </span>
    </div>
  );
}
